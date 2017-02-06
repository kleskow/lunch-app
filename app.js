(
  function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller("LunchCheckController", LaunchCheckFunction);

    LaunchCheckFunction.$inject= ['$scope'];
    function LaunchCheckFunction($scope){
      $scope.food = "";
      $scope.msg = "";

      $scope.sayMessage = function () {
        if ($scope.food == "") {
          alert("Please enter data first");
          $scope.msg = "";
          return;
        }
        var arrayOfItems = $scope.food.split(",");
        if(arrayOfItems.length > 3) {
          $scope.msg = "This is too much";
        } else {
          $scope.msg = "Enjoy";
        }

      };

    }

})();
