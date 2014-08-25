'use strict';

describe('Controller: ProductsinfCtrl', function () {

  // load the controller's module
  beforeEach(module('ccsV2App'));

  var ProductsinfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsinfCtrl = $controller('ProductsinfCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
