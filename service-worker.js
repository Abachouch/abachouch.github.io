var cacheName = 'AbachouchProfile';
var filesToCache = [
    '/',
    'index.html',
    'dist/app.bundle.js',
    'dist/imgrs/footer.jpg',

    "dist/imgrs/icon-96x96.png",
    "dist/imgrs/icon-128x128.png",
    "dist/imgrs/icon-144x144.png",
    "dist/imgrs/icon-152x152.png",
    "dist/imgrs/icon-192x192.png",
    "dist/imgrs/icon-256x256.png"
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== cacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
  });

  self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });