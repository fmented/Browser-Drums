var staticCacheName = "drum-pwa-v" + new Date().getTime();
var filesToCache = [
    './assets/icon/android-chrome-192x192.png',
  './assets/icon/android-chrome-512x512.png',
  './assets/icon/apple-touch-icon.png',
  './assets/icon/browserconfig.xml',
  './assets/icon/favicon-16x16.png',
  './assets/icon/favicon-32x32.png',
  './assets/icon/favicon.ico',
  './assets/icon/mstile-150x150.png',
  './assets/icon/safari-pinned-tab.svg',
  './assets/audio/crash1.wav',
  './assets/audio/crash2.wav',
  './assets/audio/floor.wav',
  './assets/audio/hh-open.wav',
  './assets/audio/hh-close.wav',
  './assets/audio/kick.wav',
  './assets/audio/ride.wav',
  './assets/audio/snare.wav',
  './assets/audio/tom-hi.wav',
  './assets/audio/tom-lo.wav',
  './assets/image/x-crash.png',
  './assets/image/x-hat-c.png',
  './assets/image/x-hat-o.png',
  './assets/image/x-kick.png',
  './assets/image/x-ride.png',
  './assets/image/x-snare.png',
  './assets/image/x-tom.png',
  './assets/swf/soundmanager2.swf',
  './assets/swf/soundmanager2_debug.swf',
  './assets/swf/soundmanager2_flash9.swf',
  './assets/swf/soundmanager2_flash9_debug.swf',
  './assets/swf/soundmanager2_flash_xdomain.zip',
  './assets/js/drum.js',
  './assets/js/lowLag.js',
  './assets/js/soundmanager2-jsmin.js',
  './assets/js/soundmanager2-nodebug-jsmin.js',
  './assets/js/soundmanager2-nodebug.js',
  './assets/js/soundmanager2.js',
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
