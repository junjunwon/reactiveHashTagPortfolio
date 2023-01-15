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
            imgName : '',
            isImg : true,
            catagory :''
        },
        contentDetails: {
            'startup/xpoiled_detail.png' : {
                content : 'Packaging Design', 
            },
            'startup/xpoiled.png' : {
                content : 'Word Mark Logo',
                link : 'http://www.xpoiled.com'
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
            'unicornGlow/unicornGlow_main.png' : {
                content : 'content is unicornGlow/unicornGlow_main.png'
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
            'lockColor/lock_main.png' : {
                content : 'lockColor/lock_main.png'
            },
            'cosmetic/cosmetic_detail.png' : {
                content : 'cosmetic/cosmetic_detail.png'
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
        setModalInfo: function(state, {imgName, isImg, catagory}) {
            state.modalInfo.imgName = imgName,
            state.modalInfo.isImg = isImg,
            state.modalInfo.catagory = catagory
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