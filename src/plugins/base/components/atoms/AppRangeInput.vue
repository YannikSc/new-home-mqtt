<template>
  <div class="slider" @mousedown.prevent="onStartDrag" @touchstart.prevent="onStartDrag"
       :style="'--value: ' + (value * 100) + '%' ">
    <p class="slider--title">
      <slot></slot>
    </p>

    <div class="slider--bar" ref="bar">
      <div class="slider--handle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRangeInput',
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    modelValue: Number,
  },
  data(props) {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onStopDrag = this.onStopDrag.bind(this);

    let value = (props.modelValue || 0) - props.min;
    value = value / (props.max - props.min);
    if (value < 0) {
      value = 0;
    }

    return {
      value,
    };
  },
  methods: {
    onStartDrag(event) {
      event.preventDefault();

      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('touchmove', this.onMouseMove);
      window.addEventListener('mouseup', this.onStopDrag, {once: true});
      window.addEventListener('touchend', this.onStopDrag, {once: true});
      window.addEventListener('touchcancel', this.onStopDrag, {once: true});
      window.addEventListener('mouseleave', this.onStopDrag, {once: true});
      window.addEventListener('contextmenu', this.onStopDrag, {once: true});
    },
    onStopDrag() {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('touchmove', this.onMouseMove);
    },
    onMouseMove(event) {
      event.preventDefault();

      let { clientX } = (event.touches || [])[0] || event;
      let {
        left,
        width,
      } = this.$refs.bar.getBoundingClientRect();

      let pos = clientX - left;

      if (pos < 0) {
        pos = 0;
      }

      if (pos > width) {
        pos = width;
      }

      this.value = pos / width;

      this.$emit('update:modelValue', Math.ceil((this.max - this.min) * this.value) + this.min);
    },
  },
  watch: {
    modelValue(updated) {
      let value = (updated || 0) - this.min;
      value = value / (this.max - this.min);

      if (value < 0) {
        this.value = 0;

        return;
      }

      this.value = value;
    },
  },
};
</script>

<style scoped>
.slider {
  padding: 0 0.5em 1em;
  --value: 0;
}

.slider--title {
  margin: 0.5em 0 1em;
}

.slider--bar {
  align-items: center;
  background-color: var(--color--shade-medium);
  border-radius: 0.25em;
  display: flex;
  height: 0.5em;
  position: relative;
  width: 100%;
  z-index: 1;
}

.slider--handle {
  background-color: var(--color--shade-normal);
  border-radius: 0.25em;
  height: 1.2em;
  left: var(--value);
  margin-left: -0.25em;
  position: absolute;
  width: 0.5em;
  z-index: 1;
}
</style>
