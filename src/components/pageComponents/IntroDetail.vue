<template>
    <div v-show="getShowIntroDetail">
        <div style="padding-bottom: 2em;"></div>
        <b-container class="bv-example-row" style="margin-bottom:5%">
            <b-row align-h="center" v-if="!isMobile()">
                <b-col id="col">
                </b-col>
                <b-col id="col" cols="10" style="height:auto; text-align: center;">
                    <div style="margin-bottom:1em;">
                            This is Yoo Ra Kim, who has been challenging, been trying to overcome my limits with reminding ‘grow and comfort doesn’t co-exist’.  If I describe myself I would say inventive, adventurous, self motivated, having a eagerness, positive attitude at work.
                        </div>
                        <div style="margin-bottom:1em;">
                            All my life, I have dreamed of commercializing visual products that bring convenience to the world. practical creativity, product branding abilities, self-motivated and never giving-up spirit enabled me to overcome numerous challenges in the United States market.
                            I have demonstrated meaningful results and am realizing my dream as a visual designer during working 6years. for example, I worked in the expertise area of brand design for many skincare and makeup brands and has been distributed to Walmart, Target, Sephora, CVS and so on in the US, Canada, Mexico, South Asian countries. And I got also involved in planning brand strategies of the marketing part.
                            Currently I’ve been overseeing Seventeen of Hearst as digital designer who is overseeing all visuals in digital platforms such as instagram, YouTube, website.
                            Moreover, I launched a brand as my first start-up which is a press-on type fabricated nail products that are 100% biodegradable using natural ingredients.
                        </div>
                        <div>
                            If you get shared more my career and experiences, click here to see <a href="https://docs.google.com/document/d/15-CXM8VAWNMwLF29aSq1yT8glhkPSum9maEPwW4KeaI/edit" target="_blank">my resume.</a>
                        </div>
                        <div><a href="mailto:hello.yoora.kim@gmail.com">hello.yoora.kim@gmail.com</a></div>
                        <div>+1 917 669 4820</div>
                </b-col>
                <b-col id="col">
                </b-col>
            </b-row>
            <b-row align-h="center" v-if="isMobile()">
                <b-col id="col" style="height:auto padding:0 3em;">
                    <div style="text-align: center;">
                        <div style="margin-bottom:1em;">
                            This is Yoo Ra Kim, who has been challenging, been trying to overcome my limits with reminding ‘grow and comfort doesn’t co-exist’.  If I describe myself I would say inventive, adventurous, self motivated, having a eagerness, positive attitude at work.
                        </div>
                        <div style="margin-bottom:1em;">
                            All my life, I have dreamed of commercializing visual products that bring convenience to the world. practical creativity, product branding abilities, self-motivated and never giving-up spirit enabled me to overcome numerous challenges in the United States market.
                            I have demonstrated meaningful results and am realizing my dream as a visual designer during working 6years. for example, I worked in the expertise area of brand design for many skincare and makeup brands and has been distributed to Walmart, Target, Sephora, CVS and so on in the US, Canada, Mexico, South Asian countries. And I got also involved in planning brand strategies of the marketing part.
                            Currently I’ve been overseeing Seventeen of Hearst as digital designer who is overseeing all visuals in digital platforms such as instagram, YouTube, website.
                            Moreover, I launched a brand as my first start-up which is a press-on type fabricated nail products that are 100% biodegradable using natural ingredients.
                        </div>
                        <div>
                            If you get shared more my career and experiences, click here to see <a href="https://docs.google.com/document/d/15-CXM8VAWNMwLF29aSq1yT8glhkPSum9maEPwW4KeaI/edit" target="_blank">my resume.</a>
                        </div>
                        <div><a href="mailto:hello.yoora.kim@gmail.com">hello.yoora.kim@gmail.com</a></div>
                        <div>+1 917 669 4820</div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name : 'Header-vue',
    components : {

    },
    data() {
        return {
            window: {
                width: 0,
                height: 0
            },
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    mounted() {
        window.scrollTo(0, 0);
        document.addEventListener('scroll', this.scrollEvents);
    },
    computed: {
        getPackageHashTag : function() {
            return this.$store.getters.getHashTag
        },
        getShowIntroDetail : function() {
            return this.$store.getters.getShowIntroDetail
        }
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        isMobile() {
            // console.log('window.innerHeight in IntroDetail is ', window.innerWidth);
            if(this.window.width <= 900) {
                return true
            } else {
                return false
            }
        },
        scrollEvents() {
            // 현재 스크롤 탑
            const beforeScrollTop = this.currentScrollValue;
            // 스크롤 후의 탑
            const afterScrollValue = document.documentElement.scrollTop;

            // console.log('beforeScrollTop')
            // console.log(beforeScrollTop)
            // console.log('afterScrollValue')
            // console.log(afterScrollValue)
            // if(afterScrollValue < 10) {
            //     this.$router.replace('/')
            // }
            if(this.isMobile()) {
                if(afterScrollValue > 800) {
                    // this.$store.commit('setHashTag', 'all')
                }
                if(afterScrollValue > 1000) {
                    this.$store.commit('setShowIntroDetail', false)
                    // this.$store.commit('setHashTag', 'all')
                }    
            } else {
                if(afterScrollValue > 1200) {
                    // this.$store.commit('setHashTag', 'all')
                }
                if(afterScrollValue > 1400) {
                    this.$store.commit('setShowIntroDetail', false)
                }
            }
            
            // const headerState = this.headerState;
            // this.headerScrollEvent(headerState);
            // 특정페이지에는 이 부분의 주석을 해제해 준다.
            // this.navScrollEvent();
        },
    },
    // 컴포넌트 인스턴스가 마운트 해체된후 호출된다.
    unmounted() {
        document.removeEventListener('scroll', this.scrollEvents);
    },

}
</script>
<style scoped>
.introDetail {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 0.33s, opacity 0.33s linear;
}
.hashContainer {
    line-height:3em
}
@media (max-width: 700px) {
    .hashContainer {
        line-height:2em
    }
}
@media (max-width: 400px) {
    .hashContainer {
        line-height:1em
    }
}
a {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color:inherit;
}
</style>