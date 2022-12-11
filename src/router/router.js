import { createRouter, createWebHistory } from "vue-router";
import MainNew from "@/pages/MainNew"
import Maps from "@/pages/Maps"




const routes = [
    {
        path: '/',
        component: MainNew
    },
    {
        path: '/maps',
        component: Maps
    }
    
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;