const CACHE_NAME = 'kalkulator-v1.4'; // Ovdje mijenjaš verziju
const urlsToCache = [
  'index.html',
  'kalkulacije.css',
  'kalkulacije.js',
  'percentage.png',
  'manifest.json'
];

// 1. INSTALACIJA (Punjenje ruksaka)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 2. AKTIVACIJA (OVO DODAJES - Čišćenje starog smeća)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. FETCH (Rad bez interneta)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
