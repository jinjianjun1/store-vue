(function(e){function t(t){for(var a,s,c=t[0],o=t[1],u=t[2],l=0,d=[];l<c.length;l++)s=c[l],i[s]&&d.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i={app:0},r=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-1a20129e":"a35f44fe","chunk-2d0c9224":"305548b5","chunk-3ebee9c2":"eae4e6ff","chunk-65c45cb9":"39c0aefa","chunk-49f3e8b4":"9d7ddf6c","chunk-5930d9f3":"60bb589a","chunk-61da39c6":"b03ce960","chunk-d18b97ce":"247b625b","chunk-d6679d46":"3c51b59d"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-1a20129e":1,"chunk-3ebee9c2":1,"chunk-65c45cb9":1,"chunk-5930d9f3":1,"chunk-61da39c6":1,"chunk-d18b97ce":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1a20129e":"bcae660c","chunk-2d0c9224":"31d6cfe0","chunk-3ebee9c2":"cab6238c","chunk-65c45cb9":"df70069b","chunk-49f3e8b4":"31d6cfe0","chunk-5930d9f3":"ae3149c3","chunk-61da39c6":"04e1fee4","chunk-d18b97ce":"7d3e15ea","chunk-d6679d46":"31d6cfe0"}[e]+".css",i=o.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.request=a,delete s[e],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){s[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}i[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/store-vue/dist/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0476":function(e,t,n){},"3d93":function(e,t,n){"use strict";n("c5f6");var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.lists,function(e){return n("div",{key:e.id,staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])}),0),n("div",{staticClass:"swiper-pagination"})])},s=[],i=(n("cadf"),n("551c"),n("f751"),n("097d"),n("41d6")),r=(n("dfa4"),{name:"swiper",props:{lists:{type:Array,required:!0},name:{}},created:function(){console.log(this.lists)},mounted:function(){new i["a"](".swiper-container",{pagination:{el:".swiper-pagination"},loop:!0,autoplay:{delay:3e3}})}}),c=r,o=(n("6eb2"),n("2877")),u=Object(o["a"])(c,a,s,!1,null,"49cd7d03",null),l=u.exports,d={filters:{setPrice:function(e){return e=Number(e),e.toFixed(2)}},components:{swiper:l}};t["a"]=d},4108:function(e,t,n){"use strict";var a=n("0476"),s=n.n(a);s.a},4674:function(e,t,n){"use strict";var a=n("d225"),s=n("b0b4"),i=n("795b"),r=n.n(i),c=n("bc3a"),o=n.n(c);function u(e,t){return new r.a(function(n,a){o.a.post(e,t).then(function(e){n(e)}).catch(function(e){a(res)})})}var l=u;n("cadf"),n("551c"),n("f751"),n("097d");function d(e,t){return new r.a(function(n,a){o.a.get(e,{params:{data:t}}).then(function(e){n(e)}).catch(function(e){a(res)})})}var f=d,h=n("a474"),m=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,null,[{key:"list",value:function(){return f(h["a"].addressList)}},{key:"add",value:function(e){return l(h["a"].addressAdd,e)}},{key:"remove",value:function(e){return l(h["a"].addressRemove,e)}},{key:"update",value:function(e){return l(h["a"].addressUpdate,e)}},{key:"setDefault",value:function(e){return l(h["a"].addressSetDefault,e)}}]),e}();t["a"]=m},"4dcb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("foot")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.hrefmsg,function(t,a){return n("li",{key:a,class:{active:e.currentItem===a},on:{click:function(t){return e.changeView(a)}}},[n("router-link",{attrs:{to:{name:t.name}}},[n("i",{class:t.icon}),n("div",[e._v(e._s(t.subname))])])],1)}),0)])},c=[],o=(n("4328"),[{icon:"icon-home",name:"home",subname:"首页"},{icon:"icon-category",name:"category",subname:"分类"},{icon:"icon-cart",name:"cart",subname:"购物车"},{icon:"icon-user",name:"member",subname:"我"}]),u={data:function(){return{hrefmsg:o,currentItem:0}},methods:{doSomething:function(e){this.currentItem=e},changeView:function(e){this.currentItem=e}}},l=u,d=(n("4108"),n("2877")),f=Object(d["a"])(l,r,c,!1,null,"5af1585e",null),h=f.exports,m={name:"App",components:{foot:h}},p=m,g=(n("5c0b"),Object(d["a"])(p,s,i,!1,null,null,null)),v=g.exports,b=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{},[n("div",{staticClass:"container ",staticStyle:{"min-height":"667px"}},[n("div",{staticClass:"content"},[e.bannerlists?n("swiper",{attrs:{lists:e.bannerlists,name:"swip.vue"}}):e._e(),n("div",{staticClass:"section-title"},[e._v("优店推荐")]),e._m(0),e._m(1),e._m(2),n("div",{staticClass:"hot-goods js-waterfull-wrap",staticStyle:{"min-height":"300px"},attrs:{"data-src":""}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getlists,expression:"getlists"}],staticClass:"js-list js-lazy",attrs:{"data-src":"","infinite-scroll-disabled":"loading","infinite-scroll-distance":"20"}},e._l(e.lists,function(t,a){return n("li",{key:a},[n("div",{staticClass:"goods-item"},[n("router-link",{attrs:{to:{name:"goods",params:{id:t.id}}}},[n("div",{staticClass:"thumb img-box"},[n("img",{staticClass:"fadeIn",attrs:{src:t.img}})]),n("div",{staticClass:"detail"},[n("div",{staticClass:"title"},[e._v(e._s(t.name))]),n("div",{staticClass:"price"},[e._v(e._s(t.price))])])])],1)])}),0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-more"},[n("span")])]),n("div",{staticClass:"js-show-find category-guid"})],1)])])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-content shops"},[n("div",{staticClass:"shop-wrap"},[n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png"}})])]),n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/feature/1e22e3vtu"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png"}})])]),n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/feature/8oups7zk"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png"}})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-content daily"},[n("ul")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-block line-block-gray"},[n("div",{staticClass:"lineblock-title"},[n("span",{staticClass:"lineblock-font"},[e._v("最热商品推荐")])])])}],w=(n("a2f0"),n("4dcb"),n("bc3a")),_=n.n(w),C=n("a474"),j=n("76a0"),x=n("3d93");a["default"].use(j["InfiniteScroll"]);var S={name:"home",data:function(){return{lists:null,pageNum:1,pageSize:6,loading:!1,allloaded:!1,bannerlists:null}},created:function(){this.getlists(),this.getbanner()},mounted:function(){},methods:{getlists:function(){var e=this;!0!==this.allloaded&&(this.loading=!0,console.log(this.loading),_.a.get(C["a"].hotLists,{params:{pageNum:this.pageNum,pageSize:this.pageSize}}).then(function(t){var n=t.data.lists;n.length<e.pageSize&&(e.allloaded=!0),e.lists?e.lists=e.lists.concat(n):e.lists=n,e.loading=!1,console.log(e.loading,"11111"),e.pageNum++}))},getbanner:function(){var e=this;_.a.get(C["a"].banner).then(function(t){e.bannerlists=t.data.lists}).catch(function(e){console.log(e)})}},mixins:[x["a"]]},E=S,O=Object(d["a"])(E,k,y,!1,null,null,null),P=O.exports;a["default"].use(b["a"]);var N=new b["a"]({base:"/store-vue/",mode:"hash",routes:[{path:"/",name:"home",component:P},{path:"/home",name:"home",component:P},{path:"/category",name:"category",component:function(){return n.e("chunk-d18b97ce").then(n.bind(null,"4886"))}},{path:"/cart",name:"cart",component:function(){return Promise.all([n.e("chunk-2d0c9224"),n.e("chunk-65c45cb9")]).then(n.bind(null,"b789"))}},{path:"/member",name:"member",component:function(){return n.e("chunk-5930d9f3").then(n.bind(null,"80d2"))}},{path:"/search",name:"search",component:function(){return Promise.all([n.e("chunk-2d0c9224"),n.e("chunk-3ebee9c2")]).then(n.bind(null,"2d3b"))}},{path:"/goods/:id",name:"goods",component:function(){return n.e("chunk-61da39c6").then(n.bind(null,"8629"))}},{path:"/address",name:"address",component:function(){return n.e("chunk-1a20129e").then(n.bind(null,"a821"))},children:[{path:"",redirect:"all"},{path:"all",component:function(){return n.e("chunk-d6679d46").then(n.bind(null,"2ec3"))}},{path:"form",name:"form",component:function(){return n.e("chunk-49f3e8b4").then(n.bind(null,"2360"))}}]}]}),I=n("2f62"),z=n("4674");a["default"].use(I["a"]);var L=new I["a"].Store({state:{lists:null},mutations:{init:function(e,t){e.lists=t}},actions:{getLists:function(e){var t=e.commit;z["a"].list().then(function(e){t("init",e.data.lists)})}}});a["default"].config.productionTip=!1,new a["default"]({router:N,store:L,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(e,t,n){},"6eb2":function(e,t,n){"use strict";var a=n("b112"),s=n.n(a);s.a},a2f0:function(e,t,n){},a474:function(e,t,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",toplist:"/category/topList",ranklist:"/category/rank",sublist:"/category/subList",searchlist:"/search/list",details:"/goods/details",deal:"/goods/deal",add:"/cart/add",cartlist:"/cart/list",reduce:"/cart/reduce",remove:"/cart/remove",meremove:"/cart/mrremove",addressList:"/address/list",addressAdd:"/address/add",addressUpdate:"/address/update",addressRemove:"/address/remove",addressSetDefault:"/address/setDefault"},s="https://easy-mock.com/mock/5c34c54490862b0b0cf503d9/goodlists";for(var i in a)a.hasOwnProperty(i)&&(a[i]=s+a[i]);t["a"]=a},b112:function(e,t,n){}});
//# sourceMappingURL=app.cae34477.js.map