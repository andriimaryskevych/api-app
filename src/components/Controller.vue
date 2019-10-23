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
            <ImagePicker ref='imagePicker' />
        </tab-content>
        <tab-content title="Fill in form data"
                     :before-change="validateSecondStep"
                     icon="ti-check">
            <Form ref='mainForm' />
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
            count: 0,
            formData: {
                imageId: null,
                email: '',
                name: ''
            }
        }
    },
    components: {
        ImagePicker,
        Form
    },
    methods: {
        onComplete () {
            alert(JSON.stringify(this.formData))
        },
        validateFirstStep (data) {
            const stepData = this.$refs.imagePicker.selectedImageId

            if (!stepData) {
                this.errorMsg = 'Select image, please'

                return false
            }

            this.errorMsg = ''
            this.formData.imageId = stepData

            return true
        },
        validateSecondStep () {
            const { url, username, password } = this.$refs.mainForm.form

            this.formData.url = url
            this.formData.username = username
            this.formData.password = password

            return true
        }

    }
}
</script>
