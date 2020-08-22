var staticCacheName = "drum-pwa-v" + new Date().getTime();
var filesToCache = [
    'assets/icon/android-icon-144x144.png',
  'assets/icon/anvar staticCacheName = "drum-pwa-v" + new Date().getTime();
var filesToCache = [
    '/assets/icon/android-icon-144x144.png',
  '/assets/icon/android-icon-192x192.png',
  '/assets/icon/android-icon-36x36.png',
  '/assets/icon/android-icon-48x48.png',
  '/assets/icon/android-icon-72x72.png',
  '/assets/icon/android-icon-96x96.png',
  '/assets/icon/apple-icon-114x114.png',
  '/assets/icon/apple-icon-120x120.png',
  '/assets/icon/apple-icon-144x144.png',
  '/assets/icon/apple-icon-152x152.png',
  '/assets/icon/apple-icon-180x180.png',
  '/assets/icon/apple-icon-57x57.png',
  '/assets/icon/apple-icon-60x60.png',
  '/assets/icon/apple-icon-72x72.png',
  '/assets/icon/apple-icon-76x76.png',
  '/assets/icon/apple-icon-precomposed.png',
  '/assets/icon/apple-icon.png',
  '/assets/icon/browserconfig.xml',
  '/assets/icon/favicon-16x16.png',
  '/assets/icon/favicon-32x32.png',
  '/assets/icon/favicon-96x96.png',
  '/assets/icon/favicon.ico',
  '/assets/icon/ms-icon-144x144.png',
  '/assets/icon/ms-icon-150x150.png',
  '/assets/icon/ms-icon-310x310.png',
  '/assets/icon/ms-icon-70x70.png',
  '/assets/audio/crash1.wav',
  '/assets/audio/crash2.wav',
  '/assets/audio/floor.wav',
  '/assets/audio/hh-open.wav',
  '/assets/audio/hh-close.wav',
  '/assets/audio/kick.wav',
  '/assets/audio/ride.wav',
  '/assets/audio/snare.wav',
  '/assets/audio/tom-hi.wav',
  '/assets/audio/tom-lo.wav',
  '/assets/image/x-crash.png',
  '/assets/image/x-hat-c.png',
  '/assets/image/x-hat-o.png',
  '/assets/image/x-kick.png',
  '/assets/image/x-ride.png',
  '/assets/image/x-snare.png',
  '/assets/image/x-tom.png',
  '/assets/swf/soundmanager2.swf',
  '/assets/swf/soundmanager2_debug.swf',
  '/assets/swf/soundmanager2_flash9.swf',
  '/assets/swf/soundmanager2_flash9_debug.swf',
  '/assets/swf/soundmanager2_flash_xdomain.swf',
  '/assets/js/drum.js',
  '/assets/js/lowLag.js',
  '/assets/js/soundmanager2-jsmin.js',
  '/assets/js/soundmanager2-nodebug-jsmin.js',
  '/assets/js/soundmanager2-nodebug.js',
  '/assets/js/soundmanager2.js',
];

// Cache on install
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("drum-pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});
droid-icon-192x192.png',
  'assets/icon/android-icon-36x36.png',
  'assets/icon/android-icon-48x48.png',
  'assets/icon/android-icon-72x72.png',
  'assets/icon/android-icon-96x96.png',
  'assets/icon/apple-icon-114x114.png',
  'assets/icon/apple-icon-120x120.png',
  'assets/icon/apple-icon-144x144.png',
  'assets/icon/apple-icon-152x152.png',
  'assets/icon/apple-icon-180x180.png',
  'assets/icon/apple-icon-57x57.png',
  'assets/icon/apple-icon-60x60.png',
  'assets/icon/apple-icon-72x72.png',
  'assets/icon/apple-icon-76x76.png',
  'assets/icon/apple-icon-precomposed.png',
  'assets/icon/apple-icon.png',
  'assets/icon/browserconfig.xml',
  'assets/icon/favicon-16x16.png',
  'assets/icon/favicon-32x32.png',
  'assets/icon/favicon-96x96.png',
  'assets/icon/favicon.ico',
  'assets/icon/ms-icon-144x144.png',
  'assets/icon/ms-icon-150x150.png',
  'assets/icon/ms-icon-310x310.png',
  'assets/icon/ms-icon-70x70.png',
  'assets/audio/crash1.wav',
  'assets/audio/crash2.wav',
  'assets/audio/floor.wav',
  'assets/audio/hh-open.wav',
  'assets/audio/hh-close.wav',
  'assets/audio/kick.wav',
  'assets/audio/ride.wav',
  'assets/audio/snare.wav',
  'assets/audio/tom-hi.wav',
  'assets/audio/tom-lo.wav',
  'assets/image/x-crash.png',
  'assets/image/x-hat-c.png',
  'assets/image/x-hat-o.png',
  'assets/image/x-kick.png',
  'assets/image/x-ride.png',
  'assets/image/x-snare.png',
  'assets/image/x-tom.png',
  'assets/swf/soundmanager2.swf',
  'assets/swf/soundmanager2_debug.swf',
  'assets/swf/soundmanager2_flash9.swf',
  'assets/swf/soundmanager2_flash9_debug.swf',
  'assets/swf/soundmanager2_flash_xdomain.swf',
  'assets/js/drum.js',
  'assets/js/lowLag.js',
  'assets/js/soundmanager2-jsmin.js',
  'assets/js/soundmanager2-nodebug-jsmin.js',
  'assets/js/soundmanager2-nodebug.js',
  'assets/js/soundmanager2.js',
];

// Cache on install
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("drum-pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});
