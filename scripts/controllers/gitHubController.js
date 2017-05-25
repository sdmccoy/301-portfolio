'use strict';

var app = app || {};

(function(modules){
  const gitHubController = {};
  gitHubController.index = function(){
    app.repos.fetchRepos(app.repoView.initIndexPage);
    $('.tab-content').hide();
    $('#repos-content').fadeIn(750);
  }
  modules.gitHubController = gitHubController;
})(app);
