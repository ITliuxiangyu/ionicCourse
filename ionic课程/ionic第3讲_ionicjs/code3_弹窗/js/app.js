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

}]).controller('homeController',['$scope','$timeout','$ionicPopup','$ionicLoading',function ($scope,$timeout,$ionicPopup,$ionicLoading) {

    // 触发一个按钮点击，或一些其他目标
    $scope.showPopup = function() {
        $scope.data = {};

        // 一个精心制作的自定义弹窗
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: 'Enter Wi-Fi Password',
            subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
                { text: 'Cancel' },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.wifi) {
                            //不允许用户关闭，除非他键入wifi密码
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                },
            ]
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); //由于某种原因3秒后关闭弹出
        }, 3000);
    };
    // 一个确认对话框
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };

    // 一个提示对话框
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Don\'t eat that!',
            template: 'It might taste good'
        });
        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
    //
    $scope.showPrompt = function () {
        $ionicPopup.prompt({
            title: 'Password Check',
            template: 'Enter your secret password',
            inputType: 'password',
            inputPlaceholder: 'Your password'
        }).then(function(res) {
            console.log('Your password is', res);
        });
    };
    $scope.show = function() {
        $ionicLoading.show({
            template: "<ion-spinner icon='spiral' class='spinner-light'></ion-spinner>"
            + "<div>"+ '加载中...' +"</div>",
            noBackdrop: true,
            delay:"1000",
            duration:'1000'
        });
        // $timeout(function () {
        //     $ionicLoading.hide();
        // },2000);
    };
    $scope.hide = function(){
        $ionicLoading.hide();
    };

}]);