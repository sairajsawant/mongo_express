const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const engines = require('consolidate');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/inventory');

//config for making use of nunjucks
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
routes(app);
app.use((err, req, res, next) => {

    //err has error thrown by the previous middleware
    //next function to go to the next middleware
    //error handling middleware
   res.status(422).send({ error: err._message }); 

});

module.exports = app;