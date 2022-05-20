const CACHE_NAME = 'version-0.1';
const OFFLINE_URL = 'index.html';
const ASSET_URLS = [
    './bg.png',
    './rope.png',
    './index.js',
    './js/audio-manager.js',
    './js/axes.js',
    './js/boss.js',
    './js/button-manager.js',
    './js/canvas.js',
    './js/chandelier.js',
    './js/consts.js',
    './js/coordinates.js',
    './js/debug-menu.js',
    './js/explosions.js',
    './js/flames.js',
    './js/frames.js',
    './js/healthbar.js',
    './js/lasers.js',
    './js/phase-manager.js',
    './js/platforms.js',
    './js/player.js',
    './js/plumes.js',
    './js/rope.js',
    './js/slides.js',
    './js/time-manager.js',
    '.https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    './sounds/axe-throw.mp3',
    './sounds/boss-explosion.mp3',
    './sounds/boss-fight.mp3',
    './sounds/death.mp3',
    './sounds/door-slam.mp3',
    './sounds/eye-laser.mp3',
    './sounds/jump.mp3',
    './sounds/land.mp3',
    './sounds/now-youre-a-hero.mp3',
    './sounds/rope-explosion.mp3',
    './sounds/tunnel.mp3',
    './sprites/axe_18x18.png',
    './sprites/axe_999_64x64.svg',
    './sprites/back-door_32x64.png',
    './sprites/boss-attack_204x256.png',
    './sprites/boss-die_192x256.png',
    './sprites/boss-lookup_192x256.png',
    './sprites/boss-move_204x256.png',
    './sprites/boss-still_204x256.png',
    './sprites/chandelier_160x96.png',
    './sprites/credits-1_200x200.png',
    './sprites/credits-2_200x200.png',
    './sprites/credits-3_200x200.png',
    './sprites/credits-4_200x200.png',
    './sprites/credits-bg_704x512.png',
    './sprites/explosion-1_36x36.png',
    './sprites/explosion-2_36x36.png',
    './sprites/explosion-3_36x36.png',
    './sprites/explosion-4_36x36.png',
    './sprites/explosion-5_36x36.png',
    './sprites/explosion-6_36x36.png',
    './sprites/explosion-7_36x36.png',
    './sprites/flame-1_28x28.png',
    './sprites/flame-2_28x28.png',
    './sprites/flame-3_28x28.png',
    './sprites/info-circle_999_64x64.svg',
    './sprites/laser-1_20x20.png',
    './sprites/laser-2_20x20.png',
    './sprites/laser-3_20x20.png',
    './sprites/laser-4_20x20.png',
    './sprites/laser-5_20x20.png',
    './sprites/laser-6_20x20.png',
    './sprites/laser-7_20x20.png',
    './sprites/page-bg_32x32.png',
    './sprites/player-fall_30x36.png',
    './sprites/player-hit_30x36.png',
    './sprites/player-jump_30x36.png',
    './sprites/player-still_30x36.png',
    './sprites/player-throw_30x36.png',
    './sprites/player-walk-1_30x36.png',
    './sprites/player-walk-2_30x36.png',
    './sprites/player-walk-3_30x36.png',
    './sprites/plume-1_43x21.png',
    './sprites/plume-2_43x21.png',
    './sprites/plume-3_43x21.png',
    './sprites/plume-4_43x21.png',
    './sprites/plume-5_43x21.png',
    './sprites/plume-6_43x21.png',
    './sprites/rope_8x192.png',
    './sprites/stick_30x6.png',
    './sprites/up-arrow_999_64x64.svg',
    './sprites/volume-0_999_64x64.svg',
    './sprites/volume-1_999_64x64.svg'
];

self.addEventListener('install', function (event) {
    console.log('[ServiceWorker] Install');

    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        // Setting {cache: 'reload'} in the new request will ensure that the response
        // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
        await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
        await cache.addAll(ASSET_URLS);
    })());

    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    event.waitUntil((async () => {
        // Enable navigation preload if it's supported.
        // See https://developers.google.com/web/updates/2017/02/navigation-preload
        if ('navigationPreload' in self.registration) {
            await self.registration.navigationPreload.enable();
        }
    })());

    // Tell the active service worker to take control of the page immediately.
    self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    // console.log('[Service Worker] Fetch', event.request.url);
    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResponse = await event.preloadResponse;
                if (preloadResponse) {
                    return preloadResponse;
                }

                const networkResponse = await fetch(event.request);
                return networkResponse;
            } catch (error) {
                console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

                const cache = await caches.open(CACHE_NAME);
                const cachedResponse = await cache.match(OFFLINE_URL);
                return cachedResponse;
            }
        })());
    }
});
