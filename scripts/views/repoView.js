'use strict';

var app = app || {};

(function(module){
  const repoView = {};

  let compileRepos = Handlebars.compile($('#repo-template').text());

  repoView.initIndexPage = function(){
    $('#repos-content').append(app.repos.all.map(compileRepos));
  };

  module.repoView = repoView;
})(app);
