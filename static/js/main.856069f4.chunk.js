(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{10:function(e,r,t){e.exports=t(20)},15:function(e,r,t){},16:function(e,r,t){},18:function(e,r,t){},20:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(4),l=t.n(o),u=(t(15),t(16),t(2)),c=t.n(u),i=t(5),s=t(1),h=t(6),f=t(7),g=t(8),m=t(9);function v(e){var r=[];if(e.length<=1)return e;var t=e.slice();return function e(r,t,n,a,o){if(t===n)return;var l=Math.floor((t+n)/2);return e(a,t,l,r,o),e(a,l+1,n,r,o),function(e,r,t,n,a,o){var l=r,u=r,c=t+1;for(;u<=t&&c<=n;)o.push([u,c]),o.push([u,c]),a[u]<=a[c]?(o.push([l,a[u]]),e[l++]=a[u++]):(o.push([l,a[c]]),e[l++]=a[c++]);for(;u<=t;)o.push([u,u]),o.push([u,u]),o.push([l,a[u]]),e[l++]=a[u++];for(;c<=n;)o.push([c,c]),o.push([c,c]),o.push([l,a[c]]),e[l++]=a[c++]}(r,t,l,n,a,o)}(e,0,e.length-1,t,r),r}function y(e){var r=[];return e.length<=1?e:(function(e,r){for(var t,n=r.length;n>0;n--){t=!0;for(var a=0;a<n-1;a++)r[a]>r[a+1]&&(d(r,a,a+1),e.push([a,a+1]),t=!1);if(t)break}}(r,e.slice()),r)}function d(e,r,t){var n=e[r];e[r]=e[t],e[t]=n}function k(e){var r=[];if(e.length<=1)return e;if(function(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(e.slice().sort((function(e,r){return e-r})),e))return r;var t=e.slice();return E(r,t,0,t.length-1),r}function p(e,r,t,n){var a=r[t];r[t]=r[n],r[n]=a,e.push([t,n])}function b(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1,n=arguments.length>3?arguments[3]:void 0,a=e[r],o=r,l=r+1;l<=t;l++)a>e[l]&&p(n,e,l,++o);return p(n,e,r,o),o}function E(e,r,t,n){if(t<n){var a=b(r,t,n,e);E(e,r,t,a-1),E(e,r,a+1,n)}return r}t(18);var C=function(e){Object(m.a)(t,e);var r=Object(g.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=r.call(this,e)).state={array:[]},n}return Object(f.a)(t,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e=[],r=0;r<350;r++)e.push(N(5,600));this.setState({array:e});for(var t=document.getElementsByClassName("array-bar"),n=t.length,a=0;a<n;a++){t[a].style.backgroundColor="turquoise"}}},{key:"makeAllBarsGreen",value:function(){console.log("Sorted");for(var e=document.getElementsByClassName("array-bar"),r=e.length,t=0;t<r;t++){e[t].style.backgroundColor="limegreen"}}},{key:"mergeSort",value:function(){for(var e=this,r=v(this.state.array),t=function(t){var n=document.getElementsByClassName("array-bar");if(t%3!==2){var a=Object(s.a)(r[t],2),o=a[0],l=a[1],u=n[o].style,c=n[l].style,i=t%3===0?"red":"turquoise";setTimeout((function(){u.backgroundColor=i,c.backgroundColor=i,t===r.length-1&&e.makeAllBarsGreen()}),.1*t)}else setTimeout((function(){var a=Object(s.a)(r[t],2),o=a[0],l=a[1];n[o].style.height="".concat(l,"px"),t===r.length-1&&e.makeAllBarsGreen()}),.1*t)},n=0;n<r.length;n++)t(n)}},{key:"quickSort",value:function(){var e=this,r=this.state.array,t=k(r);console.log(t);for(var n=document.getElementsByClassName("array-bar"),a=function(a){setTimeout((function(){var o,l,u=Object(s.a)(t[a],2),c=u[0],i=u[1],h=n[c].style,f=n[i].style,g=[];r.length>1&&0<r.length&&(o=b(r,0,r.length-1,g),(l=n[o].style).backgroundColor="purple",E(g,r,0,o-1),E(g,r,0,r.length-1)),h.height="".concat(e.state.array[c],"px"),f.height="".concat(e.state.array[i],"px"),h.backgroundColor="yellow",f.backgroundColor="red",l.backgroundColor="purple";for(var m=c,v=0;v<m;v++){n[v].style.backgroundColor="green",l.backgroundColor="purple"}a===t.length-1&&e.makeAllBarsGreen()}),.1*a)},o=0;o<t.length;o++)a(o)}},{key:"bubbleSort",value:function(){var e=Object(i.a)(c.a.mark((function e(){var r,t,n,a,o,l=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=this.state.array,t=y(r),n=document.getElementsByClassName("array-bar"),a=function(e){setTimeout((function(){var r=Object(s.a)(t[e],2),a=r[0],o=r[1],u=n[a].style,c=n[o].style,i=l.state.array[a];l.state.array[a]=l.state.array[o],l.state.array[o]=i,u.height="".concat(l.state.array[a],"px"),c.height="".concat(l.state.array[o],"px"),u.backgroundColor="red",c.backgroundColor="green";for(var h=a,f=0;f<h;f++){n[f].style.backgroundColor="red"}e===t.length-1&&l.makeAllBarsGreen()}),.1*e)},o=0;o<t.length;o++)a(o);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"testSortingAlgorithms",value:function(){for(var e=0;e<1;e++){for(var r=[],t=N(1,1e3),n=0;n<t;n++)r.push(N(-1e3,1e3));var a=r.slice().sort((function(e,r){return e-r})),o=k(r.slice());console.log(S(a,o))}}},{key:"render",value:function(){var e=this,r=this.state.array;return[a.a.createElement("header",{key:"Navigation"},a.a.createElement("section",{className:"logo"},a.a.createElement("h1",null,"Sorting Algorithms")),a.a.createElement("nav",null,a.a.createElement("ul",{className:"items"},a.a.createElement("li",null,a.a.createElement("input",{id:"changeSize",type:"range",min:"0",max:"100",style:{background:"white",cursor:"cursor"}})),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return e.resetArray()},href:"#"},"New Array")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return e.mergeSort()},href:"#"},"Merge Sort")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return e.quickSort()},href:"#"},"Quick Sort")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return e.bubbleSort()},href:"#"},"Bubble Sort")))),a.a.createElement("div",{className:"menu-toggle"},a.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"}))),a.a.createElement("div",{className:"array-container",key:"Array"},r.map((function(e,r){return a.a.createElement("div",{className:"array-bar",key:r,style:{backgroundColor:"turquoise",height:"".concat(e,"px")}})})))]}}]),t}(a.a.Component);function N(e,r){return e=Math.ceil(e),r=Math.floor(r),Math.floor(Math.random()*(r-e+1))+e}function S(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}var w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19);l.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.856069f4.chunk.js.map