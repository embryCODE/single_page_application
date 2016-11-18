(function() {

  'use strict';

  angular.module('app')

  .controller('RecipesController', function($scope, dataService) {

    dataService.getAllRecipes(function(response) {
      $scope.allRecipes = response.data;
    });

  });

})();
