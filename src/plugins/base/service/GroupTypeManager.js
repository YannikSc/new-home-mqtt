import { GroupItemType } from './struct/GroupItemType.js';

export class GroupTypeManager {
    /**
     * @type {GroupItemType[]}
     */
    types = [];

    /**
     * @param {GroupItemType} type
     */
    addType(type) {
        this.types.push(type);
    }

    /**
     * @param {string} name
     * @returns {GroupItemType}
     */
    getType(name) {
        for (const type of this.types) {
            if (type.name === name) {
                return type;
            }
        }

        return new GroupItemType(name, '', '');
    }

    /**
     * @returns {string[]}
     */
    listTypes() {
        return this.types.map(type => type.name);
    }
}

export const DefaultGroupTypeManager = new GroupTypeManager();
