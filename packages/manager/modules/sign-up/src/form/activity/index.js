import angular from 'angular';
import '@ovh-ux/ui-kit';
import '@ovh-ux/ng-translate-async-loader';
import 'angular-translate';

import component from './activity.component';

const moduleName = 'ovhSignUpActivity';

angular
  .module(moduleName, [
    'oui',
    'ngTranslateAsyncLoader',
    'pascalprecht.translate',
  ])
  .run(/* @ngTranslationsInject:json ./translations */)
  .component(component.name, component);

export default moduleName;
