<template>
  <div v-if="dashboard && groups">
    <h2 class="detail--title">
      <span>{{ dashboard.name }}</span>
      <el-button type="success" icon="el-icon-plus" @click="addGroup" size="small" circle/>
    </h2>

    <el-card v-for="(g, key) in groups" class="group-card" @click="selectGroup(key, g.clone())">
      <div class="group-card--content">
        <p>{{ g.name }}</p>
        <el-button @click.stop="deleteGroup(g.name)" type="danger" icon="el-icon-delete-solid" circle size="medium"/>
      </div>
    </el-card>

    <AppModal :modal-shown="!!group && groupIndex !== null" @modal-close="cancelGroupEdit"
              @modal-cancel="cancelGroupEdit"
              @modal-submit="saveGroup">
      <template #title>
        <span><trans string="app.dashboard.detail.edit_group.title"/> "{{ group.name }}"</span>
      </template>
      <template #default>
        <el-form @submit="$event.preventDefault()" label-width="120px">
          <el-form-item>
            <template #label>
              <trans string="app.dashboard.details.edit.input_size.label"/>
            </template>
            <el-input-number v-model="group.size" :min="1" :max="24"/>
          </el-form-item>
          <el-form-item>
            <template #label>
              <trans string="app.dashboard.details.edit.input_order.label"/>
            </template>
            <el-input-number v-model="group.order" :min="0"/>
          </el-form-item>
        </el-form>

        <p>
          <trans string="app.dashboard.detail.edit_group.elements_title"/>
        </p>

        <ul class="group--items">
          <li v-for="(item, key) in group.items" class="group-item">
            <p>{{ item.name }}</p>
            <div class="group-item--actions">
              <el-button icon="el-icon-edit" type="primary" circle @click="selectGroupItem(key, item)" size="small"/>
              <el-button type="danger" @click="deleteGroupItem(key)" icon="el-icon-delete-solid" size="small" circle/>
            </div>
          </li>
        </ul>

        <el-button @click="addGroupItem" type="success" icon="el-icon-plus" size="medium" class="group-item--add"/>
      </template>
    </AppModal>

    <AppModal :modal-shown="!!group && groupIndex === null" @modal-close="cancelGroupEdit"
              @modal-cancel="cancelGroupEdit"
              @modal-submit="createEmptyGroup">
      <template #title>
        <span><trans string="app.dashboard.detail.create_group.title"/></span>
      </template>
      <template #default>
        <p class="sub-title">
          <trans string="app.dashboard.detail.add_group_item.name_title"/>
        </p>

        <el-input v-model="group.name" class="group-item--name"/>
      </template>
    </AppModal>

    <AppModal :modal-shown="!!groupItem && groupItemIndex !== null" @modal-close="cancelGroupItemEdit"
              @modal-cancel="cancelGroupItemEdit"
              @modal-submit="saveGroupItem">
      <template #title>
        <span><trans string="app.dashboard.detail.edit_group.title"/> "{{ groupItem.name }}"</span>
      </template>
      <template #default>
        <p class="sub-title">
          <trans string="app.dashboard.detail.add_group_item.name_title"/>
        </p>
        <el-input v-model="groupItem.name" class="group-item--name"/>

        <component :is="group_items.getType(groupItem.type).editorComponent" :data="groupItem.data"/>
      </template>
    </AppModal>

    <AppModal :modal-shown="!!groupItem && groupItemIndex === null" @modal-close="cancelGroupItemEdit"
              @modal-cancel="cancelGroupItemEdit"
              @modal-submit="createEmptyGroupItem">
      <template #title>
        <span><trans string="app.dashboard.detail.create_group_item.title"/></span>
      </template>
      <template #default>
        <p class="sub-title">
          <trans string="app.dashboard.detail.add_group_item.name_title"/>
        </p>
        <el-input v-model="groupItem.name" class="group-item--name"/>

        <label>
          <span class="group-item--type-label sub-title">Type</span>
          <!-- TODO: replace with element-plus version if fixed -->
          <select v-model="groupItem.type">
            <option v-for="groupItem in group_items.listTypes()" :value="groupItem">{{ groupItem }}</option>
          </select>
        </label>
      </template>
    </AppModal>
  </div>
