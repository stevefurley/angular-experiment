/**
* AngularJS Tutorial 1
* @author Nick Kaye <nick.c.kaye@gmail.com>
*/

/**
* Main AngularJS Web Application
*/
var app = angular.module('tutorialWebApp', [
  'ngRoute', 'ngTouch', 'ngAnimate', 'scrollSpyModule', 'countUpModule'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  // Home
  .when("/", {
    templateUrl: "partials/slide1.html",
    controller: "PageCtrl",
    activetab: "slide1"
  })
  // Pages
  .when("/slide1", {
    templateUrl: "partials/slide1.html",
    controller: "PageCtrl",
    activetab: "slide1"
  })
  .when("/slide2", {
    templateUrl: "partials/slide2.html",
    controller: "PageCtrl",
    activetab: "slide2"
  })
  .when("/slide3", {
    templateUrl: "partials/slide3.html",
    controller: "PageCtrl",
    activetab: "slide3"
  })
  .when("/slide4", {
    templateUrl: "partials/slide4.html",
    controller: "PageCtrl",
    activetab: "slide4"
  })
  .when("/slide5", {
    templateUrl: "partials/slide5.html",
    controller: "PageCtrl",
    activetab: "slide5"
  })
  .when("/slide6", {
    templateUrl: "partials/slide6.html",
    controller: "PageCtrl",
    activetab: "slide6"
  });



  $locationProvider.html5Mode(true);
}]).run(function ($rootScope, $route) {
  $rootScope.$route = $route;
});

app.controller('PageCtrl', function($scope, $rootScope, $location) {
  $scope.myUrl = $location.path();
  var $before;


  $scope.clicking = function(id) {
    //  console.log($location);
    $before = $location.path().slice(-1);
    if(id >= $before || $before == '/') {
      $rootScope.slideDir = 'swipe-left-button';
    } else {
      $rootScope.slideDir = 'swipe-right-button';
    }
  };

  $scope.swipeLeft = function() {
    $rootScope.slideDir = 'swipe-left-button';

    $before = $location.path().slice(-1);
    $prevSlide = Number($before) + 1;
    if($before == '/') {
      $location.path('slide2');
    } else if($before < 6) {
      $location.path('slide' + $prevSlide);
    } else {
      $location.path('slide1');
    }
  };

  $scope.swipeRight = function() {
    $rootScope.slideDir = 'swipe-right-button';
    $before = $location.path().slice(-1);

    $nextSlide = Number($before) - 1;
    if($before != '/' && $before > '1' ) {
      $location.path('slide' + $nextSlide);
    } else {
      $location.path('slide1');
    }
  };




});





console.log('yeah');
