(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1iKp":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},"2wwy":function(e,t,n){e.exports=n("nhzr")},E8gZ:function(e,t,n){var a=n("jmDH"),r=n("w6GO"),o=n("NsO/"),i=n("NV0k").f;e.exports=function(e){return function(t){for(var n,l=o(t),c=r(l),s=c.length,u=0,d=[];s>u;)n=c[u++],a&&!i.call(l,n)||d.push(e?[n,l[n]]:l[n]);return d}}},fW1p:function(e,t,n){var a=n("Y7ZC"),r=n("E8gZ")(!1);a(a.S,"Object",{values:function(e){return r(e)}})},nhzr:function(e,t,n){n("fW1p"),e.exports=n("WEpk").Object.values},pKXL:function(e,t,n){"use strict";n.r(t);var a,r=n("ln6h"),o=n.n(r),i=n("q1tI"),l=n.n(i),c=n("Sa6g"),s=n("doui"),u=n("kOwS"),d=n("qNsG"),p=n("ZBNC"),f=n("hlFM"),m=n("ofer"),b=n("hlie"),h=n("kKAo"),g=n("wx14"),v=n("Ff2n"),x=n("rePB"),w=(n("TOwV"),n("17x9"),n("iuhU")),y=n("l3Wi"),E=n("g+pH");function O(){if(a)return a;var e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),a="reverse",e.scrollLeft>0?a="default":(e.scrollLeft=1,0===e.scrollLeft&&(a="negative")),document.body.removeChild(e),a}function j(e,t){var n=e.scrollLeft;if("rtl"!==t)return n;switch(O()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}function C(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var N={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function k(e){var t=e.onChange,n=Object(v.a)(e,["onChange"]),a=l.a.useRef(),r=l.a.useRef(null),o=function(){a.current=r.current.offsetHeight-r.current.clientHeight};return l.a.useEffect((function(){var e=Object(y.a)((function(){var e=a.current;o(),e!==a.current&&t(a.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),l.a.useEffect((function(){o(),t(a.current)}),[t]),l.a.createElement("div",Object(g.a)({style:N,ref:r},n))}var I=n("H2TA"),T=n("NqtD"),R=l.a.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.color,o=e.orientation,i=Object(v.a)(e,["classes","className","color","orientation"]);return l.a.createElement("span",Object(g.a)({className:Object(w.a)(n.root,n["color".concat(Object(T.a)(r))],a,"vertical"===o&&n.vertical),ref:t},i))})),S=Object(I.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(R),B=n("As0B"),W=Object(B.a)(l.a.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),H=Object(B.a)(l.a.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),P=n("VD++"),L=l.a.createElement(W,{fontSize:"small"}),D=l.a.createElement(H,{fontSize:"small"}),M=l.a.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.direction,o=e.orientation,i=e.visible,c=Object(v.a)(e,["classes","className","direction","orientation","visible"]),s=Object(w.a)(n.root,a,"vertical"===o&&n.vertical);return i?l.a.createElement(P.a,Object(g.a)({component:"div",className:s,ref:t,role:null,tabIndex:null},c),"left"===r?L:D):l.a.createElement("div",{className:s})})),A=Object(I.a)({root:{width:40,flexShrink:0},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}}},{name:"PrivateTabScrollButton"})(M),z=n("Ovef"),q=n("tr08"),$=l.a.forwardRef((function(e,t){var n=e.action,a=e.centered,r=void 0!==a&&a,o=e.children,i=e.classes,c=e.className,s=e.component,u=void 0===s?"div":s,d=e.indicatorColor,p=void 0===d?"secondary":d,f=e.onChange,m=e.orientation,b=void 0===m?"horizontal":m,h=e.ScrollButtonComponent,N=void 0===h?A:h,I=e.scrollButtons,T=void 0===I?"auto":I,R=e.TabIndicatorProps,B=void 0===R?{}:R,W=e.textColor,H=void 0===W?"inherit":W,P=e.value,L=e.variant,D=void 0===L?"standard":L,M=Object(v.a)(e,["action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","TabIndicatorProps","textColor","value","variant"]),$=Object(q.a)(),F="scrollable"===D,_="rtl"===$.direction,V="vertical"===b,G=V?"scrollTop":"scrollLeft",K=V?"top":"left",X=V?"bottom":"right",Z=V?"clientHeight":"clientWidth",J=V?"height":"width";var U=l.a.useState(!1),Y=U[0],Q=U[1],ee=l.a.useState({}),te=ee[0],ne=ee[1],ae=l.a.useState({start:!1,end:!1}),re=ae[0],oe=ae[1],ie=l.a.useState({overflow:"hidden",marginBottom:null}),le=ie[0],ce=ie[1],se=new Map,ue=l.a.useRef(null),de=l.a.useRef(null),pe=function(){var e,t,n=ue.current;if(n){var a=n.getBoundingClientRect();e={clientWidth:n.clientWidth,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollLeftNormalized:j(n,$.direction),scrollWidth:n.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}if(n&&!1!==P){var r=de.current.children;if(r.length>0){var o=r[se.get(P)];0,t=o?o.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},fe=Object(z.a)((function(){var e,t=pe(),n=t.tabsMeta,a=t.tabMeta,r=0;if(a&&n)if(V)r=a.top-n.top+n.scrollTop;else{var o=_?n.scrollLeftNormalized+n.clientWidth-n.scrollWidth:n.scrollLeft;r=a.left-n.left+o}var i=(e={},Object(x.a)(e,K,r),Object(x.a)(e,J,a?a[J]:0),e);if(isNaN(te[K])||isNaN(te[J]))ne(i);else{var l=Math.abs(te[K]-i[K]),c=Math.abs(te[J]-i[J]);(l>=1||c>=1)&&ne(i)}})),me=function(e){!function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=a.ease,i=void 0===o?C:o,l=a.duration,c=void 0===l?300:l,s=null,u=t[e],d=!1,p=function(){d=!0};u===n?r(new Error("Element already at target position")):requestAnimationFrame((function a(o){if(d)r(new Error("Animation cancelled"));else{null===s&&(s=o);var l=Math.min(1,(o-s)/c);t[e]=i(l)*(n-u)+u,l>=1?requestAnimationFrame((function(){r(null)})):requestAnimationFrame(a)}}))}(G,ue.current,e)},be=function(e){var t=ue.current[G];V?t+=e:(t+=e*(_?-1:1),t*=_&&"reverse"===O()?-1:1),me(t)},he=function(){be(-ue.current[Z])},ge=function(){be(ue.current[Z])},ve=l.a.useCallback((function(e){ce({overflow:null,marginBottom:-e})}),[]),xe=Object(z.a)((function(){var e=pe(),t=e.tabsMeta,n=e.tabMeta;if(n&&t)if(n[K]<t[K]){var a=t[G]+(n[K]-t[K]);me(a)}else if(n[X]>t[X]){var r=t[G]+(n[X]-t[X]);me(r)}})),we=Object(z.a)((function(){if(F&&"off"!==T){var e,t,n=ue.current,a=n.scrollTop,r=n.scrollHeight,o=n.clientHeight,i=n.scrollWidth,l=n.clientWidth;if(V)e=a>1,t=a<r-o-1;else{var c=j(ue.current,$.direction);e=_?c<i-l-1:c>1,t=_?c>1:c<i-l-1}e===re.start&&t===re.end||oe({start:e,end:t})}}));l.a.useEffect((function(){var e=Object(y.a)((function(){fe(),we()})),t=Object(E.a)(ue.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[fe,we]);var ye=l.a.useCallback(Object(y.a)((function(){we()})));l.a.useEffect((function(){return function(){ye.clear()}}),[ye]),l.a.useEffect((function(){Q(!0)}),[]),l.a.useEffect((function(){fe(),we()})),l.a.useEffect((function(){xe()}),[xe,te]),l.a.useImperativeHandle(n,(function(){return{updateIndicator:fe,updateScrollButtons:we}}),[fe,we]);var Ee=l.a.createElement(S,Object(g.a)({className:i.indicator,orientation:b,color:p},B,{style:Object(g.a)({},te,{},B.style)})),Oe=0,je=l.a.Children.map(o,(function(e){if(!l.a.isValidElement(e))return null;var t=void 0===e.props.value?Oe:e.props.value;se.set(t,Oe);var n=t===P;return Oe+=1,l.a.cloneElement(e,{fullWidth:"fullWidth"===D,indicator:n&&!Y&&Ee,selected:n,onChange:f,textColor:H,value:t})})),Ce=function(){var e={};e.scrollbarSizeListener=F?l.a.createElement(k,{className:i.scrollable,onChange:ve}):null;var t=re.start||re.end,n=F&&("auto"===T&&t||"desktop"===T||"on"===T);return e.scrollButtonStart=n?l.a.createElement(N,{orientation:b,direction:_?"right":"left",onClick:he,visible:re.start,className:Object(w.a)(i.scrollButtons,"on"!==T&&i.scrollButtonsDesktop)}):null,e.scrollButtonEnd=n?l.a.createElement(N,{orientation:b,direction:_?"left":"right",onClick:ge,visible:re.end,className:Object(w.a)(i.scrollButtons,"on"!==T&&i.scrollButtonsDesktop)}):null,e}();return l.a.createElement(u,Object(g.a)({className:Object(w.a)(i.root,c,V&&i.vertical),ref:t},M),Ce.scrollButtonStart,Ce.scrollbarSizeListener,l.a.createElement("div",{className:Object(w.a)(i.scroller,F?i.scrollable:i.fixed),style:le,ref:ue,onScroll:ye},l.a.createElement("div",{className:Object(w.a)(i.flexContainer,V&&i.flexContainerVertical,r&&!F&&i.centered),ref:de,role:"tablist"},je),Y&&Ee),Ce.scrollButtonEnd)})),F=Object(I.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(x.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})($),_=l.a.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.disabled,o=void 0!==r&&r,i=e.disableFocusRipple,c=void 0!==i&&i,s=e.fullWidth,u=e.icon,d=e.indicator,p=e.label,f=e.onChange,m=e.onClick,b=e.selected,h=e.textColor,x=void 0===h?"inherit":h,y=e.value,E=e.wrapped,O=void 0!==E&&E,j=Object(v.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","selected","textColor","value","wrapped"]);return l.a.createElement(P.a,Object(g.a)({focusRipple:!c,className:Object(w.a)(n.root,n["textColor".concat(Object(T.a)(x))],a,o&&n.disabled,b&&n.selected,p&&u&&n.labelIcon,s&&n.fullWidth,O&&n.wrapped),ref:t,role:"tab","aria-selected":b,disabled:o,onClick:function(e){f&&f(e,y),m&&m(e)}},j),l.a.createElement("span",{className:n.wrapper},u,p),d)})),V=Object(I.a)((function(e){var t;return{root:Object(g.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(x.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(x.a)(t,"overflow","hidden"),Object(x.a)(t,"whiteSpace","normal"),Object(x.a)(t,"textAlign","center"),Object(x.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(_),G=n("2wwy"),K=n.n(G),X=n("eD//"),Z=n("tVbE"),J=n("DSFK"),U=n("25BE"),Y=n("PYwp");var Q=n("ODXe"),ee=n("dRu9"),te=n("wpWl"),ne=n("4Hym"),ae=l.a.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,o=e.collapsedHeight,i=void 0===o?"0px":o,c=e.component,s=void 0===c?"div":c,u=e.in,d=e.onEnter,p=e.onEntered,f=e.onEntering,m=e.onExit,b=e.onExiting,h=e.style,x=e.timeout,y=void 0===x?te.b.standard:x,E=Object(v.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),O=Object(q.a)(),j=l.a.useRef(),C=l.a.useRef(null),N=l.a.useRef(),k="number"===typeof i?"".concat(i,"px"):i;l.a.useEffect((function(){return function(){clearTimeout(j.current)}}),[]);return l.a.createElement(ee.a,Object(g.a)({in:u,onEnter:function(e,t){e.style.height=k,d&&d(e,t)},onEntered:function(e,t){e.style.height="auto",p&&p(e,t)},onEntering:function(e,t){var n=C.current?C.current.clientHeight:0,a=Object(ne.a)({style:h,timeout:y},{mode:"enter"}).duration;if("auto"===y){var r=O.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(r,"ms"),N.current=r}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),f&&f(e,t)},onExit:function(e){var t=C.current?C.current.clientHeight:0;e.style.height="".concat(t,"px"),m&&m(e)},onExiting:function(e){var t=C.current?C.current.clientHeight:0,n=Object(ne.a)({style:h,timeout:y},{mode:"exit"}).duration;if("auto"===y){var a=O.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),N.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=k,b&&b(e)},addEndListener:function(e,t){"auto"===y&&(j.current=setTimeout(t,N.current||0))},timeout:"auto"===y?null:y},E),(function(e,o){return l.a.createElement(s,Object(g.a)({className:Object(w.a)(a.container,r,{entered:a.entered,exited:!u&&"0px"===k&&a.hidden}[e]),style:Object(g.a)({minHeight:k},h),ref:t},o),l.a.createElement("div",{className:a.wrapper,ref:C},l.a.createElement("div",{className:a.wrapperInner},n)))}))}));ae.muiSupportAuto=!0;var re=Object(I.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(ae);var oe,ie=l.a.createContext({}),le=n("yCxk"),ce=l.a.forwardRef((function(e,t){var n,a=e.children,r=e.classes,o=e.className,i=e.defaultExpanded,c=void 0!==i&&i,s=e.disabled,u=void 0!==s&&s,d=e.expanded,p=e.onChange,f=e.square,m=void 0!==f&&f,b=e.TransitionComponent,x=void 0===b?re:b,y=e.TransitionProps,E=Object(v.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),O=Object(le.a)({controlled:d,default:c,name:"ExpansionPanel"}),j=Object(Q.a)(O,2),C=j[0],N=j[1],k=l.a.useCallback((function(e){N(!C),p&&p(e,!C)}),[C,p,N]),I=l.a.Children.toArray(a),T=(n=I,Object(J.a)(n)||Object(U.a)(n)||Object(Y.a)()),R=T[0],S=T.slice(1),B=l.a.useMemo((function(){return{expanded:C,disabled:u,toggle:k}}),[C,u,k]);return l.a.createElement(h.a,Object(g.a)({className:Object(w.a)(r.root,o,C&&r.expanded,u&&r.disabled,!m&&r.rounded),ref:t,square:m},E),l.a.createElement(ie.Provider,{value:B},R),l.a.createElement(x,Object(g.a)({in:C,timeout:"auto"},y),l.a.createElement("div",{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region"},S)))})),se=Object(I.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(ce),ue=n("PsDL"),de=l.a.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,o=e.expandIcon,i=e.IconButtonProps,c=e.onBlur,s=e.onClick,u=e.onFocusVisible,d=Object(v.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),p=l.a.useState(!1),f=p[0],m=p[1],b=l.a.useContext(ie),h=b.disabled,x=void 0!==h&&h,y=b.expanded,E=b.toggle;return l.a.createElement(P.a,Object(g.a)({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":y,className:Object(w.a)(a.root,r,x&&a.disabled,y&&a.expanded,f&&a.focused),onFocusVisible:function(e){m(!0),u&&u(e)},onBlur:function(e){m(!1),c&&c(e)},onClick:function(e){E&&E(e),s&&s(e)},ref:t},d),l.a.createElement("div",{className:Object(w.a)(a.content,y&&a.expanded)},n),o&&l.a.createElement(ue.a,Object(g.a)({className:Object(w.a)(a.expandIcon,y&&a.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},i),o))})),pe=Object(I.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(de),fe=l.a.forwardRef((function(e,t){var n=e.classes,a=e.className,r=Object(v.a)(e,["classes","className"]);return l.a.createElement("div",Object(g.a)({className:Object(w.a)(n.root,a),ref:t},r))})),me=Object(I.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(fe),be=n("1iKp"),he=n.n(be);!function(e){e.Error="Error",e.Warning="Warning",e.Notice="Notice"}(oe||(oe={}));var ge=l.a.createElement,ve=function(e,t){var n=e.reduce((function(e,n){var a=t(n),r=a.num,o=e[r]||{section:a,issues:[],count:0};return o.issues.push(n),o.count=o.issues.length,e[r]=o,e}),{});return K()(n)},xe=function(e,t){var n=t.classes;return ge("ul",null,e.map((function(e,t){return ge("li",{key:t},ge(m.a,{component:"span"},e.criterion,": ",e.message),ge(m.a,{component:"div"},"Techniques: ",e.techniques.map((function(e,t){return ge("span",{key:t,style:{marginRight:"0.5em"}},function(e){var t=function(e){var t=e.match(/([A-z]{1,})\d*/);if(t.length<2)return null;switch(t[1].toUpperCase()){case"ARIA":return"aria";case"SCR":return"client-side-script";case"C":return"css";case"F":return"failures";case"FLASH":return"flash";case"G":return"general";case"H":return"html";case"PDF":return"pdf";case"SL":return"silverlight";case"SM":return"smil";case"T":return"text";default:return null}}(e),n="https://www.w3.org/WAI/WCAG21/Techniques/".concat(t,"/").concat(e);return ge(b.a,{target:"_blank",href:n},e)}(e))}))),ge(X.a,null,e.items.map((function(e,t){return ge(Z.a,{key:t,className:n.messageListItem},ge(m.a,{color:"primary",component:"em",className:n.selectorContainer},e.selector),ge(m.a,{gutterBottom:!0,component:"div"},ge("code",null,e.element)))}))))})))},we=function e(t,n,a){var r,o,i=t.hasSubgroup,l=t.section,c=t.issues,s=t.count,u=l.num,d=l.handle,p=l.title,f=a.classes;return n==oe.Error?(r=f.errorPanelHeader,o=f.errorExpandIcon):n==oe.Warning?(r=f.warningPanelHeader,o=f.warningExpandIcon):n==oe.Notice&&(r=f.noticePanelHeader,o=f.noticeExpandIcon),ge(se,{style:{width:"100%"}},ge(pe,{expandIcon:ge(he.a,{className:o}),"aria-controls":"panel-".concat(u,"-content"),id:"panel-".concat(u,"-header"),className:r},ge(m.a,{component:"span"},u,". ",d," ",ge("strong",null,"(",s,")"))),ge(me,{style:{flexDirection:"column"}},ge(m.a,{gutterBottom:!0},"Info: ",ge("em",null,p)),i?ge(X.a,null,c.map((function(t){return ge(Z.a,{disableGutters:!0,key:t.section.num,component:"li"},e(t,n,a))}))):xe(function(e){var t=e.reduce((function(e,t){var n=t.message,a=t.selector,r=t.element,o=t.code,i=o.criterion,l=o.techniques,c=i.handle,s=i.num,u=e[n]||{criterion:"".concat(s,". ").concat(c),message:n,techniques:l,items:[],count:0};return u.items.push({selector:a,element:r}),u.count=u.items.length,e[n]=u,e}),{});return K()(t)}(c),a)))},ye=Object(I.a)((function(e){return Object(p.a)({messageListItem:{display:"flex",flexDirection:"column",alignItems:"flex-start"},errorPanelHeader:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},errorExpandIcon:{color:e.palette.error.contrastText},warningPanelHeader:{backgroundColor:e.palette.warning.main,color:e.palette.warning.contrastText},warningExpandIcon:{color:e.palette.warning.contrastText},noticePanelHeader:{backgroundColor:e.palette.info.main,color:e.palette.info.contrastText},noticeExpandIcon:{color:e.palette.info.contrastText},selectorContainer:{fontStyle:"italic",wordBreak:"break-all"}})}))((function(e){var t=e.issues,n=e.issueType,a=Object(d.a)(e,["issues","issueType"]),r=ve(t,(function(e){return e.code.principle})).map((function(e){return{section:e.section,hasSubgroup:!0,issues:ve(e.issues,(function(e){return e.code.guideline})),count:e.issues.length}}));return ge(X.a,null,r.map((function(e){return ge(Z.a,{disableGutters:!0,key:e.section.num,component:"li"},we(e,n,a))})))})),Ee=l.a.createElement,Oe=function(e){var t=e.children,n=e.currentId,a=e.id,r=Object(d.a)(e,["children","currentId","id"]);return Ee(f.a,Object(u.a)({component:"div",role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},r),t)},je=function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}},Ce=Object(I.a)((function(e){return Object(p.a)({tabsRoot:{flexGrow:1,backgroundColor:e.palette.background.paper},tabIndicator:{backgroundColor:e.palette.grey[500],minWidth:e.spacing(20)},errorTabHeader:{color:e.palette.error.main},warningTabHeader:{color:e.palette.warning.main},noticeTabHeader:{color:e.palette.info.main},tabPanelContainer:{padding:e.spacing(2)}})}))((function(e){var t=e.page,n=e.task,a=e.results,r=e.classes,o=a.map((function(e){return e.issue})),i=o.filter((function(e){return e.type==oe.Error})),c=o.filter((function(e){return e.type==oe.Warning})),d=o.filter((function(e){return e.type==oe.Notice})),p=new Date(1e3*n.completedDate),g=l.a.useState(oe.Error),v=Object(s.a)(g,2),x=v[0],w=v[1];return Ee("div",null,Ee(m.a,{variant:"h5",component:"h2"},t.title),Ee(m.a,{variant:"subtitle1",gutterBottom:!0},Ee(b.a,{href:t.url,target:"_blank"},t.url),Ee("br",null),Ee("em",null,"Scanned at ",p.toLocaleDateString()," ",p.toLocaleTimeString())),Ee("div",{className:r.tabsRoot},Ee(h.a,null,Ee(F,{classes:{indicator:r.tabIndicator},value:x,onChange:function(e,t){w(t)},"aria-label":"A11y results tabs by types"},Ee(V,Object(u.a)({className:r.errorTabHeader,label:"Errors (".concat(i.length,")"),value:oe.Error},je(oe.Error))),Ee(V,Object(u.a)({className:r.warningTabHeader,label:"Warnings (".concat(c.length,")"),value:oe.Warning},je(oe.Warning))),Ee(V,Object(u.a)({className:r.noticeTabHeader,label:"Notices (".concat(d.length,")"),value:oe.Notice},je(oe.Notice))))),Ee(f.a,{className:r.tabPanelContainer},Ee(Oe,{currentId:x,id:oe.Error},Ee(ye,{issues:i,issueType:oe.Error})),Ee(Oe,{currentId:x,id:oe.Warning},Ee(ye,{issues:c,issueType:oe.Warning})),Ee(Oe,{currentId:x,id:oe.Notice},Ee(ye,{issues:d,issueType:oe.Notice})))))})),Ne=n("2OCX"),ke=l.a.createElement,Ie=function(e){var t=e.config,n=e.page,a=e.task,r=e.results;return ke(c.a,{config:t,currentPageId:n._id},ke(Ce,{page:n,task:a,results:r}))};Ie.getInitialProps=function(e){var t,n,a,r,i,l,c,s,u;return o.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return t=e.query,n=t.configId,a=t.pageId,r=t.taskId,d.next=3,o.a.awrap(Object(Ne.b)(n));case 3:return i=d.sent,d.next=6,o.a.awrap(Object(Ne.d)(a,r));case 6:return l=d.sent,c=l.page,s=l.task,u=l.results,d.abrupt("return",{config:i,page:c,task:s,results:u});case 11:case"end":return d.stop()}}))};t.default=Ie},w7kp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[siteId]/[configId]/[pageId]/[taskId]",function(){return n("pKXL")}])}},[["w7kp",0,2,1,3,4,5,6,9,10]]]);