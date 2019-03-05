<template>
    <div class="container " v-cloak style="min-height: 581px;">
        <div class="content clearfix js-page-content">
            <div id="cart-container">
                <div>
                    <!---->
                    <!---->
                    <!---->
                    <div class="js-shop-list shop-list">
                        <div class="block block-order block-cart" v-for="(shop,shopIndex) in lists" :key="shop.id">
                            <div class="header">
                                <div class="select-group js-select-group" @click="choseShop(shop)">
                                    <span class="check  " :class="{checked:shop.checked}" v-show="!editingShop"></span>
                                    <span class="check  " :class="{checked:shop.removeChecked}" v-show="editingShop"></span>
                                </div> <a class="shop-title">
                                <i class="custom-store-img">店铺：</i>
                                {{shop.shopTitle}}</a>
                                <a href="javascript:;" @click="edit(shop,shopIndex)" data-type="cart" class="j-edit-list pull-right c-blue font-size-12 edit-list">
                                    <!---->
                                    {{shop.editingMsg}}
                                </a>
                            </div>
                            <!---->
                            <div>
                                <ul class="js-list block block-list block-list-cart border-0">
                                    <li class="block-item block-item-cart "
                                        @touchstart="start($event,good)"
                                        @touchend="end($event,shopIndex,good,goodIndex)"
                                        :ref="'goods-'+shopIndex+'-'+goodIndex"
                                        v-for="(good,goodIndex) in shop.goodsList" :key="good.id" :class="{editing:shop.editing}">
                                        <div>
                                            <div class="check-container" @click="chosePick(shop,good)">
                                                <span class="check" :class={checked:editingShop?good.removeChecked:good.checked}></span>
                                            </div>
                                            <div class="name-card clearfix">
                                                <a :href="'goods.html?id='+good.id" class="thumb js-goods-link"><img :src="good.img">
                                                    <!---->
                                                </a>
                                                <div class="detail"><a class="js-goods-link">
                                                    <h3 class="title js-ellipsis"><i>{{good.title}}</i></h3>
                                                </a>
                                                    <p class="sku ellipsis">
                                                        {{good.sku}}
                                                    </p>
                                                    <!-- 显示状态 -->
                                                    <div class="num" v-show="!shop.editing">
                                                        ×<span class="num-txt">{{good.number}}</span>
                                                        <!---->
                                                    </div>
                                                    <!-- 编辑状态 -->
                                                    <div class="num" v-show="shop.editing">
                                                        <!---->
                                                        <div class="quantity">
                                                            <button type="button" class="minus" :class="{disabled:good.number===1}"></button>
                                                            <input type="number" pattern="[0-9]*" class="txt" v-model="good.number">
                                                            <button type="button" class="plus "></button>
                                                            <div class="response-area response-area-minus" @click="reduce(good)"></div>
                                                            <div class="response-area response-area-plus" @click="add(good)"></div>
                                                        </div>
                                                    </div>
                                                    <div class="price c-orange">
                                                        ¥<span>{{good.price | setPrice}}</span></div>
                                                </div>
                                                <div class="error-box"></div>
                                            </div>
                                            <div class="delete-btn" @click="remove(shop,shopIndex,good,goodIndex)"><span>删除</span></div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="js-invalid-goods shop-list">
                        <p class="block invalid-list-title">
                            以下商品无法一起购买
                        </p>
                        <div class="block block-list-cart block-order border-top-0">
                            <ul class="block border-0 invalid-list js-invalid-list">
                                <li class="block-item block-item-cart error">
                                    <div index="0">
                                        <div class="check-container hide"><span class="check"></span></div>
                                        <div class="name-card clearfix">
                                            <a href="https://h5.youzan.com/v2/showcase/goods?alias=36co1k2m80lmu" class="thumb js-goods-link"><img
                                                    data-src="https://img.yzcdn.cn/upload_files/2017/06/29/FstNOp77JZHQjZIDFd5LlZYE3j_j.jpg!200x200.jpg"
                                                    class="js-lazy" src="https://img.yzcdn.cn/upload_files/2017/06/29/FstNOp77JZHQjZIDFd5LlZYE3j_j.jpg?imageView2/2/w/200/h/200/q/75/format/webp">
                                                <!---->
                                            </a>
                                            <div class="detail"><a href="https://h5.youzan.com/v2/showcase/goods?alias=36co1k2m80lmu" class="js-goods-link">
                                                <h3 class="title js-ellipsis"><i>国际安徒生奖大奖书系（文学作品系列第二辑 共8册） 国际安徒生奖获奖书系
                                                    是经过IBBY各国分会和丛书主编、著名儿童文学理论家方卫平教授层层筛选产生的经典佳作</i></h3>
                                            </a>
                                                <p class="sku ellipsis">
                                                    下周二发货
                                                </p>
                                                <div class="num">
                                                    ×<span class="num-txt">1</span>
                                                    <!---->
                                                </div>
                                                <!---->
                                            </div>
                                            <div class="error-box">商品已售罄</div>
                                        </div>
                                        <div class="delete-btn"><span>删除</span></div>
                                    </div>
                                </li>
                            </ul>
                            <div class="center clear-block">
                                <button class="btn clear-btn js-clear">清空失效商品</button>
                            </div>
                        </div>
                    </div>
                    <div style="padding:0;" class="js-bottom-opts bottom-fix">
                        <div class="go-shop-tip js-go-shop-tip c-orange font-size-12">
                            你需要分开结算每个店铺的商品哦~
                        </div>
                        <div class="bottom-cart clear-fix">
                            <div class="select-all"><span class="check " :class="{checked:editingShop?allRemveSelect:allSelected}"
                                                          @click="choseAll"></span> 全选
                            </div>
                            <!-- 显示状态 -->
                            <div class="total-price">
                                合计：¥<span class="js-total-price" v-show="!editingShop" :class="selectList" style="color: rgb(255, 102, 0);">{{total
                  |setPrice }}</span>
                                <p class="c-gray-dark">不含运费</p>
                            </div>
                            <button href="javascript:;" v-show="!editingShop" class="js-go-pay btn btn-orange-dark font-size-14"
                                    :disabled="!selectList.length">
                                结算 (3)
                            </button>
                            <!-- 编辑状态 h5.youzan.com/v2/trade/cart?f_platform=yzapp&source-->
                            <button href="javascript:;" @click="removeConfirm" :disabled="!removeList.length" class="j-delete-goods btn font-size-14 btn-red"
                                    v-show="editingShop">删除
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="hQbRZXkvL0" v-show="removePopup" style="height: 100%; position: fixed; top: 0px; left: 0px; right: 0px; background-color: rgba(0, 0, 0, 0.7); z-index: 1000; opacity: 1; transition: none 0.2s ease 0s;"></div>
        <div class="van-dialog" style="z-index: 2005;position: fixed;"v-show="removePopup">
            <div class="van-dialog__content">
                <div class="van-dialog__message">确定删除该商品么？</div>
            </div>
            <div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
                <button class="van-button van-button--default van-button--large van-dialog__cancel"style="background-color:#fff" >
                    <span @click="removePopup=false" class="van-button__text">取消</span></button>
                <button @click="removeConfirm" class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left"style="background-color:#fff">
                    <span class="van-button__text">确认</span></button></div>
        </div>
        <div class="footer" style="min-height: 86px;">
            <div class="copyright">
                <div class="ft-copyright " style="background-image: url(https://img.yzcdn.cn/upload_files/2016/11/15/147918630760182374.png);">
                    <a class="yz-logo" href="https://www.youzan.com/?from_source=support_logo">有赞提供技术支持</a> </div>
            </div>

        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    import url from '../assets/js/api.js'
