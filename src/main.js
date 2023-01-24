import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// import { router } from './router/index.js'
import router from './router/index.js'
import { store } from './store/store.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Modal from "vue-bs-modal";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const lazyLoad = {
  inserted: el => {
      function loadImage() {
          const isImg = el.nodeName === "IMG";
          console.log('el.nodeName is ...')
          console.log(el.nodeName)
          // 이미지 태그일 경우만 url 입력 로딩
          if (isImg || el.nodeName === "source") {
              el.src = el.dataset.url;
          }
      }

       function createObserver() {

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) { // 감지대상이 교차영역에 진입 할 경우
                      loadImage(); // 교차영역 들어올경우 이미지 로딩
                      observer.unobserve(el); // 이미지 로딩 이후론 관찰할 필요 x
                  }
              });
          });

          observer.observe(el);
      }

      // 지원하지 않는 브라우저는 바로 이미지 로딩을 시켜주도록 호환성 체크
      window["IntersectionObserver"] ? createObserver() : loadImage();
  }
};

Vue.directive("lazyload", lazyLoad);

//vue infinite slide bar
import InfiniteSlideBar from 'vue-infinite-slide-bar'
Vue.component('infinite-slide-bar', InfiniteSlideBar)


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

//vuex
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router: router,
  store,
  Modal
}).$mount('#app')

// 디자인 : https://docs.google.com/presentation/d/1H2crCEt7xliHjbwyys9ZaSdkLDzHC1n6Ke9kPEzQhDA/edit#slide=id.g1cc6d8c75f1_0_21