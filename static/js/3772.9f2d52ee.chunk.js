"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[3772],{6853:function(e,s,n){var a=n(1087),r=n(184);s.Z=function(e){var s=e.singlePost;return(0,r.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,r.jsxs)("div",{className:"blog-img",children:[(0,r.jsx)(a.rU,{to:"/storack-frontend-1-flone"+s.url,children:(0,r.jsx)("img",{src:"/storack-frontend-1-flone"+s.image,alt:""})}),(0,r.jsx)("div",{className:"blog-category-names",children:s.category.map((function(e,s){return(0,r.jsx)("span",{className:"purple",children:e},s)}))})]}),(0,r.jsx)("div",{className:"blog-content-wrap",children:(0,r.jsxs)("div",{className:"blog-content text-center",children:[(0,r.jsx)("h3",{children:(0,r.jsx)(a.rU,{to:"/storack-frontend-1-flone"+s.url,children:s.title})}),(0,r.jsxs)("span",{children:["By"," ",(0,r.jsx)(a.rU,{to:"/storack-frontend-1-flone"+s.authorUrl,children:s.author})]})]})})]})}},4520:function(e,s,n){var a=n(8182),r=n(184);s.Z=function(e){var s=e.data,n=e.spaceBottomClass;return(0,r.jsx)("div",{className:(0,a.Z)("single-brand-logo",n),children:(0,r.jsx)("img",{src:"/storack-frontend-1-flone"+s.image,alt:""})})}},7127:function(e,s,n){var a=n(9434),r=n(9230),t=n(147),i=n(184);s.Z=function(e){var s=e.currency,n=(0,r.$G)().i18n,c=(0,a.I0)(),l=function(e){var s=e.target.value;n.changeLanguage(s)},o=function(e){var s=e.target.value;c((0,t.N)(s))};return(0,i.jsxs)("div",{className:"language-currency-wrap",children:[(0,i.jsxs)("div",{className:"same-language-currency language-style",children:[(0,i.jsxs)("span",{children:["en"===n.resolvedLanguage?"English":"fn"===n.resolvedLanguage?"French":"de"===n.resolvedLanguage?"Germany":""," ",(0,i.jsx)("i",{className:"fa fa-angle-down"})]}),(0,i.jsx)("div",{className:"lang-car-dropdown",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"en",onClick:function(e){return l(e)},children:"English"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"fn",onClick:function(e){return l(e)},children:"French"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"de",onClick:function(e){return l(e)},children:"Germany"})})]})})]}),(0,i.jsxs)("div",{className:"same-language-currency use-style",children:[(0,i.jsxs)("span",{children:[s.currencyName," ",(0,i.jsx)("i",{className:"fa fa-angle-down"})]}),(0,i.jsx)("div",{className:"lang-car-dropdown",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,i.jsx)("div",{className:"same-language-currency",children:(0,i.jsx)("p",{children:"Call Us 3965410"})})]})}},4677:function(e,s,n){var a=n(9439),r=n(2791),t=n(8182),i=n(1087),c=n(9434),l=n(1770),o=n(6664),d=n(4275),m=n(8725),u=n(1065),g=n(184);s.Z=function(e){var s=e.product,n=e.currency,p=e.cartItem,h=e.wishlistItem,x=e.compareItem,j=e.spaceBottomClass,f=e.colorClass,v=e.titlePriceClass,b=(0,r.useState)(!1),N=(0,a.Z)(b,2),k=N[0],y=N[1],C=(0,l.lk)(s.price,s.discount),w=+(s.price*n.currencyRate).toFixed(2),Z=+(C*n.currencyRate).toFixed(2),I=(0,c.I0)();return(0,g.jsxs)(r.Fragment,{children:[(0,g.jsxs)("div",{className:(0,t.Z)("product-wrap-2",j,f),children:[(0,g.jsxs)("div",{className:"product-img",children:[(0,g.jsxs)(i.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:[(0,g.jsx)("img",{className:"default-img",src:"/storack-frontend-1-flone"+s.image[0],alt:""}),s.image.length>1?(0,g.jsx)("img",{className:"hover-img",src:"/storack-frontend-1-flone"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,g.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,g.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,g.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,g.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,g.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,g.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,g.jsx)(i.rU,{to:"".concat("/storack-frontend-1-flone","/product/").concat(s.id),title:"Select options",children:(0,g.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,g.jsxs)("button",{onClick:function(){return I((0,d.Xq)(s))},className:void 0!==p&&p.quantity>0?"active":"",disabled:void 0!==p&&p.quantity>0,title:void 0!==p?"Added to cart":"Add to cart",children:[" ",(0,g.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,g.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,g.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,g.jsx)("button",{onClick:function(){return y(!0)},title:"Quick View",children:(0,g.jsx)("i",{className:"fa fa-eye"})}),(0,g.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return I((0,u.a$)(s))},children:(0,g.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,g.jsxs)("div",{className:"product-content-2",children:[(0,g.jsxs)("div",{className:"title-price-wrap-2 ".concat(v||""),children:[(0,g.jsx)("h3",{children:(0,g.jsx)(i.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:s.name})}),(0,g.jsx)("div",{className:"price-2",children:null!==C?(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)("span",{children:n.currencySymbol+Z})," ",(0,g.jsx)("span",{className:"old",children:n.currencySymbol+w})]}):(0,g.jsxs)("span",{children:[n.currencySymbol+w," "]})})]}),(0,g.jsx)("div",{className:"pro-wishlist-2",children:(0,g.jsx)("button",{className:void 0!==h?"active":"",disabled:void 0!==h,title:void 0!==h?"Added to wishlist":"Add to wishlist",onClick:function(){return I((0,m.Mp)(s))},children:(0,g.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,g.jsx)(o.Z,{show:k,onHide:function(){return y(!1)},product:s,currency:n,discountedPrice:C,finalProductPrice:w,finalDiscountedPrice:Z,wishlistItem:h,compareItem:x})]})}},2721:function(e,s,n){var a=n(8182),r=n(184);s.Z=function(e){var s=e.titleText,n=e.positionClass,t=e.spaceClass,i=e.colorClass;return(0,r.jsx)("div",{className:(0,a.Z)("section-title-5",n,t),children:(0,r.jsx)("h2",{className:(0,a.Z)(i),children:s})})}},5685:function(e,s,n){n.d(s,{Z:function(){return h}});var a=n(2791),r=n(9439),t=n(9434),i=n(1567),c=n(2824),l=n(9381),o=n(2412),d=n(7127),m=n(184),u=function(){var e=(0,a.useState)(0),s=(0,r.Z)(e,2),n=s[0],u=s[1],g=(0,a.useState)(0),p=(0,r.Z)(g,2),h=p[0],x=p[1],j=(0,t.v9)((function(e){return e.currency}));(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return x(e.offsetTop),window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}}),[]);var f=function(){u(window.scrollY)};return(0,m.jsxs)("header",{className:"header-area clearfix header-hm9 transparent-bar",children:[(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"header-top-area d-none d-lg-block",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-5 col-md-8 col-12",children:(0,m.jsx)(d.Z,{currency:j})}),(0,m.jsx)("div",{className:"col-lg-2 d-none d-lg-block text-center",children:(0,m.jsx)(i.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo-hm-9"})}),(0,m.jsx)("div",{className:"col-lg-5 col-md-4 col-12",children:(0,m.jsx)(c.Z,{})})]})})}),(0,m.jsx)("div",{className:"header-bottom sticky-bar header-res-padding header-padding-2 ".concat(n>h?"stick":""),children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,m.jsx)(i.Z,{imageUrl:"/assets/img/logo/logo.png"})}),(0,m.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,m.jsx)(c.Z,{})}),(0,m.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,m.jsx)(l.Z,{})})]}),(0,m.jsx)(o.Z,{})]})})]})},g=n(8032),p=n(9354),h=function(e){var s=e.children,n=e.footerBgClass;return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(u,{}),s,(0,m.jsx)(g.Z,{backgroundColorClass:n||"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,m.jsx)(p.Z,{})]})}},3772:function(e,s,n){n.r(s),n.d(s,{default:function(){return F}});var a=n(2791),r=n(3695),t=n(5685),i=n(4454),c=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-38.png","title":"Book","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-39.png","title":"Book","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"}]'),l=n(8182),o=n(1087),d=n(184),m=function(e){var s=e.data,n=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,l.Z)("single-banner",n),children:[(0,d.jsx)(o.rU,{to:"/storack-frontend-1-flone"+s.link,children:(0,d.jsx)("img",{src:"/storack-frontend-1-flone"+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content banner-pink",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.rU,{to:"/storack-frontend-1-flone"+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},u=function(){return(0,d.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,d.jsx)("div",{className:"row",children:null===c||void 0===c?void 0:c.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-12 col-md-6 col-sm-6",children:(0,d.jsx)(m,{data:e,spaceBottomClass:"mb-30"})},s)}))})})},g=n(1496),p=n(7842),h=JSON.parse('[{"id":1,"title":"New Arrivals","subtitle":"Book Shop <br /> Find Your Book","image":"/assets/img/slider/slider-11.jpg","url":"/shop-grid-standard"},{"id":2,"title":"New Arrivals","subtitle":"Book Shop <br /> Find Your Book","image":"/assets/img/slider/slider-11-2.jpg","url":"/shop-grid-standard"}]'),x=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider-2 slider-height-18 d-flex align-items-center slider-overly-res bg-cover",style:{backgroundImage:"url(".concat("/storack-frontend-1-flone"+s.image,")")},children:(0,d.jsxs)("div",{className:"slider-content-7 slider-animated-1 ml-70",children:[(0,d.jsx)("h3",{className:"animated",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn-9 btn-hover",children:(0,d.jsx)(o.rU,{className:"animated",to:s.url,children:"SHOP NOW"})})]})})},j={effect:"fade",fadeEffect:{crossFade:!0},modules:[g.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},f=function(){return(0,d.jsx)("div",{className:"slider-area res-mrg-md-mb",children:(0,d.jsx)("div",{className:"slider-active-3",children:h&&(0,d.jsx)(p.Z,{options:j,children:h.map((function(e,s){return(0,d.jsx)(p.o,{children:(0,d.jsx)(x,{data:e})},s)}))})})})},v=function(){return(0,d.jsx)("div",{className:"slider-banner-area",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row flex-row-reverse",children:[(0,d.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,d.jsx)(f,{})}),(0,d.jsx)(u,{})]})})})},b=n(8232),N=function(e){var s=e.spaceTopClass,n=e.backgroundImage;return(0,d.jsx)("div",{className:(0,l.Z)("save-money-area",s),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"bg-img pt-100 pb-100",style:{backgroundImage:"url(".concat("/storack-frontend-1-flone"+n,")")},children:(0,d.jsxs)("div",{className:"save-money-content",children:[(0,d.jsx)("h2",{children:"Shop and save money"}),(0,d.jsx)("div",{className:"save-money-btn",children:(0,d.jsx)(o.rU,{to:"/storack-frontend-1-flone/shop-grid-standard",children:"Buy $97.09"})})]})})})})},k=n(9434),y=n(2721),C=n(4677),w=n(1770),Z={loop:!1,grabCursor:!0,observer:!0,observeParents:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},I=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass,a=e.category,r=e.limit,t=(0,k.v9)((function(e){return e.product})).products,i=(0,k.v9)((function(e){return e.currency})),c=(0,k.v9)((function(e){return e.cart})).cartItems,o=(0,k.v9)((function(e){return e.wishlist})).wishlistItems,m=(0,k.v9)((function(e){return e.compare})).compareItems,u=(0,w.Xp)(t,a,"new",r);return(0,d.jsx)("div",{className:(0,l.Z)("new-product-area",n,s),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(y.Z,{titleText:"New Products",positionClass:"text-center",spaceClass:"mb-60"}),null!==u&&void 0!==u&&u.length?(0,d.jsx)(p.Z,{options:Z,children:u.map((function(e){return(0,d.jsx)(p.o,{children:(0,d.jsx)(C.Z,{product:e,currency:i,cartItem:c.find((function(s){return s.id===e.id})),wishlistItem:o.find((function(s){return s.id===e.id})),compareItem:m.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})},B=n(2913),S=n(4520),P=n(5947),U={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:4}}},A=function(){return(0,d.jsx)("div",{className:"brand-logo-area",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"bg-gray-6 brand-logo-wrap",children:(0,d.jsx)("div",{className:"brand-logo-active-2",children:P&&(0,d.jsx)(p.Z,{options:U,children:P.map((function(e,s){return(0,d.jsx)(p.o,{children:(0,d.jsx)(S.Z,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})})})},F=function(){return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(r.Z,{titleTemplate:"Book Store Home",description:"Book Store Home of flone react minimalist eCommerce template."}),(0,d.jsxs)(t.Z,{children:[(0,d.jsx)(v,{}),(0,d.jsx)(i.Z,{spaceBottomClass:"pb-70",containerClass:"container",responsiveClass:"res-mrg-md-mt"}),(0,d.jsx)(b.Z,{category:"book",productTabClass:"product-tab-pink2"}),(0,d.jsx)(N,{spaceTopClass:"pt-100",backgroundImage:"/assets/img/bg/bg-5.jpg"}),(0,d.jsx)(I,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",category:"book",limit:6}),(0,d.jsx)(A,{}),(0,d.jsx)(B.Z,{spaceTopClass:"pt-95",spaceBottomClass:"pb-55"})]})]})}},2913:function(e,s,n){var a=n(8182),r=n(9069),t=n(6853),i=n(996),c=n(184);s.Z=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass;return(0,c.jsx)("div",{className:(0,a.Z)("blog-area",s,n),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(i.Z,{titleText:"OUR BLOG",positionClass:"text-center",spaceClass:"mb-55"}),(0,c.jsx)("div",{className:"row",children:null===r||void 0===r?void 0:r.map((function(e){return(0,c.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,c.jsx)(t.Z,{singlePost:e})},e.id)}))})]})})}},4454:function(e,s,n){n.d(s,{Z:function(){return c}});var a=n(8182),r=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),t=n(184),i=function(e){var s=e.data,n=e.spaceBottomClass;return(0,t.jsxs)("div",{className:(0,a.Z)("support-wrap-3 text-center",n),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,t.jsx)("div",{className:"support-icon-2",children:(0,t.jsx)("img",{className:"animated",src:"/storack-frontend-1-flone"+s.iconImage,alt:""})}),(0,t.jsxs)("div",{className:"support-content-3",children:[(0,t.jsx)("img",{src:"/storack-frontend-1-flone"+s.titleImage,alt:""}),(0,t.jsx)("p",{children:s.title})]})]})},c=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass,c=e.containerClass,l=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,t.jsx)("div",{className:(0,a.Z)("support-area hm9-section-padding",s,n,o),style:d?{backgroundImage:"url(".concat("/storack-frontend-1-flone"+d,")")}:{},children:(0,t.jsx)("div",{className:(0,a.Z)(c,l),children:(0,t.jsx)("div",{className:"row",children:null===r||void 0===r?void 0:r.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,t.jsx)(i,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},5770:function(e,s,n){n.d(s,{Z:function(){return h}});var a=n(2791),r=n(9434),t=n(1770),i=n(9439),c=n(1087),l=n(8182),o=n(6664),d=n(4275),m=n(8725),u=n(1065),g=n(184),p=function(e){var s=e.product,n=e.currency,p=e.cartItem,h=e.wishlistItem,x=e.compareItem,j=e.spaceBottomClass,f=e.colorClass,v=e.titlePriceClass,b=(0,a.useState)(!1),N=(0,i.Z)(b,2),k=N[0],y=N[1],C=(0,t.lk)(s.price,s.discount),w=+(s.price*n.currencyRate).toFixed(2),Z=+(C*n.currencyRate).toFixed(2),I=(0,r.I0)();return(0,g.jsxs)(a.Fragment,{children:[(0,g.jsxs)("div",{className:(0,l.Z)("product-wrap-2",j,f),children:[(0,g.jsxs)("div",{className:"product-img",children:[(0,g.jsxs)(c.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:[(0,g.jsx)("img",{className:"default-img",src:"/storack-frontend-1-flone"+s.image[0],alt:""}),s.image.length>1?(0,g.jsx)("img",{className:"hover-img",src:"/storack-frontend-1-flone"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,g.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,g.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,g.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,g.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,g.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,g.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,g.jsx)(c.rU,{to:"".concat("/storack-frontend-1-flone","/product/").concat(s.id),title:"Select options",children:(0,g.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,g.jsxs)("button",{onClick:function(){return I((0,d.Xq)(s))},className:void 0!==p&&p.quantity>0?"active":"",disabled:void 0!==p&&p.quantity>0,title:void 0!==p?"Added to cart":"Add to cart",children:[" ",(0,g.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,g.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,g.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,g.jsx)("button",{onClick:function(){return y(!0)},title:"Quick View",children:(0,g.jsx)("i",{className:"fa fa-eye"})}),(0,g.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return I((0,u.a$)(s))},children:(0,g.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,g.jsxs)("div",{className:"product-content-2",children:[(0,g.jsxs)("div",{className:"title-price-wrap-2 ".concat(v||""),children:[(0,g.jsx)("h3",{children:(0,g.jsx)(c.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:s.name})}),(0,g.jsx)("div",{className:"price-2",children:null!==C?(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)("span",{children:n.currencySymbol+Z})," ",(0,g.jsx)("span",{className:"old",children:n.currencySymbol+w})]}):(0,g.jsxs)("span",{children:[n.currencySymbol+w," "]})})]}),(0,g.jsx)("div",{className:"pro-wishlist-2",children:(0,g.jsx)("button",{className:void 0!==h?"active":"",disabled:void 0!==h,title:void 0!==h?"Added to wishlist":"Add to wishlist",onClick:function(){return I((0,m.Mp)(s))},children:(0,g.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,g.jsx)(o.Z,{show:k,onHide:function(){return y(!1)},product:s,currency:n,discountedPrice:C,finalProductPrice:w,finalDiscountedPrice:Z,wishlistItem:h,compareItem:x})]})},h=function(e){var s=e.spaceBottomClass,n=e.colorClass,i=e.titlePriceClass,c=e.category,l=e.type,o=e.limit,d=(0,r.v9)((function(e){return e.product})).products,m=(0,r.v9)((function(e){return e.currency})),u=(0,r.v9)((function(e){return e.cart})).cartItems,h=(0,r.v9)((function(e){return e.wishlist})).wishlistItems,x=(0,r.v9)((function(e){return e.compare})).compareItems,j=(0,t.Xp)(d,c,l,o);return(0,g.jsx)(a.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,g.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,g.jsx)(p,{spaceBottomClass:s,colorClass:n,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id})),titlePriceClass:i})},e.id)}))})}},8232:function(e,s,n){var a=n(8182),r=n(1087),t=n(1865),i=n(126),c=n(2721),l=n(5770),o=n(184);s.Z=function(e){var s=e.spaceBottomClass,n=e.category,d=e.productTabClass;return(0,o.jsx)("div",{className:(0,a.Z)("product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(c.Z,{titleText:"Featured Product",positionClass:"text-center"}),(0,o.jsxs)(t.Z.Container,{defaultActiveKey:"bestSeller",children:[(0,o.jsxs)(i.Z,{variant:"pills",className:(0,a.Z)("product-tab-list pt-35 pb-60 text-center",d),children:[(0,o.jsx)(i.Z.Item,{children:(0,o.jsx)(i.Z.Link,{eventKey:"newArrival",children:(0,o.jsx)("h4",{children:"New Arrivals"})})}),(0,o.jsx)(i.Z.Item,{children:(0,o.jsx)(i.Z.Link,{eventKey:"bestSeller",children:(0,o.jsx)("h4",{children:"Best Sellers"})})}),(0,o.jsx)(i.Z.Item,{children:(0,o.jsx)(i.Z.Link,{eventKey:"saleItems",children:(0,o.jsx)("h4",{children:"Sale Items"})})})]}),(0,o.jsxs)(t.Z.Content,{children:[(0,o.jsx)(t.Z.Pane,{eventKey:"newArrival",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(l.Z,{category:n,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(t.Z.Pane,{eventKey:"bestSeller",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(l.Z,{category:n,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(t.Z.Pane,{eventKey:"saleItems",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(l.Z,{category:n,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,o.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,o.jsx)(r.rU,{className:"loadMore6",to:"/storack-frontend-1-flone/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})}},9069:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')},5947:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')}}]);
//# sourceMappingURL=3772.9f2d52ee.chunk.js.map