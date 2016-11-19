(function() {

  'use strict';

  angular.module('app')

  .controller('RecipesController', function($scope, dataService, $location) {

    /** Gets all recipes on page load. */
    dataService.getAllRecipes(function(response) {
      $scope.recipesToDisplay = response.data;
    });

    /** Gets all categories on page load. */
    dataService.getAllCategories(function(response) {
      $scope.allCategories = response.data;
    });

    /**
     * Gets recipes in a specified category and saves list to recipesToDisplay.
     * If no category specified, all recipes are displayed.
     */
    $scope.narrowByCategory = function() {

      if ($scope.selectedCategory) {
        dataService.getRecipesInCategory($scope.selectedCategory, function(response) {
          $scope.recipesToDisplay = response.data;
        });
      } else {
        dataService.getAllRecipes(function(response) {
          $scope.recipesToDisplay = response.data;
        });
      }

    };

    /** Deletes the selected recipe. Calls narrowByCategory to refresh display. */
    $scope.deleteRecipe = function(id) {
      dataService.deleteRecipeById(id, function() {
        $scope.narrowByCategory();
      });
    };

    /** Go to the Recipe Detail screen to add a new recipe. */
    $scope.addRecipe = function() {
      $location.path('/add/');
    };

  });

})();
