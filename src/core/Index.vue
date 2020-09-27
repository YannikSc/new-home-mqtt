<template>
  <component
      is="app-header"
      @menu-toggle="menuVisible = !menuVisible"
      @menu-open="menuVisible = true"
      @menu-close="menuVisible = false"
      @set-active-component="updateComponent"
      v-bind="$data"/>

  <component
      is="app-menu"
      @menu-toggle="menuVisible = !menuVisible"
      @menu-open="menuVisible = true"
      @menu-close="menuVisible = false"
      @set-active-component="updateComponent"
      v-bind="$data"/>

  <component
      is="app-content"
      @menu-toggle="menuVisible = !menuVisible"
      @menu-open="menuVisible = true"
      @menu-close="menuVisible = false"
      @set-active-component="updateComponent"
      v-bind="$data"/>
</template>

<script>
import { markRaw } from '@vue/reactivity';

const DefaultComponent = 'app-default-view';

export default {
  name: 'Index',
  inject: ['app'],
  data() {
    window.addEventListener('hashchange', this.onHashChange.bind(this));

    let component = DefaultComponent;
    let hash = document.location.hash.substring(1);

    if (hash) {
      component = hash;
    }

    return {
      menuVisible: false,
      focusedComponent: component
    };
  },
  methods: {
    updateComponent(component) {
      const current = document.location.hash.substring(1);
      const name = component.name ? component.name : component;

      if (this.isComponentRegistered(name) && name !== current) {
        window.history.pushState({ component: component.name }, document.title, '#' + component.name);
      } else {
        window.history.pushState({ component: component.name }, document.title, '#');
      }

      this.focusedComponent = markRaw(component);
    },
    onHashChange() {
      let component = document.location.hash.substring(1);

      if (!this.isComponentRegistered(component)) {
        component = DefaultComponent;
      }

      this.focusedComponent = component;
    },
    isComponentRegistered(component) {
      const components = Object.keys(this.app._context.components);

      return components.indexOf(component) !== -1;
    }
  }
};
</script>
