import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mitt from 'mitt'

const Mit = mitt()

const app = createApp(App)

declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

app.config.globalProperties.$Bus = Mit

app.mount('#app')
