'use strict';

var app = app || {};

(function(module){

  const featureView = {};

  featureView.initIndexPage = function() {
    app.Project.all.forEach(function(project){
      $('#projects-content').append(project.toHtml());
    });
  }

  featureView.setTabColor = function(ctx){
    console.log(ctx);
    $('i.fa.fa-globe').css('color', `yellow`);
  }
  module.featureView = featureView;
})(app);

// TODO put in featureViewsetTeaser function to expand the descriptions
