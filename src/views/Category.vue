<template>
  <div>
    <template>
      <div class="about">
        <div id="app" v-cloak v-if="this.rankData">
          <div class="container with-bottom-nav" style="min-height: 667px; height: 667px;">
            <div class="custom-search js-search-bar">
              <form>
                <input type="search" class="custom-search-input" autocomplete="off" name="keyword" value=""
                       placeholder="搜索更赞的商品">
                <span class="icon-custom-search"></span>
              </form>
              <button class="custom-search-type-selection-btn">商品</button>
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
            <div class="content" style="height: 617px;">
              <div class="class-nav">
                <div id="scroll-nav" style="height: 100vh;">
                  <ul class="nav" id="scroll-nav-content" style="height: 540px; transform: translate3d(0px, 0px, 0px);">
                    <li class="category-name js-category-name "
                        :data-cid="list.id" v-for="(list,index) in toplists"
                        @click="getsublists(list.id,index)"
                        :class="{active:index===topindex}"
                    >{{list.name}}
                    </li>

                  </ul>
                </div>
              </div>
              <div class="class-category">
                <div id="scroll-main-wrap" class="main-content">
                  <div class="hot-wrap">
                    <div class="hot-goods">
                      <div class="hot-title">
                        <p class="pull-left">热销商品榜</p>
                        <a href="https://maijia.youzan.com/mars/rank/hotgoods" class="pull-right icon-right">更多</a>
                      </div>
                      <ul>
                        <li class="goods-item" v-for="(list,index) in rankData.hotGoods">
                          <a :href="'goods.html?id='+list.id">
                            <div class="thumb badge center-img">
                              <img :src="list.img">
                              <span class="num">{{list.id}}</span>
                            </div>
                            <div class="detail">
                              <div class="title"> {{list.name}}</div>
                              <div class="price">{{list.price | setPrice}}</div>
                              <div class="recommend">
                                <span>推荐值:</span>
                                <span>{{list.recommend}} </span>
                              </div>
                            </div>
                          </a>
                        </li>

                      </ul>
                    </div>
                    <div class="hot-shops" style="position: relative;">
                      <div class="hot-title">
                        <p class="pull-left">TOP店铺榜</p>
                        <a href="https://maijia.youzan.com/mars/rank/hotshops" class="pull-right icon-right">更多</a>
                      </div>
                      <ul>
                        <li class="shop-item" v-for="(list,index) in rankData.hotShops">
                          <div class="shop-title">
                            <span class="badge">{{index+1}}</span>
                            <a :href="list.clickUrl">{{list.name}}</a>
                            <span class="follows"> / 关注度: {{list.follows}}</span>
                          </div>
                          <ul class="shop-images">
                            <li>
                              <a :href="list.clickUrl"><img :src="list.imgs"></a>
                            </li>
                            <li>
                              <a :href="list.clickUrl"><img :src="list.imgs"></a>
                            </li>
                            <li>
                              <a :href="list.clickUrl"><img :src="list.imgs"></a>
                            </li>
                          </ul>
                        </li>

                      </ul>
                    </div>
                    <div class="hot-keywords">
                      <div class="hot-title">
                        <p class="pull-left">热搜词排行</p>
                      </div>
                      <ul class="keywords-list">
                        <li><a href="javascript:;" class="js-hot-keyword" v-for="(list,index) in rankData.hotKeywords ">
                          {{list}} </a></li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div id="scroll-main-content" class="js-main-content inner-content"
                     style="height: 534px; transform: translate3d(0px, 0px, 0px);" v-if="topindex>0&&subData">
                  <h3 class="category-title">热门品牌 </h3>
                  <ul class="category-content">
                    <li class="category-item js-category-item" data-item-id="85" :data-item-name="list.name"
                        v-for="(list,index) in subData.brandList"
                        @click="searchgoods(list)">
                      <img :src="list.img" :alt="list.name" class="category-img">
                      <span class="category-item-name">
                {{list.name}}        </span>
                    </li>

                  </ul>
                  <h3 class="category-title"> 热门分类 </h3>
                  <ul class="category-content">
                    <li class="category-item js-category-item" data-item-id="list.id" :data-item-name="list.name"
                        v-for="(list,index) in subData.categoryList"
                        @click="searchgoods(list)">
                      <img :src="list.img" :alt="list.name" class="category-img">
                      <span class="category-item-name">
                水果            </span>
                    </li>


                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </template>

  </div>
</template>

<script>
  import mixin from '../assets/js/mixin'
  import axios from 'axios'
  import url from '../assets/js/api.js'
  import '../assets/css/category.css'

  export default {
    name: "category",
    data() {
      return {
        toplists: null,
        topindex: 0,
        subData: null,
        rankData: null,
      }
    },
    created() {
      this.getToplists()
      this.getsublists(0, 0)
    },
    methods: {
      getToplists() {
        axios.get(url.toplist).then(res => {
          this.toplists = res.data.lists
        }).catch(err => {
          throw err
        })
      },
      getsublists(id, index) {
        this.topindex = index
        if (index ===0) {
          this.getranklists()
        } else {
          axios.get(url.sublist, {id}).then(res => {

            this.subData = res.data.data
          }).catch(err => {
            console.log(err)
          })
        }

      },
      getranklists() {
        axios.get(url.ranklist).then(res => {
          this.rankData = res.data.data
        }).catch(err => {
          console.log(err)
        })
      },
      searchgoods(list) {
        location.href = `search.html?id=${list.id}&keyword=${list.name}`
      }
    },
    mixins: [mixin]
  }
</script>

<style scoped>

</style>