export default class App {
    /**
     * @type {string}
     */
    displayName = '';

    /**
     * @type {Component}
     */
    icon = null;

    /**
     * @type {Component}
     */
    contentComponent = null;

    /**
     * @type {any}
     */
    data = {};

    /**
     * @param {string} displayName
     * @param {Component|{name: string}} icon
     * @param {Component|{name: string}} contentComponent
     * @param {any} data
     */
    constructor(displayName, icon, contentComponent, data = {}) {
        this.displayName = displayName;
        this.icon = icon;
        this.contentComponent = contentComponent;
        this.data = data;
    }
}
