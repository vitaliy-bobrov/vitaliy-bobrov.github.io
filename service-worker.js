"use strict";var precacheConfig=[["about/index.html","b291f9c65f30c3fc018600bc80a15492"],["css/styles.css","fa837547c324d9700471c0f91422a918"],["images/authors/bobrov/avatar.jpg","c6dfa14e6f2ef51ad176b71d0164ee22"],["images/authors/bobrov/avatar.webp","fdee41bf83c86fedd9515967ef0d6e4a"],["images/authors/bobrov/avatar@2x.jpg","5277a99073cc6a934481b5b8f65023f8"],["images/authors/bobrov/avatar@2x.webp","488965e42986d7504893da0893cf09c1"],["images/bg-desktop.jpg","454e9b8562945cb0aaf43bfc2401c534"],["images/bg-mobile.jpg","91dec6b94c34ac74a7b929a035eb7bf9"],["images/bg-tablet.jpg","b4f4466a4d3380fc627984cb278ae7d6"],["images/icons/android-chrome-192x192.png","d93080af3a60172d23370b6e4c0e5d60"],["images/icons/android-chrome-512x512.png","a34bafce1ec03ab7bd5dfb6d9c6fe750"],["images/icons/apple-touch-icon.png","bd9b04089ca7ebcb0c71cbf8db6ea8fb"],["images/icons/favicon-16x16.png","72a0dd25d823f250252bb1fd5760e097"],["images/icons/favicon-32x32.png","d9a2bca0ccf738ab8d4ecb7f8265c912"],["images/icons/launcher-icon-0-75x.png","8d51587089d6f19b66f8e082dc3d2284"],["images/icons/launcher-icon-1-5x.png","0ee625977966eca854904735010e64a1"],["images/icons/launcher-icon-1x.png","a0bc22e9b9f5a4f8c72ff5b303503bf2"],["images/icons/launcher-icon-2x.png","df669780b1e375fe10ee5bbf677d8302"],["images/icons/launcher-icon-3x.png","91fbfd7d5639f9f8e5baa7192d8240b7"],["images/icons/launcher-icon-4x.png","920877170e199e1e358080bcc499e876"],["images/icons/launcher-icon-full.png","55b0130021a66c46177db2602128a1e5"],["images/icons/mstile-150x150.png","84fdbbbdf1ed7bc0969198034cbc41c9"],["images/logo-mobile.png","50ce081632b17c1259f36d3cb65b1c02"],["images/logo-mobile.webp","58eea6bfd080bea2fb97f2d1b6e697c8"],["images/logo-mobile@2x.png","00d96fd9bc12120fb619fa21cfff79f3"],["images/logo-mobile@2x.webp","023e80557950da989eec4675e21538d8"],["images/logo-tablet.png","00d96fd9bc12120fb619fa21cfff79f3"],["images/logo-tablet.webp","023e80557950da989eec4675e21538d8"],["images/logo-tablet@2x.png","a3618444ff3133e663a9571c0df759ff"],["images/logo-tablet@2x.webp","ad4dfffe3ac2cbc42b83b518d2411e37"],["images/logo.png","e3fb980a4ba05a1050b2ba547fdb5ecc"],["images/logo.webp","c3fbf4497643378a9a70e30da5023f15"],["images/logo@2x.png","56d9d1dc6cef686a9aaef096b321c050"],["images/logo@2x.webp","48ebd011540646b68980a03e284a756f"],["js/main.min.js","595dae16244a39f334e4e4ef1dd3f1db"],["js/material-bg.js","390190019071e2246231c1d7954540e0"],["js/sw/offline-analytics.js","9cacc73cea28cd7015ebd0de0f2d94fe"],["js/sw/runtime-caching.js","0bb103aabbee66d42713a896aa2496dc"],["js/sw/sw-offline-google-analytics.prod.v0.0.25.js","2f9788294deb9cb959e9c4738573bcfd"],["js/sw/sw-toolbox.js","5bdc2a93c0317fba71d650ff90774e17"],["speaker/index.html","551362ac9a467399ce30ca6878be37b8"]],cacheName="sw-precache-v3-metalsthith-blog-source-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,b){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=b),c.toString()},cleanResponse=function(a){if(!a.redirected)return Promise.resolve(a);var b="body"in a?Promise.resolve(a.body):a.blob();return b.then(function(b){return new Response(b,{headers:a.headers,status:a.status,statusText:a.statusText})})},createCacheKey=function(a,b,c,d){var e=new URL(a);return d&&e.pathname.match(d)||(e.search+=(e.search?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(a,b){if(0===a.length)return!0;var c=new URL(b).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,b){var c=new URL(a);return c.hash="",c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return b.every(function(b){return!b.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var b=a[0],c=a[1],d=new URL(b,self.location),e=createCacheKey(d,hashParamName,c,!1);return[d.toString(),e]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(b){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!b.has(c)){var d=new Request(c,{credentials:"same-origin"});return fetch(d).then(function(b){if(!b.ok)throw new Error("Request for "+c+" returned a response with status "+b.status);return cleanResponse(b).then(function(b){return a.put(c,b)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var b=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!b.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var b,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);b=urlsToCacheKeys.has(c);!b&&"index.html"&&(c=addDirectoryIndex(c,"index.html"),b=urlsToCacheKeys.has(c));void 0,b&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(b){return console.warn("Couldn't serve response for \"%s\" from cache: %O",a.request.url,b),fetch(a.request)}))}}),!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.toolbox=a()}}(function(){return function b(d,e,g){function a(h,c){if(!e[h]){if(!d[h]){var i="function"==typeof require&&require;if(!c&&i)return i(h,!0);if(f)return f(h,!0);var j=new Error("Cannot find module '"+h+"'");throw j.code="MODULE_NOT_FOUND",j}var k=e[h]={exports:{}};d[h][0].call(k.exports,function(b){var c=d[h][1][b];return a(c?c:b)},k,k.exports,b,d,e,g)}return e[h].exports}for(var f="function"==typeof require&&require,h=0;h<g.length;h++)a(g[h]);return a}({1:[function(a,b){"use strict";function f(a,b){b=b||{};var c=b.debug||l.debug;c&&console.log("[sw-toolbox] "+a)}function h(a){var b;return a&&a.cache&&(b=a.cache.name),b=b||l.cache.name,caches.open(b)}function i(a,b,d){var e=c.bind(null,a,b,d);k=k?k.then(e):e()}function c(b,d,e){var g=b.url,h=e.maxAgeSeconds,i=e.maxEntries,c=e.name,j=Date.now();return f("Updating LRU order for "+g+". Max entries is "+i+", max age is "+h),m.getDb(c).then(function(a){return m.setTimestampForUrl(a,g,j)}).then(function(a){return m.expireEntries(a,i,h,j)}).then(function(a){f("Successfully updated IDB.");var b=a.map(function(a){return d.delete(a)});return Promise.all(b).then(function(){f("Done with cache cleanup.")})}).catch(function(a){f(a)})}function j(a){var b=Array.isArray(a);if(b&&a.forEach(function(a){"string"==typeof a||a instanceof Request||(b=!1)}),!b)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return a}var k,l=a("./options"),m=a("./idb-cache-expiration");b.exports={debug:f,fetchAndCache:function(a,b){b=b||{};var c=b.successResponses||l.successResponses;return fetch(a.clone()).then(function(d){return"GET"===a.method&&c.test(d.status)&&h(b).then(function(c){c.put(a,d).then(function(){var d=b.cache||l.cache;(d.maxEntries||d.maxAgeSeconds)&&d.name&&i(a,c,d)})}),d.clone()})},openCache:h,renameCache:function(a,b,c){return f("Renaming cache: ["+a+"] to ["+b+"]",c),caches.delete(b).then(function(){return Promise.all([caches.open(a),caches.open(b)]).then(function(b){var c=b[0],d=b[1];return c.keys().then(function(a){return Promise.all(a.map(function(a){return c.match(a).then(function(b){return d.put(a,b)})}))}).then(function(){return caches.delete(a)})})})},cache:function(a,b){return h(b).then(function(b){return b.add(a)})},uncache:function(a,b){return h(b).then(function(b){return b.delete(a)})},precache:function(a){a instanceof Promise||j(a),l.preCacheItems=l.preCacheItems.concat(a)},validatePrecacheInput:j,isResponseFresh:function(a,b,c){if(!a)return!1;if(b){var d=a.headers.get("date");if(d){var e=new Date(d);if(e.getTime()+1e3*b<c)return!1}}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(a,b){"use strict";function g(a){return new Promise(function(b,c){var d=indexedDB.open(j+a,k);d.onupgradeneeded=function(){var a=d.result.createObjectStore(f,{keyPath:h});a.createIndex(m,m,{unique:!1})},d.onsuccess=function(){b(d.result)},d.onerror=function(){c(d.error)}})}function e(a){return a in l||(l[a]=g(a)),l[a]}function i(b,a,d){return a?new Promise(function(e,g){var i=[],c=b.transaction(f,"readwrite"),j=c.objectStore(f),a=j.index(m);a.openCursor().onsuccess=function(a){var b=a.target.result;if(b&&d-1e3*b>b.value[m]){var c=b.value[h];i.push(c),j.delete(c),b.continue()}},c.oncomplete=function(){e(i)},c.onabort=g}):Promise.resolve([])}function c(b,d){return d?new Promise(function(e,g){var j=[],k=b.transaction(f,"readwrite"),l=k.objectStore(f),c=l.index(m),i=c.count();c.count().onsuccess=function(){var a=i.result;a>d&&(c.openCursor().onsuccess=function(b){var c=b.target.result;if(c){var e=c.value[h];j.push(e),l.delete(e),a-j.length>d&&c.continue()}})},k.oncomplete=function(){e(j)},k.onabort=g}):Promise.resolve([])}var j="sw-toolbox-",k=1,f="store",h="url",m="timestamp",l={};b.exports={getDb:e,setTimestampForUrl:function(a,b,d){return new Promise(function(e,g){var h=a.transaction(f,"readwrite"),i=h.objectStore(f);i.put({url:b,timestamp:d}),h.oncomplete=function(){e(a)},h.onabort=function(){g(h.error)}})},expireEntries:function(a,b,d,e){return i(a,d,e).then(function(d){return c(a,b).then(function(a){return d.concat(a)})})}}},{}],3:[function(b,c){"use strict";function d(a){return a.reduce(function(a,b){return a.concat(b)},[])}b("serviceworker-cache-polyfill");var f=b("./helpers"),g=b("./router"),a=b("./options");c.exports={fetchListener:function(a){var b=g.match(a.request);b?a.respondWith(b(a.request)):g.default&&"GET"===a.request.method&&0===a.request.url.indexOf("http")&&a.respondWith(g.default(a.request))},activateListener:function(b){f.debug("activate event fired");var c=a.cache.name+"$$$inactive$$$";b.waitUntil(f.renameCache(c,a.cache.name))},installListener:function(b){var c=a.cache.name+"$$$inactive$$$";f.debug("install event fired"),f.debug("creating cache ["+c+"]"),b.waitUntil(f.openCache({cache:{name:c}}).then(function(b){return Promise.all(a.preCacheItems).then(d).then(f.validatePrecacheInput).then(function(a){return f.debug("preCache list: "+(a.join(", ")||"(none)")),b.addAll(a)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(a,b){"use strict";var c;c=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,b.exports={cache:{name:"$$$toolbox-cache$$$"+c+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(a,b){"use strict";var d=new URL("./",self.location),f=d.pathname,g=a("path-to-regexp"),e=function(a,b,c,d){b instanceof RegExp?this.fullUrlRegExp=b:(0!==b.indexOf("/")&&(b=f+b),this.keys=[],this.regexp=g(b,this.keys)),this.method=a,this.options=d,this.handler=c};e.prototype.makeHandler=function(a){var b;if(this.regexp){var c=this.regexp.exec(a);b={},this.keys.forEach(function(a,d){b[a.name]=c[d+1]})}return function(a){return this.handler(a,b,this.options)}.bind(this)},b.exports=e},{"path-to-regexp":15}],6:[function(a,b){"use strict";function d(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var g=a("./route"),j=a("./helpers"),f=function(a,b){for(var c,d=a.entries(),e=d.next(),f=[];!e.done;)c=new RegExp(e.value[0]),c.test(b)&&f.push(e.value[1]),e=d.next();return f},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(a){c.prototype[a]=function(b,c,d){return this.add(a,b,c,d)}}),c.prototype.add=function(b,i,k,l){l=l||{};var m;i instanceof RegExp?m=RegExp:(m=l.origin||self.location.origin,m=m instanceof RegExp?m.source:d(m)),b=b.toLowerCase();var n=new g(b,i,k,l);this.routes.has(m)||this.routes.set(m,new Map);var a=this.routes.get(m);a.has(b)||a.set(b,new Map);var o=a.get(b),f=n.regexp||n.fullUrlRegExp;o.has(f.source)&&j.debug("\""+i+"\" resolves to same regex as existing route."),o.set(f.source,n)},c.prototype.matchMethod=function(a,b){var c=new URL(b),d=c.origin,e=c.pathname;return this._match(a,f(this.routes,d),e)||this._match(a,[this.routes.get(RegExp)],b)},c.prototype._match=function(a,b,c){if(0===b.length)return null;for(var d=0;d<b.length;d++){var e=b[d],g=e&&e.get(a.toLowerCase());if(g){var h=f(g,c);if(0<h.length)return h[0].makeHandler(c)}}return null},c.prototype.match=function(a){return this.matchMethod(a.method,a.url)||this.matchMethod("any",a.url)},b.exports=new c},{"./helpers":1,"./route":5}],7:[function(a,b){"use strict";var d=a("../options"),f=a("../helpers");b.exports=function(a,b,e){return e=e||{},f.debug("Strategy: cache first ["+a.url+"]",e),f.openCache(e).then(function(b){return b.match(a).then(function(b){var g=e.cache||d.cache,h=Date.now();return f.isResponseFresh(b,g.maxAgeSeconds,h)?b:f.fetchAndCache(a,e)})})}},{"../helpers":1,"../options":4}],8:[function(a,b){"use strict";var c=a("../options"),d=a("../helpers");b.exports=function(a,b,f){return f=f||{},d.debug("Strategy: cache only ["+a.url+"]",f),d.openCache(f).then(function(b){return b.match(a).then(function(a){var b=f.cache||c.cache,e=Date.now();if(d.isResponseFresh(a,b.maxAgeSeconds,e))return a})})}},{"../helpers":1,"../options":4}],9:[function(a,b){"use strict";var d=a("../helpers"),g=a("./cacheOnly");b.exports=function(b,e,h){return d.debug("Strategy: fastest ["+b.url+"]",h),new Promise(function(i,j){var c=!1,k=[],a=function(a){k.push(a.toString()),c?j(new Error("Both cache and network failed: \""+k.join("\", \"")+"\"")):c=!0},l=function(b){b instanceof Response?i(b):a("No result returned")};d.fetchAndCache(b.clone(),h).then(l,a),g(b,e,h).then(l,a)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(a,b){b.exports={networkOnly:a("./networkOnly"),networkFirst:a("./networkFirst"),cacheOnly:a("./cacheOnly"),cacheFirst:a("./cacheFirst"),fastest:a("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(a,b){"use strict";function c(b,a,i){i=i||{};var f=i.successResponses||d.successResponses,e=i.networkTimeoutSeconds||d.networkTimeoutSeconds;return g.debug("Strategy: network first ["+b.url+"]",i),g.openCache(i).then(function(c){var j,k,l=[];if(e){var m=new Promise(function(a){j=setTimeout(function(){c.match(b).then(function(b){var e=i.cache||d.cache,f=Date.now(),c=e.maxAgeSeconds;g.isResponseFresh(b,c,f)&&a(b)})},1e3*e)});l.push(m)}var n=g.fetchAndCache(b,i).then(function(a){if(j&&clearTimeout(j),f.test(a.status))return a;throw g.debug("Response was an HTTP error: "+a.statusText,i),k=a,new Error("Bad response")}).catch(function(a){return g.debug("Network or response error, fallback to cache ["+b.url+"]",i),c.match(b).then(function(b){if(b)return b;if(k)return k;throw a})});return l.push(n),Promise.race(l)})}var d=a("../options"),g=a("../helpers");b.exports=c},{"../helpers":1,"../options":4}],12:[function(a,b){"use strict";var c=a("../helpers");b.exports=function(a,b,d){return c.debug("Strategy: network only ["+a.url+"]",d),fetch(a)}},{"../helpers":1}],13:[function(a,b){"use strict";var d=a("./options"),e=a("./router"),f=a("./helpers"),g=a("./strategies"),c=a("./listeners");f.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),b.exports={networkOnly:g.networkOnly,networkFirst:g.networkFirst,cacheOnly:g.cacheOnly,cacheFirst:g.cacheFirst,fastest:g.fastest,router:e,options:d,cache:f.cache,uncache:f.uncache,precache:f.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(a,b){b.exports=Array.isArray||function(a){return"[object Array]"==Object.prototype.toString.call(a)}},{}],15:[function(b,e){function j(b,e){for(var j,t=[],r=0,x=0,z="",A=e&&e.delimiter||"/";null!=(j=u.exec(b));){var s=j[0],f=j[1],h=j.index;if(z+=b.slice(x,h),x=h+s.length,f)z+=f[1];else{var p=b[x],l=j[2],d=j[3],m=j[4],g=j[5],v=j[6],w=j[7];z&&(t.push(z),z="");var y=j[2]||A,k=m||g;t.push({name:d||r++,prefix:l||"",delimiter:y,optional:"?"===v||"*"===v,repeat:"+"===v||"*"===v,partial:null!=l&&null!=p&&p!==l,asterisk:!!w,pattern:k?a(k):w?".*":"[^"+q(y)+"]+?"})}}return x<b.length&&(z+=b.substr(x)),z&&t.push(z),t}function k(a){return encodeURI(a).replace(/[\/?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function i(a){return encodeURI(a).replace(/[?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function c(b){for(var a=Array(b.length),c=0;c<b.length;c++)"object"==typeof b[c]&&(a[c]=new RegExp("^(?:"+b[c].pattern+")$"));return function(c,e){for(var j,m="",n=c||{},q=e||{},r=q.pretty?k:encodeURIComponent,s=0;s<b.length;s++)if(j=b[s],"string"!=typeof j){var t,u=n[j.name];if(null==u){if(j.optional){j.partial&&(m+=j.prefix);continue}throw new TypeError("Expected \""+j.name+"\" to be defined")}if(g(u)){if(!j.repeat)throw new TypeError("Expected \""+j.name+"\" to not repeat, but received `"+JSON.stringify(u)+"`");if(0===u.length){if(j.optional)continue;throw new TypeError("Expected \""+j.name+"\" to not be empty")}for(var l=0;l<u.length;l++){if(t=r(u[l]),!a[s].test(t))throw new TypeError("Expected all \""+j.name+"\" to match \""+j.pattern+"\", but received `"+JSON.stringify(t)+"`");m+=(0==l?j.prefix:j.delimiter)+t}}else{if(t=j.asterisk?i(u):r(u),!a[s].test(t))throw new TypeError("Expected \""+j.name+"\" to match \""+j.pattern+"\", but received \""+t+"\"");m+=j.prefix+t}}else m+=j;return m}}function q(a){return a.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(a){return a.replace(/([=!:$\/()])/g,"\\$1")}function w(a,b){return a.keys=b,a}function f(a){return a.sensitive?"":"i"}function h(a,b){var c=a.source.match(/\((?!\?)/g);if(c)for(var d=0;d<c.length;d++)b.push({name:d,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return w(a,b)}function o(a,b,c){for(var d=[],e=0;e<a.length;e++)d.push(m(a[e],b,c).source);var g=new RegExp("(?:"+d.join("|")+")",f(c));return w(g,b)}function l(a,b,c){return d(j(a,c),b,c)}function d(a,b,e){g(b)||(e=b||e,b=[]),e=e||{};for(var h,j=e.strict,k=!1!==e.end,m="",o=0;o<a.length;o++)if(h=a[o],"string"==typeof h)m+=q(h);else{var r=q(h.prefix),u="(?:"+h.pattern+")";b.push(h),h.repeat&&(u+="(?:"+r+u+")*"),u=h.optional?h.partial?r+"("+u+")?":"(?:"+r+"("+u+"))?":r+"("+u+")",m+=u}var v=q(e.delimiter||"/"),l=m.slice(-v.length)===v;return j||(m=(l?m.slice(0,-v.length):m)+"(?:"+v+"(?=$))?"),m+=k?"$":j&&l?"":"(?="+v+"|$)",w(new RegExp("^"+m,f(e)),b)}function m(a,b,c){return g(b)||(c=b||c,b=[]),c=c||{},a instanceof RegExp?h(a,b):g(a)?o(a,b,c):l(a,b,c)}var g=b("isarray");e.exports=m,e.exports.parse=j,e.exports.compile=function(a,b){return c(j(a,b))},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=d;var u=new RegExp("(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))","g")},{isarray:14}],16:[function(){!function(){var a=Cache.prototype.addAll,b=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(b)var c=b[1],d=parseInt(b[2]);a&&(!b||"Firefox"===c&&46<=d||"Chrome"===c&&50<=d)||(Cache.prototype.addAll=function(a){function b(a){this.name="NetworkError",this.code=19,this.message=a}var c=this;return b.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(1>arguments.length)throw new TypeError;return a=a.map(function(a){return a instanceof Request?a:a+""}),Promise.all(a.map(function(a){"string"==typeof a&&(a=new Request(a));var c=new URL(a.url).protocol;if("http:"!==c&&"https:"!==c)throw new b("Invalid scheme");return fetch(a.clone())}))}).then(function(d){if(d.some(function(a){return!a.ok}))throw new b("Incorrect response status");return Promise.all(d.map(function(b,d){return c.put(a[d],b)}))}).then(function(){})},Cache.prototype.add=function(a){return this.addAll([a])})}()},{}]},{},[13])(13)}),toolbox.router.get(/.*\.(png|jpg|gif|webp|svg)/i,toolbox.cacheFirst,{cache:{name:"images-cache",maxEntries:100,maxAgeSeconds:31557600}}),toolbox.router.get(/\/blog\/.*\.html/,toolbox.networkFirst,{cache:{name:"posts-cache",maxEntries:24,maxAgeSeconds:31557600}}),toolbox.router.get(/\/.*\.html/,toolbox.networkFirst,{cache:{name:"blog-list-cache",maxEntries:24,maxAgeSeconds:604800}}),toolbox.router.get(/\/(category|page)\/.*\.html/,toolbox.networkFirst,{cache:{name:"category-cache",maxEntries:72,maxAgeSeconds:604800}}),importScripts("js/sw/sw-toolbox.js","js/sw/sw-offline-google-analytics.prod.v0.0.25.js","js/sw/offline-analytics.js","js/sw/runtime-caching.js");