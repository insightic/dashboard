import{c as B,d as V,a as s,b as t,F as p,r as A,o as a,n as F,t as b,e as y,f as ue,g as i,w as T,u as f,h as he,i as M,j as at,k as j,l as st,m as oe,p as me,q as it,C as O,s as dt,_ as _e,v as nt,x as ve,y as ye,z as be,A as fe}from"./index-DJSU5ndR.js";/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ge=B("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $e=B("outline","brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ce=B("outline","brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ke=B("outline","brand-reddit","IconBrandReddit",[["path",{d:"M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z",key:"svg-0"}],["path",{d:"M12 8l1 -5l6 1",key:"svg-1"}],["path",{d:"M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["circle",{cx:"9",cy:"13",r:".5",fill:"currentColor",key:"svg-3"}],["circle",{cx:"15",cy:"13",r:".5",fill:"currentColor",key:"svg-4"}],["path",{d:"M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5",key:"svg-5"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var we=B("outline","brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var re=B("outline","brand-x","IconBrandX",[["path",{d:"M4 4l11.733 16h4.267l-11.733 -16z",key:"svg-0"}],["path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772",key:"svg-1"}]]);const xe={class:"fixed-top navbar navbar-expand",style:{"margin-top":"52px"}},pe={class:"container-xl"},Te={class:"navbar-nav flex-row subNav"},Me=["onClick"],Se={class:"nav-link"},Le=V({__name:"SubNavBar",props:{views:Array,viewIdx:Number},emits:["changeView"],setup(e,{emit:x}){const v=x;function u(m){v("changeView",m)}return(m,n)=>(a(),s("nav",xe,[t("div",pe,[t("ul",Te,[(a(!0),s(p,null,A(e.views,(r,h)=>(a(),s("li",{class:F(["nav-item",{active:h==e.viewIdx}]),key:h,onClick:c=>u(h),style:{cursor:"pointer"}},[t("a",Se,[t("span",{class:F(["nav-link-icon",{"text-primary":h==e.viewIdx}])},[t("i",{class:F(["bi",r.icon])},null,2)],2),t("span",{class:F(["nav-link-title d-lg-inline-block",{"text-primary":h==e.viewIdx,"d-none":h!=e.viewIdx}]),style:{"white-space":"nowrap"}},b(r.name),3)])],10,Me))),128))])])]))}}),He={class:"card"},Ae={class:"card-body"},Ve={key:0,class:"subheader"},N=V({__name:"CardComponent",props:{subheader:{type:String,default:null},topline:{type:String,default:null}},setup(e){return(x,v)=>(a(),s("div",He,[e.topline?(a(),s("div",{key:0,class:F(["card-status-top",`bg-${e.topline}`])},null,2)):y("",!0),t("div",Ae,[e.subheader?(a(),s("div",Ve,b(e.subheader),1)):y("",!0),ue(x.$slots,"default")])]))}}),Ne={class:"mb-3"},Ce={class:"row"},qe={class:"col-md-8 my-2"},ze={class:"row"},je={class:"col-md-3 d-flex align-items-center justify-content-center"},Fe=["src"],Ie={class:"col-md-9"},Oe={class:"h3"},Be={class:"mt-2 small"},Re=["href"],De=["href"],Pe=["href"],Ue=["href"],Ee=["href"],Ke=["href"],We={class:"col-md-4 my-2"},Ge={class:"text-center h-100 d-flex flex-column align-items-center justify-content-center"},Ye=t("div",{class:"small"},"RATING",-1),Xe=V({__name:"HeaderView",props:{data:Object},setup(e){return(x,v)=>(a(),s("div",Ne,[t("div",Ce,[t("div",qe,[i(N,{class:"h-100",style:{"min-height":"180px"}},{default:T(()=>{var u,m,n,r,h,c,l,g,o,_,$,k;return[t("div",ze,[t("div",je,[t("img",{src:e.data.logoUrl,alt:"Logo",style:{"max-width":"128px"}},null,8,Fe)]),t("div",Ie,[t("div",Oe,b(e.data.name),1),t("div",null,b(e.data.description),1),t("div",Be,[(m=(u=e.data)==null?void 0:u.links)!=null&&m.website?(a(),s("a",{key:0,class:"me-2",href:e.data.links.website,target:"_blank"},[i(f(ge),{"stroke-width":1,size:18})],8,Re)):y("",!0),(r=(n=e.data)==null?void 0:n.links)!=null&&r.twitter?(a(),s("a",{key:1,class:"me-2",href:e.data.links.twitter,target:"_blank"},[i(f(re),{"stroke-width":1,size:18})],8,De)):y("",!0),(c=(h=e.data)==null?void 0:h.links)!=null&&c.linkedin?(a(),s("a",{key:2,class:"me-2",href:e.data.links.linkedin,target:"_blank"},[i(f(ce),{"stroke-width":1,size:18})],8,Pe)):y("",!0),(g=(l=e.data)==null?void 0:l.links)!=null&&g.reddit?(a(),s("a",{key:3,class:"me-2",href:e.data.links.reddit,target:"_blank"},[i(f(ke),{"stroke-width":1,size:18})],8,Ue)):y("",!0),(_=(o=e.data)==null?void 0:o.links)!=null&&_.github?(a(),s("a",{key:4,class:"me-2",href:e.data.links.github,target:"_blank"},[i(f($e),{"stroke-width":1,size:18})],8,Ee)):y("",!0),(k=($=e.data)==null?void 0:$.links)!=null&&k.telegram?(a(),s("a",{key:5,class:"me-2",href:e.data.links.telegram,target:"_blank"},[i(f(we),{"stroke-width":1,size:18})],8,Ke)):y("",!0)])])])]}),_:1})]),t("div",We,[i(N,{class:"h-100"},{default:T(()=>{var u,m,n;return[t("div",Ge,[Ye,(u=e.data)!=null&&u.rating?(a(),s("div",{key:0,class:F(["d-flex align-items-center justify-content-center",f(he)((m=e.data)==null?void 0:m.rating)]),style:{"font-size":"4.5rem"}},b((n=e.data)==null?void 0:n.rating),3)):y("",!0)])]}),_:1})])])]))}}),Je={class:"mb-3"},Qe=t("div",{class:"h1 m-0"},"Overview",-1),Ze={class:"row"},ta={class:"col-md-12 my-2"},ea=["innerHTML"],aa={class:"h1 m-0"},sa={class:"row"},na={class:"col-md-12 my-2"},la=["innerHTML"],ia=V({__name:"OverviewView",props:{data:Object},setup(e){return console.log(e),(v,u)=>{var m;return a(),s(p,null,[t("div",Je,[Qe,t("div",Ze,[t("div",ta,[i(N,{class:"h-100"},{default:T(()=>{var n;return[t("div",{innerHTML:f(M)((n=e.data)==null?void 0:n.overview)},null,8,ea)]}),_:1})])])]),(a(!0),s(p,null,A((m=e.data)==null?void 0:m.details,(n,r)=>(a(),s("div",{key:r,class:"mb-3"},[t("div",aa,b(n.title),1),t("div",sa,[t("div",na,[i(N,{class:"h-100"},{default:T(()=>[t("div",{innerHTML:f(M)(n.value)},null,8,la)]),_:2},1024)])])]))),128))],64)}}}),da={class:"card"},oa={class:"card-header"},ca={class:"card-title"},ra={key:0,class:"ms-auto text-secondary small"},ua={class:"flex-grow-1"},ha={class:"table-responsive"},ma={class:"table card-table"},_a=t("thead",null,[t("tr",null,[t("th",null,"Highest"),t("th",null,"Lowest"),t("th",null,"Mean"),t("th",null,"Median")])],-1),va={style:{height:"500px"}},q=V({__name:"ChartComponent",props:{type:{type:String,default:"area"},title:{type:String,required:!0},labels:{type:Array,required:!0},data:{type:Array,required:!0},updateAt:{type:Date,default:null}},setup(e){const x=e;function v(c){return c=Number(c),Number.isNaN(c)?0:c}const u=at(()=>x.data.map(c=>({name:c.name,data:c.data.map(l=>v(l))}))),m=at(()=>u.value.map(l=>l.data).map(l=>l.length>0?Math.max(...l):0).map(l=>l.toFixed(2)).join("/")),n=at(()=>u.value.map(l=>l.data).map(l=>l.length>0?Math.min(...l):0).map(l=>l.toFixed(2)).join("/")),r=at(()=>u.value.map(l=>l.data).map(l=>l.length>0?l.reduce((g,o)=>g+o)/l.length:0).map(l=>l.toFixed(2)).join("/")),h=at(()=>{const c=function(g){const o=Array.from(g).sort(($,k)=>v($)-v(k)),_=Math.floor(o.length/2);return o.length%2===0?(v(o[_-1])+v(o[_]))/2:v(o[_])};return u.value.map(g=>g.data).map(g=>g.length>0?c(g):0).map(g=>g.toFixed(2)).join("/")});return(c,l)=>{const g=st("apexchart");return a(),s("div",da,[t("div",oa,[t("div",ca,b(e.title),1),e.updateAt?(a(),s("div",ra," Last Update: "+b(f(oe)(e.updateAt)),1)):y("",!0)]),t("div",ua,[t("div",ha,[t("table",ma,[_a,t("tbody",null,[t("tr",null,[t("td",null,b(m.value),1),t("td",null,b(n.value),1),t("td",null,b(r.value),1),t("td",null,b(h.value),1)])])])])]),t("div",va,[e.data.length>0&&e.data[0].data.length>0?(a(),j(g,{key:0,height:"100%",type:e.type,series:u.value,options:{chart:{},yaxis:{labels:{formatter:function(o){return o.toFixed(2)}}},legend:{show:!1},dataLabels:{enabled:!1},fill:{opacity:.16,type:"solid"},stroke:{width:2,lineCap:"round",curve:"smooth"},labels:e.labels,colors:["#0054a6","#43ff64"]}},null,8,["type","series","options"])):y("",!0)])])}}}),ya={class:"mb-3"},ba=t("div",{class:"h1 m-0"},"AML/KYT",-1),fa={class:"row"},ga={class:"col-md-6 my-2"},$a={class:"col-md-6 my-2"},ka={class:"col-md-12 my-2"},wa=V({__name:"AMLKYTView",props:{data:Object},setup(e){return(x,v)=>{var u,m,n,r,h,c,l,g,o,_,$,k;return a(),s("div",ya,[ba,t("div",fa,[t("div",ga,[i(q,{type:"bar",title:"Top 100 Holder Risk Score",labels:(m=(u=e.data)==null?void 0:u.zanRiskScore)==null?void 0:m.map(w=>`${w.created_date}`),data:[{name:"Top 100 Holder Risk Score",data:(r=(n=e.data)==null?void 0:n.zanRiskScore)==null?void 0:r.map(w=>Number(w.avg_top_100_holder_risk_score))}]},null,8,["labels","data"])]),t("div",$a,[i(q,{type:"bar",title:"Top 1000 Holder Risk Score",labels:(c=(h=e.data)==null?void 0:h.zanRiskScore)==null?void 0:c.map(w=>`${w.created_date}`),data:[{name:"Top 1000 Holder Risk Score",data:(g=(l=e.data)==null?void 0:l.zanRiskScore)==null?void 0:g.map(w=>Number(w.avg_top_1000_holder_risk_score))}]},null,8,["labels","data"])]),t("div",ka,[i(q,{type:"bar",title:"Average Transaction Risk Score",labels:(_=(o=e.data)==null?void 0:o.zanRiskScore)==null?void 0:_.map(w=>`${w.created_date}`),data:[{name:"Average Transaction Risk Score",data:(k=($=e.data)==null?void 0:$.zanRiskScore)==null?void 0:k.map(w=>Number(w.avg_tx_risk_score))}]},null,8,["labels","data"])])])])}}}),xa={class:"card"},pa={class:"card-body p-4 text-center"},Ta={class:"m-0 mb-1"},Ma={class:"text-secondary"},Sa={class:"d-flex"},La=["href"],Ha=["href"],Aa=V({__name:"PeopleComponent",props:{avatar:{type:String,default:null},name:{type:String,default:null},title:{type:String,default:null},twitter:{type:String,default:null},linkedin:{type:String,default:null}},setup(e){return(x,v)=>(a(),s("div",xa,[t("div",pa,[t("span",{class:"avatar avatar-xl mb-3 rounded",style:me(`background-image: url(${e.avatar})`)},null,4),t("h3",Ta,b(e.name),1),t("div",Ma,b(e.title),1)]),t("div",Sa,[e.twitter?(a(),s("a",{key:0,href:e.twitter,class:"card-btn",target:"_blank"},[i(f(re),{class:"text-secondary me-2","stroke-width":1,size:18}),it(" Twitter ")],8,La)):y("",!0),e.linkedin?(a(),s("a",{key:1,href:e.linkedin,class:"card-btn",target:"_blank"},[i(f(ce),{class:"text-secondary me-2","stroke-width":1,size:18}),it(" LinkedIn ")],8,Ha)):y("",!0)])]))}}),Va={key:0,class:"mb-3"},Na=t("div",{class:"h1 m-0"},"Team",-1),Ca={class:"row"},qa={key:1,class:"mb-3"},za=t("div",{class:"h1 m-0"},"Social Media",-1),ja={class:"row"},Fa={class:"col-md-12 my-2"},Ia=t("thead",null,[t("tr",null,[t("th",null,"Total/Average"),t("th",null,"Last Week"),t("th",null,"2 Weeks Ago"),t("th",null,"3 Weeks Ago")])],-1),Oa={key:2,class:"mb-3"},Ba=t("div",{class:"h1 m-0"},"Twitter",-1),Ra={class:"row"},Da={class:"col-md-12 my-2"},Pa=t("thead",null,[t("tr",null,[t("th",null,"Post Content"),t("th",{style:{"min-width":"200px"}},"Sentiment Analysis")])],-1),Ua={style:{"text-transform":"capitalize"}},Ea={key:3,class:"mb-3"},Ka=t("div",{class:"h1 m-0"},"Soso Value News",-1),Wa={class:"row"},Ga={class:"col-md-12 my-2"},Ya={class:"col-md-12 my-2"},Xa={class:"col-md-12 my-2"},Ja=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Content"),t("th",null,"Date")])],-1),Qa=V({__name:"TeamSocialMediaView",props:{data:Object},setup(e){function x(v){return v==="positive"?"bg-success":v==="negative"?"bg-danger":"bg-secondary"}return(v,u)=>{var n,r,h,c,l,g;const m=st("apexchart");return a(),s(p,null,[f(dt)((n=e.data)==null?void 0:n.team)?(a(),s("div",Va,[Na,t("div",Ca,[(a(!0),s(p,null,A((r=e.data)==null?void 0:r.team,(o,_)=>(a(),s("div",{class:"col-sm-6 col-md-4 my-2",key:_},[i(Aa,{class:"h-100",avatar:o.avatar,name:o.name,title:o.title,twitter:o.twitter,linkedin:o.linkedin},null,8,["avatar","name","title","twitter","linkedin"])]))),128))])])):y("",!0),f(dt)((c=(h=e.data)==null?void 0:h.social_media)==null?void 0:c.twitter)?(a(),s("div",qa,[za,t("div",ja,[t("div",Fa,[i(O,null,{default:T(()=>{var o,_;return[Ia,t("tbody",null,[(a(!0),s(p,null,A((_=(o=e.data)==null?void 0:o.social_media)==null?void 0:_.twitter,($,k)=>(a(),s("tr",{key:k},[t("td",null,b($.title),1),(a(!0),s(p,null,A($.value,(w,C)=>(a(),s("td",{key:C},b(w),1))),128))]))),128))])]}),_:1})])])])):y("",!0),(l=e.data)!=null&&l.twitter?(a(),s("div",Oa,[Ba,t("div",Ra,[t("div",Da,[i(O,null,{default:T(()=>{var o,_;return[Pa,t("tbody",null,[(a(!0),s(p,null,A((_=(o=e.data)==null?void 0:o.twitter)==null?void 0:_.extracted_posts,($,k)=>(a(),s("tr",{key:k},[t("td",null,b($.post_content),1),t("td",null,[t("span",{class:F(["badge me-1",x($.sentiment_analysis)])},null,2),t("span",Ua,b($.sentiment_analysis),1)])]))),128))])]}),_:1})])])])):y("",!0),(g=e.data)!=null&&g.sosoValueNews?(a(),s("div",Ea,[Ka,t("div",Wa,[t("div",Ga,[i(N,null,{default:T(()=>{var o,_;return[it(b((_=(o=e.data)==null?void 0:o.sosoValueNews)==null?void 0:_.overall_prompt_summary),1)]}),_:1})]),t("div",Ya,[i(N,null,{default:T(()=>{var o,_,$,k,w,C;return[i(m,{width:"540",type:"pie",options:{labels:Object.keys(($=(_=(o=e.data)==null?void 0:o.sosoValueNews)==null?void 0:_.overall_sentiment_analysis)==null?void 0:$.distribution)},series:Object.values((C=(w=(k=e.data)==null?void 0:k.sosoValueNews)==null?void 0:w.overall_sentiment_analysis)==null?void 0:C.distribution)},null,8,["options","series"])]}),_:1})]),t("div",Xa,[i(O,null,{default:T(()=>{var o,_;return[Ja,t("tbody",null,[(a(!0),s(p,null,A((_=(o=e.data)==null?void 0:o.sosoValueNews)==null?void 0:_.extracted_news,($,k)=>(a(),s("tr",{key:k},[t("td",null,b($.title),1),t("td",null,b($.body),1),t("td",null,b($.created_time),1)]))),128))])]}),_:1})])])])):y("",!0)],64)}}}),Za={key:0,class:"mb-3"},ts=t("div",{class:"h1 m-0"},"Smart Contract Validation",-1),es={class:"row"},as={class:"h3 mb-0"},ss=["innerHTML"],ns=t("div",{style:{"text-decoration":"underline"}},"whitepaper",-1),ls=["innerHTML"],is=t("div",{style:{"text-decoration":"underline"}},"code",-1),ds=["innerHTML"],os=V({__name:"SmartContractValidationView",props:{data:Object},setup(e){function x(v){return v=v.toLowerCase(),v==="yes"?"success":v==="no"?"danger":"warning"}return(v,u)=>{var m;return e.data?(a(),s("div",Za,[ts,t("div",es,[(a(!0),s(p,null,A((m=e.data)==null?void 0:m.scv,(n,r)=>(a(),s("div",{class:"col-md-4 my-2",key:r},[i(N,{class:"h-100",topline:x(n.pass)},{default:T(()=>[t("div",as,"#"+b(n.id)+" - "+b(n.title),1),t("div",{class:"fix-line mb-2",innerHTML:f(M)(n.description)},null,8,ss),ns,t("div",{class:"fix-line",innerHTML:f(M)(n.whitepaper)},null,8,ls),is,t("div",{class:"fix-line",innerHTML:f(M)(n.code)},null,8,ds)]),_:2},1032,["topline"])]))),128))])])):y("",!0)}}}),cs={class:"mb-3"},rs=t("div",{class:"h1 m-0"},"Financial Audit",-1),us={class:"row"},hs={class:"col-md-12 my-2"},ms={class:"mb-3"},_s=t("td",{style:{"min-width":"80px"}},"Auditors:",-1),vs=["innerHTML"],ys=t("td",null,"Score:",-1),bs=["innerHTML"],fs=t("td",null,"Analysis:",-1),gs=["innerHTML"],$s={class:"d-flex"},ks={key:0,class:"mx-auto",style:{width:"540px"}},ws={class:"mb-3"},xs=t("div",{class:"h1 m-0"},"Market Capitalization and Liquidity",-1),ps={class:"row"},Ts={class:"col-md-12 my-2"},Ms=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Value")])],-1),Ss=["innerHTML"],Ls=["innerHTML"],Hs={class:"mb-3"},As={key:0,class:"h1 m-0"},Vs={key:1,class:"row"},Ns={class:"col-md-12 my-2"},Cs=t("thead",null,[t("tr",null,[t("th",null,"Round"),t("th",null,"Amount"),t("th",null,"Valuation"),t("th",null,"Date"),t("th",null,"Investors")])],-1),qs=["innerHTML"],zs=["innerHTML"],js=["innerHTML"],Fs=["innerHTML"],Is=["innerHTML"],Os={key:0,class:"mb-3"},Bs=t("div",{class:"h1 m-0"},"List of Investors",-1),Rs={class:"row"},Ds={class:"row align-items-center"},Ps={class:"col-auto"},Us={class:"text-white avatar bg-white",style:{"box-shadow":"none !important"}},Es=["src"],Ks={class:"col"},Ws={class:"font-weight-medium"},Gs=V({__name:"FinancialAnalysisView",props:{data:Object},setup(e){return(x,v)=>{var m,n,r,h,c,l,g,o,_,$,k,w,C,R;const u=st("apexchart");return a(),s(p,null,[t("div",cs,[rs,t("div",us,[t("div",hs,[i(N,{class:"w-100"},{default:T(()=>{var L,H,S,z,D,P,U,E,K,W,G,Y,X,J,Q,Z,tt,et;return[t("table",ms,[t("tr",null,[_s,t("td",{innerHTML:f(M)((S=(H=(L=e.data)==null?void 0:L.financial_analysis)==null?void 0:H.financial_audit)==null?void 0:S.auditors)},null,8,vs)]),t("tr",null,[ys,t("td",{innerHTML:f(M)((P=(D=(z=e.data)==null?void 0:z.financial_analysis)==null?void 0:D.financial_audit)==null?void 0:P.score)},null,8,bs)]),t("tr",null,[fs,t("td",{innerHTML:f(M)((K=(E=(U=e.data)==null?void 0:U.financial_analysis)==null?void 0:E.financial_audit)==null?void 0:K.analysis)},null,8,gs)])]),t("div",$s,[f(dt)((Y=(G=(W=e.data)==null?void 0:W.financial_analysis)==null?void 0:G.financial_audit)==null?void 0:Y.reserve_holdings_percentage)?(a(),s("div",ks,[i(u,{width:"540",type:"pie",options:{labels:(Q=(J=(X=e.data)==null?void 0:X.financial_analysis)==null?void 0:J.financial_audit)==null?void 0:Q.reserve_holdings_percentage.map(I=>I.title)},series:(et=(tt=(Z=e.data)==null?void 0:Z.financial_analysis)==null?void 0:tt.financial_audit)==null?void 0:et.reserve_holdings_percentage.map(I=>I.value)},null,8,["options","series"])])):y("",!0)])]}),_:1})])])]),t("div",ws,[xs,t("div",ps,[t("div",Ts,[i(O,{class:"w-100 h-100"},{default:T(()=>{var L,H;return[Ms,t("tbody",null,[(a(!0),s(p,null,A((H=(L=e.data)==null?void 0:L.financial_analysis)==null?void 0:H.market_capitalization_and_liquidity.filter(S=>S.value),(S,z)=>(a(),s("tr",{key:z},[t("td",{innerHTML:f(M)(S.title),style:{width:"30%","min-width":"120px","max-width":"300px","vertical-align":"top"}},null,8,Ss),t("td",{innerHTML:f(M)(S.value),style:{"vertical-align":"top"}},null,8,Ls)]))),128))])]}),_:1})])])]),t("div",Hs,[(n=(m=e.data)==null?void 0:m.financial_analysis)!=null&&n.investments&&((h=(r=e.data)==null?void 0:r.financial_analysis)==null?void 0:h.investments.length)>0?(a(),s("div",As," Investments ")):y("",!0),(l=(c=e.data)==null?void 0:c.financial_analysis)!=null&&l.investments&&((o=(g=e.data)==null?void 0:g.financial_analysis)==null?void 0:o.investments.length)>0?(a(),s("div",Vs,[t("div",Ns,[i(O,{class:"w-100 h-100"},{default:T(()=>{var L,H;return[Cs,t("tbody",null,[(a(!0),s(p,null,A((H=(L=e.data)==null?void 0:L.financial_analysis)==null?void 0:H.investments,(S,z)=>(a(),s("tr",{key:z},[t("td",{innerHTML:f(M)(S.round),style:{"vertical-align":"top"}},null,8,qs),t("td",{innerHTML:f(M)(S.amount),style:{"vertical-align":"top"}},null,8,zs),t("td",{innerHTML:f(M)(S.valuation),style:{"vertical-align":"top"}},null,8,js),t("td",{innerHTML:f(M)(S.date),style:{"vertical-align":"top"}},null,8,Fs),t("td",{innerHTML:f(M)(S.investors),style:{"vertical-align":"top"}},null,8,Is)]))),128))])]}),_:1})])])):y("",!0)]),($=(_=e.data)==null?void 0:_.financial_analysis)!=null&&$.list_of_investors&&((w=(k=e.data)==null?void 0:k.financial_analysis)==null?void 0:w.list_of_investors.length)>0?(a(),s("div",Os,[Bs,t("div",Rs,[(a(!0),s(p,null,A((R=(C=e.data)==null?void 0:C.financial_analysis)==null?void 0:R.list_of_investors,(L,H)=>(a(),s("div",{key:H,class:"col-md-3 my-2"},[i(N,{class:"h-100"},{default:T(()=>[t("div",Ds,[t("div",Ps,[t("span",Us,[t("img",{src:e.data.baseUrl+"/"+L.logo,class:"w-100 h-100"},null,8,Es)])]),t("div",Ks,[t("div",Ws,b(L.name),1)])])]),_:2},1024)]))),128))])])):y("",!0)],64)}}}),Ys={key:0,class:"mb-3"},Xs=t("div",{class:"h1 m-0"},"Security Assessment",-1),Js={class:"row"},Qs={class:"col-md-12 my-2"},Zs={class:"col-md-6 my-2"},tn={class:"text-center h-100 d-flex flex-column align-items-center justify-content-center"},en=t("div",{class:"small"},"SCORE",-1),an={class:"d-flex align-items-center justify-content-center",style:{"font-size":"4.5rem"}},sn={class:"col-md-6 my-2"},nn=t("h3",null,"Final Scores",-1),ln={class:"h1 m-0"},dn={class:"row"},on={class:"col-md-12 my-2"},cn=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Value")])],-1),rn=["innerHTML"],un=["innerHTML"],hn=V({__name:"SecurityComplianceView",props:{data:Object},setup(e){return(x,v)=>{var m,n;const u=st("apexchart");return a(),s(p,null,[(m=e.data)!=null&&m.securityAssessment?(a(),s("div",Ys,[Xs,t("div",Js,[t("div",Qs,[i(N,null,{default:T(()=>{var r,h,c,l;return[t("h3",null,b((h=(r=e.data)==null?void 0:r.securityAssessment)==null?void 0:h.report_name),1),t("div",null,b((l=(c=e.data)==null?void 0:c.securityAssessment)==null?void 0:l.report_summary),1)]}),_:1})]),t("div",Zs,[i(N,{class:"h-100"},{default:T(()=>{var r,h,c;return[t("div",tn,[en,t("div",an,b((c=(h=(r=e.data)==null?void 0:r.securityAssessment)==null?void 0:h.final_score)==null?void 0:c.toFixed("2")),1)])]}),_:1})]),t("div",sn,[i(N,{class:"h-100"},{default:T(()=>{var r,h,c,l;return[nn,i(u,{width:"640",type:"radar",options:{chart:{toolbar:{show:!1}},labels:Object.keys((h=(r=e.data)==null?void 0:r.securityAssessment)==null?void 0:h.final_score_by_category)},series:[{name:"Scores",data:Object.keys((l=(c=e.data)==null?void 0:c.securityAssessment)==null?void 0:l.final_score_by_category).map(g=>{var o,_;return(_=(o=e.data)==null?void 0:o.securityAssessment)==null?void 0:_.final_score_by_category[g]})}]},null,8,["options","series"])]}),_:1})])])])):y("",!0),(a(!0),s(p,null,A((n=e.data)==null?void 0:n.security_and_compliance,(r,h)=>(a(),s("div",{key:h,class:"mb-3"},[t("div",ln,b(r.title),1),t("div",dn,[t("div",on,[i(O,{class:"w-100 h-100"},{default:T(()=>[cn,t("tbody",null,[(a(!0),s(p,null,A(r.value,(c,l)=>(a(),s("tr",{key:l},[t("td",{innerHTML:f(M)(c.title),style:{width:"30%","min-width":"120px","max-width":"300px","vertical-align":"top"}},null,8,rn),t("td",{innerHTML:f(M)(c.value),style:{"vertical-align":"top"}},null,8,un)]))),128))])]),_:2},1024)])])]))),128))],64)}}}),mn={props:{title:{type:String,required:!0},labels:{type:Array,required:!0},data:{type:Array,required:!0},updateAt:{type:Date,default:null}},data(){return{chartOptions:{labels:this.labels,tooltip:{theme:"dark"},legend:{show:!1},responsive:[{breakpoint:480,options:{chart:{width:100,height:100}}}]},series:this.data}},methods:{formatDate:oe}},_n={class:"card overflow-hidden"},vn={class:"card-header"},yn={class:"card-title"},bn={key:0,class:"ms-auto text-secondary small"},fn=t("div",{class:"flex-grow-1"},[t("div",{class:"table-responsive"})],-1);function gn(e,x,v,u,m,n){const r=st("apexchart");return a(),s("div",_n,[t("div",vn,[t("div",yn,b(v.title),1),v.updateAt?(a(),s("div",bn," Last Update: "+b(n.formatDate(v.updateAt)),1)):y("",!0)]),fn,t("div",null,[i(r,{type:"pie","max-height":"300px",options:m.chartOptions,series:m.series},null,8,["options","series"])])])}const lt=_e(mn,[["render",gn]]),$n={class:"mb-3"},kn=t("div",{class:"h1 m-0"},"Transcations",-1),wn={class:"row"},xn={class:"col-md-6 my-2"},pn={class:"col-md-6 my-2"},Tn={class:"col-md-6 my-2"},Mn={class:"col-md-6 my-2"},Sn={class:"mb-3"},Ln=t("div",{class:"h1 m-0"},"Supply",-1),Hn={class:"row"},An={class:"col-md-12 my-2"},Vn={class:"col-md-6 my-2"},Nn={class:"col-md-6 my-2"},Cn={class:"col-md-6 my-2"},qn={class:"col-md-6 my-2"},zn={class:"col-md-6 my-2"},jn={class:"col-md-6 my-2"},Fn=V({__name:"StablecoinView",props:{data:Object},setup(e){return(x,v)=>{var u,m,n,r,h,c,l,g,o,_,$,k,w,C,R,L,H,S,z,D,P,U,E,K,W,G,Y,X,J,Q,Z,tt,et,I,ot,ct,rt,ut,ht,mt,_t,vt,yt,bt,ft,gt,$t,kt,wt,xt,pt,Tt,Mt,St,Lt,Ht,At,Vt,Nt,Ct,qt,zt,jt,Ft,It,Ot,Bt,Rt,Dt,Pt,Ut,Et,Kt,Wt,Gt,Yt,Xt,Jt,Qt,Zt,te,ee,ae,se,ne,le,ie,de;return a(),s(p,null,[t("div",$n,[kn,t("div",wn,[t("div",xn,[i(q,{type:"bar",title:"Daily Frequency",labels:(r=(n=(m=(u=e.data)==null?void 0:u.stablecoin)==null?void 0:m.transaction)==null?void 0:n.daily_frequency)==null?void 0:r.data.map(d=>`${d[0]}`),data:[{name:"Daily Frequency",data:(g=(l=(c=(h=e.data)==null?void 0:h.stablecoin)==null?void 0:c.transaction)==null?void 0:l.daily_frequency)==null?void 0:g.data.map(d=>Number(d[1]))}]},null,8,["labels","data"])]),t("div",pn,[i(q,{type:"bar",title:"Hourly Frequency",labels:($=(_=(o=e.data)==null?void 0:o.stablecoin)==null?void 0:_.transaction)==null?void 0:$.hourly_frequency.data.map(d=>`${d[0]}:00`),data:[{name:"Hourly Frequency",data:(C=(w=(k=e.data)==null?void 0:k.stablecoin)==null?void 0:w.transaction)==null?void 0:C.hourly_frequency.data.map(d=>Number(d[1]))}]},null,8,["labels","data"])]),t("div",Tn,[i(q,{title:"Daily Bought/Sold Volume",labels:(H=(L=(R=e.data)==null?void 0:R.stablecoin)==null?void 0:L.transaction)==null?void 0:H.daily_bought_vol.data.map(d=>`${d[0]}`),data:[{name:"Daily Bought Volume",data:(D=(z=(S=e.data)==null?void 0:S.stablecoin)==null?void 0:z.transaction)==null?void 0:D.daily_bought_vol.data.map(d=>Number(d[1]))},{name:"Daily Sold Volume",data:(E=(U=(P=e.data)==null?void 0:P.stablecoin)==null?void 0:U.transaction)==null?void 0:E.daily_sold_vol.data.map(d=>Number(d[1]))}]},null,8,["labels","data"])]),t("div",Mn,[i(q,{title:"Hourly Bought/Sold Volume",labels:(G=(W=(K=e.data)==null?void 0:K.stablecoin)==null?void 0:W.transaction)==null?void 0:G.hourly_bought_vol.data.map(d=>`${d[0]}:00`),data:[{name:"Hourly Bought Volume",data:(J=(X=(Y=e.data)==null?void 0:Y.stablecoin)==null?void 0:X.transaction)==null?void 0:J.hourly_bought_vol.data.map(d=>Number(d[1]))},{name:"Hourly Sold Volume",data:(tt=(Z=(Q=e.data)==null?void 0:Q.stablecoin)==null?void 0:Z.transaction)==null?void 0:tt.hourly_sold_vol.data.map(d=>Number(d[1]))}]},null,8,["labels","data"])])])]),t("div",Sn,[Ln,t("div",Hn,[t("div",An,[i(q,{title:"Token Supply Over Time",labels:(ot=(I=(et=e.data)==null?void 0:et.stablecoin)==null?void 0:I.supply)==null?void 0:ot.data.map(d=>String(d[0])),data:[{name:"Token Supply Over Time",data:(ut=(rt=(ct=e.data)==null?void 0:ct.stablecoin)==null?void 0:rt.supply)==null?void 0:ut.data.map(d=>Number(d[1]))}]},null,8,["labels","data"])]),t("div",Vn,[i(q,{title:"Token Price in USD over time",labels:(_t=(mt=(ht=e.data)==null?void 0:ht.stablecoin)==null?void 0:mt.price)==null?void 0:_t.data.map(d=>String(d[0])),data:[{name:"Token Price in USD over time",data:(bt=(yt=(vt=e.data)==null?void 0:vt.stablecoin)==null?void 0:yt.price)==null?void 0:bt.data.map(d=>Number(d[1]))}]},null,8,["labels","data"])]),t("div",Nn,[i(q,{title:"Token Price in ETH over time",labels:($t=(gt=(ft=e.data)==null?void 0:ft.stablecoin)==null?void 0:gt.price)==null?void 0:$t.data.map(d=>String(d[0])),data:[{name:"Token Price in ETH over time",data:(xt=(wt=(kt=e.data)==null?void 0:kt.stablecoin)==null?void 0:wt.price)==null?void 0:xt.data.map(d=>Number(d[3]))}]},null,8,["labels","data"])]),t("div",Cn,[i(lt,{title:"Top 10 holders",labels:(St=(Mt=(Tt=(pt=e.data)==null?void 0:pt.stablecoin)==null?void 0:Tt.topKHolder)==null?void 0:Mt.data)==null?void 0:St.map(d=>String(d[0]).substring(0,10)),data:(Vt=(At=(Ht=(Lt=e.data)==null?void 0:Lt.stablecoin)==null?void 0:Ht.topKHolder)==null?void 0:At.data)==null?void 0:Vt.map(d=>d[1])},null,8,["labels","data"])]),t("div",qn,[i(lt,{title:"Age Stats",labels:(jt=(zt=(qt=(Ct=(Nt=e.data)==null?void 0:Nt.stablecoin)==null?void 0:Ct.holderAgeFreqPortfolio)==null?void 0:qt.age)==null?void 0:zt.data)==null?void 0:jt.map(d=>String(d[1])),data:(Rt=(Bt=(Ot=(It=(Ft=e.data)==null?void 0:Ft.stablecoin)==null?void 0:It.holderAgeFreqPortfolio)==null?void 0:Ot.age)==null?void 0:Bt.data)==null?void 0:Rt.map(d=>Number(d[2]))},null,8,["labels","data"])]),t("div",zn,[i(lt,{title:"Freq Stats",labels:(Kt=(Et=(Ut=(Pt=(Dt=e.data)==null?void 0:Dt.stablecoin)==null?void 0:Pt.holderAgeFreqPortfolio)==null?void 0:Ut.freq)==null?void 0:Et.data)==null?void 0:Kt.map(d=>String(d[1])),data:(Jt=(Xt=(Yt=(Gt=(Wt=e.data)==null?void 0:Wt.stablecoin)==null?void 0:Gt.holderAgeFreqPortfolio)==null?void 0:Yt.freq)==null?void 0:Xt.data)==null?void 0:Jt.map(d=>Number(d[2]))},null,8,["labels","data"])]),t("div",jn,[i(lt,{title:"Portfolio Stats",labels:(ae=(ee=(te=(Zt=(Qt=e.data)==null?void 0:Qt.stablecoin)==null?void 0:Zt.holderAgeFreqPortfolio)==null?void 0:te.portfolio)==null?void 0:ee.data)==null?void 0:ae.map(d=>String(d[1])),data:(de=(ie=(le=(ne=(se=e.data)==null?void 0:se.stablecoin)==null?void 0:ne.holderAgeFreqPortfolio)==null?void 0:le.portfolio)==null?void 0:ie.data)==null?void 0:de.map(d=>Number(d[2]))},null,8,["labels","data"])])])])],64)}}}),In={class:"container py-2",style:{"margin-top":"112px"}},On={key:0},Bn={key:1,class:"p-3 mx-auto",style:{"max-width":"960px"}},Rn=t("div",{class:"loading mx-auto mt-5"},null,-1),Dn=[Rn],Un=V({__name:"ProjectView",setup(e){const x=nt(!0),v=be(),u=nt({}),m=nt([{name:"Overview",icon:"bi-house-door"},{name:"AML/KYT",icon:"bi-shield-check"},{name:"Team & Social Media",icon:"bi-people"},{name:"Smart Contract Validation",icon:"bi-check2-square"},{name:"Financial Analysis",icon:"bi-currency-dollar"},{name:"Security and Compliance",icon:"bi-lock"},{name:"Stablecoin",icon:"bi-coin"}]),n=nt(0);return ve(async()=>{const r=await ye.getProjectData(v.params.type,v.params.id);u.value=r,x.value=!1}),(r,h)=>(a(),s(p,null,[i(fe),i(Le,{views:m.value,"view-idx":n.value,onChangeView:h[0]||(h[0]=c=>n.value=c)},null,8,["views","view-idx"]),t("div",In,[x.value?y("",!0):(a(),s("div",On,[i(Xe,{data:u.value},null,8,["data"]),n.value==0?(a(),j(ia,{key:0,data:u.value},null,8,["data"])):y("",!0),n.value==1?(a(),j(wa,{key:1,data:u.value},null,8,["data"])):y("",!0),n.value==2?(a(),j(Qa,{key:2,data:u.value},null,8,["data"])):y("",!0),n.value==3?(a(),j(os,{key:3,data:u.value},null,8,["data"])):y("",!0),n.value==4?(a(),j(Gs,{key:4,data:u.value},null,8,["data"])):y("",!0),n.value==5?(a(),j(hn,{key:5,data:u.value},null,8,["data"])):y("",!0),n.value==6?(a(),j(Fn,{key:6,data:u.value},null,8,["data"])):y("",!0)])),x.value?(a(),s("div",Bn,Dn)):y("",!0)])],64))}});export{Un as default};