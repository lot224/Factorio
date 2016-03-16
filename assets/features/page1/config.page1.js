
var page1Config = ['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/);

  $routeProvider.when('/page1', { templateUrl: 'template.page1.html', controller: page1Controller });
}];