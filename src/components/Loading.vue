<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
    data () {
        return {
            isLoading: false,
            fullPage: true
        }
    },
    components: {
        Loading
    },
    watch: {
        dashboard (newVal) {
            if (newVal && newVal.loading) {
                this.isLoading = true
            } else {
                this.isLoading = false
            }
        }
    },
    computed: {
        ...mapState({
            dashboard: state => state.dashboard
        })
    }
}
</script>
