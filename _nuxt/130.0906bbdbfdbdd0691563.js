(window.webpackJsonp=window.webpackJsonp||[]).push([[130,22,23],{453:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(325),n(105);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},499:function(t,e,n){"use strict";n(32),n(40),n(41),n(42),n(52),n(57);var o=n(14),r=(n(4),n(105),n(37),n(27),n(88),n(309),n(53),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(54),n(63),n(18),n(11),n(19),n(20),n(209),n(210),n(89),n(324),n(0)),l=n(212),c=n(29);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),C=f.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(C)};function j(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},C),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var m in n)c+=String(n[m]);var d=x.get(c);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),r)}})},571:function(t,e,n){var content=n(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("45d64bcf",content,!0,{sourceMap:!1})},572:function(t,e,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("d93b19ee",content,!0,{sourceMap:!1})},577:function(t){t.exports=JSON.parse('{"date":"2022/2/6 20:15","data":{"専門家3行コメント":[{"@ja":"就業制限を受ける者が多数発生しており、社会機能の低下が危惧される。家庭や日常生活において、誰もが、感染者や濃厚接触者となる可能性があることを意識し、自ら身を守る行動を徹底する必要がある。","@en":"With a large number of people temporarily unable to work due to COVID-19, a slowdown in the functions of society is feared. It is imperative that each of us understand that we are all at risk of getting infected and becoming a close contact and take firm actions to protect ourselves at home and in everyday life."},{"@ja":"現在、たとえ肺炎は軽症であっても、新型コロナウイルス感染症と併存する他の疾患のため集中治療を要する患者も増加傾向にある。その動向を注視し、医療提供体制のひっ迫度合いを把握する必要がある。","@en":"Currently, we are seeing an upward trend in patients requiring intensive care for COVID-19 in combination with pre-existing medical conditions, even if their pneumonia symptoms are mild. There is the need to closely monitor these trends and grasp the level of strain on the system for the provision of health care."}],"(1)新規陽性者数":18128.1,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":151.6,"(3)新規陽性者における接触歴等不明者（人数）":11980.6,"(3)新規陽性者における接触歴等不明者（増加比）":125,"(4)PCR・抗原検査（陽性率）":39.2,"(4)PCR・抗原検査（検査人数）":24934.1,"(5)救急医療の東京ルールの適用件数":248.7,"(6)入院患者数":3991,"(6)入院患者確保病床数":6415,"(7)重症患者数":45,"(7)重症患者確保病床数":377,"総括コメント-感染状況":{"date":"2022-02-02","level":4,"display":{"@ja":"大規模な感染拡大が継続している","@en":"Extensive spread of the virus continues."}},"総括コメント-医療提供体制":{"date":"2022-02-02","level":4,"display":{"@ja":"医療体制がひっ迫している","@en":"The health care delivery system is under strain."}}}}')},578:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(453),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),m=Object(o.a)(1);return{"(1)新規陽性者数":{value:m(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:m(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:m(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:m(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:m(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:m(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:m(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},585:function(t,e,n){var content=n(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("76b3c5a9",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";n(571)},601:function(t,e,n){var o=n(45)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-592c53a8]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-592c53a8]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-592c53a8]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},602:function(t,e,n){"use strict";n(572)},603:function(t,e,n){var o=n(45)(!1);o.push([t.i,".RandomImageContainer[data-v-cc1b0b78]{display:flex;justify-content:center}",""]),t.exports=o},651:function(t,e,n){"use strict";n.r(e);n(105);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(600),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"592c53a8",null);e.default=component.exports},652:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{currentImage:function(){var t=this.monitoringCommentImage.data.images.length,e=Math.floor(Math.random()*t);return this.monitoringCommentImage.data.images[e]},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=(n(602),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RandomImageContainer"},[n("a",{attrs:{target:"_blank",href:t.currentImage.href}},[n("img",{attrs:{width:"320",height:"240",src:t.currentImage.src,alt:t.currentImage.alt}})])])}),[],!1,null,"cc1b0b78",null);e.default=component.exports},686:function(t,e,n){"use strict";n(585)},687:function(t,e,n){var o=n(45)(!1);o.push([t.i,".MonitoringComment-date[data-v-44ff3322]{text-align:right;font-size:1.4rem}.MonitoringComment-summary-item[data-v-44ff3322]{margin-bottom:8px;font-size:1.4rem}.MonitoringCommentFrame[data-v-44ff3322]{margin:20px 0}.MonitoringCommentFrame-title[data-v-44ff3322]{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringCommentImage[data-v-44ff3322]{margin-top:50px}.MonitoringCommentLink[data-v-44ff3322]{display:flex;justify-content:center;align-items:center;margin-top:12px;font-size:1.4rem}",""]),t.exports=o},762:function(t,e,n){"use strict";n.r(e);n(63),n(30),n(34),n(35);var o=n(61),r=n(0),l=n(107),c=n(454),m=n(651),d=n(577),f=n(578),v=n(652),h=r.default.extend({components:{AppLink:l.default,DataView:c.default,Frame:m.default,RandomImage:v.default},data:function(){return{monitoringComment:Object(f.a)(d.data),date:d.date,mdiChevronRight:o.e}},computed:{translatedMonitoringSummarizedComments:function(){var t=d.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]},formattedDate:function(t){return this.$d(new Date(t),"date")}}}),C=(n(686),n(16)),y=n(73),j=n.n(y),x=n(499),_=n(436),component=Object(C.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringCommentCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("感染状況・医療提供体制の分析"),"title-id":"monitoring-comment",date:t.date,"is-set-title-row":""},scopedSlots:t._u([{key:"infoPanel",fn:function(){return[n("div",{staticClass:"MonitoringComment-date"},[t._v("\n          "+t._s(t.$t("{date}時点",{date:t.formattedDate(t.monitoringComment["総括コメント-感染状況"].date)}))+"\n        ")])]},proxy:!0}])},[t._v(" "),n("div",[n("ul",t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("li",{key:i,staticClass:"MonitoringComment-summary-item"},[t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1),t._v(" "),n("div",{staticClass:"MonitoringCommentImage"},[n("random-image"),t._v(" "),n("div",{staticClass:"MonitoringCommentLink"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"}},[t._v("\n              "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n            ")])],1)],1)])])],1)],1)}),[],!1,null,"44ff3322",null);e.default=component.exports;j()(component,{VCol:x.a,VIcon:_.a})}}]);