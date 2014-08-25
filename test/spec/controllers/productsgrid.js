'use strict';

describe('Controller: ProductsgridCtrl', function () {

  // load the controller's module
  beforeEach(module('ccsV2App'));

  var ProductsgridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsgridCtrl = $controller('ProductsgridCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
