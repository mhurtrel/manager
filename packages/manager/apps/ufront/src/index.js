import 'script-loader!jquery'; // eslint-disable-line
import 'whatwg-fetch';
import Postmate from 'postmate';
import {
  attach as attachPreloader,
  detach as detachPreloader,
} from '@ovh-ux/manager-preloader';
import { bootstrapApplication } from '@ovh-ux/manager-core';

attachPreloader();

bootstrapApplication().then(({ region }) => {
  import(`./config-${region}`)
    .catch(() => {})
    .then(() => import('./app.module'))
    .then(({ default: application }) => {
      angular.bootstrap(document.body, [application], {
        strictDi: true,
      });
      detachPreloader();
    });
});

const handshake = new Postmate({
  container: document.getElementsByClassName('hub-main-view')[0],
  url: __U_FRONTEND_ROOT__,
  name: 'manager',
  classListArray: ['w-100', 'h-100', 'd-block', 'border-0'],
});

// When parent <-> child handshake is complete, data may be requested from the child
handshake.then((child) => {
  window.addEventListener('hashchange', () => {
    child.call('updateHash', window.location.hash);
  });
  child.on('hashChange', (hash) => {
    window.history.replaceState(null, '', hash);
  });
});
