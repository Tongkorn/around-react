(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),i=(n(12),n(2)),r=n(0);var l=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("div",{className:"header__logo"})})},p=n(6);var u=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("article",{className:"card",children:[Object(r.jsx)("img",{src:"".concat(e.card.link),alt:"untitled image",className:"card__pic",onClick:function(){e.onCardClick(e.card)}}),Object(r.jsx)("button",{type:"button",className:"card__delete","aria-label":"delete-card"}),Object(r.jsxs)("div",{className:"card__content",children:[Object(r.jsx)("h2",{className:"card__title",children:e.card.name}),Object(r.jsxs)("div",{className:"card__like-container",children:[Object(r.jsx)("button",{type:"button",className:"card__like-btn","aria-label":"like"}),Object(r.jsx)("p",{className:"card__like-total",children:e.card.likes.length})]})]})]})})};var j=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(),l=Object(i.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)(),_=Object(i.a)(b,2),m=_[0],O=_[1],x=Object(a.useState)([]),h=Object(i.a)(x,2),f=h[0],N=h[1],C={backgroundImage:"url(".concat(m,")")};return Object(a.useEffect)((function(){return fetch("https://around.nomoreparties.co/v1/group-12/users/me",{method:"GET",headers:{authorization:"e09604a5-57aa-4b20-9a83-ea66e5c6924b","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))})).then((function(e){s(e.name),O(e.avatar),d(e.about)})),function(){}}),[]),Object(a.useEffect)((function(){return fetch("https://around.nomoreparties.co/v1/group-12/cards",{method:"GET",headers:{authorization:"e09604a5-57aa-4b20-9a83-ea66e5c6924b","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Error:".concat(e.status))})).then((function(e){N([].concat(Object(p.a)(e),Object(p.a)(f)))})),function(){}}),[]),Object(r.jsxs)("main",{className:"content",children:[Object(r.jsxs)("section",{className:"profile",children:[Object(r.jsxs)("div",{className:"profile__container",children:[Object(r.jsx)("div",{className:"profile__avatar",style:C,children:Object(r.jsx)("button",{type:"button",className:"profile__edit-avatar","aria-label":"edit-avatar",onClick:e.onEditAvatarClick})}),Object(r.jsxs)("div",{className:"profile__detail",children:[Object(r.jsxs)("div",{className:"profile__text",children:[Object(r.jsx)("h1",{className:"profile__name",children:c}),Object(r.jsx)("p",{className:"profile__job",children:j})]}),Object(r.jsx)("button",{type:"button",className:"profile__edit-btn","aria-label":"edit-name",onClick:e.onEditProfileClick})]})]}),Object(r.jsx)("button",{type:"button",className:"profile__add-btn","aria-label":"add-profile",onClick:e.onAddPlaceClick})]}),"``",Object(r.jsx)("section",{className:"cards",children:f.map((function(t,n){return Object(r.jsx)(u,{card:t,onCardClick:e.onCardClick},n)}))})]})};var d=function(){return Object(r.jsx)("footer",{className:"footer",children:"\xa9 2021 Around The U.S."})};function b(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""," "),children:Object(r.jsxs)("form",{name:"form-".concat(e.name),method:"post",className:"popup__form popup__".concat(e.name," "),noValidate:!0,children:[Object(r.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(r.jsx)("button",{type:"submit",className:"popup__btn popup__btn_type_save","aria-label":"save","data-text-original":"".concat(e.btnText),"data-text-saving":"".concat(e.loadingBtnText),children:e.btnText}),Object(r.jsx)("button",{type:"button",className:"popup__btn popup__btn_type_close","aria-label":"close",onClick:e.onClose})]})})})}function _(e){return Object(r.jsxs)(b,{title:"Edit Profile",name:"edit-profile",btnText:"Save",isOpen:e.isOpen,loadingBtnText:"Saving...",onClose:e.onClose,children:[Object(r.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_name",placeholder:"Name",id:"name-input",required:!0}),Object(r.jsx)("span",{className:"popup__error name-input-error"}),Object(r.jsx)("input",{type:"text",name:"about",className:"popup__input popup__input_type_job",placeholder:"About me",id:"job-input",required:!0}),Object(r.jsx)("span",{className:"popup__error job-input-error"})]})}function m(e){return Object(r.jsxs)(b,{title:"New Place",name:"add-card",btnText:"Create",isOpen:e.isOpen,loadingBtnText:"Saving...",onClose:e.onClose,children:[Object(r.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_img-title",placeholder:"Title",id:"img-input",required:!0}),Object(r.jsx)("span",{className:"popup__error img-input-error"}),Object(r.jsx)("input",{type:"text",name:"link",className:"popup__input popup__input_type_link",placeholder:"Image link",id:"link-input",required:!0}),Object(r.jsx)("span",{className:"popup__error link-input-error"})]})}function O(e){return Object(r.jsx)(b,{title:"Are you sure?",name:"confirm-delete",btnText:"Yes",isOpen:e.isOpen,onClose:e.onClose})}function x(e){return Object(r.jsxs)(b,{title:"Change profile picture",name:"edit-avatar",btnText:"Yes",isOpen:e.isOpen,loadingBtnText:"Saving...",onClose:e.onClose,children:[Object(r.jsx)("input",{type:"text",name:"avatar",className:"popup__input popup__input_type_link",placeholder:"Image link",id:"avatar-input",required:!0}),Object(r.jsx)("span",{className:"popup__error avatar-input-error"})]})}var h=function(e){return console.log(e.selectedCard),Object(r.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""," "),"data-image":"popup__view_image",children:Object(r.jsxs)("figure",{className:"popup__card",children:[Object(r.jsx)("img",{src:"".concat(e.selectedCard),className:"popup__img",alt:"untitled image"}),Object(r.jsx)("figcaption",{className:"popup__img-caption"}),Object(r.jsx)("button",{type:"button",className:"popup__btn popup__btn_type_close","aria-label":"close",onClick:e.onClose})]})})};var f=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),p=o[0],u=o[1],b=Object(a.useState)(!1),f=Object(i.a)(b,2),N=f[0],C=f[1],v=Object(a.useState)(!1),g=Object(i.a)(v,2),k=g[0],y=g[1],T=Object(a.useState)(!1),S=Object(i.a)(T,2),E=S[0],P=S[1],A=Object(a.useState)(""),B=Object(i.a)(A,2),F=B[0],q=B[1];function I(){C(!1),c(!1),u(!1),y(!1),P(!1),q("")}return Object(r.jsx)("div",{className:"root",children:Object(r.jsxs)("div",{className:"root__container",children:[Object(r.jsx)(l,{}),Object(r.jsx)(j,{onEditProfileClick:function(){c(!n)},onAddPlaceClick:function(){u(!p)},onEditAvatarClick:function(){C(!N)},onDeletePlaceClick:function(){P(!E)},onCardClick:function(e){y(!k),q(e.link)}}),Object(r.jsx)(d,{}),Object(r.jsx)(_,{isOpen:n,onClose:I}),Object(r.jsx)(m,{isOpen:p,onClose:I}),Object(r.jsx)(O,{isOpen:E,onClose:I}),Object(r.jsx)(x,{isOpen:N,onClose:I}),Object(r.jsx)(h,{isOpen:k,onClose:I,selectedCard:F})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),N()}},[[14,1,2]]]);
//# sourceMappingURL=main.135ed5ae.chunk.js.map