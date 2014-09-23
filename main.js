var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/static'));

var Todos = [];

app.get('/todos', function(req, res){
  	res.json(Todos);
});

app.post('/todo', function(req, res){
	Todos.push(req.body);
	res.status(200).end();
});

app.listen(3000);