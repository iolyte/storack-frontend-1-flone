"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[7485],{9725:function(e,r,s){var n=s(8182),a=s(1087),l=s(184);r.Z=function(e){var r=e.footerLogo,s=e.spaceBottomClass,c=e.colorClass;return(0,l.jsxs)("div",{className:(0,n.Z)("copyright",s,c),children:[(0,l.jsx)("div",{className:"footer-logo",children:(0,l.jsx)(a.rU,{to:"/storack-frontend-1-flone/",children:(0,l.jsx)("img",{alt:"",src:"/storack-frontend-1-flone"+r})})}),(0,l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,l.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Storack"}),".",(0,l.jsx)("br",{})," All Rights Reserved"]})]})}},5184:function(e,r,s){s.d(r,{Z:function(){return i}});var n=s(8182),a=s(9577),l=s(184),c=function(e){var r,s=e.status,n=e.message,a=e.onValidated;return(0,l.jsxs)("div",{className:"subscribe-form",children:[(0,l.jsxs)("div",{className:"mc-form",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return r=e},type:"email",placeholder:"Enter your email address..."})}),(0,l.jsx)("div",{className:"clear",children:(0,l.jsx)("button",{className:"button",onClick:function(){r&&r.value.indexOf("@")>-1&&a({EMAIL:r.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===s&&(0,l.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===s&&(0,l.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===s&&(0,l.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},t=function(e){var r=e.mailchimpUrl;return(0,l.jsx)("div",{children:(0,l.jsx)(a.Z,{url:r,render:function(e){var r=e.subscribe,s=e.status,n=e.message;return(0,l.jsx)(c,{status:s,message:n,onValidated:function(e){return r(e)}})}})})},i=function(e){var r=e.spaceBottomClass,s=e.spaceLeftClass,a=e.sideMenu,c=e.colorClass,i=e.widgetColorClass;return(0,l.jsxs)("div",{className:(0,n.Z)("footer-widget",r,a?"ml-ntv5":s,i),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"SUBSCRIBE"})}),(0,l.jsxs)("div",{className:(0,n.Z)("subscribe-style",c),children:[(0,l.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,l.jsx)(t,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},1567:function(e,r,s){var n=s(8182),a=s(1087),l=s(184);r.Z=function(e){var r=e.imageUrl,s=e.logoClass;return(0,l.jsx)("div",{className:(0,n.Z)(s),children:(0,l.jsx)(a.rU,{to:"/storack-frontend-1-flone/",children:(0,l.jsx)("img",{alt:"",src:"/storack-frontend-1-flone"+r})})})}},7127:function(e,r,s){var n=s(9434),a=s(9230),l=s(147),c=s(184);r.Z=function(e){var r=e.currency,s=(0,a.$G)().i18n,t=(0,n.I0)(),i=function(e){var r=e.target.value;s.changeLanguage(r)},o=function(e){var r=e.target.value;t((0,l.N)(r))};return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return i(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return i(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return i(e)},children:"Germany"})})]})})]}),(0,c.jsxs)("div",{className:"same-language-currency use-style",children:[(0,c.jsxs)("span",{children:[r.currencyName," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency",children:(0,c.jsx)("p",{children:"Call Us 3965410"})})]})}},2558:function(e,r,s){var n=s(2791),a=s(184);r.Z=function(e){for(var r=e.ratingValue,s=[],l=0;l<5;l++)s.push((0,a.jsx)("i",{className:"fa fa-star-o"},l));if(r&&r>0)for(var c=0;c<=r-1;c++)s[c]=(0,a.jsx)("i",{className:"fa fa-star-o yellow"},c);return(0,a.jsx)(n.Fragment,{children:s})}},9354:function(e,r,s){s.d(r,{Z:function(){return t}});var n=s(9439),a=s(2791),l=function(){var e=(0,a.useState)(!1),r=(0,n.Z)(e,2),s=r[0],l=r[1];return(0,a.useEffect)((function(){var e=function(){var e=window.pageYOffset;l(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[s]),{stick:s,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=s(184),t=function(){var e=l(),r=e.stick,s=e.onClickHandler;return r?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:s,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},9858:function(e,r,s){var n=s(2791),a=s(7939),l=s(8032),c=s(9354),t=s(184);r.Z=function(e){var r=e.children,s=e.headerContainerClass,i=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(a.Z,{layout:s,top:i,headerPaddingClass:o,headerPositionClass:d}),r,(0,t.jsx)(l.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,t.jsx)(c.Z,{})]})}},7485:function(e,r,s){s.r(r);var n=s(2791),a=s(7689),l=s(1087),c=s(9434),t=s(1770),i=s(3695),o=s(9858),d=s(9778),u=s(2558),m=s(4275),h=s(1065),f=s(184);r.default=function(){var e=(0,c.I0)(),r=(0,a.TH)().pathname,s=(0,c.v9)((function(e){return e.currency})),x=(0,c.v9)((function(e){return e.compare})).compareItems,j=(0,c.v9)((function(e){return e.cart})).cartItems;return(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)(i.Z,{titleTemplate:"Compare",description:"Compare page of flone react minimalist eCommerce template."}),(0,f.jsxs)(o.Z,{headerTop:"visible",children:[(0,f.jsx)(d.Z,{pages:[{label:"Home",path:"/storack-frontend-1-flone/"},{label:"Compare",path:"/storack-frontend-1-flone"+r}]}),(0,f.jsx)("div",{className:"compare-main-area pt-90 pb-100",children:(0,f.jsx)("div",{className:"container",children:x&&x.length>=1?(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-lg-12",children:(0,f.jsx)("div",{className:"compare-page-content",children:(0,f.jsx)("div",{className:"compare-table table-responsive",children:(0,f.jsx)("table",{className:"table table-bordered mb-0",children:(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:"title-column",children:"Product Info"}),x.map((function(r,s){var n=j.find((function(e){return e.id===r.id}));return(0,f.jsxs)("td",{className:"product-image-title",children:[(0,f.jsx)("div",{className:"compare-remove",children:(0,f.jsx)("button",{onClick:function(){return e((0,h.Ht)(r.id))},children:(0,f.jsx)("i",{className:"pe-7s-trash"})})}),(0,f.jsx)(l.rU,{to:"/storack-frontend-1-flone/product/"+r.id,className:"image",children:(0,f.jsx)("img",{className:"img-fluid",src:"/storack-frontend-1-flone"+r.image[0],alt:""})}),(0,f.jsx)("div",{className:"product-title",children:(0,f.jsx)(l.rU,{to:"/storack-frontend-1-flone/product/"+r.id,children:r.name})}),(0,f.jsx)("div",{className:"compare-btn",children:r.affiliateLink?(0,f.jsxs)("a",{href:r.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):r.variation&&r.variation.length>=1?(0,f.jsx)(l.rU,{to:"".concat("/storack-frontend-1-flone","/product/").concat(r.id),children:"Select Option"}):r.stock&&r.stock>0?(0,f.jsx)("button",{onClick:function(){return e((0,m.Xq)(r))},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==r?"Added to cart":"Add to cart",children:void 0!==n&&n.quantity>0?"Added":"Add to cart"}):(0,f.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})})]},s)}))]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:"title-column",children:"Price"}),x.map((function(e,r){var a=(0,t.lk)(e.price,e.discount),l=(e.price*s.currencyRate).toFixed(2),c=(a*s.currencyRate).toFixed(2);return(0,f.jsx)("td",{className:"product-price",children:null!==a?(0,f.jsxs)(n.Fragment,{children:[(0,f.jsx)("span",{className:"amount old",children:s.currencySymbol+l}),(0,f.jsx)("span",{className:"amount",children:s.currencySymbol+c})]}):(0,f.jsx)("span",{className:"amount",children:s.currencySymbol+l})},r)}))]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:"title-column",children:"Description"}),x.map((function(e,r){return(0,f.jsx)("td",{className:"product-desc",children:(0,f.jsx)("p",{children:e.shortDescription?e.shortDescription:"N/A"})},r)}))]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:"title-column",children:"Rating"}),x.map((function(e,r){return(0,f.jsx)("td",{className:"product-rating",children:(0,f.jsx)(u.Z,{ratingValue:e.rating})},r)}))]})]})})})})})}):(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-lg-12",children:(0,f.jsxs)("div",{className:"item-empty-area text-center",children:[(0,f.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,f.jsx)("i",{className:"pe-7s-shuffle"})}),(0,f.jsxs)("div",{className:"item-empty-area__text",children:["No items found in compare ",(0,f.jsx)("br",{})," ",(0,f.jsx)(l.rU,{to:"/storack-frontend-1-flone/shop-grid-standard",children:"Add Items"})]})]})})})})})]})]})}},9778:function(e,r,s){var n=s(2461),a=s(1087),l=s(184);r.Z=function(e){var r=e.pages;return(0,l.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(n.Z,{children:null===r||void 0===r?void 0:r.map((function(e,s){var c=e.path,t=e.label;return s!==r.length-1?(0,l.jsx)(n.Z.Item,{linkProps:{to:c},linkAs:a.rU,children:t},t):(0,l.jsx)(n.Z.Item,{active:!0,children:t},t)}))})})})}},8032:function(e,r,s){var n=s(8182),a=s(1087),l=s(9725),c=s(5184),t=s(184);r.Z=function(e){var r=e.backgroundColorClass,s=e.spaceTopClass,i=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,m=e.extraFooterClass,h=e.sideMenu;return(0,t.jsx)("footer",{className:(0,n.Z)("footer-area",r,s,i,m,o,d),children:(0,t.jsx)("div",{className:"".concat(u||"container"),children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,t.jsx)(l.Z,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,t.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,t.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"ABOUT US"})}),(0,t.jsx)("div",{className:"footer-list",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone/about",children:"About us"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone#/",children:"Store location"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone/contact",children:"Contact"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone#/",children:"Orders tracking"})})]})})]})}),(0,t.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,t.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"USEFUL LINKS"})}),(0,t.jsx)("div",{className:"footer-list",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone#/",children:"Returns"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone#/",children:"Support Policy"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone#/",children:"Size guide"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.rU,{to:"/storack-frontend-1-flone#/",children:"FAQs"})})]})})]})}),(0,t.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,t.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"FOLLOW US"})}),(0,t.jsx)("div",{className:"footer-list",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,t.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,t.jsx)(c.Z,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},7939:function(e,r,s){s.d(r,{Z:function(){return f}});var n=s(9439),a=s(2791),l=s(8182),c=s(1567),t=s(9381),i=s(2824),o=s(2412),d=s(9434),u=s(7127),m=s(184),h=function(e){var r=e.borderStyle,s=(0,d.v9)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,l.Z)("header-top-wap","fluid-border"===r&&"border-bottom"),children:[(0,m.jsx)(u.Z,{currency:s}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Free delivery on order over"," ",(0,m.jsx)("span",{children:s.currencySymbol+(200*s.currencyRate).toFixed(2)})]})})]})},f=function(e){var r=e.layout,s=e.top,d=e.borderStyle,u=e.headerPaddingClass,f=e.headerPositionClass,x=e.headerBgClass,j=(0,a.useState)(0),v=(0,n.Z)(j,2),p=v[0],g=v[1],b=(0,a.useState)(0),N=(0,n.Z)(b,2),k=N[0],y=N[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){g(window.scrollY)};return(0,m.jsxs)("header",{className:(0,l.Z)("header-area clearfix",x,f),children:[(0,m.jsx)("div",{className:(0,l.Z)("header-top-area",u,"visible"===s?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===r?r:"container",children:(0,m.jsx)(h,{borderStyle:d})})}),(0,m.jsxs)("div",{className:(0,l.Z)(u,"sticky-bar header-res-padding clearfix",p>k&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===r?r:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(c.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(t.Z,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(i.Z,{})})]})}),(0,m.jsx)(o.Z,{})]})]})}},2461:function(e,r,s){s.d(r,{Z:function(){return j}});var n=s(1413),a=s(5987),l=s(1694),c=s.n(l),t=s(2791),i=s(162),o=s(1396),d=s(184),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=t.forwardRef((function(e,r){var s=e.bsPrefix,l=e.active,t=e.children,m=e.className,h=e.as,f=void 0===h?"li":h,x=e.linkAs,j=void 0===x?o.Z:x,v=e.linkProps,p=e.href,g=e.title,b=e.target,N=(0,a.Z)(e,u),k=(0,i.vE)(s,"breadcrumb-item");return(0,d.jsx)(f,(0,n.Z)((0,n.Z)({ref:r},N),{},{className:c()(k,m,{active:l}),"aria-current":l?"page":void 0,children:l?t:(0,d.jsx)(j,(0,n.Z)((0,n.Z)({},v),{},{href:p,title:g,target:b,children:t}))}))}));m.displayName="BreadcrumbItem",m.defaultProps={active:!1,linkProps:{}};var h=m,f=["bsPrefix","className","listProps","children","label","as"],x=t.forwardRef((function(e,r){var s=e.bsPrefix,l=e.className,t=e.listProps,o=e.children,u=e.label,m=e.as,h=void 0===m?"nav":m,x=(0,a.Z)(e,f),j=(0,i.vE)(s,"breadcrumb");return(0,d.jsx)(h,(0,n.Z)((0,n.Z)({"aria-label":u,className:l,ref:r},x),{},{children:(0,d.jsx)("ol",(0,n.Z)((0,n.Z)({},t),{},{className:c()(j,null==t?void 0:t.className),children:o}))}))}));x.displayName="Breadcrumb",x.defaultProps={label:"breadcrumb",listProps:{}};var j=Object.assign(x,{Item:h})}}]);
//# sourceMappingURL=7485.8f820378.chunk.js.map