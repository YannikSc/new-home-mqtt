<template>
  <div v-if="dashboards">
    <el-card v-for="dashboard in dashboards" class="dashboard-card"
             @click="onCardClick(dashboard.name)">
      <div class="dashboard-card--content">
        <p><b>{{ dashboard.name }}</b></p>
        <el-button type="danger" icon="el-icon-delete-solid" @click.stop="deleteDashboard(dashboard.name)" circle/>
      </div>
    </el-card>

    <el-button type="success" icon="el-icon-plus" @click="addDashboard"></el-button>

    <AppModal :modal-shown="!!dashboard" @modal-close="dashboard = null" @modal-cancel="dashboard = null"
              @modal-submit="createDashboard">
      <template #title>
        <trans string="app.dashboard.overview.create_title"/>
      </template>
      <template #default>
        <p class="sub-title">
          <trans string="app.dashboard.overview.create_name"/>
        </p>
        <el-input v-model="dashboard.name" type="text"/>
      </template>
    </AppModal>
  </div>
</template>

<script>
import { Dashboard } from '../../service/struct/Dashboard.js';
import AppModal from '../molecules/AppModal.vue';

export default {
  name: 'DashboardsOverview',
  inject: ['backend'],
  components: { AppModal },
  data() {
    this.backend.listDashboards().then((dashboards) => this.dashboards = dashboards);

    return {
      dashboards: null,
      dashboard: null,
    };
  },
  methods: {
    onCardClick(name) {
      this.$emit('update:dashboard', { value: name });
    },

    async deleteDashboard(name) {
      this.dashboards = await this.backend.deleteDashboard(name);
    },

    addDashboard() {
      this.dashboard = new Dashboard('New Dashboard', []);
    },

    createDashboard() {
      this.backend.postDashboard(this.dashboard.name, this.dashboard).then(dashboards => this.dashboards = dashboards);
      this.dashboard = null;
    },
  },
};
</script>

<style scoped>
.dashboard-card {
  margin-bottom: 1em;
}

.dashboard-card--content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
