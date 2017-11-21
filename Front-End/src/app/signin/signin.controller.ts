import { UserHttpService } from '../components/UserHttpService/userHttpService.service';
import { MainAppService } from '../components/MainAppService/mainAppService.service';

export class SignInController {
    public userHttpService: UserHttpService;
    public mainAppService: MainAppService;
    public creationDate: number;
    public $location: any;
    public $log: any;
    public newUserSignUpBoolean: boolean;
    public unlEmail: string;
    public password: string;
    public otherEmail: string;
    public userName: string;
    public firstName: string;
    public lastName: string;
    public warning: boolean;
    public $q: any;
  
    /* @ngInject */
    constructor ($q, $log, $location, userHttpService: UserHttpService, mainAppService: MainAppService) {
      this.$location = $location;
      this.userHttpService = userHttpService;
      this.mainAppService = mainAppService;
      this.$log = $log;
      this.unlEmail = '';
      this.password = '';
      this.otherEmail = '';
      this.userName = '';
      this.firstName = '';
      this.lastName = '';
      this.warning = false;
      this.newUserSignUpBoolean = false;
      this.$q = $q;
    }
  
    /** @ngInject */
  
    createOrSignInUser() {
        if(this.newUserSignUpBoolean){
          this.userHttpService.validateUser(this.unlEmail, this.password, this.otherEmail, this.userName, this.firstName, this.lastName);
        }else{
          let val = this.userHttpService.signIn(this.userName, this.password);
          if(val == 'Success'){
            this.mainAppService.currentUserName = this.userName;
            this.$location.path('/');      
          }      
        }        
        //this.listingHttp.getListings();
    }
    resetPassword() {
        if (this.userName == '') {
            this.warning = true;
        }
        else {
            this.userHttpService.sendResetEmail(this.userName);
            this.$location.path('/resetPassword');
        }
    }  
  }
  