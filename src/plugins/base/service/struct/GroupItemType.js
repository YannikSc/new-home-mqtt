export class GroupItemType {
    /**
     * @type {string}
     */
    name = '';

    /**
     * @type {string}
     */
    editorComponent = '';

    /**
     * @type {string}
     */
    uiComponent = '';

    /**
     *
     * @param {string} name
     * @param {string} editorComponent
     * @param {string} uiComponent
     */
    constructor(name, editorComponent, uiComponent) {
        this.name = name;
        this.editorComponent = editorComponent;
        this.uiComponent = uiComponent;
    }
}
