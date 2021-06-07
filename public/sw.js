const staticCacheName = "site-static-v6";
const dynamicCacheName = "site-dynamic-v6";
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
  "https://fonts.gstatic.com/s/worksans/v9/QGYsz_wNahGAdqQ43Rh_fKDp.woff2",
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
});
//fetch events
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(evt.request).then(async (fetchRes) => {
          const cache = await caches.open(dynamicCacheName);
          if (evt.request.url.indexOf("http") !== -1)
            cache.put(evt.request.url, fetchRes.clone());
          limitCacheSize(dynamicCacheName, 30);
          return fetchRes;
        })
      );
    })
  );
});
