<template>
  <div v-if="dashboard && groups">
    <h2>{{ dashboard.name }}</h2>

    <el-card v-for="(g, key) in groups" class="dashboard-card" @click="selectGroup(key, g.clone())">
      {{ g.name }}
    </el-card>

    <AppModal :modal-shown="!!group" @modal-close="cancelGroupEdit" @modal-cancel="cancelGroupEdit"
              @modal-submit="saveGroup">
      <template #title>Edit {{ group.name }}</template>
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

        <ul class="group--items">
          <li v-for="(item, key) in group.items" class="group-item">
            <span>{{ item.name }}</span>
            <el-button icon="el-icon-edit" type="primary" circle @click="selectGroupItem(key, item)" size="small"/>
          </li>
        </ul>

        <el-button @click="addGroupItem" type="success" icon="el-icon-plus" size="medium" class="group-item--add"/>
      </template>
    </AppModal>

    <AppModal :modal-shown="!!groupItem && groupItemIndex !== null" @modal-close="cancelGroupItemEdit"
              @modal-cancel="cancelGroupItemEdit"
              @modal-submit="saveGroupItem">
      <template #title>Edit {{ groupItem.name }}</template>
      <template #default>
        <p class="sub-title">Item Name</p>
        <el-input v-model="groupItem.name" class="group-item--name"/>

        <component :is="group_items.getType(groupItem.type).editorComponent" :data="groupItem.data"/>
      </template>
    </AppModal>

    <AppModal :modal-shown="!!groupItem && groupItemIndex === null" @modal-close="cancelGroupItemEdit"
              @modal-cancel="cancelGroupItemEdit"
              @modal-submit="createEmptyGroupItem">
      <template #title>Edit {{ groupItem.name }}</template>
      <template #default>
        <p class="sub-title">Item Name</p>
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

    this.backend.getDashboard(dashboardName).then(dashboard => this.dashboard = dashboard);

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
.dashboard-card {
  margin-bottom: 1em;
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
  padding: 0.5em 0;
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
