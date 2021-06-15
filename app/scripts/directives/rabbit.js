'use strict';

angular.module('tamagotchiApp')
  .directive('rabbit', function ($interval) {
    return {
      template: `
        <div class="rabbit-base" ng-class="pet.getState()">
          <div class="progress">
            <div class="progress-bar" role="progressbar" 
              aria-valuenow="pet.getEnergy()" aria-valuemin="0" aria-valuemax="pet.getMaxEnergy()" 
              ng-style="{'width': pet.getEnergy()*100/pet.getMaxEnergy() + '%' }">{{ pet.getEnergy() }}
            </div>
          </div>
          <span style="color: white">{{ pet.getName() }}</span>
        </div>
      `,
      restrict: 'E',
      scope: {
        animalName: '='
      },
      link: function postLink(scope, element, attrs) {
        let pet = new Rabbit(scope.animalName)
        scope.pet = pet

        let heartbeat = ()=> {
          pet.heartbeat()

          if(!pet.isAlive()) {
            $interval.cancel(scope.timer);
            console.log('morto');
          }
        }

        scope.timer = $interval(() => {
          heartbeat()
        }, 1200)


        scope.$on('animal.eat', function(event, data) {
          pet.eat(data.food)
        })
      }
    };
  });
