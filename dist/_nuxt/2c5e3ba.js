(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{217:function(t,e,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("54ac70af",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";n(217)},220:function(t,e,n){var r=n(90)(!1);r.push([t.i,".list-item-container[data-v-c41d2dba]{display:block;width:33.3333333333%;height:100%;position:relative}@media(max-width:1366px){.list-item-container[data-v-c41d2dba]{width:50%}}@media(max-device-width:896px){.list-item-container[data-v-c41d2dba]{width:100%}}.list-item-inner[data-v-c41d2dba]{display:flex;flex-flow:column nowrap;justify-content:space-between;min-height:10vh;height:100%;margin:10px;padding:20px;background-color:rgba(0,0,0,.05);border-radius:8px;cursor:pointer;opacity:1;will-change:transform;transition:transform .15s}.list-item-inner.seen[data-v-c41d2dba]{opacity:.25}.list-item-inner[data-v-c41d2dba]:hover{transform:translateY(-10px) scale(1.05)}.list-item-inner>*[data-v-c41d2dba]{pointer-events:none;margin:0;padding:0}.list-item-inner .title[data-v-c41d2dba]{font-size:1em}.list-item-inner .source[data-v-c41d2dba]{font-size:.7em;text-transform:capitalize;text-align:right}",""]),t.exports=r},228:function(t,e,n){"use strict";n.r(e);var r={props:{articleInfos:{type:Object,required:!0}},methods:{articleClickHandler:function(){this.$emit("please-update-current-article",this.articleInfos.id),-1===this.$store.state.seen.seenArr.indexOf(this.articleInfos.url)&&this.$store.commit("seen/add",this.articleInfos.url)}}},c=(n(219),n(37)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item-container"},[n("div",{staticClass:"list-item-inner",class:{seen:-1!==t.$store.state.seen.seenArr.indexOf(t.articleInfos.url)},on:{click:t.articleClickHandler}},[n("h2",{staticClass:"title"},[t._v(t._s(t.articleInfos.title))]),t._v(" "),n("p",{staticClass:"source"},[t._v(t._s(t.articleInfos.source))])])])}),[],!1,null,"c41d2dba",null);e.default=component.exports}}]);