/**
 * @ngdoc module
 * @name applicationModule
 * @description the angular module for the application
 */
angular.module("applicationModule", ['ngAnimate', 'ngRoute', 'ngSanitize'])
  .controller("applicationController", applicationController)
  .config(applicationConfig)