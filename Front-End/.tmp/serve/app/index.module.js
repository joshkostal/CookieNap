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
	runBlock.$inject = ["$log", "$window"];
	function runBlock($log, $window) {
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
	        this.$log.log('1');
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
	            self.$log.log(self.allBooks);
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
	            this.userHttpService.signIn(this.userName, this.password);
	        }
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
	    NavbarController.$inject = ["$log", "$window", "moment", "mainAppService", "$location", "userHttpService"];
	    function NavbarController($log, $window, moment, mainAppService, $location, userHttpService) {
	        this.$log = $log;
	        this.$location = $location;
	        this.mainAppService = mainAppService;
	        this.currentPage = mainAppService.currentPage;
	        this.userHttpService = userHttpService;
	        this.mainAppService.currentUserName = $window.localStorage.getItem('UserName');
	        this.mainAppService.currentJwtToken = $window.localStorage.getItem('UserJWT');
	        if (this.mainAppService.currentUserName) {
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
	        var self = this;
	        this.$http.post(this.url + '/Listings/Create', {
	            "Price": price,
	            "Condition": condition,
	            "ISBN": isbn,
	            "ListingType": 'Selling',
	            "ListingCreatorUserName": userName,
	            "JWT": self.mainAppService.currentJwtToken
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
	    ListingHttpService.prototype.deleteListing = function (id) {
	        var _this = this;
	        var self = this;
	        this.$http.post(this.url + '/Listings/Delete', {
	            "ListingId": id,
	            "JWT": self.mainAppService.currentJwtToken
	        })
	            .then(function (response) {
	            _this.$log.log(response);
	            _this.$location.path('/');
	        })
	            .catch(function (error) {
	            _this.$log.error('XHR Failed for getContributors.\n', error.data);
	        });
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
	            self.$log.log("Fail");
	        });
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
	        this.selectedListingId = null;
	        this.currentPage = 'home';
	        this.currentUserName = '';
	        this.currentUnlEmail = '';
	        this.currentPersonalEmail = '';
	        this.currentJwtToken = '';
	    }
	    return MainAppService;
	})();
	exports.MainAppService = MainAppService;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTU5MGRmZTJkMThkMzhjOTJkYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLDhCQUE4Qjs7Ozs7OztBQ3ZDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQW9ELDZDQUE2QztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNTkwZGZlMmQxOGQzOGM5MmRjMSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgaW5kZXhfY29uZmlnXzEgPSByZXF1aXJlKCcuL2luZGV4LmNvbmZpZycpO1xudmFyIGluZGV4X3JvdXRlXzEgPSByZXF1aXJlKCcuL2luZGV4LnJvdXRlJyk7XG52YXIgaW5kZXhfcnVuXzEgPSByZXF1aXJlKCcuL2luZGV4LnJ1bicpO1xudmFyIG1haW5fY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9tYWluL21haW4uY29udHJvbGxlcicpO1xudmFyIGNyZWF0ZUxpc3RpbmdfY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9jcmVhdGVMaXN0aW5nL2NyZWF0ZUxpc3RpbmcuY29udHJvbGxlcicpO1xudmFyIGNvbmZpcm1FbWFpbF9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2NvbmZpcm1FbWFpbC9jb25maXJtRW1haWwuY29udHJvbGxlcicpO1xudmFyIHNpZ25pbl9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL3NpZ25pbi9zaWduaW4uY29udHJvbGxlcicpO1xudmFyIHJlc2V0UGFzc3dvcmRfY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlcicpO1xudmFyIGluZGl2aWR1YWxMaXN0aW5nUGFnZV9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlcicpO1xudmFyIGdpdGh1YkNvbnRyaWJ1dG9yX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnKTtcbnZhciB3ZWJEZXZUZWNfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJyk7XG52YXIgbmF2YmFyX2RpcmVjdGl2ZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnKTtcbnZhciBtYWxhcmtleV9kaXJlY3RpdmVfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZScpO1xudmFyIGxpc3RpbmdIdHRwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UnKTtcbnZhciB1c2VySHR0cFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvVXNlckh0dHBTZXJ2aWNlL3VzZXJIdHRwU2VydmljZS5zZXJ2aWNlJyk7XG52YXIgbWFpbkFwcFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZScpO1xudmFyIGNvb2tpZU5hcDtcbihmdW5jdGlvbiAoY29va2llTmFwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdjb29raWVOYXAnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAndG9hc3RyJ10pXG4gICAgICAgIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgICAgICAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gICAgICAgIC5jb25maWcoaW5kZXhfY29uZmlnXzEuY29uZmlnKVxuICAgICAgICAuY29uZmlnKGluZGV4X3JvdXRlXzEucm91dGVyQ29uZmlnKVxuICAgICAgICAucnVuKGluZGV4X3J1bl8xLnJ1bkJsb2NrKVxuICAgICAgICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBnaXRodWJDb250cmlidXRvcl9zZXJ2aWNlXzEuR2l0aHViQ29udHJpYnV0b3IpXG4gICAgICAgIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCB3ZWJEZXZUZWNfc2VydmljZV8xLldlYkRldlRlY1NlcnZpY2UpXG4gICAgICAgIC5zZXJ2aWNlKCdsaXN0aW5nSHR0cFNlcnZpY2UnLCBsaXN0aW5nSHR0cFNlcnZpY2Vfc2VydmljZV8xLkxpc3RpbmdIdHRwU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ3VzZXJIdHRwU2VydmljZScsIHVzZXJIdHRwU2VydmljZV9zZXJ2aWNlXzEuVXNlckh0dHBTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgnbWFpbkFwcFNlcnZpY2UnLCBtYWluQXBwU2VydmljZV9zZXJ2aWNlXzEuTWFpbkFwcFNlcnZpY2UpXG4gICAgICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIG1haW5fY29udHJvbGxlcl8xLk1haW5Db250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignQ29uZmlybUVtYWlsQ29udHJvbGxlcicsIGNvbmZpcm1FbWFpbF9jb250cm9sbGVyXzEuQ29uZmlybUVtYWlsQ29udHJvbGxlcilcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1NpZ25JbkNvbnRyb2xsZXInLCBzaWduaW5fY29udHJvbGxlcl8xLlNpZ25JbkNvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdSZXNldFBhc3N3b3JkQ29udHJvbGxlcicsIHJlc2V0UGFzc3dvcmRfY29udHJvbGxlcl8xLlJlc2V0UGFzc3dvcmRDb250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXInLCBjcmVhdGVMaXN0aW5nX2NvbnRyb2xsZXJfMS5DcmVhdGVMaXN0aW5nQ29udHJvbGxlcilcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0luZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXInLCBpbmRpdmlkdWFsTGlzdGluZ1BhZ2VfY29udHJvbGxlcl8xLkluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBuYXZiYXJfZGlyZWN0aXZlXzEuYWNtZU5hdmJhcilcbiAgICAgICAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgbWFsYXJrZXlfZGlyZWN0aXZlXzEuYWNtZU1hbGFya2V5KTtcbn0pKGNvb2tpZU5hcCB8fCAoY29va2llTmFwID0ge30pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xuY29uZmlnLiRpbmplY3QgPSBbXCIkbG9nUHJvdmlkZXJcIiwgXCJ0b2FzdHJDb25maWdcIl07XG5mdW5jdGlvbiBjb25maWcoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgICAvLyBlbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcbiAgICAvLyBzZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xucm91dGVyQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcbmZ1bmN0aW9uIHJvdXRlckNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnc2lnbkluJywge1xuICAgICAgICB1cmw6ICcvc2lnbkluJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2lnbmluL3NpZ25pbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZ25JbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdzaWduSW4nXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdjcmVhdGVMaXN0aW5nJywge1xuICAgICAgICB1cmw6ICcvY3JlYXRlTGlzdGluZycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0NyZWF0ZUxpc3RpbmdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3JlYXRlTGlzdGluZydcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ2NvbmZpcm1FbWFpbCcsIHtcbiAgICAgICAgdXJsOiAnL2NvbmZpcm1FbWFpbCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbmZpcm1FbWFpbC9jb25maXJtRW1haWwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDb25maXJtRW1haWxDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY29uZmlybUVtYWlsJ1xuICAgIH0pXG4gICAgICAgIC5zdGF0ZSgncmVzZXRQYXNzd29yZCcsIHtcbiAgICAgICAgdXJsOiAnL3Jlc2V0UGFzc3dvcmQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZXNldFBhc3N3b3JkQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3Jlc2V0UGFzc3dvcmQnXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdpbmRpdmlkdWFsTGlzdGluZ1BhZ2UnLCB7XG4gICAgICAgIHVybDogJy9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2luZGl2aWR1YWxMaXN0aW5nJ1xuICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cbnJ1bkJsb2NrLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJHdpbmRvd1wiXTtcbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2csICR3aW5kb3cpIHtcbiAgICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4udHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHFcIiwgXCIkaHR0cFwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCIkdGltZW91dFwiLCBcIndlYkRldlRlY1wiLCBcInRvYXN0clwiLCBcIm1haW5BcHBTZXJ2aWNlXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRxLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIsIG1haW5BcHBTZXJ2aWNlLCBsaXN0aW5nSHR0cFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UgPSBsaXN0aW5nSHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJGxvZy5sb2coJzEnKTtcbiAgICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMud2ViRGV2VGVjID0gd2ViRGV2VGVjO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNTA2NjY0NzI1ODYwO1xuICAgICAgICB0aGlzLnRvYXN0ciA9IHRvYXN0cjtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCk7XG4gICAgICAgIHRoaXMucHJvbWlzZXMgPSBbXTtcbiAgICB9XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgkdGltZW91dCkge1xuICAgICAgICB0aGlzLmdldFdlYkRldlRlYygpO1xuICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9O1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZS4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLnNpZ25JbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL3NpZ25JbicpO1xuICAgIH07XG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLm9wZW5MaXN0aW5nID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lID0gdmFsLmJvb2tMaXN0ZWQudGl0bGU7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVXNlciA9IHZhbC5saXN0aW5nQ3JlYXRvci51c2VyTmFtZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdQcmljZSA9IHZhbC5wcmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkwgPSB2YWwuYm9va0xpc3RlZC50aHVtYm5haWxVUkw7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uID0gdmFsLmNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbCA9IHZhbC5saXN0aW5nQ3JlYXRvci5jb21tdW5pY2F0aW9uRW1haWw7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nSWQgPSB2YWwubGlzdGluZ0lEO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvaW5kaXZpZHVhbExpc3RpbmdQYWdlJyk7XG4gICAgfTtcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0V2ViRGV2VGVjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmFsbEJvb2tzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHNlbGYuJGxvZy5sb2coc2VsZi5hbGxCb29rcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYWxsQm9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdMaWtlLW5ldyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdVc2FibGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDcmVhdGVMaXN0aW5nQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLmlzYm4gPSAnJztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSAnJztcbiAgICB9XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmNyZWF0ZUxpc3RpbmcodGhpcy5wcmljZSwgdGhpcy5pc2JuLCB0aGlzLmNvbmRpdGlvbiwgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdZb3UgaGF2ZSBjcmVhdGVkIGEgTGlzdGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdTaWduIGluIHRvIGNyZWF0ZSBMaXN0aW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyID0gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbmZpcm1FbWFpbENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIENvbmZpcm1FbWFpbENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwidXNlckh0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gQ29uZmlybUVtYWlsQ29udHJvbGxlcigkd2luZG93LCAkbG9nLCAkbG9jYXRpb24sIHVzZXJIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlID0gdXNlckh0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgfVxuICAgIENvbmZpcm1FbWFpbENvbnRyb2xsZXIucHJvdG90eXBlLmNoZWNrQ29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckh0dHBTZXJ2aWNlLmNvbmZpcm1Vc2VyKHRoaXMuY29kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlLmNyZWF0ZVVzZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IGNvZGUsIHBsZWFzZSB0cnkgYWdhaW4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbmZpcm1FbWFpbENvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5Db25maXJtRW1haWxDb250cm9sbGVyID0gQ29uZmlybUVtYWlsQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNpZ25JbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIFNpZ25JbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRxXCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIFNpZ25JbkNvbnRyb2xsZXIoJHEsICRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy51bmxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gJyc7XG4gICAgICAgIHRoaXMub3RoZXJFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gJyc7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSAnJztcbiAgICAgICAgdGhpcy53YXJuaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmV3VXNlclNpZ25VcEJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xuICAgIH1cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgU2lnbkluQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlT3JTaWduSW5Vc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5uZXdVc2VyU2lnblVwQm9vbGVhbikge1xuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UudmFsaWRhdGVVc2VyKHRoaXMudW5sRW1haWwsIHRoaXMucGFzc3dvcmQsIHRoaXMub3RoZXJFbWFpbCwgdGhpcy51c2VyTmFtZSwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2Uuc2lnbkluKHRoaXMudXNlck5hbWUsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTaWduSW5Db250cm9sbGVyLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyTmFtZSA9PSAnJykge1xuICAgICAgICAgICAgdGhpcy53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlLnNlbmRSZXNldEVtYWlsKHRoaXMudXNlck5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL3Jlc2V0UGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNpZ25JbkNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5TaWduSW5Db250cm9sbGVyID0gU2lnbkluQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBSZXNldFBhc3N3b3JkQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyKCRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy5jb2RlID0gJyc7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICB9XG4gICAgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJIdHRwU2VydmljZS5yZXNldFBhc3N3b3JkKHRoaXMuY29kZSwgdGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSBSZXNldFBhc3N3b3JkQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJsaXN0aW5nSHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyKCR3aW5kb3csICRsb2csICRsb2NhdGlvbiwgbGlzdGluZ0h0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLnVybCA9ICcnO1xuICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkwpIHtcbiAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib29rVGl0bGUgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdQcmljZTtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVc2VyO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uO1xuICAgICAgICB0aGlzLm93bmVyc0VtYWlsID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbDtcbiAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUudG9nZ2xlRW1haWxBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ1NpZ24gaW4gdG8gc2VlIGVtYWlsJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIucHJvdG90eXBlLmRlbGV0ZUxpc3RpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIgPT09IHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZS5kZWxldGVMaXN0aW5nKHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nSWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLkluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIgPSBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgR2l0aHViQ29udHJpYnV0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBHaXRodWJDb250cmlidXRvci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCJdO1xuICAgIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yKCRsb2csICRodHRwKSB7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gICAgfVxuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLnByb3RvdHlwZS5nZXRDb250cmlidXRvcnMgPSBmdW5jdGlvbiAobGltaXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSAzMDsgfVxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3I7XG59KSgpO1xuZXhwb3J0cy5HaXRodWJDb250cmlidXRvciA9IEdpdGh1YkNvbnRyaWJ1dG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFdlYkRldlRlY1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBXZWJEZXZUZWNTZXJ2aWNlKCkge1xuICAgICAgICB2YXIgcmF3RGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXIgVUkgQm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd1aS1ib290c3RyYXAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUeXBlU2NyaXB0LCBhIHR5cGVkIHN1cGVyc2V0IG9mIEphdmFTY3JpcHQgdGhhdCBjb21waWxlcyB0byBwbGFpbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAndHlwZXNjcmlwdC5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZGF0YSA9IHJhd0RhdGEubWFwKGZ1bmN0aW9uIChhd2Vzb21lVGhpbmcpIHtcbiAgICAgICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHJldHVybiBhd2Vzb21lVGhpbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViRGV2VGVjU2VydmljZS5wcm90b3R5cGUsIFwidGVjXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBXZWJEZXZUZWNTZXJ2aWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBhY21lTmF2YmFyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG59XG5leHBvcnRzLmFjbWVOYXZiYXIgPSBhY21lTmF2YmFyO1xuLyoqIEBuZ0luamVjdCAqL1xudmFyIE5hdmJhckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIE5hdmJhckNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkd2luZG93XCIsIFwibW9tZW50XCIsIFwibWFpbkFwcFNlcnZpY2VcIiwgXCIkbG9jYXRpb25cIiwgXCJ1c2VySHR0cFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gTmF2YmFyQ29udHJvbGxlcigkbG9nLCAkd2luZG93LCBtb21lbnQsIG1haW5BcHBTZXJ2aWNlLCAkbG9jYXRpb24sIHVzZXJIdHRwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlID0gdXNlckh0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSA9ICR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJOYW1lJyk7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudEp3dFRva2VuID0gJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckpXVCcpO1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE5hdmJhckNvbnRyb2xsZXIucHJvdG90eXBlLmxvZ091dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VW5sRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGVyc29uYWxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgfTtcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZS5zZW5kUmVzZXRFbWFpbCh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSk7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9yZXNldFBhc3N3b3JkJyk7XG4gICAgfTtcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5zZXRQYWdlID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgfTtcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5jaGVja1BhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9PSBwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9PSAnc2lnbmluJyAmJiB0aGlzLmxvZ2dlZEluKSB7XG4gICAgICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQYWdlID0gJ2hvbWUnO1xuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTmF2YmFyQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLk5hdmJhckNvbnRyb2xsZXIgPSBOYXZiYXJDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cbmFjbWVNYWxhcmtleS4kaW5qZWN0ID0gW1wibWFsYXJrZXlcIl07XG5mdW5jdGlvbiBhY21lTWFsYXJrZXkobWFsYXJrZXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgICAgIGxpbms6IGxpbmtGdW5jLFxuICAgICAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG59XG5leHBvcnRzLmFjbWVNYWxhcmtleSA9IGFjbWVNYWxhcmtleTtcbmZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICB2YXIgd2F0Y2hlcjtcbiAgICB2YXIgdHlwaXN0ID0gdm0ubWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy93YXRjaGVyKCk7XG4gICAgfSk7XG59XG4vKiogQG5nSW5qZWN0ICovXG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBNYWxhcmtleUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRsb2dcIiwgXCJnaXRodWJDb250cmlidXRvclwiLCBcIm1hbGFya2V5XCJdO1xuICAgIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvciwgbWFsYXJrZXkpIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy5naXRodWJDb250cmlidXRvciA9IGdpdGh1YkNvbnRyaWJ1dG9yO1xuICAgICAgICB0aGlzLm1hbGFya2V5ID0gbWFsYXJrZXk7XG4gICAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgTWFsYXJrZXlDb250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTWFsYXJrZXlDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDb250cmlidXRvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRyaWJ1dG9ycztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFsYXJrZXlDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuTWFsYXJrZXlDb250cm9sbGVyID0gTWFsYXJrZXlDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdGluZ0h0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIiwgXCJtYWluQXBwU2VydmljZVwiLCBcIiRsb2NhdGlvblwiXTtcbiAgICBmdW5jdGlvbiBMaXN0aW5nSHR0cFNlcnZpY2UoJGxvZywgJGh0dHAsIG1haW5BcHBTZXJ2aWNlLCAkbG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDEnO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgfVxuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuY3JlYXRlTGlzdGluZyA9IGZ1bmN0aW9uIChwcmljZSwgaXNibiwgY29uZGl0aW9uLCB1c2VyTmFtZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvTGlzdGluZ3MvQ3JlYXRlJywge1xuICAgICAgICAgICAgXCJQcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgIFwiQ29uZGl0aW9uXCI6IGNvbmRpdGlvbixcbiAgICAgICAgICAgIFwiSVNCTlwiOiBpc2JuLFxuICAgICAgICAgICAgXCJMaXN0aW5nVHlwZVwiOiAnU2VsbGluZycsXG4gICAgICAgICAgICBcIkxpc3RpbmdDcmVhdG9yVXNlck5hbWVcIjogdXNlck5hbWUsXG4gICAgICAgICAgICBcIkpXVFwiOiBzZWxmLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRKd3RUb2tlblxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBfdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0QWxsTGlzdGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZUxpc3RpbmcgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL0xpc3RpbmdzL0RlbGV0ZScsIHtcbiAgICAgICAgICAgIFwiTGlzdGluZ0lkXCI6IGlkLFxuICAgICAgICAgICAgXCJKV1RcIjogc2VsZi5tYWluQXBwU2VydmljZS5jdXJyZW50Snd0VG9rZW5cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgX3RoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTGlzdGluZ0h0dHBTZXJ2aWNlO1xufSkoKTtcbmV4cG9ydHMuTGlzdGluZ0h0dHBTZXJ2aWNlID0gTGlzdGluZ0h0dHBTZXJ2aWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVXNlckh0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgVXNlckh0dHBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvY2F0aW9uXCIsIFwiJHFcIiwgXCIkbG9nXCIsIFwiJGh0dHBcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBVc2VySHR0cFNlcnZpY2UoJHdpbmRvdywgJGxvY2F0aW9uLCAkcSwgJGxvZywgJGh0dHAsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAxJztcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMucmVzcG9uc2VWYWwgPSBudWxsO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB9XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAodXNlck5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KHRoaXMudXJsICsgJy9Vc2Vycy9Mb2dpbicsIHsgXCJVc2VyTmFtZVwiOiB1c2VyTmFtZSwgXCJQYXNzd29yZFwiOiBwYXNzd29yZCB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PSAnTG9naW4gRmFpbGVkJykge1xuICAgICAgICAgICAgICAgIHNlbGYuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VzZXJKV1QnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VzZXJOYW1lJywgdXNlck5hbWUpO1xuICAgICAgICAgICAgICAgIHNlbGYubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgICAgICAgICAgc2VsZi5tYWluQXBwU2VydmljZS5jdXJyZW50Snd0VG9rZW4gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHNlbGYuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgc2VsZi4kbG9nLmxvZyhcIkZhaWxcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS52YWxpZGF0ZVVzZXIgPSBmdW5jdGlvbiAodW5sRW1haWwsIHBhc3N3b3JkLCBvdGhlckVtYWlsLCB1c2VyTmFtZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgc2VsZi5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHNlbGYubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICAgICAgc2VsZi51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgICBzZWxmLnVubEVtYWlsID0gdW5sRW1haWw7XG4gICAgICAgIHNlbGYucGVyc29uYWxFbWFpbCA9IG90aGVyRW1haWw7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL1ZhbGlkYXRlJywge1xuICAgICAgICAgICAgJ1VzZXJOYW1lJzogdXNlck5hbWUsXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiB1bmxFbWFpbCxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09IFwiU3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maXJtYXRpb25QYWdlKHVzZXJOYW1lLCB1bmxFbWFpbCwgb3RoZXJFbWFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5kYXRhID09IFwiVXNlcm5hbWVGYWlsXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgVXNlcm5hbWUgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5kYXRhID09IFwiRW1haWxGYWlsXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgRW1haWwgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuY29uZmlybWF0aW9uUGFnZSA9IGZ1bmN0aW9uICh1c2VyTmFtZSwgdW5sRW1haWwsIHBlcnNvbmFsRW1haWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9Db25maXJtJywge1xuICAgICAgICAgICAgJ1VzZXJOYW1lJzogdXNlck5hbWUsXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiB1bmxFbWFpbCxcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBwZXJzb25hbEVtYWlsXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmNvcnJlY3RDb2RlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvY29uZmlybUVtYWlsJyk7XG4gICAgfTtcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNvbmZpcm1Vc2VyID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoY29kZSA9PSBzZWxmLmNvcnJlY3RDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL0NyZWF0ZScsIHtcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHNlbGYudXNlck5hbWUsXG4gICAgICAgICAgICAnRmlyc3ROYW1lJzogc2VsZi5maXJzdE5hbWUsXG4gICAgICAgICAgICAnTGFzdE5hbWUnOiBzZWxmLmxhc3ROYW1lLFxuICAgICAgICAgICAgJ0h1c2tlckVtYWlsJzogc2VsZi51bmxFbWFpbCxcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBzZWxmLnBlcnNvbmFsRW1haWwsXG4gICAgICAgICAgICAnUGFzc3dvcmQnOiBzZWxmLnBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uIChjb2RlLCBwYXNzd29yZCkge1xuICAgICAgICBpZiAoY29kZSA9PSB0aGlzLmNvcnJlY3RDb2RlKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9SZXNldCcsIHtcbiAgICAgICAgICAgICAgICAnVXNlck5hbWUnOiB0aGlzLnVzZXJSZXNldCxcbiAgICAgICAgICAgICAgICAnUGFzc3dvcmQnOiBwYXNzd29yZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IGNvZGUsIHBsZWFzZSB0cnkgYWdhaW4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zZW5kUmVzZXRFbWFpbCA9IGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvU2VuZFJlc2V0RW1haWwnLCB7XG4gICAgICAgICAgICAnVXNlcm5hbWUnOiB1c2VyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmNvcnJlY3RDb2RlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHNlbGYudXNlclJlc2V0ID0gdXNlcjtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFVzZXJIdHRwU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLlVzZXJIdHRwU2VydmljZSA9IFVzZXJIdHRwU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1haW5BcHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgTWFpbkFwcFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiXTtcbiAgICBmdW5jdGlvbiBNYWluQXBwU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVXNlciA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ1ByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdDb25kaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdVUkwgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0lkID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9ICdob21lJztcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50VW5sRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uYWxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnRKd3RUb2tlbiA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gTWFpbkFwcFNlcnZpY2U7XG59KSgpO1xuZXhwb3J0cy5NYWluQXBwU2VydmljZSA9IE1haW5BcHBTZXJ2aWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==