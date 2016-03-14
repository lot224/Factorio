/**
 * @ngdoc config
 * @name applicationConfig
 * @description The configuration function that gets initiated before the application starts
 */
var applicationConfig = ['$routeProvider',  function ($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/home' })

  console.log('config hit again?');
}];