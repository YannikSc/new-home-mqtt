<template>
  <AppContainer>
    <template v-slot:content>
      <h1>
        <trans string="app.shortcuts.title"/>
        <Plus class="icon--plus" @click="onAddShortcut" v-if="!mqtt.isHooked()"/>
        <Cancel class="icon--cancel" @click="onCancelShortcut" v-if="mqtt.isHooked()"/>
      </h1>

      <div class="shortcut-list">
        <div class="shortcut-button" v-for="(data, name) in this.shortcuts.shortcuts">
          <AppCard @click="onClickCard(data)">
            <template v-slot:icon>
              <Link class="app--icon"/>
            </template>
            <template v-slot:name>{{ name }}</template>
          </AppCard>
        </div>
      </div>

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
    </template>
  </AppContainer>
</template>

<script>
import AppContainer from '../molecules/AppContainer.vue';
import { Cancel, Link, Plus } from 'mdue';
import AppListingView from './AppListingView.vue';
import AppModal from '../molecules/AppModal.vue';
import AppInput from '../atoms/AppInput.vue';
import AppCollapse from '../templates/AppCollapse.vue';
import { Translate } from '../../service/Translation.js';
import AppCard from '../molecules/AppCard.vue';

export default {
  name: "AppShortcutsView",
  icon: Link,
  components: { AppCard, AppCollapse, AppInput, AppModal, AppContainer, Plus, Cancel, Link },
  emits: ['set-active-component'],
  inject: ['mqtt', 'shortcuts'],
  data() {
    const data = { shortcutName: '', saveModal: false, shortcutData: {}, Translate };

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
      this.shortcuts.add(this.shortcutName, this.shortcutData);
      this.saveModal = false;
      this.shortcutData = {};

      this.$forceUpdate();
    },
    onPublished(topic, payload, options) {
      const shortcutData = {
        topic,
        payload,
        options
      };

      this.$emit('set-active-component', {
        contentComponent: 'AppShortcutsView', data: {
          shortcutData,
          saveModal: true
        }
      });
    },
    onClickCard({ topic, payload, options }) {
      this.mqtt.publish(topic, payload, options);
      console.log(topic, payload, options);
    }
  }
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

.shortcut-list {
  flex-wrap: wrap;
  display: flex;
}

.shortcut-button {
  display: flex;
  box-sizing: border-box;
  padding: 1em;
  justify-content: center;
  flex: 0 0 20%;
}

.app--icon {
  height: 4em;
  width: 4em;
}
</style>
