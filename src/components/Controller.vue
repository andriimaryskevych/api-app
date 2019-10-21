<template>
    <div class="home">
        <span>Controller</span>
        <ImagePicker />
        <Form />
    </div>
</template>

<script>
import ImagePicker from './ImagePicker'
import Form from './Form'

export default {
    name: 'Controller',
    components: {
        ImagePicker,
        Form
    }
}
</script>
