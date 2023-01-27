import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import AppView from "@/views/App/AppView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/app',
            name: 'app',
            component: AppView,
            meta: {
                title: 'App'
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title

    if (title) {
        document.title = title
    }

    next()
})
export default router
