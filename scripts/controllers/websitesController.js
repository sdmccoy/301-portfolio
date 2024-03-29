'use strict';

var app = app || {};

(function(modules){
  const websitesController = {};
  websitesController.index = function(){
    app.Project.fetchAll(app.featureView.initIndexPage);
    $('.tab-content').hide();
    $('#projects-content').fadeIn(750);
    app.featureView.setIconColor();
  }
  modules.websitesController = websitesController;
})(app);
