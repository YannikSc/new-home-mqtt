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
          <AppInput v-model="shortcutName">
            <trans string="app.shortcuts.modal.shortcut_name.text"/>
          </AppInput>

          <AppCollapse class="shortcut-detail" :title="Translate('app.shortcuts.modal.shortcut_topic.text')">
            <code>{{ shortcutData.topic }}</code>
          </AppCollapse>

          <AppCollapse class="shortcut-detail" :title="Translate('app.shortcuts.modal.shortcut_payload.text')">
            <textarea class="shortcut-payload-input" v-model="shortcutData.payload"></textarea>
          </AppCollapse>

          <AppCollapse class="shortcut-detail" :title="Translate('app.shortcuts.modal.shortcut_options.text')">
            <pre><code>{{ shortcutData.options }}</code></pre>
          </AppCollapse>
        </template>
      </AppModal>
    </el-col>
  </el-row>
</template>

<script>
import { Cancel, Link, Plus } from 'mdue';
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
  },
  emits: ['set-active-component'],
  inject: ['mqtt', 'shortcuts'],
  data() {
    const data = {
      shortcutName: '',
      saveModal: false,
      shortcutData: {},
      Translate,
      shortcutList: [],
      cards,
      main,
    };

    this.shortcuts.list().then((shortcuts) => this.shortcutList = shortcuts);

    if (this.mqtt.isHooked() && this.$attrs.saveModal && this.$attrs.shortcutData) {
      this.mqtt.unsetHook();

      data['saveModal'] = this.$attrs.saveModal;
      data['shortcutData'] = this.$attrs.shortcutData;
    }

    return data;
  },
  methods: {
    onAddShortcut() {
      this.mqtt.setHook(this.onPublished.bind(this));

      this.$emit('set-active-component', { contentComponent: AppListingView });
    },

    onCancelShortcut() {
      this.mqtt.unsetHook();
      this.$forceUpdate();
    },

    onModalClose() {
      this.saveModal = false;
      this.shortcutData = {};
    },

    onModalSubmit() {
      this.shortcuts.add(this.shortcutName, [this.shortcutData]);
      this.shortcuts.list().then((shortcuts) => this.shortcutList = shortcuts);
      this.saveModal = false;
      this.shortcutData = {};

      this.$forceUpdate();
    },

    onPublished(topic, payload, options) {
      const shortcutData = {
        topic,
        payload,
        options,
      };

      this.$emit('set-active-component', {
        contentComponent: 'AppShortcutsView',
        data: {
          shortcutData,
          saveModal: true,
        },
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

.shortcut-detail {
  margin-top: 1em;
}

.shortcut-payload-input {
  background: none;
  resize: none;
  width: 100%;
  height: 10em;
  font-size: 1em;
  box-sizing: border-box;
  transition: outline 10000s 10000s;
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
