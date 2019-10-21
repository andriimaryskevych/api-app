<template>
    <form-wizard @on-complete="onComplete"
                 shape="circle"
                 color="gray"
                 error-color="#e74c3c"
                 title=""
                 subtitle=""
                 finishButtonText="Submit">
        <tab-content title="Select image"
                     :before-change="validateFirstStep"
                     icon="ti-user">
            <ImagePicker />
        </tab-content>
        <tab-content title="Fill in form data"
                     :before-change="validateSecondStep"
                     icon="ti-check">
            <Form />
        </tab-content>

        <div class="loader" v-if="loadingWizard"></div>
        <div v-if="errorMsg">
            <span class="error">{{errorMsg}}</span>
        </div>
    </form-wizard>
</template>
<style>
span.error{
  color:#e74c3c;
  font-size:20px;
  display:flex;
  justify-content:center;
}
</style>
<script>
import ImagePicker from './ImagePicker'
import Form from './Form'

export default {
    data () {
        return {
            loadingWizard: false,
            errorMsg: null,
            count: 0
        }
    },
    components: {
        ImagePicker,
        Form
    },
    methods: {
        onComplete () {
            alert('Yay. Done!')
        },
        validateFirstStep (data) {
            console.log(data)

            return true
        },
        validateSecondStep () {
            return true
        }

    }
}
</script>
