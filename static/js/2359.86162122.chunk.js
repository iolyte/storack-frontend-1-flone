"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2359],{7127:function(e,s,r){var n=r(9434),a=r(9230),i=r(147),t=r(184);s.Z=function(e){var s=e.currency,r=(0,a.$G)().i18n,c=(0,n.I0)(),l=function(e){var s=e.target.value;r.changeLanguage(s)},o=function(e){var s=e.target.value;c((0,i.N)(s))};return(0,t.jsxs)("div",{className:"language-currency-wrap",children:[(0,t.jsxs)("div",{className:"same-language-currency language-style",children:[(0,t.jsxs)("span",{children:["en"===r.resolvedLanguage?"English":"fn"===r.resolvedLanguage?"French":"de"===r.resolvedLanguage?"Germany":""," ",(0,t.jsx)("i",{className:"fa fa-angle-down"})]}),(0,t.jsx)("div",{className:"lang-car-dropdown",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"en",onClick:function(e){return l(e)},children:"English"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"fn",onClick:function(e){return l(e)},children:"French"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"de",onClick:function(e){return l(e)},children:"Germany"})})]})})]}),(0,t.jsxs)("div",{className:"same-language-currency use-style",children:[(0,t.jsxs)("span",{children:[s.currencyName," ",(0,t.jsx)("i",{className:"fa fa-angle-down"})]}),(0,t.jsx)("div",{className:"lang-car-dropdown",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,t.jsx)("div",{className:"same-language-currency",children:(0,t.jsx)("p",{children:"Call Us 3965410"})})]})}},9841:function(e,s,r){var n=r(8182),a=r(9577),i=r(184),t=function(e){var s,r=e.status,a=e.message,t=e.onValidated,c=e.spaceTopClass,l=e.subscribeBtnClass;return(0,i.jsx)("div",{className:(0,n.Z)("subscribe-form-3",c),children:(0,i.jsxs)("div",{className:"mc-form",children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===r&&(0,i.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,i.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),"success"===r&&(0,i.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),(0,i.jsx)("div",{className:"clear-3 ".concat(l||""),children:(0,i.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&t({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.Z=function(e){var s=e.mailchimpUrl,r=e.spaceTopClass,n=e.subscribeBtnClass;return(0,i.jsx)("div",{children:(0,i.jsx)(a.Z,{url:s,render:function(e){var s=e.subscribe,a=e.status,c=e.message;return(0,i.jsx)(t,{status:a,message:c,onValidated:function(e){return s(e)},spaceTopClass:r,subscribeBtnClass:n})}})})}},27:function(e,s,r){var n=r(9439),a=r(2791),i=r(8182),t=r(1087),c=r(9434),l=r(2558),o=r(1770),d=r(6664),u=r(4275),m=r(8725),p=r(184);s.Z=function(e){var s=e.product,r=e.currency,h=e.cartItem,x=e.wishlistItem,j=e.compareItem,g=e.spaceBottomClass,v=(0,a.useState)(!1),f=(0,n.Z)(v,2),b=f[0],N=f[1],C=(0,o.lk)(s.price,s.discount),y=+(s.price*r.currencyRate).toFixed(2),k=+(C*r.currencyRate).toFixed(2),w=(0,c.I0)();return(0,p.jsxs)(a.Fragment,{children:[(0,p.jsxs)("div",{className:(0,i.Z)("product-wrap",g),children:[(0,p.jsxs)("div",{className:"product-img",children:[(0,p.jsxs)(t.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:[(0,p.jsx)("img",{className:"default-img",src:"/storack-frontend-1-flone"+s.image[0],alt:""}),s.image.length>1?(0,p.jsx)("img",{className:"hover-img",src:"/storack-frontend-1-flone"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,p.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,p.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,p.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,p.jsxs)("div",{className:"product-action",children:[(0,p.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,p.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,m.Mp)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,p.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,p.jsx)(t.rU,{to:"".concat("/storack-frontend-1-flone","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,p.jsxs)("button",{onClick:function(){return w((0,u.Xq)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,p.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==h&&h.quantity>0?"Added":"Add to cart"]}):(0,p.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,p.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,p.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,p.jsxs)("div",{className:"product-content text-center",children:[(0,p.jsx)("h3",{children:(0,p.jsx)(t.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"product-rating",children:(0,p.jsx)(l.Z,{ratingValue:s.rating})}):"",(0,p.jsx)("div",{className:"product-price",children:null!==C?(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)("span",{children:r.currencySymbol+k})," ",(0,p.jsx)("span",{className:"old",children:r.currencySymbol+y})]}):(0,p.jsxs)("span",{children:[r.currencySymbol+y," "]})})]})]}),(0,p.jsx)(d.Z,{show:b,onHide:function(){return N(!1)},product:s,currency:r,discountedPrice:C,finalProductPrice:y,finalDiscountedPrice:k,wishlistItem:x,compareItem:j})]})}},1977:function(e,s,r){var n=r(8182),a=r(184);s.Z=function(e){var s=e.data,r=e.testimonialClass;return(0,a.jsxs)("div",{className:(0,n.Z)(r||"single-testimonial","text-center"),children:[(0,a.jsx)("img",{src:"/storack-frontend-1-flone"+s.image,alt:""}),(0,a.jsx)("p",{children:s.content}),(0,a.jsxs)("div",{className:"client-info",children:[(0,a.jsx)("i",{className:"fa fa-map-signs"}),(0,a.jsx)("h5",{children:s.customerName}),(0,a.jsx)("span",{children:s.title})]})]})}},8639:function(e,s,r){var n=r(2791),a=r(7939),i=r(8032),t=r(9354),c=r(184);s.Z=function(e){var s=e.children,r=e.headerContainerClass,l=e.headerTop,o=e.headerBorderStyle,d=e.headerPaddingClass;return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(a.Z,{layout:r,top:l,borderStyle:o,headerPaddingClass:d}),s,(0,c.jsx)(i.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"mb-70 pb-70",spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,c.jsx)(t.Z,{})]})}},2359:function(e,s,r){r.r(s),r.d(s,{default:function(){return q}});var n=r(2791),a=r(3695),i=r(8639),t=r(1496),c=r(8182),l=r(7842),o=JSON.parse('[{"id":1,"title":"Natural & Healthy","subtitle":"100% Fresh <br /> Flower Collection","image":"/assets/img/slider/slider-28.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Natural & Healthy","subtitle":"100% Fresh <br/> Flower Collection","image":"/assets/img/slider/slider-28.jpg","url":"/shop-grid-standard"}]'),d=r(1087),u=r(184),m=function(e){var s=e.data;return(0,u.jsx)("div",{className:"single-slider-2 slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res bg-img",style:{backgroundImage:"url(".concat("/storack-frontend-1-flone"+s.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-7 ms-auto",children:(0,u.jsxs)("div",{className:"slider-content-2 slider-content-flower slider-animated-1",children:[(0,u.jsx)("h3",{className:"animated",children:s.title}),(0,u.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,u.jsx)("div",{className:"slider-btn btn-hover",children:(0,u.jsx)(d.rU,{className:"animated",to:"/storack-frontend-1-flone"+s.url,children:"SHOP NOW"})})]})})})})})},p={effect:"fade",fadeEffect:{crossFade:!0},modules:[t.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(e){var s=e.spaceLeftClass,r=e.spaceRightClass;return(0,u.jsx)("div",{className:(0,c.Z)("slider-area",s,r),children:(0,u.jsx)("div",{className:"slider-active nav-style-1",children:o&&(0,u.jsx)(l.Z,{options:p,children:o.map((function(e,s){return(0,u.jsx)(l.o,{children:(0,u.jsx)(m,{data:e})},s)}))})})})},x=r(4454),j=r(1865),g=r(126),v=r(2563),f=function(e){var s=e.spaceTopClass,r=e.spaceBottomClass,n=e.category,a=e.productTabClass;return(0,u.jsx)("div",{className:(0,c.Z)("product-area",s,r),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)(j.Z.Container,{defaultActiveKey:"bestSeller",children:[(0,u.jsxs)(g.Z,{variant:"pills",className:"product-tab-list-2 mb-60 justify-content-center ".concat(a||""),children:[(0,u.jsx)(g.Z.Item,{children:(0,u.jsx)(g.Z.Link,{eventKey:"newArrival",children:(0,u.jsx)("h4",{children:"New Arrivals"})})}),(0,u.jsx)(g.Z.Item,{children:(0,u.jsx)(g.Z.Link,{eventKey:"bestSeller",children:(0,u.jsx)("h4",{children:"Best Sellers"})})}),(0,u.jsx)(g.Z.Item,{children:(0,u.jsx)(g.Z.Link,{eventKey:"saleItems",children:(0,u.jsx)("h4",{children:"Sale Items"})})})]}),(0,u.jsxs)(j.Z.Content,{children:[(0,u.jsx)(j.Z.Pane,{eventKey:"newArrival",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(v.Z,{category:n,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,u.jsx)(j.Z.Pane,{eventKey:"bestSeller",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(v.Z,{category:n,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,u.jsx)(j.Z.Pane,{eventKey:"saleItems",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(v.Z,{category:n,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,u.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,u.jsx)(d.rU,{className:"loadMore6",to:"/storack-frontend-1-flone/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})},b=r(9434),N=r(996),C=r(9439),y=r(2558),k=r(1770),w=r(6664),Z=r(4275),I=r(8725),S=function(e){var s=e.product,r=e.currency,a=e.cartItem,i=e.wishlistItem,t=e.compareItem,l=e.spaceBottomClass,o=(0,n.useState)(!1),m=(0,C.Z)(o,2),p=m[0],h=m[1],x=(0,k.lk)(s.price,s.discount),j=+(s.price*r.currencyRate).toFixed(2),g=+(x*r.currencyRate).toFixed(2),v=(0,b.I0)();return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsxs)("div",{className:(0,c.Z)("product-wrap",l),children:[(0,u.jsxs)("div",{className:"product-img",children:[(0,u.jsxs)(d.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:[(0,u.jsx)("img",{className:"default-img",src:"/storack-frontend-1-flone"+s.image[0],alt:""}),s.image.length>1?(0,u.jsx)("img",{className:"hover-img",src:"/storack-frontend-1-flone"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,u.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,u.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,u.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,u.jsxs)("div",{className:"product-action",children:[(0,u.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,u.jsx)("button",{className:void 0!==i?"active":"",disabled:void 0!==i,title:void 0!==i?"Added to wishlist":"Add to wishlist",onClick:function(){return v((0,I.Mp)(s))},children:(0,u.jsx)("i",{className:"pe-7s-like"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,u.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,u.jsx)(d.rU,{to:"".concat("/storack-frontend-1-flone","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,u.jsxs)("button",{onClick:function(){return v((0,Z.Xq)(s))},className:void 0!==a&&a.quantity>0?"active":"",disabled:void 0!==a&&a.quantity>0,title:void 0!==a?"Added to cart":"Add to cart",children:[" ",(0,u.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==a&&a.quantity>0?"Added":"Add to cart"]}):(0,u.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,u.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,u.jsx)("button",{title:"Quick View",onClick:function(){return h(!0)},children:(0,u.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,u.jsxs)("div",{className:"product-content text-center",children:[(0,u.jsx)("h3",{children:(0,u.jsx)(d.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,u.jsx)("div",{className:"product-rating",children:(0,u.jsx)(y.Z,{ratingValue:s.rating})}):"",(0,u.jsx)("div",{className:"product-price",children:null!==x?(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)("span",{children:r.currencySymbol+g})," ",(0,u.jsx)("span",{className:"old",children:r.currencySymbol+j})]}):(0,u.jsxs)("span",{children:[r.currencySymbol+j," "]})})]})]}),(0,u.jsx)(w.Z,{show:p,onHide:function(){return h(!1)},product:s,currency:r,discountedPrice:x,finalProductPrice:j,finalDiscountedPrice:g,wishlistItem:i,compareItem:t})]})},B={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},P=function(e){var s=e.spaceBottomClass,r=e.category,n=(0,b.v9)((function(e){return e.product})).products,a=(0,b.v9)((function(e){return e.currency})),i=(0,b.v9)((function(e){return e.cart})).cartItems,t=(0,b.v9)((function(e){return e.wishlist})).wishlistItems,o=(0,b.v9)((function(e){return e.compare})).compareItems,d=(0,k.Xp)(n,r,null,6);return(0,u.jsx)("div",{className:(0,c.Z)("related-product-area",s),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(N.Z,{titleText:"Our Products",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),null!==d&&void 0!==d&&d.length?(0,u.jsx)(l.Z,{options:B,children:d.map((function(e){return(0,u.jsx)(l.o,{children:(0,u.jsx)(S,{product:e,currency:a,cartItem:i.find((function(s){return s.id===e.id})),wishlistItem:t.find((function(s){return s.id===e.id})),compareItem:o.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})},F=r(4023),L=r(651),T=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-46.png","title":"Featured Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"right"},{"id":2,"image":"/assets/img/banner/banner-47.png","title":"New Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"left"}]'),U=function(e){var s=e.data,r=e.spaceBottomClass;return(0,u.jsxs)("div",{className:(0,c.Z)("single-banner-2",r,"right"===s.textAlign&&"align_right"),children:[(0,u.jsx)(d.rU,{to:"/storack-frontend-1-flone"+s.link,children:(0,u.jsx)("img",{src:"/storack-frontend-1-flone"+s.image,alt:""})}),(0,u.jsxs)("div",{className:"banner-content-2 banner-content-2--style2 banner-content-2--style2--violet",children:[(0,u.jsx)("h3",{children:s.title}),(0,u.jsxs)("h4",{children:[s.subtitle," ",(0,u.jsx)("span",{children:s.price})]}),(0,u.jsx)(d.rU,{to:"/storack-frontend-1-flone"+s.link,children:(0,u.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},A=function(e){var s=e.spaceBottomClass,r=e.spaceTopClass;return(0,u.jsx)("div",{className:(0,c.Z)("banner-area hm9-section-padding",r,s),children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:null===T||void 0===T?void 0:T.map((function(e,s){return(0,u.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,u.jsx)(U,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},q=function(){return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(a.Z,{titleTemplate:"Flower Shop Home",description:"Flower Shop home of flone react minimalist eCommerce template."}),(0,u.jsxs)(i.Z,{headerTop:"visible",headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2",children:[(0,u.jsx)(h,{spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,u.jsx)(x.Z,{spaceTopClass:"pt-10",spaceBottomClass:"pb-90",containerClass:"container-fluid",gutterClass:"padding-10-row-col"}),(0,u.jsx)(f,{category:"flower",spaceBottomClass:"pb-100"}),(0,u.jsx)(A,{spaceBottomClass:"pb-70"}),(0,u.jsx)(P,{category:"flower",spaceBottomClass:"pb-100"}),(0,u.jsx)(F.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3"}),(0,u.jsx)(L.Z,{spaceTopClass:"pt-80",spaceBottomClass:"pb-95",subscribeBtnClass:"dark-red-subscribe"})]})]})}},4454:function(e,s,r){r.d(s,{Z:function(){return c}});var n=r(8182),a=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),i=r(184),t=function(e){var s=e.data,r=e.spaceBottomClass;return(0,i.jsxs)("div",{className:(0,n.Z)("support-wrap-3 text-center",r),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,i.jsx)("div",{className:"support-icon-2",children:(0,i.jsx)("img",{className:"animated",src:"/storack-frontend-1-flone"+s.iconImage,alt:""})}),(0,i.jsxs)("div",{className:"support-content-3",children:[(0,i.jsx)("img",{src:"/storack-frontend-1-flone"+s.titleImage,alt:""}),(0,i.jsx)("p",{children:s.title})]})]})},c=function(e){var s=e.spaceTopClass,r=e.spaceBottomClass,c=e.containerClass,l=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,i.jsx)("div",{className:(0,n.Z)("support-area hm9-section-padding",s,r,o),style:d?{backgroundImage:"url(".concat("/storack-frontend-1-flone"+d,")")}:{},children:(0,i.jsx)("div",{className:(0,n.Z)(c,l),children:(0,i.jsx)("div",{className:"row",children:null===a||void 0===a?void 0:a.map((function(e,s){return(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,i.jsx)(t,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},7939:function(e,s,r){r.d(s,{Z:function(){return h}});var n=r(9439),a=r(2791),i=r(8182),t=r(1567),c=r(9381),l=r(2824),o=r(2412),d=r(9434),u=r(7127),m=r(184),p=function(e){var s=e.borderStyle,r=(0,d.v9)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,i.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(u.Z,{currency:r}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Free delivery on order over"," ",(0,m.jsx)("span",{children:r.currencySymbol+(200*r.currencyRate).toFixed(2)})]})})]})},h=function(e){var s=e.layout,r=e.top,d=e.borderStyle,u=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,j=(0,a.useState)(0),g=(0,n.Z)(j,2),v=g[0],f=g[1],b=(0,a.useState)(0),N=(0,n.Z)(b,2),C=N[0],y=N[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[]);var k=function(){f(window.scrollY)};return(0,m.jsxs)("header",{className:(0,i.Z)("header-area clearfix",x,h),children:[(0,m.jsx)("div",{className:(0,i.Z)("header-top-area",u,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(p,{borderStyle:d})})}),(0,m.jsxs)("div",{className:(0,i.Z)(u,"sticky-bar header-res-padding clearfix",v>C&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(t.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(l.Z,{})})]})}),(0,m.jsx)(o.Z,{})]})]})}},651:function(e,s,r){var n=r(8182),a=r(9841),i=r(184);s.Z=function(e){var s=e.spaceTopClass,r=e.spaceBottomClass,t=e.subscribeBtnClass,c=e.bgColorClass,l=e.subscribeColorClass;return(0,i.jsx)("div",{className:(0,n.Z)("subscribe-area-3",c,s,r),children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,i.jsxs)("div",{className:(0,n.Z)("subscribe-style-3 text-center",l),children:[(0,i.jsx)("h2",{children:"Join With Us! "}),(0,i.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,i.jsx)(a.Z,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:t})]})})})})})}},2563:function(e,s,r){var n=r(2791),a=r(9434),i=r(1770),t=r(27),c=r(184);s.Z=function(e){var s=e.spaceBottomClass,r=e.category,l=e.type,o=e.limit,d=(0,a.v9)((function(e){return e.product})).products,u=(0,a.v9)((function(e){return e.currency})),m=(0,a.v9)((function(e){return e.cart})).cartItems,p=(0,a.v9)((function(e){return e.wishlist})).wishlistItems,h=(0,a.v9)((function(e){return e.compare})).compareItems,x=(0,i.Xp)(d,r,l,o);return(0,c.jsx)(n.Fragment,{children:null===x||void 0===x?void 0:x.map((function(e){return(0,c.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,c.jsx)(t.Z,{spaceBottomClass:s,product:e,currency:u,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:h.find((function(s){return s.id===e.id}))})},e.id)}))})}},4023:function(e,s,r){var n=r(8182),a=r(7842),i=r(9207),t=r(1977),c=r(184),l={slidesPerView:1,loop:!0,autoplay:!0};s.Z=function(e){var s=e.spaceTopClass,r=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.testimonialClass;return(0,c.jsx)("div",{className:(0,n.Z)("testimonial-area",s,r,o,d,u),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,c.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:i&&(0,c.jsx)(a.Z,{options:l,children:i.map((function(e,s){return(0,c.jsx)(a.o,{children:(0,c.jsx)(t.Z,{data:e,testimonialClass:m})},s)}))})})})})})})}},9207:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=2359.86162122.chunk.js.map