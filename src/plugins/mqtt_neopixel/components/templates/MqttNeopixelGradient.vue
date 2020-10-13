<template>
  <div class="mqtt-neopixel-gradient">
    <div class="colors">
      <div class="color--background" v-for="(color, index) in colors" :style="{'--color': asHex(color)}"
           @click="edit = index">
        <div class="color--preview"></div>
      </div>
    </div>

    <div class="controls">
      <AppButton class="control--input" @click="addColor">
        <Plus/>
      </AppButton>

      <AppInput class="control--input" v-model="strip.step" type="number" @update:modelValue="saveStep">
        <trans string="app.mqtt_neopixel.input.step.text"/>
      </AppInput>

      <AppInput class="control--input" v-model="width" type="number" @update:modelValue="saveWidth">
        <trans string="app.mqtt_neopixel.input.width.text"/>
      </AppInput>
    </div>

    <AppModal no-submit :modal-shown="edit !== -1" @modal-close="edit = -1" @modal-cancel="removeCurrentColor"
              close-text="app.mqtt_neopixel.edit_color.remove">
      <template v-slot:title>Edit color</template>
      <template v-slot:default>

        <AppRangeInput class="color-slider--red" :min="0" :max="255" v-model="colors[edit][0]"
                       @update:modelValue="updateColors">
          <trans string="app.mqtt_neopixel.input.color.text_red"/>
        </AppRangeInput>
        <AppRangeInput class="color-slider--green" :min="0" :max="255" v-model="colors[edit][1]"
                       @update:modelValue="updateColors">
          <trans string="app.mqtt_neopixel.input.color.text_green"/>
        </AppRangeInput>
        <AppRangeInput class="color-slider--blue" :min="0" :max="255" v-model="colors[edit][2]"
                       @update:modelValue="updateColors">
          <trans string="app.mqtt_neopixel.input.color.text_blue"/>
        </AppRangeInput>
      </template>
    </AppModal>
  </div>
</template>

<script>
import AppButton from '../../../base/components/atoms/AppButton.vue';
import {Plus} from 'mdue';
import AppModal from '../../../base/components/molecules/AppModal.vue';
import AppRangeInput from '../../../base/components/atoms/AppRangeInput.vue';
import tinygradient from 'tinygradient';
import AppInput from '../../../base/components/atoms/AppInput.vue';

export default {
  name: 'MqttNeopixelGradient',
  components: { AppInput, AppRangeInput, AppModal, AppButton, Plus },
  props: {
    strip: Object,
    clientName: String,
    active: Boolean
  },
  data() {
    let width;

    try {
      width = JSON.parse(localStorage.getItem('mqtt-neopixel-gradient-width--' + this.clientName));
    } catch (_) {
    }

    if (!width) {
      width = this.strip.count;
    }

    return {
      colors: this.getInitialColors(),
      width,
      edit: -1
    };
  },
  mounted() {
    if (this.active) {
      this.updateColors();
    }
  },
  watch: {
    active(updated) {
      if (updated === true) {
        this.updateColors();
      }

      console.log(this.strip);
    },
    strip() {
      if (!this.width) {
        this.width = this.strip.count;
      }

      if (this.active) {
        this.updateColors();
      }
    },
    width() {
      this.updateColors();
    }
  },
  methods: {
    getInitialColors() {
      try {
        let data = JSON.parse(localStorage.getItem('mqtt-neopixel-gradient--' + this.clientName));

        if (!Array.isArray(data)) {
          data = [];
        }

        return data;
      } catch (_) {
        return [];
      }
    },

    addColor() {
      this.colors.push([
        0,
        0,
        0
      ]);
    },

    updateColors() {
      try {
        const colors = this.colors.map(this.asHex.bind(this));

        while (colors.length < 2) {
          colors.push(colors[0] || [
            0,
            0,
            0
          ]);
        }

        const gradientInstance = tinygradient(colors);
        const gradient = gradientInstance.rgb(this.width < 2 ? 2 : this.width);

        this.strip.colors = gradient.map(v => (parseInt(v.toHex(false), 16) << 8) >>> 0);
      } catch (_) {
      }

      try {
        this.strip.step = JSON.parse(localStorage.getItem('mqtt-neopixel-gradient-step--' + this.clientName));
      } catch (_) {
      }

      localStorage.setItem('mqtt-neopixel-gradient--' + this.clientName, JSON.stringify(this.colors));
    },

    removeCurrentColor() {
      this.colors.splice(this.edit, 1);
      this.updateColors();
      this.edit = -1;
    },

    saveStep() {
      localStorage.setItem('mqtt-neopixel-gradient-step--' + this.clientName, JSON.stringify(this.strip.step));
    },

    saveWidth() {
      localStorage.setItem('mqtt-neopixel-gradient-width--' + this.clientName, JSON.stringify(this.width));
    },

    asHex(color) {
      let hex = (((color[0] << 16) | (color[1] << 8) | (color[2] << 0)) >>> 0).toString(16);

      while (hex.length < 6) {
        hex = '0' + hex;
      }

      return '#' + hex;
    }
  }
};
</script>

<style scoped>
.mqtt-neopixel-gradient {
  margin-top: 1em;
}

.controls {
  margin: 1em 0;
}

.color--background {
  background-color: #FFFFFF;
}

.color--preview {
  background-color: var(--color, #000F);
  height: 1.5em;
  width: 100%;
}

.color-slider--red {
  --color--shade-medium: hsla(0, 81%, 60%, 1);
  --color--shade-normal: hsla(0, 81%, 45%, 1);

}

.color-slider--green {
  --color--shade-medium: hsla(120, 81%, 60%, 1);
  --color--shade-normal: hsla(120, 81%, 45%, 1);

}

.color-slider--blue {
  --color--shade-medium: hsla(240, 81%, 60%, 1);
  --color--shade-normal: hsla(240, 81%, 45%, 1);

}

.controls {
  display: flex;
}

.control--input {
  margin: 0 .5em;
}
</style>
