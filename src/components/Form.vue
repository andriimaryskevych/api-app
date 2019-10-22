<template>
    <div class="form-wrapper">
        <b-form v-if="show">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

        </b-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                email: '',
                name: ''
            },
            show: true
        }
    }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
    width: 50%;
    margin: 0 auto;
}
</style>
