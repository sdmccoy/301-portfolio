'use strict';

var app = app || {};

page('/', app.homeController.index);
page('/websites', app.websitesController.index);

page();
