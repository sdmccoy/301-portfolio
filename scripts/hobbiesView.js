'use strict';

$('nav a li').on('click', function() {
  var $tabSelection = $(this).data('content');
  console.log($tabSelection);
  $('section').hide();
  $('#' + $tabSelection + '-template').fadeIn(750);
});
