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
                <b-row>
                <vueper-slides
                    fade
                    :visible-slides="3"
                    slide-multiple
                    :bullets="false"
                    :arrows-outside="false"
                    :gap="3"
                    :slide-ratio="1 / 4"
                    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
                    :style="'align-self: center;'"
                    :fixed-height="setSliderHeight()"
                >
                    <vueper-slide 
                            v-for="(slide, j) in chooseSlide" :key="j" :image="slide.image"
                            :style="'background-color: ' + ['#ff5252', '#42b983'][j % 2]"
                            @click.native="test()"
                    >
                    </vueper-slide>
                </vueper-slides>
                </b-row>
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col cols="8">
                        <div style="color:white; text-align:center;">
                            <div>{{content.header}}</div>
                            <div>{{content.rate}}</div>
                            <br />
                            <div>{{content.detail}}</div>
                        </div>
                    </b-col>
                    <b-col cols="2"></b-col>
                </b-row>
                <!-- <b-col id="colModal" cols="6" align-self="start">
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
                </b-col> -->
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
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
    name : 'ContentDetail',
    components : {
        VueperSlides, VueperSlide
    },
    props: {
        propModalShow : {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            slides: [],
            slidesXpoiled: [
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.',
                    image : require('../../assets/img/startup/xpoiled.png')
                    // image : '../assets/img/startup/xpoiled.png'
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_detail.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_letters.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo2.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo3.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo4.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo5.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo6.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo6.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo7.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../../assets/img/startup/xpoiled_photo8.png')
                }
            ],
            slidesPinklipps: [
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.',
                    image : require('../../assets/img/pinklipps/cosmetic_detail.png')
                },
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.',
                    image : require('../../assets/img/pinklipps/cosmetic.jpg')
                },
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.',
                    image : require('../../assets/img/pinklipps/pinkLipps.png')
                }
            ],
            content : {},
            contentXpoiled: {
                header : 'XPOILED / Nail Brand (My brand)',
                rate : 'PARTICIPATION RATE : 100% (whole work categories)',
                detail : 'Xpoiled is my own brand started in 2021 that I have been working whole resposiblities beyond design duties. The brand name is named combining Spoiled + X (genderless, unlimited) which emphasizes the function of a fashion accessory for everyone who is genderless. It targets competitive brand image to be able to get the upper hand among existing big nail brands that are only for the women preference. This nail product category has been extended not only press-on nail for women but also nail tattoo stickers for men. The brand look has been inspired by Brooklyn street style. It has conveyed the Brooklyn street art vibe throughout the package, website, and all of its brand design assets, which will be liked by everyone who is into street culture.'
            },
            contentPinklipps: {
                header : 'Pinklipps / Makeup Brand',
                rate : 'PARTICIPATION RATE : 100% (whole work categories)',
                detail : 'The Pinklipps is a brand created by a professional makeup artist. It needed to beef up brand identity and create a more cohesive brand look. I strengthened the brand story in order to deliver a cohesive marketing touchpoint and brand look as well. According to recreated brand fundamentals, I created packaging, brand identity system, and art direction. As a result, Pinklipps has been approved to shop in TARGET in 2022. I’m working on the POG display for the TARGET. The Pinkllips fully renewed by me will be launched in 2022.'
            },
            window: {
                width: 0,
                height: 0
            },
            deviceSize : window.innerWidth,
        }
    }, 
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    computed : {
        chooseSlide () {
            return this.test() 
        },
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
        test() {
            if(this.$store.getters.getModalInfo.catagory === 'xpoiled') {
                this.slides = this.slidesXpoiled
                this.content = this.contentXpoiled
            } else if(this.$store.getters.getModalInfo.catagory === 'pinklipps') {
                this.slides = this.slidesPinklipps
                this.content = this.contentPinklipps
            } else {
                this.slides = []
                this.content = {}
            }
            
            return this.slides 
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        setSliderHeight() {
            let newHeight = '700px'
            // if ( 1200 < this.window.width && this.window.width <= 1400 ) {
            //      newHeight = '600px' // calculate a height here later
            // } else 
            if ( 1000 < this.window.width && this.window.width <= 1200 ) {
                newHeight = '500px'
            } else if ( 800 < this.window.width && this.window.width <= 1000 ) {
                newHeight = '400px'
            } else if ( 600 < this.window.width && this.window.width <= 800 ) {
                newHeight = '350px'
            } else if ( 400 < this.window.width && this.window.width <= 600 ) {
                newHeight = '300px'
            } else if ( 300 < this.window.width && this.window.width <= 400 ) {
                newHeight = '250px'
            } else if ( this.window.width <= 300 ) {
                newHeight = '200px'
            }
            return newHeight
        }
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
/* .vueperslides__parallax-wrapper {
    height: 700px;
}
@media (max-width: 1400px) {
    .vueperslides__parallax-wrapper {
        height: 600px;
    }
}
@media (max-width: 1200px) {
    .vueperslides__parallax-wrapper {
        height: 550px;
    }
}
@media (max-width: 1000px) {
    .vueperslides__parallax-wrapper {
        height: 500px;
    }
}
@media (max-width: 800px) {
    .vueperslides__parallax-wrapper {
        height: 450px;
    }
}
@media (max-width: 600px) {
    .vueperslides__parallax-wrapper {
        height: 400px;
    }
}
@media (max-width: 400px) {
    .vueperslides__parallax-wrapper {
        height: 350px;
    }
}
@media (max-width: 300px) {
    .vueperslides__parallax-wrapper {
        height: 250px;
    }
} */

</style>