/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/main.d.ts" />
	var index_config_1 = __webpack_require__(1);
	var index_route_1 = __webpack_require__(2);
	var index_run_1 = __webpack_require__(3);
	var main_controller_1 = __webpack_require__(4);
	var createListing_controller_1 = __webpack_require__(5);
	var signin_controller_1 = __webpack_require__(6);
	var individualListingPage_controller_1 = __webpack_require__(7);
	var githubContributor_service_1 = __webpack_require__(8);
	var webDevTec_service_1 = __webpack_require__(9);
	var navbar_directive_1 = __webpack_require__(10);
	var malarkey_directive_1 = __webpack_require__(11);
	var listingHttpService_service_1 = __webpack_require__(12);
	var userHttpService_service_1 = __webpack_require__(13);
	var mainAppService_service_1 = __webpack_require__(14);
	var cookieNap;
	(function (cookieNap) {
	    'use strict';
	    angular.module('cookieNap', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
	        .constant('malarkey', malarkey)
	        .constant('moment', moment)
	        .config(index_config_1.config)
	        .config(index_route_1.routerConfig)
	        .run(index_run_1.runBlock)
	        .service('githubContributor', githubContributor_service_1.GithubContributor)
	        .service('webDevTec', webDevTec_service_1.WebDevTecService)
	        .service('listingHttpService', listingHttpService_service_1.ListingHttpService)
	        .service('userHttpService', userHttpService_service_1.UserHttpService)
	        .service('mainAppService', mainAppService_service_1.MainAppService)
	        .controller('MainController', main_controller_1.MainController)
	        .controller('SignInController', signin_controller_1.SignInController)
	        .controller('CreateListingController', createListing_controller_1.CreateListingController)
	        .controller('IndividualListingPageController', individualListingPage_controller_1.IndividualListingPageController)
	        .directive('acmeNavbar', navbar_directive_1.acmeNavbar)
	        .directive('acmeMalarkey', malarkey_directive_1.acmeMalarkey);
	})(cookieNap || (cookieNap = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/** @ngInject */
	config.$inject = ["$logProvider", "toastrConfig"];
	function config($logProvider, toastrConfig) {
	    // enable log
	    $logProvider.debugEnabled(true);
	    // set options third-party lib
	    toastrConfig.allowHtml = true;
	    toastrConfig.timeOut = 3000;
	    toastrConfig.positionClass = 'toast-top-right';
	    toastrConfig.preventDuplicates = true;
	    toastrConfig.progressBar = true;
	}
	exports.config = config;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/** @ngInject */
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	function routerConfig($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('home', {
	        url: '/',
	        templateUrl: 'app/main/main.html',
	        controller: 'MainController',
	        controllerAs: 'main'
	    })
	        .state('signIn', {
	        url: '/signIn',
	        templateUrl: 'app/signin/signin.html',
	        controller: 'SignInController',
	        controllerAs: 'signIn'
	    })
	        .state('createListing', {
	        url: '/createListing',
	        templateUrl: 'app/createListing/createListing.html',
	        controller: 'CreateListingController',
	        controllerAs: 'createListing'
	    })
	        .state('individualListingPage', {
	        url: '/individualListingPage',
	        templateUrl: 'app/individualListingPage/individualListingPage.html',
	        controller: 'IndividualListingPageController',
	        controllerAs: 'individualListing'
	    });
	    $urlRouterProvider.otherwise('/');
	}
	exports.routerConfig = routerConfig;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/** @ngInject */
	runBlock.$inject = ["$log"];
	function runBlock($log) {
	    $log.debug('runBlock end');
	}
	exports.runBlock = runBlock;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	var MainController = (function () {
	    /* @ngInject */
	    MainController.$inject = ["$q", "$http", "$log", "$location", "$timeout", "webDevTec", "toastr", "mainAppService", "listingHttpService"];
	    function MainController($q, $http, $log, $location, $timeout, webDevTec, toastr, mainAppService, listingHttpService) {
	        this.listingHttpService = listingHttpService;
	        this.$location = $location;
	        this.$http = $http;
	        this.$log = $log;
	        this.awesomeThings = new Array();
	        this.webDevTec = webDevTec;
	        this.mainAppService = mainAppService;
	        this.classAnimation = '';
	        this.creationDate = 1506664725860;
	        this.toastr = toastr;
	        this.activate($timeout);
	        this.promises = [];
	    }
	    /** @ngInject */
	    MainController.prototype.activate = function ($timeout) {
	        this.getWebDevTec();
	        $timeout(function () {
	        }, 10000);
	    };
	    MainController.prototype.activate.$inject = ["$timeout"];
	    MainController.prototype.signIn = function () {
	        this.$location.path('/signIn');
	    };
	    MainController.prototype.openListing = function (val) {
	        this.mainAppService.selectedListingBookName = val.bookListed.title;
	        this.mainAppService.selectedListingUser = val.listingCreator.userName;
	        this.mainAppService.selectedListingPrice = val.price;
	        this.mainAppService.selectedListingURL = val.bookListed.thumbnailURL;
	        this.mainAppService.selectedListingCondition = val.condition;
	        this.mainAppService.selectedListingOwnersEmail = val.listingCreator.communicationEmail;
	        this.mainAppService.selectedListingId = val.listingID;
	        this.$location.path('/individualListingPage');
	    };
	    MainController.prototype.getWebDevTec = function () {
	        var _this = this;
	        var self = this;
	        this.$http.get('http://localhost:5001/Listings')
	            .then(function (response) {
	            self.allBooks = response.data;
	            for (var i = 0; i < self.allBooks.length; i++) {
	                if (self.allBooks[i].condition == 0) {
	                    self.allBooks[i].condition = 'Like-new';
	                }
	                else if (self.allBooks[i].condition == 1) {
	                    self.allBooks[i].condition = 'Good';
	                }
	                else {
	                    self.allBooks[i].condition = 'Usable';
	                }
	            }
	        })
	            .catch(function (error) {
	            _this.$log.error('XHR Failed for getContributors.\n', error.data);
	            return error;
	        });
	    };
	    return MainController;
	})();
	exports.MainController = MainController;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var CreateListingController = (function () {
	    /* @ngInject */
	    CreateListingController.$inject = ["$window", "$log", "$location", "listingHttpService", "mainAppService"];
	    function CreateListingController($window, $log, $location, listingHttpService, mainAppService) {
	        this.$location = $location;
	        this.listingHttpService = listingHttpService;
	        this.mainAppService = mainAppService;
	        this.$log = $log;
	        this.$window = $window;
	        this.isbn = '';
	        this.condition = '';
	    }
	    /** @ngInject */
	    CreateListingController.prototype.createListing = function () {
	        if (this.mainAppService.currentUserName != '') {
	            this.listingHttpService.createListing(this.price, this.isbn, this.condition, this.mainAppService.currentUserName);
	            this.$window.alert('You have created a Listing');
	        }
	        else {
	            this.$window.alert('Sign in to create Listing');
	        }
	    };
	    return CreateListingController;
	})();
	exports.CreateListingController = CreateListingController;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	var SignInController = (function () {
	    /* @ngInject */
	    SignInController.$inject = ["$q", "$log", "$location", "userHttpService", "mainAppService"];
	    function SignInController($q, $log, $location, userHttpService, mainAppService) {
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
	        this.newUserSignUpBoolean = false;
	        this.$q = $q;
	    }
	    /** @ngInject */
	    SignInController.prototype.createOrSignInUser = function () {
	        if (this.newUserSignUpBoolean) {
	            this.userHttpService.createUser(this.unlEmail, this.password, this.otherEmail, this.userName, this.firstName, this.lastName);
	        }
	        else {
	            var val = this.userHttpService.signIn(this.userName, this.password);
	            if (val == 'Success') {
	                this.mainAppService.currentUserName = this.userName;
	                this.$location.path('/');
	            }
	        }
	        //this.listingHttp.getListings();
	    };
	    return SignInController;
	})();
	exports.SignInController = SignInController;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var IndividualListingPageController = (function () {
	    /* @ngInject */
	    IndividualListingPageController.$inject = ["$window", "$log", "$location", "listingHttpService", "mainAppService"];
	    function IndividualListingPageController($window, $log, $location, listingHttpService, mainAppService) {
	        this.url = '';
	        this.emailAvailable = false;
	        this.$location = $location;
	        this.listingHttpService = listingHttpService;
	        this.mainAppService = mainAppService;
	        this.$log = $log;
	        this.$window = $window;
	        if (this.mainAppService.selectedListingURL) {
	            this.url = this.mainAppService.selectedListingURL;
	        }
	        this.bookTitle = this.mainAppService.selectedListingBookName;
	        this.price = this.mainAppService.selectedListingPrice;
	        this.user = this.mainAppService.selectedListingUser;
	        this.condition = this.mainAppService.selectedListingCondition;
	        this.ownersEmail = this.mainAppService.selectedListingOwnersEmail;
	        this.emailAvailable = false;
	    }
	    /** @ngInject */
	    IndividualListingPageController.prototype.toggleEmailAvailable = function () {
	        if (this.mainAppService.currentUserName != '') {
	            this.emailAvailable = true;
	        }
	        else {
	            this.$window.alert('Sign in to see email');
	        }
	    };
	    IndividualListingPageController.prototype.deleteListing = function () {
	        if (this.user === this.mainAppService.currentUserName) {
	            this.listingHttpService.deleteListing(this.mainAppService.selectedListingId);
	        }
	    };
	    return IndividualListingPageController;
	})();
	exports.IndividualListingPageController = IndividualListingPageController;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var GithubContributor = (function () {
	    /** @ngInject */
	    GithubContributor.$inject = ["$log", "$http"];
	    function GithubContributor($log, $http) {
	        this.$log = $log;
	        this.$http = $http;
	        this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	    }
	    GithubContributor.prototype.getContributors = function (limit) {
	        var _this = this;
	        if (limit === void 0) { limit = 30; }
	        return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
	            .then(function (response) {
	            return response.data;
	        })
	            .catch(function (error) {
	            _this.$log.error('XHR Failed for getContributors.\n', error.data);
	        });
	    };
	    return GithubContributor;
	})();
	exports.GithubContributor = GithubContributor;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var WebDevTecService = (function () {
	    /** @ngInject */
	    function WebDevTecService() {
	        var rawData = [
	            {
	                'title': 'AngularJS',
	                'url': 'https://angularjs.org/',
	                'description': 'HTML enhanced for web apps!',
	                'logo': 'angular.png'
	            },
	            {
	                'title': 'BrowserSync',
	                'url': 'http://browsersync.io/',
	                'description': 'Time-saving synchronised browser testing.',
	                'logo': 'browsersync.png'
	            },
	            {
	                'title': 'GulpJS',
	                'url': 'http://gulpjs.com/',
	                'description': 'The streaming build system.',
	                'logo': 'gulp.png'
	            },
	            {
	                'title': 'Jasmine',
	                'url': 'http://jasmine.github.io/',
	                'description': 'Behavior-Driven JavaScript.',
	                'logo': 'jasmine.png'
	            },
	            {
	                'title': 'Karma',
	                'url': 'http://karma-runner.github.io/',
	                'description': 'Spectacular Test Runner for JavaScript.',
	                'logo': 'karma.png'
	            },
	            {
	                'title': 'Protractor',
	                'url': 'https://github.com/angular/protractor',
	                'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	                'logo': 'protractor.png'
	            },
	            {
	                'title': 'Bootstrap',
	                'url': 'http://getbootstrap.com/',
	                'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	                'logo': 'bootstrap.png'
	            },
	            {
	                'title': 'Angular UI Bootstrap',
	                'url': 'http://angular-ui.github.io/bootstrap/',
	                'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	                'logo': 'ui-bootstrap.png'
	            },
	            {
	                'title': 'Sass (Node)',
	                'url': 'https://github.com/sass/node-sass',
	                'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	                'logo': 'node-sass.png'
	            },
	            {
	                'title': 'TypeScript',
	                'url': 'http://www.typescriptlang.org/',
	                'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
	                'logo': 'typescript.png'
	            }
	        ];
	        this.data = rawData.map(function (awesomeThing) {
	            awesomeThing.rank = Math.random();
	            return awesomeThing;
	        });
	    }
	    Object.defineProperty(WebDevTecService.prototype, "tec", {
	        get: function () {
	            return this.data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return WebDevTecService;
	})();
	exports.WebDevTecService = WebDevTecService;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/** @ngInject */
	function acmeNavbar() {
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
	exports.acmeNavbar = acmeNavbar;
	/** @ngInject */
	var NavbarController = (function () {
	    NavbarController.$inject = ["$log", "moment", "mainAppService"];
	    function NavbarController($log, moment, mainAppService) {
	        this.$log = $log;
	        this.mainAppService = mainAppService;
	        if (this.mainAppService.currentUserName != '') {
	            this.val = 'Welcome ' + this.mainAppService.currentUserName;
	        }
	    }
	    return NavbarController;
	})();
	exports.NavbarController = NavbarController;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/** @ngInject */
	acmeMalarkey.$inject = ["malarkey"];
	function acmeMalarkey(malarkey) {
	    return {
	        restrict: 'E',
	        scope: {
	            extraValues: '='
	        },
	        template: '&nbsp;',
	        link: linkFunc,
	        controller: MalarkeyController,
	        controllerAs: 'vm'
	    };
	}
	exports.acmeMalarkey = acmeMalarkey;
	function linkFunc(scope, el, attr, vm) {
	    var watcher;
	    var typist = vm.malarkey(el[0], {
	        typeSpeed: 40,
	        deleteSpeed: 40,
	        pauseDelay: 800,
	        loop: true,
	        postfix: ' '
	    });
	    el.addClass('acme-malarkey');
	    angular.forEach(scope.extraValues, function (value) {
	        typist.type(value).pause().delete();
	    });
	    scope.$on('$destroy', function () {
	        //watcher();
	    });
	}
	/** @ngInject */
	var MalarkeyController = (function () {
	    MalarkeyController.$inject = ["$log", "githubContributor", "malarkey"];
	    function MalarkeyController($log, githubContributor, malarkey) {
	        this.$log = $log;
	        this.githubContributor = githubContributor;
	        this.malarkey = malarkey;
	        this.contributors = [];
	        this.activate();
	    }
	    MalarkeyController.prototype.activate = function () {
	        var _this = this;
	        return this.getContributors()
	            .then(function () {
	            _this.$log.info('Activated Contributors View');
	        });
	    };
	    MalarkeyController.prototype.getContributors = function () {
	        var _this = this;
	        return this.githubContributor.getContributors(10)
	            .then(function (data) {
	            _this.contributors = data;
	            return _this.contributors;
	        });
	    };
	    return MalarkeyController;
	})();
	exports.MalarkeyController = MalarkeyController;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	var ListingHttpService = (function () {
	    /** @ngInject */
	    ListingHttpService.$inject = ["$log", "$http", "mainAppService"];
	    function ListingHttpService($log, $http, mainAppService) {
	        this.$http = $http;
	        this.url = 'http://localhost:5001';
	        this.$log = $log;
	        this.$http = $http;
	        this.mainAppService = mainAppService;
	    }
	    ListingHttpService.prototype.createListing = function (price, isbn, condition, userName) {
	        var _this = this;
	        this.$http.post(this.url + '/Listings/Create', {
	            "Price": price,
	            "Condition": condition,
	            "ISBN": isbn,
	            "ListingType": 'Selling',
	            "ListingCreatorUserName": userName
	        })
	            .then(function (response) {
	            _this.$log.log(response);
	        })
	            .catch(function (error) {
	            _this.$log.error('XHR Failed for getContributors.\n', error.data);
	        });
	    };
	    ListingHttpService.prototype.getAllListings = function () {
	        var _this = this;
	        this.$http.get('http://localhost:5001/Listings')
	            .then(function (response) {
	            return response.data;
	        })
	            .catch(function (error) {
	            _this.$log.error('XHR Failed for getContributors.\n', error.data);
	            return error;
	        });
	    };
	    ListingHttpService.prototype.getListingById = function (id) {
	        // return this.$http.get(this.url +'/Listings/Details/' + id)
	        // .then((response: any): any => {
	        //   return response.data;
	        // });
	    };
	    ListingHttpService.prototype.deleteListing = function (id) {
	        this.$http.get('http://localhost:5001/Listings/Delete/' + id);
	    };
	    return ListingHttpService;
	})();
	exports.ListingHttpService = ListingHttpService;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var UserHttpService = (function () {
	    /** @ngInject */
	    UserHttpService.$inject = ["$window", "$location", "$q", "$log", "$http", "mainAppService"];
	    function UserHttpService($window, $location, $q, $log, $http, mainAppService) {
	        this.$http = $http;
	        this.url = 'http://localhost:5001';
	        this.$log = $log;
	        this.$q = $q;
	        this.mainAppService = mainAppService;
	        this.responseVal = null;
	        this.$location = $location;
	        this.$window = $window;
	    }
	    UserHttpService.prototype.signIn = function (userName, password) {
	        var self = this;
	        this.$http.post(this.url + '/Users/Login', { "UserName": userName, "Password": password })
	            .then(function successCallback(response) {
	            if (response.data == userName) {
	                self.signInUser(userName);
	            }
	        }, function errorCallback(response) {
	            self.$log.log("Fail");
	        });
	        return this.responseVal;
	    };
	    UserHttpService.prototype.createUser = function (unlEmail, password, otherEmail, userName, firstName, lastName) {
	        var self = this;
	        this.$http.post('http://localhost:5001/Users/Create', {
	            'UserName': userName,
	            'FirstName': firstName,
	            'LastName': lastName,
	            'HuskerEmail': unlEmail,
	            'CommunicationEmail': otherEmail,
	            'Password': password
	        }).then(function successCallback(response) {
	            if (response.data == "Success") {
	                self.signInUser(userName);
	            }
	            else if (response.data == "UsernameFail") {
	                self.$window.alert('This Username is not valid');
	            }
	            else if (response.data == "EmailFail") {
	                self.$window.alert('This Email is not valid');
	            }
	            else {
	                self.$window.alert('You failed to sign up');
	            }
	        }, function errorCallback(response) {
	            return this.responseVal;
	        });
	    };
	    UserHttpService.prototype.signInUser = function (userName) {
	        this.mainAppService.currentUserName = userName;
	        this.$location.path('/');
	    };
	    return UserHttpService;
	})();
	exports.UserHttpService = UserHttpService;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var MainAppService = (function () {
	    /** @ngInject */
	    MainAppService.$inject = ["$log", "$http"];
	    function MainAppService($log, $http) {
	        this.$log = $log;
	        this.$http = $http;
	        this.url = 'https://localhost:3000';
	        this.selectedListingBookName = '';
	        this.selectedListingUser = '';
	        this.selectedListingPrice = null;
	        this.selectedListingCondition = '';
	        this.selectedListingURL = '';
	        this.selectedListingOwnersEmail = '';
	        this.currentUserName = '';
	        this.selectedListingId = null;
	    }
	    return MainAppService;
	})();
	exports.MainAppService = MainAppService;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZmYzI3M2FhMzE0YTcxMGMzYWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsOEJBQThCOzs7Ozs7O0FDbkMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCw2Q0FBNkM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWZmYzI3M2FhMzE0YTcxMGMzYWIiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxyXG52YXIgaW5kZXhfY29uZmlnXzEgPSByZXF1aXJlKCcuL2luZGV4LmNvbmZpZycpO1xyXG52YXIgaW5kZXhfcm91dGVfMSA9IHJlcXVpcmUoJy4vaW5kZXgucm91dGUnKTtcclxudmFyIGluZGV4X3J1bl8xID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcclxudmFyIG1haW5fY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9tYWluL21haW4uY29udHJvbGxlcicpO1xyXG52YXIgY3JlYXRlTGlzdGluZ19jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5jb250cm9sbGVyJyk7XHJcbnZhciBzaWduaW5fY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXInKTtcclxudmFyIGluZGl2aWR1YWxMaXN0aW5nUGFnZV9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlcicpO1xyXG52YXIgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xyXG52YXIgd2ViRGV2VGVjX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xyXG52YXIgbmF2YmFyX2RpcmVjdGl2ZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnKTtcclxudmFyIG1hbGFya2V5X2RpcmVjdGl2ZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XHJcbnZhciBsaXN0aW5nSHR0cFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlJyk7XHJcbnZhciB1c2VySHR0cFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvVXNlckh0dHBTZXJ2aWNlL3VzZXJIdHRwU2VydmljZS5zZXJ2aWNlJyk7XHJcbnZhciBtYWluQXBwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9NYWluQXBwU2VydmljZS9tYWluQXBwU2VydmljZS5zZXJ2aWNlJyk7XHJcbnZhciBjb29raWVOYXA7XHJcbihmdW5jdGlvbiAoY29va2llTmFwKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29va2llTmFwJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0ciddKVxyXG4gICAgICAgIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcclxuICAgICAgICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcclxuICAgICAgICAuY29uZmlnKGluZGV4X2NvbmZpZ18xLmNvbmZpZylcclxuICAgICAgICAuY29uZmlnKGluZGV4X3JvdXRlXzEucm91dGVyQ29uZmlnKVxyXG4gICAgICAgIC5ydW4oaW5kZXhfcnVuXzEucnVuQmxvY2spXHJcbiAgICAgICAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xLkdpdGh1YkNvbnRyaWJ1dG9yKVxyXG4gICAgICAgIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCB3ZWJEZXZUZWNfc2VydmljZV8xLldlYkRldlRlY1NlcnZpY2UpXHJcbiAgICAgICAgLnNlcnZpY2UoJ2xpc3RpbmdIdHRwU2VydmljZScsIGxpc3RpbmdIdHRwU2VydmljZV9zZXJ2aWNlXzEuTGlzdGluZ0h0dHBTZXJ2aWNlKVxyXG4gICAgICAgIC5zZXJ2aWNlKCd1c2VySHR0cFNlcnZpY2UnLCB1c2VySHR0cFNlcnZpY2Vfc2VydmljZV8xLlVzZXJIdHRwU2VydmljZSlcclxuICAgICAgICAuc2VydmljZSgnbWFpbkFwcFNlcnZpY2UnLCBtYWluQXBwU2VydmljZV9zZXJ2aWNlXzEuTWFpbkFwcFNlcnZpY2UpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgbWFpbl9jb250cm9sbGVyXzEuTWFpbkNvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1NpZ25JbkNvbnRyb2xsZXInLCBzaWduaW5fY29udHJvbGxlcl8xLlNpZ25JbkNvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NyZWF0ZUxpc3RpbmdDb250cm9sbGVyJywgY3JlYXRlTGlzdGluZ19jb250cm9sbGVyXzEuQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0luZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXInLCBpbmRpdmlkdWFsTGlzdGluZ1BhZ2VfY29udHJvbGxlcl8xLkluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIG5hdmJhcl9kaXJlY3RpdmVfMS5hY21lTmF2YmFyKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIG1hbGFya2V5X2RpcmVjdGl2ZV8xLmFjbWVNYWxhcmtleSk7XHJcbn0pKGNvb2tpZU5hcCB8fCAoY29va2llTmFwID0ge30pKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXHJcbmNvbmZpZy4kaW5qZWN0ID0gW1wiJGxvZ1Byb3ZpZGVyXCIsIFwidG9hc3RyQ29uZmlnXCJdO1xyXG5mdW5jdGlvbiBjb25maWcoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcclxuICAgIC8vIGVuYWJsZSBsb2dcclxuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XHJcbiAgICAvLyBzZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcclxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xyXG4gICAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xyXG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcclxuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XHJcbiAgICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xyXG59XHJcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxucm91dGVyQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcclxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnc2lnbkluJywge1xyXG4gICAgICAgIHVybDogJy9zaWduSW4nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZ25pbi9zaWduaW4uaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZ25JbkNvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3NpZ25JbidcclxuICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdjcmVhdGVMaXN0aW5nJywge1xyXG4gICAgICAgIHVybDogJy9jcmVhdGVMaXN0aW5nJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jcmVhdGVMaXN0aW5nL2NyZWF0ZUxpc3RpbmcuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0NyZWF0ZUxpc3RpbmdDb250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjcmVhdGVMaXN0aW5nJ1xyXG4gICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2luZGl2aWR1YWxMaXN0aW5nUGFnZScsIHtcclxuICAgICAgICB1cmw6ICcvaW5kaXZpZHVhbExpc3RpbmdQYWdlJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdpbmRpdmlkdWFsTGlzdGluZydcclxuICAgIH0pO1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xyXG59XHJcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXgucm91dGUudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xyXG5ydW5CbG9jay4kaW5qZWN0ID0gW1wiJGxvZ1wiXTtcclxuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xyXG4gICAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XHJcbn1cclxuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYWluQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiBAbmdJbmplY3QgKi9cclxuICAgIE1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkcVwiLCBcIiRodHRwXCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcIiR0aW1lb3V0XCIsIFwid2ViRGV2VGVjXCIsIFwidG9hc3RyXCIsIFwibWFpbkFwcFNlcnZpY2VcIiwgXCJsaXN0aW5nSHR0cFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBNYWluQ29udHJvbGxlcigkcSwgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyLCBtYWluQXBwU2VydmljZSwgbGlzdGluZ0h0dHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UgPSBsaXN0aW5nSHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy53ZWJEZXZUZWMgPSB3ZWJEZXZUZWM7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcclxuICAgICAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE1MDY2NjQ3MjU4NjA7XHJcbiAgICAgICAgdGhpcy50b2FzdHIgPSB0b2FzdHI7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCk7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy5nZXRXZWJEZXZUZWMoKTtcclxuICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgfTtcclxuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZS4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XHJcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9zaWduSW4nKTtcclxuICAgIH07XHJcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUub3Blbkxpc3RpbmcgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9IHZhbC5ib29rTGlzdGVkLnRpdGxlO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVXNlciA9IHZhbC5saXN0aW5nQ3JlYXRvci51c2VyTmFtZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1ByaWNlID0gdmFsLnByaWNlO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVVJMID0gdmFsLmJvb2tMaXN0ZWQudGh1bWJuYWlsVVJMO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uID0gdmFsLmNvbmRpdGlvbjtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsID0gdmFsLmxpc3RpbmdDcmVhdG9yLmNvbW11bmljYXRpb25FbWFpbDtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0lkID0gdmFsLmxpc3RpbmdJRDtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvaW5kaXZpZHVhbExpc3RpbmdQYWdlJyk7XHJcbiAgICB9O1xyXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldFdlYkRldlRlYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL0xpc3RpbmdzJylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYWxsQm9va3MgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYWxsQm9va3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnTGlrZS1uZXcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ0dvb2QnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnVXNhYmxlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1haW5Db250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLk1haW5Db250cm9sbGVyID0gTWFpbkNvbnRyb2xsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBDcmVhdGVMaXN0aW5nQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJsaXN0aW5nSHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyKCR3aW5kb3csICRsb2csICRsb2NhdGlvbiwgbGlzdGluZ0h0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgdGhpcy5pc2JuID0gJyc7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSAnJztcclxuICAgIH1cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZS5jcmVhdGVMaXN0aW5nKHRoaXMucHJpY2UsIHRoaXMuaXNibiwgdGhpcy5jb25kaXRpb24sIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdZb3UgaGF2ZSBjcmVhdGVkIGEgTGlzdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdTaWduIGluIHRvIGNyZWF0ZSBMaXN0aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5DcmVhdGVMaXN0aW5nQ29udHJvbGxlciA9IENyZWF0ZUxpc3RpbmdDb250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNpZ25JbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBTaWduSW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkcVwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJ1c2VySHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIFNpZ25JbkNvbnRyb2xsZXIoJHEsICRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlID0gdXNlckh0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMudW5sRW1haWwgPSAnJztcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5vdGhlckVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubmV3VXNlclNpZ25VcEJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB9XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBTaWduSW5Db250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVPclNpZ25JblVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV3VXNlclNpZ25VcEJvb2xlYW4pIHtcclxuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UuY3JlYXRlVXNlcih0aGlzLnVubEVtYWlsLCB0aGlzLnBhc3N3b3JkLCB0aGlzLm90aGVyRW1haWwsIHRoaXMudXNlck5hbWUsIHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLnVzZXJIdHRwU2VydmljZS5zaWduSW4odGhpcy51c2VyTmFtZSwgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgIGlmICh2YWwgPT0gJ1N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSA9IHRoaXMudXNlck5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLmxpc3RpbmdIdHRwLmdldExpc3RpbmdzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNpZ25JbkNvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuU2lnbkluQ29udHJvbGxlciA9IFNpZ25JbkNvbnRyb2xsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcigkd2luZG93LCAkbG9nLCAkbG9jYXRpb24sIGxpc3RpbmdIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCkge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVVJMO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvb2tUaXRsZSA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWU7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nUHJpY2U7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVc2VyO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5vd25lcnNFbWFpbCA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWw7XHJcbiAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUudG9nZ2xlRW1haWxBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdTaWduIGluIHRvIHNlZSBlbWFpbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLnByb3RvdHlwZS5kZWxldGVMaXN0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXIgPT09IHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmRlbGV0ZUxpc3RpbmcodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLkluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIgPSBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBHaXRodWJDb250cmlidXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBHaXRodWJDb250cmlidXRvci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCJdO1xyXG4gICAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3IoJGxvZywgJGh0dHApIHtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcclxuICAgIH1cclxuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLnByb3RvdHlwZS5nZXRDb250cmlidXRvcnMgPSBmdW5jdGlvbiAobGltaXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gMzA7IH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdpdGh1YkNvbnRyaWJ1dG9yO1xyXG59KSgpO1xyXG5leHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yID0gR2l0aHViQ29udHJpYnV0b3I7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFdlYkRldlRlY1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcclxuICAgICAgICB2YXIgcmF3RGF0YSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbmd1bGFyIFVJIEJvb3RzdHJhcCcsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAndWktYm9vdHN0cmFwLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1R5cGVTY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R5cGVTY3JpcHQsIGEgdHlwZWQgc3VwZXJzZXQgb2YgSmF2YVNjcmlwdCB0aGF0IGNvbXBpbGVzIHRvIHBsYWluIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3R5cGVzY3JpcHQucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLmRhdGEgPSByYXdEYXRhLm1hcChmdW5jdGlvbiAoYXdlc29tZVRoaW5nKSB7XHJcbiAgICAgICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF3ZXNvbWVUaGluZztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJEZXZUZWNTZXJ2aWNlLnByb3RvdHlwZSwgXCJ0ZWNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFdlYkRldlRlY1NlcnZpY2U7XHJcbn0pKCk7XHJcbmV4cG9ydHMuV2ViRGV2VGVjU2VydmljZSA9IFdlYkRldlRlY1NlcnZpY2U7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXHJcbmZ1bmN0aW9uIGFjbWVOYXZiYXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYWNtZU5hdmJhciA9IGFjbWVOYXZiYXI7XHJcbi8qKiBAbmdJbmplY3QgKi9cclxudmFyIE5hdmJhckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgTmF2YmFyQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIm1vbWVudFwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gTmF2YmFyQ29udHJvbGxlcigkbG9nLCBtb21lbnQsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsID0gJ1dlbGNvbWUgJyArIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBOYXZiYXJDb250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLk5hdmJhckNvbnRyb2xsZXIgPSBOYXZiYXJDb250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xyXG5hY21lTWFsYXJrZXkuJGluamVjdCA9IFtcIm1hbGFya2V5XCJdO1xyXG5mdW5jdGlvbiBhY21lTWFsYXJrZXkobWFsYXJrZXkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBleHRyYVZhbHVlczogJz0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXHJcbiAgICAgICAgbGluazogbGlua0Z1bmMsXHJcbiAgICAgICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFjbWVNYWxhcmtleSA9IGFjbWVNYWxhcmtleTtcclxuZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xyXG4gICAgdmFyIHdhdGNoZXI7XHJcbiAgICB2YXIgdHlwaXN0ID0gdm0ubWFsYXJrZXkoZWxbMF0sIHtcclxuICAgICAgICB0eXBlU3BlZWQ6IDQwLFxyXG4gICAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcclxuICAgICAgICBwYXVzZURlbGF5OiA4MDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBwb3N0Zml4OiAnICdcclxuICAgIH0pO1xyXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcclxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XHJcbiAgICB9KTtcclxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy93YXRjaGVyKCk7XHJcbiAgICB9KTtcclxufVxyXG4vKiogQG5nSW5qZWN0ICovXHJcbnZhciBNYWxhcmtleUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgTWFsYXJrZXlDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiZ2l0aHViQ29udHJpYnV0b3JcIiwgXCJtYWxhcmtleVwiXTtcclxuICAgIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvciwgbWFsYXJrZXkpIHtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuZ2l0aHViQ29udHJpYnV0b3IgPSBnaXRodWJDb250cmlidXRvcjtcclxuICAgICAgICB0aGlzLm1hbGFya2V5ID0gbWFsYXJrZXk7XHJcbiAgICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgICBNYWxhcmtleUNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE1hbGFya2V5Q29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q29udHJpYnV0b3JzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBfdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udHJpYnV0b3JzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYWxhcmtleUNvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuTWFsYXJrZXlDb250cm9sbGVyID0gTWFsYXJrZXlDb250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0aW5nSHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIExpc3RpbmdIdHRwU2VydmljZSgkbG9nLCAkaHR0cCwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAxJztcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUxpc3RpbmcgPSBmdW5jdGlvbiAocHJpY2UsIGlzYm4sIGNvbmRpdGlvbiwgdXNlck5hbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvTGlzdGluZ3MvQ3JlYXRlJywge1xyXG4gICAgICAgICAgICBcIlByaWNlXCI6IHByaWNlLFxyXG4gICAgICAgICAgICBcIkNvbmRpdGlvblwiOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgIFwiSVNCTlwiOiBpc2JuLFxyXG4gICAgICAgICAgICBcIkxpc3RpbmdUeXBlXCI6ICdTZWxsaW5nJyxcclxuICAgICAgICAgICAgXCJMaXN0aW5nQ3JlYXRvclVzZXJOYW1lXCI6IHVzZXJOYW1lXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2cubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldEFsbExpc3RpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9MaXN0aW5ncycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0TGlzdGluZ0J5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy51cmwgKycvTGlzdGluZ3MvRGV0YWlscy8nICsgaWQpXHJcbiAgICAgICAgLy8gLnRoZW4oKHJlc3BvbnNlOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgIC8vICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9O1xyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVMaXN0aW5nID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9MaXN0aW5ncy9EZWxldGUvJyArIGlkKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGlzdGluZ0h0dHBTZXJ2aWNlO1xyXG59KSgpO1xyXG5leHBvcnRzLkxpc3RpbmdIdHRwU2VydmljZSA9IExpc3RpbmdIdHRwU2VydmljZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVXNlckh0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIFVzZXJIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2NhdGlvblwiLCBcIiRxXCIsIFwiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBVc2VySHR0cFNlcnZpY2UoJHdpbmRvdywgJGxvY2F0aW9uLCAkcSwgJGxvZywgJGh0dHAsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMSc7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2VWYWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB9XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnNpZ25JbiA9IGZ1bmN0aW9uICh1c2VyTmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KHRoaXMudXJsICsgJy9Vc2Vycy9Mb2dpbicsIHsgXCJVc2VyTmFtZVwiOiB1c2VyTmFtZSwgXCJQYXNzd29yZFwiOiBwYXNzd29yZCB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT0gdXNlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2lnbkluVXNlcih1c2VyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJGxvZy5sb2coXCJGYWlsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xyXG4gICAgfTtcclxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICh1bmxFbWFpbCwgcGFzc3dvcmQsIG90aGVyRW1haWwsIHVzZXJOYW1lLCBmaXJzdE5hbWUsIGxhc3ROYW1lKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL0NyZWF0ZScsIHtcclxuICAgICAgICAgICAgJ1VzZXJOYW1lJzogdXNlck5hbWUsXHJcbiAgICAgICAgICAgICdGaXJzdE5hbWUnOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICdMYXN0TmFtZSc6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiB1bmxFbWFpbCxcclxuICAgICAgICAgICAgJ0NvbW11bmljYXRpb25FbWFpbCc6IG90aGVyRW1haWwsXHJcbiAgICAgICAgICAgICdQYXNzd29yZCc6IHBhc3N3b3JkXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT0gXCJTdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2lnbkluVXNlcih1c2VyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlVzZXJuYW1lRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgVXNlcm5hbWUgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIkVtYWlsRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1lvdSBmYWlsZWQgdG8gc2lnbiB1cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVZhbDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnNpZ25JblVzZXIgPSBmdW5jdGlvbiAodXNlck5hbWUpIHtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVXNlckh0dHBTZXJ2aWNlO1xyXG59KSgpO1xyXG5leHBvcnRzLlVzZXJIdHRwU2VydmljZSA9IFVzZXJIdHRwU2VydmljZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlckh0dHBTZXJ2aWNlL3VzZXJIdHRwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFpbkFwcFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgTWFpbkFwcFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiXTtcclxuICAgIGZ1bmN0aW9uIE1haW5BcHBTZXJ2aWNlKCRsb2csICRodHRwKSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVXNlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nUHJpY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdVUkwgPSAnJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlck5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0lkID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYWluQXBwU2VydmljZTtcclxufSkoKTtcclxuZXhwb3J0cy5NYWluQXBwU2VydmljZSA9IE1haW5BcHBTZXJ2aWNlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9NYWluQXBwU2VydmljZS9tYWluQXBwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9