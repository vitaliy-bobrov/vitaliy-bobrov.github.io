"use strict";importScripts("workbox-v4.3.1/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"workbox-v4.3.1"}),importScripts("js/skip-waiting.js"),workbox.core.setCacheNameDetails({prefix:"metalsthith-blog-source"}),self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),self.__precacheManifest=[{url:"index.html",revision:"a1d8dd64ad2a1887e107305f8510e839"},{url:"images/icons/android-chrome-192x192.png",revision:"d93080af3a60172d23370b6e4c0e5d60"},{url:"images/icons/android-chrome-512x512.png",revision:"a34bafce1ec03ab7bd5dfb6d9c6fe750"},{url:"images/icons/apple-touch-icon.png",revision:"bd9b04089ca7ebcb0c71cbf8db6ea8fb"},{url:"images/icons/favicon-16x16.png",revision:"72a0dd25d823f250252bb1fd5760e097"},{url:"images/icons/favicon-32x32.png",revision:"d9a2bca0ccf738ab8d4ecb7f8265c912"},{url:"images/icons/launcher-icon-0-75x.png",revision:"8d51587089d6f19b66f8e082dc3d2284"},{url:"images/icons/launcher-icon-1-5x.png",revision:"0ee625977966eca854904735010e64a1"},{url:"images/icons/launcher-icon-1x.png",revision:"a0bc22e9b9f5a4f8c72ff5b303503bf2"},{url:"images/icons/launcher-icon-2x.png",revision:"df669780b1e375fe10ee5bbf677d8302"},{url:"images/icons/launcher-icon-3x.png",revision:"91fbfd7d5639f9f8e5baa7192d8240b7"},{url:"images/icons/launcher-icon-4x.png",revision:"920877170e199e1e358080bcc499e876"},{url:"images/icons/launcher-icon-full.png",revision:"55b0130021a66c46177db2602128a1e5"},{url:"images/icons/mstile-150x150.png",revision:"84fdbbbdf1ed7bc0969198034cbc41c9"},{url:"images/authors/bobrov/avatar.jpg",revision:"c6dfa14e6f2ef51ad176b71d0164ee22"},{url:"images/authors/bobrov/avatar.webp",revision:"c83d2594ccdf7c1171f24131cddb3c5b"},{url:"images/authors/bobrov/avatar@2x.jpg",revision:"5277a99073cc6a934481b5b8f65023f8"},{url:"images/authors/bobrov/avatar@2x.webp",revision:"7fb47f7997adaaf7a494d790e1ae001a"},{url:"images/bg-desktop.jpg",revision:"454e9b8562945cb0aaf43bfc2401c534"},{url:"images/bg-mobile.jpg",revision:"91dec6b94c34ac74a7b929a035eb7bf9"},{url:"images/bg-tablet.jpg",revision:"b4f4466a4d3380fc627984cb278ae7d6"},{url:"images/logo-mobile.png",revision:"50ce081632b17c1259f36d3cb65b1c02"},{url:"images/logo-mobile.webp",revision:"96647e74b32fe0414705628cdcd0534c"},{url:"images/logo-mobile@2x.png",revision:"00d96fd9bc12120fb619fa21cfff79f3"},{url:"images/logo-mobile@2x.webp",revision:"9228c58ff09e4258d1dd138d1b6a43f6"},{url:"images/logo-tablet.png",revision:"00d96fd9bc12120fb619fa21cfff79f3"},{url:"images/logo-tablet.webp",revision:"9228c58ff09e4258d1dd138d1b6a43f6"},{url:"images/logo-tablet@2x.png",revision:"a3618444ff3133e663a9571c0df759ff"},{url:"images/logo-tablet@2x.webp",revision:"cb6dcbbcfee6bf799c991273132b6a09"},{url:"images/logo.png",revision:"e3fb980a4ba05a1050b2ba547fdb5ecc"},{url:"images/logo.webp",revision:"87d1446d50af1836355c97789d1f2e2f"},{url:"images/logo@2x.png",revision:"56d9d1dc6cef686a9aaef096b321c050"},{url:"images/logo@2x.webp",revision:"f61129ed2b46e772a70593ffe19bc53c"},{url:"js/main.min.js",revision:"9b48c89e0c545e44e2f1140d2d79bf97"},{url:"js/material-bg.js",revision:"415f2af895ec395d34cf3021674f5321"},{url:"js/skip-waiting.js",revision:"3547c66e76b56cef3c2e34ba6a81bda8"},{url:"css/commento.css",revision:"9f9cf6585c4bae9f4aeed30dc4ea8f9d"},{url:"css/styles.css",revision:"28f56e4db5be628641ccc88c1654bb57"},{url:"about/index.html",revision:"078d064bd890f71931c35f7312de7766"},{url:"speaker/index.html",revision:"c4e4276dfea75a05ef4c395221d87d60"}].concat(self.__precacheManifest||[]),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.registerRoute(/.commento.io\//,new workbox.strategies.StaleWhileRevalidate({cacheName:"commento",matchOptions:{ignoreSearch:!0},plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]})]}),"GET"),workbox.routing.registerRoute(/.*\.(png|jpg|gif|webp|svg)/i,new workbox.strategies.CacheFirst({cacheName:"images-cache",plugins:[new workbox.expiration.Plugin({maxEntries:100,maxAgeSeconds:31557600,purgeOnQuotaError:!1})]}),"GET"),workbox.routing.registerRoute(/\/blog\/.*\.html/,new workbox.strategies.CacheFirst({cacheName:"posts-cache",plugins:[new workbox.expiration.Plugin({maxEntries:24,maxAgeSeconds:604800,purgeOnQuotaError:!1})]}),"GET"),workbox.routing.registerRoute(/\/(category|page)\/.*\.html/,new workbox.strategies.CacheOnly({cacheName:"category-cache",plugins:[new workbox.expiration.Plugin({maxEntries:72,maxAgeSeconds:604800,purgeOnQuotaError:!1})]}),"GET"),workbox.googleAnalytics.initialize({});