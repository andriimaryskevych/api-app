<template>
    <div>Dashboard</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {}
    },
    watch: {
        dashboard (newVal) {
            console.log(newVal)
        }
    },
    computed: {
        ...mapState({
            dashboard: state => state.dashboard
        })
    }
}
</script>
