const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to the MongoDB server');
	}
	console.log('Connected to MongoDB server');

	
	const MyTodoDB = db.db('TodoApp');
	MyTodoDB.collection('Users').deleteMany({name: 'Lakshya'}).then((result) => {
		console.log(result);
	});

	// MyTodoDB.collection('Users').findOneAndDelete({name: 'Mike'}).then((result) => {
	// 	console.log(result);
	// });

	// db.close();
});