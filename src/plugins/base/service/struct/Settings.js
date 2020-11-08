export class Settings {
    /**
     * @type {string}
     */
    mqttHost = '';

    /**
     * @type {string}
     */
    mqttUsername = '';

    /**
     * @type {string}
     */
    mqttPassword = '';

    /**
     * @return {Settings}
     */
    static fromRawSettings(settings) {
        return new Settings(
            settings['settings.mqtt_url'],
            settings['settings.mqtt_user'],
            settings['settings.mqtt_pass']
        );
    }

    /**
     * @param {string} mqttHost
     * @param {string} mqttUsername
     * @param {string} mqttPassword
     */
    constructor(mqttHost, mqttUsername, mqttPassword) {
        this.mqttHost = mqttHost;
        this.mqttUsername = mqttUsername;
        this.mqttPassword = mqttPassword;
    }

    /**
     * Returns an object matching the settings.js format
     *
     * @returns {{'settings.mqtt_url': string, 'settings.mqtt_user': string, 'settings.mqtt_pass': string}}
     */
    toSettings() {
        return {
            'settings.mqtt_url': this.mqttHost,
            'settings.mqtt_user': this.mqttUsername,
            'settings.mqtt_pass': this.mqttPassword
        };
    }
}
