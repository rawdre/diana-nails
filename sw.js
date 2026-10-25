// Bump CACHE on every release so clients pick up the new files.
const CACHE = 'diana-v2.2.0';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './js/pix.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/hero-studio.jpg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Pages: network first so prices/agenda are always fresh; cache is the offline fallback
  if (req.mode === 'navigate') {
    e.respondWith(
      // cache: 'no-cache' revalidates with the server instead of trusting the HTTP cache
      fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' })
        .then((res) => { caches.open(CACHE).then((c) => c.put(req, res.clone())); return res; })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // Static assets: cache first
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
