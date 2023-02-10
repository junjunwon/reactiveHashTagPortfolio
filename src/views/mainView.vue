<template>
    <!-- <b-overlay 
      :show="getLoading" 
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
      rounded="sm"
      style="height:750vh !important;"
      aria-hidden="true"> -->
      <b-overlay  fixed no-center class="test" :show="getLoading" bg-color="black" rounded="lg" opacity="0.95" style="height:750vh !important; ">
        <template #overlay>
            <div class="position-absolute" style="top:0%; left:0%;">
                <!-- <div style="margin-bottom:2em; padding-right:1em;">
                    <b-icon
                        icon="stopwatch"
                        variant="info"
                        scale="2"
                        shift-v="8"
                        shift-h="8"
                    ></b-icon>
                </div> -->
                <div>
                    <span class="sr-only" style="top:20% !important; font-size:2em;">PLEASE WAIT A MOMENT...</span>
                </div>
                <!-- We add an SR only text for screen readers -->
                
            </div>
        </template>
    <div>
            <Header></Header>
            <Intro></Intro>
            <HashList style="padding-bottom: 2%;"></HashList>
            <IntroDetail></IntroDetail>
            <Content style="height: 250vh;"></Content>
        
        <!-- <div class="introHeader">
            <Header></Header>
            <Intro></Intro>
        </div>
        <div class="hashTags">
            <HashList></HashList>
        </div>
        <div class="contentBody">
            <Content></Content>
        </div> -->
        
    </div>
    </b-overlay>
</template>
<script>

import Intro from '../components/pageComponents/Intro.vue'
import IntroDetail from '../components/pageComponents/IntroDetail.vue'
import HashList from '../components/pageComponents/HashList.vue'
import Header from '../components/pageComponents/Header.vue'
import Content from '../components/Content.vue'

export default {
    name : 'mainView',
    components : {
        Intro,
        IntroDetail,
        HashList,
        Header,
        Content
    },
    data() {
        return {
            // loading : this.$store.getters.getLoading
        }
    },
    created() {

    },
    computed: {
        getLoading : function() {
            console.log('loading is ...')
            console.log(this.$store.getters.getLoading)
            return this.$store.getters.getLoading
        }
    }
}
</script>
<style>
.introHeader {
    /* background-color: #ffffee; */
    /* display: flex; */
    /* flex-direction: column; */
}
.hashTags {
    /* margin-top: 60px; */
    /* background: linear-gradient(to bottom, #ffffee, black), url(https://grainy-gradients.vercel.app/noise.svg); */
    /* padding-top: %; */
    padding-bottom: 2%;
    /* background-color: #ffffee; */
    /* display: flex; */
    /* flex-direction: column; */
}

.contentBody {
    height: 250vh;
    /* background-color: black; */
}

.contentBody div {
  /* border:solid 1px black;  */
  /* display:inline-block; */
}
.position-absolute {
    background-color: black I !important;
}
</style>