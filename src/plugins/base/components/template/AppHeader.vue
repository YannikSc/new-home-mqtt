<template>
  <header>
    <AppContainer flex>
      <template v-slot:content>
        <slot name="sidebar-button">
          <button class="hamburger-menu" @click="onMenuClick"><Menu/></button>

        </slot>
        <slot name="title">
          <h1>New Home - Dashboard</h1>
        </slot>
      </template>
    </AppContainer>
  </header>
</template>

<script>

import AppContainer from '../molecules/AppContainer.vue';
import {Apps} from 'mdue';

export default {
  name: 'AppHeader',
  components: { AppContainer, Menu: Apps },
  emits: ['menu-toggle'],
  methods: {
    onMenuClick() {
      this.$emit('menu-toggle');
    }
  }
};
</script>

<style scoped>
header {
  background: var(--color--shade-normal);
  box-sizing: border-box;
  color: var(--color--noshade-bright);
  padding: 1em 0;
  height: 4.5em;
}

h1 {
  color: var(--color--noshade-bright);
  margin: 0 0.5em;
  font-weight: 500;
}

.hamburger-menu {
  align-items: center;
  appearance: none;
  background: none;
  border: 0 none;
  cursor: pointer;
  color: var(--color--noshade-bright);
  display: inline-flex;
  font-size: 2em;
  transition: outline 10000s 10000s;
}
</style>
