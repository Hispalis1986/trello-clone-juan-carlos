// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import trelloStore from './store/index';

const app = createApp(App);
app.use(trelloStore);
app.mount('#app');
// createApp(App).mount('#app');
