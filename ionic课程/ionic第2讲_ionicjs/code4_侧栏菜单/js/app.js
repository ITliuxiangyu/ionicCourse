/**
 * Created by qingyun on 16/11/23.
 */
angular.module('myApp',['ionic']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('menu',{
        url:'/menu',
        abstract: true,
        templateUrl:'menu.html',
        controller:'menuController'
    }).state('menu.home',{
        url:'/home',
        views:{
            'menu-home':{
                templateUrl:'home.html',
                controller:'homeController'
            }
        }
    }).state('menu.homeDetail',{
        url:'/homeDetail',
        views:{
            'menu-home':{
                templateUrl:'homeDetail.html'
            }
        }
    }).state('menu.other',{
        url:'/other',
        views:{
            'menu-other':{
                templateUrl:'other.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/menu/home');

}]).controller('menuController',['$scope','$ionicTabsDelegate','$state',function ($scope,$ionicTabsDelegate,$state) {
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


}]).controller('homeController',['$scope','$ionicSideMenuDelegate','$state',function ($scope,$ionicSideMenuDelegate,$state) {
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.$getByHandle('myMenus').toggleLeft();
    };
    $scope.goToHomeDetail = function () {
        $state.go('menu.homeDetail');
    };
}]);