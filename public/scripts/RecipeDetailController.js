(function() {

  'use strict';

  angular.module('app')

  .controller('RecipeDetailController', function($scope, dataService, $location, $routeParams) {

      /** Get recipe by id in url, if one exists. */
      if ($routeParams.id) {
        dataService.getRecipeById($routeParams.id, function(response) {
          $scope.recipe = response.data;
        });
      }

      /** Cancels and clears recipeData. */
      $scope.cancel = function() {
        $scope.recipe = {};
        $location.path('/');
      };

      /** Gets all categories on page load. */
      dataService.getAllCategories(function(response) {
        $scope.allCategories = response.data;
      });

      /** Gets all food items on page load. */
      dataService.getAllFoodItems(function(response) {
        $scope.allFoodItems = response.data;
      });

  });

})();
