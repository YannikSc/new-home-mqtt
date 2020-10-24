import { reactive } from 'vue';

export class DeviceManager {
    /**
     * @type {[{name: String, application: String}]}
     */
    devices = reactive([]);

    /**
     * @param device
     */
    addDevice(device) {
        this.devices.push(device);
    }
}

export const DefaultDeviceManager = new DeviceManager();
