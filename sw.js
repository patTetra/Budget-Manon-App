
const CACHE_NAME = 'pwa-budget-cache-v1';
const OFFLINE_URLS = [
  '/',
  '/index.html'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(resp => {
    return resp || fetch(event.request).then(fetchResp => {
      return caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, fetchResp.clone());
        return fetchResp;
      });
    }).catch(()=> caches.match('/index.html'));
  }));
});