import '../assets/css/cart.css'
import '../assets/css/cart_base.css'
import '../assets/css/cart_trade.css'
    import mixin from '../assets/js/mixin.js'
    import Volecity from 'velocity-animate'

    export default {
        name: "Cart",
        data(){
            return{
                lists: null,
                ischose: false,
                total: 0, //结算总价
                editingShop: null, //因为页面底部编辑状态不在遍历的列表里，所以定义个全局变量来判断是否处于编辑状态
                editingShopIndex: -1,
                removePopup: false, //点击删除 变为true 弹出删除框
                removeData: null,
                removeMsg:''
            }
        },
        created() {
            this.getlists()
        },
        computed: {
            allSelected: {
                get() {
                    if (this.lists && this.lists.length) {
                        return this.lists.every(shop => {
                            return shop.checked
                        })
                    }
                    return false
                },
                set(val) {
                    this.lists.forEach(shop => {
                        shop.checked = val;
                        shop.goodsList.forEach(good => {
                            good.checked = val
                        })
                    })
                }
            },
            allRemveSelect: {
                get() {
                    if (this.editingShop) {
                        return this.editingShop.removeChecked
                    }
                    return false
                },
                set(newVal) {
                    if (this.editingShop) {
                        this.editingShop.removeChecked = newVal;
                        this.editingShop.goodsList.forEach(good => {
                            good.removeChecked = newVal
                        })
                    }
                }
            },
            selectList() { //把总价计算出来 并返回出一个选择购买的列表
                if (this.lists && this.lists.length) {
                    let arr = [];
                    let total = 0;
                    this.lists.forEach(shop => {
                        shop.goodsList.forEach(good => {
                            if (good.checked) {
                                arr.push(good);
                                total += good.price * good.number
                            }
                        })
                    });
                    this.total = total;
                    return arr
                }
                return []
            },
            removeList() { //要删除的商品列表
                if (this.editingShop) {
                    let arr = [];
                    this.editingShop.goodsList.forEach(good => {
                        if (good.removeChecked) {
                            arr.push(good)
                        }
                    });
                    return arr
                }
                return []
            }
        },
        methods: {
            getlists() {
                axios.get(url.cartlist).then(res => {
                    let lists = res.data.cartList;
                    lists.forEach(shop => {
                        shop.checked = true;
                        shop.removeChecked = false;
                        shop.editing = false;
                        shop.editingMsg = '编辑';
                        shop.goodsList.forEach(good => {
                            good.checked = true;
                            good.removeChecked = false
                        })
                    });
                    this.lists = lists
                })
            },
            chosePick(shop, good) {
                let attr = this.editingShop ? 'removeChecked' : 'checked';
                good[attr] = !good[attr];
                shop[attr] = shop.goodsList.every(good => {
                    return good[attr]
                })
            },
            choseShop(shop) {
                let attr = this.editingShop ? 'removeChecked' : 'checked';
                shop[attr] = !shop[attr];
                shop.goodsList.forEach(good => {
                    good[attr] = shop[attr]
                })
            },
            choseAll() {
                let attr = this.editingShop ? 'allRemveSelect' : 'allSelected';
                this[attr] = !this[attr]
            },
            edit(shop, shopIndex) { //激发编辑状态
                shop.editing = !shop.editing;
                shop.editingMsg = shop.editing ? '完成' : '编辑';
                this.lists.forEach((item, i) => {
                    if (i !== shopIndex) {
                        item.editing = false;
                        item.editingMsg = shop.editing ? '' : "编辑"
                    }
                });
                this.editingShop = shop.editing ? shop : null;
                this.editingShopIndex = shop.editing ? shopIndex : -1
            },
            reduce(good) {
                if (good.number === 1) return;
                // axios.post(url.reduce, {
                //   id: good.id,
                //   number: 1
                // }).then(res => {
                //   good.number--
                // })
                Cart.reduce(good.id).then(res=>{
                    good.number--
                })
            },
            add(good) {
                // axios.post(url.add, {
                //   id: good.id,
                //   number: 1
                // }).then(res => {
                //   good.number++
                // })
                Cart.add(good.id).then(res=>{
                    good.number++
                })
            },
            remove(shop, shopIndex, good, goodIndex) {
                this.removePopup = true;
                this.removeData = {
                    shop,
                    shopIndex,
                    good,
                    goodIndex
                }
                this.removeMsg='确定要删除该商品吗？'

            },
            removeConfirm() {
                if(this.removeMsg==='确定要删除该商品吗？'){
                    let {shop,shopIndex, good, goodIndex} = this.removeData;
                    axios.post(url.remove, {
                        id: good.id//先将要删除商品的id发送给后台，在从本地删除
                    }).then(res => {
                        shop.goodsList.splice(goodIndex, 1);
                        if (!shop.goodsList.length) {
                            this.lists.splice(shopIndex,1);
                            this.removeShop()
                        }
                        this.removePopup = false
                    })
                }else{
                    let ids=[];
                    this.removeList.forEach(good=>{
                        ids.push(good.id)
                    });
                    axios.post(url.meremove,{ids}).then(res=>{
                        let arr=[];
                        this.editingShop.goodsList.forEach(good=>{
                            let index =this.removeList.findIndex(item=>{
                                return item.id===good.id//判断商品是否在删除列表里面
                            });
                            if(index===-1){//如果不在就赋值给一个空数组里,之后可直接将该数组赋值给删除列表
                                arr.push(good)
                            }
                        });
                        if(arr.length){
                            this.editingShop.goodsList=arr
                        }else{
                            this.lists.splice(this.editingShopIndex,1);
                            this.removeShop()
                        }
                        this.removePopup=false
                    })
                }
            },
            removeShop(){
                this.editingShop=null;  //退出编辑状态
                this.editingShopIndex=-1;
                this.lists.forEach(shop=>{//将其他店铺的状态重置 返回'编辑'
                    shop.editing=false;
                    shop.editingMsg='编辑'
                })
            },

            start(e,good){
                good.startX=e.changedTouches[0].clientX
            },
            end(e,shopIndex,good,goodIndex){
                let endX=e.changedTouches[0].clientX;
                let left='0';
                if(good.startX-endX>100){
                    left='-60px'
                }
                if(endX-good.startX>100){
                    left='0px'
                }
                Volecity(this.$refs[`goods-${shopIndex}-${goodIndex}`],{
                    left
                })
            }
        },
        mixins: [mixin]

    }
</script>

<style scoped lang="scss">

</style>