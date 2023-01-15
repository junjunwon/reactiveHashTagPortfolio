<template>
    <div
        style="display:block;width:100%;height:auto;"
    >
        <!-- <b-modal id="my-modal">Hello From My Modal!</b-modal> -->
        <ContentDetail :propModalShow="modalShow"></ContentDetail>
        
        <b-container style="margin-top:6em;">
            <!-- Branding -->
            <!-- Digital Content -->
            <!-- <b-row id="row" align-h="around" v-show="getPackageHashTag === 'digitalContent' || getPackageHashTag === 'all'">
                <b-col cols="12" md="12" align-self="center">
                    <img src="../assets/img/digitalContent/seventeenVoiceOftheYear2022.jpeg" alt="" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>
            </b-row> -->
            <!-- ################################################# -->
            <!-- ################### FOR TEST ###################-->
            <!-- ################################################# -->
            <!-- <b-row id="rowSquare" align-v="stretch" v-show="getPackageHashTag === 'all'" >
                <b-col cols="12" align-self="center">
                    <vueper-slides
                    fade
                    :visible-slides="3"
                    slide-multiple
                    :slide-ratio="1 / 4"
                    :bullets="false"
                    :arrows-outside="false">
                        <vueper-slide 
                            v-for="(slide, i) in slides" :key="i" :image="slide.image"
                            :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
                        />
                    </vueper-slides>
                    <div class="inlineHashTag" style="text-align: center; padding-top: 3em;">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                    </div>
                </b-col>
            </b-row> -->
            <!-- <b-row id="row" align-v="center" v-show="getPackageHashTag === 'all'">
                <div class="imageBackground"></div>
            </b-row> -->
            <!-- ################################################# -->
            <!-- ################### ALL CATA ###################-->
            <!-- ################################################# -->
            <b-row id="row" align-v="center" v-show="getPackageHashTag === 'all'">
                <b-col cols="12" align-self="center">
                    <!-- <infinite-slide-bar duration="80s" :barStyle="{ background: '#000000', padding: '5px 0', overflow: 'inherit', height: '900px', height: setSliderHeight() }"> -->
                    <infinite-slide-bar duration="40s" paused :barStyle="{ background: '#000000'}">
                        <div class="items" @click="clickImgtoModal($event)">
                            <b-col 
                                class="f-left pd-t-8px mg-r-10px" 
                                align-self="center"
                                v-for="(slide, i) in slides" :key="i"
                            >
                                <div 
                                    class="imageBackground" 
                                    :style="{ 'background': 'url(' + slide.image + ') center / contain no-repeat', 'cursor' : 'pointer'}"></div>
                                <!-- <b-img thumbnail fluid :src="slide.image" alt="Image 1" style="background-size: cover;"></b-img> -->
                                <!-- :style="{ 'background': 'url(' + slide.image + ') center no-repeat', 'background-size': 'contain', 'width' : '300px'}"></div> -->
                            </b-col>
                        </div>
                    </infinite-slide-bar>
                    <div class="inlineHashTag" style="text-align: center;">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                    </div>
                </b-col>
            </b-row>
            <b-row id="rowSquare" align-v="stretch" v-show="getPackageHashTag === 'all'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <!-- <VLazyImage src="../assets/img/startup/xpoiled_detail.png" /> -->
                    <img src="../assets/img/startup/xpoiled_detail.png" id="startup/xpoiled_detail.png xpoiled" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "startup" @click="setHashTag($event.currentTarget.name)">#Startup</button>
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "packaging" @click="setHashTag($event.currentTarget.name)">#Packaging</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                        <button class="button" name = "webDesign" @click="setHashTag($event.currentTarget.name)">#Web Design</button>
                        <!-- <div class="inlineLetter">Distributed in TARGET</div> -->
                    </div>
                </b-col>
                <b-col cols="6" align-self="end">
                    <video id="2022voty-vertical-main-cover.mp4 " webkit-playsinline playsinline loop autoplay muted preload="auto" @click="clickImgtoModal($event)" >
                        <source src="https://drive.google.com/uc?export=view&id=1G03FIjI1fsLKFkgSZfHTebBH20Ci7BY2" type="video/mp4" />
                    </video>
                    <div class="inlineHashTag">
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
            </b-row>
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'all'">
                <b-col cols="12" md="12" align-self="center">
                    <img src="../assets/img/digitalContent/seventeenReadImage.png" alt="" id="digitalContent/seventeenReadImage.png" @click="clickImgtoModal($event)"/>
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
            </b-row>
            <b-row id="rowSquare" align-v="stretch" v-show="getPackageHashTag === 'all'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/digitalContent/voy2021.png" alt="" id="digitalContent/voy2021.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/pinklipps/pinkLipps.png" id="pinklipps/pinkLipps.png pinklipps" @click="clickImgtoModal($event)"/>
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <button class="button" name = "displayDesign" @click="setHashTag($event.currentTarget.name)">#Display Design</button>
                        <div class="inlineLetter">Distributed in TARGET</div>
                    </div>
                </b-col>
            </b-row>
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'all'">
                <b-col cols="10" md="10" align-self="center">
                    <img src="../assets/img/unicornGlow/unicornGlow_main.png" id="unicormGlow/unicornGlow_main.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                        <button class="button" name = "webDesign" @click="setHashTag($event.currentTarget.name)">#Web Design</button>
                        <button class="button" name = "displayDesign" @click="setHashTag($event.currentTarget.name)">#Display Design</button>
                        
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <div class="inlineLetter">Distributed at WALMART, CVS</div>
                    </div>
                </b-col>
                <b-col cols="2" md="2">
                </b-col>
            </b-row>
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'all'">
                <b-col cols="2" md="2">
                </b-col>
                <b-col cols="10" md="10" align-self="center">
                    <img src="../assets/img/tutti/tutti_main.png" alt="" id="digitalContent/tutti_main.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "productDesign" @click="setHashTag($event.currentTarget.name)">#Product Design</button>
                        <!-- <div class="inlineLetter">Cosmetic Package</div> -->
                    </div>
                </b-col>
            </b-row>
            <b-row id="row" align-v="stretch" v-show="getPackageHashTag === 'all'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/others/book_detail2.png" id="others/book_detail2.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "illustration" @click="setHashTag($event.currentTarget.name)">#Illustration</button>
                        <!-- <div class="inlineLetter">Distributed in TARGET</div> -->
                    </div>
                </b-col>
                <b-col cols="6" align-self="end">
                    <img src="../assets/img/others/book_detail.png" id="others/book_detail.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "editorialDesign" @click="setHashTag($event.currentTarget.name)">#Editorial Design</button>
                        <button class="button" name = "illustration" @click="setHashTag($event.currentTarget.name)">#Illustration</button>
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
            </b-row>
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'all'">
                <b-col cols="10" md="10" align-self="center">
                    <img src="../assets/img/others/book_main.png" id="others/book_main.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "editorialDesign" @click="setHashTag($event.currentTarget.name)">#Editorial Design</button>
                        <button class="button" name = "illustration" @click="setHashTag($event.currentTarget.name)">#Illustration</button>
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
                <b-col cols="2" md="2">
                </b-col>
            </b-row>
            <b-row id="row" align-v="stretch" v-show="getPackageHashTag === 'all'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/cosmetic/sooae_main.png" id="cosmetic/sooae_main.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "photography" @click="setHalkkkshTag($event.currentTarget.name)">#Photography</button>
                        <button class="button" name = "displayDesign" @click="setHalkkkshTag($event.currentTarget.name)">#Display Design</button>
                        <button class="button" name = "packageDesign" @click="setHashTag($event.currentTarget.name)">#Package Design</button>
                        <div class="inlineLetter">Distributed at WALMART, CVS</div>
                    </div>
                </b-col>
                <b-col cols="6" align-self="end">
                    <!-- <img src="../assets/img/lockColor/lock_main.png" id="lockColor/lock_main.png" @click="clickImgtoModal($event)" /> -->
                    <img src="https://drive.google.com/uc?export=view&id=1ReQZuhfPonaRFufLQv0H6YjeMTd57uOX" id="lockColor/lock_main.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "photography" @click="setHalkkkshTag($event.currentTarget.name)">#Photography</button>
                        <button class="button" name = "displayDesign" @click="setHalkkkshTag($event.currentTarget.name)">#Display Design</button>
                        <button class="button" name = "packageDesign" @click="setHashTag($event.currentTarget.name)">#Package Design</button>
                        <div class="inlineLetter">Distributed at WALMART, CVS</div>
                    </div>
                </b-col>
            </b-row>
            <b-row id="row" align-v="stretch" v-show="getPackageHashTag === 'all'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img :src="getCosmeticImgSrc" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <div class="inlineLetter">Cosmetic Package</div>
                    </div>
                </b-col>
                <b-col cols="6" align-self="end">
                    <img src="../assets/img/pinklipps/cosmetic_detail.png" id="pinklipps/cosmetic_detail.png pinklipps" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <div class="inlineLetter">Cosmetic Package</div>
                    </div>
                </b-col>
            </b-row>  
            <!-- ################################################# -->
            <!-- ################### Branding ###################-->
            <!-- ################################################# -->
            <b-row id="rowSquare" align-v="stretch" v-show="getPackageHashTag === 'branding'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/startup/xpoiled_detail.png" id="startup/xpoiled_detail.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "startup" @click="setHashTag($event.currentTarget.name)">#Startup</button>
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "packaging" @click="setHashTag($event.currentTarget.name)">#Packaging</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                        <button class="button" name = "webDesign" @click="setHashTag($event.currentTarget.name)">#Web Design</button>
                        <!-- <div class="inlineLetter">Distributed in TARGET</div> -->
                    </div>
                </b-col>
                <b-col cols="6" align-self="end">
                    <video webkit-playsinline playsinline loop autoplay muted preload="auto">
                        <!-- <source src="../assets/img/2022voty-vertical-main-cover.mp4" type="video/mp4" id="2022voty-vertical-main-cover.mp4" @click="clickImgtoModal($event)" /> -->
                        <source src="https://drive.google.com/uc?export=view&id=1G03FIjI1fsLKFkgSZfHTebBH20Ci7BY2" type="video/mp4" id="2022voty-vertical-main-cover.mp4" @click="clickImgtoModal($event)" />
                    </video>
                    <div class="inlineHashTag">
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <div class="inlineLetter">Seventeen of Hearst</div>
                    </div>
                </b-col>
            </b-row>
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'branding'">
                <b-col cols="12" md="12" align-self="center">
                    <img src="../assets/img/digitalContent/seventeenReadImage.png" id="digitalContent/seventeenReadImage.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <div class="inlineLetter">Seventeen of Hearst</div>
                    </div>
                </b-col>
            </b-row>
            <b-row id="rowSquare" align-v="stretch" v-show="getPackageHashTag === 'branding'" >
                <!-- <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/digitalContent/voy2021.png" id="digitalContent/voy2021.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <div class="inlineLetter">Seventeen of Hearst</div>
                    </div>
                </b-col> -->
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/pinklipps/pinkLipps.png" id="pinklipps/pinkLipps.png pinklipps" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <div class="inlineLetter">Distributed in TARGET</div>
                    </div>
                </b-col>
            </b-row>
            <!-- ################################################# -->
            <!-- ################### digitalContent ################### -->
            <!-- ################################################# -->
            <b-row id="row" align-v="stretch" v-show="getPackageHashTag === 'digitalContent'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/startup/xpoiled_detail.png" id="startup/xpoiled_detail.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "startup" @click="setHashTag($event.currentTarget.name)">#Startup</button>
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "packaging" @click="setHashTag($event.currentTarget.name)">#Packaging</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                        <button class="button" name = "webDesign" @click="setHashTag($event.currentTarget.name)">#Web Design</button>
                        <!-- <div class="inlineLetter">Distributed in TARGET</div> -->
                    </div>
                </b-col>
                <b-col cols="6" align-self="center">
                    <video webkit-playsinline playsinline loop autoplay muted preload="auto">
                        <source src="https://drive.google.com/uc?export=view&id=1G03FIjI1fsLKFkgSZfHTebBH20Ci7BY2" type="video/mp4" id="2022voty-vertical-main-cover.mp4" @click="clickImgtoModal($event)" />
                    </video>
                    <div class="inlineHashTag">
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
            </b-row>
            <b-row id="rowSquare" align-h="around" v-show="getPackageHashTag === 'digitalContent'">
                <b-col cols="12" md="12" align-self="center">
                    <img src="../assets/img/digitalContent/seventeenReadImage.png" id="digitalContent/seventeenReadImage.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
            </b-row>
            <b-row id="rowSquare" align-v="stretch" v-show="getPackageHashTag === 'digitalContent'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/digitalContent/voy2021.png" id="digitalContent/voy2021.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/pinklipps/pinkLipps.png" id="pinklipps/pinkLipps.png pinklipps" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <div class="inlineLetter">Distributed in TARGET</div>
                    </div>
                </b-col>     
            </b-row>
            <b-row id="row" align-v="stretch" align-h="around" v-show="getPackageHashTag === 'digitalContent'">
                
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/startup/xpoiled_detail.png" alt="" id="startup/xpoiled.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>
                <b-col cols="6" align-self="center">
                    <img id="logo" :src="getXpoiledImgSrc" />
                </b-col>
            </b-row>
            <!-- ################################################# -->
            <!-- ################### Packaging ################### -->
            <!-- ################################################# -->
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'packaging'">
                <b-col cols="10" md="10" align-self="center">
                    <img src="../assets/img/unicornGlow/unicornGlow_main.png" id="unicornGlow/unicornGlow_main.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <div class="inlineLetter">Seventeen of Hearst</div>
                    </div>
                </b-col>
                <b-col cols="2" md="2">
                </b-col>
            </b-row>
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'packaging'">
                <b-col cols="2" md="2">
                </b-col>
                <b-col cols="10" md="10" align-self="center">
                    <img src="../assets/img/tutti/tutti_main.png" id="tutti/tutti_main.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <div class="inlineLetter">Cosmetic Package</div>
                    </div>
                </b-col>
            </b-row>
            <b-row id="row" align-v="stretch" v-show="getPackageHashTag === 'packaging'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img :src="getCosmeticImgSrc" @click="modalShow = !modalShow"/>
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <div class="inlineLetter">Cosmetic Package</div>
                    </div>
                </b-col>
                <b-col cols="6" align-self="end">
                    <img src="../assets/img/pinklipps/cosmetic_detail.png" id="pinklipps/cosmetic_detail.png pinklipps" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "package" @click="setHashTag($event.currentTarget.name)">#Package</button>
                        <div class="inlineLetter">Cosmetic Package</div>
                    </div>
                </b-col>
            </b-row>
            <!-- ################################################# -->
            <!-- ################### photography ################### -->
            <!-- ################################################# -->
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'photography'">
                <b-col cols="4" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/startup/xpoiled_detail.png" id="startup/xpoiled_detail.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>

            </b-row>
            <!-- ################################################# -->
            <!-- ################### illustration ################### -->
            <!-- ################################################# -->
            <!-- ################################################# -->
            <!-- ################### Brand Strategy ################### -->
            <!-- ################################################# -->
            <b-row id="row" align-v="stretch" v-show="getPackageHashTag === 'brandStrategy'" >
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/startup/xpoiled_detail.png" id="startup/xpoiled_detail.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "startup" @click="setHashTag($event.currentTarget.name)">#Startup</button>
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "packaging" @click="setHashTag($event.currentTarget.name)">#Packaging</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "photography" @click="setHashTag($event.currentTarget.name)">#Photography</button>
                        <button class="button" name = "webDesign" @click="setHashTag($event.currentTarget.name)">#Web Design</button>
                        <!-- <div class="inlineLetter">Distributed in TARGET</div> -->
                    </div>
                </b-col>
                <b-col cols="6" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/pinklipps/pinkLipps.png" id="pinklipps/pinkLipps.png pinklipps" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <div class="inlineLetter">Distributed in TARGET</div>
                    </div>
                </b-col>
            </b-row>
            <b-row id="rowSquare" align-h="around" v-show="getPackageHashTag === 'brandStrategy'">
                <b-col cols="12" md="12" align-self="center">
                    <img src="../assets/img/digitalContent/seventeenReadImage.png" id="digitalContent/seventeenReadImage.png" @click="clickImgtoModal($event)" />
                    <div class="inlineHashTag">
                        <button class="button" name = "branding" @click="setHashTag($event.currentTarget.name)">#Branding</button>
                        <button class="button" name = "digitalContent" @click="setHashTag($event.currentTarget.name)">#Digital Content</button>
                        <button class="button" name = "brandStrategy" @click="setHashTag($event.currentTarget.name)">#Brand Strategy</button>
                        <!-- <div class="inlineLetter">Seventeen of Hearst</div> -->
                    </div>
                </b-col>
            </b-row>
            <!-- ################################################# -->
            <!-- ################### Web Design ################### -->
            <!-- ################################################# -->
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'webDesign'">
                <b-col cols="4" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/startup/xpoiled_detail.png" id="startup/xpoiled_detail.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>

            </b-row>
            <!-- ################################################# -->
            <!-- ################### Product Design ################### -->
            <!-- ################################################# -->
            <!-- ################################################# -->
            <!-- ################### Editorial Design ################### -->
            <!-- ################################################# -->
            <!-- ################################################# -->
            <!-- ################### Startup ################### -->
            <!-- ################################################# -->
            <b-row id="row" align-h="around" v-show="getPackageHashTag === 'startup'">
                <b-col cols="4" align-self="start" v-b-modal="'my-modal'">
                    <img src="../assets/img/startup/xpoiled_detail.png" id="startup/xpoiled_detail.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>
                <b-col cols="5" align-self="center">
                    <img id="logo" :src="getXpoiledImgSrc" />
                </b-col>
            </b-row>
        </b-container>
        <!-- 모바일 기준  -->
        <b-container class="" fluid="xl" v-if="false">
            <b-row id="row" align-h="center">
                <b-col align-self="start">
                    <img src="../assets/img/startup/xpoiled.png" id="startup/xpoiled.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>
            </b-row>
            <b-row id="row" align-h="center">
                <b-col align-self="center">
                    <img src="../assets/img/startup/xpoiled.png" id="startup/xpoiled.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>
            </b-row>
            <b-row id="row" align-h="center">
                <b-col align-self="start">
                    <img src="../assets/img/startup/xpoiled.png" id="startup/xpoiled.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>
            </b-row>
            <b-row id="row" align-h="center">
                <b-col align-self="center">
                    <img src="../assets/img/startup/xpoiled.png" id="startup/xpoiled.png" @click="clickImgtoModal($event)" />
                    <div style="text-align:start;">#best #123</div>
                </b-col>
            </b-row>
        </b-container>            
        <div id="footer">
            Version : 7.0.1v<br/>
            Width: {{ window.width }} px<br/>
            Height: {{ window.height }} px
        </div>
    </div>
