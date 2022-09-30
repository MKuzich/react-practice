"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[545],{5545:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var a,n,s=r(5861),i=r(885),c=r(4687),d=r.n(c),o=r(2791),l=r(7022),u=r(3027),p=r(4266),x=r(3360),h=r(4849),f=r(4569),g=r.n(f),m=function(){var e=(0,s.Z)(d().mark((function e(t){var r,a,n,s,i,c,o,l,u,p,x,h,f;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({appid:"7c0ca10b6b7d582c36f6c73564f8fbab",q:t}),a="https://api.openweathermap.org/geo/1.0/direct?".concat(r),e.prev=2,e.next=5,g().get(a);case 5:if(0!==(n=e.sent).data.length){e.next=8;break}throw new Error("Any cities on this request!");case 8:return s=n.data[0],i=s.lat.toString(),c=s.lon.toString(),o=new URLSearchParams({appid:"7c0ca10b6b7d582c36f6c73564f8fbab",lat:i,lon:c,units:"metric"}),l="https://api.openweathermap.org/data/2.5/weather?".concat(o),e.next=15,g().get(l);case 15:return u=e.sent,p=u.data,x="https://api.openweathermap.org/data/2.5/forecast?".concat(o),e.next=20,g().get(x);case 20:return h=e.sent,f=h.data,e.abrupt("return",{currentWeather:p,forecastWeather:f});case 25:return e.prev=25,e.t0=e.catch(2),e.abrupt("return",e.t0.message);case 28:case"end":return e.stop()}}),e,null,[[2,25]])})));return function(t){return e.apply(this,arguments)}}(),j=r(9140),b=r(168),Z=r(6444),v=Z.ZP.span(a||(a=(0,b.Z)(["\n  font-size: 40px;\n  line-height: 1;\n  margin-right: 16px;\n"]))),y=r(5585),w=r(3853),k=r(184),z=function(e){var t=e.data,r=(0,o.useState)(),a=(0,i.Z)(r,2),n=a[0],s=a[1],c=t.name,d=t.sys,l=t.weather,u=t.main,x=t.wind,h=t.clouds,f=t.dt;return(0,o.useEffect)((function(){var e=new Date(1e3*f);s(e.toLocaleTimeString())}),[f]),(0,k.jsx)("div",{children:(0,k.jsxs)(j.Z,{bg:"info",className:"d-inline-block secondary",children:[(0,k.jsx)(j.Z.Header,{children:"Current weather at your city"}),(0,k.jsxs)(p.Z,{className:"p-3 border border-dark rounded-3 border-opacity-75",direction:"horizontal",gap:4,children:[(0,k.jsxs)(j.Z,{bg:"info",border:"info",children:[(0,k.jsxs)(p.Z,{direction:"horizontal",gap:2,children:[(0,k.jsxs)("div",{children:[(0,k.jsxs)(j.Z.Title,{children:[c,", ",d.country]}),(0,k.jsx)(j.Z.Text,{children:n})]}),(0,k.jsxs)(v,{children:[u.temp,"\xb0C"]})]}),(0,k.jsx)("div",{className:"d-flex justify-content-center",children:(0,k.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(l[0].icon,"@2x.png"),alt:l[0].main})}),(0,k.jsx)("p",{className:"text-center",children:l[0].description})]}),(0,k.jsxs)(j.Z,{bg:"dark",text:"white",className:"px-3 py-2",children:[(0,k.jsxs)(j.Z.Header,{children:["Feels like ",u.feels_like,"\xb0C"]}),(0,k.jsxs)(j.Z.Text,{children:[(0,k.jsx)(w.Hwd,{size:"24px"})," ",x.speed," m/s","  ",(x.deg>337.5||x.deg<=22.5)&&(0,k.jsx)(y.Xpc,{size:"24px"}),x.deg>22.5&&x.deg<=67.5&&(0,k.jsx)(y.$5p,{size:"24px"}),x.deg>67.5&&x.deg<=112.5&&(0,k.jsx)(y.HI7,{size:"24px"}),x.deg>112.5&&x.deg<=157.5&&(0,k.jsx)(y.Hbi,{size:"24px"}),x.deg>157.5&&x.deg<=202.5&&(0,k.jsx)(y.N5v,{size:"24px"}),x.deg>202.5&&x.deg<=247.5&&(0,k.jsx)(y._R8,{size:"24px"}),x.deg>247.5&&x.deg<=292.5&&(0,k.jsx)(y.VU,{size:"24px"}),x.deg>292.5&&x.deg<=337.5&&(0,k.jsx)(y.vt,{size:"24px"})]}),(0,k.jsxs)(j.Z.Text,{children:[(0,k.jsx)(y.eQ_,{size:"24px"})," ",u.pressure,"hPa"]}),(0,k.jsxs)(j.Z.Text,{children:[(0,k.jsx)(y.$2C,{size:"24px"})," ",u.humidity,"%"]}),(0,k.jsxs)(j.Z.Text,{children:[(0,k.jsx)(y.l64,{size:"24px"})," ",h.all,"%"]})]})]})]})})},N=r(9683),S=r(2702),C=Z.ZP.div(n||(n=(0,b.Z)(["\n  width: 50%;\n"]))),L=r(8977);S.kL.register(S.uw,S.f$,S.od,S.jn,S.Dx,S.u,S.De);var T=function(e){var t=e.data,r=(0,o.useState)({labels:[],datasets:[{label:"daily temp",data:[],borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}),a=(0,i.Z)(r,2),n=a[0],s=a[1];(0,o.useEffect)((function(){var e=t.list.map((function(e){return(0,L.Z)(new Date(1e3*e.dt),"d LLL h a")})),r=t.list.map((function(e){return e.main.temp.toString()}));s({labels:e,datasets:[{label:"temperature",data:r,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]})}),[t]);return(0,k.jsx)(C,{children:(0,k.jsx)(N.x1,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"3 hour forecast for a 5 days"}}},data:n})})},W=r(9085),D=function(){var e=(0,o.useState)(),t=(0,i.Z)(e,2),r=t[0],a=t[1],n=(0,o.useState)(!1),c=(0,i.Z)(n,2),f=c[0],g=c[1],j=function(){var e=(0,s.Z)(d().mark((function e(t){var r,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=t.target.elements.city.value.trim()){e.next=5;break}return W.Am.error("It is necessary to fill the input field"),e.abrupt("return");case 5:return g(!0),a(void 0),e.prev=7,e.next=10,m(r);case 10:if("object"===typeof(n=e.sent)){e.next=13;break}throw new Error(n);case 13:g(!1),a(n),W.Am.success("Selected city is ".concat(n.currentWeather.name,", ").concat(n.currentWeather.sys.country)),e.next=23;break;case 18:return e.prev=18,e.t0=e.catch(7),W.Am.error(e.t0.message),g(!1),e.abrupt("return");case 23:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}();return(0,k.jsx)(l.Z,{children:(0,k.jsxs)("section",{children:[(0,k.jsx)("div",{className:"mb-4 d-flex flex-column align-items-center",children:(0,k.jsx)(u.Z,{onSubmit:j,children:(0,k.jsxs)(p.Z,{className:"p-3",direction:"horizontal",gap:3,children:[(0,k.jsx)(u.Z.Control,{type:"text",name:"city",placeholder:"Enter your city"}),(0,k.jsxs)(x.Z,{className:"d-flex flex-row align-items-center",type:"submit",variant:"dark",children:["Search",f&&(0,k.jsx)(h.Z,{className:"ms-1",animation:"border",size:"sm",role:"status",children:(0,k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})]})})}),f&&(0,k.jsx)(l.Z,{className:"d-flex justify-content-center mt-5",children:(0,k.jsx)(h.Z,{animation:"border",role:"status",children:(0,k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),r&&(0,k.jsxs)(p.Z,{direction:"horizontal",gap:3,children:[(0,k.jsx)(z,{data:r.currentWeather}),(0,k.jsx)(T,{data:r.forecastWeather})]})]})})}}}]);
//# sourceMappingURL=545.182670d7.chunk.js.map