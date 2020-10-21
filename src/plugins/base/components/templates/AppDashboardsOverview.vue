<template>
  <div v-if="dashboards">
    <el-card v-for="dashboard in dashboards" class="dashboard-card"
             @click="onCardClick(dashboard.name)">
      <b>{{ dashboard.name }}</b>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DashboardsOverview',
  inject: ['backend'],
  data() {
    this.backend.listDashboards().then((dashboards) => this.dashboards = dashboards);

    return { dashboards: null };
  },
  methods: {
    onCardClick(name) {
      this.$emit('update:dashboard', { value: name });
    },
  },
};
</script>

<style scoped>
.dashboard-card {
  margin-bottom: 1em;
}
</style>
