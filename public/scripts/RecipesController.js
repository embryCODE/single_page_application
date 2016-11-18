(function() {

  'use strict';

  angular.module('app')

  .controller('RecipesController', function($scope, dataService) {

    dataService.getAllRecipes(function(response) {
      $scope.recipesToDisplay = response.data;
    });

    $scope.getRecipesInCategory = function(response) {

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

    dataService.getAllCategories(function(response) {
      $scope.allCategories = response.data;
    });

  });

})();
