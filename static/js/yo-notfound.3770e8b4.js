(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["yo-notfound"],{"3a1d":function(t,e,r){"use strict";r("7790")},7790:function(t,e,r){},"97e1":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"yo-404-com"},[r("div",{staticClass:"circle"}),r("div",{staticClass:"picture",class:{error:"error"==t.pageType}},["error"==t.pageType?r("span",[t._v(t._s(t.$lang(t.errorCode)))]):t._e()]),r("div",{staticClass:"title"},[t._v(t._s(t.$lang(t.errorText)))]),r("a",{staticClass:"sub-title",attrs:{href:"/"}},[t._v(t._s(t.$lang("回到首页")))])])},a=[],o={name:"yo-404-com",data:function(){return{pageType:"error"}},components:{},props:{type:{type:String,default:"error"},errorCode:{type:String,default:"404"},errorText:{type:String,default:"..页面没有找到.."}},mounted:function(){var t=this.$route,e=t.query,r=void 0===e?{}:e,s=r||{},a=s.type,o=void 0===a?"":a;this.pageType=o||this.type},methods:{}},n=o,i=(r("3a1d"),r("2877")),c=Object(i["a"])(n,s,a,!1,null,null,null);e["default"]=c.exports}}]);