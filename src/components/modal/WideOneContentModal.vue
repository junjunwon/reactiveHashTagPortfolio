<template>
    <div>
        <b-modal 
            ref="onePictureModal"
            v-model="modalShow"
            hide-footer
            hide-header
            scrollable
            style="background-color:black; z-index:888;"
            modal-class="modal-fullscreen">
                <video @click="hideModal" v-show="getModalInfo.isImg === false" webkit-playsinline playsinline loop autoplay muted preload="auto" >
                    <source :src="getModalInfo.imgSrc" type="video/mp4" />
                </video>
                <img
                @click="hideModal"
                loading="lazy"
                :src="getModalInfo.imgSrc"
                v-show="getModalInfo.isImg === true"
                blank="true"
                />
        </b-modal>
    </div>
</template>
<script>
export default {
    props: {
        propModalShow : {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    computed: {
        modalShow : {
            get () {
                return this.propModalShow
            },
            set (modalShow) {
                return modalShow
            }
        },
        getModalInfo () {
            console.log('getModalInfo!!!!!!!!!!!')
            console.log(this.$store.getters.getWidePictureModalInfo.imgSrc)
            return this.$store.getters.getWidePictureModalInfo
        },
    },
    methods: {
        hideModal() {
            this.$refs['onePictureModal'].hide()
        },
    }
}
</script>
<style scoped>
    .modal-body img{
    position: absolute; top:0; left: 0;
    width: 100%;
    height: 100%;
    }
</style>