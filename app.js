var happyCamper = angular.module('happyCamper', []);


happyCamper.controller('camperController', function($scope){
    $scope.create = function(camper, isValid){
      if (isValid){
        $scope.camperCard = angular.copy(camper);
        $scope.showCard = true;
        angular.element(".card").addClass("animate flipInX");
        angular.element("button").addClass("animate slideOutDown");

      };
    };
  });