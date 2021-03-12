/*
File Name:- Server.js
author:-Gurpreet Singh
StudentId:-300984952
Date:-1 Feb 2021 
*/
  
  const express = require('express');
  const request = require('request');
  const bodyParser = require('body-parser');
  const app = express();
  const PORT = process.env.PORT || 8080;
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use('/static', express.static('public'));
  app.set('views', './views');
  app.set('view engine', 'ejs');
  //routing
  app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/about-me', (req, res) => {
    res.render('aboutme');
  });
  app.get('/projects', (req, res) => {
    res.render('projects');
  });
  app.get('/services', (req, res) => {
    res.render('services');
  });
  app.get('/contact', (req, res) => {
    res.render('contact');
  });

  

  app.post('/index', (req, res) => {
    //Here we are capturing the data
    console.log(req.body);
    res.redirect(`http://localhost:${PORT}`);
    res.end();
});

app.listen(PORT, () => {
    console.log(`The server listening at http://localhost: ${PORT}`);
});

module.exports = app;
