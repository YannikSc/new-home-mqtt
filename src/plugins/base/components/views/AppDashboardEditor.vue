<template>
  <el-row>
    <el-col v-bind="main">
      <h1>
        <trans string="app.dashboard_editor.title"/>
      </h1>

      <AppDashboardsOverview v-if="!dashboardName" @update:dashboard="onUpdateDashboard"/>
      <AppDashboardDetail v-if="dashboardName" :dashboard-name="dashboardName"/>
    </el-col>
  </el-row>
</template>

<script>
import { HomeEdit } from 'mdue';
import { main } from '../../Sizes.js';
import AppDashboardDetail from '../templates/AppDashboardDetail.vue';
import AppDashboardsOverview from '../templates/AppDashboardsOverview.vue';

export default {
  name: 'AppDashboardEditor',
  icon: HomeEdit,
  components: {
    AppDashboardDetail,
    AppDashboardsOverview,
  },
  props: {
    defaultDashboardName: {
      type: String,
      required: false,
    },
  },
  data(props) {
    return {
      main,
      dashboardName: props.dashboardName || null,
    };
  },
  methods: {
    onUpdateDashboard({ value }) {
      this.$emit('set-active-component', {
        contentComponent: 'AppDashboardEditor',
        data: {
          defaultDashboardName: value,
        },
        hash: 'AppDashboardDetail',
      });
    },
  },
  watch: {
    defaultDashboardName() {
      this.dashboardName = this.defaultDashboardName;
    },
  },
};
</script>

<style scoped>
</style>
