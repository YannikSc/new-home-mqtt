<template>
  <el-row>
    <el-col v-bind="main">
      <h2>
        <trans string="app.mqtt_gpio.title"/>
      </h2>

      <label>
        <span class="label--text"><trans string="app.mqtt_gpio.pin_model_select"/></span>
        <select v-model="model">
          <option v-for="model in models" :value="model">
            <trans :string="'app.mqtt_gpio.pinout.' + model"/>
          </option>
        </select>
      </label>

      <label v-if="pins !== null">
        <span class="label--text"><trans string="app.mqtt_gpio.pin_select"/></span>
        <select v-if="pins !== 'custom'" v-model.number="pin">
          <option v-for="pin in pins" :value="pin">{{ pin }}</option>
        </select>

        <el-input-number v-if="pins === 'custom'" v-model="pin"/>
      </label>

      <label v-if="pin !== null">
        <span class="label--text"><trans string="app.mqtt_gpio.pin_mode"/></span>
        <select v-model="pinMode">
          <option value="DIGITAL_OUT">DIGITAL_OUT</option>
          <option value="PWM_OUT">PWM_OUT</option>
          <option value="DIGITAL_IN">DIGITAL_IN</option>
          <option :value="null">UNSET</option>
        </select>
      </label>

      <div class="modes">
        <div class="mode" v-if="pinMode === 'DIGITAL_OUT'">
          <label>
            <span class="label--text"><trans string="app.mqtt_gpio.pin_value"/></span>
            <el-switch :value="pinValue > 0" @update:modelValue="pinValue = $event ? 1 : 0"/>
          </label>
        </div>
        <div class="mode" v-if="pinMode === 'PWM_OUT'">
          <AppRangeInput :min="0" :max="1023" v-model="pinValue">
            <trans string="app.mqtt_gpio.pin_value"/>
          </AppRangeInput>
        </div>
      </div>

      <div class="actions">
        <el-button type="success" size="small" @click="updatePin">
          <trans string="app.mqtt_gpio.button_apply"/>
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';
import { main } from '../../../base/Sizes.js';
import Pinouts from '../../Pinouts.js';
import {PowerPlugOutline} from 'mdue';

export default {
  name: 'MqttGpio',
  icon: PowerPlugOutline,
  props: {
    clientName: String,
  },
  inject: ['mqtt'],
  components: { AppRangeInput },
  data() {
    return {
      main,
      models: Object.keys(Pinouts),
      model: null,
      pins: null,
      pin: null,
      pinMode: null,
      pinValue: null,
      pinValues: {},
    };
  },
  watch: {
    model() {
      if (this.model === 'custom') {
        this.pin = 0;
      }

      this.pins = Pinouts[this.model];
    },
    pinMode() {
      if (this.pinMode !== 'PWM_OUT') {
        this.pinValue = this.pinValue > 0 ? 1 : 0;
      }
    },
  },
  methods: {
    updatePin() {
      this.mqtt.publish(`${this.clientName}/${this.pin}/mode`, (this.pinMode || 'UNSET').toString());
      this.mqtt.publish(`${this.clientName}/${this.pin}/state`, (this.pinValue || 0).toString());
    },
  },
};
</script>

<style scoped>
.label--text {
  display: inline-block;
  margin-top: 0.5em;
  width: 100%;
}

.actions {
  margin-top: 1em;
  width: 100%;
}
</style>
