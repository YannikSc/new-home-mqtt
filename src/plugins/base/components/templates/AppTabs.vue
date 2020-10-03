<template>
  <div class="app-tabs">
    <div class="app-tab" v-for="(slot, index) in tabs">
      <AppButton class="app-tab--title" @click="active = index">{{ slot.props.title }}</AppButton>

      <div class="app-tab--content" :class="{active: index === active}">
        <component :is="slot" :active="active === index"></component>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton.vue';

export default {
  name: "AppTabs",
  components: { AppButton },
  data() {
    return {
      active: 0,
      tabs: this.$slots.default()
    };
  }
};
</script>

<style scoped>
</style>
