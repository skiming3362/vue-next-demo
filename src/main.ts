import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');

console.log(window.__dirname);

// import os from 'os';

const fs = window.fs;
const path = window.path;

// console.log(os.platform(), os.hostname(), os.homedir());
// console.log(process.execPath);

console.log(fs.readFileSync(path.resolve(window.__dirname, '../src/components/test.txt'), 'utf-8'));
