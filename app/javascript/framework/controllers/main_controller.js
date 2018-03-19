angular.module('webpacker-jasmine-rails-angularjs')
.controller('MainController', [
  '$scope',
  $scope => {
    $scope.text = 'This is a functioning AngularJS app'
  }
]);
