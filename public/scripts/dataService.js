(function() {

  'use strict';

  angular.module('app').service('dataService', function($http) {

    this.getAllRecipes = function(successCallback, errorCallback) {
      $http.get('/api/recipes')
      .then(successCallback, errorCallback);
    };

    this.getRecipesInCategory = function(categoryName, successCallback, errorCallback) {
      $http.get('/api/recipes?category=' + categoryName)
      .then(successCallback, errorCallback);
    };

    this.getRecipeById = function(id, successCallback, errorCallback) {
      $http.get('/api/recipes/' + id)
      .then(successCallback, errorCallback);
    };

    this.updateRecipeById = function(id, successCallback, errorCallback) {
      $http.put('/api/recipes/' + id)
      .then(successCallback, errorCallback);
    };

    this.addRecipe = function(successCallback, errorCallback) {
      $http.post('/api/recipes')
      .then(successCallback, errorCallback);
    };

    this.deleteRecipeById = function(id, successCallback, errorCallback) {
      $http.delete('/api/recipes/' + id)
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
