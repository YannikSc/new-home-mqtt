<template>
  <AppContainer>
    <template v-slot:content>
      <h1>
        <trans string="app.settings.title"></trans>
      </h1>
    </template>
  </AppContainer>
</template>

<script>
import AppContainer from '../molecules/AppContainer.vue';
import {Cog} from 'mdue';

export default {
  name: 'AppSettingsView',
  components: { AppContainer },
  icon: Cog
};
</script>

<style scoped>
</style>
