<template>
  <AppContainer>
    <template v-slot:content>
      <h1>
        <trans string="menu.title_apps"/>
      </h1>

      <AppListing @set-active-component="onSetActiveComponent"/>
    </template>
  </AppContainer>
</template>

<script>
import AppListing from '../template/AppListing.vue';
import AppContainer from '../molecules/AppContainer.vue';
import { Apps } from 'mdue';

export default {
  name: "AppListingView",
  components: { AppListing, AppContainer },
  emits: ['set-active-component'],
  icon: Apps,
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
