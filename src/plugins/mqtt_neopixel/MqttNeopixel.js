import MqttNeopixel from './components/views/MqttNeopixel.vue';
import StripManager from './service/StripManager.js';
import Strings from './Strings.js';

export default {
    install(app) {
        const { mqtt, translation } = app._context.provides;

        Strings(translation);

        mqtt.subscribe('+/colors', (topic, data) => {
            StripManager.addStrip(topic.split('/')[0], JSON.parse(data));
        });

        app.provide('strips', StripManager)

        app.component('mqtt_neopixel', MqttNeopixel);
    }
};
