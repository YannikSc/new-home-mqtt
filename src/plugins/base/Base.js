import AppHeader from './components/template/AppHeader.vue';
import AppSidebar from './components/template/AppMenu.vue';

export default {
    /**
     * @param {App<Element>} app
     */
    install(app) {
        app.component('app-header', AppHeader);
        app.component('app-menu', AppSidebar);
    }
};
