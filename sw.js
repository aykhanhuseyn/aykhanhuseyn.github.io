var cacheName = 'AykhanHuseyn-v1.4.0';
var filesToCache = [
  '/',
  '/CurriculumVitae.html',
  '/css/fonts.css',
  '/css/cursors.css',
  '/css/cVitae.css',
  '/css/prefers.css',
  '/js/anime.min.js',
  '/js/darkMode.js',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
