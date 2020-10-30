import Base from './plugins/base/Base.js';
import MqttGpio from './plugins/mqtt_gpio/MqttGpio.js';
import MqttNeopixel from './plugins/mqtt_neopixel/MqttNeopixel.js';

// Add your plugins here
export default [
    Base,
    MqttNeopixel,
    MqttGpio,
];
