(()=>{"use strict";var e={732:(e,t,r)=>{e.exports=r.p+"images/image.png"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(732);const t=document.createElement("header");t.innerHTML="this is webpack demo",t.classList.add("info");const n=document.createElement("img");n.src=e,n.style.width="50px",n.style.height="50px",t.appendChild(n),document.body.appendChild(t),document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML="and it is cool",e.classList.add("myDiv"),e}()),console.log("hello world ")})()})();