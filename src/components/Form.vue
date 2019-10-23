<template>
    <div class="form-wrapper">
        <b-form v-if="show">
            <b-form-group id="input-group-1" label="DB URL:" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="form.url"
                    required
                    placeholder="Enter URL"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Username:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.username"
                    required
                    placeholder="Enter username"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Password" label-for="input-3">
                <b-form-input
                    id="input-3"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter password"
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
                url: '',
                username: '',
                password: ''
            },
            show: true
        }
    }
}
</script>

<style lang="scss">
.form-wrapper {
    width: 40%;
    margin: 0 auto;

    .form-group {
        display: flex;
        align-items: center;

        label {
            margin-right: 10px;
        }

        div {
            flex: 1;
        }
    }
}
</style>
