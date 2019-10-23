<template>
    <div class="image-form-container">
        <div
            v-for="image in images"
            v-bind:key="image.id"
            :class="`image-container ${selectedImageId === image.id ? 'selected' : ''}`"
            @click.prevent="_ => onImageClick(image.id)"
        >
            <img :src="image.src">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ImagePicker',
    data () {
        return {
            selectedImageId: null
        }
    },
    methods: {
        onImageClick (imageId) {
            this.selectedImageId = imageId
        }
    },
    computed: mapState({
        images: state => state.formData.images
    })
}
</script>

<style lang="scss" scoped>
.image-form-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
        margin-right: 20px;
        border: 5px solid rebeccapurple;
        border-radius: 10px;
        padding: 10px;

        &.selected {
            border-color: green;
        }
    }
}
</style>
