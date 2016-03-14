
var page1Config = ['$routeProvider', function ($routeProvider) {

  console.log('config hit');

  $routeProvider.when('/berger', { templateUrl: 'template.page1.html', controller: page1Controller });
}];