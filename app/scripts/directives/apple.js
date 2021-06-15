'use strict';

angular.module('tamagotchiApp')
  .directive('apple', function ($rootScope) {
    return {
      template: '<div class="apple-base" ng-click="sendToAnimal()">{{ food.getType() }}</div>',
      restrict: 'E',
      scope: {},
      link: function postLink(scope, element, attrs) {
        let food = new Apple()
        scope.food = food

        scope.sendToAnimal = () => {
          console.log('send event')

          $rootScope.$broadcast('animal.eat', {
            food: food
          })
        }
      }
    };
  });
