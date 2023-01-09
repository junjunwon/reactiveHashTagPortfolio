import Vue from 'vue'
import VueRouter from 'vue-router'

//view files
// import Content from '../components/pageComponents/Content.vue'
// import HashList from '../components/pageComponents/HashList.vue'
// import Header from '../components/pageComponents/Header.vue'

Vue.use(VueRouter)

import MainView from '../views/mainView.vue'
// import dummy from '../components/dummy.vue'


const router = new VueRouter({
    mode : 'history',
    //새로고침 시 페이지 최상단으로 이동
    scrollBehavior() { 
        return { x: 0, y: 0 } 
    },
    routes : [
        {
            path : '/',
            component : MainView,
        },
        // {
        //     path : '/dummy',
        //     component : dummy
        // }
    ]
});

router.beforeEach(function (to, from, next) {
    if(to.hash === '#section-2') {
        // debugger
        // to.hash = ''
        // to.fullPath = '/'
        // next('/')
        // router.push('/').catch(()=>{});
    }
    next();
})

export default router;