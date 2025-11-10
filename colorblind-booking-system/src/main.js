import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // ✅ or './assets/main.css' depending on your setup

const app = createApp(App)
app.use(router)
app.mount('#app')
