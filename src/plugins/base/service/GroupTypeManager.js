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

    getType(name) {
        for (const type of this.types) {
            if (type.name === name) {
                return type;
            }
        }

        return new GroupItemType(name, '', '');
    }
}

export const DefaultGroupTypeManager = new GroupTypeManager();
