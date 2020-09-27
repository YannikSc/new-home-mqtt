import AppContent from './components/template/AppContent.vue';
import AppHeader from './components/template/AppHeader.vue';
import AppMenu from './components/template/AppMenu.vue';
import AppString from './components/atoms/AppString.vue';
import AppManager from './service/AppManager';
import AppListingView from './components/views/AppListingView.vue';
import Translation from './service/Translation';
import Strings from './Strings';
import App from './service/struct/App';
import { Cog } from 'mdue';
import { Translate } from './service/Translation.js';

export default {
    /**
     * @param {App<Element>} app
     */
    install(app) {
        Strings(Translation);

        app.provide('translation', Translation);
        app.provide('apps', AppManager);

        AppManager.add(new App(Translate('app.settings.title'), Cog, Cog));
        AppManager.add(new App(Translate('app.settings.title'), Cog, AppListingView));
        AppManager.add(new App(Translate('app.settings.title'), Cog, Cog));
        AppManager.add(new App(Translate('app.settings.title'), Cog, Cog));
        AppManager.add(new App(Translate('app.settings.title'), Cog, Cog));
        AppManager.add(new App(Translate('app.settings.title'), Cog, Cog));
        AppManager.add(new App(Translate('app.settings.title'), Cog, Cog));

        app.component('app-header', AppHeader);
        app.component('app-menu', AppMenu);
        app.component('app-content', AppContent);
        app.component('app-default-view', AppListingView);
        app.component('trans', AppString);
        app.component('AppListingView', AppListingView);
    }
};
