"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6010],{9725:function(e,s,r){var n=r(8182),l=r(1087),a=r(184);s.Z=function(e){var s=e.footerLogo,r=e.spaceBottomClass,c=e.colorClass;return(0,a.jsxs)("div",{className:(0,n.Z)("copyright",r,c),children:[(0,a.jsx)("div",{className:"footer-logo",children:(0,a.jsx)(l.rU,{to:"/storack-frontend-1-flone/",children:(0,a.jsx)("img",{alt:"",src:"/storack-frontend-1-flone"+s})})}),(0,a.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,a.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Storack"}),".",(0,a.jsx)("br",{})," All Rights Reserved"]})]})}},5184:function(e,s,r){r.d(s,{Z:function(){return i}});var n=r(8182),l=r(9577),a=r(184),c=function(e){var s,r=e.status,n=e.message,l=e.onValidated;return(0,a.jsxs)("div",{className:"subscribe-form",children:[(0,a.jsxs)("div",{className:"mc-form",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,a.jsx)("div",{className:"clear",children:(0,a.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&l({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,a.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,a.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===r&&(0,a.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},t=function(e){var s=e.mailchimpUrl;return(0,a.jsx)("div",{children:(0,a.jsx)(l.Z,{url:s,render:function(e){var s=e.subscribe,r=e.status,n=e.message;return(0,a.jsx)(c,{status:r,message:n,onValidated:function(e){return s(e)}})}})})},i=function(e){var s=e.spaceBottomClass,r=e.spaceLeftClass,l=e.sideMenu,c=e.colorClass,i=e.widgetColorClass;return(0,a.jsxs)("div",{className:(0,n.Z)("footer-widget",s,l?"ml-ntv5":r,i),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"SUBSCRIBE"})}),(0,a.jsxs)("div",{className:(0,n.Z)("subscribe-style",c),children:[(0,a.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,a.jsx)(t,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},1567:function(e,s,r){var n=r(8182),l=r(1087),a=r(184);s.Z=function(e){var s=e.imageUrl,r=e.logoClass;return(0,a.jsx)("div",{className:(0,n.Z)(r),children:(0,a.jsx)(l.rU,{to:"/storack-frontend-1-flone/",children:(0,a.jsx)("img",{alt:"",src:"/storack-frontend-1-flone"+s})})})}},7127:function(e,s,r){var n=r(9434),l=r(9230),a=r(147),c=r(184);s.Z=function(e){var s=e.currency,r=(0,l.$G)().i18n,t=(0,n.I0)(),i=function(e){var s=e.target.value;r.changeLanguage(s)},o=function(e){var s=e.target.value;t((0,a.N)(s))};return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===r.resolvedLanguage?"English":"fn"===r.resolvedLanguage?"French":"de"===r.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return i(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return i(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return i(e)},children:"Germany"})})]})})]}),(0,c.jsxs)("div",{className:"same-language-currency use-style",children:[(0,c.jsxs)("span",{children:[s.currencyName," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency",children:(0,c.jsx)("p",{children:"Call Us 3965410"})})]})}},9354:function(e,s,r){r.d(s,{Z:function(){return t}});var n=r(9439),l=r(2791),a=function(){var e=(0,l.useState)(!1),s=(0,n.Z)(e,2),r=s[0],a=s[1];return(0,l.useEffect)((function(){var e=function(){var e=window.pageYOffset;a(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=r(184),t=function(){var e=a(),s=e.stick,r=e.onClickHandler;return s?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},9858:function(e,s,r){var n=r(2791),l=r(7939),a=r(8032),c=r(9354),t=r(184);s.Z=function(e){var s=e.children,r=e.headerContainerClass,i=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(l.Z,{layout:r,top:i,headerPaddingClass:o,headerPositionClass:d}),s,(0,t.jsx)(a.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,t.jsx)(c.Z,{})]})}},6010:function(e,s,r){r.r(s);var n=r(1413),l=r(9439),a=r(2791),c=r(9434),t=r(7689),i=r(1087),o=r(3695),d=r(1770),h=r(9858),u=r(9778),m=r(4275),x=r(184);s.default=function(){var e=0,s=(0,a.useState)(1),r=(0,l.Z)(s,1)[0],j=(0,c.I0)(),f=(0,t.TH)().pathname,p=(0,c.v9)((function(e){return e.currency})),v=(0,c.v9)((function(e){return e.cart})).cartItems;return(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)(o.Z,{titleTemplate:"Cart",description:"Cart page of flone react minimalist eCommerce template."}),(0,x.jsxs)(h.Z,{headerTop:"visible",children:[(0,x.jsx)(u.Z,{pages:[{label:"Home",path:"/storack-frontend-1-flone/"},{label:"Cart",path:"/storack-frontend-1-flone"+f}]}),(0,x.jsx)("div",{className:"cart-main-area pt-90 pb-100",children:(0,x.jsx)("div",{className:"container",children:v&&v.length>=1?(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)("h3",{className:"cart-page-title",children:"Your cart items"}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("div",{className:"table-content table-responsive cart-table-content",children:(0,x.jsxs)("table",{children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Image"}),(0,x.jsx)("th",{children:"Product Name"}),(0,x.jsx)("th",{children:"Unit Price"}),(0,x.jsx)("th",{children:"Qty"}),(0,x.jsx)("th",{children:"Subtotal"}),(0,x.jsx)("th",{children:"action"})]})}),(0,x.jsx)("tbody",{children:v.map((function(s,l){var c=(0,d.lk)(s.price,s.discount),t=(s.price*p.currencyRate).toFixed(2),o=(c*p.currencyRate).toFixed(2);return e+=null!=c?o*s.quantity:t*s.quantity,(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"product-thumbnail",children:(0,x.jsx)(i.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:(0,x.jsx)("img",{className:"img-fluid",src:"/storack-frontend-1-flone"+s.image[0],alt:""})})}),(0,x.jsxs)("td",{className:"product-name",children:[(0,x.jsx)(i.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:s.name}),s.selectedProductColor&&s.selectedProductSize?(0,x.jsxs)("div",{className:"cart-item-variation",children:[(0,x.jsxs)("span",{children:["Color: ",s.selectedProductColor]}),(0,x.jsxs)("span",{children:["Size: ",s.selectedProductSize]})]}):""]}),(0,x.jsx)("td",{className:"product-price-cart",children:null!==c?(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)("span",{className:"amount old",children:p.currencySymbol+t}),(0,x.jsx)("span",{className:"amount",children:p.currencySymbol+o})]}):(0,x.jsx)("span",{className:"amount",children:p.currencySymbol+t})}),(0,x.jsx)("td",{className:"product-quantity",children:(0,x.jsxs)("div",{className:"cart-plus-minus",children:[(0,x.jsx)("button",{className:"dec qtybutton",onClick:function(){return j((0,m.a3)(s))},children:"-"}),(0,x.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:s.quantity,readOnly:!0}),(0,x.jsx)("button",{className:"inc qtybutton",onClick:function(){return j((0,m.Xq)((0,n.Z)((0,n.Z)({},s),{},{quantity:r})))},disabled:void 0!==s&&s.quantity&&s.quantity>=(0,d.hI)(s,s.selectedProductColor,s.selectedProductSize),children:"+"})]})}),(0,x.jsx)("td",{className:"product-subtotal",children:null!==c?p.currencySymbol+(o*s.quantity).toFixed(2):p.currencySymbol+(t*s.quantity).toFixed(2)}),(0,x.jsx)("td",{className:"product-remove",children:(0,x.jsx)("button",{onClick:function(){return j((0,m.EI)(s.cartItemId))},children:(0,x.jsx)("i",{className:"fa fa-times"})})})]},l)}))})]})})})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-12",children:(0,x.jsxs)("div",{className:"cart-shiping-update-wrapper",children:[(0,x.jsx)("div",{className:"cart-shiping-update",children:(0,x.jsx)(i.rU,{to:"/storack-frontend-1-flone/shop-grid-standard",children:"Continue Shopping"})}),(0,x.jsx)("div",{className:"cart-clear",children:(0,x.jsx)("button",{onClick:function(){return j((0,m.sp)())},children:"Clear Shopping Cart"})})]})})}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)("div",{className:"cart-tax",children:[(0,x.jsx)("div",{className:"title-wrap",children:(0,x.jsx)("h4",{className:"cart-bottom-title section-bg-gray",children:"Estimate Shipping And Tax"})}),(0,x.jsxs)("div",{className:"tax-wrapper",children:[(0,x.jsx)("p",{children:"Enter your destination to get a shipping estimate."}),(0,x.jsxs)("div",{className:"tax-select-wrapper",children:[(0,x.jsxs)("div",{className:"tax-select",children:[(0,x.jsx)("label",{children:"* Country"}),(0,x.jsxs)("select",{className:"email s-email s-wid",children:[(0,x.jsx)("option",{children:"Bangladesh"}),(0,x.jsx)("option",{children:"Albania"}),(0,x.jsx)("option",{children:"\xc5land Islands"}),(0,x.jsx)("option",{children:"Afghanistan"}),(0,x.jsx)("option",{children:"Belgium"})]})]}),(0,x.jsxs)("div",{className:"tax-select",children:[(0,x.jsx)("label",{children:"* Region / State"}),(0,x.jsxs)("select",{className:"email s-email s-wid",children:[(0,x.jsx)("option",{children:"Bangladesh"}),(0,x.jsx)("option",{children:"Albania"}),(0,x.jsx)("option",{children:"\xc5land Islands"}),(0,x.jsx)("option",{children:"Afghanistan"}),(0,x.jsx)("option",{children:"Belgium"})]})]}),(0,x.jsxs)("div",{className:"tax-select",children:[(0,x.jsx)("label",{children:"* Zip/Postal Code"}),(0,x.jsx)("input",{type:"text"})]}),(0,x.jsx)("button",{className:"cart-btn-2",type:"submit",children:"Get A Quote"})]})]})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)("div",{className:"discount-code-wrapper",children:[(0,x.jsx)("div",{className:"title-wrap",children:(0,x.jsx)("h4",{className:"cart-bottom-title section-bg-gray",children:"Use Coupon Code"})}),(0,x.jsxs)("div",{className:"discount-code",children:[(0,x.jsx)("p",{children:"Enter your coupon code if you have one."}),(0,x.jsxs)("form",{children:[(0,x.jsx)("input",{type:"text",required:!0,name:"name"}),(0,x.jsx)("button",{className:"cart-btn-2",type:"submit",children:"Apply Coupon"})]})]})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,x.jsxs)("div",{className:"grand-totall",children:[(0,x.jsx)("div",{className:"title-wrap",children:(0,x.jsx)("h4",{className:"cart-bottom-title section-bg-gary-cart",children:"Cart Total"})}),(0,x.jsxs)("h5",{children:["Total products"," ",(0,x.jsx)("span",{children:p.currencySymbol+e.toFixed(2)})]}),(0,x.jsxs)("h4",{className:"grand-totall-title",children:["Grand Total"," ",(0,x.jsx)("span",{children:p.currencySymbol+e.toFixed(2)})]}),(0,x.jsx)(i.rU,{to:"/storack-frontend-1-flone/checkout",children:"Proceed to Checkout"})]})})]})]}):(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-12",children:(0,x.jsxs)("div",{className:"item-empty-area text-center",children:[(0,x.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,x.jsx)("i",{className:"pe-7s-cart"})}),(0,x.jsxs)("div",{className:"item-empty-area__text",children:["No items found in cart ",(0,x.jsx)("br",{})," ",(0,x.jsx)(i.rU,{to:"/storack-frontend-1-flone/shop-grid-standard",children:"Shop Now"})]})]})})})})})]})]})}},9778:function(e,s,r){var n=r(2461),l=r(1087),a=r(184);s.Z=function(e){var s=e.pages;return(0,a.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(n.Z,{children:null===s||void 0===s?void 0:s.map((function(e,r){var c=e.path,t=e.label;return r!==s.length-1?(0,a.jsx)(n.Z.Item,{linkProps:{to:c},linkAs:l.rU,children:t},t):(0,a.jsx)(n.Z.Item,{active:!0,children:t},t)}))})})})}},8032:function(e,s,r){var n=r(8182),l=r(1087),a=r(9725),c=r(5184),t=r(184);s.Z=function(e){var s=e.backgroundColorClass,r=e.spaceTopClass,i=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,h=e.containerClass,u=e.extraFooterClass,m=e.sideMenu;return(0,t.jsx)("footer",{className:(0,n.Z)("footer-area",s,r,i,u,o,d),children:(0,t.jsx)("div",{className:"".concat(h||"container"),children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,t.jsx)(a.Z,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,t.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,t.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"ABOUT US"})}),(0,t.jsx)("div",{className:"footer-list",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone/about",children:"About us"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone#/",children:"Store location"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone/contact",children:"Contact"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone#/",children:"Orders tracking"})})]})})]})}),(0,t.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,t.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"USEFUL LINKS"})}),(0,t.jsx)("div",{className:"footer-list",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone#/",children:"Returns"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone#/",children:"Support Policy"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone#/",children:"Size guide"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.rU,{to:"/storack-frontend-1-flone#/",children:"FAQs"})})]})})]})}),(0,t.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,t.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"FOLLOW US"})}),(0,t.jsx)("div",{className:"footer-list",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,t.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,t.jsx)(c.Z,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:m})})]})})})}},7939:function(e,s,r){r.d(s,{Z:function(){return x}});var n=r(9439),l=r(2791),a=r(8182),c=r(1567),t=r(9381),i=r(2824),o=r(2412),d=r(9434),h=r(7127),u=r(184),m=function(e){var s=e.borderStyle,r=(0,d.v9)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,a.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(h.Z,{currency:r}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Free delivery on order over"," ",(0,u.jsx)("span",{children:r.currencySymbol+(200*r.currencyRate).toFixed(2)})]})})]})},x=function(e){var s=e.layout,r=e.top,d=e.borderStyle,h=e.headerPaddingClass,x=e.headerPositionClass,j=e.headerBgClass,f=(0,l.useState)(0),p=(0,n.Z)(f,2),v=p[0],g=p[1],b=(0,l.useState)(0),N=(0,n.Z)(b,2),y=N[0],C=N[1];(0,l.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[]);var k=function(){g(window.scrollY)};return(0,u.jsxs)("header",{className:(0,a.Z)("header-area clearfix",j,x),children:[(0,u.jsx)("div",{className:(0,a.Z)("header-top-area",h,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(m,{borderStyle:d})})}),(0,u.jsxs)("div",{className:(0,a.Z)(h,"sticky-bar header-res-padding clearfix",v>y&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)(c.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(t.Z,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(i.Z,{})})]})}),(0,u.jsx)(o.Z,{})]})]})}},2461:function(e,s,r){r.d(s,{Z:function(){return f}});var n=r(1413),l=r(5987),a=r(1694),c=r.n(a),t=r(2791),i=r(162),o=r(1396),d=r(184),h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=t.forwardRef((function(e,s){var r=e.bsPrefix,a=e.active,t=e.children,u=e.className,m=e.as,x=void 0===m?"li":m,j=e.linkAs,f=void 0===j?o.Z:j,p=e.linkProps,v=e.href,g=e.title,b=e.target,N=(0,l.Z)(e,h),y=(0,i.vE)(r,"breadcrumb-item");return(0,d.jsx)(x,(0,n.Z)((0,n.Z)({ref:s},N),{},{className:c()(y,u,{active:a}),"aria-current":a?"page":void 0,children:a?t:(0,d.jsx)(f,(0,n.Z)((0,n.Z)({},p),{},{href:v,title:g,target:b,children:t}))}))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var m=u,x=["bsPrefix","className","listProps","children","label","as"],j=t.forwardRef((function(e,s){var r=e.bsPrefix,a=e.className,t=e.listProps,o=e.children,h=e.label,u=e.as,m=void 0===u?"nav":u,j=(0,l.Z)(e,x),f=(0,i.vE)(r,"breadcrumb");return(0,d.jsx)(m,(0,n.Z)((0,n.Z)({"aria-label":h,className:a,ref:s},j),{},{children:(0,d.jsx)("ol",(0,n.Z)((0,n.Z)({},t),{},{className:c()(f,null==t?void 0:t.className),children:o}))}))}));j.displayName="Breadcrumb",j.defaultProps={label:"breadcrumb",listProps:{}};var f=Object.assign(j,{Item:m})}}]);
//# sourceMappingURL=6010.492643b8.chunk.js.map