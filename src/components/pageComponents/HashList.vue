<template>
    <div>
        
        <b-container class="bv-example-row">
            <div id="section-2" style="height:1em"></div>
            <!-- <b-row align-h="center" style="margin-top:0.5em">
                <b-col id="col">
                    <button class="button" name = "all" @click="setHashTag($event.currentTarget.name)">SEE ALL WORKS</button>
                </b-col>
            </b-row> -->
            <b-row align-h="center" v-if="!isMobile()" style="margin-top:0.5em">
                <b-col id="col" cols="1">
                </b-col>
                <b-col id="col" cols="10">
                    <div class="hashButtons">
                        <button :style="{'background-color': activeButton === 'all' ? 'white' : '#000000', 'color': activeButton === 'all' ? 'black':'white'}" 
                        class="button" name = "all" @click="setHashTag($event.currentTarget.name)">#SEE ALL WORKS</button>
                    </div>
                    <div class="hashButtons">
                        <button :style="{'background-color': activeButton === 'branding' ? 'white' : '#000000', 'color': activeButton === 'branding' ? 'black':'white'}" 
                        class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button :style="{'background-color': activeButton === 'packaging' ? 'white' : '#000000', 'color': activeButton === 'packaging' ? 'black':'white'}" 
                        class="button" name = "packaging" @click="setHashTag($event.currentTarget.name)">#Packaging</button>
                        <button :style="{'background-color': activeButton === 'digitalContent' ? 'white' : '#000000', 'color': activeButton === 'digitalContent' ? 'black':'white'}" 
                        class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                    </div>
                    <div class="hashButtons">
                        <button :style="{'background-color': activeButton === 'brandStrategy' ? 'white' : '#000000', 'color': activeButton === 'brandStrategy' ? 'black':'white'}" 
                        class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button :style="{'background-color': activeButton === 'photography' ? 'white' : '#000000', 'color': activeButton === 'photography' ? 'black':'white'}" 
                        class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                        <button :style="{'background-color': activeButton === 'illustration' ? 'white' : '#000000', 'color': activeButton === 'illustration' ? 'black':'white'}" 
                        class="button" name = "illustration" @click="setHashTag($event.currentTarget.name)">#Illustration</button>
                    </div>
                    <div class="hashButtons">
                        <button :style="{'background-color': activeButton === 'webDesign' ? 'white' : '#000000', 'color': activeButton === 'webDesign' ? 'black':'white'}" 
                        class="button" name = "webDesign" @click="setHashTag($event.currentTarget.name)">#Web Design</button>
                        <button :style="{'background-color': activeButton === 'productDesign' ? 'white' : '#000000', 'color': activeButton === 'productDesign' ? 'black':'white'}" 
                        class="button" name = "productDesign" @click="setHashTag($event.currentTarget.name)">#Product Design</button>
                        <button :style="{'background-color': activeButton === 'editorialDesign' ? 'white' : '#000000', 'color': activeButton === 'editorialDesign' ? 'black':'white'}" 
                        class="button" name = "editorialDesign" @click="setHashTag($event.currentTarget.name)">#Editorial Design</button>
                        <button :style="{'background-color': activeButton === 'startup' ? 'white' : '#000000', 'color': activeButton === 'startup' ? 'black':'white'}" 
                        class="button" name = "startup" @click="setHashTag($event.currentTarget.name)">#Startup</button>
                    </div>
                </b-col>
                <b-col id="col" cols="1">
                </b-col>
            </b-row>
            <b-row align-h="center" v-if="isMobile()" >
                <!-- 모바일 -->
                <b-col id="col" cols="10" style="padding:0px">
                    <div>
                        <button :style="{'background-color': activeButton === 'all' ? 'white' : '#000000', 'color': activeButton === 'all' ? 'black':'white'}" 
                        class="button" name = "all" @click="setHashTag($event.currentTarget.name)">#SEE ALL WORKS</button>
                    </div>
                    <button :style="{'background-color': activeButton === 'branding' ? 'white' : '#000000', 'color': activeButton === 'branding' ? 'black':'white'}" 
                    class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                    <button :style="{'background-color': activeButton === 'packaging' ? 'white' : '#000000', 'color': activeButton === 'packaging' ? 'black':'white'}" 
                    class="button" name = "packaging" @click="setHashTag($event.currentTarget.name)">#Packaging</button>
                    <button :style="{'background-color': activeButton === 'digitalContent' ? 'white' : '#000000', 'color': activeButton === 'digitalContent' ? 'black':'white'}" 
                    class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                    <button :style="{'background-color': activeButton === 'brandStrategy' ? 'white' : '#000000', 'color': activeButton === 'brandStrategy' ? 'black':'white'}" 
                    class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                    <button :style="{'background-color': activeButton === 'photography' ? 'white' : '#000000', 'color': activeButton === 'photography' ? 'black':'white'}" 
                    class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                    <button :style="{'background-color': activeButton === 'illustration' ? 'white' : '#000000', 'color': activeButton === 'illustration' ? 'black':'white'}" 
                    class="button" name = "illustration" @click="setHashTag($event.currentTarget.name)">#Illustration</button>
                    <button :style="{'background-color': activeButton === 'webDesign' ? 'white' : '#000000', 'color': activeButton === 'webDesign' ? 'black':'white'}" 
                    class="button" name = "webDesign" @click="setHashTag($event.currentTarget.name)">#Web Design</button>
                    <button :style="{'background-color': activeButton === 'productDesign' ? 'white' : '#000000', 'color': activeButton === 'productDesign' ? 'black':'white'}" 
                    class="button" name = "productDesign" @click="setHashTag($event.currentTarget.name)">#Product Design</button>
                    <button :style="{'background-color': activeButton === 'editorialDesign' ? 'white' : '#000000', 'color': activeButton === 'editorialDesign' ? 'black':'white'}" 
                    class="button" name = "editorialDesign" @click="setHashTag($event.currentTarget.name)">#Editorial Design</button>
                    <button :style="{'background-color': activeButton === 'startup' ? 'white' : '#000000', 'color': activeButton === 'startup' ? 'black':'white'}" 
                    class="button" name = "startup" @click="setHashTag($event.currentTarget.name)">#Startup</button>


                    <!-- <button :style="{'background-color': activeButton === 'branding' ? 'white' : '#000000', 'color': activeButton === 'branding' ? 'black':'white'}" 
                    class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                    <button :style="{'background-color': activeButton === 'digitalContent' ? 'white' : '#000000', 'color': activeButton === 'digitalContent' ? 'black':'white'}" 
                    class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                    <button :style="{'background-color': activeButton === 'packaging' ? 'white' : '#000000', 'color': activeButton === 'packaging' ? 'black':'white'}" 
                    class="button" name = "packaging" @click="setHashTag($event.currentTarget.name)">#Packaging</button>
                    <button :style="{'background-color': activeButton === 'illustration' ? 'white' : '#000000', 'color': activeButton === 'illustration' ? 'black':'white'}" 
                    class="button" name = "illustration" @click="setHashTag($event.currentTarget.name)">#Illustration</button>
                    <button :style="{'background-color': activeButton === 'artDirection' ? 'white' : '#000000', 'color': activeButton === 'artDirection' ? 'black':'white'}" 
                    class="button" name = "artDirection" @click="setHashTag($event.currentTarget.name)">#Art Direction</button>
                    <button :style="{'background-color': activeButton === 'brandStrategy' ? 'white' : '#000000', 'color': activeButton === 'brandStrategy' ? 'black':'white'}" 
                    class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                    <button :style="{'background-color': activeButton === 'photography' ? 'white' : '#000000', 'color': activeButton === 'photography' ? 'black':'white'}" 
                    class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                    <button :style="{'background-color': activeButton === 'startup' ? 'white' : '#000000', 'color': activeButton === 'startup' ? 'black':'white'}" 
                    class="button" name = "startup" @click="setHashTag($event.currentTarget.name)">#Startup</button> -->
                </b-col>
            </b-row>
        </b-container>
        <div id="section-temp" style="height:1em"></div>
        <!-- todo: 이벤트 버블링으로 하나의 이벤트로 처리하고 싶다 -->
        <!-- HOME 전체 -> 나머지 버튼은 filtering -->
    </div>
