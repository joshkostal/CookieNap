
export class UserHttpService {
    public url: string = 'http://localhost:5001';
    public mainAppService: MainAppService;
    public $log: angular.ILogService;
    public responseVal: any;
    public $q: any;
    public $location: any;
    public $window: any;
    
    /** @ngInject */
    constructor($window: any, $location: any, $q: any, $log: angular.ILogService, private $http: angular.IHttpService, mainAppService: MainAppService) {
      this.$log = $log;
      this.$q = $q;
      this.mainAppService = mainAppService;
      this.responseVal = null;
      this.$location = $location;
      this.$window = $window;
    }
    signIn(userName:string, password:string){
      var self = this;      
      this.$http.post(this.url + '/Users/Login',{ "UserName": userName, "Password": password })
      .then(function successCallback(response) {
        if(response.data == userName){
          self.signInUser(userName);
        }
      }, function errorCallback(response) {
        self.$log.log("Fail")
    });    
      return this.responseVal;
    }
    createUser(unlEmail:string, password:string, otherEmail:string, userName:string, firstName:string, lastName:string){
      var self = this;
      this.$http.post('http://localhost:5001/Users/Create',
      {
        'UserName' : userName,
        'FirstName' : firstName,
        'LastName' : lastName,
        'HuskerEmail' : unlEmail,
        'CommunicationEmail' : otherEmail,
        'Password' : password
      }
      ).then(function successCallback(response) {
        if(response.data == "Success"){
          self.signInUser(userName);
        }else if(response.data == "UsernameFail"){
          self.$window.alert('This Username is not valid');          
        }else if(response.data == "EmailFail"){
          self.$window.alert('This Email is not valid');                    
        }else{
          self.$window.alert('You failed to sign up');                              
        }
     }, function errorCallback(response) {
        return this.responseVal;
        
    });
    }
    signInUser(userName:string){
      this.mainAppService.currentUserName = userName;
      this.$location.path('/');
    }
  }