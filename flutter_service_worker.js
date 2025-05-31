'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a00f5214cbcdb692377e6161322459d1",
"assets/AssetManifest.bin.json": "9524429b16a8c79c321e3b6c51bd0184",
"assets/AssetManifest.json": "23b574083192e2e90a01b826d382aab4",
"assets/assets/icons/ic_add.svg": "067273568958d4e5a93591121013b629",
"assets/assets/icons/ic_add_outline.svg": "3c3a8ece48a5f466077cda2b18816068",
"assets/assets/icons/ic_back.svg": "e2ef37401b2fc8c7eda7371aea3f180b",
"assets/assets/icons/ic_candle.png": "6e999804a0b70be4fb08d926dc33601f",
"assets/assets/icons/ic_check_all.png": "7850882ddf20a3e274ce81d9951502e3",
"assets/assets/icons/ic_close.svg": "4efe5113dc213a47836332af96e555a9",
"assets/assets/icons/ic_close_dots.svg": "7d0c3a237534296abd0b4f89f1e01f0e",
"assets/assets/icons/ic_dark_mode.png": "4350d33ba6c82444efb493663c127d7b",
"assets/assets/icons/ic_delete.png": "172e85148dd546a2a812ea1fe017f816",
"assets/assets/icons/ic_dollar_exchange.svg": "9b8542398e73fa4f67b4d828cf20bf52",
"assets/assets/icons/ic_done.png": "9066f30bda561cb35517feec938b9063",
"assets/assets/icons/ic_drawer.svg": "ff71cf37997b334b94da7c45910985df",
"assets/assets/icons/ic_edit.svg": "5cd56b80eb3295f85f9ee03d70f0a097",
"assets/assets/icons/ic_history.png": "69f770c3a64ec491ab1848e70dd482fd",
"assets/assets/icons/ic_info.svg": "472f83cac8243f6423e5091dbadf1450",
"assets/assets/icons/ic_light_mode.png": "602433533e4468542e68e8526b233eab",
"assets/assets/icons/ic_messages.png": "dd32420226a2822f5f98fed9e8102922",
"assets/assets/icons/ic_quotes.png": "26e730ea7a2b90eb59f0bc8ba56be33f",
"assets/assets/icons/ic_reorder.png": "024da6c1a8d4da6afdb728d65fc234be",
"assets/assets/icons/ic_search.png": "4cb926b117eda4f27e6c7df8ee00f363",
"assets/assets/icons/ic_spread.svg": "d585d049b98816129a252369cfd519ae",
"assets/assets/icons/ic_trade.png": "98d78109829ed972988feff8924a5b13",
"assets/assets/icons/ic_uncheck_all.png": "982bbc561de7350b1af35d2e3a1d8236",
"assets/assets/icons/ic_up_down.png": "37af856b07bb1d241d8cdad0ad56f9e7",
"assets/assets/img/exnexss.jpg": "b5f1b5f7a132d2e3d3fc534df9c4fe6d",
"assets/assets/img/ic%2520_add_user.svg": "732d969a3635478600d379ca1ffe64f7",
"assets/assets/img/img_mail.png": "c69792e237d895982b8de8f684114526",
"assets/assets/img/img_meta_about.png": "d25b19ffef4b96d9b1381703f6031f99",
"assets/assets/img/img_news.png": "585dad0b76b51197be8872c1a69fbf2d",
"assets/assets/img/img_search.png": "b5a0753682f2a49b6b3a88a119242348",
"assets/assets/logos/logo.png": "7b1476b99387592ca6f52ad47568f723",
"assets/assets/logos/logo_1.png": "66345db1c9479ab03cfb463aa937b55a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "20de41d1e033a2595320b606ffdeaa78",
"assets/NOTICES": "8e5d3e21a258ab23fd095e9d4086da6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c2c36dd90ec29cff229f6de05d649c1a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "be43ab10e8ce48f82c75c03e5a19b9fe",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f86ea0d75afefed5ab0757a6fe4e04e2",
"icons/Icon-192.png": "4e9ff84ba1d5a7e01c522376cb9f7f80",
"icons/Icon-512.png": "7b1476b99387592ca6f52ad47568f723",
"icons/Icon-maskable-192.png": "4e9ff84ba1d5a7e01c522376cb9f7f80",
"icons/Icon-maskable-512.png": "7b1476b99387592ca6f52ad47568f723",
"index.html": "9b08ace60530bdabe7192d517e5bc8e3",
"/": "9b08ace60530bdabe7192d517e5bc8e3",
"main.dart.js": "1b8316c1e0d7885cb7bb772a721c6b8b",
"manifest.json": "b990ef27efb4b395c7695a12c9ae5011",
"version.json": "07f00dd9f161bc6a7c39cebb08c0755c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
