import{c as O,d as V,a as s,b as t,F as $,r as T,o as a,n as F,t as m,e as h,f as Te,g as i,w,u as y,h as Se,i as p,_ as ot,j as Le,k as it,C as z,l as at,m as dt,p as we,q as j,s as st,v as He,x as Ae,y as Ve,z as Ce}from"./index-BQ6ZqQdq.js";/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var qe=O("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ne=O("outline","brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var xe=O("outline","brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var je=O("outline","brand-reddit","IconBrandReddit",[["path",{d:"M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z",key:"svg-0"}],["path",{d:"M12 8l1 -5l6 1",key:"svg-1"}],["path",{d:"M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["circle",{cx:"9",cy:"13",r:".5",fill:"currentColor",key:"svg-3"}],["circle",{cx:"15",cy:"13",r:".5",fill:"currentColor",key:"svg-4"}],["path",{d:"M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5",key:"svg-5"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ie=O("outline","brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]);/**
 * @license @tabler/icons-vue v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var pe=O("outline","brand-x","IconBrandX",[["path",{d:"M4 4l11.733 16h4.267l-11.733 -16z",key:"svg-0"}],["path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772",key:"svg-1"}]]);const Fe={class:"fixed-top navbar navbar-expand",style:{"margin-top":"52px"}},ze={class:"container-xl"},Be={class:"navbar-nav flex-row subNav"},Oe=["onClick"],De={class:"nav-link"},Pe=V({__name:"SubNavBar",props:{views:Array,viewIdx:Number},emits:["changeView"],setup(e,{emit:o}){const d=o;function r(u){d("changeView",u)}return(u,l)=>(a(),s("nav",Fe,[t("div",ze,[t("ul",Be,[(a(!0),s($,null,T(e.views,(c,_)=>(a(),s("li",{class:F(["nav-item",{active:_==e.viewIdx}]),key:_,onClick:f=>r(_),style:{cursor:"pointer"}},[t("a",De,[t("span",{class:F(["nav-link-icon",{"text-primary":_==e.viewIdx}])},[t("i",{class:F(["bi",c.icon])},null,2)],2),t("span",{class:F(["nav-link-title d-lg-inline-block",{"text-primary":_==e.viewIdx,"d-none":_!=e.viewIdx}]),style:{"white-space":"nowrap"}},m(c.name),3)])],10,Oe))),128))])])]))}}),Re={class:"card"},Ue={class:"card-body"},Ee={key:0,class:"subheader"},A=V({__name:"CardComponent",props:{subheader:{type:String,default:null},topline:{type:String,default:null}},setup(e){return(o,d)=>(a(),s("div",Re,[e.topline?(a(),s("div",{key:0,class:F(["card-status-top",`bg-${e.topline}`])},null,2)):h("",!0),t("div",Ue,[e.subheader?(a(),s("div",Ee,m(e.subheader),1)):h("",!0),Te(o.$slots,"default")])]))}}),Ke={class:"mb-3"},We={class:"row"},Ge={class:"col-md-8 my-2"},Ye={class:"row"},Xe={class:"col-md-3 d-flex align-items-center justify-content-center"},Je=["src"],Qe={class:"col-md-9"},Ze={class:"h3"},ta={class:"mt-2 small"},ea=["href"],aa=["href"],sa=["href"],na=["href"],la=["href"],ia=["href"],da={class:"col-md-4 my-2"},oa={class:"text-center h-100 d-flex flex-column align-items-center justify-content-center"},ca=t("div",{class:"small"},"RATING",-1),ra=V({__name:"HeaderView",props:{data:Object},setup(e){return(o,d)=>(a(),s("div",Ke,[t("div",We,[t("div",Ge,[i(A,{class:"h-100",style:{"min-height":"180px"}},{default:w(()=>{var r,u,l,c,_,f,k,L,v,b,g,x;return[t("div",Ye,[t("div",Xe,[t("img",{src:e.data.logoUrl,alt:"Logo",style:{"max-width":"128px"}},null,8,Je)]),t("div",Qe,[t("div",Ze,m(e.data.name),1),t("div",null,m(e.data.description),1),t("div",ta,[(u=(r=e.data)==null?void 0:r.links)!=null&&u.website?(a(),s("a",{key:0,class:"me-2",href:e.data.links.website,target:"_blank"},[i(y(qe),{"stroke-width":1,size:18})],8,ea)):h("",!0),(c=(l=e.data)==null?void 0:l.links)!=null&&c.twitter?(a(),s("a",{key:1,class:"me-2",href:e.data.links.twitter,target:"_blank"},[i(y(pe),{"stroke-width":1,size:18})],8,aa)):h("",!0),(f=(_=e.data)==null?void 0:_.links)!=null&&f.linkedin?(a(),s("a",{key:2,class:"me-2",href:e.data.links.linkedin,target:"_blank"},[i(y(xe),{"stroke-width":1,size:18})],8,sa)):h("",!0),(L=(k=e.data)==null?void 0:k.links)!=null&&L.reddit?(a(),s("a",{key:3,class:"me-2",href:e.data.links.reddit,target:"_blank"},[i(y(je),{"stroke-width":1,size:18})],8,na)):h("",!0),(b=(v=e.data)==null?void 0:v.links)!=null&&b.github?(a(),s("a",{key:4,class:"me-2",href:e.data.links.github,target:"_blank"},[i(y(Ne),{"stroke-width":1,size:18})],8,la)):h("",!0),(x=(g=e.data)==null?void 0:g.links)!=null&&x.telegram?(a(),s("a",{key:5,class:"me-2",href:e.data.links.telegram,target:"_blank"},[i(y(Ie),{"stroke-width":1,size:18})],8,ia)):h("",!0)])])])]}),_:1})]),t("div",da,[i(A,{class:"h-100"},{default:w(()=>{var r,u,l;return[t("div",oa,[ca,(r=e.data)!=null&&r.rating?(a(),s("div",{key:0,class:F(["d-flex align-items-center justify-content-center",y(Se)((u=e.data)==null?void 0:u.rating)]),style:{"font-size":"4.5rem"}},m((l=e.data)==null?void 0:l.rating),3)):h("",!0)])]}),_:1})])])]))}}),ua={class:"mb-3"},ha=t("div",{class:"h1 m-0"},"Overview",-1),ma={class:"row"},_a={class:"col-md-12 my-2"},va=["innerHTML"],ya={class:"h1 m-0"},ba={class:"row"},fa={class:"col-md-12 my-2"},ga=["innerHTML"],$a=V({__name:"OverviewView",props:{data:Object},setup(e){return console.log(e),(d,r)=>{var u;return a(),s($,null,[t("div",ua,[ha,t("div",ma,[t("div",_a,[i(A,{class:"h-100"},{default:w(()=>{var l;return[t("div",{innerHTML:y(p)((l=e.data)==null?void 0:l.overview)},null,8,va)]}),_:1})])])]),(a(!0),s($,null,T((u=e.data)==null?void 0:u.details,(l,c)=>(a(),s("div",{key:c,class:"mb-3"},[t("div",ya,m(l.title),1),t("div",ba,[t("div",fa,[i(A,{class:"h-100"},{default:w(()=>[t("div",{innerHTML:y(p)(l.value)},null,8,ga)]),_:2},1024)])])]))),128))],64)}}}),ka={};function wa(e,o){return a(),s("div",null,"AML KYT View")}const xa=ot(ka,[["render",wa]]),pa={class:"card"},Ma={class:"card-body p-4 text-center"},Ta={class:"m-0 mb-1"},Sa={class:"text-secondary"},La={class:"d-flex"},Ha=["href"],Aa=["href"],Va=V({__name:"PeopleComponent",props:{avatar:{type:String,default:null},name:{type:String,default:null},title:{type:String,default:null},twitter:{type:String,default:null},linkedin:{type:String,default:null}},setup(e){return(o,d)=>(a(),s("div",pa,[t("div",Ma,[t("span",{class:"avatar avatar-xl mb-3 rounded",style:Le(`background-image: url(${e.avatar})`)},null,4),t("h3",Ta,m(e.name),1),t("div",Sa,m(e.title),1)]),t("div",La,[e.twitter?(a(),s("a",{key:0,href:e.twitter,class:"card-btn",target:"_blank"},[i(y(pe),{class:"text-secondary me-2","stroke-width":1,size:18}),it(" Twitter ")],8,Ha)):h("",!0),e.linkedin?(a(),s("a",{key:1,href:e.linkedin,class:"card-btn",target:"_blank"},[i(y(xe),{class:"text-secondary me-2","stroke-width":1,size:18}),it(" LinkedIn ")],8,Aa)):h("",!0)])]))}}),Ca={key:0,class:"mb-3"},qa=t("div",{class:"h1 m-0"},"Team",-1),Na={class:"row"},ja={key:1,class:"mb-3"},Ia=t("div",{class:"h1 m-0"},"Social Media",-1),Fa={class:"row"},za={class:"col-md-12 my-2"},Ba=t("thead",null,[t("tr",null,[t("th",null,"Total/Average"),t("th",null,"Last Week"),t("th",null,"2 Weeks Ago"),t("th",null,"3 Weeks Ago")])],-1),Oa={key:2,class:"mb-3"},Da=t("div",{class:"h1 m-0"},"Twitter",-1),Pa={class:"row"},Ra={class:"col-md-12 my-2"},Ua=t("thead",null,[t("tr",null,[t("th",null,"Post Content"),t("th",{style:{"min-width":"200px"}},"Sentiment Analysis")])],-1),Ea={style:{"text-transform":"capitalize"}},Ka={key:3,class:"mb-3"},Wa=t("div",{class:"h1 m-0"},"Soso Value News",-1),Ga={class:"row"},Ya={class:"col-md-12 my-2"},Xa={class:"col-md-12 my-2"},Ja={class:"col-md-12 my-2"},Qa=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Content"),t("th",null,"Date")])],-1),Za=V({__name:"TeamSocialMediaView",props:{data:Object},setup(e){function o(d){return d==="positive"?"bg-success":d==="negative"?"bg-danger":"bg-secondary"}return(d,r)=>{var l,c,_,f,k,L;const u=at("apexchart");return a(),s($,null,[y(dt)((l=e.data)==null?void 0:l.team)?(a(),s("div",Ca,[qa,t("div",Na,[(a(!0),s($,null,T((c=e.data)==null?void 0:c.team,(v,b)=>(a(),s("div",{class:"col-sm-6 col-md-4 my-2",key:b},[i(Va,{class:"h-100",avatar:v.avatar,name:v.name,title:v.title,twitter:v.twitter,linkedin:v.linkedin},null,8,["avatar","name","title","twitter","linkedin"])]))),128))])])):h("",!0),y(dt)((f=(_=e.data)==null?void 0:_.social_media)==null?void 0:f.twitter)?(a(),s("div",ja,[Ia,t("div",Fa,[t("div",za,[i(z,null,{default:w(()=>{var v,b;return[Ba,t("tbody",null,[(a(!0),s($,null,T((b=(v=e.data)==null?void 0:v.social_media)==null?void 0:b.twitter,(g,x)=>(a(),s("tr",{key:x},[t("td",null,m(g.title),1),(a(!0),s($,null,T(g.value,(C,q)=>(a(),s("td",{key:q},m(C),1))),128))]))),128))])]}),_:1})])])])):h("",!0),(k=e.data)!=null&&k.twitter?(a(),s("div",Oa,[Da,t("div",Pa,[t("div",Ra,[i(z,null,{default:w(()=>{var v,b;return[Ua,t("tbody",null,[(a(!0),s($,null,T((b=(v=e.data)==null?void 0:v.twitter)==null?void 0:b.extracted_posts,(g,x)=>(a(),s("tr",{key:x},[t("td",null,m(g.post_content),1),t("td",null,[t("span",{class:F(["badge me-1",o(g.sentiment_analysis)])},null,2),t("span",Ea,m(g.sentiment_analysis),1)])]))),128))])]}),_:1})])])])):h("",!0),(L=e.data)!=null&&L.sosoValueNews?(a(),s("div",Ka,[Wa,t("div",Ga,[t("div",Ya,[i(A,null,{default:w(()=>{var v,b;return[it(m((b=(v=e.data)==null?void 0:v.sosoValueNews)==null?void 0:b.overall_prompt_summary),1)]}),_:1})]),t("div",Xa,[i(A,null,{default:w(()=>{var v,b,g,x,C,q;return[i(u,{width:"540",type:"pie",options:{labels:Object.keys((g=(b=(v=e.data)==null?void 0:v.sosoValueNews)==null?void 0:b.overall_sentiment_analysis)==null?void 0:g.distribution)},series:Object.values((q=(C=(x=e.data)==null?void 0:x.sosoValueNews)==null?void 0:C.overall_sentiment_analysis)==null?void 0:q.distribution)},null,8,["options","series"])]}),_:1})]),t("div",Ja,[i(z,null,{default:w(()=>{var v,b;return[Qa,t("tbody",null,[(a(!0),s($,null,T((b=(v=e.data)==null?void 0:v.sosoValueNews)==null?void 0:b.extracted_news,(g,x)=>(a(),s("tr",{key:x},[t("td",null,m(g.title),1),t("td",null,m(g.body),1),t("td",null,m(g.created_time),1)]))),128))])]}),_:1})])])])):h("",!0)],64)}}}),ts={key:0,class:"mb-3"},es=t("div",{class:"h1 m-0"},"Smart Contract Validation",-1),as={class:"row"},ss={class:"h3 mb-0"},ns=["innerHTML"],ls=t("div",{style:{"text-decoration":"underline"}},"whitepaper",-1),is=["innerHTML"],ds=t("div",{style:{"text-decoration":"underline"}},"code",-1),os=["innerHTML"],cs=V({__name:"SmartContractValidationView",props:{data:Object},setup(e){function o(d){return d=d.toLowerCase(),d==="yes"?"success":d==="no"?"danger":"warning"}return(d,r)=>{var u;return e.data?(a(),s("div",ts,[es,t("div",as,[(a(!0),s($,null,T((u=e.data)==null?void 0:u.scv,(l,c)=>(a(),s("div",{class:"col-md-4 my-2",key:c},[i(A,{class:"h-100",topline:o(l.pass)},{default:w(()=>[t("div",ss,"#"+m(l.id)+" - "+m(l.title),1),t("div",{class:"fix-line mb-2",innerHTML:y(p)(l.description)},null,8,ns),ls,t("div",{class:"fix-line",innerHTML:y(p)(l.whitepaper)},null,8,is),ds,t("div",{class:"fix-line",innerHTML:y(p)(l.code)},null,8,os)]),_:2},1032,["topline"])]))),128))])])):h("",!0)}}}),rs={class:"mb-3"},us=t("div",{class:"h1 m-0"},"Financial Audit",-1),hs={class:"row"},ms={class:"col-md-12 my-2"},_s={class:"mb-3"},vs=t("td",{style:{"min-width":"80px"}},"Auditors:",-1),ys=["innerHTML"],bs=t("td",null,"Score:",-1),fs=["innerHTML"],gs=t("td",null,"Analysis:",-1),$s=["innerHTML"],ks={class:"d-flex"},ws={key:0,class:"mx-auto",style:{width:"540px"}},xs={class:"mb-3"},ps=t("div",{class:"h1 m-0"},"Market Capitalization and Liquidity",-1),Ms={class:"row"},Ts={class:"col-md-12 my-2"},Ss=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Value")])],-1),Ls=["innerHTML"],Hs=["innerHTML"],As={class:"mb-3"},Vs={key:0,class:"h1 m-0"},Cs={key:1,class:"row"},qs={class:"col-md-12 my-2"},Ns=t("thead",null,[t("tr",null,[t("th",null,"Round"),t("th",null,"Amount"),t("th",null,"Valuation"),t("th",null,"Date"),t("th",null,"Investors")])],-1),js=["innerHTML"],Is=["innerHTML"],Fs=["innerHTML"],zs=["innerHTML"],Bs=["innerHTML"],Os={key:0,class:"mb-3"},Ds=t("div",{class:"h1 m-0"},"List of Investors",-1),Ps={class:"row"},Rs={class:"row align-items-center"},Us={class:"col-auto"},Es={class:"text-white avatar bg-white",style:{"box-shadow":"none !important"}},Ks=["src"],Ws={class:"col"},Gs={class:"font-weight-medium"},Ys=V({__name:"FinancialAnalysisView",props:{data:Object},setup(e){return(o,d)=>{var u,l,c,_,f,k,L,v,b,g,x,C,q,D;const r=at("apexchart");return a(),s($,null,[t("div",rs,[us,t("div",hs,[t("div",ms,[i(A,{class:"w-100"},{default:w(()=>{var S,H,M,N,P,R,U,E,K,W,G,Y,X,J,Q,Z,tt,et;return[t("table",_s,[t("tr",null,[vs,t("td",{innerHTML:y(p)((M=(H=(S=e.data)==null?void 0:S.financial_analysis)==null?void 0:H.financial_audit)==null?void 0:M.auditors)},null,8,ys)]),t("tr",null,[bs,t("td",{innerHTML:y(p)((R=(P=(N=e.data)==null?void 0:N.financial_analysis)==null?void 0:P.financial_audit)==null?void 0:R.score)},null,8,fs)]),t("tr",null,[gs,t("td",{innerHTML:y(p)((K=(E=(U=e.data)==null?void 0:U.financial_analysis)==null?void 0:E.financial_audit)==null?void 0:K.analysis)},null,8,$s)])]),t("div",ks,[y(dt)((Y=(G=(W=e.data)==null?void 0:W.financial_analysis)==null?void 0:G.financial_audit)==null?void 0:Y.reserve_holdings_percentage)?(a(),s("div",ws,[i(r,{width:"540",type:"pie",options:{labels:(Q=(J=(X=e.data)==null?void 0:X.financial_analysis)==null?void 0:J.financial_audit)==null?void 0:Q.reserve_holdings_percentage.map(B=>B.title)},series:(et=(tt=(Z=e.data)==null?void 0:Z.financial_analysis)==null?void 0:tt.financial_audit)==null?void 0:et.reserve_holdings_percentage.map(B=>B.value)},null,8,["options","series"])])):h("",!0)])]}),_:1})])])]),t("div",xs,[ps,t("div",Ms,[t("div",Ts,[i(z,{class:"w-100 h-100"},{default:w(()=>{var S,H;return[Ss,t("tbody",null,[(a(!0),s($,null,T((H=(S=e.data)==null?void 0:S.financial_analysis)==null?void 0:H.market_capitalization_and_liquidity.filter(M=>M.value),(M,N)=>(a(),s("tr",{key:N},[t("td",{innerHTML:y(p)(M.title),style:{width:"30%","min-width":"120px","max-width":"300px","vertical-align":"top"}},null,8,Ls),t("td",{innerHTML:y(p)(M.value),style:{"vertical-align":"top"}},null,8,Hs)]))),128))])]}),_:1})])])]),t("div",As,[(l=(u=e.data)==null?void 0:u.financial_analysis)!=null&&l.investments&&((_=(c=e.data)==null?void 0:c.financial_analysis)==null?void 0:_.investments.length)>0?(a(),s("div",Vs," Investments ")):h("",!0),(k=(f=e.data)==null?void 0:f.financial_analysis)!=null&&k.investments&&((v=(L=e.data)==null?void 0:L.financial_analysis)==null?void 0:v.investments.length)>0?(a(),s("div",Cs,[t("div",qs,[i(z,{class:"w-100 h-100"},{default:w(()=>{var S,H;return[Ns,t("tbody",null,[(a(!0),s($,null,T((H=(S=e.data)==null?void 0:S.financial_analysis)==null?void 0:H.investments,(M,N)=>(a(),s("tr",{key:N},[t("td",{innerHTML:y(p)(M.round),style:{"vertical-align":"top"}},null,8,js),t("td",{innerHTML:y(p)(M.amount),style:{"vertical-align":"top"}},null,8,Is),t("td",{innerHTML:y(p)(M.valuation),style:{"vertical-align":"top"}},null,8,Fs),t("td",{innerHTML:y(p)(M.date),style:{"vertical-align":"top"}},null,8,zs),t("td",{innerHTML:y(p)(M.investors),style:{"vertical-align":"top"}},null,8,Bs)]))),128))])]}),_:1})])])):h("",!0)]),(g=(b=e.data)==null?void 0:b.financial_analysis)!=null&&g.list_of_investors&&((C=(x=e.data)==null?void 0:x.financial_analysis)==null?void 0:C.list_of_investors.length)>0?(a(),s("div",Os,[Ds,t("div",Ps,[(a(!0),s($,null,T((D=(q=e.data)==null?void 0:q.financial_analysis)==null?void 0:D.list_of_investors,(S,H)=>(a(),s("div",{key:H,class:"col-md-3 my-2"},[i(A,{class:"h-100"},{default:w(()=>[t("div",Rs,[t("div",Us,[t("span",Es,[t("img",{src:e.data.baseUrl+"/"+S.logo,class:"w-100 h-100"},null,8,Ks)])]),t("div",Ws,[t("div",Gs,m(S.name),1)])])]),_:2},1024)]))),128))])])):h("",!0)],64)}}}),Xs={key:0,class:"mb-3"},Js=t("div",{class:"h1 m-0"},"Security Assessment",-1),Qs={class:"row"},Zs={class:"col-md-12 my-2"},tn={class:"col-md-6 my-2"},en={class:"text-center h-100 d-flex flex-column align-items-center justify-content-center"},an=t("div",{class:"small"},"SCORE",-1),sn={class:"d-flex align-items-center justify-content-center",style:{"font-size":"4.5rem"}},nn={class:"col-md-6 my-2"},ln=t("h3",null,"Final Scores",-1),dn={class:"h1 m-0"},on={class:"row"},cn={class:"col-md-12 my-2"},rn=t("thead",null,[t("tr",null,[t("th",null,"Title"),t("th",null,"Value")])],-1),un=["innerHTML"],hn=["innerHTML"],mn=V({__name:"SecurityComplianceView",props:{data:Object},setup(e){return(o,d)=>{var u,l;const r=at("apexchart");return a(),s($,null,[(u=e.data)!=null&&u.securityAssessment?(a(),s("div",Xs,[Js,t("div",Qs,[t("div",Zs,[i(A,null,{default:w(()=>{var c,_,f,k;return[t("h3",null,m((_=(c=e.data)==null?void 0:c.securityAssessment)==null?void 0:_.report_name),1),t("div",null,m((k=(f=e.data)==null?void 0:f.securityAssessment)==null?void 0:k.report_summary),1)]}),_:1})]),t("div",tn,[i(A,{class:"h-100"},{default:w(()=>{var c,_,f;return[t("div",en,[an,t("div",sn,m((f=(_=(c=e.data)==null?void 0:c.securityAssessment)==null?void 0:_.final_score)==null?void 0:f.toFixed("2")),1)])]}),_:1})]),t("div",nn,[i(A,{class:"h-100"},{default:w(()=>{var c,_,f,k;return[ln,i(r,{width:"640",type:"radar",options:{chart:{toolbar:{show:!1}},labels:Object.keys((_=(c=e.data)==null?void 0:c.securityAssessment)==null?void 0:_.final_score_by_category)},series:[{name:"Scores",data:Object.keys((k=(f=e.data)==null?void 0:f.securityAssessment)==null?void 0:k.final_score_by_category).map(L=>{var v,b;return(b=(v=e.data)==null?void 0:v.securityAssessment)==null?void 0:b.final_score_by_category[L]})}]},null,8,["options","series"])]}),_:1})])])])):h("",!0),(a(!0),s($,null,T((l=e.data)==null?void 0:l.security_and_compliance,(c,_)=>(a(),s("div",{key:_,class:"mb-3"},[t("div",dn,m(c.title),1),t("div",on,[t("div",cn,[i(z,{class:"w-100 h-100"},{default:w(()=>[rn,t("tbody",null,[(a(!0),s($,null,T(c.value,(f,k)=>(a(),s("tr",{key:k},[t("td",{innerHTML:y(p)(f.title),style:{width:"30%","min-width":"120px","max-width":"300px","vertical-align":"top"}},null,8,un),t("td",{innerHTML:y(p)(f.value),style:{"vertical-align":"top"}},null,8,hn)]))),128))])]),_:2},1024)])])]))),128))],64)}}}),_n={props:{type:{type:String,default:"area"},title:{type:String,required:!0},labels:{type:Array,required:!0},data:{type:Array,required:!0},updateAt:{type:Date,default:null}},computed:{highest:function(){return this.data.map(o=>o.data).map(o=>o.length>0?Math.max(...o):0).map(o=>o.toFixed(2)).join("/")},lowest:function(){return this.data.map(o=>o.data).map(o=>o.length>0?Math.min(...o):0).map(o=>o.toFixed(2)).join("/")},mean:function(){return this.data.map(o=>o.data).map(o=>o.length>0?o.reduce((d,r)=>d+r)/o.length:0).map(o=>o.toFixed(2)).join("/")},median:function(){const e=function(d){const r=Array.from(d).sort((l,c)=>l-c),u=Math.floor(r.length/2);return r.length%2===0?(r[u-1]+r[u])/2:r[u]};return this.data.map(d=>d.data).map(d=>d.length>0?e(d):0).map(d=>d.toFixed(2)).join("/")}},methods:{formatDate:we}},vn={class:"card overflow-hidden"},yn={class:"card-header"},bn={class:"card-title"},fn={key:0,class:"ms-auto text-secondary small"},gn={class:"flex-grow-1"},$n={class:"table-responsive"},kn={class:"table card-table"},wn=t("thead",null,[t("tr",null,[t("th",null,"Highest"),t("th",null,"Lowest"),t("th",null,"Mean"),t("th",null,"Median")])],-1),xn={style:{height:"192px"}};function pn(e,o,d,r,u,l){const c=at("apexchart");return a(),s("div",vn,[t("div",yn,[t("div",bn,m(d.title),1),d.updateAt?(a(),s("div",fn," Last Update: "+m(l.formatDate(d.updateAt)),1)):h("",!0)]),t("div",gn,[t("div",$n,[t("table",kn,[wn,t("tbody",null,[t("tr",null,[t("td",null,m(l.highest),1),t("td",null,m(l.lowest),1),t("td",null,m(l.mean),1),t("td",null,m(l.median),1)])])])])]),t("div",xn,[d.data.length>0&&d.data[0].data.length>0?(a(),j(c,{key:0,style:{height:"196px"},height:"196px",type:d.type,series:d.data,options:{chart:{sparkline:{enabled:!0},animations:{enabled:!1}},tooltip:{theme:"dark"},legend:{show:!1},dataLabels:{enabled:!1},fill:{opacity:.16,type:"solid"},stroke:{width:2,lineCap:"round",curve:"smooth"},labels:d.labels,colors:["#0054a6","#43ff64"]}},null,8,["type","series","options"])):h("",!0)])])}const I=ot(_n,[["render",pn]]),Mn={props:{title:{type:String,required:!0},labels:{type:Array,required:!0},data:{type:Array,required:!0},updateAt:{type:Date,default:null}},data(){return{chartOptions:{labels:this.labels,tooltip:{theme:"dark"},legend:{show:!1},responsive:[{breakpoint:480,options:{chart:{width:100,height:100}}}]},series:this.data}},methods:{formatDate:we}},Tn={class:"card overflow-hidden"},Sn={class:"card-header"},Ln={class:"card-title"},Hn={key:0,class:"ms-auto text-secondary small"},An=t("div",{class:"flex-grow-1"},[t("div",{class:"table-responsive"})],-1);function Vn(e,o,d,r,u,l){const c=at("apexchart");return a(),s("div",Tn,[t("div",Sn,[t("div",Ln,m(d.title),1),d.updateAt?(a(),s("div",Hn," Last Update: "+m(l.formatDate(d.updateAt)),1)):h("",!0)]),An,t("div",null,[i(c,{type:"pie","max-height":"300px",options:u.chartOptions,series:u.series},null,8,["options","series"])])])}const nt=ot(Mn,[["render",Vn]]),Cn={class:"mb-3"},qn=t("div",{class:"h1 m-0"},"Transcations",-1),Nn={class:"row"},jn={class:"col-md-12 my-2"},In={class:"sticky-top"},Fn={class:"col-md-6 my-2"},zn={class:"col-md-6 my-2"},Bn={class:"col-md-6 my-2"},On={class:"col-md-6 my-2"},Dn={class:"mb-3"},Pn=t("div",{class:"h1 m-0"},"Supply",-1),Rn={class:"row"},Un={class:"col-md-12 my-2"},En={class:"col-md-6 my-2"},Kn={class:"col-md-6 my-2"},Wn={class:"col-md-6 my-2"},Gn={class:"col-md-6 my-2"},Yn={class:"col-md-6 my-2"},Xn={class:"col-md-6 my-2"},Jn=V({__name:"StablecoinView",props:{data:Object},setup(e){return(o,d)=>{var r,u,l,c,_,f,k,L,v,b,g,x,C,q,D,S,H,M,N,P,R,U,E,K,W,G,Y,X,J,Q,Z,tt,et,B,ct,rt,ut,ht,mt,_t,vt,yt,bt,ft,gt,$t,kt,wt,xt,pt,Mt,Tt,St,Lt,Ht,At,Vt,Ct,qt,Nt,jt,It,Ft,zt,Bt,Ot,Dt,Pt,Rt,Ut,Et,Kt,Wt,Gt,Yt,Xt,Jt,Qt,Zt,te,ee,ae,se,ne,le,ie,de,oe,ce,re,ue,he,me,_e;return a(),s($,null,[t("div",Cn,[qn,t("div",Nn,[t("div",jn,[i(z,{style:{"max-height":"300px"}},{default:w(()=>{var n,ve,ye,be,fe,ge,$e,ke;return[t("thead",In,[t("tr",null,[(a(!0),s($,null,T((be=(ye=(ve=(n=e.data)==null?void 0:n.stablecoin)==null?void 0:ve.transaction)==null?void 0:ye.avg_rate)==null?void 0:be.columns,lt=>(a(),s("th",null,m(lt),1))),256))])]),t("tbody",null,[(a(!0),s($,null,T((ke=($e=(ge=(fe=e.data)==null?void 0:fe.stablecoin)==null?void 0:ge.transaction)==null?void 0:$e.avg_rate)==null?void 0:ke.data,lt=>(a(),s("tr",null,[(a(!0),s($,null,T(lt,Me=>(a(),s("td",null,m(Me),1))),256))]))),256))])]}),_:1})]),t("div",Fn,[i(I,{type:"bar",title:"Daily Frequency",labels:[(c=(l=(u=(r=e.data)==null?void 0:r.stablecoin)==null?void 0:u.transaction)==null?void 0:l.daily_frequency)==null?void 0:c.data.map(n=>`${n[0]}`)],data:[{name:"Daily Frequency",data:(L=(k=(f=(_=e.data)==null?void 0:_.stablecoin)==null?void 0:f.transaction)==null?void 0:k.daily_frequency)==null?void 0:L.data.map(n=>Number(n[1]))}]},null,8,["labels","data"])]),t("div",zn,[i(I,{type:"bar",title:"Hourly Frequency",labels:[(g=(b=(v=e.data)==null?void 0:v.stablecoin)==null?void 0:b.transaction)==null?void 0:g.hourly_frequency.data.map(n=>`${n[0]}:00`)],data:[{name:"Hourly Frequency",data:(q=(C=(x=e.data)==null?void 0:x.stablecoin)==null?void 0:C.transaction)==null?void 0:q.hourly_frequency.data.map(n=>Number(n[1]))}]},null,8,["labels","data"])]),t("div",Bn,[i(I,{title:"Daily Bought/Sold Volume",labels:[(H=(S=(D=e.data)==null?void 0:D.stablecoin)==null?void 0:S.transaction)==null?void 0:H.daily_bought_vol.data.map(n=>`${n[0]}`),(P=(N=(M=e.data)==null?void 0:M.stablecoin)==null?void 0:N.transaction)==null?void 0:P.daily_sold_vol.data.map(n=>`${n[0]}`)],data:[{name:"Daily Bought Volume",data:(E=(U=(R=e.data)==null?void 0:R.stablecoin)==null?void 0:U.transaction)==null?void 0:E.daily_bought_vol.data.map(n=>Number(n[1]))},{name:"Daily Sold Volume",data:(G=(W=(K=e.data)==null?void 0:K.stablecoin)==null?void 0:W.transaction)==null?void 0:G.daily_sold_vol.data.map(n=>Number(n[1]))}]},null,8,["labels","data"])]),t("div",On,[i(I,{title:"Hourly Bought/Sold Volume",labels:[(J=(X=(Y=e.data)==null?void 0:Y.stablecoin)==null?void 0:X.transaction)==null?void 0:J.hourly_bought_vol.data.map(n=>`${n[0]}:00`),(tt=(Z=(Q=e.data)==null?void 0:Q.stablecoin)==null?void 0:Z.transaction)==null?void 0:tt.hourly_sold_vol.data.map(n=>`${n[0]}:00`)],data:[{name:"Hourly Bought Volume",data:(ct=(B=(et=e.data)==null?void 0:et.stablecoin)==null?void 0:B.transaction)==null?void 0:ct.hourly_bought_vol.data.map(n=>Number(n[1]))},{name:"Hourly Sold Volume",data:(ht=(ut=(rt=e.data)==null?void 0:rt.stablecoin)==null?void 0:ut.transaction)==null?void 0:ht.hourly_sold_vol.data.map(n=>Number(n[1]))}]},null,8,["labels","data"])])])]),t("div",Dn,[Pn,t("div",Rn,[t("div",Un,[i(I,{title:"Token Supply Over Time",labels:[(vt=(_t=(mt=e.data)==null?void 0:mt.stablecoin)==null?void 0:_t.supply)==null?void 0:vt.data.map(n=>String(n[0]))],data:[{name:"Token Supply Over Time",data:(ft=(bt=(yt=e.data)==null?void 0:yt.stablecoin)==null?void 0:bt.supply)==null?void 0:ft.data.map(n=>Number(n[1]))}]},null,8,["labels","data"])]),t("div",En,[i(I,{title:"Token Price in USD over time",labels:[(kt=($t=(gt=e.data)==null?void 0:gt.stablecoin)==null?void 0:$t.price)==null?void 0:kt.data.map(n=>String(n[0]))],data:[{name:"Token Price in USD over time",data:(pt=(xt=(wt=e.data)==null?void 0:wt.stablecoin)==null?void 0:xt.price)==null?void 0:pt.data.map(n=>Number(n[1]))}]},null,8,["labels","data"])]),t("div",Kn,[i(I,{title:"Token Price in ETH over time",labels:[(St=(Tt=(Mt=e.data)==null?void 0:Mt.stablecoin)==null?void 0:Tt.price)==null?void 0:St.data.map(n=>String(n[0]))],data:[{name:"Token Price in ETH over time",data:(At=(Ht=(Lt=e.data)==null?void 0:Lt.stablecoin)==null?void 0:Ht.price)==null?void 0:At.data.map(n=>Number(n[3]))}]},null,8,["labels","data"])]),t("div",Wn,[i(nt,{title:"Top 10 holders",labels:(Nt=(qt=(Ct=(Vt=e.data)==null?void 0:Vt.stablecoin)==null?void 0:Ct.topKHolder)==null?void 0:qt.data)==null?void 0:Nt.map(n=>String(n[0]).substring(0,10)),data:(zt=(Ft=(It=(jt=e.data)==null?void 0:jt.stablecoin)==null?void 0:It.topKHolder)==null?void 0:Ft.data)==null?void 0:zt.map(n=>n[1])},null,8,["labels","data"])]),t("div",Gn,[i(nt,{title:"Age Stats",labels:(Rt=(Pt=(Dt=(Ot=(Bt=e.data)==null?void 0:Bt.stablecoin)==null?void 0:Ot.holderAgeFreqPortfolio)==null?void 0:Dt.age)==null?void 0:Pt.data)==null?void 0:Rt.map(n=>String(n[1])),data:(Gt=(Wt=(Kt=(Et=(Ut=e.data)==null?void 0:Ut.stablecoin)==null?void 0:Et.holderAgeFreqPortfolio)==null?void 0:Kt.age)==null?void 0:Wt.data)==null?void 0:Gt.map(n=>Number(n[2]))},null,8,["labels","data"])]),t("div",Yn,[i(nt,{title:"Freq Stats",labels:(Zt=(Qt=(Jt=(Xt=(Yt=e.data)==null?void 0:Yt.stablecoin)==null?void 0:Xt.holderAgeFreqPortfolio)==null?void 0:Jt.freq)==null?void 0:Qt.data)==null?void 0:Zt.map(n=>String(n[1])),data:(ne=(se=(ae=(ee=(te=e.data)==null?void 0:te.stablecoin)==null?void 0:ee.holderAgeFreqPortfolio)==null?void 0:ae.freq)==null?void 0:se.data)==null?void 0:ne.map(n=>Number(n[2]))},null,8,["labels","data"])]),t("div",Xn,[i(nt,{title:"Portfolio Stats",labels:(ce=(oe=(de=(ie=(le=e.data)==null?void 0:le.stablecoin)==null?void 0:ie.holderAgeFreqPortfolio)==null?void 0:de.portfolio)==null?void 0:oe.data)==null?void 0:ce.map(n=>String(n[1])),data:(_e=(me=(he=(ue=(re=e.data)==null?void 0:re.stablecoin)==null?void 0:ue.holderAgeFreqPortfolio)==null?void 0:he.portfolio)==null?void 0:me.data)==null?void 0:_e.map(n=>Number(n[2]))},null,8,["labels","data"])])])])],64)}}}),Qn={class:"container py-2",style:{"margin-top":"112px"}},Zn={key:0},tl={key:1,class:"p-3 mx-auto",style:{"max-width":"960px"}},el=t("div",{class:"loading mx-auto mt-5"},null,-1),al=[el],nl=V({__name:"ProjectView",setup(e){const o=st(!0),d=Ve(),r=st({}),u=st([{name:"Overview",icon:"bi-house-door"},{name:"AML/KYT",icon:"bi-shield-check"},{name:"Team & Social Media",icon:"bi-people"},{name:"Smart Contract Validation",icon:"bi-check2-square"},{name:"Financial Analysis",icon:"bi-currency-dollar"},{name:"Security and Compliance",icon:"bi-lock"},{name:"Stablecoin",icon:"bi-coin"}]),l=st(0);return He(async()=>{const c=await Ae.getProjectData(d.params.type,d.params.id);r.value=c,o.value=!1}),(c,_)=>(a(),s($,null,[i(Ce),i(Pe,{views:u.value,"view-idx":l.value,onChangeView:_[0]||(_[0]=f=>l.value=f)},null,8,["views","view-idx"]),t("div",Qn,[o.value?h("",!0):(a(),s("div",Zn,[i(ra,{data:r.value},null,8,["data"]),l.value==0?(a(),j($a,{key:0,data:r.value},null,8,["data"])):h("",!0),l.value==1?(a(),j(xa,{key:1,data:r.value},null,8,["data"])):h("",!0),l.value==2?(a(),j(Za,{key:2,data:r.value},null,8,["data"])):h("",!0),l.value==3?(a(),j(cs,{key:3,data:r.value},null,8,["data"])):h("",!0),l.value==4?(a(),j(Ys,{key:4,data:r.value},null,8,["data"])):h("",!0),l.value==5?(a(),j(mn,{key:5,data:r.value},null,8,["data"])):h("",!0),l.value==6?(a(),j(Jn,{key:6,data:r.value},null,8,["data"])):h("",!0)])),o.value?(a(),s("div",tl,al)):h("",!0)])],64))}});export{nl as default};
