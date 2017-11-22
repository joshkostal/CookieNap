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
	        this.warning = false;
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
	    SignInController.prototype.resetPassword = function () {
	        if (this.userName == '') {
	            this.warning = true;
	        }
	        else {
	            this.userHttpService.sendResetEmail(this.userName);
	            this.$location.path('/resetPassword');
	        }
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
	                'UserName': this.userReset,
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
	            self.userReset = user;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjYyZWQ3YjM3ODIxNGVlNTFjNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLDhCQUE4Qjs7Ozs7OztBQ3ZDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCw2Q0FBNkM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjYyZWQ3YjM3ODIxNGVlNTFjNzEiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxudmFyIGluZGV4X2NvbmZpZ18xID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcbnZhciBpbmRleF9yb3V0ZV8xID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xudmFyIGluZGV4X3J1bl8xID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcbnZhciBtYWluX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcbnZhciBjcmVhdGVMaXN0aW5nX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXInKTtcbnZhciBjb25maXJtRW1haWxfY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXInKTtcbnZhciBzaWduaW5fY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXInKTtcbnZhciByZXNldFBhc3N3b3JkX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vcmVzZXRQYXNzd29yZC9yZXNldFBhc3N3b3JkLmNvbnRyb2xsZXInKTtcbnZhciBpbmRpdmlkdWFsTGlzdGluZ1BhZ2VfY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXInKTtcbnZhciBnaXRodWJDb250cmlidXRvcl9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG52YXIgd2ViRGV2VGVjX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xudmFyIG5hdmJhcl9kaXJlY3RpdmVfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJyk7XG52YXIgbWFsYXJrZXlfZGlyZWN0aXZlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnKTtcbnZhciBsaXN0aW5nSHR0cFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlJyk7XG52YXIgdXNlckh0dHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZScpO1xudmFyIG1haW5BcHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UnKTtcbnZhciBjb29raWVOYXA7XG4oZnVuY3Rpb24gKGNvb2tpZU5hcCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29va2llTmFwJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0ciddKVxuICAgICAgICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gICAgICAgIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxuICAgICAgICAuY29uZmlnKGluZGV4X2NvbmZpZ18xLmNvbmZpZylcbiAgICAgICAgLmNvbmZpZyhpbmRleF9yb3V0ZV8xLnJvdXRlckNvbmZpZylcbiAgICAgICAgLnJ1bihpbmRleF9ydW5fMS5ydW5CbG9jaylcbiAgICAgICAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xLkdpdGh1YkNvbnRyaWJ1dG9yKVxuICAgICAgICAuc2VydmljZSgnd2ViRGV2VGVjJywgd2ViRGV2VGVjX3NlcnZpY2VfMS5XZWJEZXZUZWNTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgnbGlzdGluZ0h0dHBTZXJ2aWNlJywgbGlzdGluZ0h0dHBTZXJ2aWNlX3NlcnZpY2VfMS5MaXN0aW5nSHR0cFNlcnZpY2UpXG4gICAgICAgIC5zZXJ2aWNlKCd1c2VySHR0cFNlcnZpY2UnLCB1c2VySHR0cFNlcnZpY2Vfc2VydmljZV8xLlVzZXJIdHRwU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ21haW5BcHBTZXJ2aWNlJywgbWFpbkFwcFNlcnZpY2Vfc2VydmljZV8xLk1haW5BcHBTZXJ2aWNlKVxuICAgICAgICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBtYWluX2NvbnRyb2xsZXJfMS5NYWluQ29udHJvbGxlcilcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NvbmZpcm1FbWFpbENvbnRyb2xsZXInLCBjb25maXJtRW1haWxfY29udHJvbGxlcl8xLkNvbmZpcm1FbWFpbENvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdTaWduSW5Db250cm9sbGVyJywgc2lnbmluX2NvbnRyb2xsZXJfMS5TaWduSW5Db250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignUmVzZXRQYXNzd29yZENvbnRyb2xsZXInLCByZXNldFBhc3N3b3JkX2NvbnRyb2xsZXJfMS5SZXNldFBhc3N3b3JkQ29udHJvbGxlcilcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NyZWF0ZUxpc3RpbmdDb250cm9sbGVyJywgY3JlYXRlTGlzdGluZ19jb250cm9sbGVyXzEuQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyJywgaW5kaXZpZHVhbExpc3RpbmdQYWdlX2NvbnRyb2xsZXJfMS5JbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyKVxuICAgICAgICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgbmF2YmFyX2RpcmVjdGl2ZV8xLmFjbWVOYXZiYXIpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIG1hbGFya2V5X2RpcmVjdGl2ZV8xLmFjbWVNYWxhcmtleSk7XG59KShjb29raWVOYXAgfHwgKGNvb2tpZU5hcCA9IHt9KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cbmNvbmZpZy4kaW5qZWN0ID0gW1wiJGxvZ1Byb3ZpZGVyXCIsIFwidG9hc3RyQ29uZmlnXCJdO1xuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICAgLy8gZW5hYmxlIGxvZ1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG4gICAgLy8gc2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gICAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gICAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICAgIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gICAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cbnJvdXRlckNvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIiwgXCIkdXJsUm91dGVyUHJvdmlkZXJcIl07XG5mdW5jdGlvbiByb3V0ZXJDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ3NpZ25JbicsIHtcbiAgICAgICAgdXJsOiAnL3NpZ25JbicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZ25pbi9zaWduaW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTaWduSW5Db250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnc2lnbkluJ1xuICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnY3JlYXRlTGlzdGluZycsIHtcbiAgICAgICAgdXJsOiAnL2NyZWF0ZUxpc3RpbmcnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jcmVhdGVMaXN0aW5nL2NyZWF0ZUxpc3RpbmcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDcmVhdGVMaXN0aW5nQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2NyZWF0ZUxpc3RpbmcnXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdjb25maXJtRW1haWwnLCB7XG4gICAgICAgIHVybDogJy9jb25maXJtRW1haWwnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ29uZmlybUVtYWlsQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2NvbmZpcm1FbWFpbCdcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ3Jlc2V0UGFzc3dvcmQnLCB7XG4gICAgICAgIHVybDogJy9yZXNldFBhc3N3b3JkJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVzZXRQYXNzd29yZC9yZXNldFBhc3N3b3JkLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVzZXRQYXNzd29yZENvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdyZXNldFBhc3N3b3JkJ1xuICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnaW5kaXZpZHVhbExpc3RpbmdQYWdlJywge1xuICAgICAgICB1cmw6ICcvaW5kaXZpZHVhbExpc3RpbmdQYWdlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0luZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdpbmRpdmlkdWFsTGlzdGluZydcbiAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5ydW5CbG9jay4kaW5qZWN0ID0gW1wiJGxvZ1wiXTtcbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcbiAgICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4udHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHFcIiwgXCIkaHR0cFwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCIkdGltZW91dFwiLCBcIndlYkRldlRlY1wiLCBcInRvYXN0clwiLCBcIm1haW5BcHBTZXJ2aWNlXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRxLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIsIG1haW5BcHBTZXJ2aWNlLCBsaXN0aW5nSHR0cFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UgPSBsaXN0aW5nSHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLndlYkRldlRlYyA9IHdlYkRldlRlYztcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTUwNjY2NDcyNTg2MDtcbiAgICAgICAgdGhpcy50b2FzdHIgPSB0b2FzdHI7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQpO1xuICAgICAgICB0aGlzLnByb21pc2VzID0gW107XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5nZXRXZWJEZXZUZWMoKTtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfTtcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9zaWduSW4nKTtcbiAgICB9O1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5vcGVuTGlzdGluZyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9IHZhbC5ib29rTGlzdGVkLnRpdGxlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXIgPSB2YWwubGlzdGluZ0NyZWF0b3IudXNlck5hbWU7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nUHJpY2UgPSB2YWwucHJpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVVJMID0gdmFsLmJvb2tMaXN0ZWQudGh1bWJuYWlsVVJMO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0NvbmRpdGlvbiA9IHZhbC5jb25kaXRpb247XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWwgPSB2YWwubGlzdGluZ0NyZWF0b3IuY29tbXVuaWNhdGlvbkVtYWlsO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0lkID0gdmFsLmxpc3RpbmdJRDtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScpO1xuICAgIH07XG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldFdlYkRldlRlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL0xpc3RpbmdzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2VsZi5hbGxCb29rcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYWxsQm9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdMaWtlLW5ldyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdVc2FibGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDcmVhdGVMaXN0aW5nQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLmlzYm4gPSAnJztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSAnJztcbiAgICB9XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmNyZWF0ZUxpc3RpbmcodGhpcy5wcmljZSwgdGhpcy5pc2JuLCB0aGlzLmNvbmRpdGlvbiwgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdZb3UgaGF2ZSBjcmVhdGVkIGEgTGlzdGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdTaWduIGluIHRvIGNyZWF0ZSBMaXN0aW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyID0gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbmZpcm1FbWFpbENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIENvbmZpcm1FbWFpbENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwidXNlckh0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gQ29uZmlybUVtYWlsQ29udHJvbGxlcigkd2luZG93LCAkbG9nLCAkbG9jYXRpb24sIHVzZXJIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlID0gdXNlckh0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgfVxuICAgIENvbmZpcm1FbWFpbENvbnRyb2xsZXIucHJvdG90eXBlLmNoZWNrQ29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckh0dHBTZXJ2aWNlLmNvbmZpcm1Vc2VyKHRoaXMuY29kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlLmNyZWF0ZVVzZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IGNvZGUsIHBsZWFzZSB0cnkgYWdhaW4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbmZpcm1FbWFpbENvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5Db25maXJtRW1haWxDb250cm9sbGVyID0gQ29uZmlybUVtYWlsQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNpZ25JbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIFNpZ25JbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRxXCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIFNpZ25JbkNvbnRyb2xsZXIoJHEsICRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy51bmxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gJyc7XG4gICAgICAgIHRoaXMub3RoZXJFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gJyc7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSAnJztcbiAgICAgICAgdGhpcy53YXJuaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV3VXNlclNpZ25VcEJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xuICAgIH1cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgU2lnbkluQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlT3JTaWduSW5Vc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5uZXdVc2VyU2lnblVwQm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UudmFsaWRhdGVVc2VyKHRoaXMudW5sRW1haWwsIHRoaXMucGFzc3dvcmQsIHRoaXMub3RoZXJFbWFpbCwgdGhpcy51c2VyTmFtZSwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMudXNlckh0dHBTZXJ2aWNlLnNpZ25Jbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIGlmICh2YWwgPT0gJ1N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMubGlzdGluZ0h0dHAuZ2V0TGlzdGluZ3MoKTtcbiAgICB9O1xuICAgIFNpZ25JbkNvbnRyb2xsZXIucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJOYW1lID09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLndhcm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2Uuc2VuZFJlc2V0RW1haWwodGhpcy51c2VyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvcmVzZXRQYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2lnbkluQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLlNpZ25JbkNvbnRyb2xsZXIgPSBTaWduSW5Db250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3NpZ25pbi9zaWduaW4uY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwidXNlckh0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gUmVzZXRQYXNzd29yZENvbnRyb2xsZXIoJGxvZywgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZSA9IHVzZXJIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLmNvZGUgPSAnJztcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xuICAgIH1cbiAgICBSZXNldFBhc3N3b3JkQ29udHJvbGxlci5wcm90b3R5cGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckh0dHBTZXJ2aWNlLnJlc2V0UGFzc3dvcmQodGhpcy5jb2RlLCB0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUmVzZXRQYXNzd29yZENvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5SZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IFJlc2V0UGFzc3dvcmRDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Jlc2V0UGFzc3dvcmQvcmVzZXRQYXNzd29yZC5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXJsID0gJyc7XG4gICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCkge1xuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvb2tUaXRsZSA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1ByaWNlO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb247XG4gICAgICAgIHRoaXMub3duZXJzRW1haWwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsO1xuICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLnByb3RvdHlwZS50b2dnbGVFbWFpbEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnU2lnbiBpbiB0byBzZWUgZW1haWwnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlciA9PT0gdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmRlbGV0ZUxpc3RpbmcodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlciA9IEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBHaXRodWJDb250cmlidXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIl07XG4gICAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3IoJGxvZywgJGh0dHApIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgICB9XG4gICAgR2l0aHViQ29udHJpYnV0b3IucHJvdG90eXBlLmdldENvbnRyaWJ1dG9ycyA9IGZ1bmN0aW9uIChsaW1pdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IDMwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBHaXRodWJDb250cmlidXRvcjtcbn0pKCk7XG5leHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yID0gR2l0aHViQ29udHJpYnV0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgV2ViRGV2VGVjU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XG4gICAgICAgIHZhciByYXdEYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R5cGVTY3JpcHQsIGEgdHlwZWQgc3VwZXJzZXQgb2YgSmF2YVNjcmlwdCB0aGF0IGNvbXBpbGVzIHRvIHBsYWluIEphdmFTY3JpcHQuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd0eXBlc2NyaXB0LnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5kYXRhID0gcmF3RGF0YS5tYXAoZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xuICAgICAgICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgcmV0dXJuIGF3ZXNvbWVUaGluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJEZXZUZWNTZXJ2aWNlLnByb3RvdHlwZSwgXCJ0ZWNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xufSkoKTtcbmV4cG9ydHMuV2ViRGV2VGVjU2VydmljZSA9IFdlYkRldlRlY1NlcnZpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGFjbWVOYXZiYXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gICAgfTtcbn1cbmV4cG9ydHMuYWNtZU5hdmJhciA9IGFjbWVOYXZiYXI7XG4vKiogQG5nSW5qZWN0ICovXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgTmF2YmFyQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIm1vbWVudFwiLCBcIm1haW5BcHBTZXJ2aWNlXCIsIFwiJGxvY2F0aW9uXCIsIFwidXNlckh0dHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIoJGxvZywgbW9tZW50LCBtYWluQXBwU2VydmljZSwgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZSA9IHVzZXJIdHRwU2VydmljZTtcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnZhbCA9ICdXZWxjb21lICcgKyB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE5hdmJhckNvbnRyb2xsZXIucHJvdG90eXBlLmxvZ091dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VW5sRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGVyc29uYWxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgfTtcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZS5zZW5kUmVzZXRFbWFpbCh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSk7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9yZXNldFBhc3N3b3JkJyk7XG4gICAgfTtcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5zZXRQYWdlID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgfTtcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5jaGVja1BhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9PSBwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9PSAnc2lnbmluJyAmJiB0aGlzLmxvZ2dlZEluKSB7XG4gICAgICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQYWdlID0gJ2hvbWUnO1xuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTmF2YmFyQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLk5hdmJhckNvbnRyb2xsZXIgPSBOYXZiYXJDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cbmFjbWVNYWxhcmtleS4kaW5qZWN0ID0gW1wibWFsYXJrZXlcIl07XG5mdW5jdGlvbiBhY21lTWFsYXJrZXkobWFsYXJrZXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgICAgIGxpbms6IGxpbmtGdW5jLFxuICAgICAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG59XG5leHBvcnRzLmFjbWVNYWxhcmtleSA9IGFjbWVNYWxhcmtleTtcbmZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICB2YXIgd2F0Y2hlcjtcbiAgICB2YXIgdHlwaXN0ID0gdm0ubWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy93YXRjaGVyKCk7XG4gICAgfSk7XG59XG4vKiogQG5nSW5qZWN0ICovXG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBNYWxhcmtleUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRsb2dcIiwgXCJnaXRodWJDb250cmlidXRvclwiLCBcIm1hbGFya2V5XCJdO1xuICAgIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvciwgbWFsYXJrZXkpIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy5naXRodWJDb250cmlidXRvciA9IGdpdGh1YkNvbnRyaWJ1dG9yO1xuICAgICAgICB0aGlzLm1hbGFya2V5ID0gbWFsYXJrZXk7XG4gICAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgTWFsYXJrZXlDb250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTWFsYXJrZXlDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDb250cmlidXRvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRyaWJ1dG9ycztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFsYXJrZXlDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuTWFsYXJrZXlDb250cm9sbGVyID0gTWFsYXJrZXlDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdGluZ0h0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIiwgXCJtYWluQXBwU2VydmljZVwiLCBcIiRsb2NhdGlvblwiXTtcbiAgICBmdW5jdGlvbiBMaXN0aW5nSHR0cFNlcnZpY2UoJGxvZywgJGh0dHAsIG1haW5BcHBTZXJ2aWNlLCAkbG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDEnO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgfVxuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuY3JlYXRlTGlzdGluZyA9IGZ1bmN0aW9uIChwcmljZSwgaXNibiwgY29uZGl0aW9uLCB1c2VyTmFtZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL0xpc3RpbmdzL0NyZWF0ZScsIHtcbiAgICAgICAgICAgIFwiUHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICBcIkNvbmRpdGlvblwiOiBjb25kaXRpb24sXG4gICAgICAgICAgICBcIklTQk5cIjogaXNibixcbiAgICAgICAgICAgIFwiTGlzdGluZ1R5cGVcIjogJ1NlbGxpbmcnLFxuICAgICAgICAgICAgXCJMaXN0aW5nQ3JlYXRvclVzZXJOYW1lXCI6IHVzZXJOYW1lXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIF90aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRBbGxMaXN0aW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9MaXN0aW5ncycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0TGlzdGluZ0J5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMudXJsICsnL0xpc3RpbmdzL0RldGFpbHMvJyArIGlkKVxuICAgICAgICAvLyAudGhlbigocmVzcG9uc2U6IGFueSk6IGFueSA9PiB7XG4gICAgICAgIC8vICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIC8vIH0pO1xuICAgIH07XG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVMaXN0aW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MvRGVsZXRlLycgKyBpZCk7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICB9O1xuICAgIHJldHVybiBMaXN0aW5nSHR0cFNlcnZpY2U7XG59KSgpO1xuZXhwb3J0cy5MaXN0aW5nSHR0cFNlcnZpY2UgPSBMaXN0aW5nSHR0cFNlcnZpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBVc2VySHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBVc2VySHR0cFNlcnZpY2UuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9jYXRpb25cIiwgXCIkcVwiLCBcIiRsb2dcIiwgXCIkaHR0cFwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIFVzZXJIdHRwU2VydmljZSgkd2luZG93LCAkbG9jYXRpb24sICRxLCAkbG9nLCAkaHR0cCwgbWFpbkFwcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDEnO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRxID0gJHE7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy5yZXNwb25zZVZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgIH1cbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnNpZ25JbiA9IGZ1bmN0aW9uICh1c2VyTmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL1VzZXJzL0xvZ2luJywgeyBcIlVzZXJOYW1lXCI6IHVzZXJOYW1lLCBcIlBhc3N3b3JkXCI6IHBhc3N3b3JkIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09IHVzZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zaWduSW5Vc2VyKHVzZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlbGYuJGxvZy5sb2coXCJGYWlsXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgfTtcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnZhbGlkYXRlVXNlciA9IGZ1bmN0aW9uICh1bmxFbWFpbCwgcGFzc3dvcmQsIG90aGVyRW1haWwsIHVzZXJOYW1lLCBmaXJzdE5hbWUsIGxhc3ROYW1lKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICBzZWxmLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgc2VsZi5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgICAgICBzZWxmLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHNlbGYudW5sRW1haWwgPSB1bmxFbWFpbDtcbiAgICAgICAgc2VsZi5wZXJzb25hbEVtYWlsID0gb3RoZXJFbWFpbDtcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvVmFsaWRhdGUnLCB7XG4gICAgICAgICAgICAnVXNlck5hbWUnOiB1c2VyTmFtZSxcbiAgICAgICAgICAgICdIdXNrZXJFbWFpbCc6IHVubEVtYWlsLFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT0gXCJTdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpcm1hdGlvblBhZ2UodXNlck5hbWUsIHVubEVtYWlsLCBvdGhlckVtYWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEgPT0gXCJVc2VybmFtZUZhaWxcIikge1xuICAgICAgICAgICAgICAgIHNlbGYuJHdpbmRvdy5hbGVydCgnVGhpcyBVc2VybmFtZSBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEgPT0gXCJFbWFpbEZhaWxcIikge1xuICAgICAgICAgICAgICAgIHNlbGYuJHdpbmRvdy5hbGVydCgnVGhpcyBFbWFpbCBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zaWduSW5Vc2VyID0gZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuY29uZmlybWF0aW9uUGFnZSA9IGZ1bmN0aW9uICh1c2VyTmFtZSwgdW5sRW1haWwsIHBlcnNvbmFsRW1haWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9Db25maXJtJywge1xuICAgICAgICAgICAgJ1VzZXJOYW1lJzogdXNlck5hbWUsXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiB1bmxFbWFpbCxcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBwZXJzb25hbEVtYWlsXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmNvcnJlY3RDb2RlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvY29uZmlybUVtYWlsJyk7XG4gICAgfTtcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNvbmZpcm1Vc2VyID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoY29kZSA9PSBzZWxmLmNvcnJlY3RDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL0NyZWF0ZScsIHtcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHNlbGYudXNlck5hbWUsXG4gICAgICAgICAgICAnRmlyc3ROYW1lJzogc2VsZi5maXJzdE5hbWUsXG4gICAgICAgICAgICAnTGFzdE5hbWUnOiBzZWxmLmxhc3ROYW1lLFxuICAgICAgICAgICAgJ0h1c2tlckVtYWlsJzogc2VsZi51bmxFbWFpbCxcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBzZWxmLnBlcnNvbmFsRW1haWwsXG4gICAgICAgICAgICAnUGFzc3dvcmQnOiBzZWxmLnBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uIChjb2RlLCBwYXNzd29yZCkge1xuICAgICAgICBpZiAoY29kZSA9PSB0aGlzLmNvcnJlY3RDb2RlKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9SZXNldCcsIHtcbiAgICAgICAgICAgICAgICAnVXNlck5hbWUnOiB0aGlzLnVzZXJSZXNldCxcbiAgICAgICAgICAgICAgICAnUGFzc3dvcmQnOiBwYXNzd29yZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IGNvZGUsIHBsZWFzZSB0cnkgYWdhaW4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zZW5kUmVzZXRFbWFpbCA9IGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvU2VuZFJlc2V0RW1haWwnLCB7XG4gICAgICAgICAgICAnVXNlcm5hbWUnOiB1c2VyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmNvcnJlY3RDb2RlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHNlbGYudXNlclJlc2V0ID0gdXNlcjtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFVzZXJIdHRwU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLlVzZXJIdHRwU2VydmljZSA9IFVzZXJIdHRwU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1haW5BcHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgTWFpbkFwcFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiXTtcbiAgICBmdW5jdGlvbiBNYWluQXBwU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVXNlciA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ1ByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdDb25kaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdVUkwgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnRVbmxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXJzb25hbEVtYWlsID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gJ2hvbWUnO1xuICAgIH1cbiAgICByZXR1cm4gTWFpbkFwcFNlcnZpY2U7XG59KSgpO1xuZXhwb3J0cy5NYWluQXBwU2VydmljZSA9IE1haW5BcHBTZXJ2aWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==