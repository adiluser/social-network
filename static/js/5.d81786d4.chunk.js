(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{242:function(e,r,t){e.exports={formControl:"FormsControls_formControl__2aUOv",error:"FormsControls_error__2kvuB",formSummaryError:"FormsControls_formSummaryError__T7Hzf"}},243:function(e,r,t){"use strict";t.d(r,"b",function(){return n}),t.d(r,"a",function(){return a});var n=function(e){if(!e)return"Field is required"},a=function(e){return function(r){if(r.length>e)return"Max length is ".concat(e," symbols")}}},244:function(e,r,t){"use strict";var n=t(169),a=t(0),o=t.n(a),c=t(242),l=t.n(c);r.a=function(e){return function(r){var t=r.input,a=r.meta,c=Object(n.a)(r,["input","meta"]),m=a.touched&&a.error;return o.a.createElement("div",{className:l.a.formControl+" "+(m?l.a.error:"")},o.a.createElement(e,Object.assign({},t,c)),m&&o.a.createElement("span",null," ",a.error," "))}}},316:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(19),c=t(21),l=t(1),m=t(170),i=t(171),u=t(244),s=t(243),p=t(242),f=t.n(p),d=Object(u.a)("input"),h=Object(i.a)({form:"login"})(function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(m.a,{component:d,placeholder:"Login",name:"login",validate:[s.b]})),a.a.createElement("div",null,a.a.createElement(m.a,{component:d,placeholder:"Password",name:"password",type:"password",validate:[s.b]})),a.a.createElement("div",null,a.a.createElement(m.a,{component:d,type:"checkbox",name:"rememberMe"})," Remember me"),e.captchaUrl&&a.a.createElement("img",{src:e.captchaUrl}),e.captchaUrl&&a.a.createElement(m.a,{component:d,name:"captcha",validate:[s.b]}),e.error&&a.a.createElement("div",{className:f.a.formSummaryError},e.error),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))});r.default=Object(o.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}},{login:c.c})(function(e){return e.isAuth?a.a.createElement(l.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(h,{onSubmit:function(r){var t=r.login,n=r.password,a=r.rememberMe,o=r.captcha;e.login(t,n,a,o)},captchaUrl:e.captchaUrl}))})}}]);
//# sourceMappingURL=5.d81786d4.chunk.js.map