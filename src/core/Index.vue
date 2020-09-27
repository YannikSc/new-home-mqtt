<template>
  <component is="app-header" @menu-toggle="sidebarVisible = !sidebarVisible" v-bind="$data" />
  <component is="app-menu" v-bind="$data"/>
  <component is="app-content" v-bind="$data"/>


</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      sidebarVisible: false
    };
  }
}
</script>
