const CACHE_NAME = 'la-ilaha-v1';
const urlsToCache = [
    'index.html',
    'style.css',
    'manifest.json',
    'quran10222.pdf',
    'libs/pdf.min.js',
    'libs/pdf.worker.min.js',
    'libs/PrayTimes.js',
    'audio/adhan1.mp3',
    'audio/adhan2.mp3',
    'audio/adhan3.mp3',
    'audio/adhan4.mp3'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

