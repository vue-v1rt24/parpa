import './assets/css/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Toast, { type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';

const options: PluginOptions = {};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast, options);

app.mount('#app');
