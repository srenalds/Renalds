var app = angular.module('Renalds', ['ngMaterial','ngRoute']);
app.config(['$routeProvider','$locationProvider',
  function ($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/Summary.html',
        controller: 'RenaldsController'
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

app.controller('ExperienceController', ['$scope', function($scope) {
  $scope.experience = [
    {
      start : '07/08',
      end : 'Present',
      role : 'Team Lead & Lead Database Engineer',
      client : { 'name' : 'Accenture', 'url' : 'http://www.accenturefederal.com' },
      environment : 'Oracle 11gR2 (11.2.0.4) Grid Infrastructure, Oracle Database 11gR2, Oracle Enterprise Manager 12c, RHEL 6, NetApp',
      location : 'Ashburn, VA',
      excerpt : 'Led Team of 19 Database Administrators.  Lead Database Engineer for Transitional DataCenter project.',
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '05/12',
      end : '12/12',
      role : 'Consultant, Subject Matter Expert',
      client : { 'name' : 'Qinetiq NA (now Vencore)', 'url' : 'http://www.vencore.com' },
      environment : 'Oracle 11gR2 (11.2.0.3), RHEL 6, EMC',
      location : 'Washington, DC',
      excerpt : 'Consultant, Database Architect for Oracle 11gR2 Upgrades and Data Migration',
      content : '<ul><li>1</li><li>2</li>'
    },
  ];
}]);
