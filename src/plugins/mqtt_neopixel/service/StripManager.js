import { reactive } from '@vue/reactivity';

export class StripManager {
    strips = reactive({});

    updateStrip(device, property, value) {
        if (!this.strips.hasOwnProperty(device)) {
            this.strips[device] = {};
        }

        this.strips[device][property] = value;
    }
}

export default new StripManager();
