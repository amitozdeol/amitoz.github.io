!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Users/amitozdeol/WebProjects/amitozdeol.github.io/build",n(n.s=0)}([function(e,t){var n=function(e){return document.querySelector(e)},o=function(e){return document.querySelectorAll(e)};navigator.serviceWorker.controller?console.log("[PWA Builder] active service worker found, no need to register"):navigator.serviceWorker.register("sw.js",{scope:"."}).then((function(e){console.log("Service worker has been registered for scope:"+e.scope)})),window.addEventListener("load",(function(){var e;if("IntersectionObserver"in window){e=o(".lazy");var t=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.classList.remove("lazy"),t.unobserve(n)}}))}));e.forEach((function(e){t.observe(e)}))}else{var n;function r(){n&&clearTimeout(n),n=setTimeout((function(){var t=window.pageYOffset;e.forEach((function(e){e.offsetTop<window.innerHeight+t&&(e.src=e.dataset.src,e.classList.remove("lazy"))})),0==e.length&&(document.removeEventListener("scroll",r),window.removeEventListener("resize",r),window.removeEventListener("orientationChange",r))}),20)}e=o(".lazy"),document.addEventListener("scroll",r),window.addEventListener("resize",r),window.addEventListener("orientationChange",r)}}),!1),n("html").classList.remove("no-js"),o('#menu a[href^="#"]').forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:n(this.getAttribute("href")).getBoundingClientRect().top,behavior:"smooth"}),n("header").classList.contains("active")&&o("header, body").forEach(e=>e.classList.remove("active"))}))}),n("#to-top").addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})})),n("#lead-down span").addEventListener("click",(function(e){window.scrollTo({top:n("#about").getBoundingClientRect().top,behavior:"smooth"})})),n("#mobile-menu-open").addEventListener("click",(function(e){o("header, body").forEach(e=>e.classList.add("active"))})),n("#CR-year").innerHTML=(new Date).getFullYear();var r=window.matchMedia("(prefers-color-scheme: dark)");function i(e){let t=e.matches;n('link[rel="icon"]').href=t?"assets/images/AD_logo_white.png":"assets/images/AD_logo_dark1.png"}i(r),r.addListener(i)}]);