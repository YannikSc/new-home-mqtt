export class Shortcut {
    /**
     * @type {string}
     */
    topic = '';

    /**
     * @type {string}
     */
    payload = '';

    /**
     * @type {string}
     */
    options = '';

    /**
     * @param {string} topic
     * @param {string} payload
     * @param {string} options
     */
    constructor(topic, payload, options) {
        this.topic = topic;
        this.payload = payload;
        this.options = options;
    }
}
