(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f80699a"],{"1dde":function(t,e,c){var n=c("d039"),r=c("b622"),o=c("2d00"),i=r("species");t.exports=function(t){return o>=51||!n((function(){var e=[],c=e.constructor={};return c[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"31fc":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r={class:"container my-5"},o=Object(n["h"])("div",null,[Object(n["h"])("h1",{class:"text-center mt-5"},"收藏清單")],-1),i={class:"row mt-5"},a={class:"col-md-12"},s={class:"row row-cols-2 row-cols-md-5 g-4 mb-2"},d={class:"card h-100 border-0 box-shadow"},u=["onClick"],l={key:0,class:"badge bg-danger position-absolute top-0 end-0 p-2 zindex-fixed h6 align-items-center"},b=Object(n["h"])("i",{class:"bi bi-alarm"},null,-1),h=Object(n["h"])("strong",{class:"h6"},"限時特賣",-1),p=[b,h],f=["onClick"],g={class:"card-title h6 webkit-line-clamp"},j=Object(n["h"])("p",{class:"card-text"},null,-1),O={class:"d-flex justify-content-between align-items-baseline"},v={class:"text-danger"},m={key:0,class:"h6"},y={key:1,class:"h6"},k=Object(n["j"])("優惠價 "),x={class:"h6 text-danger"},w=Object(n["j"])(" 元 "),A={class:"card-footer border-top-0 bg-white d-flex mb-2 mx-2"},I=["onClick","disabled"],C={key:0,class:"spinner-border spinner-border-sm",role:"status"},P=Object(n["j"])(" 加到購物車 ");function $(t,e,c,b,h,$){var L=this,S=Object(n["H"])("Loading");return Object(n["A"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(S,{active:h.isLoading},null,8,["active"]),Object(n["h"])("div",r,[Object(n["h"])("div",null,[o,Object(n["h"])("div",i,[Object(n["h"])("div",a,[Object(n["h"])("div",s,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["F"])($.favlist,(function(t){return Object(n["A"])(),Object(n["g"])("div",{class:"col",key:t.id},[Object(n["h"])("div",d,[Object(n["h"])("div",{style:Object(n["s"])([{height:"200px","background-size":"contain","background-position":"center","background-repeat":"no-repeat"},{backgroundImage:"url(".concat(t.imageUrl,")")}]),class:"w-100 position-relative",type:"button",onClick:Object(n["V"])((function(e){return $.getProduct(t.id)}),["prevent"])},null,12,u),t.is_onSale?(Object(n["A"])(),Object(n["g"])("span",l,p)):Object(n["f"])("",!0),Object(n["h"])("div",{class:"card-body",type:"button",onClick:Object(n["V"])((function(e){return $.getProduct(t.id)}),["prevent"])},[Object(n["h"])("h5",g,Object(n["K"])(t.title),1),j,Object(n["h"])("div",O,[Object(n["h"])("span",v,Object(n["K"])(parseInt(t.price/t.origin_price*100))+"折 ",1),t.price?Object(n["f"])("",!0):(Object(n["A"])(),Object(n["g"])("div",m,Object(n["K"])(t.origin_price)+" 元",1)),t.price?(Object(n["A"])(),Object(n["g"])("div",y,[Object(n["h"])("strong",null,[k,Object(n["h"])("span",x,Object(n["K"])(t.price),1),w])])):Object(n["f"])("",!0)])],8,f),Object(n["h"])("div",A,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm m-auto",onClick:function(e){return $.addCart(t.id)},disabled:L.status.loadingItem===t.id},[L.status.loadingItem===t.id?(Object(n["A"])(),Object(n["g"])("div",C)):Object(n["f"])("",!0),P],8,I)])])])})),128))])])])])])],64)}c("99af"),c("4de4");var L={data:function(){return{favorited:JSON.parse(localStorage.getItem("favoriteItem"))||[],products:[],product:{},status:{loadingItem:""},isLoading:!1,category:"All",categoryItem:[],tempProducts:[],serch:""}},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/products/all");this.isLoading=!0,this.$http.get(e).then((function(e){t.isLoading=!1,e.data.success&&(console.log(e),t.products=e.data.products)}))},getProduct:function(t){this.$router.push("/product/".concat(t))},addCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/cart");this.status.loadingItem=t;var n={product_id:t,qty:1};this.$http.post(c,{data:n}).then((function(t){t.data.success&&(console.log(t),e.status.loadingItem="",e.$httpMessageState(t,"加入購物車"))}))}},computed:{favlist:function(){var t=this;return this.products.filter((function(e){return t.favorited.indexOf(e.id)>-1}))}},created:function(){this.$route.params.category&&(this.category=this.$route.params.category),this.getProducts()}};L.render=$;e["default"]=L},"4de4":function(t,e,c){"use strict";var n=c("23e7"),r=c("b727").filter,o=c("1dde"),i=o("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},8418:function(t,e,c){"use strict";var n=c("a04b"),r=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var i=n(e);i in t?r.f(t,i,o(0,c)):t[i]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),r=c("d039"),o=c("e8b5"),i=c("861d"),a=c("7b0b"),s=c("50c4"),d=c("8418"),u=c("65f0"),l=c("1dde"),b=c("b622"),h=c("2d00"),p=b("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",j=h>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=l("concat"),v=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},m=!j||!O;n({target:"Array",proto:!0,forced:m},{concat:function(t){var e,c,n,r,o,i=a(this),l=u(i,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],v(o)){if(r=s(o.length),b+r>f)throw TypeError(g);for(c=0;c<r;c++,b++)c in o&&d(l,b,o[c])}else{if(b>=f)throw TypeError(g);d(l,b++,o)}return l.length=b,l}})}}]);
//# sourceMappingURL=chunk-2f80699a.0c2105fa.js.map