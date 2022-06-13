var LUX=LUX||{};LUX.customerid="245803707";LUX.samplerate=1;!function(){"use strict";function e(){return Date.now?Date.now():+new Date}var t=e();function n(e,t,n){return void 0!==e[t]?e[t]:n}var r=1,o=2,a=3,i=4,u=5,c=6,s=7,d=8,f=9,l=10,m=11,v=21,g=22,p=23,h=24,E=25,y=26,w=41,T=42,b=43,M=51,S=52,k=53,L=54,U=55,x=56,N=57,I=71,C=72,B=function(){function t(){this.events=[]}return t.prototype.logEvent=function(t,n){void 0===n&&(n=[]),this.events.push([e(),t,n])},t.prototype.getEvents=function(){return this.events},t}(),P=1,D=2,O=4,j=8,H=16,R=32,X=64,_=128,F=256;function W(e,t){return e|t}var q=window.performance||{},z=q.timing||{};function A(e){if("function"==typeof q.getEntriesByType){if((t=q.getEntriesByType(e))&&t.length)return t}else if("function"==typeof q.webkitGetEntriesByType){var t;if((t=q.webkitGetEntriesByType(e))&&t.length)return t}return[]}var G=window.LUX||{},J=G.ns?G.ns:e(),Y=t;G=function(){var K,Q,V="301",Z=new B,$={auto:Q=n(K=G,"auto",!0),beaconUrl:n(K,"beaconUrl","https://lux.speedcurve.com/lux/"),customerid:n(K,"customerid",void 0),debug:n(K,"debug",!1),errorBeaconUrl:n(K,"errorBeaconUrl","https://lux.speedcurve.com/error/"),jspagelabel:n(K,"jspagelabel",void 0),label:n(K,"label",void 0),maxErrors:n(K,"maxErrors",5),maxMeasureTime:n(K,"maxMeasureTime",6e4),measureUntil:n(K,"measureUntil","onload"),minMeasureTime:n(K,"minMeasureTime",0),samplerate:n(K,"samplerate",100),sendBeaconOnPageHidden:n(K,"sendBeaconOnPageHidden",Q),trackErrors:n(K,"trackErrors",!0)};Z.logEvent(r,[V]);var ee=0;function te(e){$.trackErrors&&(ee++,e&&void 0!==e.filename&&void 0!==e.message&&(e.filename.indexOf("/lux.js?")>-1||e.message.indexOf("LUX")>-1||ee<=$.maxErrors&&De())&&((new Image).src=$.errorBeaconUrl+"?v="+"301&id="+_e()+"&fn="+encodeURIComponent(e.filename)+"&ln="+e.lineno+"&cn="+e.colno+"&msg="+encodeURIComponent(e.message)+"&l="+encodeURIComponent(ft())+(ze()?"&ct="+ze():"")+"&HN="+encodeURIComponent(document.location.hostname)+"&PN="+encodeURIComponent(document.location.pathname)))}window.addEventListener("error",te);var ne=("object"==typeof window.LUX_al?window.LUX_al:[]).slice();if("function"==typeof PerformanceObserver){var re=new PerformanceObserver((function(e){e.getEntries().forEach((function(e){Z.logEvent(T,[e]),"longtask"===e.entryType&&-1!==ne.indexOf(e)||ne.push(e)}))}));try{"function"==typeof PerformanceLongTaskTiming&&re.observe({type:"longtask",buffered:!0}),"function"==typeof LargestContentfulPaint&&re.observe({type:"largest-contentful-paint",buffered:!0}),"function"==typeof PerformanceElementTiming&&re.observe({type:"element",buffered:!0}),"function"==typeof PerformancePaintTiming&&re.observe({type:"paint",buffered:!0}),"function"==typeof LayoutShift&&re.observe({type:"layout-shift",buffered:!0})}catch(e){Z.logEvent(M,[e])}}var oe,ae,ie=0,ue=void 0!==G.gaMarks?G.gaMarks:[],ce=void 0!==G.gaMeasures?G.gaMeasures:[],se={},de={},fe=0,le=0,me=0,ve=1,ge="LUX_start",pe="LUX_end",he=ct(),Ee=st(he),ye=8190;De()?Z.logEvent(v,[$.samplerate]):Z.logEvent(g,[$.samplerate]);var we,Te=0;z.navigationStart?(J=z.navigationStart,Te=G.ns?G.ns-J:0):(Z.logEvent(I),ie=W(ie,D)),Z.logEvent(w,[J]);var be,Me=["click","mousedown","keydown","touchstart","pointerdown"],Se={passive:!0,capture:!0};function ke(e){we||(we=Math.round(e),Me.forEach((function(e){removeEventListener(e,Le,Se)})))}function Le(e){var t=!1;try{t=e.cancelable}catch(e){return void Z.logEvent(S)}if(t){var n=Ue(!0),r=e.timeStamp;if(r>152e7&&(n=Number(new Date)),r>n)return;var o=n-r;"pointerdown"==e.type?function(e){function t(){ke(e),r()}function n(){r()}function r(){window.removeEventListener("pointerup",t,Se),window.removeEventListener("pointercancel",n,Se)}window.addEventListener("pointerup",t,Se),window.addEventListener("pointercancel",n,Se)}(o):ke(o)}}function Ue(t){var n=e()-J,r=Ne(ge);return r&&!t?n-r.startTime:q.now?q.now():n}function xe(e){if(Z.logEvent(i,[e]),q.mark)return q.mark(e);if(q.webkitMark)return q.webkitMark(e);ie=W(ie,O);var t={name:e,detail:null,entryType:"mark",startTime:Ue(),duration:0};return ue.push(t),t}function Ne(e){return function(e,t){if(t)for(var n=t.length-1;n>=0;n--){var r=t[n];if(e===r.name)return r}return}(e,Ie())}function Ie(){var e=A("mark");return e.length?e:ue}function Ce(){var e={},t=Ne(ge),n=Ne(pe),r=Ie();r&&r.forEach((function(r){if(r!==t&&r!==n){var o=r.name,a=o!==ge&&t?t.startTime:0,i=Math.round(r.startTime-a);i<0||(void 0===e[o]?e[o]=i:e[o]=Math.max(i,e[o]))}}));var o,a=(o=A("measure")).length?o:ce;a&&a.forEach((function(n){if(!(t&&n.startTime<t.startTime)){var r=n.name,o=Math.round(n.duration);void 0===e[r]?e[r]=o:e[r]=Math.max(o,e[r])}}));var i=[];return Object.keys(e).forEach((function(t){i.push(t+"|"+e[t])})),i.join(",")}function Be(){if("function"!=typeof PerformanceLongTaskTiming)return"";var e="",t={},n={};if(ne.length){var r=Ne(ge),o=r?r.startTime:0,a=z.loadEventEnd-z.navigationStart;if(r){var i=Ne(pe);i&&(a=i.startTime)}for(var u=0;u<ne.length;u++){var c=ne[u];if("longtask"===c.entryType){var s=Math.round(c.duration);if(c.startTime<o)s-=o-c.startTime;else if(c.startTime>=a)continue;Z.logEvent(b,[c]);var d=c.attribution[0].name;t[d]||(t[d]=0,n[d]=""),t[d]+=s,n[d]+=","+Math.round(c.startTime)+"|"+s}}}var f=void 0!==t.script?"script":"unknown";void 0===t[f]&&(t[f]=0,n[f]="");var l=function(e){for(var t=0,n=Xe(),r=0===n,o=[],a=e.split(","),i=0;i<a.length;i++){var u=a[i].split("|");if(2===u.length){var c=parseInt(u[0]),s=parseInt(u[1]);o.push(s),t=s>t?s:t,!r&&c>n&&(c-n>5e3?r=!0:n=c+s)}}var d=o.length,f=function(e){if(0===e.length)return 0;var t=Math.floor(e.length/2);return e.sort((function(e,t){return e-t})),e.length%2?e[t]:Math.round((e[t-1]+e[t])/2)}(o);return{count:d,median:f,max:t,fci:n}}(n[f]),m=",n|"+l.count+",d|"+l.median+",x|"+l.max+(0===l.fci?"":",i|"+l.fci);return e+="s|"+t[f]+m+n[f]}function Pe(){var e=[];for(var t in se)e.push(t+"|"+se[t]);return e.join(",")}function De(){if(void 0===Ee||void 0===$.samplerate)return!1;var e=(""+Ee).substr(-2);return parseInt(e)<$.samplerate}function Oe(){var e=[];for(var t in de){var n=""+de[t];t=t.replace(/,/g,"").replace(/\|/g,""),n=n.replace(/,/g,"").replace(/\|/g,""),e.push(t+"|"+n)}return encodeURIComponent(e.join(","))}function je(){var e=Ae();if(!e)return function(){for(var e=document.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++){var o=e[n];!o.src||o.async||o.defer||t++}return t}();for(var t=document.getElementsByTagName("script"),n=0,r=0,o=t.length;r<o;r++){var a=t[r];!a.src||a.async||a.defer||0==(4&a.compareDocumentPosition(e))||n++}return n}function He(e){for(var t=document.getElementsByTagName(e),n=0,r=0,o=t.length;r<o;r++){var a=t[r];try{n+=a.innerHTML.length}catch(a){return Z.logEvent(k),-1}}return n}function Re(){var e="",t=J,n=Ne(ge),r=Ne(pe);if(n&&r){var o=Math.round(n.startTime);e=(t+=o)+"fs0ls"+(s=Math.round(r.startTime)-o)+"le"+s}else if(q.timing){var a=z,i=function(){if(q.timing){var e=z,t=e.navigationStart,n=void 0;if(t){var r=A("paint");if(r.length)for(var o=0;o<r.length;o++){var a=r[o];if("first-paint"===a.name){n=Math.round(a.startTime);break}}else if(window.chrome&&"function"==typeof window.chrome.loadTimes){var i=window.chrome.loadTimes();i&&(n=Math.round(1e3*i.firstPaintTime-t))}else e.msFirstPaint&&(n=Math.round(e.msFirstPaint-t))}if(n)return n}return Z.logEvent(C),null}(),u=Xe(),c=function(){if(ne.length)for(var e=ne.length-1;e>=0;e--){var t=ne[e];if("largest-contentful-paint"===t.entryType)return Z.logEvent(b,[t]),Math.round(t.startTime)}return 0}();e=t+(a.redirectStart?"rs"+(a.redirectStart-t):"")+(a.redirectEnd?"re"+(a.redirectEnd-t):"")+(a.fetchStart?"fs"+(a.fetchStart-t):"")+(a.domainLookupStart?"ds"+(a.domainLookupStart-t):"")+(a.domainLookupEnd?"de"+(a.domainLookupEnd-t):"")+(a.connectStart?"cs"+(a.connectStart-t):"")+(a.secureConnectionStart?"sc"+(a.secureConnectionStart-t):"")+(a.connectEnd?"ce"+(a.connectEnd-t):"")+(a.requestStart?"qs"+(a.requestStart-t):"")+(a.responseStart?"bs"+(a.responseStart-t):"")+(a.responseEnd?"be"+(a.responseEnd-t):"")+(a.domLoading?"ol"+(a.domLoading-t):"")+(a.domInteractive?"oi"+(a.domInteractive-t):"")+(a.domContentLoadedEventStart?"os"+(a.domContentLoadedEventStart-t):"")+(a.domContentLoadedEventEnd?"oe"+(a.domContentLoadedEventEnd-t):"")+(a.domComplete?"oc"+(a.domComplete-t):"")+(a.loadEventStart?"ls"+(a.loadEventStart-t):"")+(a.loadEventEnd?"le"+(a.loadEventEnd-t):"")+(i?"sr"+i:"")+(u?"fc"+u:"")+(c?"lc"+c:"")}else if(r){var s;e=t+"fs0ls"+(s=Math.round(r.startTime))+"le"+s}return e}function Xe(){for(var e=A("paint"),t=0;t<e.length;t++){var n=e[t];if("first-contentful-paint"===n.name)return Math.round(n.startTime)}return 0}function _e(){if(void 0!==G.customerid)return G.customerid;var e=Fe("/js/lux.js");return e?(G.customerid=function(e,t){for(var n=e.split("?")[1].split("&"),r=0,o=n.length;r<o;r++){var a=n[r].split("=");if(t===a[0])return a[1]}return}(e.src,"id"),G.customerid):""}function Fe(e){for(var t=document.getElementsByTagName("script"),n=0,r=t.length;n<r;n++){var o=t[n];if(o.src&&-1!==o.src.indexOf(e))return o}return null}function We(e){var t=0;if(e.parentNode)for(;e=e.parentNode;)t++;return t}function qe(){var e=A("navigation");return e.length&&e[0].encodedBodySize?e[0].encodedBodySize:0}function ze(){var e=navigator.connection,t="";return e&&e.effectiveType&&(t="slow-2g"===(t=e.effectiveType)?"Slow 2G":"2g"===t||"3g"===t||"4g"===t||"5g"===t?t.toUpperCase():t.charAt(0).toUpperCase()+t.slice(1)),t}function Ae(e){var t;if(e||(e=document.body),e){var n=e.children;if(n)for(var r=0,o=n.length;r<o;r++){var a=n[r];Ge(a)&&(t=a)}}return t?Ae(t):e}function Ge(e){var t=document.documentElement.clientHeight,n=document.documentElement.clientWidth,r=function(e){var t=0,n=0;for(;e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return[t,n]}(e);return r[0]>=0&&r[1]>=0&&r[0]<n&&r[1]<t&&e.offsetWidth>0&&e.offsetHeight>0}function Je(){xe(pe)}function Ye(){Ke(),ae=window.setTimeout((function(){ie=W(ie,R),Qe()}),$.maxMeasureTime-Ue())}function Ke(){ae&&clearTimeout(ae)}function Qe(){Ke();var e=_e();if(e&&he&&De()&&!fe){Z.logEvent(f);var n=Ne(ge),r=Ne(pe);(!n||r&&r.startTime<n.startTime)&&Je();var o=Ce(),a=function(){var e=[];if(ne.length)for(var t=0;t<ne.length;t++){var n=ne[t];"element"===n.entryType&&n.identifier&&n.startTime&&(Z.logEvent(b,[n]),e.push(n.identifier+"|"+Math.round(n.startTime)))}return e.join(",")}(),i=Oe(),u="";me||(u=Pe());var c=Be(),s=function(){if("function"!=typeof LayoutShift)return!1;for(var e=0,t=0;t<ne.length;t++){var n=ne[t];"layout-shift"!==n.entryType||n.hadRecentInput||(Z.logEvent(b,[n]),e+=n.value)}return e.toFixed(6)}(),d=function(){var e="";if(q.getEntriesByName){var n=Fe("/js/lux.js");if(n){var r=q.getEntriesByName(n.src);if(r&&r.length){var o=r[0],a=Math.round(o.domainLookupEnd-o.domainLookupStart),i=Math.round(o.connectEnd-o.connectStart),u=Math.round(o.responseStart-o.requestStart),c=Math.round(o.responseEnd-o.responseStart),s=a+i+u+c,d=Y-t,f=o.encodedBodySize?o.encodedBodySize:0;e="d"+a+"t"+i+"f"+u+"c"+c+"n"+s+"e"+d+"r"+$.samplerate+(f?"x"+f:"")+(Te?"l"+Te:"")+"s"+(t-J)}}}return e}();document.visibilityState&&"visible"!==document.visibilityState&&(ie=W(ie,j));var l,m,v,g=$.beaconUrl+"?v="+"301&id="+e+"&sid="+he+"&uid="+Ee+(i?"&CD="+i:"")+"&l="+encodeURIComponent(ft()),E=He("script"),y=He("style"),w=(le?"":"&NT="+Re())+(ve?"&LJS="+d:"")+"&PS=ns"+function(){for(var e=document.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++)e[n].src&&t++;return t}()+"bs"+je()+(E>-1?"is"+E:"")+"ss"+function(){for(var e=document.getElementsByTagName("link"),t=0,n=0,r=e.length;n<r;n++){var o=e[n];o.href&&"stylesheet"==o.rel&&t++}return t}()+"bc"+function(){for(var e=0,t=document.getElementsByTagName("link"),n=0,r=t.length;n<r;n++){var o=t[n];o.href&&"stylesheet"===o.rel&&0!==o.href.indexOf("data:")&&(o.onloadcssdefined||"print"===o.media||"style"===o.as||"function"==typeof o.onload&&"all"===o.media||e++)}return e}()+(y>-1?"ic"+y:"")+"ia"+function(){var e=document.getElementsByTagName("img"),t=[];if(e)for(var n=0,r=e.length;n<r;n++){var o=e[n];Ge(o)&&t.push(o)}return t}().length+"it"+document.getElementsByTagName("img").length+"dd"+function(){for(var e=document.getElementsByTagName("*"),t=e.length,n=0;t--;)n+=We(e[t]);return Math.round(n/e.length)}()+"nd"+document.getElementsByTagName("*").length+"vh"+document.documentElement.clientHeight+"vw"+document.documentElement.clientWidth+"dh"+(l=document,m=l.body,v=l.documentElement,Math.max(m?m.scrollHeight:0,m?m.offsetHeight:0,v?v.clientHeight:0,v?v.scrollHeight:0,v?v.offsetHeight:0)+"dw")+function(e){var t=e.body,n=e.documentElement;return Math.max(t?t.scrollWidth:0,t?t.offsetWidth:0,n?n.clientWidth:0,n?n.scrollWidth:0,n?n.offsetWidth:0)}(document)+(qe()?"ds"+qe():"")+(ze()?"ct"+ze()+"_":"")+"er"+ee+"nt"+(q.navigation&&void 0!==q.navigation.type?q.navigation.type:"")+(navigator.deviceMemory?"dm"+Math.round(navigator.deviceMemory):"")+(u?"&IX="+u:"")+(we?"&FID="+we:"")+(c?"&CPU="+c:"")+(ie?"&fl="+ie:"")+(a?"&ET="+a:"")+"&HN="+encodeURIComponent(document.location.hostname)+(!1!==s?"&CLS="+s:"")+"&PN="+encodeURIComponent(document.location.pathname),T="";if(o){var M=g.length+w.length;if(M+o.length<=ye)w+="&UT="+o;else{var S=ye-M,k=o.lastIndexOf(",",S);w+="&UT="+o.substring(0,k),T=o.substring(k+1)}}var L=g+w;Z.logEvent(p,[L]),$e(L),fe=1,le=1,me=u?1:0;for(var U=ye-g.length;T;){var x="";if(T.length<=U)x=T,T="";else-1===(k=T.lastIndexOf(",",U))&&(k=T.indexOf(",")),-1===k?(x=T,T=""):(x=T.substring(0,k),T=T.substring(k+1));var N=g+"&UT="+x;Z.logEvent(h,[N]),$e(N)}}}function Ve(){var e=_e();if(e&&he&&De()&&!me&&fe){var t=Pe();if(t){var n=Oe(),r="?v=301&id="+e+"&sid="+he+"&uid="+Ee+(n?"&CD="+n:"")+"&l="+encodeURIComponent(ft())+"&IX="+t+(we?"&FID="+we:"")+"&HN="+encodeURIComponent(document.location.hostname)+"&PN="+encodeURIComponent(document.location.pathname),o=$.beaconUrl+r;Z.logEvent(E,[o]),$e(o),me=1}}}function Ze(){var e=_e();if(e&&he&&De()&&fe){var t=Oe();if(t){var n="?v=301&id="+e+"&sid="+he+"&uid="+Ee+"&CD="+t+"&l="+encodeURIComponent(ft())+"&HN="+encodeURIComponent(document.location.hostname)+"&PN="+encodeURIComponent(document.location.pathname),r=$.beaconUrl+n;Z.logEvent(y,[r]),$e(r)}}}function $e(e){(new Image).src=e}function et(e){if(e.id)return e.id;for(var t,n=e;n.parentNode&&n.parentNode.tagName;){if((n=n.parentNode).hasAttribute("data-sctrack"))return n.getAttribute("data-sctrack");n.id&&!t&&(t=n.id)}var r="INPUT"===e.tagName&&"submit"===e.type,o="BUTTON"===e.tagName,a="A"===e.tagName;return r&&e.value?e.value:(o||a)&&e.innerText?e.innerText:t||""}function tt(){void 0===se.s&&(se.s=Math.round(Ue()))}function nt(e){if(ut(),void 0===se.k){if(se.k=Math.round(Ue()),e&&e.target){var t=et(e.target);t&&(se.ki=t)}Ve()}}function rt(e){if(ut(),void 0===se.c){se.c=Math.round(Ue());var t=null;try{e&&e.target&&(t=e.target)}catch(e){Z.logEvent(L),t=null}if(t){e.clientX&&(se.cx=e.clientX,se.cy=e.clientY);var n=et(e.target);n&&(se.ci=n)}Ve()}}function ot(e,t,n){void 0===n&&(n=!1),window.addEventListener?window.addEventListener(e,t,n):window.attachEvent&&window.attachEvent("on"+e,t)}function at(e,t,n){void 0===n&&(n=!1),window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent&&window.detachEvent("on"+e,t)}function it(){ot("scroll",tt),ot("keypress",nt),ot("mousedown",rt)}function ut(){at("scroll",tt),at("keypress",nt),at("mousedown",rt)}function ct(e){return void 0===e&&(e=!1),e?"".concat(Number(new Date),"00000"):"".concat(Number(new Date)).concat((t=String(Math.round(1e5*Math.random())),((n="00000")+t).slice(-n.length)));var t,n}function st(e){var t=function(e){try{for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(e===r[0].trim())return unescape(r[1])}}catch(e){Z.logEvent(U)}return}("lux_uid");if(!t||t.length<11)t=e;else{var n=parseInt(t.substring(0,10));Number(new Date)/1e3-n>86400&&(t=e)}return dt(t),t}function dt(e){return function(e,t,n){try{document.cookie=e+"="+escape(t)+(n?"; max-age="+n:"")+"; path=/; SameSite=Lax"}catch(e){Z.logEvent(x)}}("lux_uid",e,1800),e}function ft(){if(void 0!==G.label)return ie=W(ie,_),G.label;if(void 0!==G.jspagelabel){var e=Function('"use strict"; return '.concat(G.jspagelabel));try{var t=e();if(t)return ie=W(ie,F),t}catch(e){Z.logEvent(N,[G.jspagelabel,e])}}return ie=W(ie,X),document.title}if(Me.forEach((function(e){window.addEventListener(e,Le,Se)})),$.auto){var lt=function(){var e=Ue(),t=$.minMeasureTime-e;t<=0?(Z.logEvent(m,[e,$.minMeasureTime]),"complete"===document.readyState?Qe():ot("load",(function(){setTimeout(Qe,200)}))):setTimeout(lt,t)};lt()}$.sendBeaconOnPageHidden&&(be=function(){ie=W(ie,H),Z.logEvent(l),Qe(),Ve()},"onpagehide"in self?ot("pagehide",be,!0):(ot("unload",be,!0),ot("beforeunload",be,!0)),ot("visibilitychange",(function(){"hidden"===document.visibilityState&&be()}),!0)),it(),Ye();var mt=$;function vt(e){var t=e[0],n=e.slice(1);"function"==typeof mt[t]&&mt[t].apply(mt,n)}return mt.mark=xe,mt.measure=function(e,t,n){if(Z.logEvent(u,[e,t,n]),void 0===t&&Ne(ge)&&(t=ge),q.measure)return t?n?q.measure(e,t,n):q.measure(e,t):q.measure(e);if(q.webkitMeasure)return q.webkitMeasure(e,t,n);var r=0,o=Ue();if(t){var a=Ne(t);if(a)r=a.startTime;else{if(!z[t])throw new DOMException("Failed to execute 'measure' on 'Performance': The mark '".concat(t,"' does not exist"));r=z[t]-z.navigationStart}}if(n){var i=Ne(n);if(i)o=i.startTime;else{if(!z[n])throw new DOMException("Failed to execute 'measure' on 'Performance': The mark '".concat(n,"' does not exist"));o=z[n]-z.navigationStart}}var c={name:e,detail:null,entryType:"measure",startTime:r,duration:o-r};return ce.push(c),c},mt.init=function(){Ne(pe)&&(Z.logEvent(a),se={},ut(),it(),le=0,fe=0,me=0,ve=0,he=ct(),Ee=st(he),ne.splice(0),ee=0,ie=W(ie=0,P),xe(ge),Ye())},mt.markLoadTime=Je,mt.send=function(){Z.logEvent(s),Qe()},mt.addData=function(e,t){Z.logEvent(c,[e,t]);var n=typeof t;"string"!==typeof e||"string"!==n&&"number"!==n&&"boolean"!==n||(de[e]=t),fe&&(oe&&clearTimeout(oe),oe=window.setTimeout(Ze,100))},mt.getSessionId=function(){return Ee},mt.getDebug=function(){return Z.getEvents()},mt.forceSample=function(){Z.logEvent(d),dt(ct(!0))},mt.doUpdate=function(){},mt.cmd=vt,mt.version=V,mt.ae=[],mt.al=[],G.ac&&G.ac.length&&G.ac.forEach(vt),void 0!==window.LUX_ae&&window.LUX_ae.forEach(te),Z.logEvent(o),mt}(),window.LUX=G,Y=e()}();
//# sourceMappingURL=lux.min.js.map
