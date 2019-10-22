import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import './main.css'
Vue.use(VueFormWizard)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
