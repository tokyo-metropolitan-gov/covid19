(window.webpackJsonp=window.webpackJsonp||[]).push([[17,69,70,71],{377:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(66),l=n(381),d=n(382),c=n(131),f=o.default.extend({components:{DataViewExpantionPanel:l.default,DataViewShare:d.default,AppLink:r.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(c.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),v=(n(406),n(7)),m=n(46),_=n.n(m),h=n(934),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("data-view-expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("data-view-share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;_()(component,{DataViewExpantionPanel:n(381).default,AppLink:n(66).default,DataViewShare:n(382).default}),_()(component,{VCard:h.a})},379:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("740cceca",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("487710d1",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n.r(e);var o=n(53),r=n(1),l=n(411),d=r.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.f}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),c=(n(398),n(7)),f=n(46),v=n.n(f),m=n(813),_=n(814),h=n(815),w=n(816),x=n(365),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VExpansionPanel:m.a,VExpansionPanelContent:_.a,VExpansionPanelHeader:h.a,VExpansionPanels:w.a,VIcon:x.a})},382:function(t,e,n){"use strict";n.r(e);n(65),n(28);var o=n(53),r=n(1).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.g,mdiClose:o.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(400),n(7)),d=n(46),c=n.n(d),f=n(365),v=n(817),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:f.a,VTooltip:v.a})},384:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("55e0e80f",content,!0,{sourceMap:!1})},392:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(261),n(91);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},398:function(t,e,n){"use strict";n(379)},399:function(t,e,n){var o=n(26)(!1);o.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=o},400:function(t,e,n){"use strict";n(380)},401:function(t,e,n){var o=n(26)(!1);o.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=o},406:function(t,e,n){"use strict";n(384)},407:function(t,e,n){var o=n(26)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;line-height:1.5;font-weight:400;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},482:function(t,e,n){"use strict";n(18),n(21),n(29),n(33);var o=n(4),r=(n(91),n(22),n(67),n(31),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(12),n(30),n(34),n(51),n(17),n(71),n(260),n(1)),l=n(171),d=n(11);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),_=v.reduce((function(t,e){return t["offset"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(d.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(m),offset:Object.keys(_),order:Object.keys(h)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},_),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,d=(e.parent,"");for(var c in n)d+=String(n[c]);var f=y.get(d);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(d,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},495:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("790bc166",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";n.r(e);n(51),n(52);var o=n(1).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),r=n(539),l=n(7);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},514:function(t,e,n){var content=n(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0000a8ad",content,!0,{sourceMap:!1})},515:function(t,e,n){var content=n(632);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6fb93ecd",content,!0,{sourceMap:!1})},539:function(t,e,n){"use strict";var o=n(495),r=n.n(o);n.d(e,"default",(function(){return r.a}))},540:function(t,e,n){var o=n(26)(!1);o.push([t.i,".parent_3nElz{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),o.locals={parent:"parent_3nElz"},t.exports=o},541:function(t,e,n){var content=n(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("779ca45a",content,!0,{sourceMap:!1})},607:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(510),l=o.default.extend({components:{MonitoringItemsOverviewTableValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),d=n(629),c=n(7);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(1)新規陽性者数")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(1)新規陽性者数"].value,unit:t.items["(1)新規陽性者数"].unit,bold:t.items["(1)新規陽性者数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("潜在・市中感染")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v("\n            "+t._s(t.$t("(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "))+"\n          ")]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].value,unit:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].unit,bold:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(3)新規陽性者における接触歴等不明者")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("人数")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（人数）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（人数）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("増加比")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;installComponents(component,{MonitoringItemsOverviewTableValueWithTranslatableUnit:n(510).default})},608:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(510),l=o.default.extend({components:{MonitoringItemsOverviewTableValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),d=n(631),c=n(7);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(4)PCR・抗原検査")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性率")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（陽性率）"].value,unit:t.items["(4)PCR・抗原検査（陽性率）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査人数")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（検査人数）"].value,unit:t.items["(4)PCR・抗原検査（検査人数）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("受入体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(5)救急医療の東京ルールの適用件数")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(5)救急医療の東京ルールの適用件数"].value,unit:t.items["(5)救急医療の東京ルールの適用件数"].unit,bold:t.items["(5)救急医療の東京ルールの適用件数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(6)入院患者数")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者数"].value,unit:t.items["(6)入院患者数"].unit,bold:t.items["(6)入院患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者確保病床数"].value,unit:t.items["(6)入院患者確保病床数"].unit,bold:t.items["(6)入院患者確保病床数"].bold}})],1)])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(7)重症患者数")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者数"].value,unit:t.items["(7)重症患者数"].unit,bold:t.items["(7)重症患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("monitoring-items-overview-table-value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者確保病床数"].value,unit:t.items["(7)重症患者確保病床数"].unit,bold:t.items["(7)重症患者確保病床数"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;installComponents(component,{MonitoringItemsOverviewTableValueWithTranslatableUnit:n(510).default})},613:function(t){t.exports=JSON.parse('{"date":"2021/3/17 19:30","data":{"専門家3行コメント":[{"@ja":"新規陽性者数は下げ止まりが見られる。","@en":"The decline in new positive cases is leveling off."},{"@ja":"今後、変異株等により急激に感染の再拡大が起こる可能性がある。","@en":"There is the possibility that variants will lead to a rapid resurgence in infections."},{"@ja":"病院の体制が十分に確保できないまま感染が再拡大する危険性がある。","@en":"There is a risk that infections will again surge without hospitals having secured the sufficient capacity needed."}],"(1)新規陽性者数":298.9,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":51.6,"(3)新規陽性者における接触歴等不明者（人数）":144.4,"(3)新規陽性者における接触歴等不明者（増加比）":114.2,"(4)PCR・抗原検査（陽性率）":3.5,"(4)PCR・抗原検査（検査人数）":6809.6,"(5)救急医療の東京ルールの適用件数":62.3,"(6)入院患者数":1270,"(6)入院患者確保病床数":"5048床","(7)重症患者数":41,"(7)重症患者確保病床数":"332床","総括コメント-感染状況":{"date":"2021-03-04","level":4,"display":{"@ja":"感染が拡大していると思われる","@en":"The infection is spreading."}},"総括コメント-医療提供体制":{"date":"2021-03-04","level":4,"display":{"@ja":"体制が逼迫していると思われる","@en":"The system is under strain."}}}}')},614:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));n(67),n(31);var o=n(392),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},d=Object(o.a)(0),c=Object(o.a)(1);return{"(1)新規陽性者数":{value:c(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:c(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:c(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:c(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:c(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:c(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:c(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:d(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:d(parseInt("".concat(t["(6)入院患者確保病床数"]).replace(/床$/,""))),unit:l,bold:!1},"(7)重症患者数":{value:d(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:d(parseInt("".concat(t["(7)重症患者確保病床数"]).replace(/床$/,""))),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},629:function(t,e,n){"use strict";var o=n(514),r=n.n(o);n.d(e,"default",(function(){return r.a}))},630:function(t,e,n){var o=n(26)(!1);o.push([t.i,'.container_2KfaW{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_2KfaW,.container_2KfaW *{box-sizing:border-box}.container_2KfaW ul{padding-left:0}.group_1kzie{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_1qmQu{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_1qmQu>span{display:block;font-size:1.4rem}.content_1qmQu>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_1qmQu>span:not(:last-child){word-wrap:break-word}.content_1qmQu strong{font-size:1.6rem}.content_1qmQu span.unit_1PWgU{font-size:1.4rem}.box_2-hA8{display:block;margin-top:3px}.box_2-hA8.parent_-d89Y{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_2-hA8.parent_-d89Y:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_2-hA8.parent_-d89Y>.content_1qmQu{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_1kzie{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_1qmQu{padding:.396vw .792vw;border:.238vw solid #008830}.content_1qmQu>span{font-size:1.4rem}.content_1qmQu>span:first-child{margin-top:.08vw}.content_1qmQu strong{font-size:1.6rem}.content_1qmQu span.unit_1PWgU{font-size:1.4rem}.box_2-hA8{margin-top:.238vw}.box_2-hA8.parent_-d89Y{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_2-hA8.parent_-d89Y:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_2-hA8.parent_-d89Y>.content_1qmQu{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_1kzie{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_1qmQu{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_1qmQu>span{font-size:1.4rem}.content_1qmQu>span:first-child{margin-top:.105vw}.content_1qmQu strong{font-size:1.6rem}.content_1qmQu span.unit_1PWgU{font-size:1.4rem}.box_2-hA8{margin-top:.313vw}.box_2-hA8.parent_-d89Y{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_2-hA8.parent_-d89Y:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_2-hA8.parent_-d89Y>.content_1qmQu{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_1kzie{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_1qmQu{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_1qmQu>span{font-size:1.4rem}.content_1qmQu>span:first-child{margin-top:.167vw}.content_1qmQu strong{font-size:1.6rem}.content_1qmQu span.unit_1PWgU{font-size:1.4rem}.box_2-hA8{margin-top:.5vw}.box_2-hA8.parent_-d89Y{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_2-hA8.parent_-d89Y:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_2-hA8.parent_-d89Y>.content_1qmQu{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_2KfaW",group:"group_1kzie",content:"content_1qmQu",unit:"unit_1PWgU",box:"box_2-hA8",parent:"parent_-d89Y"},t.exports=o},631:function(t,e,n){"use strict";var o=n(515),r=n.n(o);n.d(e,"default",(function(){return r.a}))},632:function(t,e,n){var o=n(26)(!1);o.push([t.i,'.container_HTJjx{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_HTJjx,.container_HTJjx *{box-sizing:border-box}.container_HTJjx ul{padding-left:0}.group_22PV4{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_10oth{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_10oth>span{display:block;font-size:1.4rem}.content_10oth>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_10oth>span:not(:last-child){word-wrap:break-word}.content_10oth strong{font-size:1.6rem}.content_10oth span.unit_3f7f0{font-size:1.4rem}.box_3MlJo{display:block;margin-top:3px}.box_3MlJo.parent_y3x3o{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_3MlJo.parent_y3x3o:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_3MlJo.parent_y3x3o>.content_10oth{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_22PV4{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_10oth{padding:.396vw .792vw;border:.238vw solid #008830}.content_10oth>span{font-size:1.4rem}.content_10oth>span:first-child{margin-top:.08vw}.content_10oth strong{font-size:1.6rem}.content_10oth span.unit_3f7f0{font-size:1.4rem}.box_3MlJo{margin-top:.238vw}.box_3MlJo.parent_y3x3o{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_3MlJo.parent_y3x3o:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_3MlJo.parent_y3x3o>.content_10oth{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_22PV4{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_10oth{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_10oth>span{font-size:1.4rem}.content_10oth>span:first-child{margin-top:.105vw}.content_10oth strong{font-size:1.6rem}.content_10oth span.unit_3f7f0{font-size:1.4rem}.box_3MlJo{margin-top:.313vw}.box_3MlJo.parent_y3x3o{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_3MlJo.parent_y3x3o:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_3MlJo.parent_y3x3o>.content_10oth{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_22PV4{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_10oth{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_10oth>span{font-size:1.4rem}.content_10oth>span:first-child{margin-top:.167vw}.content_10oth strong{font-size:1.6rem}.content_10oth span.unit_3f7f0{font-size:1.4rem}.box_3MlJo{margin-top:.5vw}.box_3MlJo.parent_y3x3o{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_3MlJo.parent_y3x3o:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_3MlJo.parent_y3x3o>.content_10oth{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_HTJjx",group:"group_22PV4",content:"content_10oth",unit:"unit_3f7f0",box:"box_3MlJo",parent:"parent_y3x3o"},t.exports=o},686:function(t,e,n){"use strict";var o=n(541),r=n.n(o);n.d(e,"default",(function(){return r.a}))},687:function(t,e,n){var o=n(26)(!1);o.push([t.i,"section{margin:0 0 20px}section:first-child{margin-top:-10px}section h4{margin:5px 0 10px;font-weight:400;font-size:1.6rem}.button_3hQAr{color:#008830!important;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.button_3hQAr:hover{color:#fff!important;background-color:#008830;color:#fff}.button_3hQAr:hover>i{color:#fff!important}dfn{font-style:normal;font-weight:600}",""]),o.locals={button:"button_3hQAr"},t.exports=o},796:function(t,e,n){"use strict";n.r(e);var o=n(66),r=n(377),l=n(607),d=n(608),c=n(613),f=n(614),v={components:{DataView:r.default,MonitoringItemsOverviewTableInfectionStatus:l.default,MonitoringItemsOverviewTableMedicalSystem:d.default,AppLink:o.default},data:function(){var t=Object(f.b)(c.data);return{monitoringItemsData:c,monitoringItems:t}}},m=n(686),_=n(7),h=n(46),w=n.n(h),x=n(482);var component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringItemsOverviewCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("モニタリング項目"),"title-id":"monitoring-items-overview",date:t.monitoringItemsData.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[n("i18n",{attrs:{tag:"span",path:"{number}：急病やけがの際に、緊急受診の必要性や診察可能な医療機関をアドバイスする電話相談窓口"},scopedSlots:t._u([{key:"number",fn:function(){return[n("dfn",[t._v("#7119")])]},proxy:!0}])})],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(1)～(5)は7日間移動平均で算出"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(4)(5)は報告日の前日時点の数値"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(6)の確保病床数には、(7)の確保病床数を含む"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("速報値として公表するものであり、後日修正する場合がある"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(5)は土曜日、日曜日、祝日は更新しない。(4)は日曜日、祝日は更新しない"))+"\n          ")])])]},proxy:!0}])},[t._v(" "),n("section",[n("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("monitoring-items-overview-table-infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.monitoringItems}})],1),t._v(" "),n("section",[n("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),n("monitoring-items-overview-table-medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.monitoringItems}})],1),t._v(" "),n("div",[n("app-link",{class:t.$style.button,attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}},[t._v("\n          "+t._s(t.$t("最新のモニタリング項目の分析・総括コメントについて"))+"\n        ")])],1)])],1)],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports;w()(component,{MonitoringItemsOverviewTableInfectionStatus:n(607).default,MonitoringItemsOverviewTableMedicalSystem:n(608).default,AppLink:n(66).default,DataView:n(377).default}),w()(component,{VCol:x.a})}}]);