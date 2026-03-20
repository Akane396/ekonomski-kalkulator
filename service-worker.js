const CACHE_NAME = 'kalkulator-cache-v1';
// OVO JE NAJBOLJI DIO: Kada promeniš ovu verziju (v1 u v2), 
// telefon će znati da skine novi kôd sa interneta.

const urlsToCache = [
  'Index.html',
  'kalkulacije.css', // Provjeri malo/veliko slovo!
  'kalkulacije.js',
  'percentage.png'
  // Dodaj ovde putanje do SVIH slika, JS fajlova ili fontova koje koristiš
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      // Ako fajl postoji u memoriji, vrati ga (offline)
      if (response) {
        return response;
      }
      // Ako ne postoji, skini ga sa interneta
      return fetch(event.request);
    })
  );
});