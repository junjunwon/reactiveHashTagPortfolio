<template>
    <div>
        <!-- 컴포넌트 MyModal -->
        <MyModal @close="closeModal" v-if="modal">
        <!-- default 슬롯 콘텐츠 -->
        <div style="color:black;">
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
            Vue.js Modal Window!
        </div>
        <!-- <div><input v-model="message"></div> -->
        <!-- /default -->
        <!-- footer 슬롯 콘텐츠 -->
        <!-- <template slot="footer">
            <button @click="doSend">제출</button>
        </template> -->
        <!-- /footer -->
        </MyModal>
        <b-container class="bv-example-row" style="margin-bottom:1%">
            <b-row align-h="center" v-if="!isMobile()">
                <b-col id="col" cols="1">
                </b-col>
                <b-col class="intro" id="col" cols="10" style="">
                    <!-- <div><a style="text-decoration: underline; cursor:pointer" @click="openModal">Yoo Ra</a> is always ready to</div> -->
                    <div><a style="text-decoration: underline; cursor:pointer" href="#section-2" @click="showIntroDetail">Yoo Ra</a> is always ready to</div>
                    <div>challenge new projects which</div>
                    <div>will impact our society.</div>
                    <div>Find talents you are looking</div>
                    <div>for in <a style="text-decoration: underline; cursor:pointer" href="#section-2">my work</a> and <a href="https://docs.google.com/document/d/15-CXM8VAWNMwLF29aSq1yT8glhkPSum9maEPwW4KeaI/edit" target="_blank">resume.</a></div>
                    <div>Contact me :-)</div>
                </b-col>
                <b-col id="col" cols="1">
                </b-col>
            </b-row>
            <!-- 모바일 -->
            <b-row align-h="center" v-if="isMobile()">
                <b-col class="intro" id="col" cols="12" style="">
                    <div><a style="text-decoration: underline; cursor:pointer" href="#section-2" @click="showIntroDetail">Yoo Ra</a> is always ready to 
                    challenge new projects which
                    will impact our society.
                    Find talents you are looking
                    for in <a style="text-decoration: underline; cursor:pointer" href="#section-2">my work</a> and <a href="https://docs.google.com/document/d/15-CXM8VAWNMwLF29aSq1yT8glhkPSum9maEPwW4KeaI/edit" target="_blank">resume.</a></div>
                    <div>Contact me :-)</div>
                </b-col>
            </b-row>
            <b-row align-h="center" style="margin-top:3%; padding-bottom:3%;">
                <b-col id="col">
                    <hr>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import MyModal from '../modal/IntroDetailModal.vue'

export default {
    name : 'Content-vue',
    components : {
        MyModal
    },
    data() {
        return {
            modalShow: false,
            deviceSize : window.innerWidth,
            window: {
                width: 0,
                height: 0
            },
            modal: false,
            message: ''
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    watch: {
        deviceSize: function() {
            console.log(window.innerHeight)
        }
    },
    methods: {
        showIntroDetail() {
            this.$store.commit('setShowIntroDetail', true)
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        isMobile() {
            // console.log('window.innerHeight is ', window.innerHeight);
            if(this.window.width <= 900) {
                return true
            } else {
                return false
            }
        },
        openModal() {
            this.modal = true
        },
        closeModal() {
            this.modal = false
        },
        doSend() {
            if (this.message.length > 0) {
                alert(this.message)
                this.message = ''
                this.closeModal()
            } else {
                alert('메시지를 입력해주세요.')
            }
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>
<style scoped>
a {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color:inherit;
    display:inline-block;
    /* padding-top: 3.6%; */
}
.intro {
height:auto; 
/* font-size: var(--font-size-sm); */
font-weight: bold;
font-size: var(--font-size-md); 
line-height:1.5em;
}
@media (max-width: 700px) {
    .intro {
        font-size: var(--font-size-md);
    }
    hr {
        height:2vh;
    }
}
@media (max-width: 400px) {
    .intro {
        font-size: var(--font-size-md);
    }
}
.verticalLine {
  position: absolute;
  background-color: blue;
  width: 6px;
  top: 91px;
  bottom: 0px;
  left: 50%;
}
hr{
 height:24vh;
 width:0.1vw;
 border-width:10;
 opacity: 1;
 border: solid 1px #FFFFEE;
 /* color:black; */
 /* background-color:#000; */
 margin: 0 auto;
}

</style>