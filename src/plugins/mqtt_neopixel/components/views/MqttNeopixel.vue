<template>
  <AppContainer>
    <template v-slot:content>
      <MqttNeopixelStripSettings :strip="strip"/>

      <h2>
        <trans string="app.mqtt_neopixel.title.color_mode"/>
      </h2>
      <AppTabs class="mode-tabs">
        <AppTab :title="Translate('app.mqtt_neopixel.block.color.title')">
          <template v-slot:default="{active}">
            <MqttNeopixelColor :strip="strip" :clientName="clientName" :active="active"/>
          </template>
        </AppTab>
        <AppTab :title="Translate('app.mqtt_neopixel.block.gradient.title')">
          <template v-slot:default="{active}">
            <MqttNeopixelGradient :strip="strip" :clientName="clientName" :active="active"/>
          </template>
        </AppTab>
      </AppTabs>

      <AppButton @click="updateStrip" primary>
        <trans string="app.mqtt_neopixel.button.submit.text"/>
      </AppButton>
    </template>
  </AppContainer>
</template>

<script>
import AppContainer from '../../../base/components/molecules/AppContainer.vue';
import { watch } from '@vue/runtime-core';
import { Translate } from '../../../base/service/Translation.js';
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';
import AppButton from '../../../base/components/atoms/AppButton.vue';
import MqttNeopixelStripSettings from '../templates/MqttNeopixelStripSettings.vue';
import MqttNeopixelColor from '../templates/MqttNeopixelColor.vue';
import AppTabs from '../../../base/components/templates/AppTabs.vue';
import AppTab from '../../../base/components/templates/AppTab.vue';
import MqttNeopixelGradient from '../templates/MqttNeopixelGradient.vue';

export default {
  name: "MqttNeopixelWindow",
  components: {
    MqttNeopixelGradient,
    MqttNeopixelColor,
    AppContainer,
    AppRangeInput,
    AppTabs,
    AppTab,
    AppButton,
    MqttNeopixelStripSettings
  },
  inject: ['strips', 'mqtt'],
  props: {
    clientName: String
  },
  data(props) {
    const tabs = {
      colors: { component: AppContainer, name: 'Colors', data: { strip: props.strips.strips[props.clientName] } }
    };

    watch(props.strips.strips, () => {
      this.strip = props.strips.strips[props.clientName];
    });

    return {
      strip: props.strips.strips[props.clientName] || {},
      tabs,
      Translate
    };
  },

  methods: {
    updateStrip() {
      console.log(this.strip);

      this.mqtt.publish(this.clientName + '/colors', JSON.stringify(this.strip), { retain: true });
    }
  }
};
</script>

<style scoped>
.mode-tabs {
  margin: 1em 0;
}
</style>