</template>

<script>
// import dummy from '../dummy.vue'

export default {
    name : 'HashList',
    components : {
        // dummy
    },
    data() {
        return {
            window: {
                width: 0,
                height: 0
            },
            // activeButton : ''
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    computed: {
        activeButton: function() {
            return this.$store.getters.getActiveButton
        }
    },
    watch: {
        activeButton(value){
            console.log('activeButton is ', value)
        }
    },
    methods: {
        setHashTag(hashTag) {
            // this.activeButton = hashTag
            this.$store.commit('setActiveButton', hashTag)
            this.$store.commit('setHashTag', hashTag)
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        isMobile() {
            console.log('window.innerHeight in HashList is ', window.innerWidth);
            if(this.window.width <= 900) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>
<style scoped>
#col {
    /* height: 60px; */
    /* margin-bottom: 1em; */
    height:auto;
    width: 100%;
}
#row {
    /* line-height: 5%; */
}
.updown {
  width:400px;
    height:200px;
    background: linear-gradient(to right, 
                                transparent 0%, 
                                transparent calc(50% - 0.81px), 
                                black calc(50% - 0.8px), 
                                black calc(50% + 0.8px), 
                                transparent calc(50% + 0.81px), 
                                transparent 100%); 
  }
.hashButtons {
    white-space: wrap;
    line-height: normal;
    /* margin-bottom: 10px; */
    line-height: 56px;
}
.button {
    line-height:40px;
}
@media (max-width: 400px) {
    .button {
        line-height:35px;
    }
}
</style>