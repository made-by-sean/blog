"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{294:function(n,e,t){t.d(e,{w_:function(){return s}});var r=t(2684),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},a=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>e.indexOf(r)&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t};function s(n){return function(e){return r.createElement(u,c({attr:c({},n.attr)},e),function n(e){return e&&e.map(function(e,t){return r.createElement(e.tag,c({key:t},e.attr),n(e.child))})}(n.child))}}function u(n){var e=function(e){var t,o=n.attr,i=n.size,s=n.title,u=a(n,["attr","size","title"]),l=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:t,style:c(c({color:n.color||e.color},e.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),n.children)};return void 0!==i?r.createElement(i.Consumer,null,function(n){return e(n)}):e(o)}},9827:function(n,e,t){t.d(e,{R:function(){return Z}});var r=t(638),o=t(8598),i=t(2684),c=t(9518),a=t(6178),s=t(3588),u=t(6059),l=t(8102),d=t(4376),h=t(4528);function f(){var n=(0,r.Z)(["\n  @media "," {\n    padding: 20px;\n  }\n  z-index: 100;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  padding: 40px 80px;\n  align-items: end;\n  opacity: 0.9;\n  gap: 40px;\n  animation: menuFadeIn 600ms 1 ease;\n  background-color: ",";\n  span {\n    @media "," {\n      font-size: 82px;\n    }\n    font-size: 122px;\n    color: ",";\n    cursor: pointer;\n    &.selected {\n      color: ",";\n    }\n  }\n  @keyframes menuFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0.9;\n    }\n  }\n"]);return f=function(){return n},n}var p=function(n){var e=n.onMenuClick,t=(0,d.useRouter)();return(0,o.jsxs)(m,{children:[(0,o.jsx)(s.cur,{size:24,color:l.r.color.white,style:{cursor:"pointer"},onClick:e}),(0,o.jsx)(u.xW,{className:"/about"===t.pathname?"selected":"",onClick:function(){return t.push("".concat(h.Bq,"/about/"))},children:"about"}),(0,o.jsx)(u.xW,{className:"/learn"===t.pathname?"selected":"",onClick:function(){return t.push("".concat(h.Bq,"/learn/"))},children:"learn"}),(0,o.jsx)(u.xW,{className:"/"===t.pathname?"selected":"",onClick:function(){return t.push("".concat(h.Bq,"/"))},children:"home"})]})},m=(0,c.ZP)(a.sg).withConfig({componentId:"sc-a47f7847-0"})(f(),function(n){return n.theme.media.mobile},function(n){return n.theme.color.background2},function(n){return n.theme.media.mobile},function(n){return n.theme.color.white},function(n){return n.theme.color.primary}),g=t(2049);function b(){var n=(0,r.Z)(["\n  @media "," {\n    padding: 20px;\n  }\n  z-index: 100;\n  padding: 40px 80px;\n  align-items: center;\n  justify-content: space-between;\n  span {\n    ","\n  }\n"]);return b=function(){return n},n}function v(){var n=(0,r.Z)(["\n  font-weight: ",";\n  cursor: pointer;\n"]);return v=function(){return n},n}var w=function(n){var e=n.backgroundColor,t=(0,d.useRouter)(),r=(0,i.useState)(!1),c=r[0],a=r[1];return(0,o.jsxs)(x,{backgroundColor:e,children:[(0,o.jsx)(k,{onClick:function(){return t.push("".concat(h.Bq,"/"))},children:"Many things"}),(0,o.jsx)(s.cur,{size:24,color:e===g.t.W||e===g.t.B1?l.r.color.black:l.r.color.white,style:{cursor:"pointer"},onClick:function(){return a(!0)}}),c&&(0,o.jsx)(p,{onMenuClick:function(){return a(!1)}})]})},x=(0,c.ZP)(a.X2).withConfig({componentId:"sc-3e2a8645-0"})(b(),function(n){return n.theme.media.mobile},function(n){return n.backgroundColor===g.t.B2&&"color: ".concat(n.theme.color.white,";")}),k=(0,c.ZP)(u.Ml).withConfig({componentId:"sc-3e2a8645-1"})(v(),function(n){return n.theme.weight.bold});function y(){var n=(0,r.Z)(["\n  @media "," {\n    font-size: ",";\n  }\n  &.date {\n    @media "," {\n      flex: 1;\n      text-align: end;\n    }\n    font-weight: ",";\n  }\n"]);return y=function(){return n},n}function C(){var n=(0,r.Z)(["\n  @media "," {\n    gap: 100px;\n  }\n  @media "," {\n    justify-content: space-between;\n    padding: 0 20px;\n  }\n  height: 80px;\n  align-items: center;\n  padding: 0 80px;\n  color: ",";\n  background-color: ",";\n  span {\n    ","\n  }\n"]);return C=function(){return n},n}var j=function(n){var e=n.backgroundColor;return(0,o.jsxs)(O,{backgroundColor:e,children:[(0,o.jsx)("a",{href:"https://github.com/devshon",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(z,{children:"Github"})}),(0,o.jsx)("a",{href:"https://florentine-nutmeg-39b.notion.site/SHON-85ae96c1bfd54adf920e45d44e71560c",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(z,{children:"Resume"})}),(0,o.jsx)("a",{href:"https://devshon.github.io",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(z,{children:"Velog"})}),(0,o.jsx)(z,{className:"date",children:"@DevShon"})]})},z=(0,c.ZP)(u.xW).withConfig({componentId:"sc-de2589f6-0"})(y(),function(n){return n.theme.media.mobile},function(n){return n.theme.size.small},function(n){return n.theme.media.desktop},function(n){return n.theme.weight.light}),O=(0,c.ZP)(a.X2).withConfig({componentId:"sc-de2589f6-1"})(C(),function(n){return n.theme.media.desktop},function(n){return n.theme.media.mobile},function(n){return n.theme.color.white},function(n){return n.backgroundColor===g.t.W?n.theme.color.white:n.theme.color.primary},function(n){return n.backgroundColor===g.t.W&&"color: ".concat(n.theme.color.black)}),E=t(2444);function P(){var n=(0,r.Z)(["\n  z-index: 100;\n  width: 55px;\n  height: 55px;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  box-shadow: 0px 2px 8px 0px #14141485;\n  background-color: ",";\n  cursor: pointer;\n  @keyframes comeUpFloat {\n    0% {\n      opacity: 0;\n      bottom: 0px;\n    }\n    100% {\n      opacity: 1;\n      bottom: 40px;\n    }\n  }\n  animation: comeUpFloat 0.8s;\n  :hover {\n    background-color: ",";\n  }\n  :active {\n    background-color: ","00;\n  }\n"]);return P=function(){return n},n}var S=function(){var n=(0,i.useState)(0),e=n[0],t=n[1];(0,i.useEffect)(function(){return t(window.scrollY),window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}},[]);var r=function(){return t(window.scrollY)};return(0,o.jsx)(W,{style:{display:e<700?"none":""},onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})},children:(0,o.jsx)(E.y1n,{size:"24"})})},W=(0,c.ZP)(a.sg).withConfig({componentId:"sc-300f9ac7-0"})(P(),function(n){return n.theme.color.white},function(n){return n.theme.color.background1},function(n){return n.theme.color.white});function N(){var n=(0,r.Z)(["\n  min-height: 100vh;\n  animation: frameFadeIn 2000ms 1 ease;\n  background-color: ",";\n  @keyframes frameFadeIn {\n    0% {\n      opacity: 0;\n    }\n    20% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);return N=function(){return n},n}var Z=function(n){var e=n.children,t=n.backgroundColor,r=void 0===t?g.t.W:t;return(0,o.jsxs)(I,{backgroundColor:r,children:[(0,o.jsx)(w,{backgroundColor:r}),e,(0,o.jsx)(j,{backgroundColor:r}),(0,o.jsx)(S,{})]})},I=(0,c.ZP)(a.sg).withConfig({componentId:"sc-5d720fb6-0"})(N(),function(n){return n.theme.color[n.backgroundColor]})},717:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(8598),o=t(2684),i=t(4191);class c extends i.aNw{constructor(n){super(n)}load(n,e,t,r){let o=this,c=new i.hH6(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(n,function(n){let t=o.parse(JSON.parse(n));e&&e(t)},t,r)}parse(n){return new a(n)}}class a{constructor(n){this.isFont=!0,this.type="Font",this.data=n}generateShapes(n,e=100){let t=[],r=function(n,e,t){let r=Array.from(n),o=e/t.resolution,i=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*o,c=[],a=0,u=0;for(let l=0;l<r.length;l++){let d=r[l];if("\n"===d)a=0,u-=i;else{let h=s(d,o,a,u,t);a+=h.offsetX,c.push(h.path)}}return c}(n,e,this.data);for(let o=0,i=r.length;o<i;o++)t.push(...r[o].toShapes());return t}}function s(n,e,t,r,o){let c=o.glyphs[n]||o.glyphs["?"];if(!c){console.error('THREE.Font: character "'+n+'" does not exists in font family '+o.familyName+".");return}let a=new i.T_1,s,u,l,d,h,f,p,m;if(c.o){let g=c._cachedOutline||(c._cachedOutline=c.o.split(" "));for(let b=0,v=g.length;b<v;){let w=g[b++];switch(w){case"m":s=g[b++]*e+t,u=g[b++]*e+r,a.moveTo(s,u);break;case"l":s=g[b++]*e+t,u=g[b++]*e+r,a.lineTo(s,u);break;case"q":l=g[b++]*e+t,d=g[b++]*e+r,h=g[b++]*e+t,f=g[b++]*e+r,a.quadraticCurveTo(h,f,l,d);break;case"b":l=g[b++]*e+t,d=g[b++]*e+r,h=g[b++]*e+t,f=g[b++]*e+r,p=g[b++]*e+t,m=g[b++]*e+r,a.bezierCurveTo(h,f,p,m,l,d)}}}return{offsetX:c.ha*e,path:a}}class u extends i.O7d{constructor(n,e={}){let t=e.font;if(void 0===t)super();else{let r=t.generateShapes(n,e.size);e.depth=void 0!==e.height?e.height:50,void 0===e.bevelThickness&&(e.bevelThickness=10),void 0===e.bevelSize&&(e.bevelSize=8),void 0===e.bevelEnabled&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}var l=t(9827),d=t(2049),h=t(8102),f=function(){var n=(0,o.useRef)(null),e=window.innerWidth>=1080;return(0,o.useEffect)(function(){if(n.current){var t=new i.CP7({antialias:!0,canvas:n.current});t.setPixelRatio(window.devicePixelRatio);var r=new i.xsS,o=new i.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);o.position.z=3;var a=new i.DvJ(1.4,1.4,1.4),s=new i.Wid({color:h.r.color.primary}),l=new i.Kj0(a,s);r.add(l);var d=new i.Ox3("#ffffff",1);d.position.set(-1,2,4),r.add(d),new c().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(n){var t=new u("Learning Three.js",{font:n,size:e?.5:.16,height:.2,curveSegments:10,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:10}),o=new i.Wid({color:"#ffffff"}),c=new i.Kj0(t,o);c.position.set(e?-2.6:-.8,1.1,-.5),r.add(c)}),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setClearColor(h.r.color.background2),function n(){t.render(r,o),l.rotation.y+=.01,requestAnimationFrame(n)}()}},[]),(0,r.jsx)(l.R,{backgroundColor:d.t.B2,children:(0,r.jsx)("canvas",{ref:n})})}},2049:function(n,e,t){var r,o;t.d(e,{t:function(){return r}}),(o=r||(r={})).W="white",o.B1="background1",o.B2="background2"}}]);