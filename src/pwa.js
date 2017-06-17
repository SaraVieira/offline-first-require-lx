// Check for browser support of service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker // eslint-disable-line compat/compat
    .register('service-worker.js')
    .then(registration => {
      console.log(
        'Hooray. Registration successful, scope is:',
        registration.scope
      );
    })
    .catch(err => {
      console.log('Whoops. Service worker registration failed, error:', err);
    });
}
