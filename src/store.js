import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formData: {
            images: [
                {
                    id: 1,
                    src: require('./assets/logo1.png')
                },
                {
                    id: 2,
                    src: require('./assets/logo2.png')
                },
                {
                    id: 3,
                    src: require('./assets/logo3.png')
                }
            ]
        }
    },
    mutations: {

    },
    actions: {

    }
})
