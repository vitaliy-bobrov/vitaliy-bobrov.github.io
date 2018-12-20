"use strict";importScripts("workbox-v3.6.3/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"workbox-v3.6.3"}),workbox.core.setCacheNameDetails({prefix:"metalsthith-blog-source"}),self.__precacheManifest=[{url:"index.html",revision:"2409fdafa670ac1579ce01c5a3317c64"},{url:"images/icons/android-chrome-192x192.png",revision:"d93080af3a60172d23370b6e4c0e5d60"},{url:"images/icons/android-chrome-512x512.png",revision:"a34bafce1ec03ab7bd5dfb6d9c6fe750"},{url:"images/icons/apple-touch-icon.png",revision:"bd9b04089ca7ebcb0c71cbf8db6ea8fb"},{url:"images/icons/favicon-16x16.png",revision:"72a0dd25d823f250252bb1fd5760e097"},{url:"images/icons/favicon-32x32.png",revision:"d9a2bca0ccf738ab8d4ecb7f8265c912"},{url:"images/icons/launcher-icon-0-75x.png",revision:"8d51587089d6f19b66f8e082dc3d2284"},{url:"images/icons/launcher-icon-1-5x.png",revision:"0ee625977966eca854904735010e64a1"},{url:"images/icons/launcher-icon-1x.png",revision:"a0bc22e9b9f5a4f8c72ff5b303503bf2"},{url:"images/icons/launcher-icon-2x.png",revision:"df669780b1e375fe10ee5bbf677d8302"},{url:"images/icons/launcher-icon-3x.png",revision:"91fbfd7d5639f9f8e5baa7192d8240b7"},{url:"images/icons/launcher-icon-4x.png",revision:"920877170e199e1e358080bcc499e876"},{url:"images/icons/launcher-icon-full.png",revision:"55b0130021a66c46177db2602128a1e5"},{url:"images/icons/mstile-150x150.png",revision:"84fdbbbdf1ed7bc0969198034cbc41c9"},{url:"images/authors/bobrov/avatar.jpg",revision:"c6dfa14e6f2ef51ad176b71d0164ee22"},{url:"images/authors/bobrov/avatar.webp",revision:"fdee41bf83c86fedd9515967ef0d6e4a"},{url:"images/authors/bobrov/avatar@2x.jpg",revision:"5277a99073cc6a934481b5b8f65023f8"},{url:"images/authors/bobrov/avatar@2x.webp",revision:"488965e42986d7504893da0893cf09c1"},{url:"images/bg-desktop.jpg",revision:"454e9b8562945cb0aaf43bfc2401c534"},{url:"images/bg-mobile.jpg",revision:"91dec6b94c34ac74a7b929a035eb7bf9"},{url:"images/bg-tablet.jpg",revision:"b4f4466a4d3380fc627984cb278ae7d6"},{url:"images/logo-mobile.png",revision:"50ce081632b17c1259f36d3cb65b1c02"},{url:"images/logo-mobile.webp",revision:"58eea6bfd080bea2fb97f2d1b6e697c8"},{url:"images/logo-mobile@2x.png",revision:"00d96fd9bc12120fb619fa21cfff79f3"},{url:"images/logo-mobile@2x.webp",revision:"023e80557950da989eec4675e21538d8"},{url:"images/logo-tablet.png",revision:"00d96fd9bc12120fb619fa21cfff79f3"},{url:"images/logo-tablet.webp",revision:"023e80557950da989eec4675e21538d8"},{url:"images/logo-tablet@2x.png",revision:"a3618444ff3133e663a9571c0df759ff"},{url:"images/logo-tablet@2x.webp",revision:"ad4dfffe3ac2cbc42b83b518d2411e37"},{url:"images/logo.png",revision:"e3fb980a4ba05a1050b2ba547fdb5ecc"},{url:"images/logo.webp",revision:"c3fbf4497643378a9a70e30da5023f15"},{url:"images/logo@2x.png",revision:"56d9d1dc6cef686a9aaef096b321c050"},{url:"images/logo@2x.webp",revision:"48ebd011540646b68980a03e284a756f"},{url:"js/main.min.js",revision:"e7e6d4ca9d40c671351cadec5a5599a2"},{url:"js/material-bg.js",revision:"390190019071e2246231c1d7954540e0"},{url:"css/styles.css",revision:"f872815bb090cf895aea1004e9d9b46f"},{url:"about/index.html",revision:"3d1ea953019fb493ac496660463d3339"},{url:"speaker/index.html",revision:"28d124f3833501027a8f84d89d64df52"}].concat(self.__precacheManifest||[]),workbox.precaching.suppressWarnings(),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.registerRoute(/.(?:googleapis|gstatic|google-analytics).com\//,workbox.strategies.staleWhileRevalidate({cacheName:"gapi",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]})]}),"GET"),workbox.routing.registerRoute(/.(?:bobrov-blog.disqus|disquscdn).com\//,workbox.strategies.staleWhileRevalidate({cacheName:"disqus",matchOptions:{ignoreSearch:!0},plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]})]}),"GET"),workbox.routing.registerRoute(/.*\.(png|jpg|gif|webp|svg)/i,workbox.strategies.cacheFirst({cacheName:"images-cache",plugins:[new workbox.expiration.Plugin({maxEntries:100,maxAgeSeconds:31557600,purgeOnQuotaError:!1})]}),"GET"),workbox.routing.registerRoute(/\/blog\/.*\.html/,workbox.strategies.cacheFirst({cacheName:"posts-cache",plugins:[new workbox.expiration.Plugin({maxEntries:24,maxAgeSeconds:604800,purgeOnQuotaError:!1})]}),"GET"),workbox.routing.registerRoute(/\/(category|page)\/.*\.html/,workbox.strategies.cacheOnly({cacheName:"category-cache",plugins:[new workbox.expiration.Plugin({maxEntries:72,maxAgeSeconds:604800,purgeOnQuotaError:!1})]}),"GET"),workbox.googleAnalytics.initialize({});