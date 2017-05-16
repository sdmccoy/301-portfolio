'use strict';

var projects = [];

function Project (rawDataObj) {
  this.url = rawDataObj.url;
  this.image = rawDataObj.image;
  this.title = rawDataObj.title;
  this.publishedOn = rawDataObj.publishedOn;
  this.category = rawDataObj.category;
  this.description = rawDataObj.description;
}

Project.prototype.toHtml = function () {
  let newProject = $('#projects-template').html();
  let compileProject = Handlebars.compile(newProject);
  return compileProject(this);
};

projectRawData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects-content').append(project.toHtml());
});

$('document').ready(function(){
  $('section').hide();
  $('#projects-content').fadeIn(250);
});
