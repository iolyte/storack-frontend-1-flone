"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6693],{7127:function(e,s,i){var r=i(9434),a=i(9230),n=i(147),c=i(184);s.Z=function(e){var s=e.currency,i=(0,a.$G)().i18n,l=(0,r.I0)(),t=function(e){var s=e.target.value;i.changeLanguage(s)},d=function(e){var s=e.target.value;l((0,n.N)(s))};return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===i.resolvedLanguage?"English":"fn"===i.resolvedLanguage?"French":"de"===i.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,c.jsxs)("div",{className:"same-language-currency use-style",children:[(0,c.jsxs)("span",{children:[s.currencyName," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"USD",onClick:function(e){return d(e)},children:"USD"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"EUR",onClick:function(e){return d(e)},children:"EUR"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"GBP",onClick:function(e){return d(e)},children:"GBP"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency",children:(0,c.jsx)("p",{children:"Call Us 3965410"})})]})}},27:function(e,s,i){var r=i(9439),a=i(2791),n=i(8182),c=i(1087),l=i(9434),t=i(2558),d=i(1770),o=i(6664),u=i(4275),m=i(8725),h=i(184);s.Z=function(e){var s=e.product,i=e.currency,x=e.cartItem,j=e.wishlistItem,v=e.compareItem,p=e.spaceBottomClass,f=(0,a.useState)(!1),g=(0,r.Z)(f,2),N=g[0],w=g[1],b=(0,d.lk)(s.price,s.discount),y=+(s.price*i.currencyRate).toFixed(2),Z=+(b*i.currencyRate).toFixed(2),k=(0,l.I0)();return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsxs)("div",{className:(0,n.Z)("product-wrap",p),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(c.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/storack-frontend-1-flone"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/storack-frontend-1-flone"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,m.Mp)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(c.rU,{to:"".concat("/storack-frontend-1-flone","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return k((0,u.Xq)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return w(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(c.rU,{to:"/storack-frontend-1-flone/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(t.Z,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==b?(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+Z})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+y})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+y," "]})})]})]}),(0,h.jsx)(o.Z,{show:N,onHide:function(){return w(!1)},product:s,currency:i,discountedPrice:b,finalProductPrice:y,finalDiscountedPrice:Z,wishlistItem:j,compareItem:v})]})}},9858:function(e,s,i){var r=i(2791),a=i(7939),n=i(8032),c=i(9354),l=i(184);s.Z=function(e){var s=e.children,i=e.headerContainerClass,t=e.headerTop,d=e.headerPaddingClass,o=e.headerPositionClass;return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(a.Z,{layout:i,top:t,headerPaddingClass:d,headerPositionClass:o}),s,(0,l.jsx)(n.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(c.Z,{})]})}},9778:function(e,s,i){var r=i(2461),a=i(1087),n=i(184);s.Z=function(e){var s=e.pages;return(0,n.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(r.Z,{children:null===s||void 0===s?void 0:s.map((function(e,i){var c=e.path,l=e.label;return i!==s.length-1?(0,n.jsx)(r.Z.Item,{linkProps:{to:c},linkAs:a.rU,children:l},l):(0,n.jsx)(r.Z.Item,{active:!0,children:l},l)}))})})})}},7939:function(e,s,i){i.d(s,{Z:function(){return x}});var r=i(9439),a=i(2791),n=i(8182),c=i(1567),l=i(9381),t=i(2824),d=i(2412),o=i(9434),u=i(7127),m=i(184),h=function(e){var s=e.borderStyle,i=(0,o.v9)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,n.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(u.Z,{currency:i}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Free delivery on order over"," ",(0,m.jsx)("span",{children:i.currencySymbol+(200*i.currencyRate).toFixed(2)})]})})]})},x=function(e){var s=e.layout,i=e.top,o=e.borderStyle,u=e.headerPaddingClass,x=e.headerPositionClass,j=e.headerBgClass,v=(0,a.useState)(0),p=(0,r.Z)(v,2),f=p[0],g=p[1],N=(0,a.useState)(0),w=(0,r.Z)(N,2),b=w[0],y=w[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",Z),function(){window.removeEventListener("scroll",Z)}}),[]);var Z=function(){g(window.scrollY)};return(0,m.jsxs)("header",{className:(0,n.Z)("header-area clearfix",j,x),children:[(0,m.jsx)("div",{className:(0,n.Z)("header-top-area",u,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(h,{borderStyle:o})})}),(0,m.jsxs)("div",{className:(0,n.Z)(u,"sticky-bar header-res-padding clearfix",f>b&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(c.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(l.Z,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(t.Z,{})})]})}),(0,m.jsx)(d.Z,{})]})]})}},2355:function(e,s,i){var r=i(8182),a=i(1865),n=i(126),c=i(184);s.Z=function(e){var s=e.spaceBottomClass,i=e.productFullDesc;return(0,c.jsx)("div",{className:(0,r.Z)("description-review-area",s),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"description-review-wrapper",children:(0,c.jsxs)(a.Z.Container,{defaultActiveKey:"productDescription",children:[(0,c.jsxs)(n.Z,{variant:"pills",className:"description-review-topbar",children:[(0,c.jsx)(n.Z.Item,{children:(0,c.jsx)(n.Z.Link,{eventKey:"additionalInfo",children:"Additional Information"})}),(0,c.jsx)(n.Z.Item,{children:(0,c.jsx)(n.Z.Link,{eventKey:"productDescription",children:"Description"})}),(0,c.jsx)(n.Z.Item,{children:(0,c.jsx)(n.Z.Link,{eventKey:"productReviews",children:"Reviews(2)"})})]}),(0,c.jsxs)(a.Z.Content,{className:"description-review-bottom",children:[(0,c.jsx)(a.Z.Pane,{eventKey:"additionalInfo",children:(0,c.jsx)("div",{className:"product-anotherinfo-wrapper",children:(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Weight"})," 400 g"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Dimensions"}),"10 x 10 x 15 cm"," "]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Materials"})," 60% cotton, 40% polyester"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:"Other Info"})," American heirloom jean shorts pug seitan letterpress"]})]})})}),(0,c.jsx)(a.Z.Pane,{eventKey:"productDescription",children:i}),(0,c.jsx)(a.Z.Pane,{eventKey:"productReviews",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-lg-7",children:(0,c.jsxs)("div",{className:"review-wrapper",children:[(0,c.jsxs)("div",{className:"single-review",children:[(0,c.jsx)("div",{className:"review-img",children:(0,c.jsx)("img",{src:"/storack-frontend-1-flone/assets/img/testimonial/1.jpg",alt:""})}),(0,c.jsxs)("div",{className:"review-content",children:[(0,c.jsxs)("div",{className:"review-top-wrap",children:[(0,c.jsxs)("div",{className:"review-left",children:[(0,c.jsx)("div",{className:"review-name",children:(0,c.jsx)("h4",{children:"White Lewis"})}),(0,c.jsxs)("div",{className:"review-rating",children:[(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"})]})]}),(0,c.jsx)("div",{className:"review-left",children:(0,c.jsx)("button",{children:"Reply"})})]}),(0,c.jsx)("div",{className:"review-bottom",children:(0,c.jsx)("p",{children:"Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla."})})]})]}),(0,c.jsxs)("div",{className:"single-review child-review",children:[(0,c.jsx)("div",{className:"review-img",children:(0,c.jsx)("img",{src:"/storack-frontend-1-flone/assets/img/testimonial/2.jpg",alt:""})}),(0,c.jsxs)("div",{className:"review-content",children:[(0,c.jsxs)("div",{className:"review-top-wrap",children:[(0,c.jsxs)("div",{className:"review-left",children:[(0,c.jsx)("div",{className:"review-name",children:(0,c.jsx)("h4",{children:"White Lewis"})}),(0,c.jsxs)("div",{className:"review-rating",children:[(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"})]})]}),(0,c.jsx)("div",{className:"review-left",children:(0,c.jsx)("button",{children:"Reply"})})]}),(0,c.jsx)("div",{className:"review-bottom",children:(0,c.jsx)("p",{children:"Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla."})})]})]})]})}),(0,c.jsx)("div",{className:"col-lg-5",children:(0,c.jsxs)("div",{className:"ratting-form-wrapper pl-50",children:[(0,c.jsx)("h3",{children:"Add a Review"}),(0,c.jsx)("div",{className:"ratting-form",children:(0,c.jsxs)("form",{action:"#",children:[(0,c.jsxs)("div",{className:"star-box",children:[(0,c.jsx)("span",{children:"Your rating:"}),(0,c.jsxs)("div",{className:"ratting-star",children:[(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"}),(0,c.jsx)("i",{className:"fa fa-star"})]})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("div",{className:"rating-form-style mb-10",children:(0,c.jsx)("input",{placeholder:"Name",type:"text"})})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)("div",{className:"rating-form-style mb-10",children:(0,c.jsx)("input",{placeholder:"Email",type:"email"})})}),(0,c.jsx)("div",{className:"col-md-12",children:(0,c.jsxs)("div",{className:"rating-form-style form-submit",children:[(0,c.jsx)("textarea",{name:"Your Review",placeholder:"Message",defaultValue:""}),(0,c.jsx)("input",{type:"submit",defaultValue:"Submit"})]})})]})]})})]})})]})})]})]})})})})}},9744:function(e,s,i){var r=i(9434),a=i(8182),n=i(7842),c=i(996),l=i(27),t=i(1770),d=i(184),o={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.Z=function(e){var s=e.spaceBottomClass,i=e.category,u=(0,r.v9)((function(e){return e.product})).products,m=(0,r.v9)((function(e){return e.currency})),h=(0,r.v9)((function(e){return e.cart})).cartItems,x=(0,r.v9)((function(e){return e.wishlist})).wishlistItems,j=(0,r.v9)((function(e){return e.compare})).compareItems,v=(0,t.Xp)(u,i,null,6);return(0,d.jsx)("div",{className:(0,a.Z)("related-product-area",s),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(c.Z,{titleText:"Related Products",positionClass:"text-center",spaceClass:"mb-50"}),null!==v&&void 0!==v&&v.length?(0,d.jsx)(n.Z,{options:o,children:v.map((function(e){return(0,d.jsx)(n.o,{children:(0,d.jsx)(l.Z,{product:e,currency:m,cartItem:h.find((function(s){return s.id===e.id})),wishlistItem:x.find((function(s){return s.id===e.id})),compareItem:j.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})}}}]);
//# sourceMappingURL=6693.6e3dff46.chunk.js.map