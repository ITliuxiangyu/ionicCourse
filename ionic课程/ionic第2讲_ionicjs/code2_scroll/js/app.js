/**
 * Created by qingyun on 16/11/23.
 */
angular.module('myApp',['ionic']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'home.html',
        controller:'homeController'
    });
    $urlRouterProvider.otherwise('home');
}]).controller('homeController',['$scope','$ionicScrollDelegate','$timeout',function ($scope,$ionicScrollDelegate,$timeout) {
    $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop();
    };
    $scope.numArray = [1];
    // $timeout(function () {
    //     $scope.numArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    // },1000);
    $scope.doSome = function () {
        console.log('111');
    };
    $scope.endDoSome = function () {
        console.log('完成');
    }
}]);