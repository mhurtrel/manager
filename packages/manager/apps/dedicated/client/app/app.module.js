/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */
import 'babel-polyfill';
import 'script-loader!moment/min/moment.min.js';
import 'script-loader!es6-shim/es6-shim.min.js';
import 'script-loader!components-jqueryui/ui/minified/version.js';
import 'script-loader!components-jqueryui/ui/minified/plugin.js';
import 'script-loader!components-jqueryui/ui/minified/widget.js';
import 'script-loader!components-jqueryui/ui/minified/data.js';
import 'script-loader!components-jqueryui/ui/minified/scroll-parent.js';
import 'script-loader!components-jqueryui/ui/minified/safe-active-element.js';
import 'script-loader!components-jqueryui/ui/minified/safe-blur.js';
import 'script-loader!components-jqueryui/ui/widgets/mouse.js';
import 'script-loader!components-jqueryui/ui/widgets/sortable.js';
import 'script-loader!components-jqueryui/ui/widgets/draggable.js';
import 'angular';
import 'angular-xeditable';
import '@ovh-ux/ui-kit';
import 'angular-route';
import 'angular-sanitize';
import 'angular-cookies';
import 'angular-messages';
import 'script-loader!lodash/lodash.min.js';
import 'script-loader!jquery.scrollto/jquery.scrollTo.min.js';
import 'script-loader!jquery.cookie/jquery.cookie.js';
import 'bootstrap';
import 'angular-ui-bootstrap';
import 'angularjs-scroll-glue';
import 'raphael';
import 'script-loader!angular-dynamic-locale/dist/tmhDynamicLocale.js';
import 'punycode';
import 'script-loader!urijs/src/URI.min.js';
import 'script-loader!ipaddr.js/ipaddr.min.js';
import 'script-loader!validator/validator.min.js';
import 'script-loader!angular-ui-utils/ui-utils.min.js';
import 'script-loader!df-tab-menu/build/df-tab-menu.min.js';
import 'script-loader!angular-ui-validate/dist/validate.min.js';
import 'script-loader!randexp/build/randexp.min';
import 'script-loader!ui-select/dist/select.min.js';
import 'angular-resource';
import 'script-loader!jsurl/lib/jsurl.js';
import 'script-loader!intl-tel-input/build/js/intlTelInput.min.js';
import 'script-loader!intl-tel-input/lib/libphonenumber/build/utils.js';
import 'script-loader!international-phone-number/releases/international-phone-number.min.js';
import 'script-loader!qrcode.js/lib/qrcode.js';
import 'angular-qr';
import 'script-loader!u2f-api-polyfill/u2f-api-polyfill.js';
import 'ovh-api-services';
import 'angular-translate';
import 'script-loader!angular-translate/dist/angular-translate-loader-partial/angular-translate-loader-partial.min.js';
import 'ng-slide-down';
import '@ovh-ux/ng-ovh-actions-menu';
import 'script-loader!matchmedia-ng/matchmedia-ng.js';
import 'angular-aria';
import 'script-loader!chart.js/dist/Chart.min.js';
import 'script-loader!angular-chart.js/dist/angular-chart.min.js';
import 'ovh-angular-responsive-tabs';
import 'ckeditor';
import 'script-loader!messenger/build/js/messenger.min.js';
import 'script-loader!filesize/lib/filesize.js';

// Ckeditor 4.x
import 'ng-ckeditor';

import './app.less';
import './css/source.scss';
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved, import/extensions */

import moduleName from './app';
import './app.routes';

