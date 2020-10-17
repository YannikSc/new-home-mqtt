<template>
  <el-row>
    <el-col v-bind="main">
      <h1>
        <trans string="app.shortcuts.title"/>
        <Plus class="icon--plus" @click="onAddShortcut" v-if="!mqtt.isHooked()"/>
        <Cancel class="icon--cancel" @click="onCancelShortcut" v-if="mqtt.isHooked()"/>
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

      <AppModal :modal-shown="saveModal" @modal-close="onModalClose"
                @modal-cancel="onModalClose"
                @modal-submit="onModalSubmit">
        <template v-slot:title>
          <trans string="app.shortcuts.title_new"/>
        </template>
        <template v-slot:default>
          <el-form>
            <el-form-item>
              <template v-slot:label><trans string="app.shortcuts.modal.shortcut_name.text"/></template>
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
</template>

<script>
import { Cancel, Link, Minus, Plus } from 'mdue';
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
    Plus,
    Cancel,
    Link,
    Minus,
  },
  emits: ['set-active-component'],
  inject: ['mqtt', 'shortcuts'],
  data() {
    const data = {
      shortcutName: '',
      saveModal: false,
      Translate,
      shortcutList: [],
      events: [],
      cards,
      main,
    };

    this.shortcuts.list().then((shortcuts) => this.shortcutList = shortcuts);

    if (this.mqtt.isHooked() && this.$attrs.saveModal && this.$attrs.events) {
      data['saveModal'] = this.$attrs.saveModal;
      data['events'] = this.$attrs.events;
    }

    return data;
  },
  methods: {
    onAddShortcut() {
      let events = [];
      this.mqtt.setHook(this.onPublished.bind(this, events));

      this.$emit('set-active-component', { contentComponent: AppListingView });
    },

    onCancelShortcut() {
      this.mqtt.unsetHook();
      this.$forceUpdate();
    },

    onModalClose() {
      this.mqtt.unsetHook();
      this.saveModal = false;
      this.events = [];
    },

    onModalSubmit() {
      this.mqtt.unsetHook();
      this.shortcuts.add(this.shortcutName, this.events);
      this.shortcuts.list().then((shortcuts) => this.shortcutList = shortcuts);
      this.saveModal = false;
      this.events = [];

      this.$forceUpdate();
    },

    deleteEvent(index, mouseEvent) {
      mouseEvent.stopPropagation();
      this.events.splice(index, 1);
    },

    onPublished(events, topic, payload, options) {
      console.log(topic);

      if (events.length <= 0) {
        this.$emit('set-active-component', {
          contentComponent: 'AppShortcutsView',
          data: {
            events: events,
            saveModal: true,
          },
        });
      }

      events.push({
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
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: space-between;
}

.icon--plus {
  color: var(--color--success-main);
}

.icon--cancel {
  color: var(--color--error-main);
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
