<template>
    <div>
        <WideOneContentModal :propModalShow="widePictureModalShow"></WideOneContentModal>
        <b-modal 
            ref="contentModal"
            v-model="modalShow"
            hide-footer
            hide-header
            scrollable
            style="background-color:black;"
            modal-class="modal-fullscreen">
            <b-row>
                <div class="closeBtn" @click="hideModal">
                    BACK 
                </div>
            </b-row>
            <b-row id="rowSquare" align-v="stretch">
                <b-overlay  fixed no-center class="test" :show="getSlideLoading" bg-color="black" rounded="lg" opacity="0.95" style="height:750vh !important; ">
                <template #overlay>
                    <div class="position-absolute" style="top:0%; left:0%;">
                        <div>
                            <span class="sr-only" style="top:20% !important; font-size:2em;">PLEASE WAIT A MOMENT...</span>
                        </div>
                    </div>
                </template>
                <b-row style="margin-bottom:2em;">
                    <swiper
                            :space-between="30"
                            :slides-per-view="auto"
                            :slides-per-group="auto"
                            @swiper="onSwiper"
                            :observer= "true"
                            :observeParents= "true"
                            :lazy="true"
                            @slideChange="onSlideChange"
                            @reachEnd="reachEnd"
                            :keyboard="{
                                enabled: true
                            }"
                            :navigation="true"
                        >
                        <swiper-slide
                            v-for="(slide, i) in chooseSlide" :key="i"
                            :class="{test_2: true}"
                        >
                            <video @click="clickImgtoModal($event, false)" v-show="slide.video !== undefined" class="img-fluid w-100 mx-auto" webkit-playsinline playsinline loop autoplay muted preload="auto" >
                                <source :src="slide.video" type="video/mp4" />
                            </video>
                            <img
                            @click="clickImgtoModal($event, true)"
                            loading="lazy"
                            @load="chkAllImageLoaded"
                            :src="slide.image"
                            v-show="slide.video === undefined"
                            class="img-fluid w-100 mx-auto"
                            blank="true"
                            />
                        </swiper-slide>
                    </swiper>
                </b-row>
                <b-row @click="hideModal">
                    <b-col cols="3"></b-col>
                    <b-col cols="6">
                        <div style="color:white; text-align:center;">
                            <div style="font-size:x-large;">{{content.header}}</div>
                            <div style="font-size:x-large;">{{content.header2}}</div>
                            <div><a style="font-style:italic; color:white; font-size: large;" :href="content.link" target='_blank'>{{content.rate}}</a></div>
                            <br />
                            <div>{{content.detail}}</div>
                            <br />
                            <div>{{content.detail2}}</div>
                            <div>{{content.detail3}}</div>
                        </div>
                    </b-col>
                    <b-col cols="3"></b-col>
                </b-row>
                </b-overlay>
            </b-row>
            
        </b-modal>
        <b-modal modal-class="my-second-class">
            <template #modal-header>Header</template>
            Hello
        </b-modal>
    </div>
</template>

<script>
// import { VueperSlides, VueperSlide } from 'vueperslides'
import WideOneContentModal from '@/components/modal/WideOneContentModal.vue'
import imageList from '@/json/imageList.json'
import { Lazy, Navigation, Pagination, Keyboard } from 'swiper'
import 'swiper/';
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Lazy, Navigation, Pagination, Keyboard])

