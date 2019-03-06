<template>
    <div>
        <div class="container with-top-search" style="min-height: 667px;" @touchmove="move" v-cloak>
            <div class="custom-search js-search-bar">
                <form>
                    <input type="search" class="custom-search-input" autocomplete="off" name="keyword" :value="keyword" placeholder="搜索更赞的商品" style="padding-left: 66px;">
                    <span class="icon-custom-search"></span>
                </form>
                <button class="custom-search-type-selection-btn custom-search-type-selection-btn-focus">商品</button>
                <span class="cancel">取消</span>
                <div class="search-type-dropdown-menu" style="display: none;">
        <span class="search-type-dropdown-menu-indicator">
            <i></i>
        </span>
                    <div class="drop-menu-content">
                        <div class="search-type-goods">
                            <i class="icon-goods"></i>
                            <span>商品</span>
                        </div>
                        <div class="search-type-dropdown-menu-divider"></div>
                        <div class="search-type-shop">
                            <i class="icon-shop"></i>
                            <span>店铺</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-content" style="display: none;"></div>
            <div class="content" >
                <div class="search-wrap js-waterfull-wrap">
                    <ul class="js-list"
                        v-infinite-scroll="getSearchlist"
                        infinite-scroll-disabled="onloading"
                        infinite-scroll-distance="30">
                        <li class="goods-item" v-for="(list, index) in searchData" :key="index">
                            <router-link to="goods">
                                <div class="thumb">
                                    <img :src="list.img">
                                    <i class="sell-out" v-if="list.isOut"></i>
                                </div>
                                <div class="detail">
                                    <div class="title">{{list.name}} </div>
                                    <div class="meta relative">
                                        <span class="price">{{list.price |setPrice}}</span>
                                        <span class="ship pull-right"v-if="list.isPostage"> 包邮</span>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>

                    <div class="list-finished">已经没有更多了</div>
                </div>
            </div>
            <div v-show="isShow" @click="toTop" class="go-to-top" style=" transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></div>
        </div>

    </div>
</template>

<script>
    import '../assets/css/common.css'
    import '../assets/css/search.css'
    import Vue from 'vue'
    import axios from 'axios'
    import url from '../assets/js/api.js'
    import qs from 'qs'
    import mixin from '../assets/js/mixin.js'
    let {keyword,id}=qs.parse(location.search.substr(1))
    console.log(keyword, id);
    import { InfiniteScroll } from 'mint-ui';
    import Velocity from 'velocity-animate'

    Vue.use(InfiniteScroll);

    export default {
        name:'search',
        data(){
            return{
                searchData:null,
                keyword,
                isShow:false,
                pageNum:1,
                pageSize:8,
                isAllloaded:false,
                // loading:false,
                onloading:false
            }
        },
        created(){
            this.getSearchlist()
        },
        methods:{
            getSearchlist(){
                this.onloading=true
                if(this.isAllloaded) return
                //this.loading=true
                axios.get(url.searchlist,{
                    params:{
                        keyword,
                        id,
                        pageNum:this.pageNum,
                        pageSize:this.pageSize,
                    }
                }).then(res=>{
                    let currentLists=res.data.lists
                    if(currentLists.length<this.pageSize ){
                        this.isAllloaded=true
                    }
                    if(this.searchData){

                        this.searchData=this.searchData.concat(currentLists)
                    }else{
                        this.searchData=currentLists
                    }
                    //this.loading=false
                    this.pageNum++
                    this.onloading=false
                }).catch(err=>{
                    console.log(err)
                })
            },
            move(){
                this.isShow = document.documentElement.scrollTop > 60;
            },
            toTop(){
                Velocity(document.body,'scroll',{duration:1000})
            }
        },
        mixins:[mixin]
    }
</script>

<style scoped>

</style>


