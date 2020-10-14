import { DefaultBackendGateway } from './BackendGateway.js';

export class ShortcutManager {
    /**
     * @type {BackendGateway}
     */
    backendGateway = null;

    /**
     * @param {BackendGateway} backendGateway
     */
    constructor(backendGateway) {
        this.backendGateway = backendGateway;
    }

    async list() {
        return await this.backendGateway.listShortcuts();
    }

    async add(shortcutName, shortcutData) {
        await this.backendGateway.postShortcut(shortcutName, shortcutData);
    }

    async delete(shortcutName) {
        await this.backendGateway.deleteShortcut(shortcutName);
    }
}

export default new ShortcutManager(DefaultBackendGateway);
