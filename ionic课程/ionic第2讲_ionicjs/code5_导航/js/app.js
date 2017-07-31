/**
 * Created by qingyun on 16/11/23.
 */
angular.module('myApp',['ionic']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    // $ionicConfigProvider.views.maxCache(0);
    // $ionicConfigProvider.templates.maxPrefetch(0);
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
    }).state('tabs.homeDetail',{
        url:'/homeDetail',
        views:{
            'tab-home':{
                templateUrl:'homeDetail.html',
                controller:'homeDetailController'
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

}]).controller('tabController',['$scope','$ionicTabsDelegate','$state',function ($scope,$ionicTabsDelegate,$state) {
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
    };



}]).controller('homeController',['$scope','$ionicNavBarDelegate','$state',function ($scope,$ionicNavBarDelegate,$state) {
    /*我们可以使用代理获取到导航的句柄来管理导航*/
    $scope.goToHomeDetail = function () {
        $state.go('tabs.homeDetail');
    };
    $scope.changeNavBar = function () {
        // $ionicNavBarDelegate.$getByHandle('myNavBar').setTitle('哈哈');
        // $ionicNavBarDelegate.$getByHandle('myNavBar').align('left');
        // $ionicNavBarDelegate.$getByHandle('myNavBar').showBar(false);
        // $ionicNavBarDelegate.$getByHandle('myNavBar').changeTitle('1111','forward');

    }
}]).controller('homeDetailController',['$scope','$ionicNavBarDelegate','$state',function ($scope,$ionicNavBarDelegate,$state) {
    $scope.formNavBarBack = function () {
        // $ionicNavBarDelegate.$getByHandle('myNavBar').back();
        // $ionicNavBarDelegate.$getByHandle('myNavBar').showBackButton(false);

    }
}]);