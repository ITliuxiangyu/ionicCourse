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

}]).controller('homeController',['$scope','$ionicModal','$ionicActionSheet',function ($scope,$ionicModal,$ionicActionSheet) {

    $ionicModal.fromTemplateUrl('modal.html', {
        scope: $scope,
        animation: 'slide-in-left'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //当我们用到模型时，清除它！
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // 当隐藏的模型时执行动作
    $scope.$on('modal.hide', function() {
        // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function() {
        // 执行动作
    });


    //操作表
    // 点击按钮触发，或一些其他的触发条件
    $scope.show = function() {

        // 显示操作表
        $ionicActionSheet.show({
            buttons: [
                {text: '<b>分享</b>'},
                {text: '移动'},
            ],
            destructiveText: '删除',
            titleText: '请选择操作!',
            cancelText: '取消',
            buttonClicked: function (index) {
                    console.log(index);
                return true;
            },
            destructiveButtonClicked:function () {
                console.log('点击了删除!');
            }
        });
    };

}]);