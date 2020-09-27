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
     * @param {string} displayName
     * @param {Component|{name: string}} icon
     * @param {Component|{name: string}} contentComponent
     */
    constructor(displayName, icon, contentComponent) {
        this.displayName = displayName;
        this.icon = icon;
        this.contentComponent = contentComponent;
    }
}
