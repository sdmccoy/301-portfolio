'use strict';

var app = app || {};

(function(modules){
  const gitHubController = {};
  gitHubController.index = function(){
    app.repos.fetchRepos(app.reposView.initIndexPage);
    $('.tab-content').hide();
    $('#repos-content').fadeIn(750);
  }
  modules.gitHubController = gitHubController;
})(app);
