import { GroupItem } from './GroupItem.js';

export class ButtonGroupItem extends GroupItem {
    /**
     * @type {{shortcuts: [string]}}
     */
    data = {
        shortcuts: [],
    };

    /**
     * @param {string} name
     * @param {[string]} shortcuts
     */
    constructor(name, shortcuts = []) {
        super(name, 'button', { shortcuts: shortcuts });
    }
}
