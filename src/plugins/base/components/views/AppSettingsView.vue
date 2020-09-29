<template>
  <AppContainer>
    <template v-slot:content>
      <h1>
        <trans string="app.settings.title"></trans>
      </h1>

      <h2>
        <trans string="app.settings.mqtt.title"/>
      </h2>

      <AppContainer full flex vertical>
        <template v-slot:content>
          <AppInput type="text" v-model="settings.mqtt_host">
            <trans string="app.settings.mqtt.host_label"/>
          </AppInput>
          <AppInput type="text" v-model="settings.mqtt_username">
            <trans string="app.settings.mqtt.user_label"/>
          </AppInput>
          <AppInput type="password" v-model="settings.mqtt_password">
            <trans string="app.settings.mqtt.pass_label"/>
          </AppInput>
        </template>
      </AppContainer>

      <AppButton primary @click="onSave">
        <trans string="button.save.title"/>
      </AppButton>
    </template>
  </AppContainer>
</template>

<script>
import AppContainer from '../molecules/AppContainer.vue';
import {Cog} from 'mdue';
import AppInput from '../atoms/AppInput.vue';
import {Settings} from '../../service/struct/Settings.js';
import AppButton from '../atoms/AppButton.vue';

export default {
  name: 'AppSettingsView',
  components: { AppContainer, AppInput, AppButton },
  data() {
    return {
      settings: Settings.fromLocalStorage()
    };
  },
  icon: Cog,
  methods: {
    onSave() {
      this.settings.saveToLocalStorage();
    }
  }
};
</script>

<style scoped>
</style>
