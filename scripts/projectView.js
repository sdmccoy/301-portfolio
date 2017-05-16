'use strict';

const projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav: .projects, .pens, .hobbies').on('click', function(){
    $('section').hide();
    let selection = $(this).val();
    $(`#${{selection}}-content`).fadeIn(700);
  })
}
