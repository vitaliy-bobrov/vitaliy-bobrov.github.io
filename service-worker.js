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
*/"use strict";var precacheConfig=[["about/index.html","3c3915bf79e8feac70f432e4b81fb5eb"],["css/styles.css","a42da0c765c361676dbad9d6bee304cb"],["images/bg-desktop.jpg","3f724547c9015f7c7dde42c6ec68dba9"],["images/bg-desktop.webp","d006906924bc81c8549b443aaec64a4f"],["images/bg-mobile.jpg","530c6b40d3200507a939f645060a0b33"],["images/bg-mobile.webp","1519239c7993ef0b07e7ca3302a23b98"],["images/bg-tablet.jpg","668cc62d3254a1abaf110a8cbb2530f1"],["images/bg-tablet.webp","088a9e4e54eed4603a78d8f282da7ba3"],["images/logo-mobile.png","50ce081632b17c1259f36d3cb65b1c02"],["images/logo-mobile.webp","803c22c41a02093b6c87f2bd73b99a6c"],["images/logo-mobile@2x.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-mobile@2x.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-tablet.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet@2x.png","02ffc4306e6b393940320b9425d55afd"],["images/logo-tablet@2x.webp","cadc29cd68d2f3a90954022d21fab9db"],["images/logo.png","28ff34c39edba1c030b44efab54a3d74"],["images/logo.webp","15ad5f560afea10c012d4f37c94adea5"],["images/logo@2x.png","35008ee7ab426dd272af8484242738d3"],["images/logo@2x.webp","f686f2803fac90254149122242d641d8"],["js/main.min.js","3382046c404d9448f278884c4e15bfb6"],["js/sw/offline-analytics.js","c1a5c3c1a9339c025872ca479c15a1b3"],["js/sw/runtime-caching.js","01b1ba2f0de083d85d6db5e3293dd484"],["js/sw/sw-offline-google-analytics.prod.v0.0.25.js","46b111c503c4023f5676e1e9ededb930"],["js/sw/sw-toolbox.js","c91277b5c5d7f696d1f86e26974600a6"]],cacheName="sw-precache-v3-metalsthith-blog-source-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(b,c){var d=new URL(b);return"/"===d.pathname.slice(-1)&&(d.pathname+=c),d.toString()},cleanResponse=function(a){if(!a.redirected)return Promise.resolve(a);var b="body"in a?Promise.resolve(a.body):a.blob();return b.then(function(b){return new Response(b,{headers:a.headers,status:a.status,statusText:a.statusText})})},createCacheKey=function(d,e,f,a){var b=new URL(d);return a&&b.pathname.match(a)||(b.search+=(b.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(f)),b.toString()},isPathWhitelisted=function(b,c){if(0===b.length)return!0;var d=new URL(c).pathname;return b.some(function(a){return d.match(a)})},stripIgnoredUrlParameters=function(a,e){var b=new URL(a);return b.hash="",b.search=b.search.slice(1).split("&").map(function(b){return b.split("=")}).filter(function(a){return e.every(function(b){return!b.test(a[0])})}).map(function(b){return b.join("=")}).join("&"),b.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(d){var e=d[0],f=d[1],a=new URL(e,self.location),b=createCacheKey(a,hashParamName,f,!1);return[a.toString(),b]}));function setOfCachedUrls(b){return b.keys().then(function(b){return b.map(function(b){return b.url})}).then(function(b){return new Set(b)})}self.addEventListener("install",function(b){b.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(b){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!b.has(e)){var c=new Request(e,{credentials:"same-origin"});return fetch(c).then(function(b){if(!b.ok)throw new Error("Request for "+e+" returned a response with status "+b.status);return cleanResponse(b).then(function(b){return a.put(e,b)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(b){var a=new Set(urlsToCacheKeys.values());b.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(d){return Promise.all(d.map(function(d){if(!a.has(d.url))return c.delete(d)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var b,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);b=urlsToCacheKeys.has(c);var e="index.html";!b&&e&&(c=addDirectoryIndex(c,e),b=urlsToCacheKeys.has(c)),b||"",b&&a.respondWith(caches.open(cacheName).then(function(b){return b.match(urlsToCacheKeys.get(c)).then(function(b){if(b)return b;throw Error("The cached response that was expected is missing.")})}).catch(function(b){return console.warn("Couldn't serve response for \"%s\" from cache: %O",a.request.url,b),fetch(a.request)}))}}),!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.toolbox=a()}}(function(){return function g(j,k,l){function b(m,c){if(!k[m]){if(!j[m]){var e="function"==typeof require&&require;if(!c&&e)return e(m,!0);if(d)return d(m,!0);var f=new Error("Cannot find module '"+m+"'");throw f.code="MODULE_NOT_FOUND",f}var h=k[m]={exports:{}};j[m][0].call(h.exports,function(c){var d=j[m][1][c];return b(d?d:c)},h,h.exports,g,j,k,l)}return k[m].exports}for(var d="function"==typeof require&&require,c=0;c<l.length;c++)b(l[c]);return b}({1:[function(b,d){"use strict";function m(b,c){c=c||{};var d=c.debug||i.debug;d&&console.log("[sw-toolbox] "+b)}function g(a){var b;return a&&a.cache&&(b=a.cache.name),b=b||i.cache.name,caches.open(b)}function k(d,c,e){var a=f.bind(null,d,c,e);l=l?l.then(a):a()}function f(c,i,a){var b=c.url,d=a.maxAgeSeconds,e=a.maxEntries,f=a.name,g=Date.now();return m("Updating LRU order for "+b+". Max entries is "+e+", max age is "+d),n.getDb(f).then(function(c){return n.setTimestampForUrl(c,b,g)}).then(function(b){return n.expireEntries(b,e,d,g)}).then(function(a){m("Successfully updated IDB.");var b=a.map(function(a){return i.delete(a)});return Promise.all(b).then(function(){m("Done with cache cleanup.")})}).catch(function(b){m(b)})}function e(b){var d=Array.isArray(b);if(d&&b.forEach(function(b){"string"==typeof b||b instanceof Request||(d=!1)}),!d)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return b}var l,i=b("./options"),n=b("./idb-cache-expiration");d.exports={debug:m,fetchAndCache:function(f,e){e=e||{};var b=e.successResponses||i.successResponses;return fetch(f.clone()).then(function(d){return"GET"===f.method&&b.test(d.status)&&g(e).then(function(c){c.put(f,d).then(function(){var a=e.cache||i.cache;(a.maxEntries||a.maxAgeSeconds)&&a.name&&k(f,c,a)})}),d.clone()})},openCache:g,renameCache:function(b,c,d){return m("Renaming cache: ["+b+"] to ["+c+"]",d),caches.delete(c).then(function(){return Promise.all([caches.open(b),caches.open(c)]).then(function(c){var d=c[0],a=c[1];return d.keys().then(function(b){return Promise.all(b.map(function(b){return d.match(b).then(function(c){return a.put(b,c)})}))}).then(function(){return caches.delete(b)})})})},cache:function(a,b){return g(b).then(function(b){return b.add(a)})},uncache:function(a,b){return g(b).then(function(b){return b.delete(a)})},precache:function(a){a instanceof Promise||e(a),i.preCacheItems=i.preCacheItems.concat(a)},validatePrecacheInput:e,isResponseFresh:function(d,e,f){if(!d)return!1;if(e){var g=d.headers.get("date");if(g){var b=new Date(g);if(b.getTime()+1e3*e<f)return!1}}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(c,f){"use strict";function d(b){return new Promise(function(c,d){var f=indexedDB.open(k+b,l);f.onupgradeneeded=function(){var b=f.result.createObjectStore(o,{keyPath:m});b.createIndex(p,p,{unique:!1})},f.onsuccess=function(){c(f.result)},f.onerror=function(){d(f.error)}})}function h(e,b,c){return b?new Promise(function(a,d){var f=[],g=e.transaction(o,"readwrite"),k=g.objectStore(o),h=k.index(p);h.openCursor().onsuccess=function(e){var d=e.target.result;if(d&&c-1e3*b>d.value[p]){var g=d.value[m];f.push(g),k.delete(g),d.continue()}},g.oncomplete=function(){a(f)},g.onabort=d}):Promise.resolve([])}function j(c,d){return d?new Promise(function(a,b){var e=[],f=c.transaction(o,"readwrite"),i=f.objectStore(o),g=i.index(p),h=g.count();g.count().onsuccess=function(){var a=h.result;a>d&&(g.openCursor().onsuccess=function(b){var c=b.target.result;if(c){var f=c.value[m];e.push(f),i.delete(f),a-e.length>d&&c.continue()}})},f.oncomplete=function(){a(e)},f.onabort=b}):Promise.resolve([])}var k="sw-toolbox-",l=1,o="store",m="url",p="timestamp",a={};f.exports={getDb:function(b){return b in a||(a[b]=d(b)),a[b]},setTimestampForUrl:function(a,b,f){return new Promise(function(h,i){var j=a.transaction(o,"readwrite"),e=j.objectStore(o);e.put({url:b,timestamp:f}),j.oncomplete=function(){h(a)},j.onabort=function(){i(j.error)}})},expireEntries:function(d,e,c,a){return h(d,c,a).then(function(c){return j(d,e).then(function(a){return c.concat(a)})})}}},{}],3:[function(g,a){"use strict";function e(b){return b.reduce(function(a,b){return a.concat(b)},[])}g("serviceworker-cache-polyfill");var b=g("./helpers"),h=g("./router"),c=g("./options");a.exports={fetchListener:function(a){var b=h.match(a.request);b?a.respondWith(b(a.request)):h.default&&"GET"===a.request.method&&0===a.request.url.indexOf("http")&&a.respondWith(h.default(a.request))},activateListener:function(e){b.debug("activate event fired");var d=c.cache.name+"$$$inactive$$$";e.waitUntil(b.renameCache(d,c.cache.name))},installListener:function(f){var d=c.cache.name+"$$$inactive$$$";b.debug("install event fired"),b.debug("creating cache ["+d+"]"),f.waitUntil(b.openCache({cache:{name:d}}).then(function(f){return Promise.all(c.preCacheItems).then(e).then(b.validatePrecacheInput).then(function(a){return b.debug("preCache list: "+(a.join(", ")||"(none)")),f.addAll(a)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(b,c){"use strict";var d;d=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,c.exports={cache:{name:"$$$toolbox-cache$$$"+d+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(d,e){"use strict";var c=new URL("./",self.location),f=c.pathname,g=d("path-to-regexp"),a=function(c,d,e,a){d instanceof RegExp?this.fullUrlRegExp=d:(0!==d.indexOf("/")&&(d=f+d),this.keys=[],this.regexp=g(d,this.keys)),this.method=c,this.options=a,this.handler=e};a.prototype.makeHandler=function(b){var f;if(this.regexp){var a=this.regexp.exec(b);f={},this.keys.forEach(function(d,b){f[d.name]=a[b+1]})}return function(b){return this.handler(b,f,this.options)}.bind(this)},e.exports=a},{"path-to-regexp":15}],6:[function(b,c){"use strict";function m(b){return b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var f=b("./route"),h=b("./helpers"),g=function(e,f){for(var g,a=e.entries(),b=a.next(),c=[];!b.done;)g=new RegExp(b.value[0]),g.test(f)&&c.push(b.value[1]),b=a.next();return c},e=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(c){e.prototype[c]=function(d,e,a){return this.add(c,d,e,a)}}),e.prototype.add=function(d,g,j,b){b=b||{};var e;g instanceof RegExp?e=RegExp:(e=b.origin||self.location.origin,e=e instanceof RegExp?e.source:m(e)),d=d.toLowerCase();var i=new f(d,g,j,b);this.routes.has(e)||this.routes.set(e,new Map);var k=this.routes.get(e);k.has(d)||k.set(d,new Map);var c=k.get(d),l=i.regexp||i.fullUrlRegExp;c.has(l.source)&&h.debug("\""+g+"\" resolves to same regex as existing route."),c.set(l.source,i)},e.prototype.matchMethod=function(d,e){var f=new URL(e),a=f.origin,b=f.pathname;return this._match(d,g(this.routes,a),b)||this._match(d,[this.routes.get(RegExp)],e)},e.prototype._match=function(i,h,f){if(0===h.length)return null;for(var a=0;a<h.length;a++){var b=h[a],c=b&&b.get(i.toLowerCase());if(c){var d=g(c,f);if(0<d.length)return d[0].makeHandler(f)}}return null},e.prototype.match=function(b){return this.matchMethod(b.method,b.url)||this.matchMethod("any",b.url)},c.exports=new e},{"./helpers":1,"./route":5}],7:[function(a,b){"use strict";var e=a("../options"),g=a("../helpers");b.exports=function(h,a,d){return d=d||{},g.debug("Strategy: cache first ["+h.url+"]",d),g.openCache(d).then(function(a){return a.match(h).then(function(c){var f=d.cache||e.cache,a=Date.now();return g.isResponseFresh(c,f.maxAgeSeconds,a)?c:g.fetchAndCache(h,d)})})}},{"../helpers":1,"../options":4}],8:[function(a,b){"use strict";var h=a("../options"),e=a("../helpers");b.exports=function(a,b,f){return f=f||{},e.debug("Strategy: cache only ["+a.url+"]",f),e.openCache(f).then(function(b){return b.match(a).then(function(b){var c=f.cache||h.cache,d=Date.now();if(e.isResponseFresh(b,c.maxAgeSeconds,d))return b})})}},{"../helpers":1,"../options":4}],9:[function(a,b){"use strict";var m=a("../helpers"),l=a("./cacheOnly");b.exports=function(a,d,f){return m.debug("Strategy: fastest ["+a.url+"]",f),new Promise(function(g,b){var e=!1,h=[],i=function(c){h.push(c.toString()),e?b(new Error("Both cache and network failed: \""+h.join("\", \"")+"\"")):e=!0},c=function(a){a instanceof Response?g(a):i("No result returned")};m.fetchAndCache(a.clone(),f).then(c,i),l(a,d,f).then(c,i)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(a,b){b.exports={networkOnly:a("./networkOnly"),networkFirst:a("./networkFirst"),cacheOnly:a("./cacheOnly"),cacheFirst:a("./cacheFirst"),fastest:a("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(a,b){"use strict";var e=a("../options"),j=a("../helpers");b.exports=function(h,b,m){m=m||{};var d=m.successResponses||e.successResponses,g=m.networkTimeoutSeconds||e.networkTimeoutSeconds;return j.debug("Strategy: network first ["+h.url+"]",m),j.openCache(m).then(function(c){var f,k,l=[];if(g){var b=new Promise(function(i){f=setTimeout(function(){c.match(h).then(function(f){var c=m.cache||e.cache,a=Date.now(),b=c.maxAgeSeconds;j.isResponseFresh(f,b,a)&&i(f)})},1e3*g)});l.push(b)}var i=j.fetchAndCache(h,m).then(function(b){if(f&&clearTimeout(f),d.test(b.status))return b;throw j.debug("Response was an HTTP error: "+b.statusText,m),k=b,new Error("Bad response")}).catch(function(a){return j.debug("Network or response error, fallback to cache ["+h.url+"]",m),c.match(h).then(function(b){if(b)return b;if(k)return k;throw a})});return l.push(i),Promise.race(l)})}},{"../helpers":1,"../options":4}],12:[function(a,b){"use strict";var f=a("../helpers");b.exports=function(b,d,c){return f.debug("Strategy: network only ["+b.url+"]",c),fetch(b)}},{"../helpers":1}],13:[function(b,c){"use strict";var d=b("./options"),g=b("./router"),i=b("./helpers"),h=b("./strategies"),j=b("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",j.installListener),self.addEventListener("activate",j.activateListener),self.addEventListener("fetch",j.fetchListener),c.exports={networkOnly:h.networkOnly,networkFirst:h.networkFirst,cacheOnly:h.cacheOnly,cacheFirst:h.cacheFirst,fastest:h.fastest,router:g,options:d,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(a,b){b.exports=Array.isArray||function(b){return"[object Array]"==Object.prototype.toString.call(b)}},{}],15:[function(a,c){function g(e,a){for(var j,b=[],k=0,q=0,n="",t=a&&a.delimiter||"/";null!=(j=r.exec(e));){var o=j[0],i=j[1],c=j.index;if(n+=e.slice(q,c),q=c+o.length,i)n+=i[1];else{var w=e[q],f=j[2],h=j[3],p=j[4],l=j[5],d=j[6],x=j[7];n&&(b.push(n),n="");var y=j[2]||t,A=p||l;b.push({name:h||k++,prefix:f||"",delimiter:y,optional:"?"===d||"*"===d,repeat:"+"===d||"*"===d,partial:null!=f&&null!=w&&w!==f,asterisk:!!x,pattern:A?v(A):x?".*":"[^"+s(y)+"]+?"})}}return q<e.length&&(n+=e.substr(q)),n&&b.push(n),b}function t(b){return encodeURI(b).replace(/[\/?#]/g,function(b){return"%"+b.charCodeAt(0).toString(16).toUpperCase()})}function d(b){return encodeURI(b).replace(/[?#]/g,function(b){return"%"+b.charCodeAt(0).toString(16).toUpperCase()})}function k(e){for(var a=Array(e.length),c=0;c<e.length;c++)"object"==typeof e[c]&&(a[c]=new RegExp("^(?:"+e[c].pattern+")$"));return function(c,b){for(var l,q="",j=c||{},h=b||{},i=h.pretty?t:encodeURIComponent,k=0;k<e.length;k++)if(l=e[k],"string"!=typeof l){var m,n=j[l.name];if(null==n){if(l.optional){l.partial&&(q+=l.prefix);continue}throw new TypeError("Expected \""+l.name+"\" to be defined")}if(p(n)){if(!l.repeat)throw new TypeError("Expected \""+l.name+"\" to not repeat, but received `"+JSON.stringify(n)+"`");if(0===n.length){if(l.optional)continue;throw new TypeError("Expected \""+l.name+"\" to not be empty")}for(var o=0;o<n.length;o++){if(m=i(n[o]),!a[k].test(m))throw new TypeError("Expected all \""+l.name+"\" to match \""+l.pattern+"\", but received `"+JSON.stringify(m)+"`");q+=(0===o?l.prefix:l.delimiter)+m}}else{if(m=l.asterisk?d(n):i(n),!a[k].test(m))throw new TypeError("Expected \""+l.name+"\" to match \""+l.pattern+"\", but received \""+m+"\"");q+=l.prefix+m}}else q+=l;return q}}function s(b){return b.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function v(b){return b.replace(/([=!:$\/()])/g,"\\$1")}function o(a,b){return a.keys=b,a}function q(b){return b.sensitive?"":"i"}function b(c,d){var e=c.source.match(/\((?!\?)/g);if(e)for(var a=0;a<e.length;a++)d.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return o(c,d)}function i(h,g,i){for(var a=[],b=0;b<h.length;b++)a.push(e(h[b],g,i).source);var c=new RegExp("(?:"+a.join("|")+")",q(i));return o(c,g)}function f(b,c,d){return h(g(b,d),c,d)}function h(e,d,f){p(d)||(f=d||f,d=[]),f=f||{};for(var a,l=f.strict,h=!1!==f.end,g="",j=0;j<e.length;j++)if(a=e[j],"string"==typeof a)g+=s(a);else{var k=s(a.prefix),m="(?:"+a.pattern+")";d.push(a),a.repeat&&(m+="(?:"+k+m+")*"),m=a.optional?a.partial?k+"("+m+")?":"(?:"+k+"("+m+"))?":k+"("+m+")",g+=m}var i=s(f.delimiter||"/"),c=g.slice(-i.length)===i;return l||(g=(c?g.slice(0,-i.length):g)+"(?:"+i+"(?=$))?"),g+=h?"$":l&&c?"":"(?="+i+"|$)",o(new RegExp("^"+g,q(f)),d)}function e(e,c,d){return p(c)||(d=c||d,c=[]),d=d||{},e instanceof RegExp?b(e,c):p(e)?i(e,c,d):f(e,c,d)}var p=a("isarray");c.exports=e,c.exports.parse=g,c.exports.compile=function(a,b){return k(g(a,b))},c.exports.tokensToFunction=k,c.exports.tokensToRegExp=h;var r=/(\\.)|([\/.])?(?:(?:\:(\w+)(?:\(((?:\\.|[^\\()])+)\))?|\(((?:\\.|[^\\()])+)\))([+*?])?|(\*))/g},{isarray:14}],16:[function(){!function(){var a=Cache.prototype.addAll,b=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(b)var c=b[1],e=parseInt(b[2]);a&&(!b||"Firefox"===c&&46<=e||"Chrome"===c&&50<=e)||(Cache.prototype.addAll=function(b){function d(b){this.name="NetworkError",this.code=19,this.message=b}var f=this;return d.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(1>arguments.length)throw new TypeError;return b=b.map(function(b){return b instanceof Request?b:b+""}),Promise.all(b.map(function(b){"string"==typeof b&&(b=new Request(b));var c=new URL(b.url).protocol;if("http:"!==c&&"https:"!==c)throw new d("Invalid scheme");return fetch(b.clone())}))}).then(function(c){if(c.some(function(b){return!b.ok}))throw new d("Incorrect response status");return Promise.all(c.map(function(d,a){return f.put(b[a],d)}))}).then(function(){})},Cache.prototype.add=function(b){return this.addAll([b])})}()},{}]},{},[13])(13)}),toolbox.router.get(/.*\.(png|jpg|gif|webp|svg)/i,toolbox.cacheFirst,{cache:{name:"images-cache",maxEntries:100,maxAgeSeconds:31557600}}),toolbox.router.get(/\/blog\/.*\.html/,toolbox.networkFirst,{cache:{name:"posts-cache",maxEntries:24,maxAgeSeconds:31557600}}),toolbox.router.get(/\/.*\.html/,toolbox.networkFirst,{cache:{name:"blog-list-cache",maxEntries:24,maxAgeSeconds:604800}}),toolbox.router.get(/\/(category|page)\/.*\.htmll/,toolbox.networkFirst,{cache:{name:"category-cache",maxEntries:72,maxAgeSeconds:604800}}),importScripts("js/sw/sw-toolbox.js","js/sw/sw-offline-google-analytics.prod.v0.0.25.js","js/sw/offline-analytics.js","js/sw/runtime-caching.js");