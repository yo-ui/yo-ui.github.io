(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["yo-component-collapse"],{2087:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"yo-collapse-page"},[t("yo-anchor",{attrs:{text:"Collapse "+e.$lang("折叠面板组件"),size:"30"}}),t("yo-anchor",{attrs:{text:e.$lang("组件注册"),size:24}}),t("yo-code",{attrs:{type:"javascript",src:"/components/demos/layout/collapse/use.js"}}),t("yo-anchor",{attrs:{text:e.$lang("代码示例"),size:24}}),t("yo-example",{attrs:{demo:"layout/collapse/normal"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("基本用法")}},[t("span",{domProps:{innerHTML:e._s(e.$lang("可以同时展开多个面板，这个例子默认展开了第一个。<code>borderRadius</code>属性，设置圆角显示单位为<code>px</code>"))}})])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/accordion"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("手风琴")}},[e._v(" "+e._s(e.$lang("手风琴，每次只打开一个面板项。"))+" ")])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/size"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("面板尺寸")}},[t("span",{domProps:{innerHTML:e._s(e.$lang("网格布局显示 ，可通过设置size为<code>xxxl</code>,<code>xxl</code>,<code>xl</code>,<code>l</code>,<code>m</code>,<code>s</code><code>xs</code>控制尺寸"))}})])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/group"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("面板嵌套")}},[e._v(" "+e._s(e.$lang("嵌套折叠面板。"))+" ")])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/simple"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("简洁模式 ")}},[t("span",{domProps:{innerHTML:e._s(e.$lang("设置属性 <code>simple</code> 可以显示为不带边框和背景色的简洁模式。"))}})])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/diy"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("自定义图标")}},[t("span",{domProps:{innerHTML:e._s(e.$lang("自定义各个面板的背景色、圆角、边距和图标。"))}})])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/hide"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("隐藏箭头")}},[t("span",{domProps:{innerHTML:e._s(e.$lang("你可以通过  <code>iconHide</code>隐藏 y-collapse-item 组件的箭头图标。"))}})])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/extra"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("额外节点")}},[t("span",{domProps:{innerHTML:e._s(e.$lang("可以同时展开多个面板，这个例子默认展开了第一个。"))}})])]},proxy:!0}])}),t("yo-example",{attrs:{demo:"layout/collapse/action"},scopedSlots:e._u([{key:"desc",fn:function(){return[t("yo-desc",{attrs:{title:e.$lang("面板操作区")}},[t("span",{domProps:{innerHTML:e._s(e.$lang("面板操作组，位置在面板内容底部"))}})])]},proxy:!0}])}),t("yo-anchor",{attrs:{text:"Collapse "+e.$lang("属性"),size:24}}),t("p",{domProps:{innerHTML:e._s(e.$lang("属性说明"))}}),t("table",{staticClass:"table"},[t("tr",e._l(e.propsTableKeys,(function(a){return t("th",{key:a.code},[e._v(" "+e._s(e.$lang(a.name))+" ")])})),0),e._l(e.propsTableData,(function(a){return t("tr",{key:a.param},[t("td",[e._v(e._s(a.param))]),t("td",{domProps:{innerHTML:e._s(a.desc)}}),t("td",[e._v(e._s(a.type))]),t("td",[e._v(e._s(a.default||"-"))]),t("td",[e._v(e._s(a.version||"-"))])])}))],2),t("yo-anchor",{attrs:{text:"Collapse "+e.$lang("事件"),size:24}}),t("table",{staticClass:"table"},[t("tr",e._l(e.eventTableKeys,(function(a){return t("th",{key:a.code},[e._v(" "+e._s(e.$lang(a.name))+" ")])})),0),e._l(e.eventTableData,(function(a){return t("tr",{key:a.param},[t("td",[e._v(e._s(a.param))]),t("td",{domProps:{innerHTML:e._s(a.desc)}}),t("td",[e._v(e._s(a.callback||"-"))]),t("td",[e._v(e._s(a.version||"-"))])])}))],2),t("yo-anchor",{attrs:{text:"Collapse "+e.$lang("插槽"),size:24}}),t("table",{staticClass:"table"},[t("tr",e._l(e.slotTableKeys,(function(a){return t("th",{key:a.code},[e._v(" "+e._s(e.$lang(a.name))+" ")])})),0),e._l(e.slotTableData,(function(a){return t("tr",{key:a.param},[t("td",[e._v(e._s(a.param))]),t("td",{domProps:{innerHTML:e._s(a.desc)}}),t("td",[e._v(e._s(a.version||"-"))])])}))],2),t("yo-anchor",{attrs:{text:"CollapseItem "+e.$lang("属性"),size:24}}),t("p",{domProps:{innerHTML:e._s(e.$lang("属性说明"))}}),t("table",{staticClass:"table"},[t("tr",e._l(e.propsTableKeys,(function(a){return t("th",{key:a.code},[e._v(" "+e._s(e.$lang(a.name))+" ")])})),0),e._l(e.itemPropsTableData,(function(a){return t("tr",{key:a.param},[t("td",[e._v(e._s(a.param))]),t("td",{domProps:{innerHTML:e._s(a.desc)}}),t("td",[e._v(e._s(a.type))]),t("td",[e._v(e._s(a.default||"-"))]),t("td",[e._v(e._s(a.version||"-"))])])}))],2),t("yo-anchor",{attrs:{text:"CollapseItem "+e.$lang("插槽"),size:24}}),t("table",{staticClass:"table"},[t("tr",e._l(e.slotTableKeys,(function(a){return t("th",{key:a.code},[e._v(" "+e._s(e.$lang(a.name))+" ")])})),0),e._l(e.itemSlotTableData,(function(a){return t("tr",{key:a.param},[t("td",[e._v(e._s(a.param))]),t("td",{domProps:{innerHTML:e._s(a.desc)}}),t("td",[e._v(e._s(a.version||"-"))])])}))],2)],1)},s=[],n={data:function(){return{propsTableData:[{param:"value(v-model)",desc:"当前激活的面板的 name，可以使用 v-model 双向绑定",type:"String|Array|Number",default:"",version:""},{param:"accordion",desc:"是否开启手风琴模式，开启后每次至多展开一个面板",type:"Boolean",default:"false",version:""},{param:"simple",desc:"是否开启简洁模式",type:"Boolean",default:"false",version:""},{param:"borderRadius",desc:"边框圆角",type:"Number|String",default:0,version:""},{param:"border",desc:"是否显示边框，建议在灰色背景下使用",type:"Boolean",default:!0,version:""},{param:"size",desc:"面板尺寸,可选值有<code>xxxl</code>、<code>xxl</code>、<code>xl</code>、<code>l</code>、<code>m</code>、<code>s</code>、<code>xs</code>,不填则为默认大小",type:"String",default:"",version:""},{param:"iconHide",desc:"是否隐藏图标",type:"Boolean",default:!0,version:""},{param:"split",desc:"是否显示分割线",type:"Boolean",default:"true",version:""},{param:"icon",desc:"标题前的图标,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀",type:"String",default:"right",version:""},{param:"iconSize",desc:"图标大小",type:"Number",default:"",version:""},{param:"iconPosition",desc:"设置图标位置： left, right",type:"String",default:"left",version:""},{param:"maxHeight",desc:"面板内容区最大高度,与折叠动画时长相关",type:"Number",default:"500",version:""},{param:"animationTime",desc:"面板内容展开的动画时长  单位为ms",type:"Number",default:"200",version:""},{param:"destroyInactivePanel",desc:"销毁折叠隐藏的面板",type:"Boolean",default:"false",version:""}],itemPropsTableData:[{param:"name",desc:"当前面板的 name，与 Collapse的value对应，不填为索引",type:"String",default:"",version:""},{param:"header",desc:"折叠面板头内容",type:"String",default:"",version:""},{param:"icon",desc:"标题前的图标,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀",type:"String",default:"right",version:""},{param:"iconSize",desc:"图标大小",type:"Number",default:"",version:""},{param:"disabled",desc:"禁用后的面板展开与否将无法通过用户交互改变",type:"Boolean",default:"",version:""},{param:"iconPosition",desc:"设置图标位置： left, right",type:"String",default:"left",version:""},{param:"maxHeight",desc:"面板内容区最大高度,与折叠动画时长相关",type:"Number",default:"500",version:""},{param:"animationTime",desc:"面板内容展开的动画时长  单位为ms",type:"Number",default:"200",version:""},{param:"destroyInactivePanel",desc:"销毁折叠隐藏的面板",type:"Boolean",default:"false",version:""}],eventTableData:[{param:"change",desc:"切换面板时触发，返回当前已展开的面板的 name，格式为数组",callback:"(names)=>void",version:""}],slotTableData:[{param:"-",desc:"默认插槽",version:""}],itemSlotTableData:[{param:"-",desc:"默认插槽,面板内容主体显示",version:""},{param:"extra",desc:"自定义渲染每个面板右上角的内容",version:""},{param:"action",desc:"自定义面板下方显示",version:""},{param:"header",desc:"面板头内容",version:""},{param:"icon",desc:"自定义图标",version:""}]}}},r=n,l=(t("dcd5"),t("2877")),d=Object(l["a"])(r,o,s,!1,null,"10a2125f",null);a["default"]=d.exports},7281:function(e,a,t){},dcd5:function(e,a,t){"use strict";t("7281")}}]);