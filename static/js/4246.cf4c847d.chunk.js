"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[4246],{9817:function(e,s,i){var n=i(1413),a=i(9439),r=i(2791),l=i(1087),c=i(9434),t=i(1770),o=i(2558),d=i(4275),u=i(8725),m=i(1065),p=i(184);s.Z=function(e){var s=e.product,i=e.discountedPrice,h=e.currency,x=e.finalDiscountedPrice,j=e.finalProductPrice,f=e.cartItems,v=e.wishlistItem,g=e.compareItem,N=(0,c.I0)(),b=(0,r.useState)(s.variation?s.variation[0].color:""),k=(0,a.Z)(b,2),w=k[0],Z=k[1],y=(0,r.useState)(s.variation?s.variation[0].size[0].name:""),P=(0,a.Z)(y,2),C=P[0],S=P[1],z=(0,r.useState)(s.variation?s.variation[0].size[0].stock:s.stock),T=(0,a.Z)(z,2),I=T[0],B=T[1],F=(0,r.useState)(1),V=(0,a.Z)(F,2),q=V[0],A=V[1],D=(0,t.bh)(f,s,w,C);return(0,p.jsxs)("div",{className:"product-details-content ml-70",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==i?(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("span",{children:h.currencySymbol+x})," ",(0,p.jsx)("span",{className:"old",children:h.currencySymbol+j})]}):(0,p.jsxs)("span",{children:[h.currencySymbol+j," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(o.Z,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.shortDescription})}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===w?"checked":"",onChange:function(){Z(e.color),S(e.size[0].name),B(e.size[0].stock),A(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===w?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===C?"checked":"",onChange:function(){S(e.name),B(e.stock),A(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return A(q>1?q-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:q,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return A(q<I-D?q+1:q)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:I&&I>0?(0,p.jsxs)("button",{onClick:function(){return N((0,d.Xq)((0,n.Z)((0,n.Z)({},s),{},{quantity:q,selectedProductColor:w||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:C||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:D>=I,children:[" ","Add To Cart"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return N((0,u.Mp)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return N((0,m.a$)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Categories :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"/storack-frontend-1-flone/shop-grid-standard",children:e})},s)}))})]}):"",s.tag?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Tags :"}),(0,p.jsx)("ul",{children:s.tag.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"/storack-frontend-1-flone/shop-grid-standard",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//facebook.com",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//dribbble.com",children:(0,p.jsx)("i",{className:"fa fa-dribbble"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//pinterest.com",children:(0,p.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//twitter.com",children:(0,p.jsx)("i",{className:"fa fa-twitter"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//linkedin.com",children:(0,p.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}},4246:function(e,s,i){i.r(s);var n=i(2791),a=i(9434),r=i(7689),l=i(3695),c=i(9858),t=i(9778),o=i(9744),d=i(2355),u=i(6480),m=i(184);s.default=function(){var e=(0,r.TH)().pathname,s=(0,r.UO)().id,i=(0,a.v9)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)(l.Z,{titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."}),(0,m.jsxs)(c.Z,{headerTop:"visible",children:[(0,m.jsx)(t.Z,{pages:[{label:"Home",path:"/storack-frontend-1-flone/"},{label:"Shop Product",path:"/storack-frontend-1-flone"+e}]}),(0,m.jsx)(u.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i,galleryType:"leftThumb"}),(0,m.jsx)(d.Z,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,m.jsx)(o.Z,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},6480:function(e,s,i){i.d(s,{Z:function(){return g}});var n=i(9434),a=i(8182),r=i(1770),l=i(9439),c=i(2791),t=i(1496),o=i(5971),d=i(2367),u=i(8721),m=i(8095),p=i(7842),h=i(184),x=function(e){var s,i,n=e.product,a=(0,c.useState)(null),r=(0,l.Z)(a,2),x=r[0],j=r[1],f=(0,c.useState)(-1),v=(0,l.Z)(f,2),g=v[0],N=v[1],b=null===n||void 0===n?void 0:n.image.map((function(e,s){return{src:"/storack-frontend-1-flone"+e,key:s}})),k={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:x},modules:[t.xW,t.o3]},w={onSwiper:j,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,h.jsxs)(c.Fragment,{children:[(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[n.discount||n.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[n.discount?(0,h.jsxs)("span",{className:"pink",children:["-",n.discount,"%"]}):"",n.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==n&&void 0!==n&&null!==(s=n.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.Z,{options:k,children:[n.image.map((function(e,s){return(0,h.jsxs)(p.o,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return N(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/storack-frontend-1-flone"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.Z,{open:g>=0,index:g,close:function(){return N(-1)},slides:b,plugins:[d.Z,u.ZP,m.Z]})]}):null]}),(0,h.jsx)("div",{className:"product-small-image-wrapper mt-15",children:null!==n&&void 0!==n&&null!==(i=n.image)&&void 0!==i&&i.length?(0,h.jsx)(p.Z,{options:w,children:n.image.map((function(e,s){return(0,h.jsx)(p.o,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/storack-frontend-1-flone"+e,className:"img-fluid",alt:""})})},s)}))}):null})]})},j=i(9817),f=function(e){var s,i,n=e.product,r=e.thumbPosition,x=(0,c.useState)(null),j=(0,l.Z)(x,2),f=j[0],v=j[1],g=(0,c.useState)(-1),N=(0,l.Z)(g,2),b=N[0],k=N[1],w=null===n||void 0===n?void 0:n.image.map((function(e,s){return{src:"/storack-frontend-1-flone"+e,key:s}})),Z={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:f},modules:[t.xW,t.o3]},y={onSwiper:v,spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,slideToClickedSlide:!0,direction:"vertical",breakpoints:{320:{slidesPerView:4,direction:"horizontal"},640:{slidesPerView:4,direction:"horizontal"},768:{slidesPerView:4,direction:"horizontal"},992:{slidesPerView:4,direction:"horizontal"},1200:{slidesPerView:4,direction:"vertical"}}};return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)("div",{className:"row row-5 test",children:[(0,h.jsx)("div",{className:(0,a.Z)(r&&"left"===r?"col-xl-10 order-1 order-xl-2":"col-xl-10"),children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[n.discount||n.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[n.discount?(0,h.jsxs)("span",{className:"pink",children:["-",n.discount,"%"]}):"",n.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==n&&void 0!==n&&null!==(s=n.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.Z,{options:Z,children:[null===n||void 0===n?void 0:n.image.map((function(e,s){return(0,h.jsxs)(p.o,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return k(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/storack-frontend-1-flone"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.Z,{open:b>=0,index:b,close:function(){return k(-1)},slides:w,plugins:[d.Z,u.ZP,m.Z]})]}):null]})}),(0,h.jsx)("div",{className:(0,a.Z)(r&&"left"===r?"col-xl-2 order-2 order-xl-1":"col-xl-2"),children:(0,h.jsx)("div",{className:"product-small-image-wrapper product-small-image-wrapper--side-thumb",children:null!==n&&void 0!==n&&null!==(i=n.image)&&void 0!==i&&i.length?(0,h.jsx)(p.Z,{options:y,children:n.image.map((function(e,s){return(0,h.jsx)(p.o,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/storack-frontend-1-flone"+e,className:"img-fluid",alt:""})})},s)}))}):null})})]})})},v=function(e){var s=e.product;return(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsx)("div",{className:"product-fixed-image",children:s.image?(0,h.jsx)("img",{src:"/storack-frontend-1-flone"+s.image[0],alt:"",className:"img-fluid"}):""})]})},g=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,l=e.galleryType,c=e.product,t=(0,n.v9)((function(e){return e.currency})),o=(0,n.v9)((function(e){return e.cart})).cartItems,d=(0,n.v9)((function(e){return e.wishlist})).wishlistItems,u=(0,n.v9)((function(e){return e.compare})).compareItems,m=d.find((function(e){return e.id===c.id})),p=u.find((function(e){return e.id===c.id})),g=(0,r.lk)(c.price,c.discount),N=+(c.price*t.currencyRate).toFixed(2),b=+(g*t.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,a.Z)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:"leftThumb"===l?(0,h.jsx)(f,{product:c,thumbPosition:"left"}):"rightThumb"===l?(0,h.jsx)(f,{product:c}):"fixedImage"===l?(0,h.jsx)(v,{product:c}):(0,h.jsx)(x,{product:c})}),(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)(j.Z,{product:c,discountedPrice:g,currency:t,finalDiscountedPrice:b,finalProductPrice:N,cartItems:o,wishlistItem:m,compareItem:p})})]})})})}}}]);
//# sourceMappingURL=4246.cf4c847d.chunk.js.map