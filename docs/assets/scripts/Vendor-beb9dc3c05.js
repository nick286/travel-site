!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function s(e,t){return(void 0===e?"undefined":r(e))===t}var i=[],a={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},o=function(){};o.prototype=a,o=new o;var c=[],u=t.documentElement,l="svg"===u.nodeName.toLowerCase();o.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,a,u;for(var l in i)if(i.hasOwnProperty(l)){if(e=[],(t=i[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)1===(u=e[a].split(".")).length?o[u[0]]=r:(!o[u[0]]||o[u[0]]instanceof Boolean||(o[u[0]]=new Boolean(o[u[0]])),o[u[0]][u[1]]=r),c.push((r?"":"no-")+u.join("-"))}}(),function(e){var t=u.className,n=o._config.classPrefix||"";if(l&&(t=t.baseVal),o._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}o._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?u.className.baseVal=t:u.className=t)}(c),delete a.addTest,delete a.addAsyncTest;for(var f=0;f<o._q.length;f++)o._q[f]();e.Modernizr=o}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(s,i,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(e,t,n,r){var s,i,a;return"saveData"===E.algorithm?e>2.7?a=n+1:(i=(t-n)*(s=Math.pow(e-.6,1.5)),r&&(i+=.1*s),a=e+i):a=n>1?Math.sqrt(e*t):e,a>n}function u(e,t){return e.res-t.res}function l(e,t){var n,r,s;if(e&&t)for(s=m.parseSet(t),e=m.makeUrl(e),n=0;n<s.length;n++)if(e===m.makeUrl(s[n].url)){r=s[n];break}return r}i.createElement("picture");var f,d,p,m={},h=!1,g=function(){},A=i.createElement("img"),v=A.getAttribute,y=A.setAttribute,b=A.removeAttribute,z=i.documentElement,w={},E={algorithm:""},C=navigator.userAgent,S=/rident/.test(C)||/ecko/.test(C)&&C.match(/rv\:(\d+)/)&&RegExp.$1>35,x="currentSrc",T=/\s+\+?\d+(e\d+)?w/,M=/(\([^)]+\))?\s*(.+)/,L=s.picturefillCFG,R="font-size:100%!important;",P=!0,_={},B={},N=s.devicePixelRatio,W={px:1,in:96},$=i.createElement("a"),D=!1,k=/^[ \t\n\r\u000c]+/,I=/^[, \t\n\r\u000c]+/,F=/^[^ \t\n\r\u000c]+/,O=/[,]+$/,U=/^\d+$/,H=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,j=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Q=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},q=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=Q(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var s;if(!(n in _))if(_[n]=!1,r&&(s=n.match(e)))_[n]=s[1]*W[s[2]];else try{_[n]=new Function("e",t(n))(W)}catch(e){}return _[n]}}(),G=function(e,t){return e.w?(e.cWidth=m.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},V=function(e){if(h){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||m.qsa(s.context||i,s.reevaluate||s.reselect?m.sel:m.selShort),r=t.length){for(m.setupRun(s),D=!0,n=0;n<r;n++)m.fillImg(t[n],s);m.teardownRun(s)}}};s.console&&console.warn,x in A||(x="src"),w["image/jpeg"]=!0,w["image/gif"]=!0,w["image/png"]=!0,w["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),m.ns=("pf"+(new Date).getTime()).substr(0,9),m.supSrcset="srcset"in A,m.supSizes="sizes"in A,m.supPicture=!!s.HTMLPictureElement,m.supSrcset&&m.supPicture&&!m.supSizes&&function(e){A.srcset="data:,a",e.src="data:,a",m.supSrcset=A.complete===e.complete,m.supPicture=m.supSrcset&&m.supPicture}(i.createElement("img")),m.supSrcset&&!m.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=i.createElement("img"),n=function(){2===t.width&&(m.supSizes=!0),d=m.supSrcset&&!m.supSizes,h=!0,setTimeout(V)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():h=!0,m.selShort="picture>img,img[srcset]",m.sel=m.selShort,m.cfg=E,m.DPR=N||1,m.u=W,m.types=w,m.setSize=g,m.makeUrl=Q(function(e){return $.href=e,$.href}),m.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},m.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?m.matchesMedia=function(e){return!e||matchMedia(e).matches}:m.matchesMedia=m.mMQ,m.matchesMedia.apply(this,arguments)},m.mMQ=function(e){return!e||q(e)},m.calcLength=function(e){var t=q(e,!0)||!1;return t<0&&(t=!1),t},m.supportsType=function(e){return!e||w[e]},m.parseSize=Q(function(e){var t=(e||"").match(M);return{media:t&&t[1],length:t&&t[2]}}),m.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,s,o,c,u,l,f,d=!1,m={};for(s=0;s<a.length;s++)c=(o=a[s])[o.length-1],u=o.substring(0,o.length-1),l=parseInt(u,10),f=parseFloat(u),U.test(u)&&"w"===c?((e||n)&&(d=!0),0===l?d=!0:e=l):H.test(u)&&"x"===c?((e||n||r)&&(d=!0),f<0?d=!0:n=f):U.test(u)&&"h"===c?((r||n)&&(d=!0),0===l?d=!0:r=l):d=!0;d||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function s(){for(n(k),c="",u="in descriptor";;){if(l=e.charAt(d),"in descriptor"===u)if(o(l))c&&(a.push(c),c="",u="after descriptor");else{if(","===l)return d+=1,c&&a.push(c),void r();if("("===l)c+=l,u="in parens";else{if(""===l)return c&&a.push(c),void r();c+=l}}else if("in parens"===u)if(")"===l)c+=l,u="in descriptor";else{if(""===l)return a.push(c),void r();c+=l}else if("after descriptor"===u)if(o(l));else{if(""===l)return void r();u="in descriptor",d-=1}d+=1}}for(var i,a,c,u,l,f=e.length,d=0,p=[];;){if(n(I),d>=f)return p;i=n(F),a=[],","===i.slice(-1)?(i=i.replace(O,""),r()):s()}}(e.srcset,e)),e.cands},m.getEmValue=function(){var e;if(!f&&(e=i.body)){var t=i.createElement("div"),n=z.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",z.style.cssText=R,e.style.cssText=R,e.appendChild(t),f=t.offsetWidth,e.removeChild(t),f=parseFloat(f,10),z.style.cssText=n,e.style.cssText=r}return f||16},m.calcListLength=function(e){if(!(e in B)||E.uT){var t=m.calcLength(function(e){function t(e){return!!(u.test(e)&&parseFloat(e)>=0)||!!l.test(e)||"0"===e||"-0"===e||"+0"===e}var n,r,s,i,a,c,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(r=function(e){function t(){s&&(i.push(s),s="")}function n(){i[0]&&(a.push(i),i=[])}for(var r,s="",i=[],a=[],c=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(o(r)){if(e.charAt(u-1)&&o(e.charAt(u-1))||!s){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=r,u+=1}}}(e)).length,n=0;n<s;n++)if(i=r[n],a=i[i.length-1],t(a)){if(c=a,i.pop(),0===i.length)return c;if(i=i.join(" "),m.matchesMedia(i))return c}return"100vw"}(e));B[e]=t||W.width}return B[e]},m.setRes=function(e){var t;if(e)for(var n=0,r=(t=m.parseSet(e)).length;n<r;n++)G(t[n],e.sizes);return t},m.setRes.res=G,m.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,f,d,p,h=t[m.ns],g=m.DPR;if(o=h.curSrc||t[x],(f=h.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[m.ns].sets)&&n[n.length-1]),(r=l(t,n))&&(t=m.makeUrl(t),e[m.ns].curSrc=t,e[m.ns].curCan=r,r.res||G(r,r.set.sizes)),r}(t,o,e[0].set))&&f.set===e[0].set&&((p=S&&!t.complete&&f.res-.1>g)||(f.cached=!0,f.res>=g&&(a=f))),!a)for(e.sort(u),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=g){a=e[s=r-1]&&(p||o!==m.makeUrl(n.url))&&c(e[s].res,n.res,g,e[s].cached)?e[s]:n;break}a&&(d=m.makeUrl(a.url),h.curSrc=d,h.curCan=a,d!==o&&m.setSrc(t,a),m.setSize(t))}},m.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},m.getSet=function(e){var t,n,r,s=!1,i=e[m.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&m.matchesMedia(n.media)&&(r=m.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},m.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[m.ns];(void 0===c.src||n.src)&&(c.src=v.call(e,"src"),c.src?y.call(e,"data-pfsrc",c.src):b.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!m.supSrcset||e.srcset)&&(r=v.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[m.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:v.call(e,"sizes")},c.sets.push(s),(i=(d||c.src)&&T.test(c.srcset||""))||!c.src||l(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!m.supSrcset||i&&!m.supSizes),a&&m.supSrcset&&!c.supported&&(r?(y.call(e,"data-pfsrcset",r),e.srcset=""):b.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==m.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},m.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[m.ns]||(e[m.ns]={}),n=e[m.ns],(r||n.evaled!==p)&&(n.parsed&&!t.reevaluate||m.parseSets(e,e.parentNode,t),n.supported?n.evaled=p:function(e){var t,n=m.getSet(e),r=!1;"pending"!==n&&(r=p,n&&(t=m.setRes(n),m.applySetCandidate(t,e))),e[m.ns].evaled=r}(e))},m.setupRun=function(){D&&!P&&N===s.devicePixelRatio||(P=!1,N=s.devicePixelRatio,_={},B={},m.DPR=N||1,W.width=Math.max(s.innerWidth||0,z.clientWidth),W.height=Math.max(s.innerHeight||0,z.clientHeight),W.vw=W.width/100,W.vh=W.height/100,p=[W.height,W.width,N].join("-"),W.em=m.getEmValue(),W.rem=W.em)},m.supPicture?(V=g,m.fillImg=g):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var s=i.readyState||"";r=setTimeout(n,"loading"===s?200:999),i.body&&(m.fillImgs(),(e=e||t.test(s))&&clearTimeout(r))},r=setTimeout(n,i.body?9:99),a=z.clientHeight;j(s,"resize",function(e,t){var n,r,s=function(){var i=new Date-r;i<t?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}}(function(){P=Math.max(s.innerWidth||0,z.clientWidth)!==W.width||z.clientHeight!==a,a=z.clientHeight,P&&m.fillImgs()},99)),j(i,"readystatechange",n)}(),m.picturefill=V,m.fillImgs=V,m.teardownRun=g,V._=m,s.picturefillCFG={pf:m,push:function(e){var t=e.shift();"function"==typeof m[t]?m[t].apply(m,e):(E[t]=e[0],D&&m.fillImgs({reselect:!0}))}};for(;L&&L.length;)s.picturefillCFG.push(L.shift());s.picturefill=V,"object"==typeof e&&"object"==typeof e.exports?e.exports=V:void 0!==(r=function(){return V}.call(t,n,t,e))&&(e.exports=r),m.supPicture||(w["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){w[e]=!1,V()},n.onload=function(){w[e]=1===n.width,V()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,s=t.documentElement,i=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,c=e.setTimeout,u=e.requestAnimationFrame||c,l=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},A=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&v(e,t),d.forEach(function(n){e[r](n,t)})},y=function(e,r,s,i,a){var o=t.createEvent("CustomEvent");return s||(s={}),s.instance=n,o.initCustomEvent(r,!i,!a,s),e.dispatchEvent(o),o},b=function(t,n){var s;!a&&(s=e.picturefill||r.pf)?s({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=function(){var e,n,r=[],s=[],i=r,a=function(){var t=i;for(i=r.length?s:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,s){e&&!s?r.apply(this,arguments):(i.push(r),n||(n=!0,(t.hidden?c:u)(a)))};return o._lsFlush=a,o}(),C=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E(function(){e.apply(t,n)})}},S=function(e){var t,n=0,r=666,s=function(){t=!1,n=i.now(),e()},a=l?function(){l(s,{timeout:r}),666!==r&&(r=666)}:C(function(){c(s)},!0);return function(e){var s;(e=!0===e)&&(r=44),t||(t=!0,(s=125-(i.now()-n))<0&&(s=0),e||s<9&&l?a():c(a,s))}},x=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?c(s,99-e):(l||r)(r)};return function(){n=i.now(),t||(t=c(s,99))}},T=function(){var a,u,l,d,p,w,T,L,R,P,_,B,N,W,$=/^img$/i,D=/^iframe$/i,k="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,F=0,O=-1,U=function(e){F--,e&&e.target&&v(e.target,U),(!e||F<0||!e.target)&&(F=0)},H=function(e,n){var r,i=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(L-=n,_+=n,R-=n,P+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=s;)(a=(z(i,"opacity")||1)>0)&&"visible"!=z(i,"overflow")&&(r=i.getBoundingClientRect(),a=P>r.left&&R<r.right&&_>r.top-1&&L<r.bottom+1);return a},j=function(){var e,i,o,c,l,f,p,m,h,g=n.elements;if((d=r.loadMode)&&F<8&&(e=g.length)){i=0,O++,null==N&&("expand"in r||(r.expand=s.clientHeight>500&&s.clientWidth>500?500:370),B=r.expand,N=B*r.expFactor),I<N&&F<1&&O>2&&d>2&&!t.hidden?(I=N,O=0):I=d>1&&O>1&&F<6?B:0;for(;i<e;i++)if(g[i]&&!g[i]._lazyRace)if(k)if((m=g[i].getAttribute("data-expand"))&&(f=1*m)||(f=I),h!==f&&(w=innerWidth+f*W,T=innerHeight+f,p=-1*f,h=f),o=g[i].getBoundingClientRect(),(_=o.bottom)>=p&&(L=o.top)<=T&&(P=o.right)>=p*W&&(R=o.left)<=w&&(_||P||R||L)&&(r.loadHidden||"hidden"!=z(g[i],"visibility"))&&(u&&F<3&&!m&&(d<3||O<4)||H(g[i],f))){if(X(g[i]),l=!0,F>9)break}else!l&&u&&!c&&F<4&&O<4&&d>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(_||P||R||L||"auto"!=g[i].getAttribute(r.sizesAttr)))&&(c=a[0]||g[i]);else X(g[i]);c&&!l&&X(c)}},Q=S(j),q=function(e){g(e.target,r.loadedClass),A(e.target,r.loadingClass),v(e.target,V),y(e.target,"lazyloaded")},G=C(q),V=function(e){G({target:e.target})},J=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},K=C(function(e,t,n,s,i){var a,o,u,d,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",s)),o=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),i&&(u=e.parentNode,d=u&&f.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||d),p={target:e},h&&(v(e,U,!0),clearTimeout(l),l=c(U,2500),g(e,r.loadingClass),v(e,V,!0)),d&&m.call(u.getElementsByTagName("source"),J),o?e.setAttribute("srcset",o):a&&!d&&(D.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),i&&(o||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,A(e,r.lazyClass),E(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?U(p):F--,q(p))},!0)}),X=function(e){var t,n=$.test(e.nodeName),s=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),i="auto"==s;(!i&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,r.errorClass))&&(t=y(e,"lazyunveilread").detail,i&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,K(e,t,i,s,n))},Y=function(){if(!u)if(i.now()-p<999)c(Y,999);else{var e=x(function(){r.loadMode=3,Q()});u=!0,r.loadMode=3,Q(),o("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){p=i.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),W=r.hFac,o("scroll",Q,!0),o("resize",Q,!0),e.MutationObserver?new MutationObserver(Q).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s.addEventListener("DOMNodeInserted",Q,!0),s.addEventListener("DOMAttrModified",Q,!0),setInterval(Q,999)),o("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,Q,!0)}),/d$|^c/.test(t.readyState)?Y():(o("load",Y),t.addEventListener("DOMContentLoaded",Q),c(Y,2e4)),n.elements.length?(j(),E._lsFlush()):Q()},checkElems:Q,unveil:X}}(),M=function(){var e,n=C(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),f.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),s=function(e,t,r){var s,i=e.parentNode;i&&(r=w(e,i,r),(s=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=s.detail.width)&&r!==e._lazysizesWidth&&n(e,i,s,r))},i=x(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)s(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),o("resize",i)},checkElems:i,updateElem:s}}(),L=function(){L.i||(L.i=!0,M._(),T._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&L()})}(),n={cfg:r,autoSizer:M,loader:T,init:L,uP:b,aC:g,rC:A,hC:h,fire:y,gW:w,rAF:E}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)}]);