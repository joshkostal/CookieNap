
import { MainAppService } from "../MainAppService/mainAppService.service";

export class UserHttpService {
    public url: string = 'http://localhost:5001';
    public mainAppService: MainAppService;
    public $log: angular.ILogService;
    public responseVal: any;
    public $q: any;
    public $location: any;
    public $window: any;
    public correctCode: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public userName: string;
    public unlEmail: string;
    public personalEmail: string;
    public userReset: string;
    
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
        else {
            self.$window.alert('Incorrect username or password');
        }
      }, function errorCallback(response) {
        self.$log.log("Fail")
    });    
      return this.responseVal;
    }
    validateUser(unlEmail:string, password:string, otherEmail:string, userName:string, firstName:string, lastName:string){
      var self = this;
      self.password = password;
      self.firstName = firstName;
      self.lastName = lastName;
      self.userName = userName;
      self.unlEmail = unlEmail;
      self.personalEmail = otherEmail;

      this.$http.post('http://localhost:5001/Users/Validate',
      {
        'UserName' : userName,
        'HuskerEmail' : unlEmail,
      }
      ).then(function successCallback(response) {
          if (response.data == "Success") {
              self.confirmationPage(userName, unlEmail, otherEmail);
          } else if (response.data == "UsernameFail") {
              self.$window.alert('This Username is not valid');
          } else if (response.data == "EmailFail") {
              self.$window.alert('This Email is not valid');
          }
     }, function errorCallback(response) {
        return this.responseVal;
    });
    }
    signInUser(userName:string){
      this.mainAppService.currentUserName = userName;
      this.$location.path('/');
    }
    confirmationPage(userName: string, unlEmail: string, personalEmail: string) {
        var self = this;

        this.$http.post('http://localhost:5001/Users/Confirm',
            {
                'UserName': userName,
                'HuskerEmail': unlEmail,
                'CommunicationEmail': personalEmail
            }
        ).then(function successCallback(response) {
            self.correctCode = response.data;
        }, function errorCallback(response) {
            return this.responseVal;
            });

        this.$location.path('/confirmEmail');
    }
    confirmUser(code: string) {
        var self = this;
        if (code == self.correctCode) {
            return true;
        }
        else {
            return false;
        }
    }
    createUser() {
        var self = this;
        this.$http.post('http://localhost:5001/Users/Create',
            {
                'UserName': self.userName,
                'FirstName': self.firstName,
                'LastName': self.lastName,
                'HuskerEmail': self.unlEmail,
                'CommunicationEmail': self.personalEmail,
                'Password': self.password
            }
        ).then(function successCallback(response) {
            this.$location.path('/');
        }, function errorCallback(response) {
            return this.responseVal;
        });
    }
    resetPassword(code: string, password: string) {
        if (code == this.correctCode) {
            this.$http.post('http://localhost:5001/Users/Reset',
                {
                    'UserName': this.userReset,
                    'Password': password
                }
            )
            return true;
        }
        else {
            this.$window.alert('Incorrect code, please try again');
        }
    }
    sendResetEmail(user: string) {
        var self = this;
        this.$http.post('http://localhost:5001/Users/SendResetEmail',
            {
                'Username': user
            }
        ).then(function successCallback(response) {
            self.correctCode = response.data;
            self.userReset = user;
        }, function errorCallback(response) {
            return this.responseVal;
        });
    }
  }