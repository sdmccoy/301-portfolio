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
  var $newProject = $('section.template').clone();
  console.log($newProject);
  $newProject.removeClass('template');
  if (!this.publishedOn) {
    $newProject.addClass('draft');
  }
  $newProject.attr('a', this.url);
  $newProject.find('.screenshot').attr('src', this.image);
  $newProject.find('h2').html(this.title);
  $newProject.attr('data-category', this.category);
  $newProject.find('p:first').html(this.publishedOn);
  $newProject.find('p:last').html(this.description);
  $newProject.append('<main>');
  return $newProject;
};

rawData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
