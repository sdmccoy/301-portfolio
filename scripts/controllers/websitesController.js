'use strict';

var app = app || {};

(function(modules){
  const websitesController = {};
  websitesController.index = function(){
    app.Project.fetchAll(app.featureView.initIndexPage);
    $('.tab-content').hide();
    $('#project-content').fadeIn(750);
  }
  modules.websitesController = websitesController;
})(app);