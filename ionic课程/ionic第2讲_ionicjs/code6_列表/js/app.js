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
                // controller:'homeController'
            }
        }
    }).state('tabs.homeDetail',{
        url:'/homeDetail',
        views:{
            'tab-home':{
                templateUrl:'homeDetail.html'
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
        // console.log('选中home');
    };
    $scope.unSelectTab = function () {
        console.log('取消选中home');
    };
    $scope.doSelect = function () {
        // console.log('点击了home');
        // $ionicTabsDelegate.select(0,{shouldChangeHistory:true})
        $ionicTabsDelegate.$getByHandle('myTabs').select(0);
    };



}]).controller('homeController',['$scope','$ionicNavBarDelegate','$state','$ionicListDelegate',function ($scope,$ionicNavBarDelegate,$state,$ionicListDelegate) {

    $scope.items = [];
    for (var i = 0; i < 3000; i++) {
        $scope.items.push('Item ' + i);
    }

    $scope.getItemHeight = function(item, index) {
        //使索引项平均都有10px高，例如
        return (index % 2) === 0 ? '100px' : '100px';
    };
    $scope.share = function (item) {
        console.log(item);
    };
    $scope.edit = function (item) {

        console.log("编辑了" + item);
    };
    $scope.reorderItem = function(item, fromIndex, toIndex) {
        //把该项移动到数组中
        $scope.items.splice(fromIndex, 1);
        $scope.items.splice(toIndex, 0, item);
    };
    $scope.listDelegateDoSome = function() {
        $ionicListDelegate.$getByHandle('myList').showDelete(true);
        // $ionicListDelegate.showReorder(true);
        // $ionicListDelegate.canSwipeItems(true);
    };
}]).controller('homeDetailController',['$scope','$ionicNavBarDelegate','$state',function ($scope,$ionicNavBarDelegate,$state) {

}]);