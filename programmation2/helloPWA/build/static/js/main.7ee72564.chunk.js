(this.webpackJsonpmockapihooks=this.webpackJsonpmockapihooks||[]).push([[0],{14:function(e,n,o){e.exports=o(27)},19:function(e,n,o){},20:function(e,n,o){},27:function(e,n,o){"use strict";o.r(n);var t=o(0),i=o.n(t),r=o(11),a=o.n(r),c=o(13),l=(o(19),o(20),o(29));var s=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l.a,{variant:"primary",size:"lg",block:!0,id:"boutonInstall"},"Installer l'application"),i.a.createElement("h1",null,"hello World 2"))},u=(o(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,null,i.a.createElement(s,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.7ee72564.chunk.js.map