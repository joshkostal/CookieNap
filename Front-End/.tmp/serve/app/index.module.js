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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmYwMDFjZmFlOGQxN2RkNDE4NjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLDhCQUE4Qjs7Ozs7OztBQ3ZDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsNkNBQTZDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZmMDAxY2ZhZThkMTdkZDQxODYwIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbnZhciBpbmRleF9jb25maWdfMSA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG52YXIgaW5kZXhfcm91dGVfMSA9IHJlcXVpcmUoJy4vaW5kZXgucm91dGUnKTtcbnZhciBpbmRleF9ydW5fMSA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG52YXIgbWFpbl9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XG52YXIgY3JlYXRlTGlzdGluZ19jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5jb250cm9sbGVyJyk7XG52YXIgY29uZmlybUVtYWlsX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vY29uZmlybUVtYWlsL2NvbmZpcm1FbWFpbC5jb250cm9sbGVyJyk7XG52YXIgc2lnbmluX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vc2lnbmluL3NpZ25pbi5jb250cm9sbGVyJyk7XG52YXIgcmVzZXRQYXNzd29yZF9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL3Jlc2V0UGFzc3dvcmQvcmVzZXRQYXNzd29yZC5jb250cm9sbGVyJyk7XG52YXIgaW5kaXZpZHVhbExpc3RpbmdQYWdlX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyJyk7XG52YXIgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xudmFyIHdlYkRldlRlY19zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnKTtcbnZhciBuYXZiYXJfZGlyZWN0aXZlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xudmFyIG1hbGFya2V5X2RpcmVjdGl2ZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XG52YXIgbGlzdGluZ0h0dHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZScpO1xudmFyIHVzZXJIdHRwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UnKTtcbnZhciBtYWluQXBwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9NYWluQXBwU2VydmljZS9tYWluQXBwU2VydmljZS5zZXJ2aWNlJyk7XG52YXIgY29va2llTmFwO1xuKGZ1bmN0aW9uIChjb29raWVOYXApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2Nvb2tpZU5hcCcsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInXSlcbiAgICAgICAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAgICAgICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgICAgICAgLmNvbmZpZyhpbmRleF9jb25maWdfMS5jb25maWcpXG4gICAgICAgIC5jb25maWcoaW5kZXhfcm91dGVfMS5yb3V0ZXJDb25maWcpXG4gICAgICAgIC5ydW4oaW5kZXhfcnVuXzEucnVuQmxvY2spXG4gICAgICAgIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIGdpdGh1YkNvbnRyaWJ1dG9yX3NlcnZpY2VfMS5HaXRodWJDb250cmlidXRvcilcbiAgICAgICAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIHdlYkRldlRlY19zZXJ2aWNlXzEuV2ViRGV2VGVjU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ2xpc3RpbmdIdHRwU2VydmljZScsIGxpc3RpbmdIdHRwU2VydmljZV9zZXJ2aWNlXzEuTGlzdGluZ0h0dHBTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgndXNlckh0dHBTZXJ2aWNlJywgdXNlckh0dHBTZXJ2aWNlX3NlcnZpY2VfMS5Vc2VySHR0cFNlcnZpY2UpXG4gICAgICAgIC5zZXJ2aWNlKCdtYWluQXBwU2VydmljZScsIG1haW5BcHBTZXJ2aWNlX3NlcnZpY2VfMS5NYWluQXBwU2VydmljZSlcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgbWFpbl9jb250cm9sbGVyXzEuTWFpbkNvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdDb25maXJtRW1haWxDb250cm9sbGVyJywgY29uZmlybUVtYWlsX2NvbnRyb2xsZXJfMS5Db25maXJtRW1haWxDb250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignU2lnbkluQ29udHJvbGxlcicsIHNpZ25pbl9jb250cm9sbGVyXzEuU2lnbkluQ29udHJvbGxlcilcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1Jlc2V0UGFzc3dvcmRDb250cm9sbGVyJywgcmVzZXRQYXNzd29yZF9jb250cm9sbGVyXzEuUmVzZXRQYXNzd29yZENvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdDcmVhdGVMaXN0aW5nQ29udHJvbGxlcicsIGNyZWF0ZUxpc3RpbmdfY29udHJvbGxlcl8xLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcicsIGluZGl2aWR1YWxMaXN0aW5nUGFnZV9jb250cm9sbGVyXzEuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcilcbiAgICAgICAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIG5hdmJhcl9kaXJlY3RpdmVfMS5hY21lTmF2YmFyKVxuICAgICAgICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBtYWxhcmtleV9kaXJlY3RpdmVfMS5hY21lTWFsYXJrZXkpO1xufSkoY29va2llTmFwIHx8IChjb29raWVOYXAgPSB7fSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5jb25maWcuJGluamVjdCA9IFtcIiRsb2dQcm92aWRlclwiLCBcInRvYXN0ckNvbmZpZ1wiXTtcbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAgIC8vIGVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuICAgIC8vIHNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gICAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5yb3V0ZXJDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCIsIFwiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdzaWduSW4nLCB7XG4gICAgICAgIHVybDogJy9zaWduSW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWduaW4vc2lnbmluLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lnbkluQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3NpZ25JbidcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ2NyZWF0ZUxpc3RpbmcnLCB7XG4gICAgICAgIHVybDogJy9jcmVhdGVMaXN0aW5nJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjcmVhdGVMaXN0aW5nJ1xuICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnY29uZmlybUVtYWlsJywge1xuICAgICAgICB1cmw6ICcvY29uZmlybUVtYWlsJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29uZmlybUVtYWlsL2NvbmZpcm1FbWFpbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1FbWFpbENvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjb25maXJtRW1haWwnXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdyZXNldFBhc3N3b3JkJywge1xuICAgICAgICB1cmw6ICcvcmVzZXRQYXNzd29yZCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Jlc2V0UGFzc3dvcmQvcmVzZXRQYXNzd29yZC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1Jlc2V0UGFzc3dvcmRDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAncmVzZXRQYXNzd29yZCdcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ2luZGl2aWR1YWxMaXN0aW5nUGFnZScsIHtcbiAgICAgICAgdXJsOiAnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnaW5kaXZpZHVhbExpc3RpbmcnXG4gICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuZXhwb3J0cy5yb3V0ZXJDb25maWcgPSByb3V0ZXJDb25maWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXgucm91dGUudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xucnVuQmxvY2suJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkd2luZG93XCJdO1xuZnVuY3Rpb24gcnVuQmxvY2soJGxvZywgJHdpbmRvdykge1xuICAgICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi50c1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFpbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIE1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkcVwiLCBcIiRodHRwXCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcIiR0aW1lb3V0XCIsIFwid2ViRGV2VGVjXCIsIFwidG9hc3RyXCIsIFwibWFpbkFwcFNlcnZpY2VcIiwgXCJsaXN0aW5nSHR0cFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHEsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0ciwgbWFpbkFwcFNlcnZpY2UsIGxpc3RpbmdIdHRwU2VydmljZSkge1xuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kbG9nLmxvZygnMScpO1xuICAgICAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy53ZWJEZXZUZWMgPSB3ZWJEZXZUZWM7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE1MDY2NjQ3MjU4NjA7XG4gICAgICAgIHRoaXMudG9hc3RyID0gdG9hc3RyO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0KTtcbiAgICAgICAgdGhpcy5wcm9taXNlcyA9IFtdO1xuICAgIH1cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKCk7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH07XG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlLiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvc2lnbkluJyk7XG4gICAgfTtcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUub3Blbkxpc3RpbmcgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWUgPSB2YWwuYm9va0xpc3RlZC50aXRsZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVc2VyID0gdmFsLmxpc3RpbmdDcmVhdG9yLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1ByaWNlID0gdmFsLnByaWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCA9IHZhbC5ib29rTGlzdGVkLnRodW1ibmFpbFVSTDtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb24gPSB2YWwuY29uZGl0aW9uO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsID0gdmFsLmxpc3RpbmdDcmVhdG9yLmNvbW11bmljYXRpb25FbWFpbDtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCA9IHZhbC5saXN0aW5nSUQ7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UnKTtcbiAgICB9O1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5nZXRXZWJEZXZUZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9MaXN0aW5ncycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlbGYuYWxsQm9va3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgc2VsZi4kbG9nLmxvZyhzZWxmLmFsbEJvb2tzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5hbGxCb29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ0xpa2UtbmV3JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdHb29kJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ1VzYWJsZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNYWluQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLk1haW5Db250cm9sbGVyID0gTWFpbkNvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBDcmVhdGVMaXN0aW5nQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJsaXN0aW5nSHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcigkd2luZG93LCAkbG9nLCAkbG9jYXRpb24sIGxpc3RpbmdIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuaXNibiA9ICcnO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9ICcnO1xuICAgIH1cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLmNyZWF0ZUxpc3RpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UuY3JlYXRlTGlzdGluZyh0aGlzLnByaWNlLCB0aGlzLmlzYm4sIHRoaXMuY29uZGl0aW9uLCB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ1lvdSBoYXZlIGNyZWF0ZWQgYSBMaXN0aW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ1NpZ24gaW4gdG8gY3JlYXRlIExpc3RpbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIgPSBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jcmVhdGVMaXN0aW5nL2NyZWF0ZUxpc3RpbmcuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ29uZmlybUVtYWlsQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgQ29uZmlybUVtYWlsQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJ1c2VySHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBDb25maXJtRW1haWxDb250cm9sbGVyKCR3aW5kb3csICRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB9XG4gICAgQ29uZmlybUVtYWlsQ29udHJvbGxlci5wcm90b3R5cGUuY2hlY2tDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51c2VySHR0cFNlcnZpY2UuY29uZmlybVVzZXIodGhpcy5jb2RlKSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UuY3JlYXRlVXNlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdJbmNvcnJlY3QgY29kZSwgcGxlYXNlIHRyeSBhZ2FpbicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29uZmlybUVtYWlsQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLkNvbmZpcm1FbWFpbENvbnRyb2xsZXIgPSBDb25maXJtRW1haWxDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbmZpcm1FbWFpbC9jb25maXJtRW1haWwuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2lnbkluQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgU2lnbkluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHFcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwidXNlckh0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gU2lnbkluQ29udHJvbGxlcigkcSwgJGxvZywgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZSA9IHVzZXJIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLnVubEVtYWlsID0gJyc7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgdGhpcy5vdGhlckVtYWlsID0gJyc7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9ICcnO1xuICAgICAgICB0aGlzLndhcm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZXdVc2VyU2lnblVwQm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRxID0gJHE7XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBTaWduSW5Db250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVPclNpZ25JblVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm5ld1VzZXJTaWduVXBCb29sZWFuKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZS52YWxpZGF0ZVVzZXIodGhpcy51bmxFbWFpbCwgdGhpcy5wYXNzd29yZCwgdGhpcy5vdGhlckVtYWlsLCB0aGlzLnVzZXJOYW1lLCB0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZS5zaWduSW4odGhpcy51c2VyTmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNpZ25JbkNvbnRyb2xsZXIucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJOYW1lID09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLndhcm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2Uuc2VuZFJlc2V0RW1haWwodGhpcy51c2VyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvcmVzZXRQYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2lnbkluQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLlNpZ25JbkNvbnRyb2xsZXIgPSBTaWduSW5Db250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3NpZ25pbi9zaWduaW4uY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwidXNlckh0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gUmVzZXRQYXNzd29yZENvbnRyb2xsZXIoJGxvZywgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZSA9IHVzZXJIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLmNvZGUgPSAnJztcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xuICAgIH1cbiAgICBSZXNldFBhc3N3b3JkQ29udHJvbGxlci5wcm90b3R5cGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckh0dHBTZXJ2aWNlLnJlc2V0UGFzc3dvcmQodGhpcy5jb2RlLCB0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUmVzZXRQYXNzd29yZENvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5SZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IFJlc2V0UGFzc3dvcmRDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Jlc2V0UGFzc3dvcmQvcmVzZXRQYXNzd29yZC5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXJsID0gJyc7XG4gICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCkge1xuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvb2tUaXRsZSA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1ByaWNlO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb247XG4gICAgICAgIHRoaXMub3duZXJzRW1haWwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsO1xuICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLnByb3RvdHlwZS50b2dnbGVFbWFpbEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnU2lnbiBpbiB0byBzZWUgZW1haWwnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlciA9PT0gdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmRlbGV0ZUxpc3RpbmcodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlciA9IEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBHaXRodWJDb250cmlidXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIl07XG4gICAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3IoJGxvZywgJGh0dHApIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgICB9XG4gICAgR2l0aHViQ29udHJpYnV0b3IucHJvdG90eXBlLmdldENvbnRyaWJ1dG9ycyA9IGZ1bmN0aW9uIChsaW1pdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IDMwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBHaXRodWJDb250cmlidXRvcjtcbn0pKCk7XG5leHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yID0gR2l0aHViQ29udHJpYnV0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgV2ViRGV2VGVjU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XG4gICAgICAgIHZhciByYXdEYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R5cGVTY3JpcHQsIGEgdHlwZWQgc3VwZXJzZXQgb2YgSmF2YVNjcmlwdCB0aGF0IGNvbXBpbGVzIHRvIHBsYWluIEphdmFTY3JpcHQuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd0eXBlc2NyaXB0LnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5kYXRhID0gcmF3RGF0YS5tYXAoZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xuICAgICAgICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgcmV0dXJuIGF3ZXNvbWVUaGluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJEZXZUZWNTZXJ2aWNlLnByb3RvdHlwZSwgXCJ0ZWNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xufSkoKTtcbmV4cG9ydHMuV2ViRGV2VGVjU2VydmljZSA9IFdlYkRldlRlY1NlcnZpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGFjbWVOYXZiYXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gICAgfTtcbn1cbmV4cG9ydHMuYWNtZU5hdmJhciA9IGFjbWVOYXZiYXI7XG4vKiogQG5nSW5qZWN0ICovXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgTmF2YmFyQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiR3aW5kb3dcIiwgXCJtb21lbnRcIiwgXCJtYWluQXBwU2VydmljZVwiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKCRsb2csICR3aW5kb3csIG1vbWVudCwgbWFpbkFwcFNlcnZpY2UsICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBtYWluQXBwU2VydmljZS5jdXJyZW50UGFnZTtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlck5hbWUnKTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50Snd0VG9rZW4gPSAkd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VySldUJyk7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICAgICAgdGhpcy52YWwgPSAnV2VsY29tZSAnICsgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWU7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5sb2dPdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVubEVtYWlsID0gJyc7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBlcnNvbmFsRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgIH07XG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2Uuc2VuZFJlc2V0RW1haWwodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvcmVzZXRQYXNzd29yZCcpO1xuICAgIH07XG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUuc2V0UGFnZSA9IGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIH07XG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUuY2hlY2tQYWdlID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2UgPT0gcGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2UgPT0gJ3NpZ25pbicgJiYgdGhpcy5sb2dnZWRJbikge1xuICAgICAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9ICdob21lJztcbiAgICAgICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE5hdmJhckNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5OYXZiYXJDb250cm9sbGVyID0gTmF2YmFyQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5hY21lTWFsYXJrZXkuJGluamVjdCA9IFtcIm1hbGFya2V5XCJdO1xuZnVuY3Rpb24gYWNtZU1hbGFya2V5KG1hbGFya2V5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgICAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICAgICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9O1xufVxuZXhwb3J0cy5hY21lTWFsYXJrZXkgPSBhY21lTWFsYXJrZXk7XG5mdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgdmFyIHdhdGNoZXI7XG4gICAgdmFyIHR5cGlzdCA9IHZtLm1hbGFya2V5KGVsWzBdLCB7XG4gICAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vd2F0Y2hlcigpO1xuICAgIH0pO1xufVxuLyoqIEBuZ0luamVjdCAqL1xudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgTWFsYXJrZXlDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiZ2l0aHViQ29udHJpYnV0b3JcIiwgXCJtYWxhcmtleVwiXTtcbiAgICBmdW5jdGlvbiBNYWxhcmtleUNvbnRyb2xsZXIoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IsIG1hbGFya2V5KSB7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuZ2l0aHViQ29udHJpYnV0b3IgPSBnaXRodWJDb250cmlidXRvcjtcbiAgICAgICAgdGhpcy5tYWxhcmtleSA9IG1hbGFya2V5O1xuICAgICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIE1hbGFya2V5Q29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycygpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1hbGFya2V5Q29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q29udHJpYnV0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5naXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb250cmlidXRvcnM7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLk1hbGFya2V5Q29udHJvbGxlciA9IE1hbGFya2V5Q29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RpbmdIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIExpc3RpbmdIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIiwgXCIkbG9jYXRpb25cIl07XG4gICAgZnVuY3Rpb24gTGlzdGluZ0h0dHBTZXJ2aWNlKCRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSwgJGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAxJztcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgIH1cbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUxpc3RpbmcgPSBmdW5jdGlvbiAocHJpY2UsIGlzYm4sIGNvbmRpdGlvbiwgdXNlck5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL0xpc3RpbmdzL0NyZWF0ZScsIHtcbiAgICAgICAgICAgIFwiUHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICBcIkNvbmRpdGlvblwiOiBjb25kaXRpb24sXG4gICAgICAgICAgICBcIklTQk5cIjogaXNibixcbiAgICAgICAgICAgIFwiTGlzdGluZ1R5cGVcIjogJ1NlbGxpbmcnLFxuICAgICAgICAgICAgXCJMaXN0aW5nQ3JlYXRvclVzZXJOYW1lXCI6IHVzZXJOYW1lLFxuICAgICAgICAgICAgXCJKV1RcIjogc2VsZi5tYWluQXBwU2VydmljZS5jdXJyZW50Snd0VG9rZW5cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgX3RoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldEFsbExpc3RpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL0xpc3RpbmdzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVMaXN0aW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KHRoaXMudXJsICsgJy9MaXN0aW5ncy9EZWxldGUnLCB7XG4gICAgICAgICAgICBcIkxpc3RpbmdJZFwiOiBpZCxcbiAgICAgICAgICAgIFwiSldUXCI6IHNlbGYubWFpbkFwcFNlcnZpY2UuY3VycmVudEp3dFRva2VuXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIF90aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIExpc3RpbmdIdHRwU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLkxpc3RpbmdIdHRwU2VydmljZSA9IExpc3RpbmdIdHRwU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVzZXJIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIFVzZXJIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2NhdGlvblwiLCBcIiRxXCIsIFwiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gVXNlckh0dHBTZXJ2aWNlKCR3aW5kb3csICRsb2NhdGlvbiwgJHEsICRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMSc7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHEgPSAkcTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlVmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgfVxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKHVzZXJOYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvVXNlcnMvTG9naW4nLCB7IFwiVXNlck5hbWVcIjogdXNlck5hbWUsIFwiUGFzc3dvcmRcIjogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT0gJ0xvZ2luIEZhaWxlZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVc2VySldUJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgc2VsZi4kd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVc2VyTmFtZScsIHVzZXJOYW1lKTtcbiAgICAgICAgICAgICAgICBzZWxmLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIHNlbGYubWFpbkFwcFNlcnZpY2UuY3VycmVudEp3dFRva2VuID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBzZWxmLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlbGYuJGxvZy5sb2coXCJGYWlsXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUudmFsaWRhdGVVc2VyID0gZnVuY3Rpb24gKHVubEVtYWlsLCBwYXNzd29yZCwgb3RoZXJFbWFpbCwgdXNlck5hbWUsIGZpcnN0TmFtZSwgbGFzdE5hbWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgIHNlbGYuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICBzZWxmLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgICAgIHNlbGYudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICAgICAgc2VsZi51bmxFbWFpbCA9IHVubEVtYWlsO1xuICAgICAgICBzZWxmLnBlcnNvbmFsRW1haWwgPSBvdGhlckVtYWlsO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9WYWxpZGF0ZScsIHtcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHVzZXJOYW1lLFxuICAgICAgICAgICAgJ0h1c2tlckVtYWlsJzogdW5sRW1haWwsXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlybWF0aW9uUGFnZSh1c2VyTmFtZSwgdW5sRW1haWwsIG90aGVyRW1haWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlVzZXJuYW1lRmFpbFwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kd2luZG93LmFsZXJ0KCdUaGlzIFVzZXJuYW1lIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIkVtYWlsRmFpbFwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kd2luZG93LmFsZXJ0KCdUaGlzIEVtYWlsIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVZhbDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNvbmZpcm1hdGlvblBhZ2UgPSBmdW5jdGlvbiAodXNlck5hbWUsIHVubEVtYWlsLCBwZXJzb25hbEVtYWlsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvQ29uZmlybScsIHtcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHVzZXJOYW1lLFxuICAgICAgICAgICAgJ0h1c2tlckVtYWlsJzogdW5sRW1haWwsXG4gICAgICAgICAgICAnQ29tbXVuaWNhdGlvbkVtYWlsJzogcGVyc29uYWxFbWFpbFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgc2VsZi5jb3JyZWN0Q29kZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL2NvbmZpcm1FbWFpbCcpO1xuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5jb25maXJtVXNlciA9IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGNvZGUgPT0gc2VsZi5jb3JyZWN0Q29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9DcmVhdGUnLCB7XG4gICAgICAgICAgICAnVXNlck5hbWUnOiBzZWxmLnVzZXJOYW1lLFxuICAgICAgICAgICAgJ0ZpcnN0TmFtZSc6IHNlbGYuZmlyc3ROYW1lLFxuICAgICAgICAgICAgJ0xhc3ROYW1lJzogc2VsZi5sYXN0TmFtZSxcbiAgICAgICAgICAgICdIdXNrZXJFbWFpbCc6IHNlbGYudW5sRW1haWwsXG4gICAgICAgICAgICAnQ29tbXVuaWNhdGlvbkVtYWlsJzogc2VsZi5wZXJzb25hbEVtYWlsLFxuICAgICAgICAgICAgJ1Bhc3N3b3JkJzogc2VsZi5wYXNzd29yZFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVZhbDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoY29kZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgaWYgKGNvZGUgPT0gdGhpcy5jb3JyZWN0Q29kZSkge1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvUmVzZXQnLCB7XG4gICAgICAgICAgICAgICAgJ1VzZXJOYW1lJzogdGhpcy51c2VyUmVzZXQsXG4gICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJzogcGFzc3dvcmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ0luY29ycmVjdCBjb2RlLCBwbGVhc2UgdHJ5IGFnYWluJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuc2VuZFJlc2V0RW1haWwgPSBmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL1NlbmRSZXNldEVtYWlsJywge1xuICAgICAgICAgICAgJ1VzZXJuYW1lJzogdXNlclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgc2VsZi5jb3JyZWN0Q29kZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBzZWxmLnVzZXJSZXNldCA9IHVzZXI7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBVc2VySHR0cFNlcnZpY2U7XG59KSgpO1xuZXhwb3J0cy5Vc2VySHR0cFNlcnZpY2UgPSBVc2VySHR0cFNlcnZpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYWluQXBwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIE1haW5BcHBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIl07XG4gICAgZnVuY3Rpb24gTWFpbkFwcFNlcnZpY2UoJGxvZywgJGh0dHApIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL2xvY2FsaG9zdDozMDAwJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ1VzZXIgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdQcmljZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVVJMID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAnaG9tZSc7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuY3VycmVudFVubEVtYWlsID0gJyc7XG4gICAgICAgIHRoaXMuY3VycmVudFBlcnNvbmFsRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50Snd0VG9rZW4gPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIE1haW5BcHBTZXJ2aWNlO1xufSkoKTtcbmV4cG9ydHMuTWFpbkFwcFNlcnZpY2UgPSBNYWluQXBwU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=