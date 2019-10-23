<template>
    <div class="dashboard-container">
        <iframe v-if="iframeUrl" :src="iframeUrl" frameborder="0"></iframe>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            iframeUrl: ''
        }
    },
    watch: {
        dashboard (newVal) {
            console.log(newVal)

            if (newVal && newVal.data && newVal.data.url) {
                this.iframeUrl = newVal.data.url
            } else {
                this.iframeUrl = ''
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
