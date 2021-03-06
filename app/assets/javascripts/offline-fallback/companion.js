import Logger from 'utils/logger';
const logger = new Logger('[offline-fallback/client]');

if (navigator.serviceWorker) {
  logger.log('Registering serviceworker');
  navigator.serviceWorker.register('serviceworker.js', { scope: './' })
    .then(function(reg) {
      logger.log(reg.scope, 'register');
      logger.log('Service worker change, registered the service worker');
    });
}
