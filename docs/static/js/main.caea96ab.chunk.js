(this["webpackJsonpdnd-kit-yarn-1"]=this["webpackJsonpdnd-kit-yarn-1"]||[]).push([[0],{19:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(12),c=n.n(a),s=(n(19),n(4)),o=n(3),d=n(9),b=n(5),l=function(t){var e=t.children,n=t.columns;return Object(b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(n,", 1fr)"),gridGap:10,maxWidth:"800px",margin:"100px auto"},children:e})},j=n(1),u=n(2),O=n(7),x=Object(r.forwardRef)((function(t,e){var n=t.id,r=t.withOpacity,i=t.isDragging,a=t.style,c=Object(O.a)(t,["id","withOpacity","isDragging","style"]),s=Object(j.a)({opacity:r?"0.5":"1",transformOrigin:"50% 50%",height:"140px",width:"140px",borderRadius:"10px",cursor:i?"grabbing":"grab",backgroundColor:"#ffffff",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:i?"rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px":"rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",transform:i?"scale(1.05)":"scale(1)"},a);return Object(b.jsx)("div",Object(j.a)(Object(j.a)({ref:e,style:s},c),{},{children:n}))})),f=function(t){var e=Object(d.d)({id:t.id}),n=e.isDragging,r=e.attributes,i=e.listeners,a=e.setNodeRef,c=e.transform,s=e.transition,o={transform:u.a.Transform.toString(c),transition:s||void 0};return Object(b.jsx)(x,Object(j.a)(Object(j.a)(Object(j.a)({ref:a,style:o,withOpacity:n},t),r),i))},g=function(){var t=Object(r.useState)(Array.from({length:20},(function(t,e){return(e+1).toString()}))),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(r.useState)(null),c=Object(s.a)(a,2),j=c[0],u=c[1],O=Object(o.o)(Object(o.n)(o.d),Object(o.n)(o.e)),g=Object(r.useCallback)((function(t){u(t.active.id)}),[]),p=Object(r.useCallback)((function(t){var e=t.active,n=t.over;e.id!==(null===n||void 0===n?void 0:n.id)&&i((function(t){var r=t.indexOf(e.id),i=t.indexOf(n.id);return Object(d.b)(t,r,i)})),u(null)}),[]),h=Object(r.useCallback)((function(){u(null)}),[]);return Object(b.jsxs)(o.a,{sensors:O,collisionDetection:o.f,onDragStart:g,onDragEnd:p,onDragCancel:h,children:[Object(b.jsx)(d.a,{items:n,strategy:d.c,children:Object(b.jsx)(l,{columns:5,children:n.map((function(t){return Object(b.jsx)(f,{id:t},t)}))})}),Object(b.jsx)(o.b,{adjustScale:!0,style:{transformOrigin:"0 0 "},children:j?Object(b.jsx)(x,{id:j,isDragging:!0}):null})]})};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.caea96ab.chunk.js.map