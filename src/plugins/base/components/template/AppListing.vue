<template>
  <div class="apps--list">
    <div class="card--wrapper" v-for="app in apps._apps">
      <AppCard @click="onClickCard(app)">
        <template v-slot:icon>
          <component :is="app.icon" class="app--icon"/>
        </template>
        <template v-slot:name>{{ app.displayName }}</template>
      </AppCard>
    </div>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton.vue';
import AppModal from '../molecules/AppModal.vue';
import AppCard from '../molecules/AppCard.vue';

export default {
  name: 'AppListing',
  emits: ['set-active-component'],
  components: { AppButton, AppModal, AppCard },
  inject: ['apps'],
  methods: {
    onClickCard(app) {
      this.$emit('set-active-component', app.contentComponent)
    }
  }
};
</script>

<style scoped>
.apps--list {
  display: flex;
  flex-wrap: wrap;
}

.card--wrapper {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 20%;
  justify-content: center;
  padding: .5em;
}

.app--icon {
  height: 4em;
  width: 4em;
}
</style>
