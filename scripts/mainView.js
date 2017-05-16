'use strict';

$('document').ready(function(){
  $('section').hide();
  $('#projects-content').fadeIn(250);
});

const mainNavView = {};

mainNavView.handleMainNav = function() {
  $('nav a li').on('click', function(){
    $('section').hide();
    let selection = $(this).data('content');
    console.log(selection);
    $('#' + selection + '-content').fadeIn(700);
  })
}
