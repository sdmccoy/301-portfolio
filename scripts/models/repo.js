'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.fetchRepos = function(callback){
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${myGitHubToken}`
      }
    })
    .then(data => {
      repos.all = data;
      callback();
    });
  }
  repos.with = attr => {
    repos.all.filter(repo => {
      repo[attr]
    });
  }
  module.repos = repos;
})(app);