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
	var confirmEmail_controller_1 = __webpack_require__(6);
	var signin_controller_1 = __webpack_require__(7);
	var resetPassword_controller_1 = __webpack_require__(8);
	var individualListingPage_controller_1 = __webpack_require__(9);
	var githubContributor_service_1 = __webpack_require__(10);
	var webDevTec_service_1 = __webpack_require__(11);
	var navbar_directive_1 = __webpack_require__(12);
	var malarkey_directive_1 = __webpack_require__(13);
	var listingHttpService_service_1 = __webpack_require__(14);
	var userHttpService_service_1 = __webpack_require__(15);
	var mainAppService_service_1 = __webpack_require__(16);
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
	        .controller('ConfirmEmailController', confirmEmail_controller_1.ConfirmEmailController)
	        .controller('SignInController', signin_controller_1.SignInController)
	        .controller('ResetPasswordController', resetPassword_controller_1.ResetPasswordController)
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
	        .state('confirmEmail', {
	        url: '/confirmEmail',
	        templateUrl: 'app/confirmEmail/confirmEmail.html',
	        controller: 'ConfirmEmailController',
	        controllerAs: 'confirmEmail'
	    })
	        .state('resetPassword', {
	        url: '/resetPassword',
	        templateUrl: 'app/resetPassword/resetPassword.html',
	        controller: 'ResetPasswordController',
	        controllerAs: 'resetPassword'
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

	var ConfirmEmailController = (function () {
	    /* @ngInject */
	    ConfirmEmailController.$inject = ["$window", "$log", "$location", "userHttpService", "mainAppService"];
	    function ConfirmEmailController($window, $log, $location, userHttpService, mainAppService) {
	        this.$location = $location;
	        this.userHttpService = userHttpService;
	        this.mainAppService = mainAppService;
	        this.$log = $log;
	        this.$window = $window;
	    }
	    ConfirmEmailController.prototype.checkCode = function () {
	        if (this.userHttpService.confirmUser(this.code)) {
	            this.$location.path('/');
	            this.userHttpService.createUser();
	        }
	        else {
	            this.$window.alert('Incorrect code, please try again');
	        }
	    };
	    return ConfirmEmailController;
	})();
	exports.ConfirmEmailController = ConfirmEmailController;


/***/ }),
/* 7 */
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
	            this.userHttpService.validateUser(this.unlEmail, this.password, this.otherEmail, this.userName, this.firstName, this.lastName);
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
/* 8 */
/***/ (function(module, exports) {

	var ResetPasswordController = (function () {
	    /* @ngInject */
	    ResetPasswordController.$inject = ["$log", "$location", "userHttpService", "mainAppService"];
	    function ResetPasswordController($log, $location, userHttpService, mainAppService) {
	        this.$location = $location;
	        this.userHttpService = userHttpService;
	        this.mainAppService = mainAppService;
	        this.$log = $log;
	        this.code = '';
	        this.password = '';
	    }
	    ResetPasswordController.prototype.resetPassword = function () {
	        if (this.userHttpService.resetPassword(this.code, this.password)) {
	            this.$location.path('/');
	        }
	    };
	    return ResetPasswordController;
	})();
	exports.ResetPasswordController = ResetPasswordController;


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
	    NavbarController.$inject = ["$log", "moment", "mainAppService", "$location", "userHttpService"];
	    function NavbarController($log, moment, mainAppService, $location, userHttpService) {
	        this.$log = $log;
	        this.$location = $location;
	        this.mainAppService = mainAppService;
	        this.currentPage = mainAppService.currentPage;
	        this.userHttpService = userHttpService;
	        if (this.mainAppService.currentUserName != '') {
	            this.val = 'Welcome ' + this.mainAppService.currentUserName;
	            this.loggedIn = true;
	        }
	        else {
	            this.loggedIn = false;
	        }
	    }
	    NavbarController.prototype.logOut = function () {
	        this.mainAppService.currentUserName = '';
	        this.mainAppService.currentUnlEmail = '';
	        this.mainAppService.currentPersonalEmail = '';
	        this.loggedIn = false;
	    };
	    NavbarController.prototype.resetPassword = function () {
	        this.userHttpService.sendResetEmail(this.mainAppService.currentUserName);
	        this.$location.path('/resetPassword');
	    };
	    NavbarController.prototype.setPage = function (page) {
	        this.mainAppService.currentPage = page;
	    };
	    NavbarController.prototype.checkPage = function (page) {
	        if (this.mainAppService.currentPage == page) {
	            return 'active';
	        }
	        else if (this.mainAppService.currentPage == 'signin' && this.loggedIn) {
	            this.mainAppService.currentPage = 'home';
	            return 'active';
	        }
	    };
	    return NavbarController;
	})();
	exports.NavbarController = NavbarController;


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

	var ListingHttpService = (function () {
	    /** @ngInject */
	    ListingHttpService.$inject = ["$log", "$http", "mainAppService", "$location"];
	    function ListingHttpService($log, $http, mainAppService, $location) {
	        this.$http = $http;
	        this.url = 'http://localhost:5001';
	        this.$log = $log;
	        this.$http = $http;
	        this.mainAppService = mainAppService;
	        this.$location = $location;
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
	            _this.$location.path('/');
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
	        this.$location.path('/');
	    };
	    return ListingHttpService;
	})();
	exports.ListingHttpService = ListingHttpService;


