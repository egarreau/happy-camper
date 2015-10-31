var happyCamper = angular.module('happyCamper', ['ngMessages']);


happyCamper.controller('camperController', function($scope){
    $scope.create = function(camper, isValid){
      if (isValid){
        $scope.camperCard = angular.copy(camper);
        $scope.camperAdded = true;
      }
      else{
        $scope.tryAgain = true;
      };
    };
  });