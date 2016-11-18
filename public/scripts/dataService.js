(function() {

  'use strict';

  angular.module('app').service('dataService', function($http) {

    this.getAllRecipes = function(successCallback, errorCallback) {
      $http.get('/api/recipes')
      .then(successCallback, errorCallback);
    };

    this.getRecipesInCategory = function(successCallback, errorCallback) {
      $http.get('/api/recipes?category={category}')
      .then(successCallback, errorCallback);
    };

    this.getRecipeById = function(successCallback, errorCallback) {
      $http.get('/api/recipes/{id}')
      .then(successCallback, errorCallback);
    };

    this.updateRecipeById = function(successCallback, errorCallback) {
      $http.put('/api/recipes/{id}')
      .then(successCallback, errorCallback);
    };

    this.addRecipe = function(successCallback, errorCallback) {
      $http.post('/api/recipes')
      .then(successCallback, errorCallback);
    };

    this.deleteRecipeById = function(successCallback, errorCallback) {
      $http.delete('/api/recipes/{id}')
      .then(successCallback, errorCallback);
    };

    this.getAllCategories = function(successCallback, errorCallback) {
      $http.get('/api/categories')
      .then(successCallback, errorCallback);
    };

    this.getAllFoodItems = function(successCallback, errorCallback) {
      $http.get('/api/fooditems')
      .then(successCallback, errorCallback);
    };

  });

})();
