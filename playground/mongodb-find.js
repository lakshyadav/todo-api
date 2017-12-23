const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to the MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// const MyTodoDB = db.db('TodoApp');
	// MyTodoDB.collection('Todos').find({
	// 	_id: new ObjectID('5a3d0fed8191c08224536254')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch Todos, err');
	// });

	const MyTodoDB = db.db('TodoApp');
	MyTodoDB.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch Todos, err');
	});

	// db.close();
});