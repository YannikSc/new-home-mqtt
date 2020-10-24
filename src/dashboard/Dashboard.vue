<template>
  <header class="dashboard-header">
    <nav v-if="dashboards">
      <ul>
        <li v-for="dashboard in dashboards" @click="dashboardName = dashboard.name"
            :class="{selected: dashboard.name === dashboardName}">
          <p class="dashboard-name">{{ dashboard.name }}</p>
        </li>
      </ul>
    </nav>
  </header>

  <section class="dashboard-view" v-if="dashboard && groups">
    <div class="dashboard-view--group" v-for="group in groups" :style="{'--size': group.size, '--order': group.order}">
      <h1>{{ group.name }}</h1>
      <component class="ui-element"
                 v-for="item in group.items"
                 :group="group"
                 :data="item.data"
                 :name="item.name"
                 :type="item.type"
                 :is="group_items.getType(item.type).uiComponent"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dashboard.vue',
  inject: ['backend', 'group_items'],
  data() {
    this.backend.listDashboards().then(dashboards => this.dashboards = dashboards);

    let dashboardName = null;

    if (location.hash) {
      dashboardName = decodeURIComponent(location.hash.substring(1));
    }

    if (dashboardName) {
      this.loadDashboard(dashboardName);
    }

    return {
      dashboards: null,
      dashboardName,
      dashboard: null,
      groups: null,
    };
  },
  methods: {
    loadDashboard(name) {
      this.backend.getDashboard(name).then(([dashboard]) => this.dashboard = dashboard);
    },
  },
  watch: {
    dashboardName() {
      this.loadDashboard(this.dashboardName);

      location.hash = this.dashboardName;
    },
    dashboard() {
      this.groups = [];

      this.dashboard.groups.map(group => this.backend.getGroup(group).then(group => this.groups.push(group)));
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 0;
}

.dashboard-name {
  font-size: 1.5em;
}

.dashboard-header {
  display: flex;
  height: 4em;
  justify-content: center;
}

.dashboard-header > nav > ul {
  display: flex;
  list-style: none;
}

.dashboard-header > nav > ul > li {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.375em 2.5em 0.875em;
  font-weight: bold;
}

.dashboard-header > nav > ul > li::after {
  background-color: var(--color--text-main);
  border-radius: 2px;
  content: '';
  display: block;
  height: 4px;
  width: 0;
  transition: width 0.2s ease-in-out;
}

.dashboard-header > nav > ul > li.selected::after {
  width: 2em;
}

.dashboard-view {
  --size: 1;
  --order: 0;

  display: flex;
  flex-wrap: wrap;
  padding: 1.25em 0 1.25em 1.25em;
}

.dashboard-view--group {
  background-color: #FFFFFF;
  border-radius: 1.25em;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  flex: var(--size) 0 calc(100% / 24);
  order: var(--order);
  padding: 1.25em;
  margin-right: 1.25em;
}

.ui-element {
  width: 100%;
}

.ui-element:not(:last-of-type) {
  margin-bottom: 0.5em;
}
</style>
