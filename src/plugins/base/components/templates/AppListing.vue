<template>
  <el-row class="apps--list">
    <el-col class="card--wrapper" v-for="app in apps._apps" v-bind="cards">
      <el-card @click="onClickCard(app)">
        <div class="icon--square">
          <div class="icon--wrap">
            <component :is="app.icon" class="app--icon"/>
          </div>
        </div>
        <span>{{ app.displayName }}</span>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { watch } from '@vue/runtime-core';
import { cards } from '../../Sizes.js';
import AppButton from '../atoms/AppButton.vue';
import AppCard from '../molecules/AppCard.vue';
import AppModal from '../molecules/AppModal.vue';

export default {
  name: 'AppListing',
  emits: ['set-active-component'],
  components: {
    AppButton,
    AppModal,
    AppCard,
  },
  inject: ['apps'],
  data(props) {
    // TODO: Keep eye on with future updates. Seems unreasonably complicated to keep an array reactive
    watch(props.apps._apps, this.$forceUpdate.bind(this));

    return { cards };
  },
  methods: {
    onClickCard(app) {
      this.$emit('set-active-component', app);
    },
  },
};
</script>

<style scoped>
.apps--list {
  display: flex;
  flex-wrap: wrap;
}

.card--wrapper {
  padding: .5em;
  box-sizing: border-box;
  text-align: center;
}

.icon--square {
  position: relative;
  width: 50%;
  padding-bottom: 100%;
}

.icon--wrap {
  position: absolute;
  height: 100%;
  width: 200%;
}

.app--icon {
  height: 80%;
  width: 80%;
}

.icon--square::after {
  content: '';
  display: block;
}
</style>
