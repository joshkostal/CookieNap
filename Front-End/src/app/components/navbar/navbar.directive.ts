import { MainAppService } from '../MainAppService/mainAppService.service';
import { UserHttpService } from "../UserHttpService/userHttpService.service";

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
  public userHttpService: UserHttpService;
  public $log: any;
  public val: string;
  public loggedIn: boolean;
  public currentPage: string;
  public $location: any;
  public $window: any;

  constructor($log: any, $window: any, moment: moment.MomentStatic, mainAppService: MainAppService, $location: any, userHttpService: UserHttpService) {
    this.$log = $log;
    this.$location = $location;
    this.mainAppService = mainAppService;
    this.currentPage = mainAppService.currentPage;
    this.userHttpService = userHttpService;
    this.mainAppService.currentUserName = $window.localStorage.getItem('UserName');
    this.mainAppService.currentJwtToken = $window.localStorage.getItem('UserJWT');
    if(this.mainAppService.currentUserName){
        this.loggedIn = true;
    }
    else {
        this.loggedIn = false;
    }
  }

  logOut(){
      this.mainAppService.currentUserName = '';
      this.mainAppService.currentUnlEmail = '';
      this.mainAppService.currentPersonalEmail = '';
      this.loggedIn = false;
  }

  resetPassword() {
      this.userHttpService.sendResetEmail(this.mainAppService.currentUserName);
      this.$location.path('/resetPassword');
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
