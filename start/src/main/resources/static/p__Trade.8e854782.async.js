(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KIUL:function(Ae,L,r){"use strict";r.r(L);var Be=r("bbsP"),q=r("/wGt"),Me=r("DYRE"),_=r("zeV3"),De=r("+L6B"),D=r("2/Rp"),Ve=r("giR+"),ee=r("fyUT"),I=r("tJVT"),y=r("k1fw"),ke=r("miYZ"),b=r("tsqr"),j=r("9og8"),xe=r("2qtc"),ae=r("kLXV"),te=r("WmNS"),m=r.n(te),re=r("xvlK"),T=r("q1tI"),t=r.n(T),w=r("9kvl"),ne=r("tMyG"),ue=r("jRje"),le=r("Qiat"),se=r("ovOe"),ie=r.n(se),O=r("jrin"),J=r("yj/a"),V=r("Qurx"),A=r("FJDo"),K=r("VMEa"),de=r("KxXC"),ce=r.n(de),oe=function(u){var l,a,o,n;return t.a.createElement(ce.a,{visible:u.createModalVisible,onVisibleChange:u.handleModalVisible,title:"\u521B\u5EFA\u8BA2\u5355",onFinish:u.onSubmit},t.a.createElement(K.a.Group,null,t.a.createElement(J.a,{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BC1\u5238\u5E02\u573A!"}],options:[{value:"sh",label:"\u4E0A\u4EA4\u6240"},{value:"sz",label:"\u6DF1\u4EA4\u6240"},{value:"fund",label:"\u573A\u5916\u57FA\u91D1"}],width:"sm",name:"market",label:"\u8BC1\u5238\u5E02\u573A"}),t.a.createElement(J.a,{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BC1\u5238\u7C7B\u578B!"}],options:[{value:"stock",label:"\u573A\u5185\u8BC1\u5238"},{value:"fund",label:"\u573A\u5916\u57FA\u91D1"}],width:"sm",name:"type",label:"\u8BC1\u5238\u7C7B\u578B"})),t.a.createElement(K.a.Group,null,t.a.createElement(V.a,{width:"sm",name:"code",label:"\u8BC1\u5238\u4EE3\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BC1\u5238\u4EE3\u7801!"}]}),t.a.createElement(V.a,{width:"sm",name:"name",label:"\u8BC1\u5238\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BC1\u5238\u540D\u79F0!"}]}),t.a.createElement(V.a,{width:"sm",name:"category",label:"\u5206\u7C7B",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BC1\u5238\u5206\u7C7B!"}]}),t.a.createElement(A.a,(l={label:"InputNumber",min:0,max:1e8,width:"sm",name:"increment"},Object(O.a)(l,"label","\u5B9A\u6295\u91D1\u989D"),Object(O.a)(l,"placeholder","\u6BCF\u5468\u4E70\u5165\u91D1\u989D(\u5143)"),Object(O.a)(l,"rules",[{required:!0,message:"\u8BF7\u8F93\u5165\u5B9A\u6295\u91D1\u989D!"}]),l)),t.a.createElement(A.a,(a={label:"InputNumber",min:0,max:10,width:"sm",name:"serviceFeeRate"},Object(O.a)(a,"label","\u8D39\u7387"),Object(O.a)(a,"placeholder","\u5982\u4E07\u5206\u4E4B\u4E00\uFF1A0.0001"),Object(O.a)(a,"rules",[{required:!0,message:"\u8BF7\u8F93\u5165\u8D39\u7387!"}]),a)),t.a.createElement(A.a,(o={label:"InputNumber",min:0,max:10,width:"sm",name:"minServiceFee"},Object(O.a)(o,"label","\u6700\u5C0F\u670D\u52A1\u8D39"),Object(O.a)(o,"placeholder","\u6700\u5C0F\u670D\u52A1\u8D39\uFF1A0.1\u5143"),Object(O.a)(o,"rules",[{required:!0,message:"\u8BF7\u8F93\u5165\u6700\u5C0F\u670D\u52A1\u8D39!"}]),o)),t.a.createElement(A.a,(n={label:"InputNumber",min:0,max:1e9,width:"sm",name:"minTradeAmount"},Object(O.a)(n,"label","\u6BCF\u624B\u80A1\u6570"),Object(O.a)(n,"placeholder","100/0.1"),Object(O.a)(n,"rules",[{required:!0,message:"\u8BF7\u8F93\u5165\u6BCF\u624B\u80A1\u6570!"}]),n))))},me=oe,C=r("t3Un");function fe(s){return k.apply(this,arguments)}function k(){return k=Object(j.a)(m.a.mark(function s(u){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(C.a)("/api/trade/conform",{params:u}));case 1:case"end":return a.stop()}},s)})),k.apply(this,arguments)}function he(s){return x.apply(this,arguments)}function x(){return x=Object(j.a)(m.a.mark(function s(u){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(C.a)("/api/trade/buy",{method:"POST",data:Object(y.a)(Object(y.a)({},u),{},{method:"post"})}));case 1:case"end":return a.stop()}},s)})),x.apply(this,arguments)}function ve(s){return N.apply(this,arguments)}function N(){return N=Object(j.a)(m.a.mark(function s(u){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(C.a)("/api/trade/update",{method:"POST",data:Object(y.a)(Object(y.a)({},u),{},{method:"post"})}));case 1:case"end":return a.stop()}},s)})),N.apply(this,arguments)}function pe(s){return R.apply(this,arguments)}function R(){return R=Object(j.a)(m.a.mark(function s(u){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(C.a)("/api/trade/settlement",{params:u}));case 1:case"end":return a.stop()}},s)})),R.apply(this,arguments)}function be(s){return P.apply(this,arguments)}function P(){return P=Object(j.a)(m.a.mark(function s(u){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(C.a)("/api/stock/add",{method:"POST",data:Object(y.a)(Object(y.a)({},u),{},{method:"update"})}));case 1:case"end":return a.stop()}},s)})),P.apply(this,arguments)}var ge=r("bRQS"),ye=ae.a.confirm,Oe=function(){var s=Object(j.a)(m.a.mark(function u(l){var a,o;return m.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return a=b.default.loading("\u521B\u5EFA\u4E2D..."),c.prev=1,c.next=4,be(Object(y.a)({},l));case 4:if(o=c.sent,a(),!o.success){c.next=11;break}return b.default.success("\u521B\u5EFA\u6210\u529F"),c.abrupt("return",!0);case 11:return b.default.error("\u521B\u5EFA\u5931\u8D25\uFF1A"+o.message),c.abrupt("return",!1);case 13:c.next=20;break;case 15:return c.prev=15,c.t0=c.catch(1),a(),b.default.error("\u521B\u5EFA\u5931\u8D25!"),c.abrupt("return",!1);case 20:case"end":return c.stop()}},u,null,[[1,15]])}));return function(l){return s.apply(this,arguments)}}(),je=function(){var s=Object(j.a)(m.a.mark(function u(l,a){var o,n;return m.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(o=b.default.loading("\u4E0B\u5355\u4E2D..."),l){f.next=3;break}return f.abrupt("return",!0);case 3:return f.prev=3,f.next=6,he({orders:l.map(function(F){return F})});case 6:return n=f.sent,o(),a(n),f.abrupt("return",n.success);case 12:return f.prev=12,f.t0=f.catch(3),o(),b.default.error("\u4E0B\u5355\u5931\u8D25"),f.abrupt("return",!1);case 17:case"end":return f.stop()}},u,null,[[3,12]])}));return function(l,a){return s.apply(this,arguments)}}(),Ne=function(){var s=Object(j.a)(m.a.mark(function u(l){var a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=b.default.loading("\u7ED3\u7B97\u4E2D..."),l){n.next=3;break}return n.abrupt("return",!0);case 3:return n.prev=3,n.next=6,pe({});case 6:return a(),b.default.success("\u7ED3\u7B97\u6210\u529F"),n.abrupt("return",!0);case 11:return n.prev=11,n.t0=n.catch(3),a(),b.default.error("\u7ED3\u7B97\u5931\u8D25"),n.abrupt("return",!1);case 16:case"end":return n.stop()}},u,null,[[3,11]])}));return function(l){return s.apply(this,arguments)}}(),Ee=function(){var s=Object(j.a)(m.a.mark(function u(l,a,o,n){var c,f;return m.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(c=b.default.loading("\u66F4\u65B0\u4E2D..."),l){h.next=3;break}return h.abrupt("return",!0);case 3:return h.prev=3,h.next=6,ve({order:l,dataIndex:a,newValue:o});case 6:return f=h.sent,c(),b.default.success("\u66F4\u65B0\u6210\u529F"),n(f),h.abrupt("return",f.success);case 13:return h.prev=13,h.t0=h.catch(3),c(),b.default.error("\u66F4\u65B0\u5931\u8D25"),h.abrupt("return",!1);case 18:case"end":return h.stop()}},u,null,[[3,13]])}));return function(l,a,o,n){return s.apply(this,arguments)}}(),Te=function(){var u=Object(T.useState)(!1),l=Object(I.a)(u,2),a=l[0],o=l[1],n=Object(T.useState)(!1),c=Object(I.a)(n,2),f=c[0],F=c[1],h=Object(T.useRef)(),Se=Object(T.useState)(),z=Object(I.a)(Se,2),Q=z[0],W=z[1],Ie=Object(T.useState)([]),Y=Object(I.a)(Ie,2),S=Y[0],X=Y[1],Ce=Object(T.useState)([]),Z=Object(I.a)(Ce,2),B=Z[0],U=Z[1],Fe=Object(w.f)(),M=function(e){e=e.toString().replace(/\$|\,/g,""),isNaN(e)&&(e="0");var i=e==(e=Math.abs(e));e=Math.floor(e*100+.50000000001);var d=e%100;e=Math.floor(e/100).toString(),d<10&&(d="0"+d);for(var v=0;v<Math.floor((e.length-(1+v))/3);v++)e=e.substring(0,e.length-(4*v+3))+","+e.substring(e.length-(4*v+3));return(i?"":"-")+e+"."+d},$=function(e,i){var d=i[e.dataIndex];return(B==null?void 0:B.index)===e.dataIndex&&B.outId===i.outId?t.a.createElement(_.b,null,t.a.createElement(ee.a,{min:0,defaultValue:d,onChange:function(g){d=g}}),t.a.createElement(D.a,{size:"small",shape:"circle",icon:t.a.createElement(ge.a,null),onClick:function(){Ee(i,e.dataIndex,d,function(g){if(g.success){var E,G;U([]),(E=h.current)===null||E===void 0||(G=E.reloadAndRest)===null||G===void 0||G.call(E)}})}})):e.valueType==="money"?t.a.createElement("a",{onClick:function(){return U(Object(y.a)(Object(y.a)({},i),{},{index:e.dataIndex}))}},"\xA5",M(d)):t.a.createElement("a",{onClick:function(){return U(Object(y.a)(Object(y.a)({},i),{},{index:e.dataIndex}))}},M(d))},we=[{title:"\u4EE3\u7801",dataIndex:"stockCode",tip:"\u80A1\u7968\u57FA\u91D1\u4EE3\u7801",render:function(e,i){return t.a.createElement("a",{onClick:function(){W(i),F(!0)}},e)}},{title:"\u5E02\u573A",sorter:!0,dataIndex:"stock&marketName",hideInSearch:!0,tip:"\u8BC1\u5238\u5E02\u573A"},{title:"\u7C7B\u578B",dataIndex:"stock&typeName",hideInSearch:!0,tip:"\u8BC1\u5238\u7C7B\u578B"},{title:"\u540D\u79F0",dataIndex:"stock&name",tip:"\u8BC1\u5238\u540D\u79F0"},{title:"\u64CD\u4F5C",dataIndex:"type",sorter:!0,hideInForm:!0,hideInSearch:!0,renderText:function(e){return e==="BUY"?"\u4E70\u5165":"\u5356\u51FA"}},{title:"\u5F53\u524D\u4EF7\u683C",dataIndex:"stock&currentPrice",hideInForm:!0,hideInSearch:!0,renderText:function(e){return t.a.createElement(t.a.Fragment,null,"\xA5",e)}},{title:"\u6301\u6709",hideInSearch:!0,children:[{title:"\u6295\u5165\u91D1\u989D",sorter:!0,dataIndex:"stock&totalFee",hideInSearch:!0,valueType:"money",render:function(e,i,d,v,g){return $(g,i)}},{title:"\u6570\u91CF",dataIndex:"stock&amount",sorter:!0,hideInSearch:!0,valueType:"digit",render:function(e,i,d,v,g){return $(g,i)}},{title:"\u5F53\u524D\u4EF7\u503C",dataIndex:"stock&currentValue",hideInForm:!0,hideInSearch:!0,valueType:"money"},{title:"\u76C8\u5229",dataIndex:"stock&totalFee",hideInForm:!0,hideInSearch:!0,render:function(e,i,d,v,g){var E=i["stock&currentValue"]-e;return E>=0?t.a.createElement(t.a.Fragment,null,t.a.createElement("span",{style:{color:"red"}},"\xA5",M(E))):t.a.createElement(t.a.Fragment,null,t.a.createElement("span",{style:{color:"#52c41a"}},"\xA5",M(E)))}}]},{title:"\u5B9A\u6295",hideInSearch:!0,children:[{title:"\u6570\u91CF",dataIndex:"tradeAmount",sorter:!0,hideInSearch:!0,valueType:"digit",tip:"\u672C\u6B21\u5B9A\u6295\u4E70\u5165\u6570\u91CF(\u80A1)"},{title:"\u91D1\u989D",dataIndex:"tradeFee",sorter:!0,hideInSearch:!0,valueType:"money",tip:"\u672C\u6B21\u5B9A\u6295\u9884\u8BA1\u4E70\u5165\u91D1\u989D(\u5143)"},{title:"\u8D39\u7528",dataIndex:"tradeServiceFee",sorter:!0,hideInSearch:!0,valueType:"money",tip:"\u672C\u6B21\u5B9A\u6295\u9884\u8BA1\u4E70\u5165\u8D39\u7528(\u5143)"}]}],H;return t.a.createElement(ne.a,null,t.a.createElement(le.a,{bordered:!0,pagination:!1,headerTitle:Fe.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:h,rowKey:"outId",search:{labelWidth:120},toolBarRender:function(){return[t.a.createElement(D.a,{type:"primary",key:"primary",onClick:function(){o(!0)}},t.a.createElement(re.a,null)," ",t.a.createElement(w.a,{id:"pages.searchTable.new",defaultMessage:"New"}))]},request:function(e,i,d){return fe(Object(y.a)(Object(y.a)({},e),{},{sorter:i,filter:d}))},columns:we,rowSelection:{onChange:function(e,i){X(i)}}}),(S==null?void 0:S.length)>0&&t.a.createElement(ue.a,{extra:t.a.createElement("div",null,t.a.createElement(w.a,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",t.a.createElement("a",{style:{fontWeight:600}},S.length)," ",t.a.createElement(w.a,{id:"pages.searchTable.item",defaultMessage:"\u9879"}),"\xA0\xA0",t.a.createElement("span",null," \u603B\u6295\u5165\u91D1\u989D\uFF1A",H=S.reduce(function(p,e){return p+parseFloat(e.totalFee)},0),"\u5143(",H/1e4,"\u4E07)"))},t.a.createElement(D.a,{onClick:function(){return ye({title:"\u786E\u8BA4\u4E0B\u5355",content:"are you ok ?",onOk:function(){je(S,function(i){if(i){var d,v;b.default.success("\u4E0B\u5355\u6210\u529F"),X([]),(d=h.current)===null||d===void 0||(v=d.reloadAndRest)===null||v===void 0||v.call(d)}else b.default.error("\u4E0B\u5355\u5931\u8D25\uFF1A"+i.message)})},onCancel:function(){console.log("Cancel")}})}},"\u4E0B\u5355")),t.a.createElement(me,{createModalVisible:a,handleModalVisible:o,onSubmit:function(){var p=Object(j.a)(m.a.mark(function e(i){var d;return m.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Oe(i);case 2:d=g.sent,d&&(o(!1),h.current&&h.current.reload());case 4:case"end":return g.stop()}},e)}));return function(e){return p.apply(this,arguments)}}()}),t.a.createElement(q.a,{width:600,visible:f,onClose:function(){W(void 0),F(!1)},closable:!1},t.a.createElement(ie.a,{name:"data",displayDataTypes:!1,src:Q||{}})))},Re=L.default=Te}}]);
