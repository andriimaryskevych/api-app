<template>
    <div class="dashboard-container">
        <router-link to="/" class="back-link">Go back</router-link>
        <div class="dashboard-iframe">
            <iframe v-if="iframeUrl" :src="iframeUrl" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            iframeUrl: state => state.dashboard.data.url
        })
    }
}
</script>

<style lang="scss">
.back-link {
    color: green;
    position: fixed;
}
</style>
