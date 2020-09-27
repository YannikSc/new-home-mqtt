<template>
  <AppContainer>
    <template v-slot:content>
      <h1>
        <trans string="menu.title_devices"/>
      </h1>

      <AppListing @set-active-component="onSetActiveComponent"/>
    </template>
  </AppContainer>
</template>

<script>
import AppListing from '../template/AppListing.vue';
import AppContainer from '../molecules/AppContainer.vue';

export default {
  name: "AppListingView",
  components: { AppListing, AppContainer },
  emits: ['set-active-component'],
  methods: {
    onSetActiveComponent(app) {
      this.$emit('set-active-component', app);
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: 500;
}
</style>
