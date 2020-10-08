<template>
  <div class="app-collapse" :class="{collapsed}" :style="{'--app-collapse--height': height}"
       @resize="height = $refs.collapseBody.scrollHeight">
    <AppButton @click="onToggleCollapse">{{ title }}</AppButton>

    <div class="app-collapse--content" ref="collapseBody">
      <slot/>
    </div>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton.vue';

export default {
  name: "AppCollapse",
  components: { AppButton },
  props: {
    title: String,
    open: Boolean
  },
  data(props) {
    return {
      collapsed: !props.open,
      height: '0px'
    };
  },
  mounted() {
    this.height = this.$refs.collapseBody.scrollHeight + 'px';
  },
  methods: {
    onToggleCollapse() {
      this.height = this.$refs.collapseBody.scrollHeight + 'px';
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style scoped>

.app-collapse--content {
  height: var(--app-collapse--height, 0px);
  overflow: hidden;
  transition: height .5s;
}

.app-collapse.collapsed .app-collapse--content {
  height: 0;
}

</style>