/***/ }),
/* 15 */
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
	            else {
	                self.$window.alert('Incorrect username or password');
	            }
	        }, function errorCallback(response) {
	            self.$log.log("Fail");
	        });
	        return this.responseVal;
	    };
	    UserHttpService.prototype.validateUser = function (unlEmail, password, otherEmail, userName, firstName, lastName) {
	        var self = this;
	        self.password = password;
	        self.firstName = firstName;
	        self.lastName = lastName;
	        self.userName = userName;
	        self.unlEmail = unlEmail;
	        self.personalEmail = otherEmail;
	        this.$http.post('http://localhost:5001/Users/Validate', {
	            'UserName': userName,
	            'HuskerEmail': unlEmail,
	        }).then(function successCallback(response) {
	            if (response.data == "Success") {
	                self.confirmationPage(userName, unlEmail, otherEmail);
	            }
	            else if (response.data == "UsernameFail") {
	                self.$window.alert('This Username is not valid');
	            }
	            else if (response.data == "EmailFail") {
	                self.$window.alert('This Email is not valid');
	            }
	        }, function errorCallback(response) {
	            return this.responseVal;
	        });
	    };
	    UserHttpService.prototype.signInUser = function (userName) {
	        this.mainAppService.currentUserName = userName;
	        this.$location.path('/');
	    };
	    UserHttpService.prototype.confirmationPage = function (userName, unlEmail, personalEmail) {
	        var self = this;
	        this.$http.post('http://localhost:5001/Users/Confirm', {
	            'UserName': userName,
	            'HuskerEmail': unlEmail,
	            'CommunicationEmail': personalEmail
	        }).then(function successCallback(response) {
	            self.correctCode = response.data;
	        }, function errorCallback(response) {
	            return this.responseVal;
	        });
	        this.$location.path('/confirmEmail');
	    };
	    UserHttpService.prototype.confirmUser = function (code) {
	        var self = this;
	        if (code == self.correctCode) {
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    UserHttpService.prototype.createUser = function () {
	        var self = this;
	        this.$http.post('http://localhost:5001/Users/Create', {
	            'UserName': self.userName,
	            'FirstName': self.firstName,
	            'LastName': self.lastName,
	            'HuskerEmail': self.unlEmail,
	            'CommunicationEmail': self.personalEmail,
	            'Password': self.password
	        }).then(function successCallback(response) {
	            this.$location.path('/');
	        }, function errorCallback(response) {
	            return this.responseVal;
	        });
	    };
	    UserHttpService.prototype.resetPassword = function (code, password) {
	        if (code == this.correctCode) {
	            this.$http.post('http://localhost:5001/Users/Reset', {
	                'UserName': this.mainAppService.currentUserName,
	                'Password': password
	            });
	            return true;
	        }
	        else {
	            this.$window.alert('Incorrect code, please try again');
	        }
	    };
	    UserHttpService.prototype.sendResetEmail = function (user) {
	        var self = this;
	        this.$http.post('http://localhost:5001/Users/SendResetEmail', {
	            'Username': user
	        }).then(function successCallback(response) {
	            self.correctCode = response.data;
	        }, function errorCallback(response) {
	            return this.responseVal;
	        });
	    };
	    return UserHttpService;
	})();
	exports.UserHttpService = UserHttpService;


