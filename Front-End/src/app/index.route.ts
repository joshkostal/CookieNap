/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
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
