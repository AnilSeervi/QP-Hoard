const staticCacheName = "site-static-v13";
const dynamicCacheName = "site-dynamic-v13";
const assets = [
  "/",
  "/index.html",
  "/bca",
  "/bba",
  "/bcom",
  "/pdf.json",
  "/manifest.json",
  "/favicon.png",
  "/images/icons/favicon.svg",
  "/images/icons/logo192.png",
  "/images/icons/logo512.png",
  "/images/icons/banking192.png",
  "/images/icons/code192.png",
  "/images/icons/trending192.png",
  "https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700&display=swap",
];
// cache limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};
//install serviceWorker
self.addEventListener("install", (evt) => {
  console.log("serviceworker installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
      console.log("cached all assets");
    })
  );
});
//activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
  clients.claim();
});
//fetch events
self.addEventListener("fetch", (evt) => {
  if (/^chrome\-extension/.test(evt.request.url)) return;
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(evt.request).then(async (fetchRes) => {
          const cache = await caches.open(dynamicCacheName);
          cache.put(evt.request.url, fetchRes.clone());
          limitCacheSize(dynamicCacheName, 30);
          return fetchRes;
        })
      );
    })
  );
});
