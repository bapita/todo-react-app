(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),d=(n(13),n(14),n(8)),r=n(6),j=n(3),l=n.p+"static/media/todo1.e39a3081.svg",o=n.p+"static/media/todo.a90b1a5b.svg",b=n(0),u=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),u=s[0],O=s[1],f=Object(c.useState)(!0),m=Object(j.a)(f,2),h=m[0],x=m[1],p=Object(c.useState)(null),v=Object(j.a)(p,2),g=v[0],k=v[1],N=function(){if(n)if(n&&!h)O(u.map((function(t){return t.id===g?Object(r.a)(Object(r.a)({},t),{},{name:n}):t}))),x(!0),a(""),k(null);else{var t={id:(new Date).getTime().toString(),name:n};O([].concat(Object(d.a)(u),[t])),a("")}else alert("Empty feild can not be a task. LOL!")};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"main-div",children:Object(b.jsxs)("div",{className:"child-div",children:[Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{src:o,alt:""}),Object(b.jsx)("img",{src:l,alt:""}),Object(b.jsx)("figcaption",{children:"Add your List Here \ud83d\udcd3"})]}),Object(b.jsxs)("div",{className:"addItems",children:[Object(b.jsx)("input",{type:"text",placeholder:" \u270d\ufe0f Write Tasks Here",value:n,onChange:function(t){return a(t.target.value)}}),h?Object(b.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Tasks",onClick:N}):Object(b.jsx)("i",{className:"far fa-edit add-btn",title:"Edit Task",onClick:N})]}),Object(b.jsx)("div",{className:"showItems",children:u.map((function(t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"eachItem",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsxs)("div",{className:"todo-btn",children:[Object(b.jsx)("i",{className:"far fa-edit add-btn",title:"Edit Tasks",onClick:function(){return function(t){var e=u.find((function(e){return e.id===t}));x(!1),a(e.name),k(t)}(t.id)}}),Object(b.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Tasks",onClick:function(){return function(t){var e=u.filter((function(e){return e.id!==t}));O(e)}(t.id)}})]})]},t.id)})}))}),Object(b.jsx)("div",{className:"showItems",children:Object(b.jsx)("button",{className:"btn effect04","data-sm-link-text":"REMOVE ALL",onClick:function(){return O([])},children:Object(b.jsx)("span",{children:"CHECK LIST"})})})]})})})};var O=function(){return Object(b.jsx)(u,{})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.67b4059a.chunk.js.map