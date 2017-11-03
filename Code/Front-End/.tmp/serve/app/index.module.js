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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzg0MDUzNzk0NTE2NzQ5ZWI2ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsOEJBQThCOzs7Ozs7O0FDbkMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLEVBQUM7QUFDRDs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCw2Q0FBNkM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzg0MDUzNzk0NTE2NzQ5ZWI2ZTIiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxudmFyIGluZGV4X2NvbmZpZ18xID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcbnZhciBpbmRleF9yb3V0ZV8xID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xudmFyIGluZGV4X3J1bl8xID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcbnZhciBtYWluX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcbnZhciBjcmVhdGVMaXN0aW5nX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXInKTtcbnZhciBzaWduaW5fY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9zaWduaW4vc2lnbmluLmNvbnRyb2xsZXInKTtcbnZhciBpbmRpdmlkdWFsTGlzdGluZ1BhZ2VfY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi9pbmRpdmlkdWFsTGlzdGluZ1BhZ2UvaW5kaXZpZHVhbExpc3RpbmdQYWdlLmNvbnRyb2xsZXInKTtcbnZhciBnaXRodWJDb250cmlidXRvcl9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG52YXIgd2ViRGV2VGVjX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xudmFyIG5hdmJhcl9kaXJlY3RpdmVfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJyk7XG52YXIgbWFsYXJrZXlfZGlyZWN0aXZlXzEgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnKTtcbnZhciBsaXN0aW5nSHR0cFNlcnZpY2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvTGlzdGluZ0h0dHBTZXJ2aWNlL2xpc3RpbmdIdHRwU2VydmljZS5zZXJ2aWNlJyk7XG52YXIgdXNlckh0dHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL1VzZXJIdHRwU2VydmljZS91c2VySHR0cFNlcnZpY2Uuc2VydmljZScpO1xudmFyIG1haW5BcHBTZXJ2aWNlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL01haW5BcHBTZXJ2aWNlL21haW5BcHBTZXJ2aWNlLnNlcnZpY2UnKTtcbnZhciBjb29raWVOYXA7XG4oZnVuY3Rpb24gKGNvb2tpZU5hcCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29va2llTmFwJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0ciddKVxuICAgICAgICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gICAgICAgIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxuICAgICAgICAuY29uZmlnKGluZGV4X2NvbmZpZ18xLmNvbmZpZylcbiAgICAgICAgLmNvbmZpZyhpbmRleF9yb3V0ZV8xLnJvdXRlckNvbmZpZylcbiAgICAgICAgLnJ1bihpbmRleF9ydW5fMS5ydW5CbG9jaylcbiAgICAgICAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgZ2l0aHViQ29udHJpYnV0b3Jfc2VydmljZV8xLkdpdGh1YkNvbnRyaWJ1dG9yKVxuICAgICAgICAuc2VydmljZSgnd2ViRGV2VGVjJywgd2ViRGV2VGVjX3NlcnZpY2VfMS5XZWJEZXZUZWNTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgnbGlzdGluZ0h0dHBTZXJ2aWNlJywgbGlzdGluZ0h0dHBTZXJ2aWNlX3NlcnZpY2VfMS5MaXN0aW5nSHR0cFNlcnZpY2UpXG4gICAgICAgIC5zZXJ2aWNlKCd1c2VySHR0cFNlcnZpY2UnLCB1c2VySHR0cFNlcnZpY2Vfc2VydmljZV8xLlVzZXJIdHRwU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ21haW5BcHBTZXJ2aWNlJywgbWFpbkFwcFNlcnZpY2Vfc2VydmljZV8xLk1haW5BcHBTZXJ2aWNlKVxuICAgICAgICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBtYWluX2NvbnRyb2xsZXJfMS5NYWluQ29udHJvbGxlcilcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1NpZ25JbkNvbnRyb2xsZXInLCBzaWduaW5fY29udHJvbGxlcl8xLlNpZ25JbkNvbnRyb2xsZXIpXG4gICAgICAgIC5jb250cm9sbGVyKCdDcmVhdGVMaXN0aW5nQ29udHJvbGxlcicsIGNyZWF0ZUxpc3RpbmdfY29udHJvbGxlcl8xLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyKVxuICAgICAgICAuY29udHJvbGxlcignSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcicsIGluZGl2aWR1YWxMaXN0aW5nUGFnZV9jb250cm9sbGVyXzEuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlcilcbiAgICAgICAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIG5hdmJhcl9kaXJlY3RpdmVfMS5hY21lTmF2YmFyKVxuICAgICAgICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBtYWxhcmtleV9kaXJlY3RpdmVfMS5hY21lTWFsYXJrZXkpO1xufSkoY29va2llTmFwIHx8IChjb29raWVOYXAgPSB7fSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5jb25maWcuJGluamVjdCA9IFtcIiRsb2dQcm92aWRlclwiLCBcInRvYXN0ckNvbmZpZ1wiXTtcbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAgIC8vIGVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuICAgIC8vIHNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gICAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5yb3V0ZXJDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCIsIFwiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgfSlcbiAgICAgICAgLnN0YXRlKCdzaWduSW4nLCB7XG4gICAgICAgIHVybDogJy9zaWduSW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWduaW4vc2lnbmluLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lnbkluQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3NpZ25JbidcbiAgICB9KVxuICAgICAgICAuc3RhdGUoJ2NyZWF0ZUxpc3RpbmcnLCB7XG4gICAgICAgIHVybDogJy9jcmVhdGVMaXN0aW5nJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjcmVhdGVMaXN0aW5nJ1xuICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnaW5kaXZpZHVhbExpc3RpbmdQYWdlJywge1xuICAgICAgICB1cmw6ICcvaW5kaXZpZHVhbExpc3RpbmdQYWdlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0luZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdpbmRpdmlkdWFsTGlzdGluZydcbiAgICB9KTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5ydW5CbG9jay4kaW5qZWN0ID0gW1wiJGxvZ1wiXTtcbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcbiAgICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4udHNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHFcIiwgXCIkaHR0cFwiLCBcIiRsb2dcIiwgXCIkbG9jYXRpb25cIiwgXCIkdGltZW91dFwiLCBcIndlYkRldlRlY1wiLCBcInRvYXN0clwiLCBcIm1haW5BcHBTZXJ2aWNlXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRxLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIsIG1haW5BcHBTZXJ2aWNlLCBsaXN0aW5nSHR0cFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5saXN0aW5nSHR0cFNlcnZpY2UgPSBsaXN0aW5nSHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLndlYkRldlRlYyA9IHdlYkRldlRlYztcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTUwNjY2NDcyNTg2MDtcbiAgICAgICAgdGhpcy50b2FzdHIgPSB0b2FzdHI7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQpO1xuICAgICAgICB0aGlzLnByb21pc2VzID0gW107XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5nZXRXZWJEZXZUZWMoKTtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfTtcbiAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGUuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5zaWduSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9zaWduSW4nKTtcbiAgICB9O1xuICAgIE1haW5Db250cm9sbGVyLnByb3RvdHlwZS5vcGVuTGlzdGluZyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9IHZhbC5ib29rTGlzdGVkLnRpdGxlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXIgPSB2YWwubGlzdGluZ0NyZWF0b3IudXNlck5hbWU7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nUHJpY2UgPSB2YWwucHJpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nVVJMID0gdmFsLmJvb2tMaXN0ZWQudGh1bWJuYWlsVVJMO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0NvbmRpdGlvbiA9IHZhbC5jb25kaXRpb247XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWwgPSB2YWwubGlzdGluZ0NyZWF0b3IuY29tbXVuaWNhdGlvbkVtYWlsO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ0lkID0gdmFsLmxpc3RpbmdJRDtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24ucGF0aCgnL2luZGl2aWR1YWxMaXN0aW5nUGFnZScpO1xuICAgIH07XG4gICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldFdlYkRldlRlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL0xpc3RpbmdzJylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2VsZi5hbGxCb29rcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYWxsQm9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdMaWtlLW5ldyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuYWxsQm9va3NbaV0uY29uZGl0aW9uID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxCb29rc1tpXS5jb25kaXRpb24gPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEJvb2tzW2ldLmNvbmRpdGlvbiA9ICdVc2FibGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDcmVhdGVMaXN0aW5nQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIuJGluamVjdCA9IFtcIiR3aW5kb3dcIiwgXCIkbG9nXCIsIFwiJGxvY2F0aW9uXCIsIFwibGlzdGluZ0h0dHBTZXJ2aWNlXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxpc3RpbmdIdHRwU2VydmljZSA9IGxpc3RpbmdIdHRwU2VydmljZTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLmlzYm4gPSAnJztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSAnJztcbiAgICB9XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIENyZWF0ZUxpc3RpbmdDb250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmNyZWF0ZUxpc3RpbmcodGhpcy5wcmljZSwgdGhpcy5pc2JuLCB0aGlzLmNvbmRpdGlvbiwgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpO1xuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdZb3UgaGF2ZSBjcmVhdGVkIGEgTGlzdGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kd2luZG93LmFsZXJ0KCdTaWduIGluIHRvIGNyZWF0ZSBMaXN0aW5nJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDcmVhdGVMaXN0aW5nQ29udHJvbGxlcjtcbn0pKCk7XG5leHBvcnRzLkNyZWF0ZUxpc3RpbmdDb250cm9sbGVyID0gQ3JlYXRlTGlzdGluZ0NvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY3JlYXRlTGlzdGluZy9jcmVhdGVMaXN0aW5nLmNvbnRyb2xsZXIudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNpZ25JbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIFNpZ25JbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRxXCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcInVzZXJIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIFNpZ25JbkNvbnRyb2xsZXIoJHEsICRsb2csICRsb2NhdGlvbiwgdXNlckh0dHBTZXJ2aWNlLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgdGhpcy51c2VySHR0cFNlcnZpY2UgPSB1c2VySHR0cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy51bmxFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gJyc7XG4gICAgICAgIHRoaXMub3RoZXJFbWFpbCA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gJyc7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5uZXdVc2VyU2lnblVwQm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRxID0gJHE7XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBTaWduSW5Db250cm9sbGVyLnByb3RvdHlwZS5jcmVhdGVPclNpZ25JblVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm5ld1VzZXJTaWduVXBCb29sZWFuKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJIdHRwU2VydmljZS5jcmVhdGVVc2VyKHRoaXMudW5sRW1haWwsIHRoaXMucGFzc3dvcmQsIHRoaXMub3RoZXJFbWFpbCwgdGhpcy51c2VyTmFtZSwgdGhpcy5maXJzdE5hbWUsIHRoaXMubGFzdE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMudXNlckh0dHBTZXJ2aWNlLnNpZ25Jbih0aGlzLnVzZXJOYW1lLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIGlmICh2YWwgPT0gJ1N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgPSB0aGlzLnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMubGlzdGluZ0h0dHAuZ2V0TGlzdGluZ3MoKTtcbiAgICB9O1xuICAgIHJldHVybiBTaWduSW5Db250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuU2lnbkluQ29udHJvbGxlciA9IFNpZ25JbkNvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2lnbmluL3NpZ25pbi5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkd2luZG93XCIsIFwiJGxvZ1wiLCBcIiRsb2NhdGlvblwiLCBcImxpc3RpbmdIdHRwU2VydmljZVwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXIoJHdpbmRvdywgJGxvZywgJGxvY2F0aW9uLCBsaXN0aW5nSHR0cFNlcnZpY2UsIG1haW5BcHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXJsID0gJyc7XG4gICAgICAgIHRoaXMuZW1haWxBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlID0gbGlzdGluZ0h0dHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm1haW5BcHBTZXJ2aWNlID0gbWFpbkFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIGlmICh0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTCkge1xuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VSTDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvb2tUaXRsZSA9IHRoaXMubWFpbkFwcFNlcnZpY2Uuc2VsZWN0ZWRMaXN0aW5nQm9va05hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1ByaWNlO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ1VzZXI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gdGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdDb25kaXRpb247XG4gICAgICAgIHRoaXMub3duZXJzRW1haWwgPSB0aGlzLm1haW5BcHBTZXJ2aWNlLnNlbGVjdGVkTGlzdGluZ093bmVyc0VtYWlsO1xuICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyLnByb3RvdHlwZS50b2dnbGVFbWFpbEF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hbGVydCgnU2lnbiBpbiB0byBzZWUgZW1haWwnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlci5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlciA9PT0gdGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGluZ0h0dHBTZXJ2aWNlLmRlbGV0ZUxpc3RpbmcodGhpcy5tYWluQXBwU2VydmljZS5zZWxlY3RlZExpc3RpbmdJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbmRpdmlkdWFsTGlzdGluZ1BhZ2VDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuSW5kaXZpZHVhbExpc3RpbmdQYWdlQ29udHJvbGxlciA9IEluZGl2aWR1YWxMaXN0aW5nUGFnZUNvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaW5kaXZpZHVhbExpc3RpbmdQYWdlL2luZGl2aWR1YWxMaXN0aW5nUGFnZS5jb250cm9sbGVyLnRzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBHaXRodWJDb250cmlidXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIEdpdGh1YkNvbnRyaWJ1dG9yLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIl07XG4gICAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3IoJGxvZywgJGh0dHApIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgICB9XG4gICAgR2l0aHViQ29udHJpYnV0b3IucHJvdG90eXBlLmdldENvbnRyaWJ1dG9ycyA9IGZ1bmN0aW9uIChsaW1pdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IDMwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBHaXRodWJDb250cmlidXRvcjtcbn0pKCk7XG5leHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yID0gR2l0aHViQ29udHJpYnV0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcbiAgICAgICAgdmFyIHJhd0RhdGEgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbmd1bGFyIFVJIEJvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBjb21wb25lbnRzIHdyaXR0ZW4gaW4gcHVyZSBBbmd1bGFySlMgYnkgdGhlIEFuZ3VsYXJVSSBUZWFtLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAndWktYm9vdHN0cmFwLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1R5cGVTY3JpcHQnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHlwZVNjcmlwdCwgYSB0eXBlZCBzdXBlcnNldCBvZiBKYXZhU2NyaXB0IHRoYXQgY29tcGlsZXMgdG8gcGxhaW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3R5cGVzY3JpcHQucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmRhdGEgPSByYXdEYXRhLm1hcChmdW5jdGlvbiAoYXdlc29tZVRoaW5nKSB7XG4gICAgICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICByZXR1cm4gYXdlc29tZVRoaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdlYkRldlRlY1NlcnZpY2UucHJvdG90eXBlLCBcInRlY1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFdlYkRldlRlY1NlcnZpY2U7XG59KSgpO1xuZXhwb3J0cy5XZWJEZXZUZWNTZXJ2aWNlID0gV2ViRGV2VGVjU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBhY21lTmF2YmFyKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG59XG5leHBvcnRzLmFjbWVOYXZiYXIgPSBhY21lTmF2YmFyO1xuLyoqIEBuZ0luamVjdCAqL1xudmFyIE5hdmJhckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIE5hdmJhckNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRsb2dcIiwgXCJtb21lbnRcIiwgXCJtYWluQXBwU2VydmljZVwiXTtcbiAgICBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKCRsb2csIG1vbWVudCwgbWFpbkFwcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICBpZiAodGhpcy5tYWluQXBwU2VydmljZS5jdXJyZW50VXNlck5hbWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudmFsID0gJ1dlbGNvbWUgJyArIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOYXZiYXJDb250cm9sbGVyO1xufSkoKTtcbmV4cG9ydHMuTmF2YmFyQ29udHJvbGxlciA9IE5hdmJhckNvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS50c1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBuZ0luamVjdCAqL1xuYWNtZU1hbGFya2V5LiRpbmplY3QgPSBbXCJtYWxhcmtleVwiXTtcbmZ1bmN0aW9uIGFjbWVNYWxhcmtleShtYWxhcmtleSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICAgICAgbGluazogbGlua0Z1bmMsXG4gICAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfTtcbn1cbmV4cG9ydHMuYWNtZU1hbGFya2V5ID0gYWNtZU1hbGFya2V5O1xuZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIHZhciB3YXRjaGVyO1xuICAgIHZhciB0eXBpc3QgPSB2bS5tYWxhcmtleShlbFswXSwge1xuICAgICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL3dhdGNoZXIoKTtcbiAgICB9KTtcbn1cbi8qKiBAbmdJbmplY3QgKi9cbnZhciBNYWxhcmtleUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIE1hbGFya2V5Q29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGxvZ1wiLCBcImdpdGh1YkNvbnRyaWJ1dG9yXCIsIFwibWFsYXJrZXlcIl07XG4gICAgZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yLCBtYWxhcmtleSkge1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLmdpdGh1YkNvbnRyaWJ1dG9yID0gZ2l0aHViQ29udHJpYnV0b3I7XG4gICAgICAgIHRoaXMubWFsYXJrZXkgPSBtYWxhcmtleTtcbiAgICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBNYWxhcmtleUNvbnRyb2xsZXIucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNYWxhcmtleUNvbnRyb2xsZXIucHJvdG90eXBlLmdldENvbnRyaWJ1dG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29udHJpYnV0b3JzO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBNYWxhcmtleUNvbnRyb2xsZXI7XG59KSgpO1xuZXhwb3J0cy5NYWxhcmtleUNvbnRyb2xsZXIgPSBNYWxhcmtleUNvbnRyb2xsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUudHNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0aW5nSHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UuJGluamVjdCA9IFtcIiRsb2dcIiwgXCIkaHR0cFwiLCBcIm1haW5BcHBTZXJ2aWNlXCJdO1xuICAgIGZ1bmN0aW9uIExpc3RpbmdIdHRwU2VydmljZSgkbG9nLCAkaHR0cCwgbWFpbkFwcFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDEnO1xuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UgPSBtYWluQXBwU2VydmljZTtcbiAgICB9XG4gICAgTGlzdGluZ0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVMaXN0aW5nID0gZnVuY3Rpb24gKHByaWNlLCBpc2JuLCBjb25kaXRpb24sIHVzZXJOYW1lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvTGlzdGluZ3MvQ3JlYXRlJywge1xuICAgICAgICAgICAgXCJQcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgIFwiQ29uZGl0aW9uXCI6IGNvbmRpdGlvbixcbiAgICAgICAgICAgIFwiSVNCTlwiOiBpc2JuLFxuICAgICAgICAgICAgXCJMaXN0aW5nVHlwZVwiOiAnU2VsbGluZycsXG4gICAgICAgICAgICBcIkxpc3RpbmdDcmVhdG9yVXNlck5hbWVcIjogdXNlck5hbWVcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicsIGVycm9yLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0QWxsTGlzdGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDEvTGlzdGluZ3MnKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nLCBlcnJvci5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMaXN0aW5nSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldExpc3RpbmdCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLnVybCArJy9MaXN0aW5ncy9EZXRhaWxzLycgKyBpZClcbiAgICAgICAgLy8gLnRoZW4oKHJlc3BvbnNlOiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICAvLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAvLyB9KTtcbiAgICB9O1xuICAgIExpc3RpbmdIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlTGlzdGluZyA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL0xpc3RpbmdzL0RlbGV0ZS8nICsgaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIExpc3RpbmdIdHRwU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLkxpc3RpbmdIdHRwU2VydmljZSA9IExpc3RpbmdIdHRwU2VydmljZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL0xpc3RpbmdIdHRwU2VydmljZS9saXN0aW5nSHR0cFNlcnZpY2Uuc2VydmljZS50c1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVzZXJIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIFVzZXJIdHRwU2VydmljZS4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRsb2NhdGlvblwiLCBcIiRxXCIsIFwiJGxvZ1wiLCBcIiRodHRwXCIsIFwibWFpbkFwcFNlcnZpY2VcIl07XG4gICAgZnVuY3Rpb24gVXNlckh0dHBTZXJ2aWNlKCR3aW5kb3csICRsb2NhdGlvbiwgJHEsICRsb2csICRodHRwLCBtYWluQXBwU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMudXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMSc7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuJHEgPSAkcTtcbiAgICAgICAgdGhpcy5tYWluQXBwU2VydmljZSA9IG1haW5BcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlVmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgfVxuICAgIFVzZXJIdHRwU2VydmljZS5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKHVzZXJOYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCh0aGlzLnVybCArICcvVXNlcnMvTG9naW4nLCB7IFwiVXNlck5hbWVcIjogdXNlck5hbWUsIFwiUGFzc3dvcmRcIjogcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT0gdXNlck5hbWUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNpZ25JblVzZXIodXNlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLiRsb2cubG9nKFwiRmFpbFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlVmFsO1xuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKHVubEVtYWlsLCBwYXNzd29yZCwgb3RoZXJFbWFpbCwgdXNlck5hbWUsIGZpcnN0TmFtZSwgbGFzdE5hbWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9Vc2Vycy9DcmVhdGUnLCB7XG4gICAgICAgICAgICAnVXNlck5hbWUnOiB1c2VyTmFtZSxcbiAgICAgICAgICAgICdGaXJzdE5hbWUnOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAnTGFzdE5hbWUnOiBsYXN0TmFtZSxcbiAgICAgICAgICAgICdIdXNrZXJFbWFpbCc6IHVubEVtYWlsLFxuICAgICAgICAgICAgJ0NvbW11bmljYXRpb25FbWFpbCc6IG90aGVyRW1haWwsXG4gICAgICAgICAgICAnUGFzc3dvcmQnOiBwYXNzd29yZFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT0gXCJTdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNpZ25JblVzZXIodXNlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIlVzZXJuYW1lRmFpbFwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kd2luZG93LmFsZXJ0KCdUaGlzIFVzZXJuYW1lIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PSBcIkVtYWlsRmFpbFwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kd2luZG93LmFsZXJ0KCdUaGlzIEVtYWlsIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kd2luZG93LmFsZXJ0KCdZb3UgZmFpbGVkIHRvIHNpZ24gdXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VWYWw7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVXNlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5zaWduSW5Vc2VyID0gZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMubWFpbkFwcFNlcnZpY2UuY3VycmVudFVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICB9O1xuICAgIHJldHVybiBVc2VySHR0cFNlcnZpY2U7XG59KSgpO1xuZXhwb3J0cy5Vc2VySHR0cFNlcnZpY2UgPSBVc2VySHR0cFNlcnZpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VySHR0cFNlcnZpY2UvdXNlckh0dHBTZXJ2aWNlLnNlcnZpY2UudHNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYWluQXBwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBuZ0luamVjdCAqL1xuICAgIE1haW5BcHBTZXJ2aWNlLiRpbmplY3QgPSBbXCIkbG9nXCIsIFwiJGh0dHBcIl07XG4gICAgZnVuY3Rpb24gTWFpbkFwcFNlcnZpY2UoJGxvZywgJGh0dHApIHtcbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL2xvY2FsaG9zdDozMDAwJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdCb29rTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdGluZ1VzZXIgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdQcmljZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nQ29uZGl0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nVVJMID0gJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0aW5nT3duZXJzRW1haWwgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3RpbmdJZCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBNYWluQXBwU2VydmljZTtcbn0pKCk7XG5leHBvcnRzLk1haW5BcHBTZXJ2aWNlID0gTWFpbkFwcFNlcnZpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9NYWluQXBwU2VydmljZS9tYWluQXBwU2VydmljZS5zZXJ2aWNlLnRzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9