var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text,
		completed: req.body.completed,
		completedAt: req.body.completedAt
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
})

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	
	if(!ObjectID.isValid(id)) {
		return res.status(404).send('Todo not found!');
	}

	Todo.findById(id).then((todo) => {
		if(!todo) {
			return res.status(404).send('Todo not found!');
		} 

		res.send({todo}); 
	}, (e) => {
		res.status(400).send();
	});
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return res.status(404).send('ID not valid');
	}

	Todo.findByIdAndRemove(id).then((doc) => {
		if(!doc) {
			return res.status(404).send('Todo not found!');
		}

		res.send({doc});
	}, (e) => {
		res.status(400).send('Error removing Todo');
	});
});

app.listen(port, () => {
	console.log(`Started up on port ${port}`);
});

module.exports = {app};