'use strict';

// $('document').ready(function(){
//   $('section.template').hide();
//   $('#home-content').fadeIn(250);
// });

const featureView = {};

featureView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    let selection = $(this).data('content');
    console.log(selection);
    $(`#${selection}-content`).fadeIn(700);
  });
  // this loads the first tab of the main nav on page load.
  $('.main-nav .tab:first').click();
}

featureView.initIndexPage = function () {
  Project.all.forEach(function(projectObject){
    $('#projects-content').append(projectObject.toHtml());
  });

  featureView.handleMainNav();
};

// TODO put in featureViewsetTeaser function to expand the descriptions
