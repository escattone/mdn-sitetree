(this["webpackJsonpmdn-sitetree"]=this["webpackJsonpmdn-sitetree"]||[]).push([[0],{247:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),i=(n(95),n(96),n(51)),s=n(87);n(247);function l(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),u=l[0],p=l[1];return Object(a.useEffect)((function(){var e=!1;return fetch("tree.json").then((function(t){if(!t.ok)throw console.log(t),new Error("Not ok");if(!t.headers.get("content-type").includes("application/json"))throw new Error("not json ".concat(t.headers.get("content-type")));t.json().then((function(t){e||c(t)}))})),function(){e=!0}}),[]),r.a.createElement("div",{id:"wrapper"},r.a.createElement(s.Treebeard,{data:n,onToggle:function(e,t){u&&(u.active=!1),e.active=!0,e.children&&(e.toggled=t),p(e),c(Object.assign({},n))}}))}var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"MDN SiteTree"),r.a.createElement("section",{className:"App-main"},r.a.createElement(l,null)),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("p",null,"Code:"," ",r.a.createElement("a",{href:"https://github.com/peterbe/mdn-sitetree/"},"https://github.com/peterbe/mdn-sitetree/"))))};o.a.render(r.a.createElement(u,null),document.getElementById("root"))},90:function(e,t,n){e.exports=n(248)},95:function(e,t,n){},96:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.f6a56205.chunk.js.map