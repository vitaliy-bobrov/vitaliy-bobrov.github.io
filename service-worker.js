"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["about/index.html","20e62f0cc96c6dde83721b44e8742dbf"],["css/styles.css","38db45443a222bcde2c1e37a03f6655f"],["favicon.ico","65aea487ae958bc0f6d871e35b9425ac"],["images/bg-desktop.jpg","3f724547c9015f7c7dde42c6ec68dba9"],["images/bg-desktop.webp","d006906924bc81c8549b443aaec64a4f"],["images/bg-mobile.jpg","530c6b40d3200507a939f645060a0b33"],["images/bg-mobile.webp","1519239c7993ef0b07e7ca3302a23b98"],["images/bg-tablet.jpg","668cc62d3254a1abaf110a8cbb2530f1"],["images/bg-tablet.webp","088a9e4e54eed4603a78d8f282da7ba3"],["images/logo-mobile.png","50ce081632b17c1259f36d3cb65b1c02"],["images/logo-mobile.webp","803c22c41a02093b6c87f2bd73b99a6c"],["images/logo-mobile@2x.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-mobile@2x.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-tablet.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet@2x.png","02ffc4306e6b393940320b9425d55afd"],["images/logo-tablet@2x.webp","cadc29cd68d2f3a90954022d21fab9db"],["images/logo.png","28ff34c39edba1c030b44efab54a3d74"],["images/logo.webp","15ad5f560afea10c012d4f37c94adea5"],["images/logo@2x.png","35008ee7ab426dd272af8484242738d3"],["images/logo@2x.webp","f686f2803fac90254149122242d641d8"],["js/main.min.js","64607d012a701ba40648ce21eaefe2f1"],["js/sw/offline-analytics.js","175b643cf31bb87921e75be7d7265ec7"],["js/sw/offline-google-analytics-import.min.js","afea8e47294699b3acc2e2419a50f510"],["js/sw/runtime-caching.js","3091516ce8f87b762dfa7ac8aee920fe"],["js/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["manifest.json","33cbe02ef448c39c4d4b56417f869fa2"]],cacheName="sw-precache-v2-metalsthith-blog-source-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.toString().match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n))return e.add(new Request(n,{credentials:"same-origin",redirect:"follow"}))}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,i){if(!n[c]){if(!t[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(a)return a(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){function r(e,t){t=t||{},(t.debug||g.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||g.cache.name,caches.open(t)}function a(e,t){t=t||{};var n=t.successResponses||g.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||g.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=i.bind(null,e,t,n);d=d?d.then(r):r()}function i(e,t,n){var o=e.url,a=n.maxAgeSeconds,c=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+a),m.getDb(i).then(function(e){return m.setTimestampForUrl(e,o,s)}).then(function(e){return m.expireEntries(e,c,a,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||l(e),g.preCacheItems=g.preCacheItems.concat(e)}function l(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function p(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*t<n)return!1}}return!0}var d,g=e("./options"),m=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:a,openCache:o,renameCache:s,cache:u,uncache:f,precache:h,validatePrecacheInput:l,isResponseFresh:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:l}).createIndex(p,p,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function a(e,t,n){return new Promise(function(r,o){var a=e.transaction(h,"readwrite");a.objectStore(h).put({url:t,timestamp:n}),a.oncomplete=function(){r(e)},a.onabort=function(){o(a.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var a=1e3*t,c=[],i=e.transaction(h,"readwrite"),s=i.objectStore(h);s.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-a>t.value[p]){var r=t.value[l];c.push(r),s.delete(r),t.continue()}},i.oncomplete=function(){r(c)},i.onabort=o}):Promise.resolve([])}function i(e,t){return t?new Promise(function(n,r){var o=[],a=e.transaction(h,"readwrite"),c=a.objectStore(h),i=c.index(p),s=i.count();i.count().onsuccess=function(){var e=s.result;e>t&&(i.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[l];o.push(a),c.delete(a),e-o.length>t&&r.continue()}})},a.oncomplete=function(){n(o)},a.onabort=r}):Promise.resolve([])}function s(e,t,n,r){return c(e,n,r).then(function(n){return i(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",l="url",p="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:a,expireEntries:s}},{}],3:[function(e,t,n){function r(e){var t=s.match(e.request);t?e.respondWith(t(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function o(e){i.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(i.renameCache(t,u.cache.name))}function a(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";i.debug("install event fired"),i.debug("creating cache ["+t+"]"),e.waitUntil(i.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(a).then(i.validatePrecacheInput).then(function(t){return i.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var i=e("./helpers"),s=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location),o=r.pathname,a=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),a=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},i=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){i.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),i.prototype.add=function(e,t,n,c){c=c||{};var i;t instanceof RegExp?i=RegExp:(i=c.origin||self.location.origin,i=i instanceof RegExp?i.source:r(i)),e=e.toLowerCase();var s=new o(e,t,n,c);this.routes.has(i)||this.routes.set(i,new Map);var u=this.routes.get(i);u.has(e)||u.set(e,new Map);var f=u.get(e),h=s.regexp||s.fullUrlRegExp;f.has(h.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,s)},i.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},i.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var i=c(a,n);if(i.length>0)return i[0].makeHandler(n)}}return null},i.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new i},{"./helpers":1,"./route":5}],7:[function(e,t,n){function r(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return a.isResponseFresh(t,r.maxAgeSeconds,c)?t:a.fetchAndCache(e,n)})})}var o=e("../options"),a=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){function r(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),a=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var i=!1,s=[],u=function(e){s.push(e.toString()),i?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),a(e,t,n).then(f,u)})}var o=e("../helpers"),a=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then(function(t){var i,s,u=[];if(c){var f=new Promise(function(r){i=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),i=t.maxAgeSeconds;a.isResponseFresh(e,i,c)&&r(e)})},1e3*c)});u.push(f)}var h=a.fetchAndCache(e,n).then(function(e){if(i&&clearTimeout(i),r.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),a=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),i=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,c="",i=t&&t.delimiter||"/";null!=(n=v.exec(e));){var f=n[0],h=n[1],l=n.index;if(c+=e.slice(a,l),a=l+f.length,h)c+=h[1];else{var p=e[a],d=n[2],g=n[3],m=n[4],b=n[5],w=n[6],x=n[7];c&&(r.push(c),c="");var y=null!=d&&null!=p&&p!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,C=n[2]||i,k=m||b;r.push({name:g||o++,prefix:d||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!x,pattern:k?u(k):x?".*":"[^"+s(C)+"]+?"})}}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function o(e,t){return i(r(e,t))}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=r||{},u=s.pretty?a:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var l,p=i[h.name];if(null==p){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(b(p)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!t[f].test(l))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===d?h.prefix:h.delimiter)+l}}else{if(l=h.asterisk?c(p):u(p),!t[f].test(l))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+l+'"');o+=h.prefix+l}}else o+=h}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function p(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function d(e,t,n){return g(r(e,n),t,n)}function g(e,t,n){b(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,a="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)a+=s(i);else{var u=s(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+u+l+")*"),l=i.optional?i.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")",a+=l}}var p=s(n.delimiter||"/"),d=a.slice(-p.length)===p;return r||(a=(d?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=o?"$":r&&d?"":"(?="+p+"|$)",f(new RegExp("^"+a,h(n)),t)}function m(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?l(e,t):b(e)?p(e,t,n):d(e,t,n)}var b=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=i,t.exports.tokensToRegExp=g;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/.*\.(png|jpg|gif|webp|svg)/i,toolbox.cacheFirst,{cache:{name:"images-cache",maxEntries:100,maxAgeSeconds:31557600}}),toolbox.router.get(/\/blog\/.*\.html/,toolbox.networkFirst,{cache:{name:"posts-cache",maxEntries:24,maxAgeSeconds:31557600}}),toolbox.router.get(/\/.*\.html/,toolbox.networkFirst,{cache:{name:"blog-list-cache",maxEntries:24,maxAgeSeconds:604800}}),toolbox.router.get(/\/(category|page)\/.*\.htmll/,toolbox.networkFirst,{cache:{name:"category-cache",maxEntries:72,maxAgeSeconds:604800}}),importScripts("js/sw/sw-toolbox.js","js/sw/offline-google-analytics-import.min.js","js/sw/offline-analytics.js","js/sw/runtime-caching.js");