<template>
    <div>
        <b-modal 
            title="BootstrapVue"
            v-model="modalShow"
            hide-footer
            hide-header
            scrollable
            style="background-color:black;"
            modal-class="modal-fullscreen">
            <b-row id="rowSquare" align-v="stretch">
                <b-col id="colModal" cols="6" align-self="start">
                    <img v-show="getModalInfo.isImg" :src="showImage" />
                    <video v-show="!getModalInfo.isImg" webkit-playsinline playsinline loop autoplay muted preload="auto" >
                        <source :src="showImage" type="video/mp4" />
                    </video>
                </b-col>
                <b-col id="colModal" cols="6" align-self="start" 
                    style="display:flex; align-items:center; color:white;"
                >
                    <b-row>
                        {{this.$store.getters.getModalInfo.content}}
                        <a v-bind:href="getModalInfo.link">visit to xpoiled webSite</a>
                    </b-row>
                    
                </b-col>
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
.modal-fullscreen .modal-dialog {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    position: fixed;
    z-index: 100000;
    /* opacity: 70%; */
}
.modal-content {
    background-color: black !important;

}
#rowSquare {
    height: 100%;
}
#colModal {
    height: inherit;
    width: 50%;
}
</style>