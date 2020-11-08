<template>
  <el-row>
    <el-col v-bind="colMain">
      <h1>
        <trans string="app.settings.title"></trans>
      </h1>
    </el-col>

    <el-col v-bind="colMain">
      <h2>
        <trans string="app.settings.mqtt.title"/>
      </h2>
    </el-col>

    <el-col v-bind="colMain">
      <el-form label-width="120px">
        <el-form-item :label="Translate('app.settings.mqtt.host_label')">
          <el-input v-model="settings.mqttHost"/>
        </el-form-item>
        <el-form-item :label="Translate('app.settings.mqtt.user_label')">
          <el-input v-model="settings.mqttUsername"/>
        </el-form-item>
        <el-form-item :label="Translate('app.settings.mqtt.pass_label')">
          <el-input show-password v-model="settings.mqttPassword"/>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="onSave">
            <trans string="button.save.title"/>
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { Cog } from 'mdue';
import { Settings } from '../../service/struct/Settings.js';
import { Translate } from '../../service/Translation.js';
import { main } from '../../Sizes.js';
import AppButton from '../atoms/AppButton.vue';
import AppInput from '../atoms/AppInput.vue';
import AppContainer from '../molecules/AppContainer.vue';

export default {
  name: 'AppSettingsView',
  components: {
    AppContainer,
    AppInput,
    AppButton,
  },
  inject: ['backend'],
  data(settings) {
    return {
      settings: Settings.fromRawSettings(settings),
      Translate,
      colMain: main,
    };
  },
  icon: Cog,
  methods: {
    onSave() {
      this.backend.saveSettings(this.settings.toSettings());
    },
  },
};
</script>

<style>

</style>
