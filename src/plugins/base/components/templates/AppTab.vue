<template>
  <div ref="tab" class="app-tab" :style="{'--app-tab--height': height}" :class="{active}">
    <slot :active="active"/>
  </div>
</template>

<script>

export default {
  name: "AppTab",
  props: {
    title: String,
    active: Boolean
  },
  data() {
    return {
      height: '0px'
    };
  },
  mounted() {
    this.updateHeight();
  },
  watch: {
    active() {
      this.updateHeight();
    }
  },
  methods: {
    updateHeight() {
      this.height = this.$refs.tab.scrollHeight + 'px';

      setTimeout(() => {
        this.height = 'auto';
      }, 500);
    }
  }
};
</script>

<style scoped>
.app-tab {
  --app-tab--height: 0;

  height: 0;
  transition: height .5s;
  overflow: hidden;
}

.app-tab.active {
  height: var(--app-tab--height);
}
</style>
