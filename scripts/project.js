'use strict';

function Project (rawDataObj) {
  this.url = rawDataObj.url;
  this.image = rawDataObj.image;
  this.title = rawDataObj.title;
  this.publishedOn = rawDataObj.publishedOn;
  this.category = rawDataObj.category;
  this.description = rawDataObj.description;
}

Project.all = [];

Project.prototype.toHtml = function () {
  let compileProject = Handlebars.compile($('#projects-template').text());
  return compileProject(this);
};

Project.loadAll = function (rawData){
  rawData.forEach(function(projectObject){
  Project.all.push(new Project(projectObject));
  });
};

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    featureView.initIndexPage();
  } else {
    $.getJSON('/projectRawData.json')
      .then(
        //starting my success callback
        function(data) {
          Project.loadAll(data);
          localStorage.setItem('rawData', JSON.stringify(Project.all));
          featureView.initIndexPage();
        },
        //starting my failure callback
        function(err) {
          console.error(err);
        }
      );
  }
}
