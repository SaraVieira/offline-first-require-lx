/* eslint-disable no-console , compat/compat */

// Check for browser support of service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(registration => {
      console.log(
        'Damn son ! You got a service worker at:',
        registration.scope
      );
    })
    .catch(err => {
      console.log('Sorry man, the registration failed:', err);
    });
}
