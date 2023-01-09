<template>
    <div>
        <div style="height:1000px;" v-show="getPackageHashTag === 'xpoiled' || getPackageHashTag === 'all'">
            <div class="flex">
                <div class="flexTop">
                    <div class="child">
                        <img 
                        src="../assets/img/startup/xpoiled.png" alt="" />
                        <div style="text-align:start;">#best #123</div>
                    </div>
                </div>
                <div class="flexCenter">
                    <div class="child">
                        <video autoplay loop>
                            <source src="../assets/img/2022voty-vertical-main-cover.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div class="flexBottom">
                    <div class="child">
                        <img src="../assets/img/startup/xpoiled_detail.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div v-show="getPackageHashTag === 'cosmetic' || getPackageHashTag === 'all'">
            <div class="flex">
                <div class="flexBottom">
                    <div class="child">
                        <img src="../assets/img/cosmetic/cosmetic.jpg" alt="" />
                    </div>
                </div>
                <div class="flexTop">
                    <div class="child">
                        <img src="../assets/img/cosmetic/cosmetic_detail.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="wrapper">
            <div class="box a">
                <p>This is box A. </p>
                <code>align-self: stretch</code>
            </div>
            <div class="box b">
                <p>This is box B.</p>
                <code>align-self: end</code>
            </div>
            <div class="box c">
                <p>This is box C.</p>
                <code>align-self: start</code>

            </div>
            <div class="box d">
                <p>This is box D.</p>
                <code>align-self: center</code>
            </div>
            <div class="box e">
                <p>Each of the boxes on the left has a grid area of 3 columns and 3 rows (we're counting the gutter col/row). So each covers the same size area as box A.</p>
                <p>The align-self property is used to align the content inside the grid-area.</p>
            </div>
        </div> -->
    </div>
    
</template>

<script>
export default {
    name : 'dummy-vue',
    components : {

    },
    data() {
        return {
            hashTag : this.$store.getters['basicStore/getHashTag'],
            // temp1 : require("../assets/img/yooraFile.jpg")
        }
    },
    created() {},
    computed: {
        getPackageHashTag : function() {
            return this.$store.getters['basicStore/getHashTag']
        }
    }
}
</script>