</template>

<script>
import ContentDetail from './modal/ContentDetail.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name : 'dummy-vue',
    components : {
        ContentDetail,
        VueperSlides, VueperSlide
    },
    data() {
        return {
            // for test
            slides: [
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.',
                    image : require('../assets/img/startup/xpoiled.png')
                    // image : '../assets/img/startup/xpoiled.png'
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_detail.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_letters.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo2.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo3.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo4.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo5.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo6.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo6.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo7.png')
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : require('../assets/img/startup/xpoiled_photo8.png')
                }
            ],
            //real
            modalShow: false,
            hashTag : this.$store.getters.getHashTag,
            deviceSize : window.innerWidth,
            window: {
                width: 0,
                height: 0
            },
            isImg : true,
            // 아래 이미지 배열은 로테이션에 관한 것.
            xpoiledImages : [
                {
                    id: '1',
                    image: 'startup/xpoiled.png'
                },
                {
                    id: '2',
                    image: 'startup/xpoiled_detail.png'
                }
            ],
            cosmeticImages : [
                {
                    id: '1',
                    image: 'pinklipps/cosmetic.jpg'
                },
                {
                    id: '2',
                    image: 'pinklipps/cosmetic_detail.png'
                }
            ],
            xpoiledImg: {
                index: 0,
                xpoiledImgSrc: 'startup/xpoiled.png'
            },
            cosmeticImg: {
                index: 0,
                cosmeticImgSrc: 'pinklipps/cosmetic.jpg'
            },
            
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        setInterval(() => {
            if(this.xpoiledImg.index === this.xpoiledImages.length) {
                this.xpoiledImg.index = 0;
            }
            this.xpoiledImg.index++
            if(this.cosmeticImg.index === this.cosmeticImages.length) {
                this.cosmeticImg.index = 0;
            }
            this.cosmeticImg.index++

            this.xpoiledImg.xpoiledImgSrc = this.xpoiledImages[this.xpoiledImg.index-1].image;
            this.cosmeticImg.cosmeticImgSrc = this.cosmeticImages[this.cosmeticImg.index-1].image;
        }, 1000)
    },
    computed: {
        getPackageHashTag : function() {
            return this.$store.getters.getHashTag
        },
        getXpoiledImgSrc : function() {
            return require('../assets/img/'+this.xpoiledImg.xpoiledImgSrc);
        },
        getCosmeticImgSrc : function() {
            return require('../assets/img/'+this.cosmeticImg.cosmeticImgSrc);
        }
    },
    watch: {
        deviceSize: function() {
            console.log(window.innerHeight)
        }
    },
    methods: {
        clickImgtoModal(event) {
            this.modalShow = !this.modalShow
            if (event.currentTarget.id.includes('mp4')) {
                this.isImg = false
            } else {
                this.isImg = true
            }
            
            this.$store.commit('setModalInfo', {
                imgName : event.currentTarget.id, 
                isImg : this.isImg,
                catagory : event.currentTarget.id.split(' ')[1]
            })
        },
        setHashTag(hashTag) {
            this.$store.commit('setActiveButton', hashTag)
            this.$store.commit('setHashTag', hashTag)
            location.href='#section-temp' 
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        isMobile() {
            console.log('window.innerHeight in Content is ', window.innerHeight);
            if(this.window.width <= 900) {
                return true
            } else {
                return false
            }
        },
        logo_info() {
            for(let i=1; i<=this.images.length; i++) {
                this.img_src = '../assets/img/xpoiled.png';
            }
        },
        setSliderHeight() {
            let newHeight = '700px'
            if ( 1200 < this.window.width && this.window.width <= 1400 ) {
                 newHeight = '600px' // calculate a height here later
            } else if ( 1000 < this.window.width && this.window.width <= 1200 ) {
                newHeight = '500px'
            } else if ( 800 < this.window.width && this.window.width <= 1000 ) {
                newHeight = '400px'
            } else if ( 600 < this.window.width && this.window.width <= 800 ) {
                newHeight = '350px'
            } else if ( 400 < this.window.width && this.window.width <= 600 ) {
                newHeight = '300px'
            } else if ( 300 < this.window.width && this.window.width <= 400 ) {
                newHeight = '250px'
            } else if ( this.window.width <= 300 ) {
                newHeight = '200px'
            }
            return newHeight
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>
<style scoped>
.inlineHashTag {
    padding-top: 1em;
    text-align: left;
    line-height: 1.0em;
}
button {
    /* font-size: var(--font-size-ssm) !important; */
    font-size: 20px;
    padding: 0px;
    padding-right: 15px !important;
    padding-bottom: 15px !important;
}
.inlineLetter {
    font-size: 20px;
    font-weight: bold;
}
@media (max-width: 777px) {
    button {
        font-size: 0.7em;
        padding-right: 4px !important;
        padding-bottom: 4px !important;
    }
    .inlineHashTag {
        padding-top: 0.6em;
        text-align: left;
        line-height: 0.8em;
    }
    .inlineLetter {
        padding-top: 0.6em;
        font-size: 0.7em;
        /* padding-right: 3px !important;
        padding-bottom: 3px !important; */
    }
}
@media (max-width: 450px) {
    button {
        font-size: 0.45em;
    }
    .inlineHashTag {
        padding-top: 0.3em;
        text-align: left;
        line-height: 0.6em;
    }
    .inlineLetter {
        padding-top: 0.3em;
        font-size: 0.45em;
    }
}
#footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 15px;
}
.row > * {
    outline: none;
}
#rowSquare {
    /* height: 100%; */
    height: 1500px;
    margin-bottom: 150px;
}
#row {
    height: 750px;
    margin-bottom: 300px;
}
.items { 
    width: 50%;
    height: 600px;
    display: flex; 
} 
.imageBackground {
    height: 600px;
    width: 600px;
}
@media (max-width: 1400px) {
    #row {
        height: 700px;
        padding-bottom: 2em;
        margin-bottom: 250px;
    }
    #rowSquare {
        height: 1250px;
        margin-bottom: 100px;
    }
}
@media (max-width: 1200px) {
    #row {
        height: 620px;
        padding-bottom: 2em;
        margin-bottom: 250px;
    }
    #rowSquare {
        height: 1100px;
        margin-bottom: 100px;
    }
}
@media (max-width: 1100px) {
    #row {
        height: 620px;
        padding-bottom: 2em;
        margin-bottom: 250px;
    }
    #rowSquare {
        height: 1100px;
        margin-bottom: 100px;
    }
}

