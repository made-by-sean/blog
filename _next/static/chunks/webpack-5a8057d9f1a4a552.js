!function(){"use strict";var e,t,n,r,o,i,u,a,c,f,l={},d={};function s(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={id:e,loaded:!1,exports:{}},r=!0;try{l[e].call(n.exports,n,n.exports,s),r=!1}finally{r&&delete d[e]}return n.loaded=!0,n.exports}s.m=l,e=[],s.O=function(t,n,r,o){if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var u=1/0,i=0;i<e.length;i++){for(var n=e[i][0],r=e[i][1],o=e[i][2],a=!0,c=0;c<n.length;c++)u>=o&&Object.keys(s.O).every(function(e){return s.O[e](n[c])})?n.splice(c--,1):(a=!1,o<u&&(u=o));if(a){e.splice(i--,1);var f=r();void 0!==f&&(t=f)}}return t},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce(function(t,n){return s.f[n](e,t),t},[]))},s.u=function(e){return"static/chunks/"+e+"."+({92:"7fc707412b049458",913:"61fd1f66c735ed1e"})[e]+".js"},s.miniCssF=function(e){return"static/css/"+({888:"4fa58464509feb1c",913:"94f3b172d29a9233"})[e]+".css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="_N_E:",s.l=function(e,r,o,i){if(t[e]){t[e].push(r);return}if(void 0!==o)for(var u,a,c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){u=l;break}}u||(a=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.setAttribute("data-webpack",n+o),u.src=s.tu(e)),t[e]=[r];var d=function(n,r){u.onerror=u.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(r)}),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),a&&document.head.appendChild(u)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.tt=function(){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("nextjs#bundler",r))),r},s.tu=function(e){return s.tt().createScriptURL(e)},s.p="/blog//_next/",o=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},i=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}for(var u=document.getElementsByTagName("style"),r=0;r<u.length;r++){var o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},u={272:0},s.f.miniCss=function(e,t){if(u[e])t.push(u[e]);else if(0!==u[e]&&({913:1})[e]){var n;t.push(u[e]=new Promise(function(t,n){var r=s.miniCssF(e),u=s.p+r;if(i(r,u))return t();o(e,u,t,n)}).then(function(){u[e]=0},function(t){throw delete u[e],t}))}},a={272:0},s.f.j=function(e,t){var n=s.o(a,e)?a[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(/^(272|913)$/.test(e))a[e]=0;else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o=s.p+s.u(e),i=Error(),u=function(t){if(s.o(a,e)&&(0!==(n=a[e])&&(a[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}};s.l(o,u,"chunk-"+e,e)}}},s.O.j=function(e){return 0===a[e]},c=function(e,t){var n,r,o=t[0],i=t[1],u=t[2],c=0;if(o.some(function(e){return 0!==a[e]})){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(u)var f=u(s)}for(e&&e(t);c<o.length;c++)r=o[c],s.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return s.O(f)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f)),s.nc=void 0}();