'use strict';

describe('Directive: apple', function () {

  // load the directive's module
  beforeEach(module('tamagotchiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<apple></apple>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the apple directive');
  }));
});
