(this["webpackJsonpml-frontend"]=this["webpackJsonpml-frontend"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),r=a.n(i),l=(a(77),a(19)),s=a(143),o=a(62),j=a(144),u=a(145),b=a(151),d=a(146),h=a(139),O=a(147),x=a(140),f=a(152),g=a(141),m=a(148),p=a(142),v=(a(78),a(136)),y=a(138),C=a(6);function S(){return Object(C.jsx)(b.a,{sx:{flexGrow:1},children:Object(C.jsx)(v.a,{position:"static",children:Object(C.jsx)(y.a,{style:{justifyContent:"center"},children:Object(C.jsx)(h.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Food Classification"})})})})}var k=a(61),w=a.n(k),P=a(149),F=a(153);var I=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(C.jsxs)(b.a,{mt:"5",children:[Object(C.jsx)("br",{}),!c&&Object(C.jsxs)(x.a,{fullWidth:!0,component:"fieldset",children:[Object(C.jsx)(f.a,{id:"category-select-label",children:"Select Category"}),Object(C.jsxs)(P.a,{labelId:"category-select-label",id:"category-select",value:c,onChange:function(t){e.handleCategory(t.target.value),i(t.target.value),setTimeout((function(){i("")}),2e3)},children:[Object(C.jsx)(F.a,{value:"",children:Object(C.jsx)("em",{children:"None"})}),["Burger","Butter Naan","Chai","Chapati","Chole Bhature","Dal Makhani","Dhokla","Fried Rice","Idli","Jalebi","Kaathi Rolls","Kadai Paneer","Kulfi","Masala Dosa","Momos","Paani Puri","Pakode","Pav Bhaji","Pizza","Samosa"].map((function(e,t){return Object(C.jsx)(F.a,{value:e,children:e},t)}))]})]}),c&&Object(C.jsx)(h.a,{variant:"h3",style:{color:"#e64a19"},children:"Thank you!"})]})};var B=function(){var e=Object(o.a)({palette:{type:"dark",primary:{main:"#e64a19"},secondary:p.a}}),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(""),v=Object(l.a)(r,2),y=v[0],k=v[1],P=Object(n.useState)(!1),F=Object(l.a)(P,2),B=F[0],R=F[1],T=Object(n.useState)(!1),z=Object(l.a)(T,2),D=z[0],L=z[1],N=Object(n.useState)(!1),M=Object(l.a)(N,2),J=M[0],K=M[1],U=Object(n.useState)(""),W=Object(l.a)(U,2),G=(W[0],W[1]);function q(e){"w"==e?K(!0):(K(!1),A())}function A(){i(""),k(""),R(!1),L(!1)}return Object(C.jsxs)(s.a,{theme:e,children:[Object(C.jsx)(j.a,{}),Object(C.jsx)(S,{className:"App-header"}),Object(C.jsxs)(u.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(C.jsxs)(b.a,{mt:5,children:[c&&Object(C.jsx)("img",{className:"image",src:c,alt:"url"}),D&&Object(C.jsx)(d.a,{}),y&&Object(C.jsxs)(b.a,{mt:5,justifyContent:"center",children:[Object(C.jsx)(h.a,{variant:"h3",style:{color:"#e64a19"},children:y}),Object(C.jsx)(O.a,{size:"large",id:"correct",onClick:function(){return q("c")},children:"Correct"}),Object(C.jsx)(O.a,{size:"large",id:"wrong",onClick:function(){return q("w")},children:"Wrong"})]}),J&&Object(C.jsx)(I,{handleCategory:function(e){G(e),k(""),setTimeout((function(){K(!1),A()}),2e3)}})]}),Object(C.jsx)(b.a,{mt:5,children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(f.a,{htmlFor:"url-input",className:"label-url",children:"URL of Image"}),Object(C.jsx)(g.a,{id:"url","aria-describedby":"url-helper-text",label:"Required",variant:"filled",onChange:function(e){/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e.target.value)?(R(!1),i(e.target.value),k("")):R(!0)},fullWidth:!0,value:c}),Object(C.jsx)(m.a,{id:"url-helper-text",children:B?"URL is not valid!":"The URL should end with proper extension (.jpg/.png/jpeg)"}),Object(C.jsx)("br",{}),Object(C.jsx)(O.a,{type:"submit",variant:"contained",component:"label",disabled:B,onClick:function(e){e.preventDefault(),k(""),L(!0),console.log(c),w.a.post("http://ec2-34-226-205-176.compute-1.amazonaws.com:8000/",{url:c}).then((function(e){console.log(e),k(e.data.prediction),L(!1)}))},children:"Predict Image"})]})})]})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,155)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(B,{})}),document.getElementById("root")),R()},77:function(e,t,a){},78:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.651e89cb.chunk.js.map