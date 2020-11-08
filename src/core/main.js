import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import './index.css';
import Index from './Index.vue';

export default function main(plugins, settings) {
    /**
     * @type {App<Element>}
     */
    const app = createApp(Index);

    app.provide('app', app);
    app.use(ElementPlus);

    for (const plugin of plugins) {
        app.use(plugin, settings);
    }

    app.mount('#app');
}
