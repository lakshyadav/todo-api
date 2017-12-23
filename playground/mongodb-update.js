const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to the MongoDB server');
	}
	console.log('Connected to MongoDB server');

	
	const MyTodoDB = db.db('TodoApp');
	// MyTodoDB.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5a3da3f55909f7a1e716504e')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}

	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	MyTodoDB.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a3da6bf5909f7a1e716511d')
	}, {
		$set: {
			name: 'Lakshya'
		},
		$inc: {
			age: 5
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});


	// db.close();
});