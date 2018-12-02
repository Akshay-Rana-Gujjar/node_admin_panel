const express = require('express');
const path= require('path');
const bodyParser=require('body-parser');
const app=express();//init app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cons = require('consolidate');
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;
const request = require('request');
app.use(express.static(path.join(__dirname, 'views')));



var home = require('./home');


let routes = require("./routes/index") ;
app.use("/", routes);

app.get('/ajaxwala',(req, resp)=> {

  request.get('http://159.65.148.158/api/v1/flight', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
  console.log(body);
       resp.send(
              'My name is shaun frost'+body.message,
          );
  });         
  
  });

app.listen(port, function() {
  console.log('GULP is running my app on PORT: ' + port);
});