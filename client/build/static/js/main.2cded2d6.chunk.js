(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(45),s=a.n(r),l=a(5),i=a(10),o=a(3),u=Object(n.createContext)({theme:localStorage.getItem("theme")||"theme-auto",setTheme:function(){}}),b=a(4),d=a.n(b),j=a(6),m=a(0);var h=function(e){var t=e.linkName,a=e.link;return Object(m.jsx)("li",{className:"nav__item",children:Object(m.jsx)(i.b,{className:"nav__link",to:a,children:t})})},p=a(23),v=a(12),f=a.n(v),O=c.a.createContext(null),x=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(l.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),u=o[0],b=o[1],h=Object(n.useState)(localStorage.getItem("refresh")||""),v=Object(l.a)(h,2),x=v[0],g=v[1],w=Object(n.useState)(localStorage.getItem("access")||""),k=Object(l.a)(w,2),A=k[0],N=k[1],S=Object(n.useState)(!1),E=Object(l.a)(S,2),I=E[0],y=E[1],B=Object(n.useCallback)(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(z,"/api/auth/token"),{token:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),M=Object(n.useCallback)(Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(z,"/api/auth/2FA"),{headers:{auth:A||""}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),[u]);Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x||"undefined"===x||u){e.next=16;break}return e.prev=1,e.next=4,B(x);case 4:t=e.sent,a=t.data,N(a.accessToken),localStorage.setItem("access",a.accessToken||""),s(a.email),b(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),g(null);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()}),[x,B,u]),Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=12;break}return e.prev=1,e.next=4,M();case 4:t=e.sent,y(!("qr"in t.secret)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),y(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}),[u,r,I]);var T=Object(n.useCallback)(function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n,c,r,l,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,c=i.length>1&&void 0!==i[1]?i[1]:void 0,e.prev=2,e.next=5,f.a.post("".concat(z,"/api/auth/login"),{email:a,password:n},{headers:c});case 5:if(r=e.sent,!(l=r.data).is2FAEnabled){e.next=9;break}return e.abrupt("return",l.is2FAEnabled);case 9:g(l.refreshToken),N(l.accessToken),localStorage.setItem("refresh",l.refreshToken),localStorage.setItem("access",l.accessToken),s(a),b(!0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),e.t0.isAxiosError?console.log(e.t0.response.data.error):console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),C=Object(n.useCallback)(function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n,c,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.firstName,n=t.lastName,c=t.email,r=t.password,e.prev=1,e.next=4,f.a.post("".concat(z,"/api/auth/sign-up"),{firstName:a,lastName:n,email:c,password:r});case 4:return s=e.sent,e.abrupt("return",s.data);case 8:if(e.prev=8,e.t0=e.catch(1),!e.t0.isAxiosError){e.next=14;break}throw e.t0.response.data.error;case 14:throw console.log(e.t0),Error("Something went bad");case 16:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[]),D=Object(n.useCallback)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(z,"/api/auth/logout"),{},{headers:{Auth:A||""}});case 2:N(null),g(null),s(null),b(!1),localStorage.removeItem("refresh"),localStorage.removeItem("access");case 8:case"end":return e.stop()}}),e)}))),[A]),F=Object(n.useCallback)(function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat(z,"/api/auth/2FA"),{},{headers:Object(p.a)(Object(p.a)({},t),{},{auth:A||""})});case 3:if(a=e.sent,!(n=a.data).is2FAEnabled){e.next=8;break}return y(!0),e.abrupt("return",n.is2FAEnabled);case 8:return e.abrupt("return",!1);case 11:e.prev=11,e.t0=e.catch(0),e.t0.isAxiosError?console.log(e.t0.response.data.error):console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),[u]),R=Object(n.useCallback)(Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("".concat(z,"/api/auth/2FA"),{headers:{auth:A||""}});case 3:if(t=e.sent,!(a=t.data).is2FADisabled){e.next=10;break}return y(!1),e.abrupt("return",a.is2FADisabled);case 10:return e.abrupt("return",!1);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),e.t0.isAxiosError?console.log(e.t0.response.data.error):console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[u]);return Object(m.jsx)(O.Provider,{value:{loggedIn:u,email:r,accessToken:A,login:T,logout:D,signUp:C,is2FAEnabled:I,enable2FA:F,disable2FA:R,get2FASecret:M},children:t})};var g=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.loggedIn,a=null===e||void 0===e?void 0:e.logout;return Object(m.jsxs)("ul",{className:"nav__list row",children:[Object(m.jsx)(h,{linkName:"Home",link:"/"}),t?[Object(m.jsx)(h,{linkName:"Chat Room",link:"/chat"},"chat"),Object(m.jsx)("button",{className:"default--button",onClick:Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return e.next=3,a();case 3:case"end":return e.stop()}}),e)}))),style:{backgroundColor:"red",padding:".1em .5em"},children:"Logout"},"logout")]:[Object(m.jsx)(h,{linkName:"Login",link:"/login"},"login"),Object(m.jsx)(h,{linkName:"Sign Up",link:"/sign-up"},"sign-up")]]})};var w=function(e){var t=e.isMobileNavOpen;return Object(m.jsx)("nav",{className:"nav ".concat(t?"nav--visible":""),children:Object(m.jsx)(g,{})})};var k=function(){return Object(m.jsx)(i.b,{to:"/",className:"logo",children:Object(m.jsx)("img",{className:"logo-img",src:"./favicon.ico",alt:"Logo"})})};var A=function(){var e=Object(n.useContext)(u).setTheme,t=Object(n.useState)(localStorage.getItem("theme")||"theme-auto"),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(m.jsxs)("select",{value:c?c.split("-")[1]:"auto",className:"select-theme",id:"select-theme",onChange:function(t){localStorage.setItem("theme","theme-".concat(t.target.value)),r(t.target.value),e("theme-".concat(t.target.value))},children:[Object(m.jsx)("option",{value:"auto",children:"Auto"}),Object(m.jsx)("option",{value:"light",children:"Light"}),Object(m.jsx)("option",{value:"dark",children:"Dark"})]})};var N=function(){return Object(m.jsxs)("div",{className:"theme",children:[Object(m.jsx)("label",{id:"theme-icon",className:"theme-icon"}),Object(m.jsx)(A,{})]})};a(72);var S=function(e){var t=e.onClick;return Object(m.jsx)("div",{className:"mobile-nav",children:Object(m.jsxs)("button",{className:"nav-toggle",onClick:t,children:[Object(m.jsx)("span",{className:"hamburger"}),Object(m.jsx)("span",{className:"hamburger"}),Object(m.jsx)("span",{className:"hamburger"})]})})};var E=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"header-container row",children:[Object(m.jsxs)("div",{className:"logo-and-theme",children:[Object(m.jsx)(S,{onClick:function(){c(!a)}}),Object(m.jsx)(k,{}),Object(m.jsx)(N,{})]}),Object(m.jsx)(w,{isMobileNavOpen:a})]})})};a(73);var I=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.get2FASecret,a=null===e||void 0===e?void 0:e.disable2FA,c=null===e||void 0===e?void 0:e.email,r=(null===e||void 0===e?void 0:e.is2FAEnabled)||!1,s=Object(o.f)(),l=function(){var e=Object(j.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof c){e.next=6;break}if(!t){e.next=6;break}return e.next=4,t();case 4:a=e.sent,s("/2FA",{state:{secret:a.secret}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof c){e.next=4;break}if(!a){e.next=4;break}return e.next=4,a();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:c?Object(m.jsx)("div",{className:"two-factor",children:r?Object(m.jsx)("button",{className:"default--button",style:{width:"100px"},id:"disable-two-factor",onClick:i,children:"Disable 2FA"}):Object(m.jsx)("button",{className:"default--button",style:{width:"100px"},id:"enable-two-factor",onClick:l,children:"Enable 2FA"})}):""})},y=a(47);a(74);var B=function(e){var t=e.online;return Object(m.jsx)("aside",{className:"chat__aside",children:t.map((function(e,t){return Object(m.jsxs)("div",{className:"aside__user",children:[Object(m.jsx)("div",{className:"online-circle"},"online-circle".concat(t)),Object(m.jsx)("div",{className:"aside__user--email",children:e},"aside__user--email".concat(t))]},"aside__user".concat(t))}))})};var M=function(e){var t=["#e69f73","#db5ec2","#35cd96","#91ab01","#6bcbef","#dfb610","#00b33e","#fd85d4","#e67072","#ba33dc","#c69478","#bd88eb","#8b7add","#fe7c7f","#3bdec3","#e68200"],a=0;if(0===e.length)return"0";for(var n=0;n<e.length;n++)a=e.charCodeAt(n)+((a<<5)-a),a&=a;return t[a=(a%t.length+t.length)%t.length]},T=function(e){var t=e.dir,a=e.email,n=e.content,c=e.timestamp;return Object(m.jsx)("div",{className:"message__container message__container--".concat(t),children:Object(m.jsxs)("div",{className:"chat__message message--".concat(t),children:[Object(m.jsx)("div",{className:"message__user",style:{color:M(a)},children:a}),Object(m.jsx)("div",{className:"message__content",dir:"auto",children:n}),Object(m.jsx)("div",{className:"message__timestamp",children:c})]})})};var C=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.accessToken,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],s=c[1],i=function(){var e=Object(j.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,f.a.post("".concat(z,"/api/chat/message"),{content:r},{headers:{auth:t||""}});case 3:s("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"send-message",children:Object(m.jsxs)("form",{className:"send-message__form",onSubmit:i,children:[Object(m.jsx)("input",{type:"text",placeholder:"Type a message",value:r,onChange:function(e){return s(e.target.value)},className:"send-message__input"}),Object(m.jsx)("button",{className:"send-message__button",children:Object(m.jsx)("svg",{className:"send-svg",children:Object(m.jsx)("path",{fill:"currentColor",d:"M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"})})})]})})};var D=function(e){var t=e.messages,a=Object(n.useContext)(O),c=null===a||void 0===a?void 0:a.email;return Object(m.jsxs)("div",{className:"chat__box--container",children:[Object(m.jsx)("div",{className:"chat__box",children:Object(m.jsx)("div",{className:"chat__box--messages",children:t&&t.map((function(e,t){return Object(m.jsx)(T,{dir:c===e.email?"right":"left",email:e.email,content:e.content,timestamp:new Date(Number(e.timestamp)).toLocaleString()},t)}))})}),Object(m.jsx)(C,{})]})},F=a(46);var R=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.loggedIn,a=null===e||void 0===e?void 0:e.accessToken,c=Object(n.useState)([]),r=Object(l.a)(c,2),s=r[0],i=r[1],u=Object(n.useState)([]),b=Object(l.a)(u,2),d=b[0],j=b[1],h=Object(o.f)();return Object(n.useEffect)((function(){t||h("/");var e=new F.EventSourcePolyfill("".concat(z||"","/api/chat/message"),{headers:{"Content-Type":"text/event-stream",auth:a||""}});e.onopen=function(){console.log("connection to stream has been opened")},e.onerror=function(e){console.log("An error has occurred while receiving stream",e)},e.onmessage=function(e){var t=JSON.parse(e.data);t.messages&&i(t.messages),t.newMessage&&i((function(e){return[].concat(Object(y.a)(e),[t.newMessage])})),t.online&&j(t.online)}}),[a,t,h]),Object(m.jsx)("div",{className:"chat",children:Object(m.jsxs)("div",{className:"chat-container row-large",children:[Object(m.jsx)(B,{online:d}),Object(m.jsx)(D,{messages:s})]})})};var Z=function(e){var t=e.id,a=e.value;return Object(m.jsx)("span",{className:"invalid-message",id:t,children:a||""})};var J=function(e){var t=e.labelValue,a=e.type,c=e.id,r=e.placeholder,s=e.state,i=e.setState,o=e.handleBlur,u=Object(n.useState)(""),b=Object(l.a)(u,2),d=b[0],j=b[1];return Object(m.jsxs)("div",{className:"form-element",children:[Object(m.jsx)("label",{htmlFor:c,children:t}),Object(m.jsx)("input",{id:c,type:a,placeholder:r,value:s,onChange:function(e){return i(e.target.value)},onBlur:function(e){return o(e,j)}}),Object(m.jsx)(Z,{id:"".concat(c,"-invalid-message"),value:d})]})};a(75);var U=function(e){var t=e.containerClass,a=e.id,n=e.title,c=e.formElements,r=e.submitValue,s=e.handleSubmit;return Object(m.jsx)("div",{className:t,children:Object(m.jsxs)("form",{id:a,className:"form",onSubmit:s,children:[Object(m.jsx)("h2",{children:n}),c.map((function(e,t){var a=e.labelValue,n=e.type,c=e.id,r=e.placeholder,s=e.state,l=e.setState,i=e.handleBlur;return Object(m.jsx)(J,{labelValue:a,type:n,id:c,placeholder:r,state:s,setState:l,handleBlur:i},"".concat(t))})),Object(m.jsx)("div",{className:"form-element",children:Object(m.jsx)("button",{className:"default--button",children:r})})]})})},L=(a(76),a(11)),P=a.n(L);var W=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.loggedIn,a=null===e||void 0===e?void 0:e.login,c=Object(n.useState)(""),r=Object(l.a)(c,2),s=r[0],i=r[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),h=b[0],p=b[1],v=Object(o.f)();Object(n.useEffect)((function(){t&&v("/")}),[t,v]);var f=[{labelValue:"Email",type:"email",id:"email",placeholder:"Enter Email",state:s,setState:i,handleBlur:function(e,t){P.a.isEmail(e.target.value)?t(""):t("Invalid email")}},{labelValue:"Password",type:"password",id:"password",placeholder:"Enter Password",state:h,setState:p,handleBlur:function(e,t){P.a.isStrongPassword(e.target.value,{minSymbols:0})?t(""):t("Password must contain at least one uppercase, one lowercase and one number")}}],x=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a){e.next=6;break}return e.next=4,a({email:s,password:h});case 4:e.sent?v("/2FA",{state:{email:s,password:h}}):v("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(U,{containerClass:"log-in-container",id:"log-in-form",title:"Log In",formElements:f,submitValue:"Log In",handleSubmit:x})};var Y=function(e){var t=e.ghName,a=e.ghLink;return Object(m.jsxs)("a",{className:"copyright-link",href:a,target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)("span",{children:t}),Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",className:"github-img",alt:""})]})};a(157);var G=function(){return Object(m.jsx)("footer",{children:Object(m.jsx)("div",{className:"footer-container",children:Object(m.jsxs)("p",{className:"copyright",children:[Object(m.jsx)("span",{children:"\xa9 Copyright 2021"}),Object(m.jsx)(Y,{ghLink:"https://github.com/shaharkamay",ghName:"Shahar Kamay"})]})})})};a(158);var V=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.loggedIn,a=null===e||void 0===e?void 0:e.email;return Object(m.jsx)("div",{className:"hello",children:Object(m.jsxs)("div",{className:"hello-container",children:["Hello,",t?" ".concat(a||"guest"):" guest"]})})};a(159);var _=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.loggedIn,a=null===e||void 0===e?void 0:e.signUp,c=Object(o.f)(),r=Object(n.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1],b=Object(n.useState)(""),h=Object(l.a)(b,2),p=h[0],v=h[1],f=Object(n.useState)(""),x=Object(l.a)(f,2),g=x[0],w=x[1],k=Object(n.useState)(""),A=Object(l.a)(k,2),N=A[0],S=A[1];Object(n.useEffect)((function(){t&&c("/")}),[t,c]);var E=[{labelValue:"First Name",type:"text",id:"first-name",placeholder:"Enter first name",state:i,setState:u,handleBlur:function(e,t){P.a.isAlpha(e.target.value)?t(""):t("Invalid name")}},{labelValue:"Last Name",type:"text",id:"last-name",placeholder:"Enter last name",state:p,setState:v,handleBlur:function(e,t){P.a.isAlpha(e.target.value)?t(""):t("Invalid name")}},{labelValue:"Email",type:"email",id:"email",placeholder:"Enter Email",state:g,setState:w,handleBlur:function(e,t){P.a.isEmail(e.target.value)?t(""):t("Invalid email")}},{labelValue:"Password",type:"password",id:"password",placeholder:"Enter Password",state:N,setState:S,handleBlur:function(e,t){P.a.isStrongPassword(e.target.value,{minSymbols:0})?t(""):t("Password must contain at least one uppercase, one lowercase and one number")}}],I=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a){e.next=6;break}return e.next=4,a({firstName:i,lastName:p,email:g,password:N});case 4:e.sent.isSignedUp&&c("/login");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(U,{containerClass:"sign-up-container",id:"sign-up-form",title:"Sign Up",formElements:E,submitValue:"Sign Up",handleSubmit:I})};a(160);var Q=function(){var e=Object(n.useContext)(O),t=null===e||void 0===e?void 0:e.loggedIn,a=null===e||void 0===e?void 0:e.login,c=null===e||void 0===e?void 0:e.enable2FA,r=Object(n.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1],b=Object(o.e)().state,h=Object(o.f)();Object(n.useEffect)((function(){t&&b.email&&h("/")}),[t,h]);var p=[{labelValue:"Code",type:"text",id:"code",placeholder:"Enter code",state:i,setState:u,handleBlur:function(e,t){P.a.isNumeric(e.target.value)?t(""):t("Invalid code")}}],v=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!("secret"in b)||!c){e.next=12;break}return e.next=4,c({twofactorsecret:b.secret.secret,twofactortoken:i});case 4:if(!e.sent){e.next=9;break}h("/"),e.next=10;break;case 9:throw"2FA did not succeeded";case 10:e.next=15;break;case 12:if(!a){e.next=15;break}return e.next=15,a({email:b.email,password:b.password},{twoFactorToken:i});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[b.secret?Object(m.jsx)("img",{className:"qr-img",src:b.secret.qr,alt:"QR"}):"",Object(m.jsx)(U,{containerClass:"two-factor-container",id:"two-factor-form",title:"two-factor",formElements:p,submitValue:"Verify",handleSubmit:v})]})};var X=function(){var e=Object(n.useState)(localStorage.getItem("theme")||"theme-auto"),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(m.jsx)(x,{children:Object(m.jsx)(u.Provider,{value:{theme:a,setTheme:c},children:Object(m.jsx)("div",{className:"App ".concat(a),children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(E,{}),Object(m.jsx)(V,{}),Object(m.jsx)("main",{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",element:Object(m.jsx)(I,{})}),Object(m.jsx)(o.a,{path:"/chat",element:Object(m.jsx)(R,{})}),Object(m.jsx)(o.a,{path:"/login",element:Object(m.jsx)(W,{})}),Object(m.jsx)(o.a,{path:"/2FA",element:Object(m.jsx)(Q,{})}),Object(m.jsx)(o.a,{path:"/sign-up",element:Object(m.jsx)(_,{})}),Object(m.jsx)(o.a,{path:"*",element:Object(m.jsx)(I,{})})]})}),Object(m.jsx)(G,{})]})})})})};a(161);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(X,{})}),document.getElementById("root"));var H="localhost"===window.location.hostname?"http://localhost:8080":"",z=t.default=H},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[162,1,2]]]);
//# sourceMappingURL=main.2cded2d6.chunk.js.map