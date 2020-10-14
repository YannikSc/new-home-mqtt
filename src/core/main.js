import { createApp } from 'vue';
import plugins from '../plugins.js';
import './index.css';
import Index from './Index.vue';

/**
 * @type {App<Element>}
 */
const app = createApp(Index);

app.provide('app', app);

for (const plugin of plugins) {
    app.use(plugin);
}

app.mount('#app');
