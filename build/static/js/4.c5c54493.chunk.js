(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{242:function(e,t,a){e.exports={formControl:"FormsControls_formControl__2aUOv",error:"FormsControls_error__2kvuB",formSummaryError:"FormsControls_formSummaryError__T7Hzf"}},243:function(e,t,a){"use strict";var n=a(251),r=a(0),o=a.n(r),i=a(242),s=a.n(i);t.a=function(e){return function(t){var a=t.input,r=t.meta,i=Object(n.a)(t,["input","meta"]),c=r.touched&&r.error;return o.a.createElement("div",{className:s.a.formControl+" "+(c?s.a.error:"")},o.a.createElement(e,Object.assign({},a,i)),c&&o.a.createElement("span",null," ",r.error," "))}}},245:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},313:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a(0),o=a.n(r),i=a(40),s=a.n(i),c=a(9),m=function(e){var t="/dialogs/"+e.id;return o.a.createElement("div",{className:s.a.dialogItem},o.a.createElement("img",{src:"https://images.unsplash.com/photo-1562860149-691401a306f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"}),o.a.createElement(c.b,{to:t,activeClassName:s.a.activeLink}," ",e.name," "))},u=function(e){return o.a.createElement("div",{className:s.a.message},e.text)},l=a(43),d=a(44),f=a(245),g=a(243),b=Object(f.a)(100),_=Object(g.a)("textarea"),E=Object(d.a)({form:"dialogAddMessageForm"})(function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(l.a,{component:_,name:"newMessageBody",placeholder:"Enter your message",validate:[f.b,b]}),o.a.createElement("button",null,"Send message"))}),v=function(e){var t=e.dialogsPage,a=t.dialogs.map(function(e){return o.a.createElement(m,{id:e.id,key:e.id,name:e.name})}),n=t.messages.map(function(e){return o.a.createElement(u,{key:e.id,text:e.text})});return o.a.createElement("div",{className:s.a.dialogs},o.a.createElement("div",{className:s.a.dialogItems},a),o.a.createElement("div",{className:s.a.messages},n,o.a.createElement(E,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})))},p=a(18),h=a(1),w=function(e){return{isAuth:e.auth.isAuth}},x=a(17);t.default=Object(x.d)(Object(p.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(Object(n.a)(t))}}}),function(e){return Object(p.b)(w)(function(t){return t.isAuth?o.a.createElement(e,t):o.a.createElement(h.a,{to:"/login"})})})(v)},40:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__3aOmD",dialogItems:"Dialogs_dialogItems__3b2YZ",activeLink:"Dialogs_activeLink__F_XU3",messages:"Dialogs_messages__3AO0D",dialogItem:"Dialogs_dialogItem__Wfkyz"}}}]);
//# sourceMappingURL=4.c5c54493.chunk.js.map