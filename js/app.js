var app = angular.module('Renalds', ['ngMaterial','ngSanitize','ngRoute','firebase']);
app.config(['$routeProvider','$locationProvider',
  function ($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/Summary.html',
        controller: 'RenaldsController'
    }).
      when('/WorkHistory', {
        templateUrl: 'partials/WorkHistory.html',
        controller: 'DataController'
    }).
      otherwise({
        redirectTo: '/'
    });
  }
]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('blue-grey');
});

app.controller('RenaldsController', ['$scope', '$mdSidenav', '$mdDialog', '$location', function($scope, $mdSidenav, $mdDialog, $location){
  $scope.lockLeft = true;
  $scope.toggleLeft = function() {
    if ($mdSidenav('left').isOpen()) {
      $mdSidenav('left').close();
      $scope.lockLeft = false;
    } else {
      $mdSidenav('left').toggle();
      $scope.lockLeft = true;
    };
  };

  $scope.showDialog = function(ev,title) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .title(title)
        .content('This information will be made available upon request based on project requirements and need to know.')
        .ariaLabel(title)
        .ok('Thank you!')
        .targetEvent(ev)
    );
  };

  $scope.showAgency = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .title('Agency Information')
        .content('This information will be made available upon request based on project requirements and need to know.')
        .ariaLabel('Clearance Information')
        .ok('Thank you!')
        .targetEvent(ev)
    );
  };

  $scope.setRoute = function(route) {
    $location.path(route);
  };
}]);

app.controller('DataController', ['$scope', '$firebaseObject', function($scope,$firebaseObject) {
  var url = "https://luminous-heat-7455.firebaseio.com";
  var ref = new Firebase(url);
  $scope.data = $firebaseObject(ref);
}]);
