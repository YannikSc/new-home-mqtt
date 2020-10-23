export class GroupItem {
    /**
     * @type {string}
     */
    name = '';

    /**
     * @type {string}
     */
    type = '';

    /**
     * @type {Object.<string,string>}
     */
    data = {};

    /**
     * @param {string} name
     * @param {string} type
     * @param {Object} data
     */
    constructor(name, type = '', data = {}) {
        this.name = name;
        this.type = type;
        this.data = data;
    }
}
