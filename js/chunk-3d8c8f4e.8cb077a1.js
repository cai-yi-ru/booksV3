(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d8c8f4e"],{"057f":function(t,e,r){var c=r("fc6a"),n=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):n(c(t))}},"06e3":function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var c=r("7a23"),n={class:"mt-5"},o={class:"container"},i={"aria-label":"breadcrumb"},a={class:"breadcrumb bg-transparent pl-0"},s={class:"breadcrumb-item"},u={class:"breadcrumb-item"},l={class:"breadcrumb-item active","aria-current":"page"},d={class:"row"},b={class:"col-md-4 mt-5"},f={class:"sticky-top BGcolor",style:{top:"30px"}},h={class:"h4"},p=["src"],O={class:"d-flex mt-5"},j=Object(c["h"])("span",{class:"me-2"},"★館長推薦 ",-1),g={key:0,class:"h4 bi bi-suit-heart-fill text-red"},v={key:1,class:"h4 bi bi-suit-heart text-red"},m={class:""},y=Object(c["h"])("hr",null,null,-1),x=["innerHTML"],w={class:"d-flex justify-content-end align-items-end"},S={class:"text-muted"},k={class:"h3 ms-auto mb-0 text-danger"},A=Object(c["h"])("small",null,"特價 NT$",-1),I=Object(c["h"])("hr",null,null,-1),L={class:"input-group mt-3"},T=["value"],M=["disabled"],$={key:0,class:"spinner-border spinner-border-sm",role:"status"},P=Object(c["h"])("span",{class:"visually-hidden"},"Loading...",-1),H=[P],N=Object(c["j"])(" 訂購 "),C={class:"col-md-8"},K=Object(c["h"])("h3",{class:"text-orange"},"詳細介紹",-1),E=Object(c["h"])("hr",null,null,-1),F={class:"mt-3 mb-5"},J=["innerHTML"],U={key:0},V=Object(c["h"])("h3",{class:"mt-5 text-orange"},"作者介紹",-1),_=Object(c["h"])("hr",null,null,-1),B={class:"mt-3 mb-5"},q=["innerHTML"],D={key:1},G=Object(c["h"])("h3",{class:"mt-5 text-orange"},"目錄",-1),Q=Object(c["h"])("hr",null,null,-1),W={class:"mt-3 mb-5"},z=["innerHTML"],R=["src"],X={class:"my-4 bg-gray p-3",role:"alert"};function Y(t,e,r,P,Y,Z){var tt=Object(c["H"])("Loading"),et=Object(c["H"])("ShoppingNotes");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(tt,{active:Y.isLoading},null,8,["active"]),Object(c["h"])("div",n,[Object(c["h"])("section",null,[Object(c["h"])("div",o,[Object(c["h"])("nav",i,[Object(c["h"])("ol",a,[Object(c["h"])("li",s,[Object(c["h"])("a",{href:"#",onClick:e[0]||(e[0]=Object(c["V"])((function(e){return t.$router.push({name:"products",params:{category:"All"}})}),["prevent"]))}," 所有商品 ")]),Object(c["h"])("li",u,[Object(c["h"])("a",{href:"#",onClick:e[1]||(e[1]=Object(c["V"])((function(e){return t.$router.push({name:"products",params:{category:Y.product.category}})}),["prevent"]))},Object(c["K"])(Y.product.category),1)]),Object(c["h"])("li",l,Object(c["K"])(Y.product.title),1)])]),Object(c["h"])("div",d,[Object(c["h"])("div",b,[Object(c["h"])("div",f,[Object(c["h"])("h1",h,Object(c["K"])(Y.product.title),1),Object(c["h"])("img",{src:Y.product.imageUrl,class:"w-100",alt:""},null,8,p),Object(c["h"])("div",O,[j,(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(Y.product.star,(function(t){return Object(c["A"])(),Object(c["g"])("i",{class:"bi bi-star-fill text-warning",key:t})})),128)),Object(c["h"])("span",{class:"text-dark ms-auto",onClick:e[2]||(e[2]=Object(c["V"])((function(t){return Z.setFav(Y.product.id)}),["prevent"]))},[this.favorited.indexOf(Y.product.id)>-1?(Object(c["A"])(),Object(c["g"])("i",g)):(Object(c["A"])(),Object(c["g"])("i",v))])]),Object(c["h"])("div",null,[Object(c["h"])("p",m,"★已售出"+Object(c["K"])(Y.product.sell_num),1)]),y,Object(c["h"])("p",{innerHTML:Y.product.description,class:"mt-3"},null,8,x),Object(c["h"])("div",w,[Object(c["h"])("span",S," 售價 $"+Object(c["K"])(t.$filters.currency(Y.product.origin_price))+"元",1),Object(c["h"])("div",k,[A,Object(c["h"])("strong",null,Object(c["K"])(t.$filters.currency(Y.product.price))+"元",1)])]),I,Object(c["h"])("div",L,[Object(c["U"])(Object(c["h"])("select",{name:"",class:"form-control mr-1","onUpdate:modelValue":e[3]||(e[3]=function(t){return Y.product.num=t})},[(Object(c["A"])(),Object(c["g"])(c["a"],null,Object(c["F"])(10,(function(t){return Object(c["h"])("option",{value:t,key:t,class:"text-center"},Object(c["K"])(t)+" "+Object(c["K"])(Y.product.unit),9,T)})),64))],512),[[c["O"],Y.product.num]]),Object(c["h"])("button",{type:"button",class:"btn btn-outline-danger px-3",onClick:e[4]||(e[4]=function(t){return Z.addCart(Y.product.id,Y.product.num)}),disabled:this.status.loadingItem===Y.product.id},[this.status.loadingItem===Y.product.id?(Object(c["A"])(),Object(c["g"])("div",$,H)):Object(c["f"])("",!0),N],8,M)])])]),Object(c["h"])("div",C,[Object(c["h"])("div",null,[K,E,Object(c["h"])("div",F,[Object(c["h"])("p",{innerHTML:Y.product.content},null,8,J)])]),Y.product.author?(Object(c["A"])(),Object(c["g"])("div",U,[V,_,Object(c["h"])("div",B,[Object(c["h"])("p",{innerHTML:Y.product.author},null,8,q)])])):Object(c["f"])("",!0),Y.product.catalog?(Object(c["A"])(),Object(c["g"])("div",D,[G,Q,Object(c["h"])("div",W,[Object(c["h"])("p",{innerHTML:Y.product.catalog},null,8,z)])])):Object(c["f"])("",!0),(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(Y.product.imagesUrl,(function(t){return Object(c["A"])(),Object(c["g"])("div",{key:t,class:"mt-3"},[Object(c["h"])("img",{src:t,class:"w-100",alt:""},null,8,R)])})),128)),Object(c["h"])("div",X,[Object(c["k"])(et)])])])])])])],64)}r("99af"),r("ac1f"),r("5319"),r("c740"),r("a434");var Z=Object(c["h"])("h2",{class:"text-center h2"},"訂購須知",-1),tt=Object(c["h"])("p",null,[Object(c["h"])("span",{class:"h5 pb-2 text-primary"},[Object(c["h"])("strong",null,"退換貨說明")]),Object(c["h"])("br"),Object(c["h"])("br"),Object(c["j"])(" 會員所購買的商品均享有到貨十天的猶豫期（含例假日）。退回之商品必須於猶豫期內寄回。 "),Object(c["h"])("br"),Object(c["h"])("br"),Object(c["j"])(" 辦理退換貨時，商品必須是全新狀態與完整包裝"),Object(c["h"])("span",{class:"text-danger"},[Object(c["h"])("strong",null," (請注意保持商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性，切勿缺漏任何配件或損毀原廠外盒) ")]),Object(c["j"])(" 。退回商品無法回復原狀者，恐將影響退貨權益或需負擔部分費用。 "),Object(c["h"])("br"),Object(c["h"])("br"),Object(c["j"])(" 訂購本商品前請務必詳閱商品退換貨原則。 ")],-1),et=[Z,tt];function rt(t,e){return Object(c["A"])(),Object(c["g"])("div",null,et)}const ct={};ct.render=rt;var nt=ct,ot=r("cfb9"),it={components:{ShoppingNotes:nt},data:function(){return{favorited:JSON.parse(localStorage.getItem("favoriteItem"))||[],product:{},status:{loadingItem:""},isLoading:!1}},methods:{getProduct:function(t){var e=this,r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/product/").concat(t);this.isLoading=!0,this.$http.get(r).then((function(t){e.isLoading=!1,t.data.success&&(e.product=t.data.product,e.product.num=1,e.product.content=e.product.content.replace(/\n/g,"<br>"),e.product.description=e.product.description.replace(/\n/g,"<br>"),e.product.author=e.product.author.replace(/\n/g,"<br>"),e.product.catalog=e.product.catalog.replace(/\n/g,"<br>"))}))},addCart:function(t,e){var r=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/cart");this.status.loadingItem=t;var n={product_id:t,qty:e};this.$http.post(c,{data:n}).then((function(t){t.data.success&&(ot["a"].emit("update-cart"),r.status.loadingItem="",r.$httpMessageState(t,"加入購物車"))}))},setFav:function(t){var e=this.favorited.findIndex((function(e){return t===e}));this.favorited.indexOf(t)<0?this.favorited.push(t):(console.log(this.favorited),this.favorited.splice(e,1)),localStorage.setItem("favoriteItem",JSON.stringify(this.favorited))}},created:function(){var t=this.$route.params.id;this.getProduct(t)}};it.render=Y;e["default"]=it},"1dde":function(t,e,r){var c=r("d039"),n=r("b622"),o=r("2d00"),i=n("species");t.exports=function(t){return o>=51||!c((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,r){var c=r("da84");t.exports=c},"746f":function(t,e,r){var c=r("428f"),n=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=c.Symbol||(c.Symbol={});n(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var c=r("a04b"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=c(e);i in t?n.f(t,i,o(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var c=r("23e7"),n=r("d039"),o=r("e8b5"),i=r("861d"),a=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),b=r("b622"),f=r("2d00"),h=b("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",j=f>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=d("concat"),v=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},m=!j||!g;c({target:"Array",proto:!0,forced:m},{concat:function(t){var e,r,c,n,o,i=a(this),d=l(i,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(o=-1===e?i:arguments[e],v(o)){if(n=s(o.length),b+n>p)throw TypeError(O);for(r=0;r<n;r++,b++)r in o&&u(d,b,o[r])}else{if(b>=p)throw TypeError(O);u(d,b++,o)}return d.length=b,d}})},a434:function(t,e,r){"use strict";var c=r("23e7"),n=r("23cb"),o=r("a691"),i=r("50c4"),a=r("7b0b"),s=r("65f0"),u=r("8418"),l=r("1dde"),d=l("splice"),b=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var r,c,l,d,O,j,g=a(this),v=i(g.length),m=n(t,v),y=arguments.length;if(0===y?r=c=0:1===y?(r=0,c=v-m):(r=y-2,c=f(b(o(e),0),v-m)),v+r-c>h)throw TypeError(p);for(l=s(g,c),d=0;d<c;d++)O=m+d,O in g&&u(l,d,g[O]);if(l.length=c,r<c){for(d=m;d<v-c;d++)O=d+c,j=d+r,O in g?g[j]=g[O]:delete g[j];for(d=v;d>v-c+r;d--)delete g[d-1]}else if(r>c)for(d=v-c;d>m;d--)O=d+c-1,j=d+r-1,O in g?g[j]=g[O]:delete g[j];for(d=0;d<r;d++)g[d+m]=arguments[d+2];return g.length=v-c+r,l}})},a4d3:function(t,e,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d066"),i=r("c430"),a=r("83ab"),s=r("4930"),u=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),f=r("d9b5"),h=r("825a"),p=r("7b0b"),O=r("fc6a"),j=r("a04b"),g=r("577e"),v=r("5c6c"),m=r("7c73"),y=r("df75"),x=r("241c"),w=r("057f"),S=r("7418"),k=r("06cf"),A=r("9bf2"),I=r("d1e7"),L=r("9112"),T=r("6eeb"),M=r("5692"),$=r("f772"),P=r("d012"),H=r("90e3"),N=r("b622"),C=r("e538"),K=r("746f"),E=r("d44e"),F=r("69f3"),J=r("b727").forEach,U=$("hidden"),V="Symbol",_="prototype",B=N("toPrimitive"),q=F.set,D=F.getterFor(V),G=Object[_],Q=n.Symbol,W=o("JSON","stringify"),z=k.f,R=A.f,X=w.f,Y=I.f,Z=M("symbols"),tt=M("op-symbols"),et=M("string-to-symbol-registry"),rt=M("symbol-to-string-registry"),ct=M("wks"),nt=n.QObject,ot=!nt||!nt[_]||!nt[_].findChild,it=a&&u((function(){return 7!=m(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var c=z(G,e);c&&delete G[e],R(t,e,r),c&&t!==G&&R(G,e,c)}:R,at=function(t,e){var r=Z[t]=m(Q[_]);return q(r,{type:V,tag:t,description:e}),a||(r.description=e),r},st=function(t,e,r){t===G&&st(tt,e,r),h(t);var c=j(e);return h(r),l(Z,c)?(r.enumerable?(l(t,U)&&t[U][c]&&(t[U][c]=!1),r=m(r,{enumerable:v(0,!1)})):(l(t,U)||R(t,U,v(1,{})),t[U][c]=!0),it(t,c,r)):R(t,c,r)},ut=function(t,e){h(t);var r=O(e),c=y(r).concat(ht(r));return J(c,(function(e){a&&!dt.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?m(t):ut(m(t),e)},dt=function(t){var e=j(t),r=Y.call(this,e);return!(this===G&&l(Z,e)&&!l(tt,e))&&(!(r||!l(this,e)||!l(Z,e)||l(this,U)&&this[U][e])||r)},bt=function(t,e){var r=O(t),c=j(e);if(r!==G||!l(Z,c)||l(tt,c)){var n=z(r,c);return!n||!l(Z,c)||l(r,U)&&r[U][c]||(n.enumerable=!0),n}},ft=function(t){var e=X(O(t)),r=[];return J(e,(function(t){l(Z,t)||l(P,t)||r.push(t)})),r},ht=function(t){var e=t===G,r=X(e?tt:O(t)),c=[];return J(r,(function(t){!l(Z,t)||e&&!l(G,t)||c.push(Z[t])})),c};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=H(t),r=function(t){this===G&&r.call(tt,t),l(this,U)&&l(this[U],e)&&(this[U][e]=!1),it(this,e,v(1,t))};return a&&ot&&it(G,e,{configurable:!0,set:r}),at(e,t)},T(Q[_],"toString",(function(){return D(this).tag})),T(Q,"withoutSetter",(function(t){return at(H(t),t)})),I.f=dt,A.f=st,k.f=bt,x.f=w.f=ft,S.f=ht,C.f=function(t){return at(N(t),t)},a&&(R(Q[_],"description",{configurable:!0,get:function(){return D(this).description}}),i||T(G,"propertyIsEnumerable",dt,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),J(y(ct),(function(t){K(t)})),c({target:V,stat:!0,forced:!s},{for:function(t){var e=g(t);if(l(et,e))return et[e];var r=Q(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!f(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),c({target:"Object",stat:!0,forced:!s,sham:!a},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:bt}),c({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ft,getOwnPropertySymbols:ht}),c({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),W){var pt=!s||u((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));c({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var c,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(c=e,(b(e)||void 0!==t)&&!f(t))return d(e)||(e=function(t,e){if("function"==typeof c&&(e=c.call(this,t,e)),!f(e))return e}),n[1]=e,W.apply(null,n)}})}Q[_][B]||L(Q[_],B,Q[_].valueOf),E(Q,V),P[U]=!0},c740:function(t,e,r){"use strict";var c=r("23e7"),n=r("b727").findIndex,o=r("44d2"),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),c({target:"Array",proto:!0,forced:a},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},e01a:function(t,e,r){"use strict";var c=r("23e7"),n=r("83ab"),o=r("da84"),i=r("5135"),a=r("861d"),s=r("9bf2").f,u=r("e893"),l=o.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(b,l);var f=b.prototype=l.prototype;f.constructor=b;var h=f.toString,p="Symbol(test)"==String(l("test")),O=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(i(d,t))return"";var r=p?e.slice(7,-1):e.replace(O,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:b})}},e538:function(t,e,r){var c=r("b622");e.f=c}}]);
//# sourceMappingURL=chunk-3d8c8f4e.8cb077a1.js.map