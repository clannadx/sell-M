webpackJsonp([1],{"+rhx":function(t,s){},"/VxO":function(t,s,e){"use strict";function i(t,s,e){var i=window.localStorage.__seller__;i?(i=JSON.parse(i),i[t]||(i[t]={})):(i={},i[t]={}),i[t][s]=e,window.localStorage.__seller__=o()(i)}function a(t,s,e){var i=window.localStorage.__seller__;return i&&(i=JSON.parse(i)[t])?i[s]||e:e}s.b=i,s.a=a;var n=e("mvHQ"),o=e.n(n)},"/cZ4":function(t,s,e){"use strict";var i=e("fJdx"),a=e("e9KK"),n=e("GQaK"),o=e("H96s");s.a={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},components:{split:i.a,ratingselect:a.a},created:function(){var t=this;this.$http.get("https://easy-mock.com/mock/59c9aed5e0dc663341ba41de/web/ratings").then(function(s){s=s.body,0===s.errno&&(t.ratings=s.data,t.$nextTick(function(){t.ratingScroll||(t.ratingScroll=new n.a(t.$refs.ratingContent,{click:!0}))}))})},methods:{addIterm:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.ratingScroll.refresh()})},toggle:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){t.ratingScroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate1:function(t){var s=new Date(t);return Object(o.a)(s,"yyyy-MM-dd hh:mm")}}}},0:function(t,s){},"1Iyw":function(t,s,e){"use strict";s.a={}},"32rd":function(t,s){},"5Bwn":function(t,s){},"8J2q":function(t,s,e){"use strict";function i(t){e("32rd")}var a=e("PkAO"),n=e("OSF8"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},AKNT:function(t,s,e){"use strict";function i(t){e("mqce")}var a=e("/cZ4"),n=e("qeaQ"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},B1bB:function(t,s,e){"use strict";var i=e("GQaK"),a=e("xSw9"),n=e("Jn7X"),o=e("8J2q");s.a={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},components:{Food:o.a,"shop-cart":a.a,"cart-control":n.a},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return this._followScroll(t),t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.$http.get("https://easy-mock.com/mock/59c9aed5e0dc663341ba41de/web/goods").then(function(s){s=s.body,0===s.errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})},methods:{selectMenu:function(t){console.log(t);var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),e=s[t];this.foodsScroll.scrollToElement(e,300)},_initScroll:function(){var t=this;this.menuScroll=new i.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new i.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){s.y<=0&&(t.scrollY=Math.abs(Math.round(s.y)))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},_followScroll:function(t){var s=this.$refs.menuList,e=s[t];this.menuScroll.scrollToElement(e,300,0,-100)},selectFood:function(t,s){console.log(3),s._constructed&&(this.selectedFood=t,console.log(this.selectedFood),this.$refs.food.show())}}}},FfI6:function(t,s){},Fg0f:function(t,s){},H96s:function(t,s,e){"use strict";function i(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var n=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:a(n))}return s}function a(t){return("00"+t).substr(t.length)}s.a=i},HBNi:function(t,s){},Jn7X:function(t,s,e){"use strict";function i(t){e("FfI6")}var a=e("MM04"),n=e("TouK"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},LOkV:function(t,s,e){"use strict";function i(){var t=window.location.search,s={},e=/[?&][^?&]+=[^?&]+/g,i=t.match(e);return i&&i.forEach(function(t){var e=t.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);s[i]=a}),s}s.a=i},M93x:function(t,s,e){"use strict";function i(t){e("rymI")}var a=e("xJD8"),n=e("irBq"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},MM04:function(t,s,e){"use strict";var i=e("7+uW");s.a={props:{food:{type:Object}},methods:{addCount:function(){this.food.count?this.food.count++:i.a.set(this.food,"count",1)},decCount:function(){this.food.count&&this.food.count--}}}},N0EE:function(t,s,e){"use strict";function i(t){e("iaPY")}var a=e("VCv5"),n=e("f/7W"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("M93x"),n=e("YaEn"),o=e("+rhx");e.n(o);i.a.config.productionTip=!1,new i.a({el:"#app",router:n.a,template:"<App/>",components:{App:a.a}})},OSF8:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"foodIn",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0==t.food.count,expression:"!food.count || food.count == 0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{add1:t.addIterm,change1:t.toggle}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:s.id,staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate1")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n              ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},a=[],n={render:i,staticRenderFns:a};s.a=n},PXOj:function(t,s,e){"use strict";function i(t){e("HBNi")}var a=e("B1bB"),n=e("hrFL"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},PkAO:function(t,s,e){"use strict";var i=e("GQaK"),a=e("Jn7X"),n=e("fJdx"),o=e("e9KK"),c=e("7+uW"),r=e("H96s");s.a={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scoll?t.scoll.refresh():t.scoll=new i.a(t.$refs.foodIn,{click:!0})})},hide:function(){this.showFlag=!this.showFlag},addFirst:function(t){t._constructed&&c.a.set(this.food,"count",1)},addIterm:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scoll.refresh()})},toggle:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick(function(){t.scoll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate1:function(t){var s=new Date(t);return Object(r.a)(s,"yyyy-MM-dd hh:mm")}},components:{cartcontrol:a.a,split:n.a,ratingselect:o.a}}},RYYw:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{heighlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart1",class:{heighlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{heighlight:t.totalPrice>0}},[t._v("¥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费¥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.clickOn(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n        "+t._s(t.payDesc)+"\n      ")])])]),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{key:s.id,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",{},[t._v("¥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cart-control",{attrs:{food:s}})],1)])}))])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},TouK:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease ",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decCount(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline1"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle1",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCount(s)}}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},VCv5:function(t,s,e){"use strict";var i=e("GQaK"),a=e("fJdx"),n=e("/VxO");s.a={props:{seller:{type:Object}},data:function(){var t=this;return{favorite:function(){return Object(n.a)(t.seller.id,"aaa",!1)}()}},watch:{seller:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],console.log(this.$refs.seller),this.$nextTick(function(){console.log(t.$refs.seller)})},mounted:function(){var t=this;console.log(this.$refs.seller),this.$nextTick(function(){t._initScroll(),t._initPics()})},computed:{favoriteTxt:function(){return this.favorite?"收藏":"已收藏"}},methods:{_initScroll:function(){this.scroll||(this.scroll=new i.a(this.$refs.seller,{click:!0}))},_initPics:function(){var t=this;if(console.log(this.$refs.picList.style.width),this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll||(t.picScroll=new i.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"}))})}},changeFavor:function(){this.favorite=!this.favorite,Object(n.b)(this.seller.id,"aaa",this.favorite)}},components:{split:a.a}}},Wis3:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"split"})},a=[],n={render:i,staticRenderFns:a};s.a=n},YaEn:function(t,s,e){"use strict";var i=e("7+uW"),a=e("/ocq"),n=e("8+8L"),o=e("PXOj"),c=e("N0EE"),r=e("AKNT");i.a.use(a.a),i.a.use(n.a),s.a=new a.a({routes:[{path:"/",name:"goods",component:o.a},{path:"/seller",name:"seller",component:c.a},{path:"/ratings",name:"ratings",component:r.a}]})},e9KK:function(t,s,e){"use strict";function i(t){e("Fg0f")}var a=e("esg4"),n=e("v8oU"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},esg4:function(t,s,e){"use strict";s.a={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},methods:{add:function(t,s){s._constructed&&this.$emit("add1",t)},change:function(t){t._constructed&&this.$emit("change1")}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}}},"f/7W":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("span",{staticClass:"text"},[t._v(t._s(t.seller.ratingCount))]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])]),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))])])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))])])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))])])])]),t._v(" "),e("div",{staticClass:"favorite"},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite},on:{click:t.changeFavor}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteTxt))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}))]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90",alt:""}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}))])],1)])},a=[],n={render:i,staticRenderFns:a};s.a=n},fJdx:function(t,s,e){"use strict";function i(t){e("vclx")}var a=e("1Iyw"),n=e("Wis3"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},"h/N8":function(t,s,e){"use strict";s.a={props:["seller"],created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]}}},hrFL:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:s.id,ref:"menuList",refInFor:!0,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon"},[t._v("1")]),t._v("\n            "+t._s(s.name)+"\n          ")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"food-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{key:s.id,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{key:s.id,staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating))])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("¥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("¥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"contr"},[e("cart-control",{attrs:{food:s}})],1)])])}))])}))])]),t._v(" "),e("shop-cart",{attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},hxP8:function(t,s,e){"use strict";function i(t){e("5Bwn")}var a=e("h/N8"),n=e("u4Av"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports},iaPY:function(t,s){},irBq:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/",exact:""}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},jUHR:function(t,s,e){"use strict";var i=e("GQaK"),a=e("Jn7X");s.a={data:function(){return{fold:!0}},props:{selectFoods:{type:Array,default:function(){return[{price:10,count:2}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"¥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){return"还差"+(this.minPrice-this.totalPrice)+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"no-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new i.a(t.$refs.listContent,{click:!0})}),s}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},clickOn:function(){this.totalPrice<this.minPrice||alert(this.totalPrice)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0}},components:{"cart-control":a.a}}},mqce:function(t,s){},qaKy:function(t,s){},qeaQ:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratings"},[e("div",{ref:"ratingContent",staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate))])]),t._v(" "),e("div",{staticClass:"overview-right"})]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{ratings:t.ratings,selectType:t.selectType,onlyContent:t.onlyContent},on:{add1:t.addIterm,change1:t.toggle}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:s.id,staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{key:s.id,staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v("\n              "+t._s(t._f("formatDate1")(s.rateTime))+"\n            ")])])])}))])],1)])},a=[],n={render:i,staticRenderFns:a};s.a=n},rymI:function(t,s){},u4Av:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()])]),t._v(" "),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{width:"100%",height:"100%",src:t.seller.avatar,alt:""}})])])},a=[],n={render:i,staticRenderFns:a};s.a=n},v8oU:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.add(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.add(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.add(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:function(s){t.change(s)}}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},a=[],n={render:i,staticRenderFns:a};s.a=n},vclx:function(t,s){},xJD8:function(t,s,e){"use strict";var i=e("woOf"),a=e.n(i),n=e("hxP8"),o=e("LOkV");s.a={name:"app",data:function(){return{seller:{id:function(){return Object(o.a)().id}()}}},components:{"v-header":n.a},created:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/59c9aed5e0dc663341ba41de/web/seller?id="+this.seller.id).then(function(s){s=s.body,0===s.errno&&(t.seller=a()({},t.seller,s.data),console.log(t.seller.id))})}}},xSw9:function(t,s,e){"use strict";function i(t){e("qaKy")}var a=e("jUHR"),n=e("RYYw"),o=e("VU/8"),c=i,r=o(a.a,n.a,!1,c,null,null);s.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.7f0a5cbd1f855dd68039.js.map