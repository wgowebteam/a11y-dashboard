(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{XzjL:function(e,a,t){"use strict";t.r(a);var o=t("ln6h"),n=t.n(o),r=t("q1tI"),i=t.n(r),c=t("eD//"),d=t("tVbE"),l=t("ZBNC"),s=t("wx14"),p=t("Ff2n"),u=(t("17x9"),t("iuhU")),b=t("kKAo"),m=t("H2TA"),h=i.a.forwardRef((function(e,a){var t=e.classes,o=e.className,n=e.raised,r=void 0!==n&&n,c=Object(p.a)(e,["classes","className","raised"]);return i.a.createElement(b.a,Object(s.a)({className:Object(u.a)(t.root,o),elevation:r?8:1,ref:a},c))})),g=Object(m.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),f=i.a.forwardRef((function(e,a){var t=e.classes,o=e.className,n=e.component,r=void 0===n?"div":n,c=Object(p.a)(e,["classes","className","component"]);return i.a.createElement(r,Object(s.a)({className:Object(u.a)(t.root,o),ref:a},c))})),v=Object(m.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(f),y=t("ofer"),x=i.a.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,n=e.classes,r=e.className,c=Object(p.a)(e,["disableSpacing","classes","className"]);return i.a.createElement("div",Object(s.a)({className:Object(u.a)(n.root,r,!o&&n.spacing),ref:a},c))})),S=Object(m.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(x),w=t("ye/S"),O=t("VD++"),j=t("NqtD"),C=i.a.forwardRef((function(e,a){var t=e.children,o=e.classes,n=e.className,r=e.color,c=void 0===r?"default":r,d=e.component,l=void 0===d?"button":d,b=e.disabled,m=void 0!==b&&b,h=e.disableElevation,g=void 0!==h&&h,f=e.disableFocusRipple,v=void 0!==f&&f,y=e.endIcon,x=e.focusVisibleClassName,S=e.fullWidth,w=void 0!==S&&S,C=e.size,k=void 0===C?"medium":C,z=e.startIcon,N=e.type,R=void 0===N?"button":N,E=e.variant,I=void 0===E?"text":E,T=Object(p.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),L=z&&i.a.createElement("span",{className:Object(u.a)(o.startIcon,o["iconSize".concat(Object(j.a)(k))])},z),$=y&&i.a.createElement("span",{className:Object(u.a)(o.endIcon,o["iconSize".concat(Object(j.a)(k))])},y);return i.a.createElement(O.a,Object(s.a)({className:Object(u.a)(o.root,o[I],n,"inherit"===c?o.colorInherit:"default"!==c&&o["".concat(I).concat(Object(j.a)(c))],"medium"!==k&&[o["".concat(I,"Size").concat(Object(j.a)(k))],o["size".concat(Object(j.a)(k))]],g&&o.disableElevation,m&&o.disabled,w&&o.fullWidth),component:l,disabled:m,focusRipple:!v,focusVisibleClassName:Object(u.a)(o.focusVisible,x),ref:a,type:R},T),i.a.createElement("span",{className:o.label},L,t,$))})),k=Object(m.a)((function(e){return{root:Object(s.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(w.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(w.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(w.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(w.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(w.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(w.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(w.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(C),z=t("rORB"),N=t("Rja7"),R=i.a.createElement,E=function(e){var a=e.name,t=e.hasTask;return R(g,{variant:"outlined"},R(v,null,R(y.a,{variant:"h5",component:"h2"},a),R(y.a,{color:"textSecondary"},t?"No completed result found":"No result found")))},I=Object(m.a)((function(e){return Object(l.a)({})}))((function(e){e.classes;var a=e.config,t=a.name,o=a.tasks;if(!o||!o.length)return E({name:t,hasTask:!1});var n=o.filter((function(e){return e.completedDate}));if(!n.length)return E({name:t,hasTask:!1});var r=n.sort((function(e,a){return a.completedDate-e.completedDate}))[0],i=r.completedDate,c=r.pagesCount,d=r.errorCount,l=r.warningCount,s=r.noticeCount,p=new Date(1e3*i);return R(g,{variant:"outlined"},R(v,null,R(y.a,{color:"textSecondary"},"Last scanned at ",p.toLocaleDateString()," ",p.toLocaleTimeString()),R(y.a,{variant:"h5",component:"h2"},t),R(y.a,{color:"textSecondary",gutterBottom:!0},c," pages found"),R(z.a,{variant:"body2",errorCount:d,warningCount:l,noticeCount:s})),R(S,null,R(k,{component:"a",href:"".concat(N.a,"/").concat(a.site._id,"/").concat(a._id)},"View Result")))})),T=t("2OCX"),L=i.a.createElement,$=function(e){var a=e.site.configs;return L(c.a,{style:{display:"flex"}},a.sort((function(e,a){return e.name<a.name?-1:1})).map((function(e){return L(d.a,{key:e._id,style:{width:"auto"}},L(I,{config:e}))})))};$.getInitialProps=function(e){var a,t;return n.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=e.query.siteId,o.next=3,n.a.awrap(Object(T.c)(a));case 3:return t=o.sent,o.abrupt("return",{site:t,header:t.name,title:t.name});case 5:case"end":return o.stop()}}))};a.default=$},kKAo:function(e,a,t){"use strict";var o=t("Ff2n"),n=t("wx14"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),d=t("H2TA"),l=i.a.forwardRef((function(e,a){var t=e.classes,r=e.className,d=e.component,l=void 0===d?"div":d,s=e.square,p=void 0!==s&&s,u=e.elevation,b=void 0===u?1:u,m=e.variant,h=void 0===m?"elevation":m,g=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return i.a.createElement(l,Object(n.a)({className:Object(c.a)(t.root,r,"outlined"===h?t.outlined:t["elevation".concat(b)],!p&&t.rounded),ref:a},g))}));a.a=Object(d.a)((function(e){var a={};return e.shadows.forEach((function(e,t){a["elevation".concat(t)]={boxShadow:e}})),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},a)}),{name:"MuiPaper"})(l)},vypA:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[siteId]",function(){return t("XzjL")}])}},[["vypA",0,2,1,3,4,5,6]]]);