/***/ }),
/* 16 */
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
	        this.currentUnlEmail = '';
	        this.currentPersonalEmail = '';
	        this.selectedListingId = null;
	        this.currentPage = 'home';
	    }
	    return MainAppService;
	})();
	exports.MainAppService = MainAppService;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRkM2NjYmMyYWY3ZGZkOTM0ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLDhCQUE4Qjs7Ozs7OztBQ3ZDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsNkNBQTZDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGQzY2NiYzJhZjdkZmQ5MzRlYiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbnZhciBpbmRleF9jb25maWdfMSA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XHJcbnZhciBpbmRleF9yb3V0ZV8xID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xyXG52YXIgaW5kZXhfcnVuXzEgPSByZXF1aXJlKCcuL2luZGV4LnJ1bicpO1xyXG52YXIgbWFpbl9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XHJcbnZhciBjcmVhdGVMaXN0aW5nX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXInKTtcclxudmFyIGNvbmZpcm1FbWFpbF9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2NvbmZpcm1FbWFpbC9jb25maXJtRW1haWwuY29udHJvbGxlcicpO1xyXG52YXIgc2lnbmluX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vc2lnbmluL3NpZ25pbi5jb250cm9sbGVyJyk7XHJcbnZhciByZXNldFBhc3N3b3JkX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vcmVzZXRQYXNzd29yZC9yZXNldFBhc3N3b3JkLmNvbnRyb2xsZXInKTtcclxudmFyIGluZGl2aWR1YWxMaXN0aW5nUGFnZV9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlcicpO1xyXG52YXIgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xyXG52YXIgd2ViRGV2VGVjX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xyXG52YXIgbmF2YmFyX2RpcmVjdGl2ZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnKTtcclxudmFyIG1hbGFya2V5X2RpcmVjdGl2ZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XHJcbnZhciBsaXN0aW5nSHR0cFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlJyk7XHJcbnZhciB1c2VySHR0cFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvVXNlckh0dHBTZXJ2aWNlL3VzZXJIdHRwU2VydmljZS5zZXJ2aWNlJyk7XHJcbnZhciBtYWluQXBwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9NYWluQXBwU2VydmljZS9tYWluQXBwU2VydmljZS5zZXJ2aWNlJyk7XHJcbnZhciBjb29raWVOYXA7XHJcbihmdW5jdGlvbiAoY29va2llTmFwKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29va2llTmFwJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0ciddKVxyXG4gICAgICAgIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcclxuICAgICAgICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcclxuICAgICAgICAuY29uZmlnKGluZGV4X2NvbmZpZ18xLmNvbmZpZylcclxuICAgICAgICAuY29uZmlnKGluZGV4X3JvdXRlXzEucm91dGVyQ29uZmlnKVxyXG4gICAgICAgIC5ydW4oaW5kZXhfcnVuXzEucnVuQmxvY2spXHJcbiAgICAgICAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xLkdpdGh1YkNvbnRyaWJ1dG9yKVxyXG4gICAgICAgIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCB3ZWJEZXZUZWNfc2VydmljZV8xLldlYkRldlRlY1NlcnZpY2UpXHJcbiAgICAgICAgLnNlcnZpY2UoJ2xpc3RpbmdIdHRwU2VydmljZScsIGxpc3RpbmdIdHRwU2VydmljZV9zZXJ2aWNlXzEuTGlzdGluZ0h0dHBTZXJ2aWNlKVxyXG4gICAgICAgIC5zZXJ2aWNlKCd1c2VySHR0cFNlcnZpY2UnLCB1c2VySHR0cFNlcnZpY2Vfc2VydmljZV8xLlVzZXJIdHRwU2VydmljZSlcclxuICAgICAgICAuc2VydmljZSgnbWFpbkFwcFNlcnZpY2UnLCBtYWluQXBwU2VydmljZV9zZXJ2aWNlXzEuTWFpbkFwcFNlcnZpY2UpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgbWFpbl9jb250cm9sbGVyXzEuTWFpbkNvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NvbmZpcm1FbWFpbENvbnRyb2xsZXInLCBjb25maXJtRW1haWxfY29udHJvbGxlcl8xLkNvbmZpcm1FbWFpbENvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1NpZ25JbkNvbnRyb2xsZXInLCBzaWduaW5fY29udHJvbGxlcl8xLlNpZ25JbkNvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1Jlc2V0UGFzc3dvcmRDb250cm9sbGVyJywgcmVzZXRQYXNzd29yZF9jb250cm9sbGVyXzEuUmVzZXRQYXNzd29yZENvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NyZWF0ZUxpc3RpbmdDb250cm9sbGVyJywgY3JlYXRlTGlzdGluZ19jb250cm9sbGVyXzEuQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0luZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXInLCBpbmRpdmlkdWFsTGlzdGluZ1BhZ2VfY29udHJvbGxlcl8xLkluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIG5hdmJhcl9kaXJlY3RpdmVfMS5hY21lTmF2YmFyKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIG1hbGFya2V5X2RpcmVjdGl2ZV8xLmFjbWVNYWxhcmtleSk7XHJcbn0pKGNvb2tpZU5hcCB8fCAoY29va2llTmFwID0ge30pKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXHJcbmNvbmZpZy4kaW5qZWN0ID0gW1wiJGxvZ1Byb3ZpZGVyXCIsIFwidG9hc3RyQ29uZmlnXCJdO1xyXG5mdW5jdGlvbiBjb25maWcoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcclxuICAgIC8vIGVuYWJsZSBsb2dcclxuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XHJcbiAgICAvLyBzZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcclxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xyXG4gICAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xyXG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcclxuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XHJcbiAgICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xyXG59XHJcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxucm91dGVyQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcclxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnc2lnbkluJywge1xyXG4gICAgICAgIHVybDogJy9zaWduSW4nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZ25pbi9zaWduaW4uaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZ25JbkNvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3NpZ25JbidcclxuICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdjcmVhdGVMaXN0aW5nJywge1xyXG4gICAgICAgIHVybDogJy9jcmVhdGVMaXN0aW5nJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jcmVhdGVMaXN0aW5nL2NyZWF0ZUxpc3RpbmcuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0NyZWF0ZUxpc3RpbmdDb250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjcmVhdGVMaXN0aW5nJ1xyXG4gICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2NvbmZpcm1FbWFpbCcsIHtcclxuICAgICAgICB1cmw6ICcvY29uZmlybUVtYWlsJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtRW1haWxDb250cm9sbGVyJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjb25maXJtRW1haWwnXHJcbiAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgncmVzZXRQYXNzd29yZCcsIHtcclxuICAgICAgICB1cmw6ICcvcmVzZXRQYXNzd29yZCcsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVzZXRQYXNzd29yZC9yZXNldFBhc3N3b3JkLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZXNldFBhc3N3b3JkQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAncmVzZXRQYXNzd29yZCdcclxuICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdpbmRpdmlkdWFsTGlzdGluZ1BhZ2UnLCB7XHJcbiAgICAgICAgdXJsOiAnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnaW5kaXZpZHVhbExpc3RpbmcnXHJcbiAgICB9KTtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxucnVuQmxvY2suJGluamVjdCA9IFtcIiRsb2dcIl07XHJcbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcclxuICAgICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xyXG59XHJcbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFpbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHFcIiwgXCIkaHR0cFwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCIkdGltZW91dFwiLCBcIndlYkRldlRlY1wiLCBcInRvYXN0clwiLCBcIm1haW5BcHBTZXJ2aWNlXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHEsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0ciwgbWFpbkFwcFNlcnZpY2UsIGxpc3RpbmdIdHRwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMud2ViRGV2VGVjID0gd2ViRGV2VGVjO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNTA2NjY0NzI1ODYwO1xyXG4gICAgICAgIHRoaXMudG9hc3RyID0gdG9hc3RyO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMucHJvbWlzZXMgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKCk7XHJcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuICAgIH07XHJcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xyXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLnNpZ25JbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvc2lnbkluJyk7XHJcbiAgICB9O1xyXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLm9wZW5MaXN0aW5nID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWUgPSB2YWwuYm9va0xpc3RlZC50aXRsZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXIgPSB2YWwubGlzdGluZ0NyZWF0b3IudXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdQcmljZSA9IHZhbC5wcmljZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCA9IHZhbC5ib29rTGlzdGVkLnRodW1ibmFpbFVSTDtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0NvbmRpdGlvbiA9IHZhbC5jb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbCA9IHZhbC5saXN0aW5nQ3JlYXRvci5jb21tdW5pY2F0aW9uRW1haWw7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCA9IHZhbC5saXN0aW5nSUQ7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScpO1xyXG4gICAgfTtcclxuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5nZXRXZWJEZXZUZWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9MaXN0aW5ncycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZWxmLmFsbEJvb2tzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFsbEJvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ0xpa2UtbmV3JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdHb29kJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ1VzYWJsZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYWluQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qIEBuZ0luamVjdCAqL1xyXG4gICAgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcigkd2luZG93LCAkbG9nLCAkbG9jYXRpb24sIGxpc3RpbmdIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuaXNibiA9ICcnO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gJyc7XHJcbiAgICB9XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBDcmVhdGVMaXN0aW5nQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlTGlzdGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UuY3JlYXRlTGlzdGluZyh0aGlzLnByaWNlLCB0aGlzLmlzYm4sIHRoaXMuY29uZGl0aW9uLCB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnWW91IGhhdmUgY3JlYXRlZCBhIExpc3RpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnU2lnbiBpbiB0byBjcmVhdGUgTGlzdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIgPSBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb25maXJtRW1haWxDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qIEBuZ0luamVjdCAqL1xyXG4gICAgQ29uZmlybUVtYWlsQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJ1c2VySHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIENvbmZpcm1FbWFpbENvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgIH1cclxuICAgIENvbmZpcm1FbWFpbENvbnRyb2xsZXIucHJvdG90eXBlLmNoZWNrQ29kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy51c2VySHR0cFNlcnZpY2UuY29uZmlybVVzZXIodGhpcy5jb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlLmNyZWF0ZVVzZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IGNvZGUsIHBsZWFzZSB0cnkgYWdhaW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbmZpcm1FbWFpbENvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuQ29uZmlybUVtYWlsQ29udHJvbGxlciA9IENvbmZpcm1FbWFpbENvbnRyb2xsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNpZ25JbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBTaWduSW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkcVwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJ1c2VySHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIFNpZ25JbkNvbnRyb2xsZXIoJHEsICRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlID0gdXNlckh0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMudW5sRW1haWwgPSAnJztcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5vdGhlckVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubmV3VXNlclNpZ25VcEJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB9XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBTaWduSW5Db250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVPclNpZ25JblVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV3VXNlclNpZ25VcEJvb2xlYW4pIHtcclxuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UudmFsaWRhdGVVc2VyKHRoaXMudW5sRW1haWwsIHRoaXMucGFzc3dvcmQsIHRoaXMub3RoZXJFbWFpbCwgdGhpcy51c2VyTmFtZSwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMudXNlckh0dHBTZXJ2aWNlLnNpZ25Jbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKHZhbCA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubGlzdGluZ0h0dHAuZ2V0TGlzdGluZ3MoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2lnbkluQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5TaWduSW5Db250cm9sbGVyID0gU2lnbkluQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3NpZ25pbi9zaWduaW4uY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBSZXNldFBhc3N3b3JkQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gUmVzZXRQYXNzd29yZENvbnRyb2xsZXIoJGxvZywgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gJyc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlckh0dHBTZXJ2aWNlLnJlc2V0UGFzc3dvcmQodGhpcy5jb2RlLCB0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNldFBhc3N3b3JkQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5SZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IFJlc2V0UGFzc3dvcmRDb250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcmVzZXRQYXNzd29yZC9yZXNldFBhc3N3b3JkLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogQG5nSW5qZWN0ICovXHJcbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcigkd2luZG93LCAkbG9nLCAkbG9jYXRpb24sIGxpc3RpbmdIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCkge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVVJMO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvb2tUaXRsZSA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWU7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nUHJpY2U7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVc2VyO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5vd25lcnNFbWFpbCA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWw7XHJcbiAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUudG9nZ2xlRW1haWxBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdTaWduIGluIHRvIHNlZSBlbWFpbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLnByb3RvdHlwZS5kZWxldGVMaXN0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXIgPT09IHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmRlbGV0ZUxpc3RpbmcodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLkluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIgPSBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBHaXRodWJDb250cmlidXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBHaXRodWJDb250cmlidXRvci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCJdO1xyXG4gICAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3IoJGxvZywgJGh0dHApIHtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcclxuICAgIH1cclxuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLnByb3RvdHlwZS5nZXRDb250cmlidXRvcnMgPSBmdW5jdGlvbiAobGltaXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gMzA7IH1cclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdpdGh1YkNvbnRyaWJ1dG9yO1xyXG59KSgpO1xyXG5leHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yID0gR2l0aHViQ29udHJpYnV0b3I7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XHJcbiAgICAgICAgdmFyIHJhd0RhdGEgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdUeXBlU2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUeXBlU2NyaXB0LCBhIHR5cGVkIHN1cGVyc2V0IG9mIEphdmFTY3JpcHQgdGhhdCBjb21waWxlcyB0byBwbGFpbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd0eXBlc2NyaXB0LnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5kYXRhID0gcmF3RGF0YS5tYXAoZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xyXG4gICAgICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2Vzb21lVGhpbmc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViRGV2VGVjU2VydmljZS5wcm90b3R5cGUsIFwidGVjXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xyXG59KSgpO1xyXG5leHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBXZWJEZXZUZWNTZXJ2aWNlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxuZnVuY3Rpb24gYWNtZU5hdmJhcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hY21lTmF2YmFyID0gYWNtZU5hdmJhcjtcclxuLyoqIEBuZ0luamVjdCAqL1xyXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBOYXZiYXJDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwibW9tZW50XCIsIFwibWFpbkFwcFNlcnZpY2VcIiwgXCIkbG9jYXRpb25cIiwgXCJ1c2VySHR0cFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKCRsb2csIG1vbWVudCwgbWFpbkFwcFNlcnZpY2UsICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlID0gdXNlckh0dHBTZXJ2aWNlO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbCA9ICdXZWxjb21lICcgKyB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUubG9nT3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VW5sRW1haWwgPSAnJztcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQZXJzb25hbEVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIE5hdmJhckNvbnRyb2xsZXIucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2Uuc2VuZFJlc2V0RW1haWwodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9yZXNldFBhc3N3b3JkJyk7XHJcbiAgICB9O1xyXG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUuc2V0UGFnZSA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICB9O1xyXG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUuY2hlY2tQYWdlID0gZnVuY3Rpb24gKHBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9PSBwYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYWN0aXZlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9PSAnc2lnbmluJyAmJiB0aGlzLmxvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2UgPSAnaG9tZSc7XHJcbiAgICAgICAgICAgIHJldHVybiAnYWN0aXZlJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5hdmJhckNvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuTmF2YmFyQ29udHJvbGxlciA9IE5hdmJhckNvbnRyb2xsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXHJcbmFjbWVNYWxhcmtleS4kaW5qZWN0ID0gW1wibWFsYXJrZXlcIl07XHJcbmZ1bmN0aW9uIGFjbWVNYWxhcmtleShtYWxhcmtleSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcclxuICAgICAgICBsaW5rOiBsaW5rRnVuYyxcclxuICAgICAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYWNtZU1hbGFya2V5ID0gYWNtZU1hbGFya2V5O1xyXG5mdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XHJcbiAgICB2YXIgd2F0Y2hlcjtcclxuICAgIHZhciB0eXBpc3QgPSB2bS5tYWxhcmtleShlbFswXSwge1xyXG4gICAgICAgIHR5cGVTcGVlZDogNDAsXHJcbiAgICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxyXG4gICAgICAgIHBhdXNlRGVsYXk6IDgwMCxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHBvc3RmaXg6ICcgJ1xyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xyXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcclxuICAgIH0pO1xyXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3dhdGNoZXIoKTtcclxuICAgIH0pO1xyXG59XHJcbi8qKiBAbmdJbmplY3QgKi9cclxudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBNYWxhcmtleUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRsb2dcIiwgXCJnaXRodWJDb250cmlidXRvclwiLCBcIm1hbGFya2V5XCJdO1xyXG4gICAgZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yLCBtYWxhcmtleSkge1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy5naXRodWJDb250cmlidXRvciA9IGdpdGh1YkNvbnRyaWJ1dG9yO1xyXG4gICAgICAgIHRoaXMubWFsYXJrZXkgPSBtYWxhcmtleTtcclxuICAgICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICAgIE1hbGFya2V5Q29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTWFsYXJrZXlDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDb250cmlidXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5naXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb250cmlidXRvcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5NYWxhcmtleUNvbnRyb2xsZXIgPSBNYWxhcmtleUNvbnRyb2xsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RpbmdIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiLCBcIm1haW5BcHBTZXJ2aWNlXCIsIFwiJGxvY2F0aW9uXCJdO1xyXG4gICAgZnVuY3Rpb24gTGlzdGluZ0h0dHBTZXJ2aWNlKCRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSwgJGxvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMSc7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgfVxyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKHByaWNlLCBpc2JuLCBjb25kaXRpb24sIHVzZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL0xpc3RpbmdzL0NyZWF0ZScsIHtcclxuICAgICAgICAgICAgXCJQcmljZVwiOiBwcmljZSxcclxuICAgICAgICAgICAgXCJDb25kaXRpb25cIjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICBcIklTQk5cIjogaXNibixcclxuICAgICAgICAgICAgXCJMaXN0aW5nVHlwZVwiOiAnU2VsbGluZycsXHJcbiAgICAgICAgICAgIFwiTGlzdGluZ0NyZWF0b3JVc2VyTmFtZVwiOiB1c2VyTmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRBbGxMaXN0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldExpc3RpbmdCeUlkID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMudXJsICsnL0xpc3RpbmdzL0RldGFpbHMvJyArIGlkKVxyXG4gICAgICAgIC8vIC50aGVuKChyZXNwb25zZTogYW55KTogYW55ID0+IHtcclxuICAgICAgICAvLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MvRGVsZXRlLycgKyBpZCk7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaXN0aW5nSHR0cFNlcnZpY2U7XHJcbn0pKCk7XHJcbmV4cG9ydHMuTGlzdGluZ0h0dHBTZXJ2aWNlID0gTGlzdGluZ0h0dHBTZXJ2aWNlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBVc2VySHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgVXNlckh0dHBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvY2F0aW9uXCIsIFwiJHFcIiwgXCIkbG9nXCIsIFwiJGh0dHBcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIFVzZXJIdHRwU2VydmljZSgkd2luZG93LCAkbG9jYXRpb24sICRxLCAkbG9nLCAkaHR0cCwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAxJztcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZVZhbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgIH1cclxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL1VzZXJzL0xvZ2luJywgeyBcIlVzZXJOYW1lXCI6IHVzZXJOYW1lLCBcIlBhc3N3b3JkXCI6IHBhc3N3b3JkIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PSB1c2VyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaWduSW5Vc2VyKHVzZXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuJGxvZy5sb2coXCJGYWlsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xyXG4gICAgfTtcclxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUudmFsaWRhdGVVc2VyID0gZnVuY3Rpb24gKHVubEVtYWlsLCBwYXNzd29yZCwgb3RoZXJFbWFpbCwgdXNlck5hbWUsIGZpcnN0TmFtZSwgbGFzdE5hbWUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHNlbGYuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHNlbGYubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICBzZWxmLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgc2VsZi51bmxFbWFpbCA9IHVubEVtYWlsO1xyXG4gICAgICAgIHNlbGYucGVyc29uYWxFbWFpbCA9IG90aGVyRW1haWw7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvVmFsaWRhdGUnLCB7XHJcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiB1bmxFbWFpbCxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maXJtYXRpb25QYWdlKHVzZXJOYW1lLCB1bmxFbWFpbCwgb3RoZXJFbWFpbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlVzZXJuYW1lRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgVXNlcm5hbWUgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIkVtYWlsRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuc2lnbkluVXNlciA9IGZ1bmN0aW9uICh1c2VyTmFtZSkge1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgfTtcclxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuY29uZmlybWF0aW9uUGFnZSA9IGZ1bmN0aW9uICh1c2VyTmFtZSwgdW5sRW1haWwsIHBlcnNvbmFsRW1haWwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvQ29uZmlybScsIHtcclxuICAgICAgICAgICAgJ1VzZXJOYW1lJzogdXNlck5hbWUsXHJcbiAgICAgICAgICAgICdIdXNrZXJFbWFpbCc6IHVubEVtYWlsLFxyXG4gICAgICAgICAgICAnQ29tbXVuaWNhdGlvbkVtYWlsJzogcGVyc29uYWxFbWFpbFxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29ycmVjdENvZGUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL2NvbmZpcm1FbWFpbCcpO1xyXG4gICAgfTtcclxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuY29uZmlybVVzZXIgPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoY29kZSA9PSBzZWxmLmNvcnJlY3RDb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL0NyZWF0ZScsIHtcclxuICAgICAgICAgICAgJ1VzZXJOYW1lJzogc2VsZi51c2VyTmFtZSxcclxuICAgICAgICAgICAgJ0ZpcnN0TmFtZSc6IHNlbGYuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAnTGFzdE5hbWUnOiBzZWxmLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiBzZWxmLnVubEVtYWlsLFxyXG4gICAgICAgICAgICAnQ29tbXVuaWNhdGlvbkVtYWlsJzogc2VsZi5wZXJzb25hbEVtYWlsLFxyXG4gICAgICAgICAgICAnUGFzc3dvcmQnOiBzZWxmLnBhc3N3b3JkXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKGNvZGUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gdGhpcy5jb3JyZWN0Q29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9SZXNldCcsIHtcclxuICAgICAgICAgICAgICAgICdVc2VyTmFtZSc6IHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJzogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdJbmNvcnJlY3QgY29kZSwgcGxlYXNlIHRyeSBhZ2FpbicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnNlbmRSZXNldEVtYWlsID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvU2VuZFJlc2V0RW1haWwnLCB7XHJcbiAgICAgICAgICAgICdVc2VybmFtZSc6IHVzZXJcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvcnJlY3RDb2RlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVc2VySHR0cFNlcnZpY2U7XHJcbn0pKCk7XHJcbmV4cG9ydHMuVXNlckh0dHBTZXJ2aWNlID0gVXNlckh0dHBTZXJ2aWNlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYWluQXBwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBNYWluQXBwU2VydmljZS4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCJdO1xyXG4gICAgZnVuY3Rpb24gTWFpbkFwcFNlcnZpY2UoJGxvZywgJGh0dHApIHtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL2xvY2FsaG9zdDozMDAwJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdVc2VyID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdQcmljZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdDb25kaXRpb24gPSAnJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ1VSTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWwgPSAnJztcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVubEVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uYWxFbWFpbCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAnaG9tZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFpbkFwcFNlcnZpY2U7XHJcbn0pKCk7XHJcbmV4cG9ydHMuTWFpbkFwcFNlcnZpY2UgPSBNYWluQXBwU2VydmljZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==