import './account/contacts/service/edit/edit.module';
import './account/otrs/otrs-controllers.module';
import './account/otrs/otrs-directives.module';
import './account/otrs/otrs-filters.module';
import './account/otrs/otrs-services.module';
import './account/user/advanced/advanced.module';
import './account/user/dashboard/user-dahboard.module';
import './account/user/newAccountForm/new-account-form.module';
import './account/user/support-level/support-level.module';
import './account/user/user.module';
import './billing/autoRenew/actions/activation/activation.module';
import './billing/autoRenew/actions/cancel-resiliation/cancel-resiliation.module';
import './billing/autoRenew/actions/debtBeforePaying/debtBeforePaying.module';
import './billing/autoRenew/actions/delete/delete.module';
import './billing/autoRenew/actions/exchange/exchange-renew.module';
import './billing/autoRenew/actions/terminate-enterprise-cloud-database/terminate-enterprise-cloud-database.module';
import './billing/autoRenew/actions/terminate-webcoach/terminate-webcoach.module';
import './billing/autoRenew/actions/terminate/terminate.module';
import './billing/autoRenew/actions/terminateEmail/email.module';
import './billing/autoRenew/actions/terminateHostingWeb/hosting-web.module';
import './billing/autoRenew/actions/terminatePrivateDatabase/private-database.module';
import './billing/autoRenew/actions/update/automatic/automatic.module';
import './billing/autoRenew/actions/update/form/form.module';
import './billing/autoRenew/actions/update/manualPayment/manualPayment.module';
import './billing/autoRenew/actions/update/noPaymentMean/noPaymentMean.module';
import './billing/autoRenew/actions/update/update.module';
import './billing/autoRenew/actions/warnNicBilling/warnNicBilling.module';
import './billing/autoRenew/actions/warnPendingDebt/pending-debt.module';
import './billing/autoRenew/agreements/details/details.module';
import './billing/autoRenew/agreements/user-agreements.module';
import './billing/autoRenew/autorenew.module';
import './billing/autoRenew/bulk/bulk.module';
import './billing/autoRenew/disable-domains-bulk/disable-domains-bulk.module';
import './billing/autoRenew/disable/disable.module';
import './billing/autoRenew/enable/enable.module';
import './billing/autoRenew/ssh/ssh.module';
import './billing/billing.module';
import './billing/components/directives/directives.module';
import './billing/components/filters/filters.module';
import './billing/confirmTerminate/termination.module';
import './billing/constants/constants.module';
import './billing/controllers.module';
import './billing/order/billing-order-tracking.module';
import './billing/orders/orders.module';
import './billing/orders/retraction/retraction.module';
import './billing/services.module';
import './billing/sla/sla.module';
import './components/angular-extensions.module';
import './components/directives.module';
import './components/filters.module';
import './components/ng-ovh-contacts/ng-ovh-contacts.module';
import './components/ovh-angular-actions-menu/ovh-angular-actions-menu.module';
import './components/ovh-angular-http/ovh-angular-http.module';
import './components/ovh-ui-angular/ovh-ui-angular.module';
import './components/services.module';
import './controllers.module';
import './dedicated/dedicated.module';
import './dedicated/nas/nas.module';
import './dedicated/server/bandwidth/dashboard/dashboard.module';
import './dedicated/server/bandwidth/private-cancel/private-cancel.module';
import './dedicated/server/bandwidth/private-order/private-order.module';
import './dedicated/server/bandwidth/public-cancel/public-cancel.module';
import './dedicated/server/bandwidth/public-order/public-order.module';
import './dedicated/server/dedicated-server.module';
import './dedicated/server/interfaces/attach/interfaces-attach.module';
import './dedicated/server/interfaces/detach/interfaces-detach.module';
import './dedicated/server/interfaces/ola-activation/ola-activation.module';
import './dedicated/server/interfaces/ola-configuration/ola-configuration.module';
import './dedicated/server/interfaces/ola-terminate/ola-terminate.module';
import './dedicated/server/interfaces/rename/interfaces-rename.module';
import './ip/ip-controllers.module';
import './ip/ip-services.module';
import './ip/ip.filters.module';
import './license/license.module';

import './components/components.bundle';
import './account/account.bundle';
import './billing/billing.bundle';
import './cdn/cdn.bundle';
import './config/config.bundle';
import './configuration/configuration.bundle';
import './dedicated/dedicated.bundle';
import './dedicatedCloud/dedicatedCloud.bundle';
import './double-authentication/double-authentication.bundle';
import './download/download.bundle';
import './ip/ip.bundle';
import './license/license.bundle';

export default moduleName;
