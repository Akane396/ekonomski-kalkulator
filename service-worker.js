const CACHE_NAME = 'anime-app-v2.5'; // Uvijek promijeni ovaj broj kad nešto mijenjaš!
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/kalkulacije.js',
  '/manifest.json'
];

// --- OVO DODAJ OVDJE ---
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Forsira novu verziju da se instalira odmah, ne čeka staru
});

self.addEventListener('activate', (event) => {
  // Čisti stari keš da ne zauzima prostor
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Odmah preuzima kontrolu nad svim otvorenim tabovima/prozorima
  );
});
// -----------------------

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
