import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import VueFormWizard from 'vue-form-wizard'
import BootstrapVue from 'bootstrap-vue'

import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './main.css'

Vue.use(BootstrapVue)
Vue.use(VueFormWizard)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
