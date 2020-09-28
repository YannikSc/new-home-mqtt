import { markRaw, reactive } from '@vue/reactivity';

export class AppManager {
    _apps = reactive({ list: [] });

    /**
     * @returns {App[]}
     */
    getAll() {
        return this._apps.list;
    }

    /**
     * @param {App} app
     */
    add(app) {
        this._apps.list.push(markRaw(app));
    }
}

export default new AppManager();
