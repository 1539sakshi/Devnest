(this.webpackJsonpday28=this.webpackJsonpday28||[]).push([[0],{12:function(e,c,t){},16:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(6),i=t.n(n),r=(t(12),t(4)),l=t.n(r),j=t(5),d=t(7),o=t(2),b=(t(14),t(15),t(16),t(0));var m=function(){var e=Object(s.useState)("Lucknow"),c=Object(o.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)({}),i=Object(o.a)(n,2),r=i[0],m=i[1];Object(s.useEffect)((function(){u()}),[]);var u=function(){h().then((function(e){return m(e)}))},h=function(){var e=Object(d.a)(l.a.mark((function e(){var c,s,a,n,i,r,d,b,m,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=fetch("https://api.weatherapi.com/v1/current.json?key=7689468754f047a7b6a100121210908&q=".concat(t)),s=fetch("https://api.weatherapi.com/v1/astronomy.json?key=7689468754f047a7b6a100121210908&q=".concat(t)),e.next=4,Promise.all([c,s]);case 4:return a=e.sent,n=Object(o.a)(a,2),i=n[0],r=n[1],e.next=10,Promise.all([i.json(),r.json()]);case 10:return d=e.sent,b=Object(o.a)(d,2),m=b[0],u=b[1],e.abrupt("return",Object(j.a)(Object(j.a)({},m),u));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-12 form",children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{className:"btn  btn-primary",onClick:function(){u()},children:"Submit"})]}),Object(b.jsx)("div",{className:"offset-md-2 col-12 col-md-8 offset-lg-4 col-lg-4 weather",children:Object(b.jsx)("div",{className:"card",children:r.location?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"place",children:r.location.name}),Object(b.jsx)("img",{src:r.current.condition.icon,alt:"img"}),Object(b.jsxs)("div",{className:"temp",children:[r.current.temp_c,"\xb0C"]}),Object(b.jsx)("div",{className:"desc",children:r.current.condition.text}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row whp",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("div",{className:"title",children:"Wind Now"}),Object(b.jsxs)("div",{className:"data",children:[r.current.wind_kph,Object(b.jsx)("span",{className:"unit",children:"KM"})]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("div",{className:"title",children:"Humidity"}),Object(b.jsxs)("div",{className:"data",children:[r.current.humidity,Object(b.jsx)("span",{className:"unit",children:"%"})]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("div",{className:"title",children:"Precipitation"}),Object(b.jsxs)("div",{className:"data",children:[r.current.precip_in,Object(b.jsx)("span",{className:"unit",children:"%"})]})]})]})}),Object(b.jsxs)("div",{className:"row whp",children:[Object(b.jsx)("div",{className:"col-4 offset-2 offset-lg-1 col-lg-5",children:Object(b.jsxs)("div",{className:"data",children:[Object(b.jsx)("i",{style:{position:"relative",top:"3px"},class:"bi bi-sunrise-fill"}),Object(b.jsx)("span",{style:{marginLeft:"10px"},className:"unit",children:r.astronomy.astro.sunrise})]})}),Object(b.jsx)("div",{className:"col-4 col-lg-5",children:Object(b.jsxs)("div",{className:"data",children:[Object(b.jsx)("span",{style:{marginRight:"10px"},className:"unit",children:r.astronomy.astro.sunrise}),Object(b.jsx)("i",{style:{position:"relative",top:"3px"},class:"bi bi-sunset-fill"})]})})]})]}):Object(b.jsx)("h2",{children:"Place not found"})})})]})})})};i.a.render(Object(b.jsxs)(a.a.StrictMode,{children:[Object(b.jsx)("div",{className:"bg-img"}),Object(b.jsx)(m,{})]}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a2ae9517.chunk.js.map