import settings from '/public/settings.js';
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
        return fetch(this._prepareRequest('GET', `/shortcut/${encodeURIComponent(name)}`)).then(response => response.json());
    }

    /**
     * @param {string} name
     * @param {[Shortcut]} shortcut
     *
     * @return {Promise<[Shortcut]>}
     */
    postShortcut(name, shortcut) {
        return fetch(this._prepareRequest('POST', `/shortcut/${encodeURIComponent(name)}`, JSON.stringify(shortcut))).then(response => response.json());
    }

    /**
     * @param {string} name
     *
     * @return {Promise<[Shortcut]>}
     */
    deleteShortcut(name) {
        return fetch(this._prepareRequest('DELETE', `/shortcut/${encodeURIComponent(name)}`)).then(response => response.json());
    }

    /**
     * @return {Promise<[Dashboard]>}
     */
    listDashboards() {
        return fetch(this._prepareRequest('GET', '/dashboard')).then(response => response.json());
    }

    /**
     * @param {string} name
     *
     * @return {Promise<[Dashboard]>}
     */
    getDashboard(name) {
        return fetch(this._prepareRequest('GET', `/dashboard/${encodeURIComponent(name)}`)).then(response => response.json());
    }

    /**
     * @param {string} name
     * @param {Dashboard} dashboard
     *
     * @return {Promise<[Dashboard]>}
     */
    postDashboard(name, dashboard) {
        return fetch(this._prepareRequest('POST', `/dashboard/${encodeURIComponent(name)}`, JSON.stringify(dashboard))).then(response => response.json());
    }

    /**
     * @param {string} name
     *
     * @returns {Promise<[Dashboard]>}
     */
    deleteDashboard(name) {
        return fetch(this._prepareRequest('DELETE', `/dashboard/${encodeURIComponent(name)}`)).then(response => response.json());
    }

    /**
     * @param {string} name
     *
     * @return {Promise<Group|null>}
     */
    async getGroup(name) {
        try {
            const group = await (await fetch(this._prepareRequest('GET', `/group/${encodeURIComponent(name)}`))).json();

            if (group === null || typeof group !== 'object') {
                return null;
            }

            return Group.fromObject(group);
        } catch (e) {
            console.error(e);

            return null;
        }
    }

    /**
     * @param {string} name
     * @param {Group} group
     *
     * @return {Promise<Group|null>}
     */
    async postGroup(name, groupBody) {
        try {
            const group = await (await fetch(this._prepareRequest('POST', `/group/${encodeURIComponent(name)}`, JSON.stringify(groupBody)))).json();

            if (group === null || typeof group !== 'object') {
                return null;
            }

            return Group.fromObject(group);
        } catch (e) {
            console.error(e);

            return null;
        }
    }

    /**
     * @param {string} name
     *
     * @return {Promise<Group|null>}
     */
    async deleteGroup(name) {
        try {
            const group = await (await fetch(this._prepareRequest('DELETE', `/group/${encodeURIComponent(name)}`))).json();

            if (group === null || typeof group !== 'object') {
                return null;
            }

            return Group.fromObject(group);
        } catch (e) {
            console.error(e);

            return null;
        }
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
