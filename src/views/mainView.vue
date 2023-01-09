<template>
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
            
        }
    },
    created() {

    },
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
</style>