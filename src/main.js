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