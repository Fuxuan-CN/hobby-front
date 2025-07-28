import '@unocss/reset/sanitize/assets.css';
import '@unocss/reset/sanitize/sanitize.css';
import 'virtual:uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import { steupRouter } from './router';

const app = createApp(App);
steupRouter(app);

app.mount('#app');
