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
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","9aa462114c17ecce3c2a024d539cafe6"],["blog/adding-comments-to-metalsmith/index.html","575ef6923fec3e53b566bc3883f7c3c6"],["blog/five-reasons-choose-metalsmith/index.html","0bddaa6e4e0ff809f2be068ee468fa5e"],["blog/hello-world/index.html","c14f2d2584c16440c0906771108a93fd"],["blog/tasks-from-interviews-yandex/index.html","6532bb648c8c73681c8f03d1122c177f"],["blog/webpack-2-migration-tips/index.html","c6b16c93c035ec3b7109f963c43e98da"],["css/styles.css","5a13c599568a89b0844e75fff4b8ee4f"],["images/authors/bobrov/avatar.jpg","2aed5bfdfaad04f57fa4e8d7f3d22b1b"],["images/authors/bobrov/avatar.webp","73212506d1ce011370748a9465d3e982"],["images/authors/bobrov/avatar@2x.jpg","2b191ba395eed8668c494b971cf84397"],["images/authors/bobrov/avatar@2x.webp","d250b9fb141b3b1fdc96f64401999b25"],["images/bg-desktop.jpg","3f724547c9015f7c7dde42c6ec68dba9"],["images/bg-desktop.webp","d006906924bc81c8549b443aaec64a4f"],["images/bg-mobile.jpg","530c6b40d3200507a939f645060a0b33"],["images/bg-mobile.webp","1519239c7993ef0b07e7ca3302a23b98"],["images/bg-tablet.jpg","668cc62d3254a1abaf110a8cbb2530f1"],["images/bg-tablet.webp","088a9e4e54eed4603a78d8f282da7ba3"],["images/blog-og.jpg","33528245d18cae1a74b55c3c7fe5b977"],["images/icons/android-chrome-192x192.png","616148cbe87ee4d796dac1d9bf1386d2"],["images/icons/android-chrome-512x512.png","5bf15ca5405617ae8c6f77a904e7ea47"],["images/icons/apple-touch-icon.png","609911881611db79cd527f8d72cc8cbf"],["images/icons/favicon-16x16.png","72a0dd25d823f250252bb1fd5760e097"],["images/icons/favicon-32x32.png","d9a2bca0ccf738ab8d4ecb7f8265c912"],["images/icons/mstile-150x150.png","39a208c87b02029739dbc6003baf949f"],["images/logo-mobile.png","50ce081632b17c1259f36d3cb65b1c02"],["images/logo-mobile.webp","803c22c41a02093b6c87f2bd73b99a6c"],["images/logo-mobile@2x.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-mobile@2x.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet.png","2e65d77b5d0c7a5ee0b9c8af2fd59c7e"],["images/logo-tablet.webp","7e6f544ac5d85542ac20487d29760bc4"],["images/logo-tablet@2x.png","02ffc4306e6b393940320b9425d55afd"],["images/logo-tablet@2x.webp","cadc29cd68d2f3a90954022d21fab9db"],["images/logo.png","e1f9c33ca3fb196fc0eac49458701b84"],["images/logo.webp","15ad5f560afea10c012d4f37c94adea5"],["images/logo@2x.png","35008ee7ab426dd272af8484242738d3"],["images/logo@2x.webp","f686f2803fac90254149122242d641d8"],["images/pages/about-og.jpg","375a3226e9c0af03ea8134f1bf85e5e3"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-mobile.jpg","77a213c85d62460c6df927f83ed0b91f"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-mobile.webp","17d9b5fd2d697d8509a704dcaf792e61"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-mobile@2x.jpg","20d14bd81415ce3f0847977cdc62ad01"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-mobile@2x.webp","33fef83c52a21cd95e93271dec24f511"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-og.jpg","acecc05d7155470d0c7310dd4054b67d"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-tablet.jpg","36c8ff58c7b2a157a8f94960d2ba40a1"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-tablet.webp","5766c45121da59039882b37d718ab7b5"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-tablet@2x.jpg","23f341a7d24dcb0ae9979f719801fbea"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project-tablet@2x.webp","b49da4f5f3b6438298ccf4b96c861ac2"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project.jpg","2d2411245079a94d8c48ea5ccd88c95b"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project.webp","156c96f32a3ab1a62242382916ff44ab"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project@2x.jpg","3473cb7ac56a52945980c9bc44bf5690"],["images/posts/adding-comments-to-metalsmith/add-comments-to-metalsmith-project@2x.webp","e3406e6dce2181e524e6a7dab95398ab"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-mobile.jpg","cecd899ab147f90d081b085b7ac470bb"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-mobile.webp","53722382c32cfd5014a8ad7701f365c5"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-mobile@2x.jpg","a2f6065d840ba68cfffe354726bafde7"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-mobile@2x.webp","3ff5ac809d533449919b5304adbce267"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-og.jpg","ff82d11c6049d892d38399115e530d06"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-tablet.jpg","1433db77d4d12dcd6f9db386db5577fc"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-tablet.webp","52b5744a15c8b5517c9001893c3c5064"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-tablet@2x.jpg","5a41d41f97e2047dc5425b7f2957415c"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith-tablet@2x.webp","be18e1299b7194e54cf5c24c9a4dcfd2"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith.jpg","8d979c0e45ca32846ed155760dd7ad38"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith.webp","bceaf754a290723df0baa413bb50a8b5"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith@2x.jpg","78cfdb8f9383e1bde39015d2a1d3a669"],["images/posts/five-reasons-choose-metalsmith/five-reasons-choose-metalsmith@2x.webp","b9777676c829ee6b979ddd171d74024d"],["images/posts/hello-world/hello-world-mobile.jpg","332a59a40c3938f80380e436bdf4f54b"],["images/posts/hello-world/hello-world-mobile.webp","1a2ad11a89df4e4113318cf70f7f4beb"],["images/posts/hello-world/hello-world-mobile@2x.jpg","19810f2e69f4b05cad321fbf9793c4db"],["images/posts/hello-world/hello-world-mobile@2x.webp","bc74cbb97aa528d053cdaa084901e271"],["images/posts/hello-world/hello-world-og.jpg","671c9795657b2f7555cbb22736f2e906"],["images/posts/hello-world/hello-world-tablet.jpg","21cbb1211485feae2525271bf7ca1ba0"],["images/posts/hello-world/hello-world-tablet.webp","18ca2e4f0988267bcd3a0f2a67f4877c"],["images/posts/hello-world/hello-world-tablet@2x.jpg","516ad592e4233253c424e15b123e9db4"],["images/posts/hello-world/hello-world-tablet@2x.webp","df437c16ff44b987f0d67ce3fcf9d2cc"],["images/posts/hello-world/hello-world.jpg","e2552d8503f19d083cb81384de55d03c"],["images/posts/hello-world/hello-world.webp","61942720f43c0c9545a1eb9d6cffad82"],["images/posts/hello-world/hello-world@2x.jpg","dfb010f0bdc538633cd7bc2f8c3acf1f"],["images/posts/hello-world/hello-world@2x.webp","e4f865a01da895d5756f05bbaed2bc35"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-mobile.jpg","6fee2c90261da0c05421bdfb2922eabe"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-mobile.webp","864510785eb3d16886f8f5dfb4de2af2"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-mobile@2x.jpg","052e659bec3d5f1e0f6c148390067811"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-mobile@2x.webp","e4eadcb7bec1f538756432387ed72ad8"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-og.jpg","fe9f5f2107da70c9da670b3d31f6473f"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-tablet.jpg","70ba75d18f8a9c881c7d280b2921328a"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-tablet.webp","f77046047753f225b9e8f4f3cfe8b011"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-tablet@2x.jpg","ef40bab90f902e779d602e711966dc3b"],["images/posts/please-mo-more-jquery/please-mo-more-jquery-tablet@2x.webp","74072739fc07603c19907d58d8434c5d"],["images/posts/please-mo-more-jquery/please-mo-more-jquery.jpg","5638def7fa649e542260b8e9e518bffa"],["images/posts/please-mo-more-jquery/please-mo-more-jquery.webp","2a0a34021e99d92b75c795bd36e4609a"],["images/posts/please-mo-more-jquery/please-mo-more-jquery@2x.jpg","2a129f116baef3eac3f12bc8d9e08875"],["images/posts/please-mo-more-jquery/please-mo-more-jquery@2x.webp","43775541709fd578d4940dd0bc32d7ea"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-mobile.jpg","fd4aa5f1104d1c6eed9bac8b7759b503"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-mobile.webp","8b0ab0f2a12fd1d69a7202461fcfc280"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-mobile@2x.jpg","38af840d3f8b15a5a00d121c62efff3d"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-mobile@2x.webp","fd7434861b0b890c006cba34b37e0664"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-og.jpg","6875ccf4adf0b29dc7d772dc89c834e4"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-tablet.jpg","30a9d9af6397833dc7ef0d2806584c2b"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-tablet.webp","7419ace3f755dd7fd1ce77d0153942d8"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-tablet@2x.jpg","b795c796ae630a87f581306104b2ada4"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex-tablet@2x.webp","8214cda7dcbd74201294eab98f0cf4b6"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex.jpg","be0dc67183e651e80cb8e9f04a105651"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex.webp","f976a3613b4e2d57ee6fd41f6058e82d"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex@2x.jpg","15a0108505f07f64225aaf22e5587063"],["images/posts/tasks-from-interviews-yandex/tasks-from-interviews-yandex@2x.webp","baf3322fe362bafec097f41b8920b6c1"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-mobile.jpg","da1ea41a4481da0ed5dc3d495b311dd3"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-mobile.webp","db85f799df359ca01216d96ea1d6de4e"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-mobile@2x.jpg","4dd03484b2e3b383ad5c97886b875e70"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-mobile@2x.webp","529c45e95c8e8e7295426c624f7fb9e9"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-og.jpg","403d4b27bef90c202e518eb774660d6f"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-tablet.jpg","c4830ffa43ad349ff7d38e4a29d08056"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-tablet.webp","890cf00b4704f809fb74c96958f9248e"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-tablet@2x.jpg","6df658664c1abf26b5eccf1b7752346e"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips-tablet@2x.webp","68324d5efb963f4625ea75bd6d67ffc8"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips.jpg","6323d0da001e73996aca976b52757303"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips.webp","03c09cbc236bef02fd6bbc3f4f524727"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips@2x.jpg","e9478e5daf88a83532ba15820bb9e529"],["images/posts/webpack-2-migration-tips/webpack-2-migration-tips@2x.webp","da0e32adc8e19658f9c85dc0dca6e3ed"],["index.html","878a3fcbd5a0f43a7ec35b2d499ae05f"],["js/main.min.js","6628f000db951550580cd61495f684a2"],["js/sw/runtime-caching.js","951dad22be71906b3283533ef83687b9"],["js/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["manifest.json","63ded21aea3ccf74da06be4c78ad9bba"]];
var cacheName = 'sw-precache-v2-metalsthith-blog-source-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("js/sw/sw-toolbox.js","js/sw/runtime-caching.js");

