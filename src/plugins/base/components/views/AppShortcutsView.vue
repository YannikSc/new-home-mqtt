<template>
  <div>
    <el-row>
      <el-col v-bind="main">
        <h1>
          <trans string="app.shortcuts.title"/>
          <ArrowDown @click="hideModal = false" v-if="hideModal && events.length > 0"/>
        </h1>

        <el-row class="apps--list">
          <el-col class="card--wrapper" v-for="(data, name) in shortcutList" v-bind="cards">
            <el-card @click="onClickCard(data)">
              <div class="icon--square">
                <div class="icon--wrap">
                  <Link class="app--icon"/>
                </div>
              </div>
              <span>{{ name }}</span>
            </el-card>
          </el-col>
        </el-row>

        <AppModal :modal-shown="events.length > 0 && !hideModal" @modal-close="onHideModal"
                  @modal-cancel="onModalClose"
                  @modal-submit="onModalSubmit">
          <template v-slot:title>
            <trans string="app.shortcuts.title_new"/>
          </template>
          <template v-slot:default>
            <el-form>
              <el-form-item>
                <template v-slot:label>
                  <trans string="app.shortcuts.modal.shortcut_name.text"/>
                </template>
                <el-input v-model="shortcutName"/>
              </el-form-item>

              <el-form-item>
                <p>
                  <trans string="app.shortcuts.modal.shortcut_events.text"/>
                </p>

                <el-collapse>
                  <el-collapse-item v-for="(mqttEvent, index) in events">
                    <template v-slot:title>
                      <el-button class="button--delete" type="danger" icon="el-icon-delete" circle
                                 @click="deleteEvent(index, $event)" size="mini"/>
                      <p>
                        Topic: {{ mqttEvent.topic }}
                      </p>
                    </template>
                    <el-collapse-item :title="Translate('app.shortcuts.modal.shortcut_payload.text')">
                      <el-input type="textarea" v-model="mqttEvent.payload"></el-input>
                    </el-collapse-item>
                    <el-checkbox v-model="mqttEvent.options.retain">
                      <trans string="app.shortcuts.modal.shortcut_retain.text"/>
                    </el-checkbox>
                  </el-collapse-item>
                </el-collapse>
              </el-form-item>
            </el-form>
          </template>
        </AppModal>
      </el-col>
    </el-row>

    <el-row>
      <el-col v-bind="main">
        <h1>App
          <el-button @click="resetComponent" icon="el-icon-s-home" circle plain/>
        </h1>
      </el-col>
    </el-row>

    <component :is="activeComponent" @set-active-component="setActiveComponent" v-bind="componentData"/>
  </div>
</template>

<script>
import { markRaw } from '@vue/reactivity';
import { Cancel, Link, Minus, ArrowDown } from 'mdue';
import { Translate } from '../../service/Translation.js';
import { cards, main } from '../../Sizes.js';
import AppInput from '../atoms/AppInput.vue';
import AppCard from '../molecules/AppCard.vue';
import AppContainer from '../molecules/AppContainer.vue';
import AppModal from '../molecules/AppModal.vue';
import AppCollapse from '../templates/AppCollapse.vue';
import AppListingView from './AppListingView.vue';

export default {
  name: 'AppShortcutsView',
  icon: Link,
  components: {
    AppCard,
    AppCollapse,
    AppInput,
    AppModal,
    AppContainer,
    ArrowDown,
    Cancel,
    Link,
    Minus,
  },
  emits: ['set-active-component'],
  inject: ['mqtt', 'shortcuts'],
  provide() {
    return {
      mqtt: {
        subscribe: console.log,
        unsubscribe: console.log,
        publish: this.onPublished.bind(this),
      },
    };
  },
  data() {
    const data = {
      shortcutName: '',
      Translate,
      shortcutList: [],
      events: [],
      activeComponent: markRaw(AppListingView),
      componentData: {},
      hideModal: false,
      cards,
      main,
    };

    this.shortcuts.list().then((shortcuts) => this.shortcutList = shortcuts);

    return data;
  },
  methods: {
    onHideModal() {
      this.hideModal = true;
    },

    onModalClose() {
      this.events = [];
    },

    onModalSubmit() {
      this.shortcuts.add(this.shortcutName, this.events);
      this.shortcuts.list().then((shortcuts) => this.shortcutList = shortcuts);
      this.events = [];

      this.$forceUpdate();
    },

    deleteEvent(index, mouseEvent) {
      mouseEvent.stopPropagation();
      this.events.splice(index, 1);
    },

    onPublished(topic, payload, options) {
      this.events.push({
        topic,
        payload,
        options,
      });
    },

    onClickCard(mqttEvents) {
      for (let event of mqttEvents) {
        let {
          topic,
          payload,
          options,
        } = event;

        this.mqtt.publish(topic, payload, options);
      }
    },

    setActiveComponent({
      contentComponent,
      data,
    }) {
      this.activeComponent = contentComponent;
      this.componentData = data;
    },

    resetComponent() {
      this.activeComponent = AppListingView;
      this.componentData = {};
    },
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: space-between;
}

.button--delete {
  margin: 0 .5em;
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
