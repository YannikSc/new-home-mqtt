/**
 * @param {Translation} translation
 */
export default function (translation) {
    translation.addStrings('en', {
        'app.mqtt_gpio.pinout.esp32': 'ESP 32',
        'app.mqtt_gpio.pinout.esp8266': 'ESP 8266',
        'app.mqtt_gpio.pinout.custom': 'Custom',
        'app.mqtt_gpio.title': 'MQTT GPIO',
        'app.mqtt_gpio.pin_model_select': 'Controller pinout',
        'app.mqtt_gpio.pin_select': 'Pin',
        'app.mqtt_gpio.pin_mode': 'Mode',
        'app.mqtt_gpio.pin_value': 'Value',
        'app.mqtt_gpio.button_apply': 'Apply',
    });
    translation.addStrings('de', {
        'app.mqtt_gpio.pinout.esp32': 'ESP 32',
        'app.mqtt_gpio.pinout.esp8266': 'ESP 8266',
        'app.mqtt_gpio.pinout.custom': 'Andere',
        'app.mqtt_gpio.title': 'MQTT GPIO',
        'app.mqtt_gpio.pin_model_select': 'Controller Ausgänge',
        'app.mqtt_gpio.pin_select': 'Pin',
        'app.mqtt_gpio.pin_mode': 'Modus',
        'app.mqtt_gpio.pin_value': 'Wert',
        'app.mqtt_gpio.button_apply': 'Anwenden',
    });
}
