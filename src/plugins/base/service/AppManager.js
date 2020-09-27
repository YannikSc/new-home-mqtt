export class AppManager {
    _apps = [];

    getAll() {
        return this._apps;
    }

    add(app) {
        this._apps.push(app);
    }
}

export default new AppManager();
