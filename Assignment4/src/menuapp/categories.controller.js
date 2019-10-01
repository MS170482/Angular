(function(){
  'use strict'

  angular.module("MenuApp")
  .controller("CategoriesController",CategoriesController);

  CategoriesController.$inject = ["categories"];
  function CategoriesController(categories){
//function CategoriesController(){
    var ctrl = this;
    ctrl.categories = categories;
    //ctrl.name = "test";
    //console.log(ctrl);
  }
})();
