'use strict';

//requiring the express and body parser packages.
const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
//creating a constant to use for directing the port
const PORT = process.env.PORT || 8888;
//instantiating the express package.
var app = express();
//including the static resource express as an argument.
app.use(express);
//new route that will handle a request and send a newFeature.html file back to the user.
app.get('/newFeature', function (req, res) {
  res.sendFile('/newFeature.html');
});
//this route will receive a new article from the form page and log that form data to the console.
app.post('/articles', bodyParser, function (req, res){
  console.log(request.body);
  res.send('Record posted to the server!');
});
//this will log to our teerminal console to let us know what port the server started on.
app.listen(PORT, function (){
  console.log(`This server started on port: ${PORT}`);
})
