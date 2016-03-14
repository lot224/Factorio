/**
 * @ngdoc module
 * @name page1Module piggybacks off of applicationModule
 * @description the angular module for the application
 */
angular.module("applicationModule", ['page1.templates'])
  .controller("page1Controller", page1Controller)
  .config(page1Config)
//angular.module("applicationModule", ['page1Module']);