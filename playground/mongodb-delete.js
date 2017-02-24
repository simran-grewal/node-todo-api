const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    return console.log('Unable to connect mongodb server');
  }

  console.log('Connected to MongoDb server');
  // DeleteMany

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //DeleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  //FindOne and Delete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);

    //
    // db.collection('User').deleteMany({Name: 'Simranjit singh'}).then((result) => {
    //   console.log(result);
    // });


    // db.collection('User').findOneAndDelete({Name: 'Grewal singh'}).then((result) => {
    //   console.log(result);
    // })

  });
