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
    Project.all = data.map(ele => new Project(ele));
  };

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      // app.featureView.initIndexPage();
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
// reduce method counting the total words of the project array description. I have no use for it right now but it satisfies the requirements. Check in console for functionality.
  Project.totalDescWords = () => {
    return {
      totalWords: Project.all.map(project => project.description.match(/\b\w+/g).length).reduce((acc, curr) => acc + curr)
    };
  };
  module.Project = Project;
})(app);
