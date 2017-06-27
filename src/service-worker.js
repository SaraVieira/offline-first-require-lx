/* eslint-disable no-console,  compat/compat, consistent-return */
const version = 'v1';
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(`${version}-require-lx`)
      .then(cache =>
        cache.addAll([
          '/',
          '/assets/icons/android-chrome-192x192.png',
          '/assets/icons/android-chrome-512x512.png',
          '/assets/icons/apple-touch-icon.png',
          '/assets/icons/favicon-16x16.png',
          '/assets/icons/favicon-32x32.png',
          '/assets/icons/mstile-150x150.png',
        ])
      )
      .then(() => {
        console.log('Your assests are offline');
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetching');

  function fetchedFromNetwork(response) {
    const cacheCopy = response.clone();
    caches
      .open(`${version}-fetches`)
      .then(cache => cache.put(event.request, cacheCopy));

    return response;
  }

  function unableToResolve() {
    return new Response('<h1>Sorry Mate</h1>', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({
        'Content-Type': 'text/html',
      }),
    });
  }

  if (event.request.method !== 'GET') {
    return false;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve);
      console.log(
        'FETCHED!',
        cached ? '(cached)' : '(network)',
        event.request.url
      );
      return cached || networked;
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating them worker');
  event.waitUntil(
    caches.keys().then(() => {
      console.log('The worker is ready and actived');
    })
  );
});
