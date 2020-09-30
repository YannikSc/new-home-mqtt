import { reactive } from '@vue/reactivity';

export class StripManager {
    strips = reactive({});

    addStrip(device, property) {
        this.strips[device] = property;
    }
}

export default new StripManager();
