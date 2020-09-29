export class Settings {
    /**
     * @type {string}
     */
    mqtt_host = '';

    /**
     * @type {string}
     */
    mqtt_username = '';

    /**
     * @type {string}
     */
    mqtt_password = '';

    /**
     * TODO: Rewrite to API
     *
     * @return {Settings}
     */
    static fromLocalStorage() {
        const {
            mqtt_host,
            mqtt_username,
            mqtt_password
        } = JSON.parse(localStorage.getItem('settings') || '{}');

        return new Settings(
            mqtt_host || '',
            mqtt_username || '',
            mqtt_password || ''
        );
    }

    /**
     * @param {string} mqtt_host
     * @param {string} mqtt_username
     * @param {string} mqtt_password
     */
    constructor(mqtt_host, mqtt_username, mqtt_password) {
        this.mqtt_host = mqtt_host;
        this.mqtt_username = mqtt_username;
        this.mqtt_password = mqtt_password;
    }

    /**
     * TODO: Rewrite to API
     */
    saveToLocalStorage() {
        localStorage.setItem('settings', JSON.stringify(this));
    }
}
