(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2Fcx":function(h,y,e){h.exports={container:"container___1Rq3A"}},bsDN:function(h,y,e){h.exports={menu:"menu___3fMWW",right:"right___2CMz5",action:"action___3ut1O",search:"search___3FPts",account:"account___1r_Ku",avatar:"avatar___1Rx79",dark:"dark___1zu9O"}},j5Qg:function(h,y,e){h.exports={headerSearch:"headerSearch___RN1il",input:"input___3Vzpl",show:"show___VZRKu"}},maEh:function(h,y,e){"use strict";e.r(y);var x=e("0Owb"),F=e("oBTY"),B=e("k1fw"),Me=e("J+/v"),G=e("MoRW"),be=e("+L6B"),z=e("2/Rp"),I=e("9W6o"),K=e("Hx5s"),O=e("q1tI"),a=e.n(O),R=e("55Ip"),g=e("9kvl"),W=e("oN5p"),L=e("HZnN"),He=e("+BJd"),Ae=e("5Dmo"),J=e("3S7+"),Q=e("Lyp1"),Te=e("T2oS"),$=e("W9HT"),xe=e("Telt"),Y=e("Tckk"),Be=e("lUTK"),C=e("BvKs"),Z=e("fWQN"),X=e("mtLc"),k=e("yKVA"),w=e("879j"),q=e("cJ7L"),_=e("eFNv"),ee=e("aIfO"),Le=e("qVdP"),ae=e("jsC+"),V=e("PpiC"),te=e("TSYQ"),S=e.n(te),ne=e("2Fcx"),re=e.n(ne),oe=function(t){var n=t.overlayClassName,r=Object(V.a)(t,["overlayClassName"]);return a.a.createElement(ae.a,Object(x.a)({overlayClassName:S()(re.a.container,n)},r))},le=oe,se=e("bsDN"),c=e.n(se),ce=function(s){Object(k.a)(n,s);var t=Object(w.a)(n);function n(){var r;Object(Z.a)(this,n);for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];return r=t.call.apply(t,[this].concat(m)),r.onMenuClick=function(i){var d=i.key;if(d==="logout"){var f=r.props.dispatch;f&&f({type:"login/logout"});return}g.d.push("/account/".concat(d))},r}return Object(X.a)(n,[{key:"render",value:function(){var l=this.props,m=l.currentUser,u=m===void 0?{avatar:"",name:""}:m,i=l.menu,d=a.a.createElement(C.a,{className:c.a.menu,selectedKeys:[],onClick:this.onMenuClick},i&&a.a.createElement(C.a.Item,{key:"center"},a.a.createElement(q.a,null),"\u4E2A\u4EBA\u4E2D\u5FC3"),i&&a.a.createElement(C.a.Item,{key:"settings"},a.a.createElement(_.a,null),"\u4E2A\u4EBA\u8BBE\u7F6E"),i&&a.a.createElement(C.a.Divider,null),a.a.createElement(C.a.Item,{key:"logout"},a.a.createElement(ee.a,null),"\u9000\u51FA\u767B\u5F55"));return u&&u.name?a.a.createElement(le,{overlay:d},a.a.createElement("span",{className:"".concat(c.a.action," ").concat(c.a.account)},a.a.createElement(Y.a,{size:"small",className:c.a.avatar,src:u.avatar,alt:"avatar"}),a.a.createElement("span",{className:"".concat(c.a.name," anticon")},u.nameNick))):a.a.createElement("span",{className:"".concat(c.a.action," ").concat(c.a.account)},a.a.createElement($.a,{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),n}(a.a.Component),ue=Object(g.c)(function(s){var t=s.user;return{currentUser:t.currentUser}})(ce),Ve=e("O3gP"),ie=e("lrIw"),Ue=e("5NDa"),de=e("5rEg"),me=e("jrin"),U=e("tJVT"),ve=e("l+S1"),P=e("6cGi"),he=e("j5Qg"),M=e.n(he),fe=function(t){var n=t.className,r=t.defaultValue,l=t.onVisibleChange,m=t.placeholder,u=t.open,i=t.defaultOpen,d=Object(V.a)(t,["className","defaultValue","onVisibleChange","placeholder","open","defaultOpen"]),f=Object(O.useRef)(null),b=Object(P.a)(r,{value:t.value,onChange:t.onChange}),N=Object(U.a)(b,2),j=N[0],v=N[1],o=Object(P.a)(i!=null?i:!1,{value:t.open,onChange:l}),p=Object(U.a)(o,2),E=p[0],D=p[1],H=S()(M.a.input,Object(me.a)({},M.a.show,E));return a.a.createElement("div",{className:S()(n,M.a.headerSearch),onClick:function(){D(!0),E&&f.current&&f.current.focus()},onTransitionEnd:function(T){var Se=T.propertyName;Se==="width"&&!E&&l&&l(E)}},a.a.createElement(ve.a,{key:"Icon",style:{cursor:"pointer"}}),a.a.createElement(ie.a,{key:"AutoComplete",className:H,value:j,style:{height:28,marginTop:-6},options:d.options,onChange:v},a.a.createElement(de.a,{ref:f,defaultValue:r,"aria-label":m,placeholder:m,onKeyDown:function(T){T.key==="Enter"&&d.onSearch&&d.onSearch(j)},onBlur:function(){D(!1)}})))},ge=fe,Pe={dev:"orange",test:"green",pre:"#87d068"},ye=function(t){var n=t.theme,r=t.layout,l=c.a.right;return n==="dark"&&r==="top"&&(l="".concat(c.a.right,"  ").concat(c.a.dark)),a.a.createElement("div",{className:l},a.a.createElement(ge,{className:"".concat(c.a.action," ").concat(c.a.search),placeholder:"Site Search",defaultValue:"umi ui",options:[{label:a.a.createElement("a",{href:"https://umijs.org/zh/guide/umi-ui.html"},"umi ui"),value:"umi ui"},{label:a.a.createElement("a",{href:"next.ant.design"},"Ant Design"),value:"Ant Design"},{label:a.a.createElement("a",{href:"https://protable.ant.design/"},"Pro Table"),value:"Pro Table"},{label:a.a.createElement("a",{href:"https://prolayout.ant.design/"},"Pro Layout"),value:"Pro Layout"}]}),a.a.createElement(J.a,{title:"Use documentation"},a.a.createElement("a",{style:{color:"inherit"},target:"_blank",href:"https://pro.ant.design/docs/getting-started",rel:"noopener noreferrer",className:c.a.action},a.a.createElement(Q.a,null))),a.a.createElement(ue,null),!1,a.a.createElement(g.b,{className:c.a.action}))},pe=Object(g.c)(function(s){var t=s.settings;return{theme:t.navTheme,layout:t.layout}})(ye),Ee=e("GOef"),Oe=e("mxmt"),Ce=e.n(Oe),je=a.a.createElement(G.a,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:a.a.createElement(z.a,{type:"primary"},a.a.createElement(R.a,{to:"/user/login"},"Go Login"))}),Ne=function s(t){return t.map(function(n){var r=Object(B.a)(Object(B.a)({},n),{},{children:n.children?s(n.children):void 0});return L.a.check(n.authority,r,null)})},De=a.a.createElement(I.a,{copyright:"".concat(new Date().getFullYear()," Produced by Ant Group Experience Technology Department"),links:[{key:"Ant Design Pro",title:"\u57FA\u91D1\u5B9A\u6295",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:a.a.createElement(W.a,null),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}]}),Re=function(t){var n=t.dispatch,r=t.children,l=t.settings,m=t.currentUser,u=t.location,i=u===void 0?{pathname:"/"}:u,d=Object(O.useRef)([]);Object(O.useEffect)(function(){n&&n({type:"user/fetchCurrent"})},[]);var f=function(o){n&&n({type:"global/changeLayoutCollapsed",payload:o})},b=Object(O.useMemo)(function(){return Object(Ee.a)(i.pathname||"/",d.current).pop()||{authority:void 0}},[i.pathname]),N=Object(g.f)(),j=N.formatMessage;return a.a.createElement(K.a,Object(x.a)({logo:Ce.a,formatMessage:j},t,l,{onCollapse:f,onMenuHeaderClick:function(){return g.d.push("/")},menuItemRender:function(o,p){return o.isUrl||!o.path||i.pathname===o.path?p:a.a.createElement(R.a,{to:o.path},p)},breadcrumbRender:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return[{path:"/",breadcrumbName:j({id:"menu.home"})}].concat(Object(F.a)(o))},itemRender:function(o,p,E,D){var H=E.indexOf(o)===0;return H?a.a.createElement(R.a,{to:D.join("/")},o.breadcrumbName):a.a.createElement("span",null,o.breadcrumbName)},footerRender:function(){return l.footerRender||l.footerRender===void 0?De:null},menuDataRender:Ne,rightContentRender:function(){return a.a.createElement(pe,null)},postMenuData:function(o){return d.current=o||[],o||[]},waterMarkProps:{content:m.nameNick,fontColor:"rgba(24,144,255,0.15)"}}),a.a.createElement(L.a,{authority:b.authority,noMatch:je},r))},Fe=y.default=Object(g.c)(function(s){var t=s.global,n=s.settings,r=s.user;return{collapsed:t.collapsed,settings:n,currentUser:r.currentUser}})(Re)},mxmt:function(h,y,e){h.exports=e.p+"static/logo.f0355d39.svg"}}]);
