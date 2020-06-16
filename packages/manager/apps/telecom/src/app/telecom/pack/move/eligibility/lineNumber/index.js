import angular from 'angular';

import ngTranslateAsyncLoader from '@ovh-ux/ng-translate-async-loader';
import uiRouter from '@uirouter/angularjs';
import angularTranslate from 'angular-translate';
import 'ovh-ui-angular';

import eligibilityLineNumber from './move-eligibility-lineNumber.component';

const moduleName = 'ovhManagerTelecomPackMoveEligibilityLineNumber';

angular
  .module(moduleName, [
    ngTranslateAsyncLoader,
    uiRouter,
    angularTranslate,
    'oui',
  ])
  .component('packMoveEligibilityLineNumber', eligibilityLineNumber);

export default moduleName;
