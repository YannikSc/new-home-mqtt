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
import {markRaw} from '@vue/reactivity';

const DefaultComponent = 'app-default-view';

export default {
  name: 'Index',
  inject: ['app'],
  data() {
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    const state = window.history.state || {};

    let component = state.component || DefaultComponent;
    let data = state.data || {};

    return {
      menuVisible: false,
      focusedComponent: component,
      componentData: data
    };
  },
  methods: {
    updateComponent({contentComponent, data}) {
      const state = window.history.state || {};
      const current = state.component;
      const name = contentComponent.name || contentComponent;

      if (this.isComponentRegistered(name) && name !== current) {
        window.history.pushState({ component: name, data }, document.title, '#' + name);
      }

      if (!this.isComponentRegistered(name)) {
        window.history.pushState({ component: name, data }, document.title, '#');
      }

      this.componentData = data;

      if (contentComponent.name) {
        this.focusedComponent = markRaw(contentComponent);

        return;
      }

      this.focusedComponent = contentComponent;
    },
    onHashChange() {
      let component = window.history.state.component;
      let data = window.history.state.data || {};

      if (!this.isComponentRegistered(component)) {
        component = DefaultComponent;
      }

      this.focusedComponent = component;
      this.componentData = data;
    },
    isComponentRegistered(component) {
      const components = Object.keys(this.app._context.components);

      return components.indexOf(component) !== -1;
    }
  }
};
</script>
