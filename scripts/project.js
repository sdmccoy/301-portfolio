'use strict';

var app = app || {};

(function(module) {
  function Project(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    let compileProject = Handlebars.compile($('#projects-template').text());
    return compileProject(this);
  };

  Project.loadAll = data => {
    Project.all = data.map(ele => (new Project(ele));
  };

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      app.featureView.initIndexPage();
    } else {
      $.getJSON('/projectRawData.json')
        .then(
          //starting my success callback
          function(data) {
            Project.loadAll(data);
            localStorage.setItem('rawData', JSON.stringify(Project.all));
            app.featureView.initIndexPage();
          },
          //starting my failure callback
          function(err) {
            console.error(err);
          }
        );
    }
  }
  module.Project = Project;
})(app);
