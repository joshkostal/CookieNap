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
	            this.val = this.mainAppService.currentUserName;
	            this.loggedIn = true;
	        }
	        else {
	            this.loggedIn = false;
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
	                self.confirmUser(userName, unlEmail);
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
	    UserHttpService.prototype.confirmUser = function (userName, unlEmail) {
	        this.mainAppService.currentUserName = userName;
	        this.$location.path('/Users/Confirm');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGJkYTlhNWIzOGEzNGIzZWViZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsOEJBQThCOzs7Ozs7O0FDbkMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9ELDZDQUE2QztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBiZGE5YTViMzhhMzRiM2VlYmZkIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxudmFyIGluZGV4X2NvbmZpZ18xID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcclxudmFyIGluZGV4X3JvdXRlXzEgPSByZXF1aXJlKCcuL2luZGV4LnJvdXRlJyk7XHJcbnZhciBpbmRleF9ydW5fMSA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XHJcbnZhciBtYWluX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcclxudmFyIGNyZWF0ZUxpc3RpbmdfY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9jcmVhdGVMaXN0aW5nL2NyZWF0ZUxpc3RpbmcuY29udHJvbGxlcicpO1xyXG52YXIgc2lnbmluX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vc2lnbmluL3NpZ25pbi5jb250cm9sbGVyJyk7XHJcbnZhciBpbmRpdmlkdWFsTGlzdGluZ1BhZ2VfY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXInKTtcclxudmFyIGdpdGh1YkNvbnRyaWJ1dG9yX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnKTtcclxudmFyIHdlYkRldlRlY19zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnKTtcclxudmFyIG5hdmJhcl9kaXJlY3RpdmVfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJyk7XHJcbnZhciBtYWxhcmtleV9kaXJlY3RpdmVfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZScpO1xyXG52YXIgbGlzdGluZ0h0dHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZScpO1xyXG52YXIgdXNlckh0dHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZScpO1xyXG52YXIgbWFpbkFwcFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZScpO1xyXG52YXIgY29va2llTmFwO1xyXG4oZnVuY3Rpb24gKGNvb2tpZU5hcCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2Nvb2tpZU5hcCcsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInXSlcclxuICAgICAgICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXHJcbiAgICAgICAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXHJcbiAgICAgICAgLmNvbmZpZyhpbmRleF9jb25maWdfMS5jb25maWcpXHJcbiAgICAgICAgLmNvbmZpZyhpbmRleF9yb3V0ZV8xLnJvdXRlckNvbmZpZylcclxuICAgICAgICAucnVuKGluZGV4X3J1bl8xLnJ1bkJsb2NrKVxyXG4gICAgICAgIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIGdpdGh1YkNvbnRyaWJ1dG9yX3NlcnZpY2VfMS5HaXRodWJDb250cmlidXRvcilcclxuICAgICAgICAuc2VydmljZSgnd2ViRGV2VGVjJywgd2ViRGV2VGVjX3NlcnZpY2VfMS5XZWJEZXZUZWNTZXJ2aWNlKVxyXG4gICAgICAgIC5zZXJ2aWNlKCdsaXN0aW5nSHR0cFNlcnZpY2UnLCBsaXN0aW5nSHR0cFNlcnZpY2Vfc2VydmljZV8xLkxpc3RpbmdIdHRwU2VydmljZSlcclxuICAgICAgICAuc2VydmljZSgndXNlckh0dHBTZXJ2aWNlJywgdXNlckh0dHBTZXJ2aWNlX3NlcnZpY2VfMS5Vc2VySHR0cFNlcnZpY2UpXHJcbiAgICAgICAgLnNlcnZpY2UoJ21haW5BcHBTZXJ2aWNlJywgbWFpbkFwcFNlcnZpY2Vfc2VydmljZV8xLk1haW5BcHBTZXJ2aWNlKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIG1haW5fY29udHJvbGxlcl8xLk1haW5Db250cm9sbGVyKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdTaWduSW5Db250cm9sbGVyJywgc2lnbmluX2NvbnRyb2xsZXJfMS5TaWduSW5Db250cm9sbGVyKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdDcmVhdGVMaXN0aW5nQ29udHJvbGxlcicsIGNyZWF0ZUxpc3RpbmdfY29udHJvbGxlcl8xLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyJywgaW5kaXZpZHVhbExpc3RpbmdQYWdlX2NvbnRyb2xsZXJfMS5JbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBuYXZiYXJfZGlyZWN0aXZlXzEuYWNtZU5hdmJhcilcclxuICAgICAgICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBtYWxhcmtleV9kaXJlY3RpdmVfMS5hY21lTWFsYXJrZXkpO1xyXG59KShjb29raWVOYXAgfHwgKGNvb2tpZU5hcCA9IHt9KSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xyXG5jb25maWcuJGluamVjdCA9IFtcIiRsb2dQcm92aWRlclwiLCBcInRvYXN0ckNvbmZpZ1wiXTtcclxuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XHJcbiAgICAvLyBlbmFibGUgbG9nXHJcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xyXG4gICAgLy8gc2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXHJcbiAgICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcclxuICAgIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcclxuICAgIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XHJcbiAgICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xyXG4gICAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcclxufVxyXG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXHJcbnJvdXRlckNvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIiwgXCIkdXJsUm91dGVyUHJvdmlkZXJcIl07XHJcbmZ1bmN0aW9uIHJvdXRlckNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gICAgfSlcclxuICAgICAgICAuc3RhdGUoJ3NpZ25JbicsIHtcclxuICAgICAgICB1cmw6ICcvc2lnbkluJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWduaW4vc2lnbmluLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTaWduSW5Db250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdzaWduSW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnY3JlYXRlTGlzdGluZycsIHtcclxuICAgICAgICB1cmw6ICcvY3JlYXRlTGlzdGluZycsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDcmVhdGVMaXN0aW5nQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3JlYXRlTGlzdGluZydcclxuICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdpbmRpdmlkdWFsTGlzdGluZ1BhZ2UnLCB7XHJcbiAgICAgICAgdXJsOiAnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnaW5kaXZpZHVhbExpc3RpbmcnXHJcbiAgICB9KTtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxucnVuQmxvY2suJGluamVjdCA9IFtcIiRsb2dcIl07XHJcbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcclxuICAgICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xyXG59XHJcbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFpbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHFcIiwgXCIkaHR0cFwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCIkdGltZW91dFwiLCBcIndlYkRldlRlY1wiLCBcInRvYXN0clwiLCBcIm1haW5BcHBTZXJ2aWNlXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHEsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0ciwgbWFpbkFwcFNlcnZpY2UsIGxpc3RpbmdIdHRwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMud2ViRGV2VGVjID0gd2ViRGV2VGVjO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNTA2NjY0NzI1ODYwO1xyXG4gICAgICAgIHRoaXMudG9hc3RyID0gdG9hc3RyO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMucHJvbWlzZXMgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKCk7XHJcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuICAgIH07XHJcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xyXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLnNpZ25JbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvc2lnbkluJyk7XHJcbiAgICB9O1xyXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLm9wZW5MaXN0aW5nID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWUgPSB2YWwuYm9va0xpc3RlZC50aXRsZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXIgPSB2YWwubGlzdGluZ0NyZWF0b3IudXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdQcmljZSA9IHZhbC5wcmljZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCA9IHZhbC5ib29rTGlzdGVkLnRodW1ibmFpbFVSTDtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0NvbmRpdGlvbiA9IHZhbC5jb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbCA9IHZhbC5saXN0aW5nQ3JlYXRvci5jb21tdW5pY2F0aW9uRW1haWw7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCA9IHZhbC5saXN0aW5nSUQ7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScpO1xyXG4gICAgfTtcclxuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5nZXRXZWJEZXZUZWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9MaXN0aW5ncycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZWxmLmFsbEJvb2tzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFsbEJvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ0xpa2UtbmV3JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdHb29kJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ1VzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYWluQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qIEBuZ0luamVjdCAqL1xyXG4gICAgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcigkd2luZG93LCAkbG9nLCAkbG9jYXRpb24sIGxpc3RpbmdIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuaXNibiA9ICcnO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gJyc7XHJcbiAgICB9XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBDcmVhdGVMaXN0aW5nQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlTGlzdGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UuY3JlYXRlTGlzdGluZyh0aGlzLnByaWNlLCB0aGlzLmlzYm4sIHRoaXMuY29uZGl0aW9uLCB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnWW91IGhhdmUgY3JlYXRlZCBhIExpc3RpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnU2lnbiBpbiB0byBjcmVhdGUgTGlzdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIgPSBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTaWduSW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qIEBuZ0luamVjdCAqL1xyXG4gICAgU2lnbkluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHFcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwidXNlckh0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBTaWduSW5Db250cm9sbGVyKCRxLCAkbG9nLCAkbG9jYXRpb24sIHVzZXJIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZSA9IHVzZXJIdHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLnVubEVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIHRoaXMub3RoZXJFbWFpbCA9ICcnO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLm5ld1VzZXJTaWduVXBCb29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgfVxyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgU2lnbkluQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlT3JTaWduSW5Vc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5ld1VzZXJTaWduVXBCb29sZWFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlLmNyZWF0ZVVzZXIodGhpcy51bmxFbWFpbCwgdGhpcy5wYXNzd29yZCwgdGhpcy5vdGhlckVtYWlsLCB0aGlzLnVzZXJOYW1lLCB0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gdGhpcy51c2VySHR0cFNlcnZpY2Uuc2lnbkluKHRoaXMudXNlck5hbWUsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBpZiAodmFsID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5saXN0aW5nSHR0cC5nZXRMaXN0aW5ncygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaWduSW5Db250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLlNpZ25JbkNvbnRyb2xsZXIgPSBTaWduSW5Db250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2lnbmluL3NpZ25pbi5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qIEBuZ0luamVjdCAqL1xyXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJsaXN0aW5nSHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnJztcclxuICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UgPSBsaXN0aW5nSHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkwpIHtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ib29rVGl0bGUgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1ByaWNlO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVXNlcjtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMub3duZXJzRW1haWwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsO1xyXG4gICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIucHJvdG90eXBlLnRvZ2dsZUVtYWlsQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnU2lnbiBpbiB0byBzZWUgZW1haWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy51c2VyID09PSB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZS5kZWxldGVMaXN0aW5nKHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5JbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyID0gSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgR2l0aHViQ29udHJpYnV0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgR2l0aHViQ29udHJpYnV0b3IuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiXTtcclxuICAgIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yKCRsb2csICRodHRwKSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XHJcbiAgICB9XHJcbiAgICBHaXRodWJDb250cmlidXRvci5wcm90b3R5cGUuZ2V0Q29udHJpYnV0b3JzID0gZnVuY3Rpb24gKGxpbWl0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IDMwOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHaXRodWJDb250cmlidXRvcjtcclxufSkoKTtcclxuZXhwb3J0cy5HaXRodWJDb250cmlidXRvciA9IEdpdGh1YkNvbnRyaWJ1dG9yO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XHJcbiAgICAgICAgdmFyIHJhd0RhdGEgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdUeXBlU2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUeXBlU2NyaXB0LCBhIHR5cGVkIHN1cGVyc2V0IG9mIEphdmFTY3JpcHQgdGhhdCBjb21waWxlcyB0byBwbGFpbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd0eXBlc2NyaXB0LnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5kYXRhID0gcmF3RGF0YS5tYXAoZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xyXG4gICAgICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2Vzb21lVGhpbmc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViRGV2VGVjU2VydmljZS5wcm90b3R5cGUsIFwidGVjXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xyXG59KSgpO1xyXG5leHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBXZWJEZXZUZWNTZXJ2aWNlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xyXG5mdW5jdGlvbiBhY21lTmF2YmFyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFjbWVOYXZiYXIgPSBhY21lTmF2YmFyO1xyXG4vKiogQG5nSW5qZWN0ICovXHJcbnZhciBOYXZiYXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIE5hdmJhckNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRsb2dcIiwgXCJtb21lbnRcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIoJGxvZywgbW9tZW50LCBtYWluQXBwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbCA9IHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmF2YmFyQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5OYXZiYXJDb250cm9sbGVyID0gTmF2YmFyQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxuYWNtZU1hbGFya2V5LiRpbmplY3QgPSBbXCJtYWxhcmtleVwiXTtcclxuZnVuY3Rpb24gYWNtZU1hbGFya2V5KG1hbGFya2V5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxyXG4gICAgICAgIGxpbms6IGxpbmtGdW5jLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hY21lTWFsYXJrZXkgPSBhY21lTWFsYXJrZXk7XHJcbmZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcclxuICAgIHZhciB3YXRjaGVyO1xyXG4gICAgdmFyIHR5cGlzdCA9IHZtLm1hbGFya2V5KGVsWzBdLCB7XHJcbiAgICAgICAgdHlwZVNwZWVkOiA0MCxcclxuICAgICAgICBkZWxldGVTcGVlZDogNDAsXHJcbiAgICAgICAgcGF1c2VEZWxheTogODAwLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgcG9zdGZpeDogJyAnXHJcbiAgICB9KTtcclxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XHJcbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vd2F0Y2hlcigpO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqIEBuZ0luamVjdCAqL1xyXG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIE1hbGFya2V5Q29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcImdpdGh1YkNvbnRyaWJ1dG9yXCIsIFwibWFsYXJrZXlcIl07XHJcbiAgICBmdW5jdGlvbiBNYWxhcmtleUNvbnRyb2xsZXIoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IsIG1hbGFya2V5KSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLmdpdGh1YkNvbnRyaWJ1dG9yID0gZ2l0aHViQ29udHJpYnV0b3I7XHJcbiAgICAgICAgdGhpcy5tYWxhcmtleSA9IG1hbGFya2V5O1xyXG4gICAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gICAgTWFsYXJrZXlDb250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycygpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNYWxhcmtleUNvbnRyb2xsZXIucHJvdG90eXBlLmdldENvbnRyaWJ1dG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgX3RoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRyaWJ1dG9ycztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWFsYXJrZXlDb250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLk1hbGFya2V5Q29udHJvbGxlciA9IE1hbGFya2V5Q29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdGluZ0h0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIExpc3RpbmdIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBMaXN0aW5nSHR0cFNlcnZpY2UoJGxvZywgJGh0dHAsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMSc7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKHByaWNlLCBpc2JuLCBjb25kaXRpb24sIHVzZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL0xpc3RpbmdzL0NyZWF0ZScsIHtcclxuICAgICAgICAgICAgXCJQcmljZVwiOiBwcmljZSxcclxuICAgICAgICAgICAgXCJDb25kaXRpb25cIjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICBcIklTQk5cIjogaXNibixcclxuICAgICAgICAgICAgXCJMaXN0aW5nVHlwZVwiOiAnU2VsbGluZycsXHJcbiAgICAgICAgICAgIFwiTGlzdGluZ0NyZWF0b3JVc2VyTmFtZVwiOiB1c2VyTmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRBbGxMaXN0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldExpc3RpbmdCeUlkID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMudXJsICsnL0xpc3RpbmdzL0RldGFpbHMvJyArIGlkKVxyXG4gICAgICAgIC8vIC50aGVuKChyZXNwb25zZTogYW55KTogYW55ID0+IHtcclxuICAgICAgICAvLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MvRGVsZXRlLycgKyBpZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpc3RpbmdIdHRwU2VydmljZTtcclxufSkoKTtcclxuZXhwb3J0cy5MaXN0aW5nSHR0cFNlcnZpY2UgPSBMaXN0aW5nSHR0cFNlcnZpY2U7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVzZXJIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBVc2VySHR0cFNlcnZpY2UuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9jYXRpb25cIiwgXCIkcVwiLCBcIiRsb2dcIiwgXCIkaHR0cFwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gVXNlckh0dHBTZXJ2aWNlKCR3aW5kb3csICRsb2NhdGlvbiwgJHEsICRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLnVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDEnO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlVmFsID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgfVxyXG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAodXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvVXNlcnMvTG9naW4nLCB7IFwiVXNlck5hbWVcIjogdXNlck5hbWUsIFwiUGFzc3dvcmRcIjogcGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09IHVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNpZ25JblVzZXIodXNlck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZWxmLiRsb2cubG9nKFwiRmFpbFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVZhbDtcclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodW5sRW1haWwsIHBhc3N3b3JkLCBvdGhlckVtYWlsLCB1c2VyTmFtZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9DcmVhdGUnLCB7XHJcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICAnRmlyc3ROYW1lJzogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAnTGFzdE5hbWUnOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgJ0h1c2tlckVtYWlsJzogdW5sRW1haWwsXHJcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBvdGhlckVtYWlsLFxyXG4gICAgICAgICAgICAnUGFzc3dvcmQnOiBwYXNzd29yZFxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09IFwiU3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpcm1Vc2VyKHVzZXJOYW1lLCB1bmxFbWFpbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlVzZXJuYW1lRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgVXNlcm5hbWUgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIkVtYWlsRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1lvdSBmYWlsZWQgdG8gc2lnbiB1cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVZhbDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnNpZ25JblVzZXIgPSBmdW5jdGlvbiAodXNlck5hbWUpIHtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNvbmZpcm1Vc2VyID0gZnVuY3Rpb24gKHVzZXJOYW1lLCB1bmxFbWFpbCkge1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL1VzZXJzL0NvbmZpcm0nKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVXNlckh0dHBTZXJ2aWNlO1xyXG59KSgpO1xyXG5leHBvcnRzLlVzZXJIdHRwU2VydmljZSA9IFVzZXJIdHRwU2VydmljZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlckh0dHBTZXJ2aWNlL3VzZXJIdHRwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFpbkFwcFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgTWFpbkFwcFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiXTtcclxuICAgIGZ1bmN0aW9uIE1haW5BcHBTZXJ2aWNlKCRsb2csICRodHRwKSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVXNlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nUHJpY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdVUkwgPSAnJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlck5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0lkID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYWluQXBwU2VydmljZTtcclxufSkoKTtcclxuZXhwb3J0cy5NYWluQXBwU2VydmljZSA9IE1haW5BcHBTZXJ2aWNlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9NYWluQXBwU2VydmljZS9tYWluQXBwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9