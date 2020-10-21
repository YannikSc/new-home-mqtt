<template>
  <div v-if="dashboard">
    {{ dashboard.name }}
  </div>
</template>

<script>
export default {
  name: 'AppDashboardDetail',
  inject: ['backend'],
  data({ $attrs }) {
    const dashboardName = $attrs.dashboardName || $attrs['dashboard-name'] || null;

    this.backend.getDashboard(dashboardName).then(dashboard => this.dashboard = dashboard);

    return {
      dashboard: null,
      dashboardName,
    };
  },
};
</script>

<style scoped>

</style>
