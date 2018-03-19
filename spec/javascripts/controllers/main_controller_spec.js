describe("MainController", function() {
  var $scope, $controller, self;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $scope = $injector.get('$rootScope').$new();

    $controller('MainController', {
      '$scope': $scope
    });
  }));

  it("initial values should be correct", function() {
    expect($scope.text).toBe('This is a functioning AngularJS app');
  });
});
