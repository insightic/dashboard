import{d as j,c as n,a as t,F as w,r as M,o as a,n as H,t as y,h as at,b as u,e as nt,f as o,w as f,u as d,g as it,i as h,_ as lt,j as st,k as O,l as ct,C as N,m as B,p as dt,q as ot,s as S,v as rt,x as ut}from"./index-Dglbi_mz.js";const ht={class:"fixed-top navbar navbar-expand",style:{"margin-top":"52px"}},_t={class:"container-xl"},vt={class:"navbar-nav flex-row subNav"},mt=["onClick"],yt={class:"nav-link"},ft=j({__name:"SubNavBar",props:{views:Array,viewIdx:Number},emits:["changeView"],setup(e,{emit:_}){const v=_;function l(i){v("changeView",i)}return(i,s)=>(a(),n("nav",ht,[t("div",_t,[t("ul",vt,[(a(!0),n(w,null,M(e.views,(c,r)=>(a(),n("li",{class:H(["nav-item",{active:r==e.viewIdx}]),key:r,onClick:m=>l(r),style:{cursor:"pointer"}},[t("a",yt,[t("span",{class:H(["nav-link-icon",{"text-primary":r==e.viewIdx}])},[t("i",{class:H(["bi",c.icon])},null,2)],2),t("span",{class:H(["nav-link-title d-lg-inline-block",{"text-primary":r==e.viewIdx,"d-none":r!=e.viewIdx}]),style:{"white-space":"nowrap"}},y(c.name),3)])],10,mt))),128))])])]))}});/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var wt={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,_,v,l)=>({size:i,color:s="currentColor",class:c,stroke:r,...m},{attrs:T,slots:x})=>at("svg",{...wt[e],width:i,height:i,...T,class:["tabler-icon",`tabler-icon-${_}`],...e==="filled"?{fill:s}:{"stroke-width":r,stroke:s},...m},[...l.map(p=>at(...p)),...x.default?[x.default()]:[]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var kt=C("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var gt=C("outline","brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $t=C("outline","brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var bt=C("outline","brand-reddit","IconBrandReddit",[["path",{d:"M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z",key:"svg-0"}],["path",{d:"M12 8l1 -5l6 1",key:"svg-1"}],["path",{d:"M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["circle",{cx:"9",cy:"13",r:".5",fill:"currentColor",key:"svg-3"}],["circle",{cx:"15",cy:"13",r:".5",fill:"currentColor",key:"svg-4"}],["path",{d:"M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5",key:"svg-5"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var xt=C("outline","brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mt=C("outline","brand-twitter","IconBrandTwitter",[["path",{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z",key:"svg-0"}]]);const Tt={class:"card"},pt={class:"card-body"},Lt={key:0,class:"subheader"},b={__name:"CardComponent",props:{subheader:{type:String,default:null},topline:{type:String,default:null}},setup(e){return(_,v)=>(a(),n("div",Tt,[e.topline?(a(),n("div",{key:0,class:H(["card-status-top",`bg-${e.topline}`])},null,2)):u("",!0),t("div",pt,[e.subheader?(a(),n("div",Lt,y(e.subheader),1)):u("",!0),nt(_.$slots,"default")])]))}},Ht={class:"mb-3"},Ct={class:"row"},It={class:"col-md-8 my-2"},Vt={class:"row"},At={class:"col-md-3 d-flex align-items-center justify-content-center"},St=["src"],jt={class:"col-md-9"},Bt={class:"h3"},zt={class:"mt-2 small"},Ot=["href"],Nt=["href"],Ft=["href"],Rt=["href"],qt=["href"],Dt=["href"],Et={class:"col-md-4 my-2"},Gt={class:"text-center h-100 d-flex flex-column align-items-center justify-content-center"},Pt=t("div",{class:"small"},"RATING",-1),Ut=j({__name:"HeaderView",props:{data:Object},setup(e){return(_,v)=>(a(),n("div",Ht,[t("div",Ct,[t("div",It,[o(b,{class:"h-100",style:{"min-height":"180px"}},{default:f(()=>{var l,i,s,c,r,m,T,x,p,I,V,A;return[t("div",Vt,[t("div",At,[t("img",{src:e.data.logoUrl,alt:"Logo",style:{"max-width":"128px"}},null,8,St)]),t("div",jt,[t("div",Bt,y(e.data.name),1),t("div",null,y(e.data.description),1),t("div",zt,[(i=(l=e.data)==null?void 0:l.links)!=null&&i.website?(a(),n("a",{key:0,class:"me-2",href:e.data.links.website,target:"_blank"},[o(d(kt),{"stroke-width":1,size:18})],8,Ot)):u("",!0),(c=(s=e.data)==null?void 0:s.links)!=null&&c.twitter?(a(),n("a",{key:1,class:"me-2",href:e.data.links.twitter,target:"_blank"},[o(d(Mt),{"stroke-width":1,size:18})],8,Nt)):u("",!0),(m=(r=e.data)==null?void 0:r.links)!=null&&m.linkedin?(a(),n("a",{key:2,class:"me-2",href:e.data.links.linkedin,target:"_blank"},[o(d($t),{"stroke-width":1,size:18})],8,Ft)):u("",!0),(x=(T=e.data)==null?void 0:T.links)!=null&&x.reddit?(a(),n("a",{key:3,class:"me-2",href:e.data.links.reddit,target:"_blank"},[o(d(bt),{"stroke-width":1,size:18})],8,Rt)):u("",!0),(I=(p=e.data)==null?void 0:p.links)!=null&&I.github?(a(),n("a",{key:4,class:"me-2",href:e.data.links.github,target:"_blank"},[o(d(gt),{"stroke-width":1,size:18})],8,qt)):u("",!0),(A=(V=e.data)==null?void 0:V.links)!=null&&A.telegram?(a(),n("a",{key:5,class:"me-2",href:e.data.links.telegram,target:"_blank"},[o(d(xt),{"stroke-width":1,size:18})],8,Dt)):u("",!0)])])])]}),_:1})]),t("div",Et,[o(b,{class:"h-100"},{default:f(()=>{var l,i,s;return[t("div",Gt,[Pt,(l=e.data)!=null&&l.rating?(a(),n("div",{key:0,class:H(["d-flex align-items-center justify-content-center",d(it)((i=e.data)==null?void 0:i.rating)]),style:{"font-size":"4.5rem"}},y((s=e.data)==null?void 0:s.rating),3)):u("",!0)])]}),_:1})])])]))}}),Wt={class:"mb-3"},Jt=t("div",{class:"h1 m-0"},"Overview",-1),Kt={class:"row"},Qt={class:"col-md-12 my-2"},Xt=["innerHTML"],Yt={class:"h1 m-0"},Zt={class:"row"},te={class:"col-md-12 my-2"},ee=["innerHTML"],ae=j({__name:"OverviewView",props:{data:Object},setup(e){return(_,v)=>{var l;return a(),n(w,null,[t("div",Wt,[Jt,t("div",Kt,[t("div",Qt,[o(b,{class:"h-100"},{default:f(()=>{var i;return[t("div",{innerHTML:d(h)((i=e.data)==null?void 0:i.overview)},null,8,Xt)]}),_:1})])])]),(a(!0),n(w,null,M((l=e.data)==null?void 0:l.details,(i,s)=>(a(),n("div",{key:s,class:"mb-3"},[t("div",Yt,y(i.title),1),t("div",Zt,[t("div",te,[o(b,{class:"h-100"},{default:f(()=>[t("div",{innerHTML:d(h)(i.value)},null,8,ee)]),_:2},1024)])])]))),128))],64)}}}),se={};function ne(e,_){return"Team Social Media"}const ie=lt(se,[["render",ne]]),le={key:0,class:"mb-3"},ce=t("div",{class:"h1 m-0"},"Smart Contract Validation",-1),de={class:"row"},oe={class:"h3 mb-0"},re=["innerHTML"],ue=t("div",{style:{"text-decoration":"underline"}},"whitepaper",-1),he=["innerHTML"],_e=t("div",{style:{"text-decoration":"underline"}},"code",-1),ve=["innerHTML"],me=j({__name:"SmartContractValidationView",props:{data:Object},setup(e){function _(v){return v=v.toLowerCase(),v==="yes"?"success":v==="no"?"danger":"warning"}return(v,l)=>{var i;return e.data?(a(),n("div",le,[ce,t("div",de,[(a(!0),n(w,null,M((i=e.data)==null?void 0:i.scv,(s,c)=>(a(),n("div",{class:"col-md-4 my-2",key:c},[o(b,{class:"h-100",topline:_(s.pass)},{default:f(()=>[t("div",oe,"#"+y(s.id)+" - "+y(s.title),1),t("div",{class:"fix-line mb-2",innerHTML:d(h)(s.description)},null,8,re),ue,t("div",{class:"fix-line",innerHTML:d(h)(s.whitepaper)},null,8,he),_e,t("div",{class:"fix-line",innerHTML:d(h)(s.code)},null,8,ve)]),_:2},1032,["topline"])]))),128))])])):u("",!0)}}}),ye={class:"mb-3"},fe=t("div",{class:"h1 m-0"},"Financial Audit",-1),we={class:"row"},ke={class:"col-md-12 my-2"},ge={class:"d-flex"},$e=["innerHTML"],be={class:"d-flex"},xe=["innerHTML"],Me={class:"d-flex"},Te=["innerHTML"],pe={key:0,class:"mx-auto",style:{width:"540px"}},Le={class:"mb-3"},He=t("div",{class:"h1 m-0"},"Market Capitalization and Liquidity",-1),Ce={class:"row"},Ie={class:"col-md-12 my-2"},Ve=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Value")])],-1),Ae=["innerHTML"],Se=["innerHTML"],je={class:"mb-3"},Be={key:0,class:"h1 m-0"},ze={key:1,class:"row"},Oe={class:"col-md-12 my-2"},Ne=t("thead",null,[t("tr",null,[t("th",null,"Round"),t("th",null,"Amount"),t("th",null,"Valuation"),t("th",null,"Date"),t("th",null,"Investors")])],-1),Fe=["innerHTML"],Re=["innerHTML"],qe=["innerHTML"],De=["innerHTML"],Ee=["innerHTML"],Ge={key:0,class:"mb-3"},Pe=t("div",{class:"h1 m-0"},"List of Investors",-1),Ue={class:"row"},We={class:"row align-items-center"},Je={class:"col-auto"},Ke={class:"text-white avatar bg-white",style:{"box-shadow":"none !important"}},Qe=["src"],Xe={class:"col"},Ye={class:"font-weight-medium"},Ze={__name:"FinancialAnalysisView",props:{data:Object},setup(e){return(_,v)=>{var i,s,c,r,m,T,x,p,I,V,A,F,R,q;const l=st("apexchart");return a(),n(w,null,[t("div",ye,[fe,t("div",we,[t("div",ke,[o(b,{class:"w-100"},{default:f(()=>{var k,$,g,L,D,E,G,P,U,W,J,K,Q,X,Y,Z,tt,et;return[t("div",ge,[O(" Auditors:    "),t("div",{innerHTML:d(h)((g=($=(k=e.data)==null?void 0:k.financial_analysis)==null?void 0:$.financial_audit)==null?void 0:g.auditors)},null,8,$e)]),t("div",be,[O(" Score:    "),t("div",{innerHTML:d(h)((E=(D=(L=e.data)==null?void 0:L.financial_analysis)==null?void 0:D.financial_audit)==null?void 0:E.score)},null,8,xe)]),t("div",Me,[O(" Analysis:    "),t("div",{innerHTML:d(h)((U=(P=(G=e.data)==null?void 0:G.financial_analysis)==null?void 0:P.financial_audit)==null?void 0:U.analysis)},null,8,Te),d(ct)((K=(J=(W=e.data)==null?void 0:W.financial_analysis)==null?void 0:J.financial_audit)==null?void 0:K.reserve_holdings_percentage)?(a(),n("div",pe,[o(l,{width:"540",type:"pie",options:{labels:(Y=(X=(Q=e.data)==null?void 0:Q.financial_analysis)==null?void 0:X.financial_audit)==null?void 0:Y.reserve_holdings_percentage.map(z=>z.title)},series:(et=(tt=(Z=e.data)==null?void 0:Z.financial_analysis)==null?void 0:tt.financial_audit)==null?void 0:et.reserve_holdings_percentage.map(z=>z.value)},null,8,["options","series"])])):u("",!0)])]}),_:1})])])]),t("div",Le,[He,t("div",Ce,[t("div",Ie,[o(N,{class:"w-100 h-100"},{default:f(()=>{var k,$;return[Ve,t("tbody",null,[(a(!0),n(w,null,M(($=(k=e.data)==null?void 0:k.financial_analysis)==null?void 0:$.market_capitalization_and_liquidity,(g,L)=>(a(),n("tr",{key:L},[t("td",{innerHTML:d(h)(g.title),style:{width:"30%","min-width":"120px","max-width":"300px","vertical-align":"top"}},null,8,Ae),t("td",{innerHTML:d(h)(g.value),style:{"vertical-align":"top"}},null,8,Se)]))),128))])]}),_:1})])])]),t("div",je,[(s=(i=e.data)==null?void 0:i.financial_analysis)!=null&&s.investments&&((r=(c=e.data)==null?void 0:c.financial_analysis)==null?void 0:r.investments.length)>0?(a(),n("div",Be," Investments ")):u("",!0),(T=(m=e.data)==null?void 0:m.financial_analysis)!=null&&T.investments&&((p=(x=e.data)==null?void 0:x.financial_analysis)==null?void 0:p.investments.length)>0?(a(),n("div",ze,[t("div",Oe,[o(N,{class:"w-100 h-100"},{default:f(()=>{var k,$;return[Ne,t("tbody",null,[(a(!0),n(w,null,M(($=(k=e.data)==null?void 0:k.financial_analysis)==null?void 0:$.investments,(g,L)=>(a(),n("tr",{key:L},[t("td",{innerHTML:d(h)(g.round),style:{"vertical-align":"top"}},null,8,Fe),t("td",{innerHTML:d(h)(g.amount),style:{"vertical-align":"top"}},null,8,Re),t("td",{innerHTML:d(h)(g.valuation),style:{"vertical-align":"top"}},null,8,qe),t("td",{innerHTML:d(h)(g.date),style:{"vertical-align":"top"}},null,8,De),t("td",{innerHTML:d(h)(g.investors),style:{"vertical-align":"top"}},null,8,Ee)]))),128))])]}),_:1})])])):u("",!0)]),(V=(I=e.data)==null?void 0:I.financial_analysis)!=null&&V.list_of_investors&&((F=(A=e.data)==null?void 0:A.financial_analysis)==null?void 0:F.list_of_investors.length)>0?(a(),n("div",Ge,[Pe,t("div",Ue,[(a(!0),n(w,null,M((q=(R=e.data)==null?void 0:R.financial_analysis)==null?void 0:q.list_of_investors,(k,$)=>(a(),n("div",{key:$,class:"col-md-3 my-2"},[o(b,{class:"h-100"},{default:f(()=>[t("div",We,[t("div",Je,[t("span",Ke,[t("img",{src:e.data.baseUrl+"/"+k.logo,class:"w-100 h-100"},null,8,Qe)])]),t("div",Xe,[t("div",Ye,y(k.name),1)])])]),_:2},1024)]))),128))])])):u("",!0)],64)}}},ta={key:0,class:"mb-3"},ea=t("div",{class:"h1 m-0"},"Security Assessment",-1),aa={class:"row"},sa={class:"col-md-12 my-2"},na={class:"col-md-6 my-2"},ia={class:"text-center h-100 d-flex flex-column align-items-center justify-content-center"},la=t("div",{class:"small"},"SCORE",-1),ca={class:"d-flex align-items-center justify-content-center",style:{"font-size":"4.5rem"}},da={class:"col-md-6 my-2"},oa=t("h3",null,"Final Scores",-1),ra={class:"h1 m-0"},ua={class:"row"},ha={class:"col-md-12 my-2"},_a=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Value")])],-1),va=["innerHTML"],ma=["innerHTML"],ya={__name:"SecurityComplianceView",props:{data:Object},setup(e){return(_,v)=>{var i;const l=st("apexchart");return a(),n(w,null,[e.data.securityAssessment?(a(),n("div",ta,[ea,t("div",aa,[t("div",sa,[o(b,null,{default:f(()=>{var s,c;return[t("h3",null,y((s=e.data.securityAssessment)==null?void 0:s.report_name),1),t("div",null,y((c=e.data.securityAssessment)==null?void 0:c.report_summary),1)]}),_:1})]),t("div",na,[o(b,{class:"h-100"},{default:f(()=>{var s,c;return[t("div",ia,[la,t("div",ca,y((c=(s=e.data.securityAssessment)==null?void 0:s.final_score)==null?void 0:c.toFixed("2")),1)])]}),_:1})]),t("div",da,[o(b,{class:"h-100"},{default:f(()=>{var s,c;return[oa,o(l,{width:"640",type:"radar",options:{chart:{toolbar:{show:!1}},labels:Object.keys((s=e.data.securityAssessment)==null?void 0:s.final_score_by_category)},series:[{name:"Scores",data:Object.keys((c=e.data.securityAssessment)==null?void 0:c.final_score_by_category).map(r=>{var m;return(m=e.data.securityAssessment)==null?void 0:m.final_score_by_category[r]})}]},null,8,["options","series"])]}),_:1})])])])):u("",!0),(a(!0),n(w,null,M((i=e.data)==null?void 0:i.security_and_compliance,(s,c)=>(a(),n("div",{key:c,class:"mb-3"},[t("div",ra,y(s.title),1),t("div",ua,[t("div",ha,[o(N,{class:"w-100 h-100"},{default:f(()=>[_a,t("tbody",null,[(a(!0),n(w,null,M(s.value,(r,m)=>(a(),n("tr",{key:m},[t("td",{innerHTML:d(h)(r.title),style:{width:"30%","min-width":"120px","max-width":"300px","vertical-align":"top"}},null,8,va),t("td",{innerHTML:d(h)(r.value),style:{"vertical-align":"top"}},null,8,ma)]))),128))])]),_:2},1024)])])]))),128))],64)}}},fa={class:"container py-2",style:{"margin-top":"112px"}},wa={key:0},ka={key:1,class:"p-3 mx-auto",style:{"max-width":"960px"}},ga=t("div",{class:"loading mx-auto mt-5"},null,-1),$a=[ga],xa=j({__name:"ProjectView",setup(e){const _=B(!0),v=rt(),l=B({}),i=B([{name:"Overview",icon:"bi-house-door"},{name:"Team & Social Media",icon:"bi-people"},{name:"Smart Contract Validation",icon:"bi-check2-square"},{name:"Financial Analysis",icon:"bi-currency-dollar"},{name:"Security and Compliance",icon:"bi-lock"}]),s=B(0);return dt(async()=>{const c=await ot.getProjectData(v.params.type,v.params.id);l.value=c,_.value=!1}),(c,r)=>(a(),n(w,null,[o(ut),o(ft,{views:i.value,"view-idx":s.value,onChangeView:r[0]||(r[0]=m=>s.value=m)},null,8,["views","view-idx"]),t("div",fa,[_.value?u("",!0):(a(),n("div",wa,[o(Ut,{data:l.value},null,8,["data"]),s.value==0?(a(),S(ae,{key:0,data:l.value},null,8,["data"])):u("",!0),s.value==1?(a(),S(ie,{key:1,data:l.value},null,8,["data"])):u("",!0),s.value==2?(a(),S(me,{key:2,data:l.value},null,8,["data"])):u("",!0),s.value==3?(a(),S(Ze,{key:3,data:l.value},null,8,["data"])):u("",!0),s.value==4?(a(),S(ya,{key:4,data:l.value},null,8,["data"])):u("",!0)])),_.value?(a(),n("div",ka,$a)):u("",!0)])],64))}});export{xa as default};
