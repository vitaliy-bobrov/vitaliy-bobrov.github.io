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
*/"use strict";var precacheConfig=[["about/index.html","3c3915bf79e8feac70f432e4b81fb5eb"],["css/styles.css","8ffae19d02a615af393be8cc30e6c87c"],["images/bg-desktop.jpg","454e9b8562945cb0aaf43bfc2401c534"],["images/bg-desktop.webp","1e3caae4ace09ae4a854fa4245912697"],["images/bg-mobile.jpg","91dec6b94c34ac74a7b929a035eb7bf9"],["images/bg-mobile.webp","24c2f801c055ce69e2f5dd8f4a86ab2a"],["images/bg-tablet.jpg","b4f4466a4d3380fc627984cb278ae7d6"],["images/bg-tablet.webp","398d54324d9800c4da55fb23ec030871"],["images/logo-mobile.png","50ce081632b17c1259f36d3cb65b1c02"],["images/logo-mobile.webp","803c22c41a02093b6c87f2bd73b99a6c"],["images/logo-mobile@2x.png","00d96fd9bc12120fb619fa21cfff79f3"],["images/logo-mobile@2x.webp","16d247d37439973512058ad676bde675"],["images/logo-tablet.png","00d96fd9bc12120fb619fa21cfff79f3"],["images/logo-tablet.webp","16d247d37439973512058ad676bde675"],["images/logo-tablet@2x.png","a3618444ff3133e663a9571c0df759ff"],["images/logo-tablet@2x.webp","b516b8f0e2885e66d2d2617830b1dd06"],["images/logo.png","e3fb980a4ba05a1050b2ba547fdb5ecc"],["images/logo.webp","740523f9c48f1ad5a4b272c8ef35362f"],["images/logo@2x.png","56d9d1dc6cef686a9aaef096b321c050"],["images/logo@2x.webp","0dad2cef2d8f275f5ba1a389d177f61c"],["js/main.min.js","46a85e19c81ff94d2327b4bb58b82dd8"],["js/sw/offline-analytics.js","c1a5c3c1a9339c025872ca479c15a1b3"],["js/sw/runtime-caching.js","6cd24dc769443d71aa88ba7d40db8feb"],["js/sw/sw-offline-google-analytics.prod.v0.0.25.js","46b111c503c4023f5676e1e9ededb930"],["js/sw/sw-toolbox.js","c91277b5c5d7f696d1f86e26974600a6"]],cacheName="sw-precache-v3-metalsthith-blog-source-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(d,a){var b=new URL(d);return"/"===b.pathname.slice(-1)&&(b.pathname+=a),b.toString()},cleanResponse=function(c){if(!c.redirected)return Promise.resolve(c);var a="body"in c?Promise.resolve(c.body):c.blob();return a.then(function(a){return new Response(a,{headers:c.headers,status:c.status,statusText:c.statusText})})},createCacheKey=function(f,a,b,c){var d=new URL(f);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(b)),d.toString()},isPathWhitelisted=function(d,a){if(0===d.length)return!0;var b=new URL(a).pathname;return d.some(function(c){return b.match(c)})},stripIgnoredUrlParameters=function(d,e){var a=new URL(d);return a.hash="",a.search=a.search.slice(1).split("&").map(function(b){return b.split("=")}).filter(function(c){return e.every(function(a){return!a.test(c[0])})}).map(function(b){return b.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(f){var a=f[0],b=f[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,b,!1);return[c.toString(),d]}));function setOfCachedUrls(b){return b.keys().then(function(b){return b.map(function(b){return b.url})}).then(function(b){return new Set(b)})}self.addEventListener("install",function(b){b.waitUntil(caches.open(cacheName).then(function(d){return setOfCachedUrls(d).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!a.has(e)){var b=new Request(e,{credentials:"same-origin"});return fetch(b).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return d.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(c){var d=new Set(urlsToCacheKeys.values());c.waitUntil(caches.open(cacheName).then(function(b){return b.keys().then(function(a){return Promise.all(a.map(function(a){if(!d.has(a.url))return b.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,f=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(f);var c="index.html";!a&&c&&(f=addDirectoryIndex(f,c),a=urlsToCacheKeys.has(f)),a||"",a&&e.respondWith(caches.open(cacheName).then(function(b){return b.match(urlsToCacheKeys.get(f)).then(function(b){if(b)return b;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn("Couldn't serve response for \"%s\" from cache: %O",e.request.url,a),fetch(e.request)}))}}),!function(c){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=c();else if("function"==typeof define&&define.amd)define([],c);else{var a;a="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,a.toolbox=c()}}(function(){return function l(m,b,d){function e(f,g){if(!b[f]){if(!m[f]){var h="function"==typeof require&&require;if(!g&&h)return h(f,!0);if(a)return a(f,!0);var i=new Error("Cannot find module '"+f+"'");throw i.code="MODULE_NOT_FOUND",i}var j=b[f]={exports:{}};m[f][0].call(j.exports,function(a){var b=m[f][1][a];return e(b?b:a)},j,j.exports,l,m,b,d)}return b[f].exports}for(var a="function"==typeof require&&require,c=0;c<d.length;c++)e(d[c]);return e}({1:[function(e,a){"use strict";function m(d,a){a=a||{};var b=a.debug||k.debug;b&&console.log("[sw-toolbox] "+d)}function g(c){var a;return c&&c.cache&&(a=c.cache.name),a=a||k.cache.name,caches.open(a)}function n(f,a,b){var d=i.bind(null,f,a,b);c=c?c.then(d):d()}function i(a,b,d){var e=a.url,f=d.maxAgeSeconds,g=d.maxEntries,h=d.name,i=Date.now();return m("Updating LRU order for "+e+". Max entries is "+g+", max age is "+f),o.getDb(h).then(function(b){return o.setTimestampForUrl(b,e,i)}).then(function(b){return o.expireEntries(b,g,f,i)}).then(function(c){m("Successfully updated IDB.");var a=c.map(function(c){return b.delete(c)});return Promise.all(a).then(function(){m("Done with cache cleanup.")})}).catch(function(b){m(b)})}function b(c){var d=Array.isArray(c);if(d&&c.forEach(function(b){"string"==typeof b||b instanceof Request||(d=!1)}),!d)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return c}var c,k=e("./options"),o=e("./idb-cache-expiration");a.exports={debug:m,fetchAndCache:function(d,a){a=a||{};var b=a.successResponses||k.successResponses;return fetch(d.clone()).then(function(f){return"GET"===d.method&&b.test(f.status)&&g(a).then(function(b){b.put(d,f).then(function(){var c=a.cache||k.cache;(c.maxEntries||c.maxAgeSeconds)&&c.name&&n(d,b,c)})}),f.clone()})},openCache:g,renameCache:function(d,a,b){return m("Renaming cache: ["+d+"] to ["+a+"]",b),caches.delete(a).then(function(){return Promise.all([caches.open(d),caches.open(a)]).then(function(a){var b=a[0],c=a[1];return b.keys().then(function(d){return Promise.all(d.map(function(d){return b.match(d).then(function(a){return c.put(d,a)})}))}).then(function(){return caches.delete(d)})})})},cache:function(c,a){return g(a).then(function(a){return a.add(c)})},uncache:function(c,a){return g(a).then(function(a){return a.delete(c)})},precache:function(c){c instanceof Promise||b(c),k.preCacheItems=k.preCacheItems.concat(c)},validatePrecacheInput:b,isResponseFresh:function(e,g,b){if(!e)return!1;if(g){var c=e.headers.get("date");if(c){var d=new Date(c);if(d.getTime()+1e3*g<b)return!1}}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(d,a){"use strict";function b(e){return new Promise(function(a,b){var c=indexedDB.open(i+e,j);c.onupgradeneeded=function(){var b=c.result.createObjectStore(n,{keyPath:f});b.createIndex(o,o,{unique:!1})},c.onsuccess=function(){a(c.result)},c.onerror=function(){b(c.error)}})}function g(h,e,d){return e?new Promise(function(b,g){var j=[],i=h.transaction(n,"readwrite"),k=i.objectStore(n),c=k.index(o);c.openCursor().onsuccess=function(g){var a=g.target.result;if(a&&d-1e3*e>a.value[o]){var b=a.value[f];j.push(b),k.delete(b),a.continue()}},i.oncomplete=function(){b(j)},i.onabort=g}):Promise.resolve([])}function e(a,b){return b?new Promise(function(d,e){var g=[],h=a.transaction(n,"readwrite"),j=h.objectStore(n),k=j.index(o),c=k.count();k.count().onsuccess=function(){var d=c.result;d>b&&(k.openCursor().onsuccess=function(a){var h=a.target.result;if(h){var c=h.value[f];g.push(c),j.delete(c),d-g.length>b&&h.continue()}})},h.oncomplete=function(){d(g)},h.onabort=e}):Promise.resolve([])}var i="sw-toolbox-",j=1,n="store",f="url",o="timestamp",c={};a.exports={getDb:function(d){return d in c||(c[d]=b(d)),c[d]},setTimestampForUrl:function(c,a,f){return new Promise(function(j,e){var g=c.transaction(n,"readwrite"),h=g.objectStore(n);h.put({url:a,timestamp:f}),g.oncomplete=function(){j(c)},g.onabort=function(){e(g.error)}})},expireEntries:function(c,a,b,d){return g(c,b,d).then(function(b){return e(c,a).then(function(c){return b.concat(c)})})}}},{}],3:[function(e,b){"use strict";function c(b){return b.reduce(function(c,a){return c.concat(a)},[])}e("serviceworker-cache-polyfill");var d=e("./helpers"),f=e("./router"),g=e("./options");b.exports={fetchListener:function(c){var a=f.match(c.request);a?c.respondWith(a(c.request)):f.default&&"GET"===c.request.method&&0===c.request.url.indexOf("http")&&c.respondWith(f.default(c.request))},activateListener:function(a){d.debug("activate event fired");var b=g.cache.name+"$$$inactive$$$";a.waitUntil(d.renameCache(b,g.cache.name))},installListener:function(a){var b=g.cache.name+"$$$inactive$$$";d.debug("install event fired"),d.debug("creating cache ["+b+"]"),a.waitUntil(d.openCache({cache:{name:b}}).then(function(e){return Promise.all(g.preCacheItems).then(c).then(d.validatePrecacheInput).then(function(b){return d.debug("preCache list: "+(b.join(", ")||"(none)")),e.addAll(b)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(d,a){"use strict";var b;b=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,a.exports={cache:{name:"$$$toolbox-cache$$$"+b+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(c,a){"use strict";var b=new URL("./",self.location),h=b.pathname,f=c("path-to-regexp"),d=function(e,a,b,c){a instanceof RegExp?this.fullUrlRegExp=a:(0!==a.indexOf("/")&&(a=h+a),this.keys=[],this.regexp=f(a,this.keys)),this.method=e,this.options=c,this.handler=b};d.prototype.makeHandler=function(d){var e;if(this.regexp){var b=this.regexp.exec(d);e={},this.keys.forEach(function(c,a){e[c.name]=b[a+1]})}return function(b){return this.handler(b,e,this.options)}.bind(this)},a.exports=d},{"path-to-regexp":15}],6:[function(e,a){"use strict";function h(b){return b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var d=e("./route"),g=e("./helpers"),i=function(g,a){for(var b,c=g.entries(),d=c.next(),e=[];!d.done;)b=new RegExp(d.value[0]),b.test(a)&&e.push(d.value[1]),d=c.next();return e},b=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){b.prototype[e]=function(a,b,c){return this.add(e,a,b,c)}}),b.prototype.add=function(j,b,e,i){i=i||{};var k;b instanceof RegExp?k=RegExp:(k=i.origin||self.location.origin,k=k instanceof RegExp?k.source:h(k)),j=j.toLowerCase();var c=new d(j,b,e,i);this.routes.has(k)||this.routes.set(k,new Map);var l=this.routes.get(k);l.has(j)||l.set(j,new Map);var a=l.get(j),m=c.regexp||c.fullUrlRegExp;a.has(m.source)&&g.debug("\""+b+"\" resolves to same regex as existing route."),a.set(m.source,c)},b.prototype.matchMethod=function(f,a){var b=new URL(a),c=b.origin,d=b.pathname;return this._match(f,i(this.routes,c),d)||this._match(f,[this.routes.get(RegExp)],a)},b.prototype._match=function(f,a,b){if(0===a.length)return null;for(var c=0;c<a.length;c++){var d=a[c],e=d&&d.get(f.toLowerCase());if(e){var g=i(e,b);if(0<g.length)return g[0].makeHandler(b)}}return null},b.prototype.match=function(b){return this.matchMethod(b.method,b.url)||this.matchMethod("any",b.url)},a.exports=new b},{"./helpers":1,"./route":5}],7:[function(c,a){"use strict";var i=c("../options"),d=c("../helpers");a.exports=function(c,a,f){return f=f||{},d.debug("Strategy: cache first ["+c.url+"]",f),d.openCache(f).then(function(a){return a.match(c).then(function(a){var b=f.cache||i.cache,e=Date.now();return d.isResponseFresh(a,b.maxAgeSeconds,e)?a:d.fetchAndCache(c,f)})})}},{"../helpers":1,"../options":4}],8:[function(e,a){"use strict";var g=e("../options"),c=e("../helpers");a.exports=function(d,a,h){return h=h||{},c.debug("Strategy: cache only ["+d.url+"]",h),c.openCache(h).then(function(a){return a.match(d).then(function(d){var a=h.cache||g.cache,b=Date.now();if(c.isResponseFresh(d,a.maxAgeSeconds,b))return d})})}},{"../helpers":1,"../options":4}],9:[function(c,a){"use strict";var f=c("../helpers"),d=c("./cacheOnly");a.exports=function(g,b,e){return f.debug("Strategy: fastest ["+g.url+"]",e),new Promise(function(h,i){var j=!1,c=[],k=function(b){c.push(b.toString()),j?i(new Error("Both cache and network failed: \""+c.join("\", \"")+"\"")):j=!0},a=function(a){a instanceof Response?h(a):k("No result returned")};f.fetchAndCache(g.clone(),e).then(a,k),d(g,b,e).then(a,k)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(c,a){a.exports={networkOnly:c("./networkOnly"),networkFirst:c("./networkFirst"),cacheOnly:c("./cacheOnly"),cacheFirst:c("./cacheFirst"),fastest:c("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(c,a){"use strict";var h=c("../options"),d=c("../helpers");a.exports=function(g,b,n){n=n||{};var c=n.successResponses||h.successResponses,f=n.networkTimeoutSeconds||h.networkTimeoutSeconds;return d.debug("Strategy: network first ["+g.url+"]",n),d.openCache(n).then(function(b){var e,i,j=[];if(f){var a=new Promise(function(i){e=setTimeout(function(){b.match(g).then(function(a){var b=n.cache||h.cache,e=Date.now(),f=b.maxAgeSeconds;d.isResponseFresh(a,f,e)&&i(a)})},1e3*f)});j.push(a)}var k=d.fetchAndCache(g,n).then(function(b){if(e&&clearTimeout(e),c.test(b.status))return b;throw d.debug("Response was an HTTP error: "+b.statusText,n),i=b,new Error("Bad response")}).catch(function(c){return d.debug("Network or response error, fallback to cache ["+g.url+"]",n),b.match(g).then(function(a){if(a)return a;if(i)return i;throw c})});return j.push(k),Promise.race(j)})}},{"../helpers":1,"../options":4}],12:[function(d,a){"use strict";var e=d("../helpers");a.exports=function(c,a,b){return e.debug("Strategy: network only ["+c.url+"]",b),fetch(c)}},{"../helpers":1}],13:[function(h,a){"use strict";var b=h("./options"),i=h("./router"),j=h("./helpers"),f=h("./strategies"),g=h("./listeners");j.debug("Service Worker Toolbox is loading"),self.addEventListener("install",g.installListener),self.addEventListener("activate",g.activateListener),self.addEventListener("fetch",g.fetchListener),a.exports={networkOnly:f.networkOnly,networkFirst:f.networkFirst,cacheOnly:f.cacheOnly,cacheFirst:f.cacheFirst,fastest:f.fastest,router:i,options:b,cache:j.cache,uncache:j.uncache,precache:j.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(c,a){a.exports=Array.isArray||function(b){return"[object Array]"==Object.prototype.toString.call(b)}},{}],15:[function(n,b){function e(k,b){for(var e,u=[],n=0,t=0,o="",i=b&&b.delimiter||"/";null!=(e=a.exec(k));){var c=e[0],s=e[1],f=e.index;if(o+=k.slice(t,f),t=f+c.length,s)o+=s[1];else{var h=k[t],p=e[2],l=e[3],d=e[4],m=e[5],g=e[6],v=e[7];o&&(u.push(o),o="");var y=e[2]||i,A=d||m;u.push({name:l||n++,prefix:p||"",delimiter:y,optional:"?"===g||"*"===g,repeat:"+"===g||"*"===g,partial:null!=p&&null!=h&&h!==p,asterisk:!!v,pattern:A?q(A):v?".*":"[^"+r(y)+"]+?"})}}return t<k.length&&(o+=k.substr(t)),o&&u.push(o),u}function s(b){return encodeURI(b).replace(/[\/?#]/g,function(b){return"%"+b.charCodeAt(0).toString(16).toUpperCase()})}function k(b){return encodeURI(b).replace(/[?#]/g,function(b){return"%"+b.charCodeAt(0).toString(16).toUpperCase()})}function i(g){for(var b=Array(g.length),a=0;a<g.length;a++)"object"==typeof g[a]&&(b[a]=new RegExp("^(?:"+g[a].pattern+")$"));return function(a,c){for(var e,h="",i=a||{},m=c||{},n=m.pretty?s:encodeURIComponent,o=0;o<g.length;o++)if(e=g[o],"string"!=typeof e){var q,f=i[e.name];if(null==f){if(e.optional){e.partial&&(h+=e.prefix);continue}throw new TypeError("Expected \""+e.name+"\" to be defined")}if(d(f)){if(!e.repeat)throw new TypeError("Expected \""+e.name+"\" to not repeat, but received `"+JSON.stringify(f)+"`");if(0===f.length){if(e.optional)continue;throw new TypeError("Expected \""+e.name+"\" to not be empty")}for(var p=0;p<f.length;p++){if(q=n(f[p]),!b[o].test(q))throw new TypeError("Expected all \""+e.name+"\" to match \""+e.pattern+"\", but received `"+JSON.stringify(q)+"`");h+=(0===p?e.prefix:e.delimiter)+q}}else{if(q=e.asterisk?k(f):n(f),!b[o].test(q))throw new TypeError("Expected \""+e.name+"\" to match \""+e.pattern+"\", but received \""+q+"\"");h+=e.prefix+q}}else h+=e;return h}}function r(b){return b.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(b){return b.replace(/([=!:$\/()])/g,"\\$1")}function p(c,a){return c.keys=a,c}function t(b){return b.sensitive?"":"i"}function f(e,a){var b=e.source.match(/\((?!\?)/g);if(b)for(var c=0;c<b.length;c++)a.push({name:c,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,a)}function h(f,a,b){for(var c=[],d=0;d<f.length;d++)c.push(o(f[d],a,b).source);var e=new RegExp("(?:"+c.join("|")+")",t(b));return p(e,a)}function j(d,a,b){return l(e(d,b),a,b)}function l(f,a,b){d(a)||(b=a||b,a=[]),b=b||{};for(var e,g=b.strict,j=!1!==b.end,k="",m=0;m<f.length;m++)if(e=f[m],"string"==typeof e)k+=r(e);else{var i=r(e.prefix),c="(?:"+e.pattern+")";a.push(e),e.repeat&&(c+="(?:"+i+c+")*"),c=e.optional?e.partial?i+"("+c+")?":"(?:"+i+"("+c+"))?":i+"("+c+")",k+=c}var n=r(b.delimiter||"/"),o=k.slice(-n.length)===n;return g||(k=(o?k.slice(0,-n.length):k)+"(?:"+n+"(?=$))?"),k+=j?"$":g&&o?"":"(?="+n+"|$)",p(new RegExp("^"+k,t(b)),a)}function o(e,a,b){return d(a)||(b=a||b,a=[]),b=b||{},e instanceof RegExp?f(e,a):d(e)?h(e,a,b):j(e,a,b)}var d=n("isarray");b.exports=o,b.exports.parse=e,b.exports.compile=function(c,a){return i(e(c,a))},b.exports.tokensToFunction=i,b.exports.tokensToRegExp=l;var a=/(\\.)|([\/.])?(?:(?:\:(\w+)(?:\(((?:\\.|[^\\()])+)\))?|\(((?:\\.|[^\\()])+)\))([+*?])?|(\*))/g},{isarray:14}],16:[function(){!function(){var e=Cache.prototype.addAll,a=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(a)var f=a[1],c=parseInt(a[2]);e&&(!a||"Firefox"===f&&46<=c||"Chrome"===f&&50<=c)||(Cache.prototype.addAll=function(e){function f(b){this.name="NetworkError",this.code=19,this.message=b}var a=this;return f.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(1>arguments.length)throw new TypeError;return e=e.map(function(b){return b instanceof Request?b:b+""}),Promise.all(e.map(function(b){"string"==typeof b&&(b=new Request(b));var d=new URL(b.url).protocol;if("http:"!==d&&"https:"!==d)throw new f("Invalid scheme");return fetch(b.clone())}))}).then(function(b){if(b.some(function(b){return!b.ok}))throw new f("Incorrect response status");return Promise.all(b.map(function(c,b){return a.put(e[b],c)}))}).then(function(){})},Cache.prototype.add=function(b){return this.addAll([b])})}()},{}]},{},[13])(13)}),toolbox.router.get(/.*\.(png|jpg|gif|webp|svg)/i,toolbox.cacheFirst,{cache:{name:"images-cache",maxEntries:100,maxAgeSeconds:31557600}}),toolbox.router.get(/\/blog\/.*\.html/,toolbox.networkFirst,{cache:{name:"posts-cache",maxEntries:24,maxAgeSeconds:31557600}}),toolbox.router.get(/\/.*\.html/,toolbox.networkFirst,{cache:{name:"blog-list-cache",maxEntries:24,maxAgeSeconds:604800}}),toolbox.router.get(/\/(category|page)\/.*\.htmll/,toolbox.networkFirst,{cache:{name:"category-cache",maxEntries:72,maxAgeSeconds:604800}}),importScripts("js/sw/sw-toolbox.js","js/sw/sw-offline-google-analytics.prod.v0.0.25.js","js/sw/offline-analytics.js","js/sw/runtime-caching.js");