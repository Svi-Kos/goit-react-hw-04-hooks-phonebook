(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__2lgsm"}},19:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),o=n.n(a),r=n(9),s=n.n(r),i=(n(18),n(19),n(12)),u=n(2),l=n(10),m=n.n(l),b=(n(28),n(7)),j=n.n(b),f=function(t){var e=t.contacts,n=t.onDeleteItem;return Object(c.jsx)("ul",{className:j.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,o=t.number;return Object(c.jsxs)("li",{className:j.a.contactListItem,children:[Object(c.jsxs)("p",{children:[a,": ",o]}),Object(c.jsx)("button",{type:"button",className:j.a.deleteBtn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},d=n(3),x=n.n(d);var O=function(t){var e=t.onSubmit,n=Object(a.useState)(""),o=Object(u.a)(n,2),r=o[0],s=o[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),m=l[0],b=l[1],j=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":s(c);break;case"number":b(c);break;default:return}},f=function(){s(""),b("")};return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,m),f()},className:x.a.contactForm,children:[Object(c.jsxs)("label",{className:x.a.contactFormLabel,children:["Name",Object(c.jsx)("input",{type:"text",required:!0,name:"name",value:r,onChange:j})]}),Object(c.jsxs)("label",{className:x.a.contactFormLabel,children:["Number",Object(c.jsx)("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",required:!0,name:"number",value:m,onChange:j}),Object(c.jsx)("p",{className:x.a.numberFormat,children:"Format: xxx-xx-xx"})]}),Object(c.jsx)("button",{type:"submit",className:x.a.contactFormBtn,children:"Add contact"})]})},h=n(11),p=n.n(h),_=function(t){var e=t.value,n=t.onChange;return Object(c.jsxs)("label",{className:p.a.filter,children:["Find contacts by name"," ",Object(c.jsx)("input",{type:"text",value:e,onChange:n})]})};var F=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(u.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),l=s[0],b=s[1],j=l.toLowerCase(),d=n.filter((function(t){return t.name.toLowerCase().includes(j)}));return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(c.jsxs)("div",{className:"phonebook",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(O,{onSubmit:function(t,e){var c={id:m.a.generate(),name:t,number:e};1!==n.filter((function(e){return t===e.name})).length?o([c].concat(Object(i.a)(n))):alert("".concat(t," is already in contacts"))}}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(_,{value:l,onChange:function(t){b(t.currentTarget.value)}}),Object(c.jsx)(f,{contacts:d,onDeleteItem:function(t){o(n.filter((function(e){return e.id!==t})))}})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),v()},3:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3oRTn",contactFormLabel:"ContactForm_contactFormLabel__1sCzY",contactFormBtn:"ContactForm_contactFormBtn__1n91K",numberFormat:"ContactForm_numberFormat__2L_tt"}},7:function(t,e,n){t.exports={contactList:"ContactList_contactList__2YMxw",contactListItem:"ContactList_contactListItem__kVbQn",deleteBtn:"ContactList_deleteBtn__2Q1mI"}}},[[29,1,2]]]);
//# sourceMappingURL=main.730395f8.chunk.js.map