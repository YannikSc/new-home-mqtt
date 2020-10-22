import settings from '../../../settings.js';
import { ButtonGroupItem } from './struct/ButtonGroupItem.js';
import { Dashboard } from './struct/Dashboard.js';
import { Group } from './struct/Group.js';

export class BackendGateway {
    url = '';

    username = '';

    password = '';

    constructor(config = {}) {
        this.url = config.url || settings['settings.backend_url'];
        this.username = config.username || settings['settings.backend_user'];
        this.password = config.password || settings['settings.backend_pass'];
    }

    /**
     * @param {Object.<string, string>} settings
     *
     * @returns {Promise<Response>}
     */
    saveSettings(settings) {
        return fetch(this._prepareRequest('POST', '/settings', JSON.stringify(settings)));
    }

    /**
     * @return {Promise<[Shortcut]>}
     */
    listShortcuts() {
        return fetch(this._prepareRequest('GET', '/shortcut')).then(response => response.json());
    }

    /**
     * @param {string} name
     *
     * @return {Promise<[Shortcut]>}
     */
    getShortcut(name) {
        return fetch(this._prepareRequest('GET', `/shortcut/${name}`)).then(response => response.json());
    }

    /**
     * @param {string} name
     * @param {[Shortcut]} shortcut
     *
     * @return {Promise<[Shortcut]>}
     */
    postShortcut(name, shortcut) {
        return fetch(this._prepareRequest('POST', `/shortcut/${name}`, JSON.stringify(shortcut))).then(response => response.json());
    }

    /**
     * @param {string} name
     *
     * @return {Promise<[Shortcut]>}
     */
    deleteShortcut(name) {
        return fetch(this._prepareRequest('DELETE', `/shortcut/${name}`)).then(response => response.json());
    }

    /**
     * @return {Promise<[Dashboard]>}
     */
    listDashboards() {
        return new Promise((resolve, reject) => {
            resolve([
                new Dashboard('Example', []),
                new Dashboard('Filled Example', ['Test', 'Test 2', 'Test 3']),
            ]);
        });
    }

    /**
     * @return {Promise<[Dashboard]>}
     */
    getDashboard(name) {
        return new Promise((resolve, reject) => {
            resolve(new Dashboard(name, ['Test', 'Test 2', 'Test 3']));
        });
    }

    /**
     * @param {string} name
     */
    getGroup(name) {
        return new Promise((resolve, reject) => {
            resolve(new Group(name, 24, 0, [
                new ButtonGroupItem('Test', 'unknown'),
            ]));
        });
    }

    /**
     * @param {string} name
     * @param {Group} group
     */
    postGroup(name, group) {
        console.log('Saving group ' + name, group);

        return new Promise((resolve, reject) => {
            resolve(new Group(name, 24, 0, [
                new ButtonGroupItem('Test', 'unknown'),
            ]));
        });
    }

    /**
     * @param {string} method
     * @param {string} url
     * @param {any} body
     * @returns {Request}
     * @private
     */
    _prepareRequest(method, url, body = null) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));

        return new Request(this.url.replace(/^(.*)\/$/, '$1') + url, {
            method,
            headers,
            body,
        });
    }
}

export const DefaultBackendGateway = new BackendGateway();
