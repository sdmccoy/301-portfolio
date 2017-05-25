'use strict';

//requiring the express and body parser packages.
const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const requestProxy = require('express-request-proxy');
const pg = require('pg');
//creating a constant to use for directing the port
const PORT = process.env.PORT || 5181;
//instantiating the express package.
const app = express();
//setting up client database connection
const conString = 'postgres://postgres:dingodb@localhost:5432/kilovolt';
const client = new pg.Client(process.env.DATABASE_URL || conString);
client.connect();
client.on('error', err => console.error(err));
//including the static resource express as an argument.
app.use(express.static('.'));
//new route that will handle a request and send a newFeature.html file back to the user.
app.get('/newFeature', function (req, res) {
  res.sendFile('newFeature.html', {root: '.'});
});

//A new proxy method which acts as a 'middle man' for the request.
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

//This is a route is using the middleman proxy.
app.get('/github/*', proxyGitHub);

//this route will receive a new article from the form page and log that form data to the console.
app.post('/articles', bodyParser, function (req, res){
  res.send('Record posted to the server!');
});
//this will log to our teerminal console to let us know what port the server started on.
app.listen(PORT, function (){
  console.log(`This server started on port: ${PORT}`);
})
