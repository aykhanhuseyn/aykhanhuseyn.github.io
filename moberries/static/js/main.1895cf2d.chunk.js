(this.webpackJsonpmoberries=this.webpackJsonpmoberries||[]).push([[0],{104:function(e,t,n){e.exports={_root:"footer__root__ka5l_",_container:"footer__container__2oPJl",_root__text:"footer__root__text__3J08L"}},11:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return p})),n.d(t,"u",(function(){return m})),n.d(t,"t",(function(){return _})),n.d(t,"q",(function(){return O})),n.d(t,"s",(function(){return v})),n.d(t,"p",(function(){return h})),n.d(t,"r",(function(){return x})),n.d(t,"o",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"g",(function(){return N})),n.d(t,"n",(function(){return C})),n.d(t,"m",(function(){return E})),n.d(t,"j",(function(){return T})),n.d(t,"f",(function(){return w})),n.d(t,"k",(function(){return I})),n.d(t,"i",(function(){return q})),n.d(t,"l",(function(){return P})),n.d(t,"e",(function(){return V})),n.d(t,"h",(function(){return k}));var r=n(21),a=n(81),s=n(31),c=n.n(s),i=n(45),o=n(74),u=n(119),l=n(120),d=n(121),b={subscription_plans:[],tabs:{enabledTabs:["parameters","creditcard"],active:"parameters"},form:{parameters:{duration:12,volume:5,upfront:!1},card:{pan:null,exp:null,cvv:null},confirm:{email:null}},request:{status:"idle",message:null}},p=Object(o.b)("subscriptions/fetchPrices",function(){var t=Object(i.a)(c.a.mark((function t(n,r){var a,s,i,o,b;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.rejectWithValue,t.prev=1,t.next=4,Object(d.a)(u.a.get,[l.SUBSCRIPTION.PRICES]);case 4:return s=t.sent,i=s.subscription_plans,t.abrupt("return",i);case 9:return t.prev=9,t.t0=t.catch(1),"development"===(null===(o=e)||void 0===o||null===(b=Object({NODE_ENV:"production",PUBLIC_URL:"/moberries",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}))||void 0===b?void 0:b.NODE_ENV)&&console.log(t.t0),t.abrupt("return",a(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),m=Object(o.b)("subscriptions/submitSubscription",function(){var t=Object(i.a)(c.a.mark((function t(n,r){var a,s,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.rejectWithValue,t.prev=1,t.next=4,Object(d.a)(u.a.post,[l.SUBSCRIPTION.SUBMIT,n]);case 4:return s=t.sent,t.abrupt("return",s);case 9:return t.prev=9,t.t0=t.catch(1),"development"===(null===(i=e)||void 0===i||null===(o=Object({NODE_ENV:"production",PUBLIC_URL:"/moberries",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}))||void 0===o?void 0:o.NODE_ENV)&&console.log(t.t0),t.abrupt("return",a(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(o.c)({name:"subscriptions",initialState:b,reducers:{setSubscriptions:function(e,t){var n=t.payload;e.subscription_plans=n},setLoading:function(e,t){var n=t.payload;e.request.status=n},setError:function(e,t){var n=t.payload;e.request.message={title:null===n||void 0===n?void 0:n.title,description:null===n||void 0===n?void 0:n.description}},setDuration:function(e,t){var n=t.payload;e.form.parameters.duration=n},setVolume:function(e,t){var n=t.payload;e.form.parameters.volume=n},setUpfront:function(e,t){var n=t.payload;e.form.parameters.upfront=n},setCard:function(e,t){var n=t.payload;e.form.card={pan:(null===n||void 0===n?void 0:n.pan)||null,cvv:(null===n||void 0===n?void 0:n.cvv)||null,exp:(null===n||void 0===n?void 0:n.exp)||null}},setEmail:function(e,t){var n=t.payload;e.form.confirm.email=n},setActiveTab:function(e,t){var n=t.payload;e.tabs.active=n},enableTab:function(e,t){var n=t.payload;e.tabs.enabledTabs=[].concat(Object(a.a)(e.tabs.enabledTabs),[n])},disableTab:function(e,t){var n=t.payload;e.tabs.enabledTabs=Object(a.a)(e.tabs.enabledTabs.filter((function(e){return e!==n})))},resetState:function(e){Object(r.a)({},b)}},extraReducers:{"subscriptions/fetchPrices/pending":function(e){return Object(r.a)(Object(r.a)({},e),{},{request:Object(r.a)(Object(r.a)({},e.request),{},{status:"loading"})})},"subscriptions/fetchPrices/fulfilled":function(e,t){var n=t.payload;return Object(r.a)(Object(r.a)({},e),{},{subscription_plans:n,request:{status:"idle",message:null}})},"subscriptions/fetchPrices/rejected":function(e,t){return Object(r.a)(Object(r.a)({},e),{},{request:{status:"error",message:{title:t.payload.title,description:t.payload.description}}})},"subscriptions/submitSubscription/pending":function(e){return Object(r.a)(Object(r.a)({},e),{},{request:Object(r.a)(Object(r.a)({},e.request),{},{status:"loading"})})},"subscriptions/submitSubscription/fulfilled":function(e){return Object(r.a)(Object(r.a)({},e),{},{request:{status:"idle",message:null}})},"subscriptions/submitSubscription/rejected":function(e,t){var n=t.payload;return Object(r.a)(Object(r.a)({},e),{},{request:{status:"error",message:{title:n.error,description:n.description}}})}}}),f=j.actions,_=(f.setLoading,f.setError,f.setSubscriptions,f.setVolume),O=f.setDuration,v=f.setUpfront,h=f.setCard,x=f.setEmail,g=f.setActiveTab,y=f.enableTab,S=f.disableTab,N=(f.resetState,function(e){return e.subscriptions.form.parameters.duration}),C=function(e){return e.subscriptions.form.parameters.volume},E=function(e){return e.subscriptions.form.parameters.upfront},T=function(e){return e.subscriptions.form.parameters},w=function(e){return e.subscriptions.form.card},I=function(e){return e.subscriptions.request.status},q=function(e){return e.subscriptions.request.message},P=function(e){return e.subscriptions.subscription_plans},V=function(e){return e.subscriptions.tabs.active},k=function(e){return e.subscriptions.tabs.enabledTabs};t.a=j.reducer}).call(this,n(107))},119:function(e,t,n){"use strict";var r=n(90),a=n.n(r).a.create({headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});t.a=a},120:function(e,t){e.exports={SUBSCRIPTION:{PRICES:"https://cloud-storage-prices-moberries.herokuapp.com/prices",SUBMIT:"https://httpbin.org/post"}}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(31),a=n.n(r),s=n(81),c=n(45),i=n(90),o=n.n(i);function u(e,t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function e(t,n){var r,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(i.length>2&&void 0!==i[2])||i[2],e.abrupt("return",new Promise(function(){var e=Object(c.a)(a.a.mark((function e(c,i){var u,l,d,b,p,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.apply(void 0,Object(s.a)(n));case 3:return u=e.sent,l=u.data,e.abrupt("return",c(l));case 8:if(e.prev=8,e.t0=e.catch(0),!(r&&o.a.isAxiosError(e.t0)&&e.t0.response)){e.next=14;break}return p="Error "+e.t0.response.status,m=e.t0.response.data.message,e.abrupt("return",Promise.reject({error:p,message:m}));case 14:return p=(null===e.t0||void 0===e.t0||null===(d=e.t0.request)||void 0===d?void 0:d.message)||"Internal Error",m=(null===(b=e.t0.response)||void 0===b?void 0:b.message)||"Unexpected error occured. Please, try again later.",e.abrupt("return",i({error:p,message:m}));case 17:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},122:function(e,t,n){e.exports={_root:"title__root__1z06-",_text:"title__text__3iIhg"}},342:function(e,t,n){},343:function(e,t,n){},345:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(28),c=n.n(s),i=n(19),o=n(74),u=n(11),l=Object(o.a)({reducer:{subscriptions:u.a}}),d=n(173),b=n(24),p=n.p+"static/media/logo.333d2cc5.svg",m=n(75),j=n.n(m),f=n(6),_=function(){return Object(f.jsx)("header",{className:j.a._root,children:Object(f.jsxs)("div",{className:j.a._container,children:[Object(f.jsx)("div",{className:j.a._root__logo,children:Object(f.jsx)("img",{className:j.a._root__logo__img,src:p,alt:"logo"})}),Object(f.jsx)("h3",{className:j.a._root__company,children:"Moberries"})]})})},O=n(55),v={VOLUMES:[{value:5,label:"5 GB"},{value:10,label:"10 GB"},{value:50,label:"50 GB"}],DURATIONS:[{value:3,label:"3 month"},{value:6,label:"6 month"},{value:12,label:"12 month"}]},h=n(46),x=n.n(h),g=function(){var e,t,n=Object(i.c)(u.l),a=Object(i.c)(u.j),s=Object(r.useState)(0),c=Object(O.a)(s,2),o=c[0],l=c[1];return Object(r.useEffect)((function(){var e,t=((null===(e=n.find((function(e){return e.duration_months===a.duration})))||void 0===e?void 0:e.price_usd_per_gb)||0)*a.volume*(a.upfront?.9:1);l(t)}),[n,a]),Object(f.jsxs)("div",{className:x.a._container,children:[Object(f.jsxs)("p",{className:x.a._text,children:["Volume: ",Object(f.jsx)("span",{className:x.a._text__value,children:null===(e=v.VOLUMES.find((function(e){return e.value===a.volume})))||void 0===e?void 0:e.label})]}),Object(f.jsxs)("p",{className:x.a._text,children:["Duration with month: ",Object(f.jsx)("span",{className:x.a._text__value,children:null===(t=v.DURATIONS.find((function(e){return e.value===a.duration})))||void 0===t?void 0:t.label})]}),Object(f.jsxs)("p",{className:x.a._text,children:["Amount: ",Object(f.jsx)("span",{className:x.a._text__value,children:a.upfront?"$".concat(o*a.duration):"$".concat(o," / per month")}),Object(f.jsx)("span",{children:a.upfront?"  (10% discount applied)":"  (Total: $".concat(o*a.duration,")")})]})]})},y=n(104),S=n.n(y),N=function(){var e=Object(i.c)(u.e);return Object(f.jsxs)("footer",{className:S.a._root,style:"confirm"===e?{height:"50px"}:{},children:["confirm"!==e&&Object(f.jsx)(g,{}),Object(f.jsx)("div",{className:S.a._container,children:Object(f.jsxs)("span",{className:S.a._root__text,children:["Aniverse \xa9 ",(new Date).getFullYear()," Created by Aykhan"]})})]})},C=function(e){var t=e.children,n=Object(i.c)(u.e);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_,{}),Object(f.jsx)("main",{style:"confirm"===n?{minHeight:"calc(100vh - 120px)"}:{},children:Object(f.jsx)("div",{className:"container",children:t})}),Object(f.jsx)(N,{})]})},E=n(125),T=n.n(E),w=n(21),I=n(177),q=n(122),P=n.n(q),V=["element","size","text","props","children","className"],k=["h1","h2","h3","h4","h5","h6","p","span","a"],D=["sm","md","lg","xl","xxl"],R=function(e){var t=e.element,n=void 0===t?"h1":t,a=e.size,s=void 0===a?"xl":a,c=e.text,i=void 0===c?"":c,o=e.props,u=void 0===o?{}:o,l=e.children,d=e.className,b=void 0===d?"":d,p=Object(I.a)(e,V);if(!k.includes(n))throw new Error("element should be one of: ".concat(k.toString()));if(!D.includes(s))throw new Error("size should be one of: ".concat(D.toString()));return u.className=[P.a._text,u.className].join(" "),u["data-size"]=s,"a"===n&&(u=Object(w.a)({href:"javascript:void(0)"},u)),Object(f.jsxs)("div",Object(w.a)(Object(w.a)({className:[P.a._root,b].join(" ")},p),{},{children:[Object(r.createElement)(n,u,i),l]}))},A=n(172),U=n(347),X=n(349),z=n(350),F=n(174),B=n(51),L=n.n(B),M=function(e){var t=e.label,n=e.selected,r=void 0!==n&&n;return Object(f.jsx)("div",{className:L.a[r?"_volume--selected":"_volume"],children:Object(f.jsx)("span",{className:L.a._volume__value,children:t})})},H=function(){var e=Object(i.b)(),t=v.VOLUMES,n=Object(i.c)(u.n),r=v.DURATIONS,a=Object(i.c)(u.g),s=Object(i.c)(u.m),c={display:"grid",gridTemplateColumns:"minmax(110px, max-content) auto",gap:"10px",marginBottom:"30px"};return Object(f.jsxs)(U.a,{onFinish:function(t){e(Object(u.o)("creditcard"))},children:[Object(f.jsx)(R,{className:L.a._title,text:"Select subscription parameters.",element:"h4",size:"md",style:{margin:"10px 0 20px 20px",justifyContent:"center"}}),Object(f.jsx)(U.a.Item,{label:"Volumes",name:"volume",style:c,children:Object(f.jsx)(X.a.Group,{className:L.a._radio,options:null===t||void 0===t?void 0:t.map((function(e){return{label:Object(f.jsx)(M,{value:e.value,label:e.label,selected:e.value===n}),value:e.value}})),onChange:function(t){var n,r=t.target.value;return n=r,void e(Object(u.t)(+n))},optionType:"button",style:{marginBottom:"10px"}})}),Object(f.jsx)(U.a.Item,{label:"Durations",name:"duration",style:c,children:Object(f.jsx)(X.a.Group,{className:L.a._radio,options:null===r||void 0===r?void 0:r.map((function(e){return{label:Object(f.jsx)(M,{value:e.value,label:e.label,selected:e.value===a}),value:e.value}})),onChange:function(t){var n,r=t.target.value;return n=r,void e(Object(u.q)(+n))},optionType:"button"})}),Object(f.jsx)(U.a.Item,{label:"Upfront payment: ",name:"upfront",initialValue:s,help:"You will get 10% discount for upfront payment.",style:c,children:Object(f.jsx)(z.a,{checkedChildren:"Yes",unCheckedChildren:"No",onChange:function(t){return n=t,e(Object(u.s)(n)),void A.a[n?"success":"error"]({message:"Discount ".concat(n?"applied":"disabled",".")});var n},checked:s})}),Object(f.jsx)(U.a.Item,{children:Object(f.jsx)(F.a,{type:"primary",htmlType:"submit",size:"large",style:{width:"100%"},children:"Next"})})]})},W=n(31),K=n.n(W),G=n(45),Y=n(348),J=n(124),$=n.n(J),Q=n(171),Z=n.n(Q),ee=function(){var e=Object(i.b)(),t=U.a.useForm(),n=Object(O.a)(t,1)[0],r=function(){var t=Object(G.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,e(Object(u.p)(n));case 3:return t.next=5,e(Object(u.c)("confirm"));case 5:e(Object(u.o)("confirm"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(G.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.resetFields(),t.next=3,e(Object(u.b)("confirm"));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)(U.a,{labelCol:{span:4},wrapperCol:{span:16},form:n,name:"credit-card",onFinish:r,children:[Object(f.jsx)(R,{className:L.a._title,text:"Add payment details.",element:"h4",size:"md",style:{margin:"10px 0 20px 20px",justifyContent:"center"}}),Object(f.jsx)(U.a.Item,{name:"pan",label:"Card Number",rules:[{required:!0,message:"Card Number is required!"},{len:19,message:"Card have to contain 16 symbols."}],children:Object(f.jsx)($.a,{className:"ant-input",placeholder:"XXXX XXXX XXXX XXXX",options:{creditCard:!0},onChange:function(e){}})}),Object(f.jsx)(U.a.Item,{name:"exp",label:"Expiry date",rules:[{required:!0,message:"Expitaion deta is required!"}],children:Object(f.jsx)($.a,{className:"ant-input",placeholder:"MM / YY",options:{date:!0,dateMin:Z()().format("YY-MM"),delimiter:" / ",datePattern:["m","y"]},onChange:function(e){}})}),Object(f.jsx)(U.a.Item,{name:"cvv",label:"CVV",rules:[{required:!0,message:"CVV is required!"},{pattern:new RegExp(/\d{3,4}/g),message:"Value is not valid CVV!"},{max:4,message:"CVV can not be longer than 4 chars!"},{min:3,message:"CVV can not be less than 3 chars!"}],children:Object(f.jsx)(Y.a,{placeholder:"XXX",type:"number"})}),Object(f.jsxs)(U.a.Item,{wrapperCol:{offset:4,span:16},children:[Object(f.jsx)(F.a,{type:"primary",htmlType:"submit",size:"large",style:{marginRight:"4%",width:"48%"},children:"Submit"}),Object(f.jsx)(F.a,{htmlType:"button",onClick:a,size:"large",style:{width:"48%"},children:"Reset"})]})]})},te=function(){var e=Object(i.b)(),t=Object(i.c)(u.j),n=Object(i.c)(u.f),a=Object(i.c)(u.k),s=Object(i.c)(u.i),c=Object(r.useState)(!1),o=Object(O.a)(c,2),l=o[0],d=o[1],b=function(){var r=Object(G.a)(K.a.mark((function r(a){return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,e(Object(u.r)(a.email));case 3:e(Object(u.u)(Object(w.a)(Object(w.a)(Object(w.a)({},t),n),{},{email:a.email}))),d(!0);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(r.useEffect)((function(){l&&"loading"!==a&&(d(!1),"error"===a?A.a.error({message:s}):(A.a.success({message:"Payment successful."}),e(Object(u.o)("parameters"))))}),[l,a,s,e]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(R,{className:x.a._title,text:"Add your email to confirm payment.",element:"h4",size:"md"}),Object(f.jsx)(g,{}),Object(f.jsx)(U.a,{layout:"vertical",onFinish:b,children:Object(f.jsx)(U.a.Item,{className:x.a._form,style:{margin:"0 auto"},label:"Email",name:"email",rules:[{type:"email",message:"Email format is not correct!"},{required:!0,message:"Email is required!"}],children:Object(f.jsx)(U.a.Item,{children:Object(f.jsxs)(Y.a.Group,{compact:!0,style:{display:"flex"},children:[Object(f.jsx)(Y.a,{}),Object(f.jsx)(F.a,{type:"primary",htmlType:"submit",style:{height:"50px"},children:"Submit"})]})})})})]})},ne=[{tab:Object(f.jsx)(R,{text:"Select subscription parameters",element:"span",size:"sm",style:{lineHeight:1,margin:0}}),key:"parameters",content:Object(f.jsx)(H,{})},{tab:Object(f.jsx)(R,{text:"Payment data",element:"span",size:"sm",style:{lineHeight:1,margin:0}}),key:"creditcard",content:Object(f.jsx)(ee,{})},{tab:Object(f.jsx)(R,{text:"Confirmation",element:"span",size:"sm",style:{lineHeight:1,margin:0}}),key:"confirm",content:Object(f.jsx)(te,{})}],re=function(){var e=Object(i.b)(),t=Object(r.useState)("top"),n=Object(O.a)(t,2),a=n[0],s=n[1],c=Object(i.c)(u.h),o=Object(i.c)(u.e);return Object(r.useEffect)((function(){function e(){"left"!==a&&window.innerWidth>996&&s("left"),"top"!==a&&window.innerWidth<=996&&s("top")}return window.addEventListener("resize",e),document.removeEventListener("resize",e)}),[a]),Object(f.jsx)(T.a,{tabPosition:a,activeKey:o,onChange:function(t){e(Object(u.o)(t))},children:ne.map((function(e,t){return Object(f.jsx)(T.a.TabPane,{tab:e.tab,disabled:!c.includes(e.key),children:e.content},e.key||t)}))})},ae=function(){var e=Object(i.b)();return Object(r.useEffect)((function(){e(Object(u.d)())})),Object(f.jsx)(re,{})},se=function(){return Object(f.jsx)(d.a,{basename:"/moberries",children:Object(f.jsx)(C,{children:Object(f.jsx)(b.c,{children:Object(f.jsx)(b.a,{path:"/",component:ae})})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,351)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};n(339),n(340),n(341),n(342),n(343);c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{store:l,children:Object(f.jsx)(se,{})})}),document.getElementById("root")),ce()},46:function(e,t,n){e.exports={_container:"total__container__2GmMQ",_text:"total__text__FW6mD",_text__value:"total__text__value__2mc2q",_title:"total__title__3HjRI",_form:"total__form__2HtZ2"}},51:function(e,t,n){e.exports={_volume:"payment__volume__2gOR0","_volume--selected":"payment__volume--selected__2QzyF",_title:"payment__title__2quBx",_volume__value:"payment__volume__value__lkR4x",_root:"payment__root__2zxyq",_radio:"payment__radio__nSxbe"}},75:function(e,t,n){e.exports={_root:"header__root__1IKDZ",_container:"header__container__2CPbD",_root__logo:"header__root__logo__1K937",_root__logo__img:"header__root__logo__img__1ooya",_root__company:"header__root__company__nWANV"}}},[[345,1,2]]]);
//# sourceMappingURL=main.1895cf2d.chunk.js.map