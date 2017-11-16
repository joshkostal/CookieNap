import { MainAppService } from '../MainAppService/mainAppService.service';

/** @ngInject */
export function acmeNavbar(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      creationDate: '='
    },
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

}

/** @ngInject */
export class NavbarController {
  public user: string;
  // "this.creationDate" is initialized by directive option "bindToController: true"
  public creationDate: number;
  public mainAppService: MainAppService;
  public $log: any;
  public val: string;
  public loggedIn: boolean
  public currentPage: string

  constructor($log: any, moment: moment.MomentStatic, mainAppService: MainAppService) {
    this.$log = $log;
    this.mainAppService = mainAppService;
    this.currentPage = mainAppService.currentPage;
    if(this.mainAppService.currentUserName != ''){
        this.val = 'Welcome ' + this.mainAppService.currentUserName;
        this.loggedIn = true;
    }
    else {
        this.loggedIn = false;
    }
  }

  setPage(page: string) {
      this.mainAppService.currentPage = page;
  }

  checkPage(page: string) {
      if (this.mainAppService.currentPage == page) {
          return 'active';
      }
      else if (this.mainAppService.currentPage == 'signin' && this.loggedIn) {
          this.mainAppService.currentPage = 'home';
          return 'active';
      }
  }
}
