(function(){"use strict";var t={3014:function(t,e,a){var n=a(9242),o=a(3396);const s={class:"header"},i=(0,o._)("ul",{class:"header-button-left"},[(0,o._)("li",null,"Cancel")],-1),r={class:"header-button-right"},l={class:"footer"},p={class:"footer-button-plus"},u=(0,o._)("label",{for:"file",class:"input-plus"},"+",-1);function c(t,e,a,n,c,d){const m=(0,o.up)("Thecontainer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[i,(0,o._)("ul",r,[1==c.step?((0,o.wg)(),(0,o.iD)("li",{key:0,onClick:e[0]||(e[0]=t=>c.step++)},"Next")):(0,o.kq)("",!0),2==c.step?((0,o.wg)(),(0,o.iD)("li",{key:1,onClick:e[1]||(e[1]=(...t)=>d.publish&&d.publish(...t))},"upload")):(0,o.kq)("",!0)])]),(0,o.Wm)(m,{postdata:c.postdata,step:c.step,img:c.img,onWrite:e[2]||(e[2]=t=>c.myData=t)},null,8,["postdata","step","img"]),(0,o._)("button",{onClick:e[3]||(e[3]=(...t)=>d.more&&d.more(...t))},"더보기"),(0,o._)("div",l,[(0,o._)("ul",p,[(0,o._)("input",{onChange:e[4]||(e[4]=(...t)=>d.upload&&d.upload(...t)),type:"file",id:"file",class:"inputfile"},null,32),u])])],64)}var d=a(7139);const m={key:0},f=(0,o.Uk)(" 컨테이너예요 "),g={key:1},h=(0,o.uE)('<div class="filters"><div class="filter-1"></div><div class="filter-1"></div><div class="filter-1"></div><div class="filter-1"></div><div class="filter-1"></div></div>',1),v={key:2},k={key:0,class:"write"};function y(t,e,a,n,s,i){const r=(0,o.up)("Thepost");return(0,o.wg)(),(0,o.iD)(o.HY,null,[0==a.step?((0,o.wg)(),(0,o.iD)("div",m,[f,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.postdata,((t,e)=>((0,o.wg)(),(0,o.j4)(r,{postdata:a.postdata[e],key:e},null,8,["postdata"])))),128))])):(0,o.kq)("",!0),1==a.step?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("div",{class:"upload-image",style:(0,d.j5)(`background-image:url(${a.img})`)},null,4),h])):(0,o.kq)("",!0),2==a.step?((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",{class:"upload-image",style:(0,d.j5)(`background-image:url(${a.img})`)},null,4),2==a.step?((0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("textarea",{class:"write-box",onInput:e[0]||(e[0]=e=>t.$emit("write",e.target.value))},"write!",32)])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)],64)}const b={class:"post"},w={class:"post-header"},_={class:"profile-name"},D={class:"post-content"},j={class:"date"};function O(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",w,[(0,o._)("div",{class:"profile",style:(0,d.j5)({background:`url(${a.postdata.userImage})`})},null,4),(0,o._)("span",_,(0,d.zw)(a.postdata.name),1)]),(0,o._)("div",{class:"post-body",style:(0,d.j5)({background:`url(${a.postdata.postImage})`})},null,4),(0,o._)("div",D,[(0,o._)("p",null,(0,d.zw)(a.postdata.likes),1),(0,o._)("p",null,[(0,o._)("strong",null,(0,d.zw)(a.postdata.name),1),(0,o.Uk)(" "+(0,d.zw)(a.postdata.content),1)]),(0,o._)("p",j,(0,d.zw)(a.postdata.date),1)])])}var I={name:"app",props:{postdata:Array}},x=a(89);const C=(0,x.Z)(I,[["render",O]]);var q=C,T={name:"app",components:{Thepost:q},props:{postdata:Array,step:Number,img:String}};const $=(0,x.Z)(T,[["render",y]]);var z=$,A=[{name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:"https://placeimg.com/640/480/arch",likes:36,date:"May 15",liked:!1,content:"오늘 무엇을 했냐면요 아무것도 안했어요 ?",filter:"perpetua"},{name:"John Doe",userImage:"https://placeimg.com/200/200/people",postImage:"https://placeimg.com/640/480/people",likes:20,date:"Apr 20",liked:!1,content:"흔한 자랑스타그램",filter:"clarendon"},{name:"Minny",userImage:"https://placeimg.com/100/100/animals",postImage:"https://placeimg.com/640/480/animals",likes:49,date:"Apr 4",liked:!1,content:"우리집 개는 화장실 물도 내림",filter:"lofi"}],H=a(6265),M=a.n(H);M().post();var U={name:"App",components:{Thecontainer:z},data(){return{postdata:A,themore:0,step:0,img:"",myData:""}},methods:{more(){M().get(`https://codingapple1.github.io/vue/more${this.themore}.json`).then((t=>{console.log(t.data),this.postdata.push(t.data),this.themore++}))},upload(t){let e=t.target.files;console.log(e);let a=URL.createObjectURL(e[0]);console.log(a),this.img=a,this.step++},publish(){var t={name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:this.img,likes:36,date:"May 15",liked:!1,content:this.myData,filter:"perpetua"};this.postdata.unshift(t),this.step=0}}};const K=(0,x.Z)(U,[["render",c]]);var Y=K;(0,n.ri)(Y).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,s){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(r=!1,s<i&&(i=s));if(r){t.splice(u--,1);var p=o();void 0!==p&&(e=p)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,i=n[0],r=n[1],l=n[2],p=0;if(i.some((function(e){return 0!==t[e]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(l)var u=l(a)}for(e&&e(n);p<i.length;p++)s=i[p],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},n=self["webpackChunkvuestagram"]=self["webpackChunkvuestagram"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3014)}));n=a.O(n)})();
//# sourceMappingURL=app.aa672630.js.map