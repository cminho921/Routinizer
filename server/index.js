'use strict';

var express = require('express');
var bodyParser = require('body-parser');
const port = 3000;
var app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
  res.send("Hello Realm");
});

app.listen(port, function() {
  console.log(`Listening at port:${port}`);
});