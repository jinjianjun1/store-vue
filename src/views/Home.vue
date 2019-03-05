<template>
    <div class="home">
        <div id="app" v-cloak>
            <div class="container with-bottom-nav" style="min-height: 667px;">
                <div class="content">
                    <!-- <div class="js-image-swiper
               custom-image-swiper  custom-image-swiper-single" data-images="1"> -->
                    <!--<swiper :lists="bannerlists" name="swip.vue" v-if="bannerlists"></swiper>-->
                    <!-- </div> -->
                    <!-- <a href="https://maijia.youzan.com/mars/notice/detail?id=" class="notice"></a> -->
                    <div class="section-title">优店推荐</div>
                    <div class="section-content shops">
                        <div class="shop-wrap">
                            <div class="shop-item">
                                <a href="https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn">
                                    <img class="fadeIn"
                                         src="https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png">
                                </a>
                            </div>
                            <div class="shop-item">
                                <a href="https://h5.koudaitong.com/v2/feature/1e22e3vtu">
                                    <img class="fadeIn"
                                         src="https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png">
                                </a>
                            </div>
                            <div class="shop-item">
                                <a href="https://h5.koudaitong.com/v2/feature/8oups7zk">
                                    <img class="fadeIn"
                                         src="https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="section-content daily">
                        <ul>
                        </ul>
                    </div>
                    <div class="line-block line-block-gray">
                        <div class="lineblock-title">
                            <span class="lineblock-font">最热商品推荐</span>
                        </div>
                    </div>
                    <div class="hot-goods js-waterfull-wrap" style="min-height: 300px" data-src="">
                        <ul class="js-list js-lazy" data-src="" v-infinite-scroll="getlists"
                            infinite-scroll-disabled="loading"
                            infinite-scroll-distance="20">
                            <li v-for="(list,index) in lists " :key='index'>
                                <div class="goods-item">
                                    <a :href="'goods.html?id='+list.id">
                                        <div class="thumb img-box">
                                            <img class="fadeIn" :src="list.img">
                                        </div>
                                        <div class="detail">
                                            <div class="title">{{list.name}}</div>
                                            <div class="price">{{list.price}}</div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="loading-more" v-show="loading"><span></span></div>
                    </div>
                    <div class="js-show-find category-guid"></div>
                </div>
            </div>
            <foot></foot>
        </div>

    </div>
</template>

<script>
    import  Vue from 'vue'
    import '../assets/css/index.css'
    import '../assets/css/common.css'

    import axios from 'axios'
    import url from '../assets/js/api.js'


    import { InfiniteScroll } from 'mint-ui';

    Vue.use(InfiniteScroll);
    import mixin from '../assets/js/mixin.js'
    export default {
        name: 'home',
        data() {
            return {
                lists: null,
                pageNum: 1,
                pageSize: 6,
                loading: false,//可以继续加载数据,
                allloaded: false,
                bannerlists: null
            }

        },

        created(){
            this.getlists();
            this.getbanner()

        },
        mounted(){
            console.log(this.bannerlists);
        },
        methods:{
            getlists(){
                if(this.allloaded===true) return;
                this.loading=true;
                axios.get(url.hotLists,{
                    params:{
                        pageNum:this.pageNum,
                        pageSize:this.pageSize
                    }
                }).then(res=>{
                    let currentlist =res.data.lists;
                    if(currentlist.length<this.pageSize){
                        this.allloaded=true
                        console.log(this.allloaded);
                    }
                    if(this.lists){
                        this.lists= this.lists.concat(currentlist)
                    }else{
                        this.lists=currentlist
                    }
                    this.loading=false;
                    console.log(this.loading);
                    this.pageNum++
                })
            },
            getbanner(){
                axios.get(url.banner).then(res=>{
                    this.bannerlists=res.data.lists
                }).catch(err=>{
                    console.log(err)
                })
            },

        },
        mixins:[mixin]
    }
</script>
