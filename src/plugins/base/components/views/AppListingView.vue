<template>
  <el-row>
    <el-col v-bind="colMain">
      <h1>
        <trans string="menu.title_apps"/>
      </h1>

      <AppListing @set-active-component="onSetActiveComponent"/>
    </el-col>
  </el-row>
</template>

<script>
import { Apps } from 'mdue';
import { main } from '../../Sizes.js';
import AppContainer from '../molecules/AppContainer.vue';
import AppListing from '../templates/AppListing.vue';

export default {
  name: 'AppListingView',
  components: {
    AppListing,
    AppContainer,
  },
  emits: ['set-active-component'],
  icon: Apps,
  data() {
    return { colMain: main };
  },
  methods: {
    onSetActiveComponent(app) {
      this.$emit('set-active-component', app);
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
}
</style>
