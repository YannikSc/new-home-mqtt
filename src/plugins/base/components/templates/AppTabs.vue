<template>
  <div class="app-tabs">
    <div class="app-tabs--titles">
      <AppButton class="app-tab--title" v-for="(slot, index) in tabs" @click="active = index">{{ slot.props.title }}</AppButton>
    </div>

    <div class="app-tab--content" v-for="(slot, index) in tabs" :class="{active: index === active}">
      <component :is="slot" :active="active === index"></component>
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
.app-tabs--titles {
  display: flex;
}
</style>
