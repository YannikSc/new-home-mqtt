import { createApp } from 'vue'
import Index from './Index.vue'
import './index.css'
import plugins from '../plugins.js';

/**
 * @type {App<Element>}
 */
const app = createApp(Index);

for (let plugin of plugins) {
    app.use(plugin);
}

app.mount('#app')
