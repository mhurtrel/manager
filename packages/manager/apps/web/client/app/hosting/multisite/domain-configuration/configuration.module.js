import angular from 'angular';
import 'angular-translate';
import 'ovh-ui-angular';

import component from './configuration.component';

const moduleName = 'ovhManagerHostingMultisiteDomainConfiguration';

angular
  .module(moduleName, ['oui', 'pascalprecht.translate'])
  .component('hostingMultisiteConfiguration', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