@media (max-width: 1000px) {
    #row {
        height: 620px;
        padding-bottom: 2em;
        margin-bottom: 100px;
    }
    #rowSquare {
        height: 900px;
        margin-bottom: 150px;
    }
}
@media (max-width: 800px) {
    #row {
        height: 500px;
        padding-bottom: 2em;
        margin-bottom: 100px;
    }
    #rowSquare {
        height: 800px;
        margin-bottom: 150px;
    }
    .items { 
        width: 50%;
        height: 500px;
        display: flex; 
    } 
    .imageBackground {
        height: 500px;
        width: 500px;
    }
}
@media (max-width: 600px) {
    #row {
        height: 450px;
        padding-bottom: 2em;
        margin-bottom: 30px;
    }
    #rowSquare {
        height: 610px;
        margin-bottom: 0px;
    }
    .items { 
        width: 50%;
        height: 200px;
        display: flex; 
    } 
    .imageBackground {
        height: 200px;
        width: 400px;
    }
}
@media (max-width: 500px) {
    #row {
        height: 300px;
        padding-bottom: 2em;
        margin-bottom: 30px;
    }
    #rowSquare {
        height: 530px;
        margin-bottom: 55px;
    }
}
@media (max-width: 440px) {
    #row {
        height: 250px;
        padding-bottom: 2em;
        margin-bottom: 30px;
    }
    #rowSquare {
        height: 388px;
        margin-bottom: 55px;
    }

}
@media (max-width: 440px) {
    .items { 
        width: 50%;
        height: 200px;
        display: flex; 
    } 
    .imageBackground {
        height: 200px;
        width: 400px;
    }
}
/* infinite bar */
.thumbnails {
  margin: auto;
  max-width: none;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
  /* background-size: contain; */
  background-repeat: no-repeat; 
  background-position: center center;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
  /* background-size: contain; */
  background-repeat: no-repeat; 
  background-position: center center;
}
</style>