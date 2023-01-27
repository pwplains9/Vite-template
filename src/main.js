import {createApp} from 'vue'
import {createPinia} from 'pinia'
import components from '@/components/UI'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import vhFix from "@/utils/vhFix";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(createPinia())
app.use(router)
app.use(vhFix.init)


app.mount('#app')
