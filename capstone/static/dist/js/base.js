(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)i=s[d],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={base:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("ce9c")},"698c":function(e,t){var n=n||[];n.push(["setCookieDomain","*.case.law"]),n.push(["trackPageView"]),n.push(["enableLinkTracking"]),function(){var e="//analytics.lil.tools/";n.push(["setTrackerUrl",e+"piwik.php"]),n.push(["setSiteId","4"]);var t=document,r=t.createElement("script"),o=t.getElementsByTagName("script")[0];r.type="text/javascript",r.async=!0,r.defer=!0,r.src=e+"piwik.js",o.parentNode.insertBefore(r,o)}(),window._paq=n},ce9c:function(e,t,n){"use strict";n.r(t);n("28a5"),n("7514"),n("ac6a"),n("5949"),n("8147");var r=n("1157"),o=n.n(r);function a(e){var t=o()(window).scrollTop()-o()("nav").height(),n=t+o()(window).height()/2,r=e.offsetTop+o()(e).height(),a=r-o()(e).height();return r<=n&&a>=t}n("698c");var i=function(){document.querySelectorAll("a[role='button']").forEach(function(e){e.addEventListener("keypress",function(e){" "!=e.key&&32!=e.keyCode||(e.preventDefault(),this.click())},!1),e.addEventListener("click",function(e){e.preventDefault()},!1)})},s=function(e){e.removeClass("show"),e.find("> a").attr("aria-expanded","false")},c=function(e){e.addClass("show"),e.find("> a").attr("aria-expanded","true")},u=function(){var e=o()(".dropdown");e.click(function(t){var n=o()(this),r=n.hasClass("show");s(e),r?s(n):c(n),t.stopPropagation()}),o()(document).click(function(){s(e)})},l=function(){var e="body",t="#burger-icon";o()(e).addClass("hamburger-menu-closed"),o()(t).on("click touch",function(t){o()(e).toggleClass("hamburger-menu-open").toggleClass("hamburger-menu-closed"),t.stopPropagation()})},d=function(){var e=window.location.pathname.split("/")[1];e=e.split("#")[0],e="user"===e?"account":e,e="bulk"===e||"api"===e?"tools":e,o()("#nav-"+e).find("a").addClass("selected")},f=function(){var e=o()(".list-group-item"),t=o()(".subtitle");window.addEventListener("scroll",function(){for(var n=0;n<t.length;n++)if(a(t[n])){o()(e).removeClass("selected");var r="a.list-group-item[href='#"+t[n].id+"']";o()(r).addClass("selected")}})},p=function(){var e=o()("#main-nav"),t=o()("#sidebar-menu"),n=e.height(),r=n/2,a=!1,i=function(){window.pageYOffset>r?a||(t.addClass("sticky"),e.addClass("sticky"),a=!0):a&&(t.removeClass("sticky"),e.removeClass("sticky"),a=!1)};window.addEventListener("scroll",i),i()};o()(function(){d(),p(),f(),u(),l(),i()})}});
//# sourceMappingURL=base.js.map