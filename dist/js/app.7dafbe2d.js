(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],i[s]&&d.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i={app:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-1a20129e":"a35f44fe","chunk-2d015cb2":"ff24abd8","chunk-2d0c9224":"305548b5","chunk-65c45cb9":"39c0aefa","chunk-e7e3e468":"7e03636b","chunk-49f3e8b4":"9d7ddf6c","chunk-5930d9f3":"60bb589a","chunk-9b973cde":"25683e6e","chunk-d6679d46":"3c51b59d"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-1a20129e":1,"chunk-2d015cb2":1,"chunk-65c45cb9":1,"chunk-e7e3e468":1,"chunk-5930d9f3":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1a20129e":"bcae660c","chunk-2d015cb2":"7d3e15ea","chunk-2d0c9224":"31d6cfe0","chunk-65c45cb9":"df70069b","chunk-e7e3e468":"3df1634b","chunk-49f3e8b4":"31d6cfe0","chunk-5930d9f3":"ae3149c3","chunk-9b973cde":"31d6cfe0","chunk-d6679d46":"31d6cfe0"}[t]+".css",i=o.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,delete s[t],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){s[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/store-vue/dist/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3d93":function(t,e,n){"use strict";n("c5f6");var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return n("div",{key:t.id,staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),n("div",{staticClass:"swiper-pagination"})])},s=[],i=(n("cadf"),n("551c"),n("f751"),n("097d"),n("41d6")),r=(n("dfa4"),{name:"swiper",props:{lists:{type:Array,required:!0},name:{}},created:function(){console.log(this.lists)},mounted:function(){new i["a"](".swiper-container",{pagination:{el:".swiper-pagination"},loop:!0,autoplay:{delay:3e3}})}}),c=r,o=(n("6eb2"),n("2877")),l=Object(o["a"])(c,a,s,!1,null,"49cd7d03",null),u=l.exports,d={filters:{setPrice:function(t){return t=Number(t),t.toFixed(2)}},components:{swiper:u}};e["a"]=d},4674:function(t,e,n){"use strict";var a=n("d225"),s=n("b0b4"),i=n("795b"),r=n.n(i),c=n("bc3a"),o=n.n(c);function l(t,e){return new r.a(function(n,a){o.a.post(t,e).then(function(t){n(t)}).catch(function(t){a(res)})})}var u=l;n("cadf"),n("551c"),n("f751"),n("097d");function d(t,e){return new r.a(function(n,a){o.a.get(t,{params:{data:e}}).then(function(t){n(t)}).catch(function(t){a(res)})})}var f=d,h=n("a474"),m=function(){function t(){Object(a["a"])(this,t)}return Object(s["a"])(t,null,[{key:"list",value:function(){return f(h["a"].addressList)}},{key:"add",value:function(t){return u(h["a"].addressAdd,t)}},{key:"remove",value:function(t){return u(h["a"].addressRemove,t)}},{key:"update",value:function(t){return u(h["a"].addressUpdate,t)}},{key:"setDefault",value:function(t){return u(h["a"].addressSetDefault,t)}}]),t}();e["a"]=m},"4dcb":function(t,e,n){},5013:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view"),n("foot")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",[n("li",{class:{active:0===t.currentItem},on:{click:function(e){return t.doSomething(0)}}},[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{class:"icon-home"}),n("div",[t._v("1")])])],1),n("li",{class:{active:1===t.currentItem},on:{click:function(e){return t.doSomething(1)}}},[n("router-link",{attrs:{to:{name:"category"}}},[n("i",{class:"icon-category"}),n("div",[t._v("2")])])],1),n("li",{class:{active:2===t.currentItem},on:{click:function(e){return t.doSomething(2)}}},[n("router-link",{attrs:{to:{name:"cart"}}},[n("i",{class:"icon-cart"}),n("div",[t._v("3")])])],1),n("li",{class:{active:3===t.currentItem},on:{click:function(e){return t.doSomething(3)}}},[n("router-link",{attrs:{to:{name:"member"}}},[n("i",{class:"icon-user"}),n("div",[t._v("4")])])],1)])])},c=[],o=(n("386d"),n("4328")),l=n.n(o),u=l.a.parse(location.search.substr(1)),d=(u.index,[{icon:"icon-home",name:"home"},{icon:"icon-category",name:"category"},{icon:"icon-cart",name:"cart"},{icon:"icon-user",name:"member"}]),f={data:function(){return{hrefmsg:d,currentItem:0}},methods:{doSomething:function(t){this.currentItem=t}}},h=f,m=(n("7aff"),n("2877")),p=Object(m["a"])(h,r,c,!1,null,"43caed10",null),v=p.exports,g={name:"App",components:{foot:v}},b=g,k=(n("5c0b"),Object(m["a"])(b,s,i,!1,null,null,null)),y=k.exports,w=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{},[n("div",{staticClass:"container ",staticStyle:{"min-height":"667px"}},[n("div",{staticClass:"content"},[t.bannerlists?n("swiper",{attrs:{lists:t.bannerlists,name:"swip.vue"}}):t._e(),n("div",{staticClass:"section-title"},[t._v("优店推荐")]),t._m(0),t._m(1),t._m(2),n("div",{staticClass:"hot-goods js-waterfull-wrap",staticStyle:{"min-height":"300px"},attrs:{"data-src":""}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getlists,expression:"getlists"}],staticClass:"js-list js-lazy",attrs:{"data-src":"","infinite-scroll-disabled":"loading","infinite-scroll-distance":"20"}},t._l(t.lists,function(e,a){return n("li",{key:a},[n("div",{staticClass:"goods-item"},[n("router-link",{attrs:{to:"goods"}},[n("div",{staticClass:"thumb img-box"},[n("img",{staticClass:"fadeIn",attrs:{src:e.img}})]),n("div",{staticClass:"detail"},[n("div",{staticClass:"title"},[t._v(t._s(e.name))]),n("div",{staticClass:"price"},[t._v(t._s(e.price))])])])],1)])}),0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-more"},[n("span")])]),n("div",{staticClass:"js-show-find category-guid"})],1)])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-content shops"},[n("div",{staticClass:"shop-wrap"},[n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png"}})])]),n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/feature/1e22e3vtu"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png"}})])]),n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/feature/8oups7zk"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png"}})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-content daily"},[n("ul")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line-block line-block-gray"},[n("div",{staticClass:"lineblock-title"},[n("span",{staticClass:"lineblock-font"},[t._v("最热商品推荐")])])])}],S=(n("a2f0"),n("4dcb"),n("bc3a")),j=n.n(S),x=n("a474"),E=n("76a0"),O=n("3d93");a["default"].use(E["InfiniteScroll"]);var P={name:"home",data:function(){return{lists:null,pageNum:1,pageSize:6,loading:!1,allloaded:!1,bannerlists:null}},created:function(){this.getlists(),this.getbanner()},mounted:function(){console.log(this.bannerlists)},methods:{getlists:function(){var t=this;!0!==this.allloaded&&(this.loading=!0,j.a.get(x["a"].hotLists,{params:{pageNum:this.pageNum,pageSize:this.pageSize}}).then(function(e){var n=e.data.lists;n.length<t.pageSize&&(t.allloaded=!0,console.log(t.allloaded)),t.lists?t.lists=t.lists.concat(n):t.lists=n,t.loading=!1,console.log(t.loading),t.pageNum++}))},getbanner:function(){var t=this;j.a.get(x["a"].banner).then(function(e){t.bannerlists=e.data.lists}).catch(function(t){console.log(t)})}},mixins:[O["a"]]},I=P,N=Object(m["a"])(I,_,C,!1,null,null,null),z=N.exports;a["default"].use(w["a"]);var L=new w["a"]({base:"/store-vue/",routes:[{path:"/",name:"home",component:z},{path:"/category",name:"category",component:function(){return n.e("chunk-2d015cb2").then(n.bind(null,"4886"))}},{path:"/cart",name:"cart",component:function(){return Promise.all([n.e("chunk-2d0c9224"),n.e("chunk-65c45cb9")]).then(n.bind(null,"b789"))}},{path:"/member",name:"member",component:function(){return n.e("chunk-5930d9f3").then(n.bind(null,"80d2"))}},{path:"search",name:"search",component:function(){return Promise.all([n.e("chunk-2d0c9224"),n.e("chunk-e7e3e468")]).then(n.bind(null,"2d3b"))}},{path:"goods",name:"goods",component:function(){return n.e("chunk-9b973cde").then(n.bind(null,"8629"))}},{path:"/address",name:"address",component:function(){return n.e("chunk-1a20129e").then(n.bind(null,"a821"))},children:[{path:"",redirect:"all"},{path:"all",component:function(){return n.e("chunk-d6679d46").then(n.bind(null,"2ec3"))}},{path:"form",name:"form",component:function(){return n.e("chunk-49f3e8b4").then(n.bind(null,"2360"))}}]}]}),A=n("2f62"),q=n("4674");a["default"].use(A["a"]);var T=new A["a"].Store({state:{lists:null},mutations:{init:function(t,e){t.lists=e}},actions:{getLists:function(t){var e=t.commit;q["a"].list().then(function(t){e("init",t.data.lists)})}}});a["default"].config.productionTip=!1,new a["default"]({router:L,store:T,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(t,e,n){},"6eb2":function(t,e,n){"use strict";var a=n("b112"),s=n.n(a);s.a},"7aff":function(t,e,n){"use strict";var a=n("5013"),s=n.n(a);s.a},a2f0:function(t,e,n){},a474:function(t,e,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",toplist:"/category/topList",ranklist:"/category/rank",sublist:"/category/subList",searchlist:"/search/list",details:"/goods/details",deal:"/goods/deal",add:"/cart/add",cartlist:"/cart/list",reduce:"/cart/reduce",remove:"/cart/remove",meremove:"/cart/mrremove",addressList:"/address/list",addressAdd:"/address/add",addressUpdate:"/address/update",addressRemove:"/address/remove",addressSetDefault:"/address/setDefault"},s="https://easy-mock.com/mock/5c34c54490862b0b0cf503d9/goodlists";for(var i in a)a.hasOwnProperty(i)&&(a[i]=s+a[i]);e["a"]=a},b112:function(t,e,n){}});
//# sourceMappingURL=app.7dafbe2d.js.map