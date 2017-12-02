
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

    signIn(userName: string, password: string) {
        var self = this;
        this.$http.post(this.url + '/Users/Login', { "UserName": userName, "Password": password })
            .then(function successCallback(response) {
                if (response.data == 'Login Failed') {
                    self.$window.alert('Incorrect username or password');
                }
                else {
                    self.$window.localStorage.setItem('UserJWT', response.data);
                    self.$window.localStorage.setItem('UserName', userName);
                    self.mainAppService.currentUserName = userName;
                    self.mainAppService.currentJwtToken = response.data;
                    self.$location.path('/');
                }
            }, function errorCallback(response) {
                self.$log.log("Fail")
            });
    }

    validateUser(unlEmail: string, password: string, otherEmail: string, userName: string, firstName: string, lastName: string) {
        var self = this;
        self.password = password;
        self.firstName = firstName;
        self.lastName = lastName;
        self.userName = userName;
        self.unlEmail = unlEmail;
        self.personalEmail = otherEmail;

        this.$http.post('http://localhost:5001/Users/Validate',
            {
                'UserName': userName,
                'HuskerEmail': unlEmail,
                'FirstName': self.firstName,
                'LastName': self.lastName,
                'Password': self.password
            }
        ).then(function successCallback(response) {
            if (response.data == "UsernameFail") {
                self.$window.alert('This Username is not valid');
            } else if (response.data == "EmailFail") {
                self.$window.alert('This Email is not valid');
            } else if (response.data == "FirstNameFail") {
                self.$window.alert('This First Name is not valid');                
            } else if (response.data == "LastNameFail") {
                self.$window.alert('This Last Name is not valid');                                
            } else if (response.data == "PasswordFail") {
                self.$window.alert('This Password is not valid');                                                
            }else{
                self.correctCode = response.data;
                this.$location.path('/confirmEmail');                
            } 
        }, function errorCallback(response) {
            return this.responseVal;
        });
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
            self.$window.localStorage.setItem('UserJWT', response.data);
            self.$window.localStorage.setItem('UserName', self.userName);
            self.mainAppService.currentUserName = self.userName;
            self.mainAppService.currentJwtToken = response.data;
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