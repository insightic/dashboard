import{d as C,c as s,a as t,F as x,r as A,o as a,n as _,t as k,h as z,b as c,e as L,f as d,w as p,u as v,g as N,i as j,_ as I,j as $,k as F,l as V,m as y,p as H,q as O}from"./index-CXN1MbWP.js";const P={class:"fixed-top navbar navbar-expand",style:{"margin-top":"52px"}},R={class:"container-xl"},G={class:"navbar-nav flex-row subNav"},q=["onClick"],D={class:"nav-link"},U=C({__name:"SubNavBar",props:{views:Array,viewIdx:Number},emits:["changeView"],setup(e,{emit:r}){const h=r;function n(i){h("changeView",i)}return(i,l)=>(a(),s("nav",P,[t("div",R,[t("ul",G,[(a(!0),s(x,null,A(e.views,(u,o)=>(a(),s("li",{class:_(["nav-item",{active:o==e.viewIdx}]),key:o,onClick:m=>n(o),style:{cursor:"pointer"}},[t("a",D,[t("span",{class:_(["nav-link-icon",{"text-primary":o==e.viewIdx}])},[t("i",{class:_(["bi",u.icon])},null,2)],2),t("span",{class:_(["nav-link-title d-lg-inline-block",{"text-primary":o==e.viewIdx,"d-none":o!=e.viewIdx}]),style:{"white-space":"nowrap"}},k(u.name),3)])],10,q))),128))])])]))}});/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var W={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(e,r,h,n)=>({size:i,color:l="currentColor",class:u,stroke:o,...m},{attrs:f,slots:g})=>z("svg",{...W[e],width:i,height:i,...f,class:["tabler-icon",`tabler-icon-${r}`],...e==="filled"?{fill:l}:{"stroke-width":o,stroke:l},...m},[...n.map(b=>z(...b)),...g.default?[g.default()]:[]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var E=w("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var J=w("outline","brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var K=w("outline","brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q=w("outline","brand-reddit","IconBrandReddit",[["path",{d:"M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z",key:"svg-0"}],["path",{d:"M12 8l1 -5l6 1",key:"svg-1"}],["path",{d:"M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["circle",{cx:"9",cy:"13",r:".5",fill:"currentColor",key:"svg-3"}],["circle",{cx:"15",cy:"13",r:".5",fill:"currentColor",key:"svg-4"}],["path",{d:"M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5",key:"svg-5"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var X=w("outline","brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y=w("outline","brand-twitter","IconBrandTwitter",[["path",{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z",key:"svg-0"}]]);const Z={class:"card"},ee={class:"card-body"},te={key:0,class:"subheader"},M={__name:"CardComponent",props:{subheader:{type:String,default:null},topline:{type:String,default:null}},setup(e){return(r,h)=>(a(),s("div",Z,[e.topline?(a(),s("div",{key:0,class:_(["card-status-top",`bg-${e.topline}`])},null,2)):c("",!0),t("div",ee,[e.subheader?(a(),s("div",te,k(e.subheader),1)):c("",!0),L(r.$slots,"default")])]))}},ae={class:"mb-3"},ne={class:"row"},se={class:"col-md-8 my-2"},ie={class:"row"},le={class:"col-md-3 d-flex align-items-center justify-content-center"},ce=["src"],re={class:"col-md-9"},oe={class:"h3"},de={class:"mt-2 small"},ue=["href"],he=["href"],ve=["href"],me=["href"],_e=["href"],ke=["href"],we={class:"col-md-4 my-2"},ge={class:"text-center h-100 d-flex flex-column align-items-center justify-content-center"},ye=t("div",{class:"small"},"RATING",-1),fe=C({__name:"HeaderView",props:{data:Object},setup(e){return(r,h)=>(a(),s("div",ae,[t("div",ne,[t("div",se,[d(M,{class:"h-100",style:{"min-height":"180px"}},{default:p(()=>{var n,i,l,u,o,m,f,g,b,B,S,T;return[t("div",ie,[t("div",le,[t("img",{src:e.data.logoUrl,alt:"Logo",style:{"max-width":"128px"}},null,8,ce)]),t("div",re,[t("div",oe,k(e.data.name),1),t("div",null,k(e.data.description),1),t("div",de,[(i=(n=e.data)==null?void 0:n.links)!=null&&i.website?(a(),s("a",{key:0,class:"me-2",href:e.data.links.website,target:"_blank"},[d(v(E),{"stroke-width":1,size:18})],8,ue)):c("",!0),(u=(l=e.data)==null?void 0:l.links)!=null&&u.twitter?(a(),s("a",{key:1,class:"me-2",href:e.data.links.twitter,target:"_blank"},[d(v(Y),{"stroke-width":1,size:18})],8,he)):c("",!0),(m=(o=e.data)==null?void 0:o.links)!=null&&m.linkedin?(a(),s("a",{key:2,class:"me-2",href:e.data.links.linkedin,target:"_blank"},[d(v(K),{"stroke-width":1,size:18})],8,ve)):c("",!0),(g=(f=e.data)==null?void 0:f.links)!=null&&g.reddit?(a(),s("a",{key:3,class:"me-2",href:e.data.links.reddit,target:"_blank"},[d(v(Q),{"stroke-width":1,size:18})],8,me)):c("",!0),(B=(b=e.data)==null?void 0:b.links)!=null&&B.github?(a(),s("a",{key:4,class:"me-2",href:e.data.links.github,target:"_blank"},[d(v(J),{"stroke-width":1,size:18})],8,_e)):c("",!0),(T=(S=e.data)==null?void 0:S.links)!=null&&T.telegram?(a(),s("a",{key:5,class:"me-2",href:e.data.links.telegram,target:"_blank"},[d(v(X),{"stroke-width":1,size:18})],8,ke)):c("",!0)])])])]}),_:1})]),t("div",we,[d(M,{class:"h-100"},{default:p(()=>{var n,i,l;return[t("div",ge,[ye,(n=e.data)!=null&&n.rating?(a(),s("div",{key:0,class:_(["d-flex align-items-center justify-content-center",v(N)((i=e.data)==null?void 0:i.rating)]),style:{"font-size":"4.5rem"}},k((l=e.data)==null?void 0:l.rating),3)):c("",!0)])]}),_:1})])])]))}}),be={class:"mb-3"},$e=t("div",{class:"h1 m-0"},"Overview",-1),xe={class:"row"},pe={class:"col-md-12 my-2"},Me=["innerHTML"],Ce={class:"h1 m-0"},Ie={class:"row"},Ve={class:"col-md-12 my-2"},Be=["innerHTML"],Se=C({__name:"OverviewView",props:{data:Object},setup(e){return(r,h)=>{var n;return a(),s(x,null,[t("div",be,[$e,t("div",xe,[t("div",pe,[d(M,{class:"h-100"},{default:p(()=>{var i;return[t("div",{innerHTML:v(j)((i=e.data)==null?void 0:i.overview)},null,8,Me)]}),_:1})])])]),(a(!0),s(x,null,A((n=e.data)==null?void 0:n.details,(i,l)=>(a(),s("div",{key:l,class:"mb-3"},[t("div",Ce,k(i.title),1),t("div",Ie,[t("div",Ve,[d(M,{class:"h-100"},{default:p(()=>[t("div",{innerHTML:v(j)(i.value)},null,8,Be)]),_:2},1024)])])]))),128))],64)}}}),Te={};function ze(e,r){return"Team Social Media"}const je=I(Te,[["render",ze]]),Ae={};function Le(e,r){return"Smart Contract Validation"}const Ne=I(Ae,[["render",Le]]),Fe={};function He(e,r){return"Financial Analysis"}const Oe=I(Fe,[["render",He]]),Pe={};function Re(e,r){return"SC"}const Ge=I(Pe,[["render",Re]]),qe={class:"container py-2",style:{"margin-top":"112px"}},De={key:0},Ue={key:1,class:"p-3 mx-auto",style:{"max-width":"960px"}},We=t("div",{class:"loading mx-auto mt-5"},null,-1),Ee=[We],Ke=C({__name:"ProjectView",setup(e){const r=$(!0),h=H(),n=$({}),i=$([{name:"Overview",icon:"bi-house-door"},{name:"Team & Social Media",icon:"bi-people"},{name:"Smart Contract Validation",icon:"bi-check2-square"},{name:"Financial Analysis",icon:"bi-currency-dollar"},{name:"Security and Compliance",icon:"bi-lock"}]),l=$(0);return F(async()=>{const u=await V.getProjectData(h.params.type,h.params.id);u.url=V.resolvePath(`stablecoin/${h.params.id}`),u.logoUrl=V.resolvePath(`stablecoin/${h.params.id}/${u.logo}`),n.value=u,r.value=!1}),(u,o)=>(a(),s(x,null,[d(O),d(U,{views:i.value,"view-idx":l.value,onChangeView:o[0]||(o[0]=m=>l.value=m)},null,8,["views","view-idx"]),t("div",qe,[r.value?c("",!0):(a(),s("div",De,[d(fe,{data:n.value},null,8,["data"]),l.value==0?(a(),y(Se,{key:0,data:n.value},null,8,["data"])):c("",!0),l.value==1?(a(),y(je,{key:1,data:n.value},null,8,["data"])):c("",!0),l.value==2?(a(),y(Ne,{key:2,data:n.value},null,8,["data"])):c("",!0),l.value==3?(a(),y(Oe,{key:3,data:n.value},null,8,["data"])):c("",!0),l.value==4?(a(),y(Ge,{key:4,data:n.value},null,8,["data"])):c("",!0)])),r.value?(a(),s("div",Ue,Ee)):c("",!0)])],64))}});export{Ke as default};
