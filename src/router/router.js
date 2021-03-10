import Vue from 'vue'
import VueRouter from 'vue-router'
import OrdersList from '../views/OrdersList.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/Orders',
        name: 'OrdersList',
        component: OrdersList
    },
    {
        path: '/',
        name: 'HomePage',
        redirect: '/Orders' // redirect / to /Orders
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router