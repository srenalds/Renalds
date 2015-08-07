var app = angular.module('Renalds', ['ngMaterial','ngRoute']);
app.config(['$routeProvider','$locationProvider',
  function ($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/Summary.html',
        controller: 'RenaldsController'
    }).
      when('/WorkHistory', {
        templateUrl: 'partials/WorkHistory.html',
        controller: 'ExperienceController'
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

app.controller('SideNavController', ['$scope', function($scope) {
  $scope.data = [{ 
    "subhead" : "Oracle Experience",
    "lines" : [
      {
      "left" : "Oracle Database",
      "right" : "(> 20 years)"
      },
      {
      "left" : "Database Administration",
      "right" : "(> 16 years)"
      },
      {
      "left" : "Database Development",
      "right" : "(> 16 years)"
      },
      {
      "left" : "Production Operations",
      "right" : "(> 9 years)"
      },
      {
      "left" : "Disaster Recovery",
      "right" : "(> 9 years)"
      },
      {
      "left" : "Performance/SQL Tuning",
      "right" : "(> 12 years)"
      },
      {
      "left" : "Oracle Enterprise Manager",
      "right" : "(> 7 years)"
      }
    ]},
  {
    "subhead" : "Roles (last 5 years)",
    "lines" : [
      {
        "left" : "Database Team Lead",
        "right" : "(19 DBAs)",
      },
      {
        "left" : "Engineering Lead",
        "right" : "",
      },
      {
        "left" : "Subject Matter Expert",
        "right" : ""
      }
    ]},
  {
    "subhead" : "Experience (last 5 years)",
    "lines" : [
      {
        "left" : "Oracle Database",
        "right" : "10g,11g,11gR2,12c"
      },
      {
        "left" : "Oracle Grid Infrastructure (GI)",
        "right" : "11gR2,12c"
      },
      {
        "left" : "Real Application Clusters (RAC)",
        "right" : "10gR2,11g"
      },
      {
        "left" : "Automatic Storage Management (ASM)",
        "right" : "10gR2,11g"
      },
      {
        "left" : "Oracle Enterprise Manager (OEM)",
        "right" : "11g,12c"
      },
      {
        "left" : "GoldenGate Replication",
        "right" : "11g2"
      },
      {
        "left" : "RedHat Linux",
        "right" : ""
      },
      {
        "left" : "Oracle Solaris",
        "right" : ""
      },
      {
        "left" : "Database Backup/Recovery",
        "right" : ""
      },
      {
        "left" : "Cluster/DB/OEM Upgrades",
        "right" : ""
      },
      {
        "left" : "Cluster/DB/OEM Patching",
        "right" : ""
      },
      {
        "left" : "DataGuard",
        "right" : ""
      },
      {
        "left" : "Bash/Python Scripting",
        "right" : ""
      },
      {
        "left" : "Puppet Module Development",
        "right" : ""
      }
    ]},
  {
    "subhead" : "Other Projects (last 5 years)",
    "lines" : [
      {
        "left" : "Automation Project using Puppet",
        "right" : ""
      },
      {
        "left" : "OpenStack - Grizzly",
        "right" : ""
      },
      {
        "left" : "Tornado WebFramework",
        "right" : ""
      },
      {
        "left" : "Python API for Openstack",
        "right" : ""
      },
      {
        "left" : "AngularJS with Material Design",
        "right" : ""
      }
    ]},
  {
    "subhead" : "Education & Certifications",
    "lines" : [
      {
        "left" : "BS Decision Sciences/MIS, George Mason University",
        "right" : ""
      },
      {
        "left" : "Unix/C Certification, George Washington University",
        "right" : ""
      },
      {
        "left" : "CompTIA Security+ Certification",
        "right" : ""
      }
    ]}
  ];
}]);

app.controller('ExperienceController', ['$scope','$location', function($scope, $location) {
  $scope.setRoute = function(route) {
    $location.path(route);
  };
  $scope.experience = [
    {
      start : '03/06',
      end : 'Present',
      role : 'IT Manager & Consultant',
      client : { 'name' : 'DataLogic Information Technologies, LLC', 'url' : 'http://www.renalds.com/DataLogicIT' },
      environment : 'Oracle (11gR2, 12c), Oracle Enterprise Manager (12c), Oracle Grid Infrastructure (11gR2, 12c)',
      location : 'Haymarket, VA',
      excerpt : 'Deliver database services to customers and help customers win business',
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '07/08',
      end : 'Present',
      role : 'Team Lead & Lead Database Engineer',
      client : { 'name' : 'Accenture', 'url' : 'http://www.accenturefederal.com' },
      environment : 'Oracle 11gR2 (11.2.0.4) Grid Infrastructure, Oracle Database 11gR2, Oracle Enterprise Manager 12c, RHEL 6, NetApp',
      location : 'Ashburn, VA',
      excerpt : 'Led Team of 19 Database Administrators.  Lead Database Engineer for Transitional DataCenter project',
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
    {
      start : '04/07',
      end : '06/08',
      role : 'Chief Database Architect',
      client : { 'name' : 'Unisys Corporation', 'url' : 'http://www.unisys.com' },
      environment : 'Oracle 11g (11.1.0.6), Oracle 10gR2, Windows Server 2003 (32-bit and 64-bit), Microsoft .Net',
      location : 'Reston, VA',
      excerpt : "Consultant, Database Architect for SBINet and 'Bunker' projects",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '09/06',
      end : '12/07',
      role : 'Subject Matter Expert',
      client : { 'name' : 'Accenture', 'url' : 'http://www.accenturefederal.com' },
      environment : 'Oracle 10gR2, HP-UX 11.11',
      location : 'Reston, VA',
      excerpt : "Database Subject Matter Expert (SME) Architect for the IDE project supporting Defense Logistics Agency",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '03/06',
      end : '02/07',
      role : 'Database Architect',
      client : { 'name' : 'Intergraph', 'url' : 'http://www.intergraph.com' },
      environment : 'Oracle 10gR2, Windows Server 2003 (32-bit and 64-bit)',
      location : 'Reston, VA',
      excerpt : "Consultant, Database Architect with Intergraph Security Product Development team",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '06/04',
      end : '03/06',
      role : 'Senior Database Administrator/Architect',
      client : { 'name' : 'Preferred Systems Solutions', 'url' : 'http://www.pssfed.com' },
      environment : 'Oracle 10gR1 RAC, Oracle 9i (9.2.0.5), HP-UX 11.11, STK',
      location : 'Reston, VA',
      excerpt : "Database Architect and Administrator for the DLA IDE Asset Visibility project",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '02/03',
      end : '06/04',
      role : 'Senior Database Administrator',
      client : { 'name' : 'Chelsea Interactive (now eBay Enterprise)', 'url' : 'http://www.ebayenterprise.com' },
      environment : 'Oracle 9i RAC, Compaq Tru64 5.1. Network Appliance',
      location : 'Reston, VA',
      excerpt : "Lead Production Support Database Administrator for e-commerce websites",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '10/02',
      end : '01/03',
      role : 'Database Administrator/Consultant',
      client : { 'name' : 'Battelle', 'url' : 'http://www.battelle.org' },
      environment : 'Oracle 8i, Sun Solaris 8, EMC Clarion',
      location : 'Arlington, VA',
      excerpt : "Database Consultant supporting Voter News Service project",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '12/01',
      end : '10/02',
      role : 'Database Architect',
      client : { 'name' : 'Cable & Wireless (now Cable & Wireless Communications)', 'url' : 'http://www.cwc.com' },
      environment : 'Oracle 8i, Sun Solaris 8, EMC',
      location : 'Vienna, VA',
      excerpt : "Database Architect for Global Internet Group, developing and supporting multiple applications to service web customers",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '01/01',
      end : '11/01',
      role : 'Database Administrator',
      client : { 'name' : 'Keybridge Corporation', 'url' : 'http://www.bizjournals.com/washington/stories/2002/06/24/story2.html' },
      environment : 'Oracle 8i, Sun Solaris 8, Network Appliance',
      location : 'Reston, VA',
      excerpt : "Database Administrator developing and supporting client database services",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '01/99',
      end : '01/01',
      role : 'IT Consultant/Database Architect',
      client : { 'name' : 'Noblestar Systems Corporation', 'url' : 'http://www.noblestar.com/' },
      environment : 'Oracle 8i, Sun Solaris 7, J2EE, SQL Server 7, Microsoft NT4, HP-Unix',
      location : 'Reston, VA',
      excerpt : "Database Architect and Database Administrator Consultant",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '08/95',
      end : '12/98',
      role : 'Software Application Developer',
      client : { 'name' : 'Mitre Corporation', 'url' : 'http://www.mitre.org/' },
      environment : 'Oracle 7.3, Sequent Dynix, Oracle Financials',
      location : 'Reston, VA',
      excerpt : "Software and Database Applications Developer of Oracle Financials",
      content : '<ul><li>1</li><li>2</li>'
    },
    {
      start : '05/93',
      end : '08/95',
      role : 'Systems Developer/Administrator',
      client : { 'name' : 'Veda Incorporated (now General Dynamics)', 'url' : 'http://www.generaldynamics.org/' },
      environment : 'Oracle 6.2, SCO Unix, C',
      location : 'Alexandria, VA',
      excerpt : "Junior level Oracle/Unix/C developer, administrator and technical support",
      content : '<ul><li>1</li><li>2</li>'
    }
  ];
}]);

