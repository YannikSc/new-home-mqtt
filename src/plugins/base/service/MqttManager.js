/**
 * @param {string} topic
 * @returns {RegExp}
 */
function convertTopicToRegex(topic) {
    topic = topic.replace('+', '([^/]*)');
    topic = topic.replace('#', '(.*)');

    return new RegExp(`^${topic}$`);
}

/**
 * @function
 *
 * @name MqttPublishHook
 * @param {string} topic
 * @param {string} payload
 * @param {Object} options
 */

/**
 * Manages Mqtt Communication
 */
export class MqttManager {
    /**
     * @type {Object.<string, Array.<function>>}
     *
     * @private
     */
    _subscribes = {};

    /**
     * @private
     */
    _client;

    /**
     * @type {Promise}
     *
     * @private
     */
    _connect;

    /**
     * @type {null|MqttPublishHook}
     *
     * @private
     */
    _publishHook = null;

    /**
     * @param {string} address
     * @param {string|null} username
     * @param {string|null} password
     */
    constructor(address, username, password) {
        this._client = mqtt.connect(address, {
            username,
            password,
        });
        this._client.on('message', this._handleMessage.bind(this));

        this._connect = new Promise(((resolve, reject) => {
            this._client.on('connect', resolve);
            this._client.on('error', reject);
        }));
    }

    /**
     * @param {string} topic
     * @param {function} callback
     */
    subscribe(topic, callback) {
        if (!this._subscribes[topic]) {
            this._subscribes[topic] = [];
            this._connect.then(this._client.subscribe.bind(this._client, topic));
        }

        this._subscribes[topic].push(callback);
    }

    /**
     * @param {string} topic
     * @param {function} callback
     */
    unsubscribe(topic, callback) {
        if (!this._subscribes[topic]) {
            return;
        }

        const callbackIndex = this._subscribes[topic].indexOf(callback);
        this._subscribes[topic].splice(callbackIndex, 1);

        if (this._subscribes[topic].length === 0) {
            this._connect.then(this._client.unsubscribe.bind(this._client, topic));
        }
    }

    /**
     * @param {string} topic
     * @param {string} payload
     * @param {Object} options
     * @param {Boolean} skipHook
     */
    publish(topic, payload, options = {}, skipHook = false) {
        if (!skipHook && this._publishHook) {
            this._publishHook(topic, payload, options);

            return;
        }

        this._client.publish(topic, payload, options);
    }

    /**
     * @param  {MqttPublishHook} hook
     */
    setHook(hook) {
        if (this._publishHook) {
            throw new Error('A hook is already set');
        }

        this._publishHook = hook;
    }

    unsetHook() {
        this._publishHook = null;
    }

    /**
     * @return {Boolean}
     */
    isHooked() {
        return this._publishHook !== null;
    }

    /**
     * @param {string} messageTopic
     * @param {Uint8Array} rawPayload
     *
     * @private
     */
    _handleMessage(messageTopic, rawPayload) {
        const payload = (new TextDecoder('utf-8')).decode(rawPayload);

        for (const topic in this._subscribes) {
            if (!this._subscribes.hasOwnProperty(topic)) {
                continue;
            }

            if (convertTopicToRegex(topic).test(messageTopic)) {
                this._notifyAll(topic, messageTopic, payload);
            }
        }
    }

    /**
     * @param {string} topic
     * @param {string} payload
     *
     * @private
     */
    _notifyAll(key, topic, payload) {
        for (const handler of this._subscribes[key]) {
            handler(topic, payload);
        }
    }
}
