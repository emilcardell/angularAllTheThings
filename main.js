var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/static'));

var Todos = [];

app.get('/', function(req, res){
  	res.send('hello world');
});

app.get('/todos', function(req, res){
  	res.json(Todos);
});

app.post('/todo', function(req, res){
	Todos.push(req.body);
	res.send(200);
});

app.listen(3000);