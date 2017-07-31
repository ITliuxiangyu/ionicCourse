/**
 * Created by qingyun on 16/11/23.
 */
angular.module('myApp',['ionic']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('tabs',{
        url:'/tabs',
        templateUrl:'tabs.html',
        controller:'tabController'
    }).state('tabs.home',{
        url:'/home',
        views:{
            'tab-home':{
                templateUrl:'home.html',
                controller:'homeController'
            }
        }
    }).state('tabs.other',{
        url:'/other',
        views:{
            'tab-other':{
                templateUrl:'other.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/tabs/home');

}]).controller('tabController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {
    $scope.selectTab = function () {
        console.log('选中home');
    };
    $scope.unSelectTab = function () {
        console.log('取消选中home');
    };
    $scope.doSelect = function () {
        console.log('点击了home');
        // $ionicTabsDelegate.select(0,{shouldChangeHistory:true})
        $ionicTabsDelegate.$getByHandle('myTabs').select(0);
    }
}]).controller('homeController',['$scope',function ($scope) {

}]);