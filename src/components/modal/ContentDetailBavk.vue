<template>
    <div>
        <!-- modal -->
        <div id="fsModal"
            class="modal animated bounceIn"
            tabindex="-1"
            role="dialog"
            v-show="true"
            aria-labelledby="myModalLabel"
            aria-hidden="true">

            <!-- dialog -->
            <div class="modal-dialog">

                <!-- content -->
                <div class="modal-content">

                <!-- header -->
                <div class="modal-header">
                    <h1 id="myModalLabel"
                        class="modal-title">
                    Modal title
                    </h1>
                </div>
                <!-- header -->
                
                <!-- body -->
                <div class="modal-body">
                    <h2>1. Modal sub-title</h2>

                    <p>Liquor ipsum dolor sit amet bearded lady, grog murphy's bourbon lancer. Kamikaze vodka gimlet; old rip van winkle, lemon drop martell salty dog tom collins smoky martini ben nevis man o'war. Strathmill grand marnier sea breeze b & b mickey slim. Cactus jack aberlour seven and seven, beefeater early times beefeater kalimotxo royal arrival jack rose. Cutty sark scots whisky b & b harper's finlandia agent orange pink lady three wise men gin fizz murphy's. Chartreuse french 75 brandy daisy widow's cork 7 crown ketel one captain morgan fleischmann's, hayride, edradour godfather. Long island iced tea choking hazard black bison, greyhound harvey wallbanger, "gibbon kir royale salty dog tonic and tequila."</p>

                    <h2>2. Modal sub-title</h2>

                    <p>The last word drumguish irish flag, hurricane, brandy manhattan. Lemon drop, pulteney fleischmann's seven and seven irish flag pisco sour metaxas, hayride, bellini. French 75 wolfram christian brothers, calvert painkiller, horse's neck old bushmill's gin pahit. Monte alban glendullan, edradour redline cherry herring anisette godmother, irish flag polish martini glen spey. Abhainn dearg bloody mary amaretto sour, ti punch black cossack port charlotte tequila slammer? Rum swizzle glen keith j & b sake bomb harrogate nights 7 crown! Hairy virgin tomatin lord calvert godmother wolfschmitt brass monkey aberfeldy caribou lou. Macuá, french 75 three wise men.</p>

                    <h2>3. Modal sub-title</h2>

                    <p>Pisco sour daiquiri lejon bruichladdich mickey slim sea breeze wolfram kensington court special: pink lady white lady or delilah. Pisco sour glen spey, courvoisier j & b metaxas glenlivet tormore chupacabra, sambuca lorraine knockdhu gin and tonic margarita schenley's." Bumbo glen ord the macallan balvenie lemon split presbyterian old rip van winkle paradise gin sling. Myers black bison metaxa caridan linkwood three wise men blue hawaii wine cooler?" Talisker moonwalk cosmopolitan wolfram zurracapote glen garioch patron saketini brandy alexander, singapore sling polmos krakow golden dream. Glenglassaugh usher's wolfram mojito ramos gin fizz; cactus jack. Mai-tai leite de onça bengal; crown royal absolut allt-á-bhainne jungle juice bacardi benrinnes, bladnoch. Cointreau four horsemen aultmore, "the amarosa cocktail vodka gimlet ardbeg southern comfort salmiakki koskenkorva."</p>

                </div>
                <!-- body -->

                <!-- footer -->
                <div class="modal-footer">
                    <button class="btn btn-secondary"
                            data-dismiss="modal">
                    close
                    </button>
                    <button class="btn btn-default">
                    Default
                    </button>
                    <button class="btn btn-primary">
                    Primary
                    </button>
                </div>
                <!-- footer -->

                </div>
                <!-- content -->

            </div>
        <!-- dialog -->

        </div>
    </div>
</template>

<script>
export default {
    name : 'ContentDetail',
    components : {

    },
    props: {
        propModalShow : {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    }, 
    created() {

    },
    computed : {
        modalShow () {
            console.log('modalshow')
            return this.propModalShow
        },
        getModalInfo () {
            return this.$store.getters.getModalInfo
        },
        showImage() {
            // ../assets/img/2022voty-vertical-main-cover.mp4
            console.log('../../assets/img/' + this.getModalInfo.imgName)
            return require('../../assets/img/' + this.getModalInfo.imgName);
            // // return require('../../assets/img/' + this.getModalInfo.imgName);
            // if(this.getModalInfo.isImg) {
            //     return require('../../assets/img/' + this.getModalInfo.imgName);
            // } else {
            //     return require('../../assets/img/' + this.getModalInfo.imgName);
            // }
        }
    },
    methods: {
        
    }

}
</script>
<style scoped>

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.modal-dialog {
  position: fixed;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0;
}

.modal-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px solid #3c7dcf;
  border-radius: 0;
  box-shadow: none;
}

.modal-header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  padding: 10px;
  background: #6598d9;
  border: 0;
}

.modal-title {
  font-weight: 300;
  font-size: 2em;
  color: #fff;
  line-height: 30px;
}

.modal-body {
  position: absolute;
  top: 50px;
  bottom: 60px;
  width: 100%;
  font-weight: 300;
  overflow: auto;
}

.modal-footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 60px;
  padding: 10px;
  background: #f1f3f5;
}
</style>