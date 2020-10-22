export class Group {
    /**
     * @type {string}
     */
    name = '';

    /**
     * Determines the size in the grid.
     * The size is given as columns <b>at least</b>. The last element will be stretched to match the grid width.
     * So a grid with a width of 24 and groups with 1: 12, 2: 8 will stretch the 2 to 12.
     *
     * The grid has a width of 24 - 24 - 12 (l > 1280px, md <= 1280px , s <= 480px).
     *
     * <b>Note:</b> the described scale may change!
     *
     * @type {number}
     */
    size = 12;

    /**
     * @type {number}
     */
    order = 0;

    /**
     * @type {GroupItem[]}
     */
    items = [];

    /**
     * @return {Group}
     */
    static fromObject(object) {
        return new Group(
            object.name,
            object.size,
            object.order,
            object.items,
        );
    }

    /**
     * @param {string} name
     * @param {number} size
     * @param {number} order
     * @param {GroupItem[]} items
     */
    constructor(name, size, order, items = []) {
        this.name = name;
        this.size = size;
        this.order = order;
        this.items = items;
    }

    /**
     * @return {Group}
     */
    clone() {
        return Group.fromObject(this);
    }
}
