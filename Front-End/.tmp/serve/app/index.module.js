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
	                self.mainAppService.currentUserName = userName;
	                self.mainAppService.currentJwtToken = response.data;
	                self.$location.path('/');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTUyOTI4MzFkYzUzZTAzYTQyMDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25maXJtRW1haWwvY29uZmlybUVtYWlsLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLDhCQUE4Qjs7Ozs7OztBQ3ZDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCw2Q0FBNkM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU1MjkyODMxZGM1M2UwM2E0MjAzIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbnZhciBpbmRleF9jb25maWdfMSA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG52YXIgaW5kZXhfcm91dGVfMSA9IHJlcXVpcmUoJy4vaW5kZXgucm91dGUnKTtcbnZhciBpbmRleF9ydW5fMSA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG52YXIgbWFpbl9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XG52YXIgY3JlYXRlTGlzdGluZ19jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5jb250cm9sbGVyJyk7XG52YXIgY29uZmlybUVtYWlsX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vY29uZmlybUVtYWlsL2NvbmZpcm1FbWFpbC5jb250cm9sbGVyJyk7XG52YXIgc2lnbmluX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vc2lnbmluL3NpZ25pbi5jb250cm9sbGVyJyk7XG52YXIgcmVzZXRQYXNzd29yZF9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL3Jlc2V0UGFzc3dvcmQvcmVzZXRQYXNzd29yZC5jb250cm9sbGVyJyk7XG52YXIgaW5kaXZpZHVhbExpc3RpbmdQYWdlX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyJyk7XG52YXIgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xudmFyIHdlYkRldlRlY19zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnKTtcbnZhciBuYXZiYXJfZGlyZWN0aXZlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xudmFyIG1hbGFya2V5X2RpcmVjdGl2ZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XG52YXIgbGlzdGluZ0h0dHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZScpO1xudmFyIHVzZXJIdHRwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UnKTtcbnZhciBtYWluQXBwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9NYWluQXBwU2VydmljZS9tYWluQXBwU2VydmljZS5zZXJ2aWNlJyk7XG52YXIgY29va2llTmFwO1xuKGZ1bmN0aW9uIChjb29raWVOYXApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2Nvb2tpZU5hcCcsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInXSlcbiAgICAgICAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAgICAgICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgICAgICAgLmNvbmZpZyhpbmRleF9jb25maWdfMS5jb25maWcpXG4gICAgICAgIC5jb25maWcoaW5kZXhfcm91dGVfMS5yb3V0ZXJDb25maWcpXG4gICAgICAgIC5ydW4oaW5kZXhfcnVuXzEucnVuQmxvY2spXG4gICAgICAgIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIGdpdGh1YkNvbnRyaWJ1dG9yX3NlcnZpY2VfMS5HaXRodWJDb250cmlidXRvcilcbiAgICAgICAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIHdlYkRldlRlY19zZXJ2aWNlXzEuV2ViRGV2VGVjU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ2xpc3RpbmdIdHRwU2VydmljZScsIGxpc3RpbmdIdHRwU2VydmljZV9zZXJ2aWNlXzEuTGlzdGluZ0h0dHBTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgndXNlckh0dHBTZXJ2aWNlJywgdXNlckh0dHBTZXJ2aWNlX3NlcnZpY2VfMS5Vc2VySHR0cFNlcnZpY2UpXG4gICAgICAgIC5zZXJ2aWNlKCdtYWluQXBwU2VydmljZScsIG1haW5BcHBTZXJ2aWNlX3NlcnZpY2VfMS5NYWluQXBwU2VydmljZSlcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgbWFpbl9jb250cm9sbGVyXzEuTWFpbkNvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdDb25maXJtRW1haWxDb250cm9sbGVyJywgY29uZmlybUVtYWlsX2NvbnRyb2xsZXJfMS5Db25maXJtRW1haWxDb250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignU2lnbkluQ29udHJvbGxlcicsIHNpZ25pbl9jb250cm9sbGVyXzEuU2lnbkluQ29udHJvbGxlcilcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1Jlc2V0UGFzc3dvcmRDb250cm9sbGVyJywgcmVzZXRQYXNzd29yZF9jb250cm9sbGVyXzEuUmVzZXRQYXNzd29yZENvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdDcmVhdGVMaXN0aW5nQ29udHJvbGxlcicsIGNyZWF0ZUxpc3RpbmdfY29udHJvbGxlcl8xLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcicsIGluZGl2aWR1YWxMaXN0aW5nUGFnZV9jb250cm9sbGVyXzEuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcilcbiAgICAgICAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIG5hdmJhcl9kaXJlY3RpdmVfMS5hY21lTmF2YmFyKVxuICAgICAgICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBtYWxhcmtleV9kaXJlY3RpdmVfMS5hY21lTWFsYXJrZXkpO1xufSkoY29va2llTmFwIHx8IChjb29raWVOYXAgPSB7fSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5jb25maWcuJGluamVjdCA9IFtcIiRsb2dQcm92aWRlclwiLCBcInRvYXN0ckNvbmZpZ1wiXTtcbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAgIC8vIGVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuICAgIC8vIHNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gICAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5yb3V0ZXJDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCIsIFwiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdzaWduSW4nLCB7XG4gICAgICAgIHVybDogJy9zaWduSW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWduaW4vc2lnbmluLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lnbkluQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3NpZ25JbidcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ2NyZWF0ZUxpc3RpbmcnLCB7XG4gICAgICAgIHVybDogJy9jcmVhdGVMaXN0aW5nJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjcmVhdGVMaXN0aW5nJ1xuICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnY29uZmlybUVtYWlsJywge1xuICAgICAgICB1cmw6ICcvY29uZmlybUVtYWlsJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29uZmlybUVtYWlsL2NvbmZpcm1FbWFpbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0NvbmZpcm1FbWFpbENvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjb25maXJtRW1haWwnXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdyZXNldFBhc3N3b3JkJywge1xuICAgICAgICB1cmw6ICcvcmVzZXRQYXNzd29yZCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Jlc2V0UGFzc3dvcmQvcmVzZXRQYXNzd29yZC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1Jlc2V0UGFzc3dvcmRDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAncmVzZXRQYXNzd29yZCdcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ2luZGl2aWR1YWxMaXN0aW5nUGFnZScsIHtcbiAgICAgICAgdXJsOiAnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnaW5kaXZpZHVhbExpc3RpbmcnXG4gICAgfSk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuZXhwb3J0cy5yb3V0ZXJDb25maWcgPSByb3V0ZXJDb25maWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXgucm91dGUudHNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xucnVuQmxvY2suJGluamVjdCA9IFtcIiRsb2dcIl07XG5mdW5jdGlvbiBydW5CbG9jaygkbG9nKSB7XG4gICAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5leHBvcnRzLnJ1bkJsb2NrID0gcnVuQmxvY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYWluQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRxXCIsIFwiJGh0dHBcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwiJHRpbWVvdXRcIiwgXCJ3ZWJEZXZUZWNcIiwgXCJ0b2FzdHJcIiwgXCJtYWluQXBwU2VydmljZVwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBNYWluQ29udHJvbGxlcigkcSwgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyLCBtYWluQXBwU2VydmljZSwgbGlzdGluZ0h0dHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy53ZWJEZXZUZWMgPSB3ZWJEZXZUZWM7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE1MDY2NjQ3MjU4NjA7XG4gICAgICAgIHRoaXMudG9hc3RyID0gdG9hc3RyO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0KTtcbiAgICAgICAgdGhpcy5wcm9taXNlcyA9IFtdO1xuICAgIH1cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKCk7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH07XG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlLiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvc2lnbkluJyk7XG4gICAgfTtcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUub3Blbkxpc3RpbmcgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWUgPSB2YWwuYm9va0xpc3RlZC50aXRsZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVc2VyID0gdmFsLmxpc3RpbmdDcmVhdG9yLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1ByaWNlID0gdmFsLnByaWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCA9IHZhbC5ib29rTGlzdGVkLnRodW1ibmFpbFVSTDtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb24gPSB2YWwuY29uZGl0aW9uO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsID0gdmFsLmxpc3RpbmdDcmVhdG9yLmNvbW11bmljYXRpb25FbWFpbDtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCA9IHZhbC5saXN0aW5nSUQ7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UnKTtcbiAgICB9O1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5nZXRXZWJEZXZUZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9MaXN0aW5ncycpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlbGYuYWxsQm9va3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFsbEJvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnTGlrZS1uZXcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnVXNhYmxlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1haW5Db250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBNYWluQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyKCR3aW5kb3csICRsb2csICRsb2NhdGlvbiwgbGlzdGluZ0h0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UgPSBsaXN0aW5nSHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICAgICAgdGhpcy5pc2JuID0gJyc7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gJyc7XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBDcmVhdGVMaXN0aW5nQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlTGlzdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZS5jcmVhdGVMaXN0aW5nKHRoaXMucHJpY2UsIHRoaXMuaXNibiwgdGhpcy5jb25kaXRpb24sIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnWW91IGhhdmUgY3JlYXRlZCBhIExpc3RpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnU2lnbiBpbiB0byBjcmVhdGUgTGlzdGluZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5DcmVhdGVMaXN0aW5nQ29udHJvbGxlciA9IENyZWF0ZUxpc3RpbmdDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb25maXJtRW1haWxDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBDb25maXJtRW1haWxDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIENvbmZpcm1FbWFpbENvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZSA9IHVzZXJIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgIH1cbiAgICBDb25maXJtRW1haWxDb250cm9sbGVyLnByb3RvdHlwZS5jaGVja0NvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJIdHRwU2VydmljZS5jb25maXJtVXNlcih0aGlzLmNvZGUpKSB7XG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZS5jcmVhdGVVc2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ0luY29ycmVjdCBjb2RlLCBwbGVhc2UgdHJ5IGFnYWluJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb25maXJtRW1haWxDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuQ29uZmlybUVtYWlsQ29udHJvbGxlciA9IENvbmZpcm1FbWFpbENvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29uZmlybUVtYWlsL2NvbmZpcm1FbWFpbC5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTaWduSW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBTaWduSW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkcVwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJ1c2VySHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBTaWduSW5Db250cm9sbGVyKCRxLCAkbG9nLCAkbG9jYXRpb24sIHVzZXJIdHRwU2VydmljZSwgbWFpbkFwcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlID0gdXNlckh0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMudW5sRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xuICAgICAgICB0aGlzLm90aGVyRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gJyc7XG4gICAgICAgIHRoaXMud2FybmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5ld1VzZXJTaWduVXBCb29sZWFuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJHEgPSAkcTtcbiAgICB9XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIFNpZ25JbkNvbnRyb2xsZXIucHJvdG90eXBlLmNyZWF0ZU9yU2lnbkluVXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV3VXNlclNpZ25VcEJvb2xlYW4pIHtcbiAgICAgICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlLnZhbGlkYXRlVXNlcih0aGlzLnVubEVtYWlsLCB0aGlzLnBhc3N3b3JkLCB0aGlzLm90aGVyRW1haWwsIHRoaXMudXNlck5hbWUsIHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLnVzZXJIdHRwU2VydmljZS5zaWduSW4odGhpcy51c2VyTmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gICAgICAgICAgICBpZiAodmFsID09ICdTdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLmxpc3RpbmdIdHRwLmdldExpc3RpbmdzKCk7XG4gICAgfTtcbiAgICBTaWduSW5Db250cm9sbGVyLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyTmFtZSA9PSAnJykge1xuICAgICAgICAgICAgdGhpcy53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlckh0dHBTZXJ2aWNlLnNlbmRSZXNldEVtYWlsKHRoaXMudXNlck5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL3Jlc2V0UGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNpZ25JbkNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5TaWduSW5Db250cm9sbGVyID0gU2lnbkluQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBSZXNldFBhc3N3b3JkQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyKCRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy5jb2RlID0gJyc7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICB9XG4gICAgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJIdHRwU2VydmljZS5yZXNldFBhc3N3b3JkKHRoaXMuY29kZSwgdGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSBSZXNldFBhc3N3b3JkQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCJsaXN0aW5nSHR0cFNlcnZpY2VcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyKCR3aW5kb3csICRsb2csICRsb2NhdGlvbiwgbGlzdGluZ0h0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLnVybCA9ICcnO1xuICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkwpIHtcbiAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib29rVGl0bGUgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdQcmljZTtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVc2VyO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uO1xuICAgICAgICB0aGlzLm93bmVyc0VtYWlsID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbDtcbiAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUudG9nZ2xlRW1haWxBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ1NpZ24gaW4gdG8gc2VlIGVtYWlsJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIucHJvdG90eXBlLmRlbGV0ZUxpc3RpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIgPT09IHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZS5kZWxldGVMaXN0aW5nKHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nSWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLkluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIgPSBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgR2l0aHViQ29udHJpYnV0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBHaXRodWJDb250cmlidXRvci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCJdO1xuICAgIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yKCRsb2csICRodHRwKSB7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gICAgfVxuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLnByb3RvdHlwZS5nZXRDb250cmlidXRvcnMgPSBmdW5jdGlvbiAobGltaXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSAzMDsgfVxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3I7XG59KSgpO1xuZXhwb3J0cy5HaXRodWJDb250cmlidXRvciA9IEdpdGh1YkNvbnRyaWJ1dG9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFdlYkRldlRlY1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBXZWJEZXZUZWNTZXJ2aWNlKCkge1xuICAgICAgICB2YXIgcmF3RGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXIgVUkgQm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd1aS1ib290c3RyYXAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUeXBlU2NyaXB0LCBhIHR5cGVkIHN1cGVyc2V0IG9mIEphdmFTY3JpcHQgdGhhdCBjb21waWxlcyB0byBwbGFpbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAndHlwZXNjcmlwdC5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZGF0YSA9IHJhd0RhdGEubWFwKGZ1bmN0aW9uIChhd2Vzb21lVGhpbmcpIHtcbiAgICAgICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHJldHVybiBhd2Vzb21lVGhpbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViRGV2VGVjU2VydmljZS5wcm90b3R5cGUsIFwidGVjXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBXZWJEZXZUZWNTZXJ2aWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBhY21lTmF2YmFyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG59XG5leHBvcnRzLmFjbWVOYXZiYXIgPSBhY21lTmF2YmFyO1xuLyoqIEBuZ0luamVjdCAqL1xudmFyIE5hdmJhckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIE5hdmJhckNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRsb2dcIiwgXCJtb21lbnRcIiwgXCJtYWluQXBwU2VydmljZVwiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKCRsb2csIG1vbWVudCwgbWFpbkFwcFNlcnZpY2UsICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBtYWluQXBwU2VydmljZS5jdXJyZW50UGFnZTtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy52YWwgPSAnV2VsY29tZSAnICsgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWU7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5sb2dPdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVubEVtYWlsID0gJyc7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBlcnNvbmFsRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgIH07XG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2Uuc2VuZFJlc2V0RW1haWwodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvcmVzZXRQYXNzd29yZCcpO1xuICAgIH07XG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUuc2V0UGFnZSA9IGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIH07XG4gICAgTmF2YmFyQ29udHJvbGxlci5wcm90b3R5cGUuY2hlY2tQYWdlID0gZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2UgPT0gcGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2UgPT0gJ3NpZ25pbicgJiYgdGhpcy5sb2dnZWRJbikge1xuICAgICAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9ICdob21lJztcbiAgICAgICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE5hdmJhckNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5OYXZiYXJDb250cm9sbGVyID0gTmF2YmFyQ29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5hY21lTWFsYXJrZXkuJGluamVjdCA9IFtcIm1hbGFya2V5XCJdO1xuZnVuY3Rpb24gYWNtZU1hbGFya2V5KG1hbGFya2V5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgICAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICAgICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9O1xufVxuZXhwb3J0cy5hY21lTWFsYXJrZXkgPSBhY21lTWFsYXJrZXk7XG5mdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgdmFyIHdhdGNoZXI7XG4gICAgdmFyIHR5cGlzdCA9IHZtLm1hbGFya2V5KGVsWzBdLCB7XG4gICAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vd2F0Y2hlcigpO1xuICAgIH0pO1xufVxuLyoqIEBuZ0luamVjdCAqL1xudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgTWFsYXJrZXlDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiZ2l0aHViQ29udHJpYnV0b3JcIiwgXCJtYWxhcmtleVwiXTtcbiAgICBmdW5jdGlvbiBNYWxhcmtleUNvbnRyb2xsZXIoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IsIG1hbGFya2V5KSB7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuZ2l0aHViQ29udHJpYnV0b3IgPSBnaXRodWJDb250cmlidXRvcjtcbiAgICAgICAgdGhpcy5tYWxhcmtleSA9IG1hbGFya2V5O1xuICAgICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIE1hbGFya2V5Q29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycygpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1hbGFya2V5Q29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q29udHJpYnV0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5naXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb250cmlidXRvcnM7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLk1hbGFya2V5Q29udHJvbGxlciA9IE1hbGFya2V5Q29udHJvbGxlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50c1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RpbmdIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIExpc3RpbmdIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIiwgXCIkbG9jYXRpb25cIl07XG4gICAgZnVuY3Rpb24gTGlzdGluZ0h0dHBTZXJ2aWNlKCRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSwgJGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAxJztcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgIH1cbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUxpc3RpbmcgPSBmdW5jdGlvbiAocHJpY2UsIGlzYm4sIGNvbmRpdGlvbiwgdXNlck5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL0xpc3RpbmdzL0NyZWF0ZScsIHtcbiAgICAgICAgICAgIFwiUHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICBcIkNvbmRpdGlvblwiOiBjb25kaXRpb24sXG4gICAgICAgICAgICBcIklTQk5cIjogaXNibixcbiAgICAgICAgICAgIFwiTGlzdGluZ1R5cGVcIjogJ1NlbGxpbmcnLFxuICAgICAgICAgICAgXCJMaXN0aW5nQ3JlYXRvclVzZXJOYW1lXCI6IHVzZXJOYW1lLFxuICAgICAgICAgICAgXCJKV1RcIjogc2VsZi5tYWluQXBwU2VydmljZS5jdXJyZW50Snd0VG9rZW5cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgX3RoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldEFsbExpc3RpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL0xpc3RpbmdzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVMaXN0aW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KHRoaXMudXJsICsgJy9MaXN0aW5ncy9EZWxldGUnLCB7XG4gICAgICAgICAgICBcIkxpc3RpbmdJZFwiOiBpZCxcbiAgICAgICAgICAgIFwiSldUXCI6IHNlbGYubWFpbkFwcFNlcnZpY2UuY3VycmVudEp3dFRva2VuXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIF90aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIExpc3RpbmdIdHRwU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLkxpc3RpbmdIdHRwU2VydmljZSA9IExpc3RpbmdIdHRwU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVzZXJIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIFVzZXJIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2NhdGlvblwiLCBcIiRxXCIsIFwiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gVXNlckh0dHBTZXJ2aWNlKCR3aW5kb3csICRsb2NhdGlvbiwgJHEsICRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMSc7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHEgPSAkcTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlVmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgfVxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKHVzZXJOYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvVXNlcnMvTG9naW4nLCB7IFwiVXNlck5hbWVcIjogdXNlck5hbWUsIFwiUGFzc3dvcmRcIjogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT0gJ0xvZ2luIEZhaWxlZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICAgICAgICAgICAgICBzZWxmLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRKd3RUb2tlbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgc2VsZi4kbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLiRsb2cubG9nKFwiRmFpbFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS52YWxpZGF0ZVVzZXIgPSBmdW5jdGlvbiAodW5sRW1haWwsIHBhc3N3b3JkLCBvdGhlckVtYWlsLCB1c2VyTmFtZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgc2VsZi5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHNlbGYubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICAgICAgc2VsZi51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgICBzZWxmLnVubEVtYWlsID0gdW5sRW1haWw7XG4gICAgICAgIHNlbGYucGVyc29uYWxFbWFpbCA9IG90aGVyRW1haWw7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL1ZhbGlkYXRlJywge1xuICAgICAgICAgICAgJ1VzZXJOYW1lJzogdXNlck5hbWUsXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiB1bmxFbWFpbCxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09IFwiU3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maXJtYXRpb25QYWdlKHVzZXJOYW1lLCB1bmxFbWFpbCwgb3RoZXJFbWFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5kYXRhID09IFwiVXNlcm5hbWVGYWlsXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgVXNlcm5hbWUgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5kYXRhID09IFwiRW1haWxGYWlsXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgRW1haWwgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuY29uZmlybWF0aW9uUGFnZSA9IGZ1bmN0aW9uICh1c2VyTmFtZSwgdW5sRW1haWwsIHBlcnNvbmFsRW1haWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9Db25maXJtJywge1xuICAgICAgICAgICAgJ1VzZXJOYW1lJzogdXNlck5hbWUsXG4gICAgICAgICAgICAnSHVza2VyRW1haWwnOiB1bmxFbWFpbCxcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBwZXJzb25hbEVtYWlsXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmNvcnJlY3RDb2RlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvY29uZmlybUVtYWlsJyk7XG4gICAgfTtcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNvbmZpcm1Vc2VyID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoY29kZSA9PSBzZWxmLmNvcnJlY3RDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL1VzZXJzL0NyZWF0ZScsIHtcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHNlbGYudXNlck5hbWUsXG4gICAgICAgICAgICAnRmlyc3ROYW1lJzogc2VsZi5maXJzdE5hbWUsXG4gICAgICAgICAgICAnTGFzdE5hbWUnOiBzZWxmLmxhc3ROYW1lLFxuICAgICAgICAgICAgJ0h1c2tlckVtYWlsJzogc2VsZi51bmxFbWFpbCxcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBzZWxmLnBlcnNvbmFsRW1haWwsXG4gICAgICAgICAgICAnUGFzc3dvcmQnOiBzZWxmLnBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUucmVzZXRQYXNzd29yZCA9IGZ1bmN0aW9uIChjb2RlLCBwYXNzd29yZCkge1xuICAgICAgICBpZiAoY29kZSA9PSB0aGlzLmNvcnJlY3RDb2RlKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9SZXNldCcsIHtcbiAgICAgICAgICAgICAgICAnVXNlck5hbWUnOiB0aGlzLnVzZXJSZXNldCxcbiAgICAgICAgICAgICAgICAnUGFzc3dvcmQnOiBwYXNzd29yZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnSW5jb3JyZWN0IGNvZGUsIHBsZWFzZSB0cnkgYWdhaW4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zZW5kUmVzZXRFbWFpbCA9IGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvVXNlcnMvU2VuZFJlc2V0RW1haWwnLCB7XG4gICAgICAgICAgICAnVXNlcm5hbWUnOiB1c2VyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmNvcnJlY3RDb2RlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHNlbGYudXNlclJlc2V0ID0gdXNlcjtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFVzZXJIdHRwU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLlVzZXJIdHRwU2VydmljZSA9IFVzZXJIdHRwU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1haW5BcHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgTWFpbkFwcFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiXTtcbiAgICBmdW5jdGlvbiBNYWluQXBwU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDAnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVXNlciA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ1ByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdDb25kaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdVUkwgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0lkID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9ICdob21lJztcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50VW5sRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uYWxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnRKd3RUb2tlbiA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gTWFpbkFwcFNlcnZpY2U7XG59KSgpO1xuZXhwb3J0cy5NYWluQXBwU2VydmljZSA9IE1haW5BcHBTZXJ2aWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbkFwcFNlcnZpY2UvbWFpbkFwcFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==