'use strict';

var app = app || {};

(function(module){

  const featureView = {};

  featureView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function(){
      $('.tab-content').hide();
      let selection = $(this).data('content');
      console.log(selection);
      $(`#${selection}-content`).fadeIn(700);
    });
    $('.main-nav li:first').click();
  }

  featureView.initIndexPage = function() {
    app.Project.all.forEach(function(project){
      $('#projects-content').append(project.toHtml());
    });
    featureView.handleMainNav();
  };
  module.featureView = featureView;
})(app);
// TODO put in featureViewsetTeaser function to expand the descriptions
