'use strict';

const hobbies = [];

function Hobbies (rawDataObj) {
  this.image = rawDataObj.image;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.description = rawDataObj.description;
}

Hobbies.prototype.toHtml = function () {
  let hobbiesTemplate = $('#hobbies-template').html();
  let compileTemplate = Handlebars.compile(hobbiesTemplate);
  return compileTemplate(this);
};

hobbiesRawData.forEach(function(hobbyObject) {
  hobbies.push(new Hobbies(hobbyObject));
});

hobbies.forEach(function(hobbyObject){
  $('#hobbies-content').append(hobbyObject.toHtml());
});
