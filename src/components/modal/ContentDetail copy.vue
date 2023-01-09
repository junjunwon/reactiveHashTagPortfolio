<template>
    <div>
        <b-modal 
            title="BootstrapVue"
            v-model="modalShow"
            hide-footer
            hide-header
            scrollable
            style="background-color:black;"
        >
            <b-row id="rowSquare" align-v="stretch">
                <b-col cols="3" align-self="start">
                    <img v-show="getModalInfo.isImg" :src="showImage" />
                    <video v-show="!getModalInfo.isImg" webkit-playsinline playsinline loop autoplay muted preload="auto" name="2022voty-vertical-main-cover.mp4" @click="clickImgtoModal($event)" >
                        <source :src="showImage" type="video/mp4" />
                    </video>
                </b-col>
                <b-col cols="9" align-self="start">
                    
                </b-col>
            </b-row>
            <b-row>
                asdjaskfldjlaksjflkjadslkfjasljalf;jdas;lfkaj
            </b-row>
        </b-modal>
        <b-modal modal-class="my-second-class">
            <template #modal-header>Header</template>
            Hello
        </b-modal>
        <!-- <div class="modal-dialog modal-fullscreen" :v-model="modalShow">
          ...
        </div> -->
    </div>
</template>

<script>
export default {
    name : 'ContentDetail',
    components : {

    },
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
    created() {

    },
    computed : {
        modalShow () {
            console.log('modalshow')
            return this.propModalShow
        },
        getModalInfo () {
            return this.$store.getters.getModalInfo
        },
        showImage() {
            // ../assets/img/2022voty-vertical-main-cover.mp4
            console.log('../../assets/img/' + this.getModalInfo.imgName)
            return require('../../assets/img/' + this.getModalInfo.imgName);
            // // return require('../../assets/img/' + this.getModalInfo.imgName);
            // if(this.getModalInfo.isImg) {
            //     return require('../../assets/img/' + this.getModalInfo.imgName);
            // } else {
            //     return require('../../assets/img/' + this.getModalInfo.imgName);
            // }
        }
    },
    methods: {
        
    }

}
</script>
<style>
/* .modal-fullscreen1 .modal {
    padding: 0 !important;
}
.modal-fullscreen1 .modal-dialog {
    max-width: 100%;
    height: 100%;
    margin: 0;
}
.modal-fullscreen1 .modal-content {
    border: 0;
    border-radius: 0;
    min-height: 100%;
    height: auto;
} */
/deep/ .modal-content {
    position: fixed !important;
    top : 0 !important;
    left : 0 !important;
    right: 0 !important;
  bottom: 0 !important;
  overflow: hidden !important;
}
/deep/ .modal-dialog {
  width: 100%;
  max-width: 100%;
}
</style>