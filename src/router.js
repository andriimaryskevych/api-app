import Vue from 'vue'
import Router from 'vue-router'
import Controller from './components/Controller'
import Dashboard from './components/Dashboard'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'form',
            component: Controller
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
