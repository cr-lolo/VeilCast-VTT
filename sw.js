/* VeilCast VTT — service worker
   Caches the app so it starts instantly and works offline.
   Bump VERSION in the commit that ships a change, not on every edit. */
const VERSION = 'veilcast-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './jb2a-catalog.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/favicon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  /* Effect videos are fetched from GitHub and stored in the app database:
     they must not go through this cache. */
  if (new URL(req.url).origin !== self.location.origin) return;

  /* The document: network first, so a new version shows up on reload. */
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return r;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      const copy = r.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
      return r;
    }))
  );
});
