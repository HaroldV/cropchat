webpackJsonp([1],{100:function(t,a,e){"use strict";function s(t){e(101)}var i=e(48),l=e(102),n=e(21),c=s,r=n(i.a,l.a,!1,c,"data-v-30d23de2",null);a.a=r.exports},101:function(t,a){},102:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"}),t._v(" "),e("div",{staticClass:"mdl-cell mdl-cell--6-col mdl-cell--4-col-phone"},t._l(this.$root.cat,function(a){return e("div",{staticClass:"image-card",on:{click:function(e){t.displayDetails(a[".key"])}}},[e("div",{staticClass:"image-card__picture"},[e("img",{attrs:{src:a.url}})]),t._v(" "),e("div",{staticClass:"image-card__comment mdl-card__actions"},[e("span",[t._v(t._s(a.comment)+" ")])])])}))]),t._v(" "),e("router-link",{staticClass:"add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored",attrs:{to:"/post"}},[e("i",{staticClass:"material-icons"},[t._v("add")])])],1)},i=[],l={render:s,staticRenderFns:i};a.a=l},103:function(t,a,e){"use strict";function s(t){e(104)}var i=e(49),l=e(107),n=e(21),c=s,r=n(i.a,l.a,!1,c,"data-v-2f7f422e",null);a.a=r.exports},104:function(t,a){},107:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--8-col"},[e("div",{staticClass:"picture"},[e("img",{attrs:{src:t.cat.url,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("span",[t._v(t._s(t.cat.info))])])]),t._v(" "),e("div",{staticClass:"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"},[e("div",{staticClass:"comment"},[e("span",[t._v(t._s(t.cat.comment))])]),t._v(" "),e("div",{staticClass:"actions"},[e("router-link",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",attrs:{to:"/post"}},[t._v("\n                ANSWER\n            ")])],1)])])},i=[],l={render:s,staticRenderFns:i};a.a=l},108:function(t,a,e){"use strict";function s(t){e(109)}var i=e(50),l=e(114),n=e(21),c=s,r=n(i.a,l.a,!1,c,"data-v-2b979a60",null);a.a=r.exports},109:function(t,a){},114:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",{staticClass:"mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--8-col"},[e("div",{staticClass:"card-image__picture"},[e("img",{attrs:{src:this.catUrl,alt:""}})])])]),t._v(" "),e("div",{staticClass:"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"},[e("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"mdl-textfield__input",attrs:{type:"text",id:"username"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),t._v(" "),e("label",{staticClass:"mdl-textfield__label",attrs:{for:"username"}},[t._v("Describeme")])]),t._v(" "),e("div",{staticClass:"actions"},[e("a",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",on:{click:function(a){return a.preventDefault(),t.postCat(a)}}},[t._v("\n        POST A CAT\n      ")])])])])},i=[],l={render:s,staticRenderFns:i};a.a=l},116:function(t,a,e){"use strict";var s=e(117),i=e.n(s),l={apiKey:"AIzaSyC-gTtZ3WKL-VsvVfvTLu14M07U3HvTqGE",authDomain:"cropchat-d6c27.firebaseapp.com",databaseURL:"https://cropchat-d6c27.firebaseio.com",projectId:"cropchat-d6c27",storageBucket:"cropchat-d6c27.appspot.com",messagingSenderId:"571689897069"};i.a.initializeApp(l),a.a={database:i.a.database()}},201:function(t,a){},47:function(t,a,e){"use strict";e(96),a.a={name:"app"}},48:function(t,a,e){"use strict";a.a={data:function(){return{}},methods:{displayDetails:function(t){this.$router.push({name:"detail",params:{id:t}})}}}},49:function(t,a,e){"use strict";var s=e(105);e.n(s);a.a={data:function(){return{cat:null}},mounted:function(){var t=this;this.cat=Object(s.find)(this.$root.cat,function(a){return a[".key"]===t.$route.params.id})}}},50:function(t,a,e){"use strict";var s=e(110),i=e.n(s);a.a={data:function(){return{catUrl:null,title:""}},mounted:function(){var t=this;this.$http.get("https://thecatapi.com/api/images/get?format=xml&result_per=1").then(function(a){t.catUrl=i()(a.body).root.children[0].children[0].children[0].children[0].content})},methods:{postCat:function(){this.$root.$firebaseRefs.cat.push({url:this.catUrl,comment:this.title,info:"Posted by HaroldV on Tuesday",created_at:-1*(new Date).getTime()}).then(this.$router.push("/"))}}}},91:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(45),i=e(93),l=e(98),n=e(115),c=e.n(n),r=e(116),o=e(200);s.a.use(c.a),s.a.use(o.a),s.a.config.productionTip=!1,new s.a({el:"#app",firebase:{cat:r.a.database.ref("cat").orderByChild("created_at")},router:l.a,template:"<App/>",components:{App:i.a}})},93:function(t,a,e){"use strict";function s(t){e(94)}var i=e(47),l=e(97),n=e(21),c=s,r=n(i.a,l.a,!1,c,null,null);a.a=r.exports},94:function(t,a){},97:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},[t._m(0),t._v(" "),e("div",{staticClass:"mdl-layout__drawer"},[e("span",{staticClass:"mdl-layout-title"},[t._v("CropChat")]),t._v(" "),e("nav",{staticClass:"mdl-navigation"},[e("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/"},nativeOn:{click:function(a){return t.hideMenu(a)}}},[t._v("Home")]),t._v(" "),e("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/post"},nativeOn:{click:function(a){return t.hideMenu(a)}}},[t._v("Post a picture")])],1)]),t._v(" "),e("main",{staticClass:"mdl-layout__content"},[e("div",{staticClass:"page-content"},[e("router-view")],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"mdl-layout__header"},[e("div",{staticClass:"mdl-layout__header-row"},[e("span",{staticClass:"mdl-layout-title"},[t._v("CropChat")])])])}],l={render:s,staticRenderFns:i};a.a=l},98:function(t,a,e){"use strict";var s=e(45),i=e(99),l=e(100),n=e(103),c=e(108);s.a.use(i.a),a.a=new i.a({routes:[{path:"/",name:"home",component:l.a},{path:"/detail/:id",name:"detail",component:n.a},{path:"/post",name:"post",component:c.a}]})}},[91]);
//# sourceMappingURL=app.8b0aa9f569cb7eee6967.js.map