export default {
    name : 'ContentDetail',
    components : {
        // VueperSlides, VueperSlide,
        Swiper,
        SwiperSlide,
        //big one picture modal
        WideOneContentModal,
    },
    props: {
        propModalShow : {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            modules: [Lazy, Navigation, Pagination, Keyboard], 
            slides: [],
            imageList : imageList,
            allImageLoaded: 0,
            //big one picture modal
            widePictureModalShow: false,
            content : {},
            contentXpoiled: {
                header : 'XPOILED / Nail Brand (My brand)',
                rate : 'PARTICIPATION RATE : 100% (whole work categories)',
                detail : 'Xpoiled is my own brand started in 2021 that I have been working whole resposiblities beyond design duties. The brand name is named combining Spoiled + X (genderless, unlimited) which emphasizes the function of a fashion accessory for everyone who is genderless.',
                detail2 : 'It targets competitive brand image to be able to get the upper hand among existing big nail brands that are only for the women preference. This nail product category has been extended not only press-on nail for women but also nail tattoo stickers for men. The brand look has been inspired by Brooklyn street style. It has conveyed the Brooklyn street art vibe throughout the package, website, and all of its brand design assets, which will be liked by everyone who is into street culture.'
            },
            contentPinklipps: {
                header : 'Pinklipps / Makeup Brand',
                rate : 'PARTICIPATION RATE : 100% (whole work categories)',
                detail : 'The Pinklipps is a brand created by a professional makeup artist. It needed to beef up brand identity and create a more cohesive brand look. I strengthened the brand story in order to deliver a cohesive marketing touchpoint and brand look as well.',
                detail2 : 'According to recreated brand fundamentals, I created packaging, brand identity system, and art direction. As a result, Pinklipps has been approved to shop in TARGET in 2022. I???m working on the POG display for the TARGET. The Pinkllips fully renewed by me will be launched in 2022.'
            },
            contentLockColor: {
                header : 'L.O.C.K Color / Makeup Brand',
                rate : 'PARTICIPATION RATE : 100% (whole work categories)',
                detail : 'The L.O.C.K. Color stands for Long-Lasting Original Color Keeper. This powerful brand is inspired by the fun and fearless nature hidden within us all. This limited edition New York piece is sold in Asia. The graphics have expressed NYC within its abstract drawing.',
                detail2 : 'The tube and box packaging have been designed by me. It has been launched in many big retailers in the Asia and Russia area. Additionally, I maintained and oversaw the brand design system and photography as well.'

            },
            contentUnicornGlow: {
                header : 'UNICORN GLOW / Makeup Brand',
                rate : 'PARTICIPATION RATE : 100% (whole work categories)',
                detail : 'The UNICORN GLOW strives to bring out the inner unicorn in everyone. Our goal is to enhance a person???s beauty with our striking design and high-quality products. Moreover, to create a positive and thoughtful message that encourages people to be the best version of themselves, their inner unicorn.',
                detail2 : 'I created a brand identity system cooperating with the marketing team. Additionally, I carried out the photography, art direction, packaging design, and POG display for CVS and WALMART in the US and parts of Mexico'
            },
            contentTutti: {
                header : 'TUTTI / Nail Spa Brand',
                rate : 'PARTICIPATION RATE : 100%(Bottle Design / 5 Drafts)',
                detail : 'As my role of this rebranding project, I???ve been responsible for product design. According to this new brand???s identity and creativity, it celebrates the Italian heritage of the word Tutti in its visual language, and embodies its timeless glamor. The bottle design got inspired by the new logo featuring a sharp edge bringing to mind a beautiful piece of jewelry object that is at once luxurious and ergonomic. The brand refresh has allowed Tutti a greater sense of belonging in the luxury mall environment. It has given the brand the edge it needs to both stand out and fit-in with other familiar brands in luxury retail (e.g., Prada, Hermes).',
                detail2 : 'As a result, Tutti was able to more fully penetrate the high-income market segment in the mani-pedi space. There were store expansions nationwide, particularly in the East Coast. Moreover, our custom-made nail polish bottles attracted attention wherever they were displayed in-store, notably lifting sales and further reinforcing the brand???s upscale image.'
            },
            contentSeventeen: {
                header : 'Created digital content under Seventeen???s visual guidelines reflecting Gen Z graphic design trends such as 90s Nostalgia and Y2K trends.',
                header2 : 'The Seventeen???s visual guidelines were newly freshened up by Yoora Kim',
                rate : '',
                detail : 'This digital content was featured on Seventeen???s official website and other diverse social media platforms including Instagram, Facebook, Twitter, TikTok, YouTube, and Snapchat.'
            },
            contentVoty2022: {
                header : 'Seventeen???s 2022 Voices of the Year',
                header2 : 'Oversaw all visuals and motion graphic creation',
                rate : 'The whole package here',
                link : 'https://www.seventeen.com/life/a42156748/voices-of-the-year-2022/',
                detail : 'Seventeen???s 2022 Voices of the Year, headlined by JoJo Siwa and featuring eight other young people who used their voices to change the world this year, from climate change activist and spoken word poet Aniya Butler to abortion rights activist Olivia Julianna. These nine young people are working today to save tomorrow and we are incredibly honored to recognize them as our 2022 Voices of the Year.',
                detail2 : 'Each winner is featured on site in an in-depth interview, on their very own Seventeen digital cover, and in a video they have created for Seventeen???s TikTok and Instagram feeds as well as their own individual YouTube Shorts, where they break down their advocacy work and impart their advice for young activists nationwide.'
            },
            contentVoy2021: {
                header : 'Seventeen???s 2021 Voices of the Year',
                header2 : 'Oversaw all visuals and motion graphic creation',
                rate : 'The whole package here',
                link : 'https://www.seventeen.com/life/a38411652/2021-voices-of-the-year/',
                detail : 'Seventeen???s 2022 Voices of the Year, featuring nine young people who used their voices to change the world this year, These nine young people are working today to save tomorrow and we are incredibly honored to recognize them as our 2021 Voices of the Year.',
                detail2 : 'Each winner is featured on site in an in-depth interview, on their very own Seventeen digital cover, and in a video they have created for Seventeen???s TikTok and Instagram feeds as well as their own individual YouTube Shorts, where they break down their advocacy work and impart their advice for young activists nationwide.'
            },
            contentDmz: {
                header : 'Haemaroo Village in DMZ',
                rate : 'Illustrations of Place Branding',
                detail : 'Have been working on illustrations for various projects. Illustration work on the theme of seniors in Haemaruchon Village in DMZ.',
                detail2 : 'Illustration expressing the story of environmental protection needed for promotional materials of the Environment Corporation in Korea as worked on diverse illustrations. To be more specific, The Haemaruchon project was to alter its images, only focusing on ???DMZ???-dangerous and boring due to the highest-aged populations to express an existing youth and liveliness through their dreams even though residents have been continuously older.',
                detail3 : 'Thus, I sought to convey to the young generation that even seniors are able to young regardless of age, as long as they bear dreams and aim in a heartful mind. I tried to actualize their stories into the illustrations'
            },
            contentArtipst: {
                header : 'Travel Guide Book / ARTIPST',
                rate : '',
                detail : 'I designed a guidebook for artists interested in European travel. I also took pictures and illustrated various aspects of Europe, which expressed through my unique style.'
            },
            contentIllustrationCooing: {
                header : '',
                rate : '',
                detail : ''
            },
            contentSooae: {
                header : 'Worked on Package Design and Photography.',
                header2: 'Distributed at Walmart, CVS',
                rate : '',
                detail : ''
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
    mounted () {
    },
    watch : {
        watchIndex(index) {
            console.log('index is ', index)
        }
    },
    computed : {
        getSlideLoading : function() {
            console.log('loading is ...')
            console.log(this.$store.getters.getSlideLoading)
            return this.$store.getters.getSlideLoading
        },
        chooseSlide () {
            return this.test() 
        },
        modalShow : {
            get () {
                // console.log('modalshow')
                return this.propModalShow
            },
            set (modalShow) {
                return modalShow
            }
        },
        getModalInfo () {
            return this.$store.getters.getModalInfo
        },
        showImage() {
            return require('../../assets/img/' + this.getModalInfo.imgName);
        }
    },
    methods: {
      onSwiper(swiper) {
        console.log('swiper');
        console.log(swiper);
      },
      onSlideChange(event) {
        console.log('slide change', event);
        if (this.slides / event.activeIndex) { // 13 / 4 = 3

        }
      },
        chkAllImageLoaded() {
            // this.allImageLoaded = this.allImageLoaded + 1
            // console.log('this.allImageLoaded ...')
            // console.log(this.allImageLoaded)
            // console.log('slides length is : ', this.slides.length)
            // if(this.allImageLoaded > this.slides.length-2) {
            //     this.allImageLoaded = 0
            //     this.$store.commit('setSlideLoading', false)
            // }
            // this.$store.commit('setSlideLoading', false)
        },
        getImageUrl (imageId) {
            return `https://picsum.photos/600/400/?image=${imageId}`
        },
        test() {
            if (this.$store.getters.getModalInfo.catagory === 'xpoiled') {
                // this.slides = this.slidesXpoiled
                this.slides = this.imageList.xpoiled
                this.content = this.contentXpoiled
            } else if (this.$store.getters.getModalInfo.catagory === 'pinklipps') {
                this.slides = this.imageList.slidesPinklipps
                this.content = this.contentPinklipps
            } else if (this.$store.getters.getModalInfo.catagory === 'lockColor') {
                this.slides = this.imageList.lockColor
                this.content = this.contentLockColor
            } else if (this.$store.getters.getModalInfo.catagory === 'unicornGlow') {
                this.slides = this.imageList.unicornGlow
                this.content = this.contentUnicornGlow
            }  else if (this.$store.getters.getModalInfo.catagory === 'tutti') {
                this.slides = this.imageList.tutti
                this.content = this.contentTutti
            } else if (this.$store.getters.getModalInfo.catagory === 'seventeen') {
                this.slides = this.imageList.seventeen
                this.content = this.contentSeventeen
            } else if (this.$store.getters.getModalInfo.catagory === 'voy2021') {
                this.slides = this.imageList.voy2021
                this.content = this.contentVoy2021
            } else if (this.$store.getters.getModalInfo.catagory === 'voty2022') {
                this.slides = this.imageList.voty2022
                this.content = this.contentVoty2022
            } else if (this.$store.getters.getModalInfo.catagory === 'dmz') {
                this.slides = this.imageList.dmz
                this.content = this.contentDmz
            } else if (this.$store.getters.getModalInfo.catagory === 'artipst') {
                this.slides = this.imageList.artipst
                this.content = this.contentArtipst
            } else if (this.$store.getters.getModalInfo.catagory === 'illustrationCooing') {
                this.slides = this.imageList.illustrationCooing
                this.content = this.contentIllustrationCooing
            } else if (this.$store.getters.getModalInfo.catagory === 'sooae') {
                this.slides = this.imageList.sooae
                this.content = this.contentSooae
            }
            else {
                this.slides = []
                this.content = {}
            }
            return this.slides 
        },
        hideModal() {
            this.$refs['contentModal'].hide()
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        setSliderHeight() {
            let newHeight = '700px'
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
        },
        clickImgtoModal(event, isImg) {
            this.widePictureModalShow = !this.widePictureModalShow
            this.$store.commit('setWidePictureModalInfo', {
                imgSrc : isImg === true ? event.currentTarget.src : event.currentTarget.currentSrc, 
                isImg : isImg
            })
        },
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
.closeBtn {
    text-align: right;
    color: white;
    height: 70px;
    cursor: pointer;
}
.thumbnails {
  margin: auto;
  max-width: none;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
  /* background-size: contain; */
  background-repeat: no-repeat; 
  background-position: center center;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
  /* background-size: contain; */
  background-repeat: no-repeat; 
  background-position: center center;
}
.items { 
    width: 50%;
    height: 600px;
    display: flex; 
} 
.imageBackground {
    height: 600px;
    width: 600px;
}
@media (max-width: 800px) {
    #row {
        height: 500px;
        padding-bottom: 2em;
        margin-bottom: 100px;
    }
    #rowSquare {
        height: 800px;
        margin-bottom: 150px;
    }
    .items { 
        width: 50%;
        height: 500px;
        display: flex; 
    } 
    .imageBackground {
        height: 500px;
        width: 500px;
    }
}
@media (max-width: 600px) {
    #row {
        height: 450px;
        padding-bottom: 2em;
        margin-bottom: 30px;
    }
    #rowSquare {
        height: 610px;
        margin-bottom: 0px;
    }
    .items { 
        width: 50%;
        height: 200px;
        display: flex; 
    } 
    .imageBackground {
        height: 200px;
        width: 400px;
    }
}
@media (max-width: 500px) {
    #row {
        height: 300px;
        padding-bottom: 2em;
        margin-bottom: 30px;
    }
    #rowSquare {
        height: 530px;
        margin-bottom: 55px;
    }
}
@media (max-width: 440px) {
    #row {
        height: 250px;
        padding-bottom: 2em;
        margin-bottom: 30px;
    }
    #rowSquare {
        height: 388px;
        margin-bottom: 55px;
    }
}
@media (max-width: 440px) {
    .items { 
        width: 50%;
        height: 200px;
        display: flex; 
    } 
    .imageBackground {
        height: 200px;
        width: 200px;
    }
}
.img-fluid {
max-width: 100% !important;
height: 600px !important;
}

/* .w-100 {
  width: 100%;
} */
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}
.test_2 {
    width: auto !important;
}
/* .swiper .swiper-pagination {
  position: absolute;
  bottom: 65px !important;
}
.swiper .swiper-pagination-bullet {
  background-color: #000;
  margin: 0 10px !important;
} */
.swiper-button-next, .swiper-button-prev {
    color: white;
}
/* .swiper-container {
  width: 100% !important;
  max-width: 100% !important;
  max-height: 100vh !important;
  min-height: 0 !important;
  min-width: 0 !important;
}
.swiper-slide {
    width: auto;
    flex-shrink: 0;
    display: block;
    height: 100%;
    max-height: 100%;
}
.swiper-wrapper {
    max-height: 100%;
    height: 100%;
    display: flex;
} */
</style>