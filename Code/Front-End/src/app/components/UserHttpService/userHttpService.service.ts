import { MainAppService } from '../MainAppService/mainAppService.service';

export class UserHttpService {
    public url: string = 'http://localhost:5001';
    public mainAppService: MainAppService;
    public $log: angular.ILogService;
    
    /** @ngInject */
    constructor( $log: angular.ILogService, private $http: angular.IHttpService, mainAppService: MainAppService) {
      this.$log = $log;
      this.mainAppService = mainAppService;
    }
    signIn(userName:string, password:string){
      this.$http.post(this.url + '/Users/Login',
      {
        "UserName": userName,
        "Password": password
      }
      ).then((response: any): any => {
        this.mainAppService.currentUserName = response.data;
      });    
    }
    createUser(unlEmail:string, password:string, otherEmail:string, userName:string, firstName:string, lastName:string){
      this.$http.post('http://localhost:5001/Users/Create',
    {
      'UserName' : userName,
      'FirstName' : firstName,
      'LastName' : lastName,
      'HuskerEmail' : unlEmail,
      'CommunicationEmail' : otherEmail,
      'Password' : password
    }
    ).then((response: any): any => {
      this.mainAppService.currentUserName = response.data;
    });
    }
  }