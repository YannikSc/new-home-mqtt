import { GroupItemType } from '../base/service/struct/GroupItemType.js';
import GroupItemTypeNeopixel from './components/templates/GroupItemTypeNeopixel.vue';
import GroupItemTypeNeopixelEditor from './components/templates/GroupItemTypeNeopixelEditor.vue';
import MqttNeopixel from './components/views/MqttNeopixel.vue';
import StripManager from './service/StripManager.js';
import Strings from './Strings.js';

function subscribeUpdateProperty(mqtt, propertyName) {
    mqtt.subscribe('+/' + propertyName, (topic, data) => {
        StripManager.updateStrip(topic.split('/')[0], propertyName, parseInt(data));
    });
}

function addDashboardItems(groupItems) {
    groupItems.addType(new GroupItemType('neopixel', 'GroupItemTypeNeopixelEditor', 'GroupItemTypeNeopixel'));
}

export default {
    install(app) {
        const {
            mqtt,
            translation,
            group_items,
        } = app._context.provides;

        addDashboardItems(group_items);

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
        app.component('GroupItemTypeNeopixel', GroupItemTypeNeopixel);
        app.component('GroupItemTypeNeopixelEditor', GroupItemTypeNeopixelEditor);
    },
};
