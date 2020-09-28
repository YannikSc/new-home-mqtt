import AppContent from './components/template/AppContent.vue';
import AppHeader from './components/template/AppHeader.vue';
import AppMenu from './components/template/AppMenu.vue';
import AppString from './components/atoms/AppString.vue';
import AppManager from './service/AppManager';
import AppListingView from './components/views/AppListingView.vue';
import Translation from './service/Translation';
import Strings from './Strings';
import App from './service/struct/App';
import { ImageBroken } from 'mdue';
import { Translate } from './service/Translation.js';
import AppSettingsView from './components/views/AppSettingsView.vue';
import { DefaultMqttManager } from './service/MqttManager.js';

/**
 * @param {AppManager} apps
 */
function addApps(apps) {
    apps.add(new App(Translate('app.settings.title'), AppSettingsView.icon, AppSettingsView));
    apps.add(new App(Translate('menu.title_apps'), AppListingView.icon, AppListingView));
}

/**
 * @param {AppManager}apps
 * @param {MqttManager} mqtt
 * @param {App<Element>} app
 */
function addAppListener(apps, mqtt, app) {
    mqtt.subscribe('+/application', (topic, appName) => {
        const clientName = topic.replaceAll('/application', '');
        const component = app.component(appName);

        apps.add(new App(clientName, component && component.icon ? component.icon : ImageBroken, appName));
    });
}

export default {
    /**
     * @param {App<Element>} app
     */
    install(app) {
        Strings(Translation);

        addApps(AppManager);
        addAppListener(AppManager, DefaultMqttManager, app);

        app.provide('translation', Translation);
        app.provide('apps', AppManager);
        app.provide('mqtt', DefaultMqttManager);

        app.component('app-header', AppHeader);
        app.component('app-menu', AppMenu);
        app.component('app-content', AppContent);
        app.component('app-default-view', AppListingView);
        app.component('trans', AppString);
        app.component('AppListingView', AppListingView);
        app.component('AppSettingsView', AppSettingsView);
    }
};
