(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6d7aa0"],{1799:function(e,t,a){"use strict";var c=a("7a23"),n={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},r=Object(c["h"])("span",{"aria-hidden":"true"},"«",-1),o=[r],l=["onClick"],s=Object(c["h"])("span",{"aria-hidden":"true"},"»",-1),d=[s];function u(e,t,a,r,s,u){return Object(c["A"])(),Object(c["g"])("nav",n,[Object(c["h"])("ul",i,[Object(c["h"])("li",{class:Object(c["r"])(["page-item",{disabled:!a.pages.has_pre}])},[Object(c["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(c["V"])((function(e){return u.updatePage(a.pages.current_page-1)}),["prevent"]))},o)],2),(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(a.pages.total_pages,(function(e){return Object(c["A"])(),Object(c["g"])("li",{class:Object(c["r"])(["page-item",{active:e===a.pages.current_page}]),key:e},[Object(c["h"])("a",{class:"page-link",href:"#",onClick:Object(c["V"])((function(t){return u.updatePage(e)}),["prevent"])},Object(c["K"])(e),9,l)],2)})),128)),Object(c["h"])("li",{class:Object(c["r"])(["page-item",{disabled:!a.pages.has_next}])},[Object(c["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(c["V"])((function(e){return u.updatePage(a.pages.current_page+1)}),["prevent"]))},d)],2)])])}var h={props:["pages"],methods:{updatePage:function(e){console.log(e),this.$emit("emit-pages",e)}}};h.render=u;t["a"]=h},5651:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n={class:"table mt-4"},i=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",null,"購買時間"),Object(c["h"])("th",null,"Email"),Object(c["h"])("th",null,"購買款項"),Object(c["h"])("th",null,"應付金額"),Object(c["h"])("th",null,"是否付款"),Object(c["h"])("th",null,"編輯")])],-1),r=["textContent"],o={class:"list-unstyled"},l={class:"text-right"},s={class:"form-check form-switch"},d=["id","onUpdate:modelValue","onChange"],u=["for"],h={key:0},b={key:1},O={class:"btn-group"},p=["onClick"];function j(e,t,a,j,g,f){var m=Object(c["H"])("Loading"),v=Object(c["H"])("DelModal"),k=Object(c["H"])("Pagination");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(m,{active:g.isLoading},null,8,["active"]),Object(c["h"])("table",n,[i,Object(c["h"])("tbody",null,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(g.orders,(function(t,a){return Object(c["A"])(),Object(c["g"])(c["a"],{key:a},[g.orders.length?(Object(c["A"])(),Object(c["g"])("tr",{key:0,class:Object(c["r"])({"text-secondary":!t.is_paid})},[Object(c["h"])("td",null,Object(c["K"])(e.$filters.date(t.create_at)),1),Object(c["h"])("td",null,[t.user?(Object(c["A"])(),Object(c["g"])("span",{key:0,textContent:Object(c["K"])(t.user.email)},null,8,r)):Object(c["f"])("",!0)]),Object(c["h"])("td",null,[Object(c["h"])("ul",o,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(t.products,(function(e,t){return Object(c["A"])(),Object(c["g"])("li",{key:t},Object(c["K"])(e.product.title)+" 數量："+Object(c["K"])(e.qty)+" "+Object(c["K"])(e.product.unit),1)})),128))])]),Object(c["h"])("td",l,"NT$ "+Object(c["K"])(e.$filters.currency(t.total)),1),Object(c["h"])("td",null,[Object(c["h"])("div",s,[Object(c["U"])(Object(c["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return f.updatePaid(t)}},null,40,d),[[c["N"],t.is_paid]]),Object(c["h"])("label",{class:"form-check-label",for:"paidSwitch".concat(t.id)},[t.is_paid?(Object(c["A"])(),Object(c["g"])("span",h,"已付款")):(Object(c["A"])(),Object(c["g"])("span",b,"未付款"))],8,u)])]),Object(c["h"])("td",null,[Object(c["h"])("div",O,[Object(c["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return f.openDelOrderModal(t)}},"刪除",8,p)])])],2)):Object(c["f"])("",!0)],64)})),128))])]),Object(c["k"])(v,{item:g.tempOrder,ref:"delModal",onDelItem:f.delOrder},null,8,["item","onDelItem"]),Object(c["k"])(k,{pages:g.pagination,onEmitPages:f.getOrders},null,8,["pages","onEmitPages"])],64)}var g=a("5530"),f=(a("99af"),a("6ff1")),m=a("1799"),v={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:m["a"],DelModal:f["a"]},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/admin/orders?page=").concat(t);this.isLoading=!0,this.$http.get(a,this.tempProduct).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1,console.log(t)}))},openModal:function(e,t){this.tempOrder=Object(g["a"])({},t),this.isNew=!1;var a=this.$refs.orderModal;a.showModal()},openDelOrderModal:function(e){this.tempOrder=Object(g["a"])({},e);var t=this.$refs.delModal;t.showModal()},updatePaid:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/admin/order/").concat(e.id),c={is_paid:e.is_paid};this.$http.put(a,{data:c}).then((function(e){t.isLoading=!1,t.getOrders(t.currentPage),t.$httpMessageState(e,"更新付款狀態")}))},delOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(t).then((function(t){console.log(t);var a=e.$refs.delModal;a.hideModal(),e.getOrders(e.currentPage)}))}},created:function(){this.getOrders(),console.log("https://vue3-course-api.hexschool.io/")}};v.render=j;t["default"]=v}}]);
//# sourceMappingURL=chunk-7e6d7aa0.70e977ea.js.map