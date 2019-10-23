import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './action-types'

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
        },
        dashboard: {
            data: null,
            error: false,
            loading: false,
            errorMessage: ''
        }
    },
    mutations: {
        [types.FETCH_DASHBOARD_LOADING] () {
            this.dashboard = {
                data: null,
                loading: true,
                error: false,
                errorMessage: ''
            }
        },
        [types.FETCH_DASHBOARD_SUCCESS] (data) {
            this.dashboard = {
                data,
                loading: false,
                error: false,
                errorMessage: ''
            }
        },
        [types.FETCH_DASHBOARD_FAILURE] (errorMessage) {
            this.dashboard = {
                data: null,
                loading: false,
                error: true,
                errorMessage
            }
        }
    },
    actions: {
        [types.FETCH_DASHBOARD_REQUEST] ({ commit }) {
            commit(types.FETCH_DASHBOARD_LOADING)

            setTimeout(() => {
                commit(types.FETCH_DASHBOARD_SUCCESS, { url: 'https://www.google.com.ua' })
            }, 2000)
        }
    }
})
