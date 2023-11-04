"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[4159],{4159:function(e,s,t){t.r(s);var r=t(9439),a=t(2791),i=t(6443),c=t(9434),n=t(7689),l=t(1770),o=t(3695),d=t(9858),u=t(9778),h=t(7960),m=t(335),x=t(4427),j=t(184);s.default=function(){var e=(0,a.useState)("list"),s=(0,r.Z)(e,2),t=s[0],g=s[1],f=(0,a.useState)(""),p=(0,r.Z)(f,2),N=p[0],b=p[1],v=(0,a.useState)(""),S=(0,r.Z)(v,2),C=S[0],k=S[1],w=(0,a.useState)(""),P=(0,r.Z)(w,2),Z=P[0],H=P[1],L=(0,a.useState)(""),y=(0,r.Z)(L,2),T=y[0],z=y[1],F=(0,a.useState)(0),A=(0,r.Z)(F,2),M=A[0],B=A[1],_=(0,a.useState)(1),D=(0,r.Z)(_,2),E=D[0],O=D[1],R=(0,a.useState)([]),X=(0,r.Z)(R,2),q=X[0],G=X[1],I=(0,a.useState)([]),J=(0,r.Z)(I,2),K=J[0],Q=J[1],U=(0,c.v9)((function(e){return e.product})).products,V=(0,n.TH)().pathname;return(0,a.useEffect)((function(){var e=(0,l.LB)(U,N,C),s=(0,l.LB)(e,Z,T);Q(e=s),G(e.slice(M,M+15))}),[M,U,N,C,Z,T]),(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)(o.Z,{titleTemplate:"Shop Page",description:"Shop page of flone react minimalist eCommerce template."}),(0,j.jsxs)(d.Z,{headerTop:"visible",children:[(0,j.jsx)(u.Z,{pages:[{label:"Home",path:"/storack-frontend-1-flone/"},{label:"Shop",path:"/storack-frontend-1-flone"+V}]}),(0,j.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-lg-3 order-2 order-lg-1",children:(0,j.jsx)(h.Z,{products:U,getSortParams:function(e,s){b(e),k(s)},sideSpaceClass:"mr-30"})}),(0,j.jsxs)("div",{className:"col-lg-9 order-1 order-lg-2",children:[(0,j.jsx)(m.Z,{getLayout:function(e){g(e)},getFilterSortParams:function(e,s){H(e),z(s)},productCount:U.length,sortedProductCount:q.length}),(0,j.jsx)(x.Z,{layout:t,products:q}),(0,j.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,j.jsx)(i.Z,{totalRecords:K.length,pageLimit:15,pageNeighbours:2,setOffset:B,currentPage:E,setCurrentPage:O,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}},7960:function(e,s,t){t.d(s,{Z:function(){return u}});var r=t(8182),a=t(1770),i=t(184),c=function(){return(0,i.jsxs)("div",{className:"sidebar-widget",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,i.jsx)("div",{className:"pro-sidebar-search mb-50 mt-25",children:(0,i.jsxs)("form",{className:"pro-sidebar-search-form",action:"#",children:[(0,i.jsx)("input",{type:"text",placeholder:"Search here..."}),(0,i.jsx)("button",{children:(0,i.jsx)("i",{className:"pe-7s-search"})})]})})]})},n=function(e){var s=e.categories,t=e.getSortParams;return(0,i.jsxs)("div",{className:"sidebar-widget",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Categories "}),(0,i.jsx)("div",{className:"sidebar-widget-list mt-30",children:s?(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{onClick:function(e){t("category",""),(0,a.H7)(e)},children:[(0,i.jsx)("span",{className:"checkmark"})," All Categories"]})})}),s.map((function(e,s){return(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{onClick:function(s){t("category",e),(0,a.H7)(s)},children:[" ",(0,i.jsx)("span",{className:"checkmark"})," ",e," "]})})},s)}))]}):"No categories found"})]})},l=function(e){var s=e.colors,t=e.getSortParams;return(0,i.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Color "}),(0,i.jsx)("div",{className:"sidebar-widget-list mt-20",children:s?(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{onClick:function(e){t("color",""),(0,a.H7)(e)},children:[(0,i.jsx)("span",{className:"checkmark"})," All Colors"," "]})})}),s.map((function(e,s){return(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{onClick:function(s){t("color",e),(0,a.H7)(s)},children:[(0,i.jsx)("span",{className:"checkmark"})," ",e," "]})})},s)}))]}):"No colors found"})]})},o=function(e){var s=e.sizes,t=e.getSortParams;return(0,i.jsxs)("div",{className:"sidebar-widget mt-40",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Size "}),(0,i.jsx)("div",{className:"sidebar-widget-list mt-20",children:s?(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{onClick:function(e){t("size",""),(0,a.H7)(e)},children:[(0,i.jsx)("span",{className:"checkmark"})," All Sizes"," "]})})}),s.map((function(e,s){return(0,i.jsx)("li",{children:(0,i.jsx)("div",{className:"sidebar-widget-list-left",children:(0,i.jsxs)("button",{className:"text-uppercase",onClick:function(s){t("size",e),(0,a.H7)(s)},children:[" ",(0,i.jsx)("span",{className:"checkmark"}),e," "]})})},s)}))]}):"No sizes found"})]})},d=function(e){var s=e.tags,t=e.getSortParams;return(0,i.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,i.jsx)("h4",{className:"pro-sidebar-title",children:"Tag "}),(0,i.jsx)("div",{className:"sidebar-widget-tag mt-25",children:s?(0,i.jsx)("ul",{children:s.map((function(e,s){return(0,i.jsx)("li",{children:(0,i.jsx)("button",{onClick:function(s){t("tag",e),(0,a.H7)(s)},children:e})},s)}))}):"No tags found"})]})},u=function(e){var s=e.products,t=e.getSortParams,u=e.sideSpaceClass,h=(0,a.uX)(s),m=(0,a.mF)(s),x=(0,a.l9)(s),j=(0,a.ku)(s);return(0,i.jsxs)("div",{className:(0,r.Z)("sidebar-style",u),children:[(0,i.jsx)(c,{}),(0,i.jsx)(n,{categories:h,getSortParams:t}),(0,i.jsx)(l,{colors:m,getSortParams:t}),(0,i.jsx)(o,{sizes:x,getSortParams:t}),(0,i.jsx)(d,{tags:j,getSortParams:t})]})}},335:function(e,s,t){t.d(s,{Z:function(){return n}});var r=t(2791),a=t(1770),i=t(184),c=function(e){var s=e.getLayout,t=e.getFilterSortParams,r=e.productCount,c=e.sortedProductCount;return(0,i.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,i.jsxs)("div",{className:"select-shoing-wrap",children:[(0,i.jsx)("div",{className:"shop-select",children:(0,i.jsxs)("select",{onChange:function(e){return t("filterSort",e.target.value)},children:[(0,i.jsx)("option",{value:"default",children:"Default"}),(0,i.jsx)("option",{value:"priceHighToLow",children:"Price - High to Low"}),(0,i.jsx)("option",{value:"priceLowToHigh",children:"Price - Low to High"})]})}),(0,i.jsxs)("p",{children:["Showing ",c," of ",r," result"]})]}),(0,i.jsxs)("div",{className:"shop-tab",children:[(0,i.jsx)("button",{onClick:function(e){s("grid two-column"),(0,a.cM)(e)},children:(0,i.jsx)("i",{className:"fa fa-th-large"})}),(0,i.jsx)("button",{onClick:function(e){s("grid three-column"),(0,a.cM)(e)},children:(0,i.jsx)("i",{className:"fa fa-th"})}),(0,i.jsx)("button",{onClick:function(e){s("list"),(0,a.cM)(e)},children:(0,i.jsx)("i",{className:"fa fa-list-ul"})})]})]})},n=function(e){var s=e.getLayout,t=e.getFilterSortParams,a=e.productCount,n=e.sortedProductCount;return(0,i.jsx)(r.Fragment,{children:(0,i.jsx)(c,{getLayout:s,getFilterSortParams:t,productCount:a,sortedProductCount:n})})}}}]);
//# sourceMappingURL=4159.721e93e6.chunk.js.map