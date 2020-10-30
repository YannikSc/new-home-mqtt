import MqttGpio from './components/views/MqttGpio.vue';
import Strings from './Strings.js';

export default {
    install(app) {
        const {
            mqtt,
            translation,
        } = app._context.provides;

        Strings(translation);

        app.component('mqtt_gpio', MqttGpio);
    },
};
