export class ShortcutManager {
    shortcuts = {};

    get(shortcutName) {
        return this.shortcuts[shortcutName];
    }

    add(shortcutName, shortcutData) {
        this.shortcuts[shortcutName] = shortcutData;
    }
}

export default new ShortcutManager();
