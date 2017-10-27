/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/"use strict";var precacheConfig=[["css/styles.css","a42da0c765c361676dbad9d6bee304cb"],["images/bg-desktop.jpg","3f724547c9015f7c7dde42c6ec68dba9"],["images/bg-desktop.webp","d006906924bc81c8549b443aaec64a4f"],["images/bg-mobile.jpg","530c6b40d3200507a939f645060a0b33"],["images/bg-mobile.webp","1519239c7993ef0b07e7ca3302a23b98"],["images/bg-tablet.jpg","668cc62d3254a1abaf110a8cbb2530f1"],["images/bg-tablet.webp","088a9e4e54eed4603a78d8f282da7ba3"],["images/logo-mobile.png","50ce081632b17c1259f36d3cb65b1c02"],["images/logo-mobile.webp","803c22c41a02093b6c87f2bd73b99a6c"],["images/logo-mobile@2x.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-mobile@2x.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-tablet.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet@2x.png","02ffc4306e6b393940320b9425d55afd"],["images/logo-tablet@2x.webp","cadc29cd68d2f3a90954022d21fab9db"],["images/logo.png","28ff34c39edba1c030b44efab54a3d74"],["images/logo.webp","15ad5f560afea10c012d4f37c94adea5"],["images/logo@2x.png","35008ee7ab426dd272af8484242738d3"],["images/logo@2x.webp","f686f2803fac90254149122242d641d8"],["js/main.min.js","3382046c404d9448f278884c4e15bfb6"],["js/sw/offline-analytics.js","c1a5c3c1a9339c025872ca479c15a1b3"],["js/sw/runtime-caching.js","01b1ba2f0de083d85d6db5e3293dd484"],["js/sw/sw-offline-google-analytics.prod.v0.0.25.js","46b111c503c4023f5676e1e9ededb930"],["js/sw/sw-toolbox.js","c91277b5c5d7f696d1f86e26974600a6"]],cacheName="sw-precache-v3-metalsthith-blog-source-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,b){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=b),c.toString()},cleanResponse=function(a){if(!a.redirected)return Promise.resolve(a);var b="body"in a?Promise.resolve(a.body):a.blob();return b.then(function(b){return new Response(b,{headers:a.headers,status:a.status,statusText:a.statusText})})},createCacheKey=function(a,b,c,d){var e=new URL(a);return d&&e.pathname.match(d)||(e.search+=(e.search?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(a,b){if(0===a.length)return!0;var c=new URL(b).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,b){var c=new URL(a);return c.hash="",c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return b.every(function(b){return!b.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var b=a[0],c=a[1],d=new URL(b,self.location),e=createCacheKey(d,hashParamName,c,!1);return[d.toString(),e]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(b){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!b.has(c)){var d=new Request(c,{credentials:"same-origin"});return fetch(d).then(function(b){if(!b.ok)throw new Error("Request for "+c+" returned a response with status "+b.status);return cleanResponse(b).then(function(b){return a.put(c,b)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var b=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!b.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var b,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);b=urlsToCacheKeys.has(c);var d="index.html";!b&&d&&(c=addDirectoryIndex(c,d),b=urlsToCacheKeys.has(c));b||"",b&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(b){return console.warn("Couldn't serve response for \"%s\" from cache: %O",a.request.url,b),fetch(a.request)}))}}),!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.toolbox=a()}}(function(){return function b(d,e,g){function a(h,c){if(!e[h]){if(!d[h]){var i="function"==typeof require&&require;if(!c&&i)return i(h,!0);if(f)return f(h,!0);var j=new Error("Cannot find module '"+h+"'");throw j.code="MODULE_NOT_FOUND",j}var k=e[h]={exports:{}};d[h][0].call(k.exports,function(b){var c=d[h][1][b];return a(c?c:b)},k,k.exports,b,d,e,g)}return e[h].exports}for(var f="function"==typeof require&&require,h=0;h<g.length;h++)a(g[h]);return a}({1:[function(a,b){"use strict";function f(a,b){b=b||{};var c=b.debug||d.debug;c&&console.log("[sw-toolbox] "+a)}function h(a){var b;return a&&a.cache&&(b=a.cache.name),b=b||d.cache.name,caches.open(b)}function i(a,b,d){var e=c.bind(null,a,b,d);k=k?k.then(e):e()}function c(b,d,e){var g=b.url,h=e.maxAgeSeconds,i=e.maxEntries,c=e.name,j=Date.now();return f("Updating LRU order for "+g+". Max entries is "+i+", max age is "+h),l.getDb(c).then(function(a){return l.setTimestampForUrl(a,g,j)}).then(function(a){return l.expireEntries(a,i,h,j)}).then(function(a){f("Successfully updated IDB.");var b=a.map(function(a){return d.delete(a)});return Promise.all(b).then(function(){f("Done with cache cleanup.")})}).catch(function(a){f(a)})}function j(a){var b=Array.isArray(a);if(b&&a.forEach(function(a){"string"==typeof a||a instanceof Request||(b=!1)}),!b)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return a}var k,d=a("./options"),l=a("./idb-cache-expiration");b.exports={debug:f,fetchAndCache:function(a,b){b=b||{};var c=b.successResponses||d.successResponses;return fetch(a.clone()).then(function(e){return"GET"===a.method&&c.test(e.status)&&h(b).then(function(c){c.put(a,e).then(function(){var e=b.cache||d.cache;(e.maxEntries||e.maxAgeSeconds)&&e.name&&i(a,c,e)})}),e.clone()})},openCache:h,renameCache:function(a,b,c){return f("Renaming cache: ["+a+"] to ["+b+"]",c),caches.delete(b).then(function(){return Promise.all([caches.open(a),caches.open(b)]).then(function(b){var c=b[0],d=b[1];return c.keys().then(function(a){return Promise.all(a.map(function(a){return c.match(a).then(function(b){return d.put(a,b)})}))}).then(function(){return caches.delete(a)})})})},cache:function(a,b){return h(b).then(function(b){return b.add(a)})},uncache:function(a,b){return h(b).then(function(b){return b.delete(a)})},precache:function(a){a instanceof Promise||j(a),d.preCacheItems=d.preCacheItems.concat(a)},validatePrecacheInput:j,isResponseFresh:function(a,b,c){if(!a)return!1;if(b){var d=a.headers.get("date");if(d){var f=new Date(d);if(f.getTime()+1e3*b<c)return!1}}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(a,b){"use strict";function g(a){return new Promise(function(b,c){var d=indexedDB.open(j+a,k);d.onupgradeneeded=function(){var a=d.result.createObjectStore(f,{keyPath:h});a.createIndex(m,m,{unique:!1})},d.onsuccess=function(){b(d.result)},d.onerror=function(){c(d.error)}})}function i(b,d,g){return d?new Promise(function(e,j){var k=1e3*d,i=[],c=b.transaction(f,"readwrite"),l=c.objectStore(f),a=l.index(m);a.openCursor().onsuccess=function(a){var b=a.target.result;if(b&&g-k>b.value[m]){var c=b.value[h];i.push(c),l.delete(c),b.continue()}},c.oncomplete=function(){e(i)},c.onabort=j}):Promise.resolve([])}function c(b,d){return d?new Promise(function(e,g){var j=[],k=b.transaction(f,"readwrite"),l=k.objectStore(f),c=l.index(m),i=c.count();c.count().onsuccess=function(){var a=i.result;a>d&&(c.openCursor().onsuccess=function(b){var c=b.target.result;if(c){var e=c.value[h];j.push(e),l.delete(e),a-j.length>d&&c.continue()}})},k.oncomplete=function(){e(j)},k.onabort=g}):Promise.resolve([])}var j="sw-toolbox-",k=1,f="store",h="url",m="timestamp",l={};b.exports={getDb:function(a){return a in l||(l[a]=g(a)),l[a]},setTimestampForUrl:function(a,b,d){return new Promise(function(e,g){var h=a.transaction(f,"readwrite"),i=h.objectStore(f);i.put({url:b,timestamp:d}),h.oncomplete=function(){e(a)},h.onabort=function(){g(h.error)}})},expireEntries:function(a,b,d,e){return i(a,d,e).then(function(d){return c(a,b).then(function(a){return d.concat(a)})})}}},{}],3:[function(b,c){"use strict";function d(a){return a.reduce(function(a,b){return a.concat(b)},[])}b("serviceworker-cache-polyfill");var f=b("./helpers"),g=b("./router"),a=b("./options");c.exports={fetchListener:function(a){var b=g.match(a.request);b?a.respondWith(b(a.request)):g.default&&"GET"===a.request.method&&0===a.request.url.indexOf("http")&&a.respondWith(g.default(a.request))},activateListener:function(b){f.debug("activate event fired");var c=a.cache.name+"$$$inactive$$$";b.waitUntil(f.renameCache(c,a.cache.name))},installListener:function(b){var c=a.cache.name+"$$$inactive$$$";f.debug("install event fired"),f.debug("creating cache ["+c+"]"),b.waitUntil(f.openCache({cache:{name:c}}).then(function(b){return Promise.all(a.preCacheItems).then(d).then(f.validatePrecacheInput).then(function(a){return f.debug("preCache list: "+(a.join(", ")||"(none)")),b.addAll(a)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(a,b){"use strict";var c;c=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,b.exports={cache:{name:"$$$toolbox-cache$$$"+c+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(a,b){"use strict";var d=new URL("./",self.location),f=d.pathname,g=a("path-to-regexp"),e=function(a,b,c,d){b instanceof RegExp?this.fullUrlRegExp=b:(0!==b.indexOf("/")&&(b=f+b),this.keys=[],this.regexp=g(b,this.keys)),this.method=a,this.options=d,this.handler=c};e.prototype.makeHandler=function(a){var b;if(this.regexp){var c=this.regexp.exec(a);b={},this.keys.forEach(function(a,d){b[a.name]=c[d+1]})}return function(a){return this.handler(a,b,this.options)}.bind(this)},b.exports=e},{"path-to-regexp":15}],6:[function(a,b){"use strict";function d(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var g=a("./route"),j=a("./helpers"),f=function(a,b){for(var c,d=a.entries(),e=d.next(),f=[];!e.done;)c=new RegExp(e.value[0]),c.test(b)&&f.push(e.value[1]),e=d.next();return f},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(a){c.prototype[a]=function(b,c,d){return this.add(a,b,c,d)}}),c.prototype.add=function(b,e,i,k){k=k||{};var c;e instanceof RegExp?c=RegExp:(c=k.origin||self.location.origin,c=c instanceof RegExp?c.source:d(c)),b=b.toLowerCase();var l=new g(b,e,i,k);this.routes.has(c)||this.routes.set(c,new Map);var a=this.routes.get(c);a.has(b)||a.set(b,new Map);var m=a.get(b),f=l.regexp||l.fullUrlRegExp;m.has(f.source)&&j.debug("\""+e+"\" resolves to same regex as existing route."),m.set(f.source,l)},c.prototype.matchMethod=function(a,b){var c=new URL(b),d=c.origin,e=c.pathname;return this._match(a,f(this.routes,d),e)||this._match(a,[this.routes.get(RegExp)],b)},c.prototype._match=function(a,b,c){if(0===b.length)return null;for(var d=0;d<b.length;d++){var e=b[d],g=e&&e.get(a.toLowerCase());if(g){var h=f(g,c);if(0<h.length)return h[0].makeHandler(c)}}return null},c.prototype.match=function(a){return this.matchMethod(a.method,a.url)||this.matchMethod("any",a.url)},b.exports=new c},{"./helpers":1,"./route":5}],7:[function(a,b){"use strict";var d=a("../options"),f=a("../helpers");b.exports=function(a,b,e){return e=e||{},f.debug("Strategy: cache first ["+a.url+"]",e),f.openCache(e).then(function(b){return b.match(a).then(function(b){var g=e.cache||d.cache,h=Date.now();return f.isResponseFresh(b,g.maxAgeSeconds,h)?b:f.fetchAndCache(a,e)})})}},{"../helpers":1,"../options":4}],8:[function(a,b){"use strict";var c=a("../options"),d=a("../helpers");b.exports=function(a,b,f){return f=f||{},d.debug("Strategy: cache only ["+a.url+"]",f),d.openCache(f).then(function(b){return b.match(a).then(function(a){var b=f.cache||c.cache,e=Date.now();if(d.isResponseFresh(a,b.maxAgeSeconds,e))return a})})}},{"../helpers":1,"../options":4}],9:[function(a,b){"use strict";var d=a("../helpers"),g=a("./cacheOnly");b.exports=function(b,e,h){return d.debug("Strategy: fastest ["+b.url+"]",h),new Promise(function(i,j){var c=!1,k=[],a=function(a){k.push(a.toString()),c?j(new Error("Both cache and network failed: \""+k.join("\", \"")+"\"")):c=!0},l=function(b){b instanceof Response?i(b):a("No result returned")};d.fetchAndCache(b.clone(),h).then(l,a),g(b,e,h).then(l,a)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(a,b){b.exports={networkOnly:a("./networkOnly"),networkFirst:a("./networkFirst"),cacheOnly:a("./cacheOnly"),cacheFirst:a("./cacheFirst"),fastest:a("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(a,b){"use strict";function c(b,a,i){i=i||{};var f=i.successResponses||d.successResponses,e=i.networkTimeoutSeconds||d.networkTimeoutSeconds;return g.debug("Strategy: network first ["+b.url+"]",i),g.openCache(i).then(function(c){var j,k,a=[];if(e){var l=new Promise(function(a){j=setTimeout(function(){c.match(b).then(function(b){var e=i.cache||d.cache,f=Date.now(),c=e.maxAgeSeconds;g.isResponseFresh(b,c,f)&&a(b)})},1e3*e)});a.push(l)}var m=g.fetchAndCache(b,i).then(function(a){if(j&&clearTimeout(j),f.test(a.status))return a;throw g.debug("Response was an HTTP error: "+a.statusText,i),k=a,new Error("Bad response")}).catch(function(a){return g.debug("Network or response error, fallback to cache ["+b.url+"]",i),c.match(b).then(function(b){if(b)return b;if(k)return k;throw a})});return a.push(m),Promise.race(a)})}var d=a("../options"),g=a("../helpers");b.exports=c},{"../helpers":1,"../options":4}],12:[function(a,b){"use strict";var c=a("../helpers");b.exports=function(a,b,d){return c.debug("Strategy: network only ["+a.url+"]",d),fetch(a)}},{"../helpers":1}],13:[function(a,b){"use strict";var d=a("./options"),e=a("./router"),f=a("./helpers"),g=a("./strategies"),c=a("./listeners");f.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),b.exports={networkOnly:g.networkOnly,networkFirst:g.networkFirst,cacheOnly:g.cacheOnly,cacheFirst:g.cacheFirst,fastest:g.fastest,router:e,options:d,cache:f.cache,uncache:f.uncache,precache:f.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(a,b){b.exports=Array.isArray||function(a){return"[object Array]"==Object.prototype.toString.call(a)}},{}],15:[function(b,e){function j(b,e){for(var j,n=[],t=0,o=0,i="",c=e&&e.delimiter||"/";null!=(j=u.exec(b));){var s=j[0],f=j[1],h=j.index;if(i+=b.slice(o,h),o=h+s.length,f)i+=f[1];else{var p=b[o],l=j[2],d=j[3],m=j[4],g=j[5],v=j[6],w=j[7];i&&(n.push(i),i="");var x=j[2]||c,z=m||g;n.push({name:d||t++,prefix:l||"",delimiter:x,optional:"?"===v||"*"===v,repeat:"+"===v||"*"===v,partial:null!=l&&null!=p&&p!==l,asterisk:!!w,pattern:z?a(z):w?".*":"[^"+q(x)+"]+?"})}}return o<b.length&&(i+=b.substr(o)),i&&n.push(i),n}function k(a){return encodeURI(a).replace(/[\/?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function i(a){return encodeURI(a).replace(/[?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function c(b){for(var a=Array(b.length),c=0;c<b.length;c++)"object"==typeof b[c]&&(a[c]=new RegExp("^(?:"+b[c].pattern+")$"));return function(c,e){for(var j,m="",n=c||{},o=e||{},q=o.pretty?k:encodeURIComponent,r=0;r<b.length;r++)if(j=b[r],"string"!=typeof j){var f,p=n[j.name];if(null==p){if(j.optional){j.partial&&(m+=j.prefix);continue}throw new TypeError("Expected \""+j.name+"\" to be defined")}if(g(p)){if(!j.repeat)throw new TypeError("Expected \""+j.name+"\" to not repeat, but received `"+JSON.stringify(p)+"`");if(0===p.length){if(j.optional)continue;throw new TypeError("Expected \""+j.name+"\" to not be empty")}for(var l=0;l<p.length;l++){if(f=q(p[l]),!a[r].test(f))throw new TypeError("Expected all \""+j.name+"\" to match \""+j.pattern+"\", but received `"+JSON.stringify(f)+"`");m+=(0===l?j.prefix:j.delimiter)+f}}else{if(f=j.asterisk?i(p):q(p),!a[r].test(f))throw new TypeError("Expected \""+j.name+"\" to match \""+j.pattern+"\", but received \""+f+"\"");m+=j.prefix+f}}else m+=j;return m}}function q(a){return a.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(a){return a.replace(/([=!:$\/()])/g,"\\$1")}function w(a,b){return a.keys=b,a}function f(a){return a.sensitive?"":"i"}function h(a,b){var c=a.source.match(/\((?!\?)/g);if(c)for(var d=0;d<c.length;d++)b.push({name:d,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return w(a,b)}function o(a,b,c){for(var d=[],e=0;e<a.length;e++)d.push(m(a[e],b,c).source);var g=new RegExp("(?:"+d.join("|")+")",f(c));return w(g,b)}function l(a,b,c){return d(j(a,c),b,c)}function d(a,b,e){g(b)||(e=b||e,b=[]),e=e||{};for(var h,j=e.strict,k=!1!==e.end,m="",i=0;i<a.length;i++)if(h=a[i],"string"==typeof h)m+=q(h);else{var c=q(h.prefix),n="(?:"+h.pattern+")";b.push(h),h.repeat&&(n+="(?:"+c+n+")*"),n=h.optional?h.partial?c+"("+n+")?":"(?:"+c+"("+n+"))?":c+"("+n+")",m+=n}var o=q(e.delimiter||"/"),l=m.slice(-o.length)===o;return j||(m=(l?m.slice(0,-o.length):m)+"(?:"+o+"(?=$))?"),m+=k?"$":j&&l?"":"(?="+o+"|$)",w(new RegExp("^"+m,f(e)),b)}function m(a,b,c){return g(b)||(c=b||c,b=[]),c=c||{},a instanceof RegExp?h(a,b):g(a)?o(a,b,c):l(a,b,c)}var g=b("isarray");e.exports=m,e.exports.parse=j,e.exports.compile=function(a,b){return c(j(a,b))},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=d;var u=new RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))","g")},{isarray:14}],16:[function(){!function(){var a=Cache.prototype.addAll,b=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(b)var c=b[1],d=parseInt(b[2]);a&&(!b||"Firefox"===c&&46<=d||"Chrome"===c&&50<=d)||(Cache.prototype.addAll=function(a){function b(a){this.name="NetworkError",this.code=19,this.message=a}var c=this;return b.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(1>arguments.length)throw new TypeError;return a=a.map(function(a){return a instanceof Request?a:a+""}),Promise.all(a.map(function(a){"string"==typeof a&&(a=new Request(a));var c=new URL(a.url).protocol;if("http:"!==c&&"https:"!==c)throw new b("Invalid scheme");return fetch(a.clone())}))}).then(function(d){if(d.some(function(a){return!a.ok}))throw new b("Incorrect response status");return Promise.all(d.map(function(b,d){return c.put(a[d],b)}))}).then(function(){})},Cache.prototype.add=function(a){return this.addAll([a])})}()},{}]},{},[13])(13)}),toolbox.router.get(/.*\.(png|jpg|gif|webp|svg)/i,toolbox.cacheFirst,{cache:{name:"images-cache",maxEntries:100,maxAgeSeconds:31557600}}),toolbox.router.get(/\/blog\/.*\.html/,toolbox.networkFirst,{cache:{name:"posts-cache",maxEntries:24,maxAgeSeconds:31557600}}),toolbox.router.get(/\/.*\.html/,toolbox.networkFirst,{cache:{name:"blog-list-cache",maxEntries:24,maxAgeSeconds:604800}}),toolbox.router.get(/\/(category|page)\/.*\.htmll/,toolbox.networkFirst,{cache:{name:"category-cache",maxEntries:72,maxAgeSeconds:604800}}),importScripts("js/sw/sw-toolbox.js","js/sw/sw-offline-google-analytics.prod.v0.0.25.js","js/sw/offline-analytics.js","js/sw/runtime-caching.js");