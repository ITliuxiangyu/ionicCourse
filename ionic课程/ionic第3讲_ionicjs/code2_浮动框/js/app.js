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

}]).controller('homeController',['$scope','$timeout','$ionicPopover',function ($scope,$timeout,$ionicPopover) {

    // .fromTemplateUrl() 方法
    $ionicPopover.fromTemplateUrl('my-popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    // 清除浮动框
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
    // 在隐藏浮动框后执行
    $scope.$on('popover.hidden', function() {
        // 执行代码
        console.log('popover.hidden');
    });
    // 移除浮动框后执行
    $scope.$on('popover.removed', function() {
        // 执行代码
        console.log('popover.removed');
    });

}]);
