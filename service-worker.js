const CACHE_NAME = 'Kalkulator-app-v4.9.11'; // Promijeni u v3, v4... kad god nešto mijenjaš na stranici
const urlsToCache = [
  'index.html',
  'kalkulacije.css',
  'kalkulacije.js',
  'manifest.json'
];

// 1. INSTALACIJA: Forsira novu verziju da se instalira odmah
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. AKTIVACIJA: Čisti stare verzije keša da ne guše memoriju
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) 
  );
});

// 3. FETCH: Glavni dio koji rješava "net::ERR_FAILED"
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Ako nađe fajl u lokalu (kešu), vraća ga odmah - NEMA BIJELOG EKRANA
      // Ako nema u lokalu, tek onda pokušava da skine sa interneta
      return response || fetch(event.request);
    }).catch(() => {
      // Ako nema interneta, a fajl nije u kešu, uvijek vraća početnu stranu
      return caches.match('index.html');
    })
  );
});
