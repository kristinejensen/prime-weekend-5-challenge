var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var employeeRouter = require('./routes/routes.js');
var port = 5000;


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/employees', employeeRouter);

app.listen(port, function() {
  console.log('listening on 5000');
});
