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

}]).controller('homeController',['$scope','$timeout','$http',function ($scope,$timeout,$http) {
    var myUrl = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-10.html';
    var url = 'http://localhost:3000/?myUrl=' + myUrl;
    $scope.home = {
        items:[],
        isShowInfinite:true
    };
    $scope.beginPull = function () {
        console.log('开始下拉!');
    };
    $scope.doRefresh = function () {

        $http({
            url:url,
            method:'GET',
            timeout:20000
        }).then(function (result) {
            result = result.data;
            $scope.home.items = $scope.home.items.concat(result.T1348647853363);
            //停止广播
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$broadcast('scroll.infiniteScrollComplete');
        })
    };
    $scope.loadMore = function () {
        console.log(111);
        $scope.doRefresh();
    };
    // $scope.$on('stateChangeSuccess', function() {
    //     $scope.loadMore();
    // });

}]);