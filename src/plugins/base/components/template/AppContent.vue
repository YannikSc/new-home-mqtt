<template>
  <component :is="focusedComponent"></component>
</template>

<script>
import AppListingView from '../views/AppListingView.vue';

export default {
  name: "AppContent",
  props: {
    focusedComponent: { type: [Object, String], default: AppListingView }
  }
};
</script>
