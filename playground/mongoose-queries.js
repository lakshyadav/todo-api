const {ObjectID} = require('mongoose');

const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a42a369ed48b569f6895cf5';

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('ID not found');
	}
	console.log('Todo by ID', todo);
}).catch((e) => console.log(e));