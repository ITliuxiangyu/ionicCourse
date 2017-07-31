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



}]).controller('homeController',['$scope','$ionicNavBarDelegate','$state','$ionicListDelegate','$ionicSlideBoxDelegate',function ($scope,$ionicNavBarDelegate,$state,$ionicListDelegate,$ionicSlideBoxDelegate) {
    $scope.slideHasChanged = function (index) {
        console.log(index)
    };
    $scope.clickTheSlideBox = function (index) {
        console.log("点击了" + index);
    };
    $scope.doSome = 1;

    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.$getByHandle('mySlideBox').next();
        // $ionicSlideBoxDelegate.update();
        // $ionicSlideBoxDelegate.slide(1,2000);
        // $ionicSlideBoxDelegate.enableSlide(false);
        // $ionicSlideBoxDelegate.previous();
        // $ionicSlideBoxDelegate.stop();
        // console.log($ionicSlideBoxDelegate.currentIndex());
        // console.log($ionicSlideBoxDelegate.slidesCount());

    }

}]);