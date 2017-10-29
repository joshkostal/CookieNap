/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CreateListingController } from './createListing/createListing.controller';
import { SignInController } from './signin/signin.controller';
import { IndividualListingPageController } from './individualListingPage/individualListingPage.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { ListingHttpService } from '../app/components/ListingHttpService/listingHttpService.service';
import { UserHttpService } from '../app/components/UserHttpService/userHttpService.service';
import { MainAppService } from '../app/components/MainAppService/mainAppService.service';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module cookieNap {
  'use strict';

  angular.module('cookieNap', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .service('listingHttpService', ListingHttpService)
    .service('userHttpService', UserHttpService)
    .service('mainAppService', MainAppService)
    .controller('MainController', MainController)
    .controller('SignInController', SignInController)
    .controller('CreateListingController', CreateListingController)
    .controller('IndividualListingPageController', IndividualListingPageController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey);
}
