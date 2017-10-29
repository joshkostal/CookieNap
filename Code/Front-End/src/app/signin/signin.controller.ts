import { UserHttpService } from '../components/UserHttpService/userHttpService.service';

export class SignInController {
    public userHttpService: UserHttpService;
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


  
    /* @ngInject */
    constructor ($log, $location, userHttpService: UserHttpService) {
      this.$location = $location;
      this.userHttpService = userHttpService;
      this.$log = $log;
      this.unlEmail = '';
      this.password = '';
      this.otherEmail = '';
      this.userName = '';
      this.firstName = '';
      this.lastName = '';
      this.newUserSignUpBoolean = false;
    }
  
    /** @ngInject */
  
    createOrSignInUser() {
        if(this.newUserSignUpBoolean){
          this.$log.log(this.unlEmail);
          
          this.userHttpService.createUser(this.unlEmail, this.password, this.otherEmail, this.userName, this.firstName, this.lastName);
        }else{
          this.userHttpService.signIn(this.unlEmail, this.password);
        }        
        //this.listingHttp.getListings();
    }
  
  }
  