import{d as u,c as p}from"./chunks/constants.d79e2d1d.js";import{o as n,c as r,F as _,r as h,u as d,a as t,b as l,t as s}from"./app.e3b97473.js";const m=t("h1",{id:"latest-posts",tabindex:"-1"},[l("Latest posts "),t("a",{class:"header-anchor",href:"#latest-posts","aria-hidden":"true"},"#")],-1),f=["href"],L='{"title":"Latest posts","description":"","frontmatter":{},"headers":[],"relativePath":"sections/blog/index.md","lastUpdated":1665374082000}',g={},v=Object.assign(g,{__name:"index",setup(x){const c=u.blog.sort((a,o)=>new Date(o.updated)-new Date(a.updated)),i=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(a,o)=>(n(),r("div",null,[m,(n(!0),r(_,null,h(d(c),e=>(n(),r("div",null,[t("h2",null,[t("a",{href:`${d(p).baseUrl}${e.path}`},s(e.title),9,f)]),t("p",null,s(e.excerpt),1),t("p",null,[t("strong",null,"~ "+s(e.author),1),l(" ("+s(i(e.updated))+")",1)])]))),256))]))}});export{L as __pageData,v as default};
