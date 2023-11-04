"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2553],{27:function(e,s,i){var a=i(9439),n=i(2791),r=i(8182),t=i(1087),c=i(9434),l=i(2558),o=i(1770),d=i(6664),m=i(4275),u=i(8725),h=i(184);s.Z=function(e){var s=e.product,i=e.currency,x=e.cartItem,j=e.wishlistItem,f=e.compareItem,p=e.spaceBottomClass,v=(0,n.useState)(!1),g=(0,a.Z)(v,2),b=g[0],N=g[1],k=(0,o.lk)(s.price,s.discount),w=+(s.price*i.currencyRate).toFixed(2),Z=+(k*i.currencyRate).toFixed(2),y=(0,c.I0)();return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsxs)("div",{className:(0,r.Z)("product-wrap",p),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(t.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/storack-frontend-1-flone"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/storack-frontend-1-flone"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return y((0,u.Mp)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(t.rU,{to:"".concat("/storack-frontend-1-flone","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return y((0,m.Xq)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(t.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(l.Z,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==k?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+Z})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+w})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+w," "]})})]})]}),(0,h.jsx)(d.Z,{show:b,onHide:function(){return N(!1)},product:s,currency:i,discountedPrice:k,finalProductPrice:w,finalDiscountedPrice:Z,wishlistItem:j,compareItem:f})]})}},9801:function(e,s,i){var a=i(8182),n=i(184);s.Z=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,a.Z)("welcome-area",s,i),children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"welcome-content text-center",children:[(0,n.jsx)("h5",{children:"Who Are We"}),(0,n.jsx)("h1",{children:"Welcome To Storack"}),(0,n.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"," "]})]})})})}},2553:function(e,s,i){i.r(s),i.d(s,{default:function(){return y}});var a=i(2791),n=i(3695),r=i(9621),t=i(8032),c=i(9354),l=i(184),o=function(e){var s=e.children;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(r.Z,{layout:"container-fluid"}),s,(0,l.jsx)(t.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(c.Z,{})]})},d=i(1496),m=i(7842),u=JSON.parse('[{"id":1,"title":"Welcome to Storack","subtitle":"30% off Summer Vacation","image":"/assets/img/slider/slider-5.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"40% off Summer Vacation","image":"/assets/img/slider/slider-5-1.jpg","url":"/shop-grid-standard"}]'),h=i(1087),x=function(e){var s=e.data;return(0,l.jsx)("div",{className:"slider-height-5 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat("/storack-frontend-1-flone"+s.image,")")},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12",children:(0,l.jsxs)("div",{className:"slider-content-6 slider-animated-1 text-center",children:[(0,l.jsx)("h1",{className:"animated",children:s.title}),(0,l.jsx)("p",{className:"animated",children:s.subtitle}),(0,l.jsx)("div",{className:"slider-btn-5 btn-hover",children:(0,l.jsx)(h.rU,{className:"animated",to:"/storack-frontend-1-flone"+s.url,children:"SHOP NOW"})})]})})})})})},j={effect:"fade",fadeEffect:{crossFade:!0},modules:[d.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},f=function(){return(0,l.jsx)("div",{className:"slider-area",children:(0,l.jsx)("div",{className:"slider-active-2 nav-style-3",children:(0,l.jsx)(m.Z,{options:j,className:"overflow-hidden",children:null===u||void 0===u?void 0:u.map((function(e,s){return(0,l.jsx)(m.o,{children:(0,l.jsx)(x,{data:e})},s)}))})})})},p=i(9801),v=i(8182),g=i(1865),b=i(126),N=i(2563),k=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.bgColorClass,n=e.category;return(0,l.jsx)("div",{className:(0,v.Z)("product-area",s,i,a),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)(g.Z.Container,{defaultActiveKey:"bestSeller",children:[(0,l.jsxs)(b.Z,{variant:"pills",className:"product-tab-list pb-55 text-center",children:[(0,l.jsx)(b.Z.Item,{children:(0,l.jsx)(b.Z.Link,{eventKey:"newArrival",children:(0,l.jsx)("h4",{children:"New Arrivals"})})}),(0,l.jsx)(b.Z.Item,{children:(0,l.jsx)(b.Z.Link,{eventKey:"bestSeller",children:(0,l.jsx)("h4",{children:"Best Sellers"})})}),(0,l.jsx)(b.Z.Item,{children:(0,l.jsx)(b.Z.Link,{eventKey:"saleItems",children:(0,l.jsx)("h4",{children:"Sale Items"})})})]}),(0,l.jsxs)(g.Z.Content,{children:[(0,l.jsx)(g.Z.Pane,{eventKey:"newArrival",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.Z,{category:n,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(g.Z.Pane,{eventKey:"bestSeller",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.Z,{category:n,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(g.Z.Pane,{eventKey:"saleItems",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.Z,{category:n,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})})})},w=i(1208),Z=i(7419),y=function(){return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(n.Z,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,l.jsxs)(o,{children:[(0,l.jsx)(f,{}),(0,l.jsx)(p.Z,{spaceTopClass:"pt-95",spaceBottomClass:"pb-90"}),(0,l.jsx)(k,{spaceBottomClass:"pb-70",category:"fashion",sectionTitle:!1}),(0,l.jsx)(w.Z,{spaceBottomClass:"pb-100"}),(0,l.jsx)(Z.Z,{})]})]})}},9621:function(e,s,i){i.d(s,{Z:function(){return h}});var a=i(9439),n=i(2791),r=i(8182),t=i(1087),c=i(2824),l=i(2412),o=i(184),d=function(){return(0,o.jsx)("div",{className:"side-social",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"facebook",href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-facebook"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"dribbble",href:"//www.dribbble.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-dribbble"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"pinterest",href:"//www.pinterest.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"twitter",href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-twitter"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"linkedin",href:"//www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-linkedin"})})})]})})},m=i(9381),u=function(e){var s=e.activeState,i=e.getActiveState;return(0,o.jsxs)("div",{className:(0,r.Z)("clickable-mainmenu",s?"inside":""),children:[(0,o.jsx)("div",{className:"clickable-mainmenu-icon",children:(0,o.jsx)("button",{className:"clickable-mainmenu-close",onClick:function(){return i(!1)},children:(0,o.jsx)("span",{className:"pe-7s-close"})})}),(0,o.jsx)("div",{className:"side-logo",children:(0,o.jsx)(t.rU,{to:"/storack-frontend-1-flone/",children:(0,o.jsx)("img",{alt:"",src:"/storack-frontend-1-flone/assets/img/logo/logo.png"})})}),(0,o.jsx)(m.Z,{sidebarMenu:!0}),(0,o.jsx)(d,{})]})},h=function(e){var s=e.layout,i=e.headerPaddingClass,d=e.headerBgClass,m=(0,n.useState)(0),h=(0,a.Z)(m,2),x=h[0],j=h[1],f=(0,n.useState)(0),p=(0,a.Z)(f,2),v=p[0],g=p[1],b=(0,n.useState)(!1),N=(0,a.Z)(b,2),k=N[0],w=N[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return g(e.offsetTop),window.addEventListener("scroll",Z),function(){window.removeEventListener("scroll",Z)}}),[]);var Z=function(){j(window.scrollY)};return(0,o.jsxs)("header",{className:(0,r.Z)("header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7",d,i,x>v&&"stick"),children:[(0,o.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block",children:(0,o.jsx)("div",{className:"clickable-menu clickable-mainmenu-active",children:(0,o.jsx)("button",{onClick:function(){w(!0)},children:(0,o.jsx)("i",{className:"pe-7s-menu"})})})}),(0,o.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-6",children:(0,o.jsxs)("div",{className:"logo text-center logo-hm5",children:[(0,o.jsx)(t.rU,{className:"sticky-none",to:"/storack-frontend-1-flone/",children:(0,o.jsx)("img",{alt:"",src:"assets/img/logo/logo-2.png"})}),(0,o.jsx)(t.rU,{className:"sticky-block",to:"/storack-frontend-1-flone/",children:(0,o.jsx)("img",{alt:"",src:"assets/img/logo/logo.png"})})]})}),(0,o.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-6 col-6",children:(0,o.jsx)(c.Z,{iconWhiteClass:"header-right-wrap-white"})})]})}),(0,o.jsx)(u,{activeState:k,getActiveState:function(e){w(e)}}),(0,o.jsx)(l.Z,{})]})}},1208:function(e,s,i){var a=i(8182),n=i(9841),r=i(184);s.Z=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,t=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,a.Z)("subscribe-area-3",s,i),children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,r.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,r.jsx)("h2",{children:"Subscribe "}),(0,r.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,r.jsx)(n.Z,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:t})]})})})})})}},2563:function(e,s,i){var a=i(2791),n=i(9434),r=i(1770),t=i(27),c=i(184);s.Z=function(e){var s=e.spaceBottomClass,i=e.category,l=e.type,o=e.limit,d=(0,n.v9)((function(e){return e.product})).products,m=(0,n.v9)((function(e){return e.currency})),u=(0,n.v9)((function(e){return e.cart})).cartItems,h=(0,n.v9)((function(e){return e.wishlist})).wishlistItems,x=(0,n.v9)((function(e){return e.compare})).compareItems,j=(0,r.Xp)(d,i,l,o);return(0,c.jsx)(a.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,c.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,c.jsx)(t.Z,{spaceBottomClass:s,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))})}}}]);
//# sourceMappingURL=2553.3c221409.chunk.js.map