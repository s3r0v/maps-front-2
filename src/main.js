import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import YmapPlugin from 'vue-yandex-maps'

createApp(App).use(router, YmapPlugin).mount("#app");
