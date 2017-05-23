'use strict';

//requiring the express and body parser packages.
const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
//creating a constant to use for directing the port
const PORT = process.env.PORT || 5181;
//instantiating the express package.
const app = express();
//including the static resource express as an argument.
app.use(express.static('.'));
//new route that will handle a request and send a newFeature.html file back to the user.
app.get('/newFeature', function (req, res) {
  res.sendFile('newFeature.html', {root: '.'});
});
//this route will receive a new article from the form page and log that form data to the console.
app.post('/articles', bodyParser, function (req, res){
  res.send('Record posted to the server!');
});
//this will log to our teerminal console to let us know what port the server started on.
app.listen(PORT, function (){
  console.log(`This server started on port: ${PORT}`);
})