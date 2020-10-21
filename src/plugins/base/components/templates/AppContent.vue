<template>
  <component :is="focusedComponent" v-bind="componentData"></component>
</template>

<script>
import AppListingView from '../views/AppListingView.vue';

export default {
  name: 'AppContent',
  props: {
    focusedComponent: {
      type: [Object, String],
      default: AppListingView,
    },
    componentData: {
      type: Object,
      default: {},
    },
  },
};
</script>
