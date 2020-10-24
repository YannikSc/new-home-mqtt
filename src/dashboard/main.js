import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import plugins from '../plugins.js';
import Dashboard from './Dashboard.vue';
import './index.css';

/**
 * @type {App<Element>}
 */
const app = createApp(Dashboard);

app.provide('app', app);
app.use(ElementPlus);

for (const plugin of plugins) {
    app.use(plugin);
}

app.mount('#app');
