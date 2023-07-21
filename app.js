(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchMenu = "";
      $scope.message = "";
  
      $scope.checkLunch = function () {
        var lunchItems = $scope.lunchMenu.split(',');
  
        if ($scope.lunchMenu.trim() === "") {
          $scope.message = "Please enter data first";
        } else if (lunchItems.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      };
    }
  
  })();
  