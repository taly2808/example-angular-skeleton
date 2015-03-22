var app = angular.module('exampleApp', []);


// controller
app.controller('ExampleCtrl', ['$scope', function($scope) {
  $scope.display =false;

  $scope.showIcon = function() {
    $scope.display = true;
  }

}]);
