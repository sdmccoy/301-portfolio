'use strict';

var app = app || {};

page('/', app.homeController.index);
page('/websites', app.websitesController.index);
page('/pens', app.pensController.index);
page('/git', app.gitController.index);
page('/hobbies', app.hobbiesController.index);
page('/linkedin', app.linkedinController.index);
