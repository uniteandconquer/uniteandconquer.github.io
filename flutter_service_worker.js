'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "cert.pem": "9c09b4dea430c83d4dab94ebc67ca143",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"simple-https-server.py": "b5db28e0ed42faa3b547614de3079140",
"icons/android-icon-36x36.png": "58cf970454995f5b2c558fc5c7aadf8b",
"icons/apple-icon-72x72.png": "821ca91e70356ebb5e08cc0b1d20e2c0",
"icons/favicon-16x16.png": "2739ec8c74df1c2d5f31acfc3ba85ddb",
"icons/apple-icon-57x57.png": "f8af76b003106bbba7840d31a84b71f9",
"icons/favicon.ico": "c8e3c784490c01dfd425f64c57e737f3",
"icons/ms-icon-150x150.png": "d749b2c3f117cd4d869eed055094755b",
"icons/apple-icon-114x114.png": "f8ac457717bc6af2446ade9f74e4cd4b",
"icons/apple-icon-precomposed.png": "449021b22ab802c91b15a3bc04d7ebbb",
"icons/ms-icon-310x310.png": "0c755d7e9c0373863651319758535138",
"icons/apple-icon-180x180.png": "6be3caa888953d9f78c3faf99b56038a",
"icons/apple-icon.png": "449021b22ab802c91b15a3bc04d7ebbb",
"icons/apple-icon-76x76.png": "a910ec4722bccefafaca0fb025e825a4",
"icons/apple-icon-120x120.png": "4a07c5325643809988accda5a54a54fa",
"icons/ms-icon-144x144.png": "30de959d66fdffbb254ecacb84c3bec3",
"icons/BACKUP/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/BACKUP/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/BACKUP/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/BACKUP/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/android-icon-144x144.png": "30de959d66fdffbb254ecacb84c3bec3",
"icons/android-icon-48x48.png": "1815553563d1a33b8cd3d699ed23f93f",
"icons/favicon-96x96.png": "a55762aa982bd47adebd37e86b1a0e2c",
"icons/apple-icon-60x60.png": "20e807b8fac2c9dba7e0c7f7767e0563",
"icons/apple-icon-144x144.png": "30de959d66fdffbb254ecacb84c3bec3",
"icons/android-icon-96x96.png": "a55762aa982bd47adebd37e86b1a0e2c",
"icons/android-icon-192x192.png": "fa99479f4e5ef781c923dbf0eb9993c7",
"icons/favicon-32x32.png": "15d7da1ab3df1ab5c4e6ee57149d7075",
"icons/apple-icon-152x152.png": "3d11b8afd043904a23cfb543932a8c34",
"icons/android-icon-72x72.png": "821ca91e70356ebb5e08cc0b1d20e2c0",
"icons/ms-icon-70x70.png": "e19a98d71cb284aa9292dc75b4f6169e",
"version.json": "9002e43bba89e5e84947eca2e76f27c6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/qortal_icon.png": "6b8aef62e798ee193b2fdd4b5c23ff7d",
"assets/images/user.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "99d7f6591d9fb7dfa0fef3454a76a3d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/NOTICES": "7e5da5fe95e2d3dd74f2c7b328ed6033",
"favicon.png": "6cd14b00a6f85e3b9506fa9a91881580",
"main.dart.js": "36aad770828a2b71d10d09f82c0e5fa3",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"index.html": "9e53c4e1d15d6c9c556e37d08ce0c66a",
"/": "9e53c4e1d15d6c9c556e37d08ce0c66a",
"manifest.json": "d4c5f106ac7d7aa583d491e53653542b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
