<template>
  <AppModal :modal-shown="menuVisible" @modal-close="$emit('menu-close')" no-submit no-cancel>
    <template v-slot:title>
      <trans string="menu.title_devices"/>
    </template>
    <template v-slot>
      <AppListing @set-active-component="onSetActiveComponent"/>
    </template>
  </AppModal>
</template>

<script>

import AppListing from './AppListing.vue';
import AppModal from '../molecules/AppModal.vue';

export default {
  name: 'AppMenu',
  emits: ['menu-close', 'set-active-component'],
  components: { AppListing, AppModal },
  props: {
    menuVisible: { type: Boolean, default: false }
  },
  methods: {
    onSetActiveComponent(component) {
      this.$emit('set-active-component', component);
    }
  }
};
</script>
