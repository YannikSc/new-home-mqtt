import MqttNeopixel from './components/views/MqttNeopixel.vue';
import StripManager from './service/StripManager.js';

export default {
    install(app) {
        /**
         * @type MqttManager
         */
        const mqtt = app._context.provides.mqtt;

        mqtt.subscribe('+/colors', (topic, data) => {
            StripManager.addStrip(topic.split('/')[0], JSON.parse(data));
        });

        app.provide('strips', StripManager)

        app.component('mqtt_neopixel', MqttNeopixel);
    }
};
