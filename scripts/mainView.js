'use strict';


const featureView = {};

featureView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    let selection = $(this).data('content');
    console.log(selection);
    $(`#${selection}-content`).fadeIn(700);
  });
  // NOT WORKING this loads the first tab of the main nav on page load.
  $('.main-nav li:first').click();
}

featureView.initIndexPage = function() {
  Project.all.forEach(function(project){
    $('#projects-content').append(project.toHtml());
  });
  featureView.handleMainNav();
};

// TODO put in featureViewsetTeaser function to expand the descriptions