</template>

<script>
import { Group } from '../../service/struct/Group.js';
import { GroupItem } from '../../service/struct/GroupItem.js';
import AppModal from '../molecules/AppModal.vue';

export default {
  name: 'AppDashboardDetail',
  inject: ['backend', 'group_items'],
  components: {
    AppModal,
  },
  data({ $attrs }) {
    const dashboardName = $attrs.dashboardName || $attrs['dashboard-name'] || null;

    this.backend.getDashboard(dashboardName).then(dashboard => this.dashboard = dashboard[0]);

    return {
      dashboard: null,
      dashboardName,
      groups: null,
      group: null,
      groupIndex: null,
      groupItem: null,
      groupItemIndex: null,
    };
  },
  computed: {
    data() {
      return [];
    },
  },
  methods: {
    selectGroup(key, group) {
      this.groupIndex = key;
      this.group = group;
    },

    async deleteGroup(groupName) {
      const dashboardGroup = this.dashboard.groups.indexOf(groupName);

      if (dashboardGroup !== -1) {
        this.dashboard.groups.splice(dashboardGroup, 1);

        const dashboard = this.dashboard;

        this.dashboard = null;
        await this.backend.postDashboard(this.dashboardName, dashboard);
        await this.backend.deleteGroup(groupName);
        this.dashboard = (await this.backend.getDashboard(this.dashboardName))[0];
      }
    },

    addGroup() {
      this.group = new Group('New Group', 12, 0);
    },

    async createEmptyGroup() {
      let group = await this.backend.getGroup(this.group.name);

      if (!group) {
        group = await this.backend.postGroup(this.group.name, this.group);
      }

      this.group = group;
      this.groups.push(this.group);
      this.groupIndex = this.groups.length - 1;

      this.dashboard.groups.splice(0, this.dashboard.groups.length);
      this.groups.map((group) => this.dashboard.groups.push(group.name));
      const dashboard = this.dashboard;

      this.dashboard = null;
      await this.backend.postDashboard(this.dashboardName, dashboard);
      this.dashboard = (await this.backend.getDashboard(this.dashboardName))[0];
    },

    cancelGroupEdit() {
      this.group = null;
      this.groupIndex = null;
    },

    saveGroup() {
      this.groups.splice(this.groupIndex, 1, this.group);
      this.backend.postGroup(this.group.name, this.group);


      this.group = null;
      this.groupIndex = null;
    },

    selectGroupItem(key, group) {
      this.groupItemIndex = key;
      this.groupItem = group;
    },

    deleteGroupItem(key) {
      this.group.items.splice(key, 1);
    },

    cancelGroupItemEdit() {
      this.groupItemIndex = null;
      this.groupItem = null;
    },

    saveGroupItem() {
      this.group.items.splice(this.groupItemIndex, 1, this.groupItem);
      this.groupItemIndex = null;
      this.groupItem = null;
    },

    addGroupItem() {
      this.groupItem = new GroupItem('New Item');
    },

    createEmptyGroupItem() {
      this.group.items.push(this.groupItem);
      this.groupItemIndex = this.group.items.length - 1;
    },
  },
  watch: {
    dashboard() {
      this.groups = [];

      if (!this.dashboard) {
        return;
      }

      this.dashboard.groups.map(name => {
        this.backend.getGroup(name).then(group => {
          this.groups.push(group);
        });
      });
    },
  },
};
</script>

<style scoped>
.detail--title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.group-card {
  margin-bottom: 1em;
}

.group-card--content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.group--items {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 0;
}

.group-item:not(:last-of-type) {
  border-bottom: 1px solid var(--color--text-main);
}

.group-item--add {
  margin-top: 1em;
}

.group-item--name {
  margin-bottom: 1em;
}

.group-item--type-label {
  display: inline-block;
  width: 100%;
}
</style>
