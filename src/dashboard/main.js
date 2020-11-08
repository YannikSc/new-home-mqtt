import ElementPlus from 'element-plus';
import { createApp } from 'vue';
import '../theme-coal/lib/index.css';
import Dashboard from './Dashboard.vue';
import './index.css';

export default function main(plugins, settings) {
    /**
     * @type {App<Element>}
     */
    const app = createApp(Dashboard);

    app.provide('app', app);
    app.use(ElementPlus);

    for (const plugin of plugins) {
        app.use(plugin, settings);
    }

    app.mount('#app');
}
