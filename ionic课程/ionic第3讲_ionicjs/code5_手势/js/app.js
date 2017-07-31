/**
 * Created by qingyun on 16/11/23.
 */
angular.module('myApp',['ionic']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    // $ionicConfigProvider.views.maxCache(0);
    // $ionicConfigProvider.templates.maxPrefetch(0);
    $stateProvider.state('tabs',{
        url:'/tabs',
        templateUrl:'tabs.html'
    }).state('tabs.home',{
        url:'/home',
        views:{
            'tab-home':{
                templateUrl:'home.html',
                controller:'homeController'
            }
        }
    });
    $urlRouterProvider.otherwise('/tabs/home');

}]).controller('homeController',['$scope','$timeout','$ionicPopup','$ionicGesture',function ($scope,$timeout,$ionicPopup,$ionicGesture) {
    $scope.onHold = function () {
        console.log('长按');
    };
    var homeContent = document.getElementById('homeContent');
    // var homeContent = angular.element(document.getElementById('homeContent'));
    var a = $ionicGesture.on('swipeup',function () {
        console.log('tap');
    },angular.element(homeContent));//这里必须使用angular元素
    // var a = ionic.onGesture('tap',function (e) {
    //     console.log('hold');
    //     // console.dir(e);
    // },homeContent);//这里必须用原生dom

    $timeout(function () {
        console.log(a);
        // ionic.trigger('hold',{target: homeContent},{bubbles:true},{cancelable:true});
        // console.dir(homeContent);
        ionic.off('swipeup',function (e) {
            console.log(e);
        },homeContent);
    },1000)

}]);