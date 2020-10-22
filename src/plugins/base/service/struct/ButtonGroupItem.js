import { GroupItem } from './GroupItem.js';

export class ButtonGroupItem extends GroupItem {
    /**
     * @type {string}
     */
    name = '';

    /**
     * @type {{shortcut: string}}
     */
    data = {
        shortcut: '',
    };

    /**
     * @type {string}
     */
    type = 'button';

    constructor(name, shortcut) {
        super();
        this.name = name;
        this.data.shortcut = shortcut;
    }
}
