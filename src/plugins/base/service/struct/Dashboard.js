export class Dashboard {
    /**
     * @type {string[]}
     */
    groups = [];

    /**
     * @type {string}
     */
    name = '';

    /**
     * @param {string} name
     * @param {string[]} groups
     */
    constructor(name, groups) {
        this.name = name;
        this.groups = groups;
    }
}
