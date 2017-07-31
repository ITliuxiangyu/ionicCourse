/**
 * Created by qingyun on 16/11/23.
 */
angular.module('myApp',['ionic','ionic.rating','chart.js']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
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

}]).controller('homeController',['$scope',function ($scope) {

    $scope.rating = {};//设置星星对象
    $scope.rating.rate = 2;//设置星星的初始值
    $scope.rating.max = 5;//设置星星的最大值


    $scope.pieData = [300, 500, 100];
    $scope.labels = ["计划", "预期", "完成"];
    $scope.data = [300, 500, 100];
    $scope.options = {legend:{display:true}};


    $scope.labels1 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
}]);