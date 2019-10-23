import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './action-types'

Vue.use(Vuex)

const dashboardUrl = 'https://public.tableau.com/shared/C9GJC4YG2?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=no&:display_overlay=yes&:display_count=yes&:loadOrderID=0'

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
        [types.FETCH_DASHBOARD_LOADING] (state) {
            state.dashboard = {
                data: null,
                loading: true,
                error: false,
                errorMessage: ''
            }
        },
        [types.FETCH_DASHBOARD_SUCCESS] (state, data) {
            state.dashboard = {
                data,
                loading: false,
                error: false,
                errorMessage: ''
            }
        },
        [types.FETCH_DASHBOARD_FAILURE] (state, errorMessage) {
            state.dashboard = {
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
                commit(types.FETCH_DASHBOARD_SUCCESS, { url: dashboardUrl })
            }, 2000)
        }
    }
})
