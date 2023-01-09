import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        packageHashTag : 'package',
        cosmeticHashTag : 'cosmetic',
        hashTag : 'all',
        showIntroDetail : false,
        activeButton: '',
        links: {
            resume : 'https://docs.google.com/document/d/15-CXM8VAWNMwLF29aSq1yT8glhkPSum9maEPwW4KeaI/edit'
        },
        modalInfo : {
            imgName : 'startup/xpoiled_detail.png',
            content :'',
            isImg : true
        },
        contentDetails: {
            'startup/xpoiled_detail.png' : {
                content : 'content details startup/xpoiled_detail.png', 
            },
            '2022voty-vertical-main-cover.mp4' : {
                content : 'content is 2022voty-vertical-main-cover.mp4'
            },
            'digitalContent/seventeenReadImage.png' : {
                content : 'content is digitalContent/seventeenReadImage.png'
            },
            'digitalContent/voy2021.png' : {
                content : 'content is digitalContent/voy2021.png'
            },
            'digitalContent/pinkLipps.png' : {
                content : 'digitalContent/pinkLipps.png'
            },
            'cosmetic/unicornGlow_main.png' : {
                content : 'content is cosmetic/unicornGlow_main.png'
            },
            'digitalContent/tutti_main.png' : {
                content : 'digitalContent/tutti_main.png'
            },
            'digitalContent/book_detail.png' : {
                content : 'digitalContent/book_detail.png'
            },
            'digitalContent/book_detail2.png' : {
                content : 'digitalContent/book_detail2.png'
            },
            'others/book_main.png' : {
                content : 'others/book_main.png'
            },
            'cosmetic/sooae_main.png' : {
                content : 'cosmetic/sooae_main.png'
            },
            'cosmetic/lock_main.png' : {
                content : 'cosmetic/lock_main.png'
            }
        }
    },
    getters: {
        getModalInfo: function(state) {
            return state.modalInfo
        },
        getActiveButton: function(state) {
            return state.activeButton
        },
        getHashTag : function(state) {
            return state.hashTag
        },
        getShowIntroDetail : function(state) {
            return state.showIntroDetail
        }
    },
    mutations: {
        setModalInfo: function(state, {imgName, content, isImg}) {
            state.modalInfo.imgName = imgName,
            state.modalInfo.content = content,
            state.modalInfo.isImg = isImg
        },
        setActiveButton: function(state, payload) {
            state.activeButton = payload
        },
        setShowIntroDetail: function(state, payload) {
            state.showIntroDetail = payload
        },
        setHashTag : function(state, payload) {
            state.hashTag = payload
            console.log('state is ', state)
            console.log('payload is ', payload)
        }
    },










    
    actions : {}
})