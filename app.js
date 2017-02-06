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
        var newMsg = constructMessage($scope.food);
        $scope.msg = newMsg;
      }

      function constructMessage(string)
        if (string == "") {
          alert("Please enter data first");
          return "";
        }
        var arrayOfItems = string.split(",");
        if(arrayOfItems.length > 3) {
          return "This is too much";
        } else {
          retrun = "Enjoy";
        }

      };

    }

})();
