const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to the MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const MyTodoDB = db.db('TodoApp');
	// MyTodoDB.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	MyTodoDB.collection('Users').insertOne({
		name: 'Lakshya Yadav',
		age: 20,
		location: 'Delhi'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert User', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.close();
});