(function() {

  'use strict';

  angular.module('app')

  .controller('RecipeDetailController', function($scope, dataService, $location, $routeParams) {

    /** Gets all categories on page load. */
    dataService.getAllCategories(function(response) {
      $scope.allCategories = response.data;
    });

    /** Gets all food items on page load. */
    dataService.getAllFoodItems(function(response) {
      $scope.allFoodItems = response.data;
    });

    /** Get recipe by id in url, if one exists. */
    if ($routeParams.id) {
      dataService.getRecipeById($routeParams.id, function(response) {
        $scope.recipe = response.data;
      });
    } else {
      $scope.recipe = {};
      $scope.recipe.ingredients = [];
      $scope.recipe.steps = [];
    }

    /** Cancels and clears recipeData. */
    $scope.cancel = function() {
      $scope.recipe = {};
      $location.path('/');
    };

    /** Deletes an item from the ingredient or step list. */
    $scope.deleteItem = function(array, index) {
      array.splice(index, 1);
    };

    /** Adds an item to the ingredient or steps list. */
    $scope.addIngredient = function() {
      $scope.recipe.ingredients.push({item: '', condition: '', amount: ''});
    };

    /** Adds an item to the ingredient or steps list. */
    $scope.addStep = function() {
      $scope.recipe.steps.push({description: ''});
    };

    /** Saves a recipe, whether adding or updating. */
    $scope.saveRecipe = function() {

      if ($location.path() === '/add') {
        dataService.addRecipe($scope.recipe, function() {
          $location.path('/');
        });
      } else {
        dataService.updateRecipeById($scope.recipe._id, $scope.recipe, function() {
          $location.path('/');
        });
      }

    };

  });

})();
