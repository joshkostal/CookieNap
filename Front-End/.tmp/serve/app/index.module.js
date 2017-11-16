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
	        this.currentPage = mainAppService.currentPage;
	        if (this.mainAppService.currentUserName != '') {
	            this.val = 'Welcome ' + this.mainAppService.currentUserName;
	            this.loggedIn = true;
	        }
	        else {
	            this.loggedIn = false;
	        }
	    }
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
	        this.currentPage = 'home';
	    }
	    return MainAppService;
	})();
	exports.MainAppService = MainAppService;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY0YTE5NWVjZGUzNTY0OTQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsOEJBQThCOzs7Ozs7O0FDbkMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsNkNBQTZDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZjRhMTk1ZWNkZTM1NjQ5NDNmZSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbnZhciBpbmRleF9jb25maWdfMSA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XHJcbnZhciBpbmRleF9yb3V0ZV8xID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xyXG52YXIgaW5kZXhfcnVuXzEgPSByZXF1aXJlKCcuL2luZGV4LnJ1bicpO1xyXG52YXIgbWFpbl9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XHJcbnZhciBjcmVhdGVMaXN0aW5nX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXInKTtcclxudmFyIHNpZ25pbl9jb250cm9sbGVyXzEgPSByZXF1aXJlKCcuL3NpZ25pbi9zaWduaW4uY29udHJvbGxlcicpO1xyXG52YXIgaW5kaXZpZHVhbExpc3RpbmdQYWdlX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyJyk7XHJcbnZhciBnaXRodWJDb250cmlidXRvcl9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XHJcbnZhciB3ZWJEZXZUZWNfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJyk7XHJcbnZhciBuYXZiYXJfZGlyZWN0aXZlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xyXG52YXIgbWFsYXJrZXlfZGlyZWN0aXZlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnKTtcclxudmFyIGxpc3RpbmdIdHRwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nSHR0cFNlcnZpY2UvbGlzdGluZ0h0dHBTZXJ2aWNlLnNlcnZpY2UnKTtcclxudmFyIHVzZXJIdHRwU2VydmljZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UnKTtcclxudmFyIG1haW5BcHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UnKTtcclxudmFyIGNvb2tpZU5hcDtcclxuKGZ1bmN0aW9uIChjb29raWVOYXApIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjb29raWVOYXAnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAndG9hc3RyJ10pXHJcbiAgICAgICAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxyXG4gICAgICAgIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxyXG4gICAgICAgIC5jb25maWcoaW5kZXhfY29uZmlnXzEuY29uZmlnKVxyXG4gICAgICAgIC5jb25maWcoaW5kZXhfcm91dGVfMS5yb3V0ZXJDb25maWcpXHJcbiAgICAgICAgLnJ1bihpbmRleF9ydW5fMS5ydW5CbG9jaylcclxuICAgICAgICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBnaXRodWJDb250cmlidXRvcl9zZXJ2aWNlXzEuR2l0aHViQ29udHJpYnV0b3IpXHJcbiAgICAgICAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIHdlYkRldlRlY19zZXJ2aWNlXzEuV2ViRGV2VGVjU2VydmljZSlcclxuICAgICAgICAuc2VydmljZSgnbGlzdGluZ0h0dHBTZXJ2aWNlJywgbGlzdGluZ0h0dHBTZXJ2aWNlX3NlcnZpY2VfMS5MaXN0aW5nSHR0cFNlcnZpY2UpXHJcbiAgICAgICAgLnNlcnZpY2UoJ3VzZXJIdHRwU2VydmljZScsIHVzZXJIdHRwU2VydmljZV9zZXJ2aWNlXzEuVXNlckh0dHBTZXJ2aWNlKVxyXG4gICAgICAgIC5zZXJ2aWNlKCdtYWluQXBwU2VydmljZScsIG1haW5BcHBTZXJ2aWNlX3NlcnZpY2VfMS5NYWluQXBwU2VydmljZSlcclxuICAgICAgICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBtYWluX2NvbnRyb2xsZXJfMS5NYWluQ29udHJvbGxlcilcclxuICAgICAgICAuY29udHJvbGxlcignU2lnbkluQ29udHJvbGxlcicsIHNpZ25pbl9jb250cm9sbGVyXzEuU2lnbkluQ29udHJvbGxlcilcclxuICAgICAgICAuY29udHJvbGxlcignQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXInLCBjcmVhdGVMaXN0aW5nX2NvbnRyb2xsZXJfMS5DcmVhdGVMaXN0aW5nQ29udHJvbGxlcilcclxuICAgICAgICAuY29udHJvbGxlcignSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcicsIGluZGl2aWR1YWxMaXN0aW5nUGFnZV9jb250cm9sbGVyXzEuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcilcclxuICAgICAgICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgbmF2YmFyX2RpcmVjdGl2ZV8xLmFjbWVOYXZiYXIpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgbWFsYXJrZXlfZGlyZWN0aXZlXzEuYWNtZU1hbGFya2V5KTtcclxufSkoY29va2llTmFwIHx8IChjb29raWVOYXAgPSB7fSkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxuY29uZmlnLiRpbmplY3QgPSBbXCIkbG9nUHJvdmlkZXJcIiwgXCJ0b2FzdHJDb25maWdcIl07XHJcbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xyXG4gICAgLy8gZW5hYmxlIGxvZ1xyXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcclxuICAgIC8vIHNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxyXG4gICAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XHJcbiAgICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XHJcbiAgICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xyXG4gICAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcclxuICAgIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XHJcbn1cclxuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xyXG5yb3V0ZXJDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCIsIFwiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xyXG5mdW5jdGlvbiByb3V0ZXJDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdzaWduSW4nLCB7XHJcbiAgICAgICAgdXJsOiAnL3NpZ25JbicsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2lnbmluL3NpZ25pbi5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnU2lnbkluQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnc2lnbkluJ1xyXG4gICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2NyZWF0ZUxpc3RpbmcnLCB7XHJcbiAgICAgICAgdXJsOiAnL2NyZWF0ZUxpc3RpbmcnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NyZWF0ZUxpc3RpbmcvY3JlYXRlTGlzdGluZy5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2NyZWF0ZUxpc3RpbmcnXHJcbiAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnaW5kaXZpZHVhbExpc3RpbmdQYWdlJywge1xyXG4gICAgICAgIHVybDogJy9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UnLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2luZGl2aWR1YWxMaXN0aW5nUGFnZS9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0luZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2luZGl2aWR1YWxMaXN0aW5nJ1xyXG4gICAgfSk7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn1cclxuZXhwb3J0cy5yb3V0ZXJDb25maWcgPSByb3V0ZXJDb25maWc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXHJcbnJ1bkJsb2NrLiRpbmplY3QgPSBbXCIkbG9nXCJdO1xyXG5mdW5jdGlvbiBydW5CbG9jaygkbG9nKSB7XHJcbiAgICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcclxufVxyXG5leHBvcnRzLnJ1bkJsb2NrID0gcnVuQmxvY2s7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4udHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qIEBuZ0luamVjdCAqL1xyXG4gICAgTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRxXCIsIFwiJGh0dHBcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwiJHRpbWVvdXRcIiwgXCJ3ZWJEZXZUZWNcIiwgXCJ0b2FzdHJcIiwgXCJtYWluQXBwU2VydmljZVwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiXTtcclxuICAgIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRxLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIsIG1haW5BcHBTZXJ2aWNlLCBsaXN0aW5nSHR0cFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLndlYkRldlRlYyA9IHdlYkRldlRlYztcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTUwNjY2NDcyNTg2MDtcclxuICAgICAgICB0aGlzLnRvYXN0ciA9IHRvYXN0cjtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0KTtcclxuICAgICAgICB0aGlzLnByb21pc2VzID0gW107XHJcbiAgICB9XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcclxuICAgICAgICB0aGlzLmdldFdlYkRldlRlYygpO1xyXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9LCAxMDAwMCk7XHJcbiAgICB9O1xyXG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlLiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcclxuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL3NpZ25JbicpO1xyXG4gICAgfTtcclxuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5vcGVuTGlzdGluZyA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0Jvb2tOYW1lID0gdmFsLmJvb2tMaXN0ZWQudGl0bGU7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVc2VyID0gdmFsLmxpc3RpbmdDcmVhdG9yLnVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nUHJpY2UgPSB2YWwucHJpY2U7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkwgPSB2YWwuYm9va0xpc3RlZC50aHVtYm5haWxVUkw7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb24gPSB2YWwuY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWwgPSB2YWwubGlzdGluZ0NyZWF0b3IuY29tbXVuaWNhdGlvbkVtYWlsO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nSWQgPSB2YWwubGlzdGluZ0lEO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UnKTtcclxuICAgIH07XHJcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0V2ViRGV2VGVjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgc2VsZi5hbGxCb29rcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5hbGxCb29rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdMaWtlLW5ldyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnR29vZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdVc2FibGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBNYWluQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDcmVhdGVMaXN0aW5nQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiBAbmdJbmplY3QgKi9cclxuICAgIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UgPSBsaXN0aW5nSHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICB0aGlzLmlzYm4gPSAnJztcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9ICcnO1xyXG4gICAgfVxyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIucHJvdG90eXBlLmNyZWF0ZUxpc3RpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmNyZWF0ZUxpc3RpbmcodGhpcy5wcmljZSwgdGhpcy5pc2JuLCB0aGlzLmNvbmRpdGlvbiwgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ1lvdSBoYXZlIGNyZWF0ZWQgYSBMaXN0aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ1NpZ24gaW4gdG8gY3JlYXRlIExpc3RpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyID0gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jcmVhdGVMaXN0aW5nL2NyZWF0ZUxpc3RpbmcuY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2lnbkluQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiBAbmdJbmplY3QgKi9cclxuICAgIFNpZ25JbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRxXCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gU2lnbkluQ29udHJvbGxlcigkcSwgJGxvZywgJGxvY2F0aW9uLCB1c2VySHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy51bmxFbWFpbCA9ICcnO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcclxuICAgICAgICB0aGlzLm90aGVyRW1haWwgPSAnJztcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5uZXdVc2VyU2lnblVwQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgIH1cclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIFNpZ25JbkNvbnRyb2xsZXIucHJvdG90eXBlLmNyZWF0ZU9yU2lnbkluVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5uZXdVc2VyU2lnblVwQm9vbGVhbikge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZS5jcmVhdGVVc2VyKHRoaXMudW5sRW1haWwsIHRoaXMucGFzc3dvcmQsIHRoaXMub3RoZXJFbWFpbCwgdGhpcy51c2VyTmFtZSwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMudXNlckh0dHBTZXJ2aWNlLnNpZ25Jbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKHZhbCA9PSAnU3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdGhpcy51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubGlzdGluZ0h0dHAuZ2V0TGlzdGluZ3MoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2lnbkluQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5TaWduSW5Db250cm9sbGVyID0gU2lnbkluQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3NpZ25pbi9zaWduaW4uY29udHJvbGxlci50c1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiBAbmdJbmplY3QgKi9cclxuICAgIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyKCR3aW5kb3csICRsb2csICRsb2NhdGlvbiwgbGlzdGluZ0h0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVVJMKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdVUkw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9va1RpdGxlID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdCb29rTmFtZTtcclxuICAgICAgICB0aGlzLnByaWNlID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdQcmljZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXI7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0NvbmRpdGlvbjtcclxuICAgICAgICB0aGlzLm93bmVyc0VtYWlsID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdPd25lcnNFbWFpbDtcclxuICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLnByb3RvdHlwZS50b2dnbGVFbWFpbEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbEF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cuYWxlcnQoJ1NpZ24gaW4gdG8gc2VlIGVtYWlsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIucHJvdG90eXBlLmRlbGV0ZUxpc3RpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlciA9PT0gdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UuZGVsZXRlTGlzdGluZyh0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0lkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXI7XHJcbn0pKCk7XHJcbmV4cG9ydHMuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlciA9IEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEdpdGh1YkNvbnRyaWJ1dG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIl07XHJcbiAgICBmdW5jdGlvbiBHaXRodWJDb250cmlidXRvcigkbG9nLCAkaHR0cCkge1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xyXG4gICAgfVxyXG4gICAgR2l0aHViQ29udHJpYnV0b3IucHJvdG90eXBlLmdldENvbnRyaWJ1dG9ycyA9IGZ1bmN0aW9uIChsaW1pdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSAzMDsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3I7XHJcbn0pKCk7XHJcbmV4cG9ydHMuR2l0aHViQ29udHJpYnV0b3IgPSBHaXRodWJDb250cmlidXRvcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgV2ViRGV2VGVjU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBmdW5jdGlvbiBXZWJEZXZUZWNTZXJ2aWNlKCkge1xyXG4gICAgICAgIHZhciByYXdEYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdLYXJtYScsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXIgVUkgQm9vdHN0cmFwJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBjb21wb25lbnRzIHdyaXR0ZW4gaW4gcHVyZSBBbmd1bGFySlMgYnkgdGhlIEFuZ3VsYXJVSSBUZWFtLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd1aS1ib290c3RyYXAucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnVHlwZVNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnLycsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHlwZVNjcmlwdCwgYSB0eXBlZCBzdXBlcnNldCBvZiBKYXZhU2NyaXB0IHRoYXQgY29tcGlsZXMgdG8gcGxhaW4gSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAndHlwZXNjcmlwdC5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHJhd0RhdGEubWFwKGZ1bmN0aW9uIChhd2Vzb21lVGhpbmcpIHtcclxuICAgICAgICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gYXdlc29tZVRoaW5nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkRldlRlY1NlcnZpY2UucHJvdG90eXBlLCBcInRlY1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcclxufSkoKTtcclxuZXhwb3J0cy5XZWJEZXZUZWNTZXJ2aWNlID0gV2ViRGV2VGVjU2VydmljZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxuZnVuY3Rpb24gYWNtZU5hdmJhcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hY21lTmF2YmFyID0gYWNtZU5hdmJhcjtcclxuLyoqIEBuZ0luamVjdCAqL1xyXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBOYXZiYXJDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwibW9tZW50XCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKCRsb2csIG1vbWVudCwgbWFpbkFwcFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbWFpbkFwcFNlcnZpY2UuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsID0gJ1dlbGNvbWUgJyArIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5zZXRQYWdlID0gZnVuY3Rpb24gKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgIH07XHJcbiAgICBOYXZiYXJDb250cm9sbGVyLnByb3RvdHlwZS5jaGVja1BhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQYWdlID09IHBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRQYWdlID09ICdzaWduaW4nICYmIHRoaXMubG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50UGFnZSA9ICdob21lJztcclxuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTmF2YmFyQ29udHJvbGxlcjtcclxufSkoKTtcclxuZXhwb3J0cy5OYXZiYXJDb250cm9sbGVyID0gTmF2YmFyQ29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbmdJbmplY3QgKi9cclxuYWNtZU1hbGFya2V5LiRpbmplY3QgPSBbXCJtYWxhcmtleVwiXTtcclxuZnVuY3Rpb24gYWNtZU1hbGFya2V5KG1hbGFya2V5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxyXG4gICAgICAgIGxpbms6IGxpbmtGdW5jLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hY21lTWFsYXJrZXkgPSBhY21lTWFsYXJrZXk7XHJcbmZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcclxuICAgIHZhciB3YXRjaGVyO1xyXG4gICAgdmFyIHR5cGlzdCA9IHZtLm1hbGFya2V5KGVsWzBdLCB7XHJcbiAgICAgICAgdHlwZVNwZWVkOiA0MCxcclxuICAgICAgICBkZWxldGVTcGVlZDogNDAsXHJcbiAgICAgICAgcGF1c2VEZWxheTogODAwLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgcG9zdGZpeDogJyAnXHJcbiAgICB9KTtcclxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XHJcbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vd2F0Y2hlcigpO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqIEBuZ0luamVjdCAqL1xyXG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIE1hbGFya2V5Q29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcImdpdGh1YkNvbnRyaWJ1dG9yXCIsIFwibWFsYXJrZXlcIl07XHJcbiAgICBmdW5jdGlvbiBNYWxhcmtleUNvbnRyb2xsZXIoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IsIG1hbGFya2V5KSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLmdpdGh1YkNvbnRyaWJ1dG9yID0gZ2l0aHViQ29udHJpYnV0b3I7XHJcbiAgICAgICAgdGhpcy5tYWxhcmtleSA9IG1hbGFya2V5O1xyXG4gICAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gICAgTWFsYXJrZXlDb250cm9sbGVyLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycygpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBNYWxhcmtleUNvbnRyb2xsZXIucHJvdG90eXBlLmdldENvbnRyaWJ1dG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgX3RoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRyaWJ1dG9ycztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWFsYXJrZXlDb250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLk1hbGFya2V5Q29udHJvbGxlciA9IE1hbGFya2V5Q29udHJvbGxlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnRzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdGluZ0h0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKiBAbmdJbmplY3QgKi9cclxuICAgIExpc3RpbmdIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XHJcbiAgICBmdW5jdGlvbiBMaXN0aW5nSHR0cFNlcnZpY2UoJGxvZywgJGh0dHAsIG1haW5BcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMSc7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKHByaWNlLCBpc2JuLCBjb25kaXRpb24sIHVzZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLiRodHRwLnBvc3QodGhpcy51cmwgKyAnL0xpc3RpbmdzL0NyZWF0ZScsIHtcclxuICAgICAgICAgICAgXCJQcmljZVwiOiBwcmljZSxcclxuICAgICAgICAgICAgXCJDb25kaXRpb25cIjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICBcIklTQk5cIjogaXNibixcclxuICAgICAgICAgICAgXCJMaXN0aW5nVHlwZVwiOiAnU2VsbGluZycsXHJcbiAgICAgICAgICAgIFwiTGlzdGluZ0NyZWF0b3JVc2VyTmFtZVwiOiB1c2VyTmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRBbGxMaXN0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJywgZXJyb3IuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldExpc3RpbmdCeUlkID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMudXJsICsnL0xpc3RpbmdzL0RldGFpbHMvJyArIGlkKVxyXG4gICAgICAgIC8vIC50aGVuKChyZXNwb25zZTogYW55KTogYW55ID0+IHtcclxuICAgICAgICAvLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MvRGVsZXRlLycgKyBpZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpc3RpbmdIdHRwU2VydmljZTtcclxufSkoKTtcclxuZXhwb3J0cy5MaXN0aW5nSHR0cFNlcnZpY2UgPSBMaXN0aW5nSHR0cFNlcnZpY2U7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVzZXJIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBVc2VySHR0cFNlcnZpY2UuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9jYXRpb25cIiwgXCIkcVwiLCBcIiRsb2dcIiwgXCIkaHR0cFwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xyXG4gICAgZnVuY3Rpb24gVXNlckh0dHBTZXJ2aWNlKCR3aW5kb3csICRsb2NhdGlvbiwgJHEsICRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLnVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDEnO1xyXG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlVmFsID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgfVxyXG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAodXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvVXNlcnMvTG9naW4nLCB7IFwiVXNlck5hbWVcIjogdXNlck5hbWUsIFwiUGFzc3dvcmRcIjogcGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09IHVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNpZ25JblVzZXIodXNlck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZWxmLiRsb2cubG9nKFwiRmFpbFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVZhbDtcclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodW5sRW1haWwsIHBhc3N3b3JkLCBvdGhlckVtYWlsLCB1c2VyTmFtZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9DcmVhdGUnLCB7XHJcbiAgICAgICAgICAgICdVc2VyTmFtZSc6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICAnRmlyc3ROYW1lJzogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAnTGFzdE5hbWUnOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgJ0h1c2tlckVtYWlsJzogdW5sRW1haWwsXHJcbiAgICAgICAgICAgICdDb21tdW5pY2F0aW9uRW1haWwnOiBvdGhlckVtYWlsLFxyXG4gICAgICAgICAgICAnUGFzc3dvcmQnOiBwYXNzd29yZFxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09IFwiU3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpcm1Vc2VyKHVzZXJOYW1lLCB1bmxFbWFpbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlVzZXJuYW1lRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgVXNlcm5hbWUgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIkVtYWlsRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1RoaXMgRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiR3aW5kb3cuYWxlcnQoJ1lvdSBmYWlsZWQgdG8gc2lnbiB1cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVZhbDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLnNpZ25JblVzZXIgPSBmdW5jdGlvbiAodXNlck5hbWUpIHtcclxuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLmN1cnJlbnRVc2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgIH07XHJcbiAgICBVc2VySHR0cFNlcnZpY2UucHJvdG90eXBlLmNvbmZpcm1Vc2VyID0gZnVuY3Rpb24gKHVzZXJOYW1lLCB1bmxFbWFpbCkge1xyXG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL1VzZXJzL0NvbmZpcm0nKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVXNlckh0dHBTZXJ2aWNlO1xyXG59KSgpO1xyXG5leHBvcnRzLlVzZXJIdHRwU2VydmljZSA9IFVzZXJIdHRwU2VydmljZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlckh0dHBTZXJ2aWNlL3VzZXJIdHRwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFpbkFwcFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqIEBuZ0luamVjdCAqL1xyXG4gICAgTWFpbkFwcFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiXTtcclxuICAgIGZ1bmN0aW9uIE1haW5BcHBTZXJ2aWNlKCRsb2csICRodHRwKSB7XHJcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVXNlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nUHJpY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdVUkwgPSAnJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlck5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ0lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gJ2hvbWUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1haW5BcHBTZXJ2aWNlO1xyXG59KSgpO1xyXG5leHBvcnRzLk1haW5BcHBTZXJ2aWNlID0gTWFpbkFwcFNlcnZpY2U7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=