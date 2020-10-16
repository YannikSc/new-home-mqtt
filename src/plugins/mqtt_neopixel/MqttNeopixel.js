import MqttNeopixel from './components/views/MqttNeopixel.vue';
import StripManager from './service/StripManager.js';
import Strings from './Strings.js';

function subscribeUpdateProperty(mqtt, propertyName) {
    mqtt.subscribe('+/' + propertyName, (topic, data) => {
        StripManager.updateStrip(topic.split('/')[0], propertyName, parseInt(data));
    });
}

export default {
    install(app) {
        const {
            mqtt,
            translation,
        } = app._context.provides;

        Strings(translation);

        mqtt.subscribe('+/colors', (topic, data) => {
            StripManager.updateStrip(topic.split('/')[0], 'colors', JSON.parse(data));
        });

        subscribeUpdateProperty(mqtt, 'pin');
        subscribeUpdateProperty(mqtt, 'type');
        subscribeUpdateProperty(mqtt, 'count');
        subscribeUpdateProperty(mqtt, 'delay');
        subscribeUpdateProperty(mqtt, 'step');
        subscribeUpdateProperty(mqtt, 'offset');
        subscribeUpdateProperty(mqtt, 'brightness');

        app.provide('strips', StripManager);

        app.component('mqtt_neopixel', MqttNeopixel);
    },
};
