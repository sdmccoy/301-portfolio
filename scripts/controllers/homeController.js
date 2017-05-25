'use strict';

var app = app || {};

(function(modules){
  const homeController = {};
  homeController.index = function(){
    //I want to fetch all of the data on the home page load but I don't want it to display the data so I'm leaving out the intialize function.
    app.Project.fetchAll();
    $('.tab-content').hide();
    $('#home-content').fadeIn(750);
  }
  modules.homeController = homeController;
})(app);
