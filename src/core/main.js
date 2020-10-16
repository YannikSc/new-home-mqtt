import { createApp } from 'vue';
import plugins from '../plugins.js';
import './index.css';
import Index from './Index.vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

/**
 * @type {App<Element>}
 */
const app = createApp(Index);

app.provide('app', app);
app.use(ElementPlus);

for (const plugin of plugins) {
    app.use(plugin);
}

app.mount('#app');
