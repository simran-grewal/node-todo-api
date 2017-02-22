//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // above and this is same thing . it is basicaly destructuring
var user  = {name: 'simran', age: 21};
var {name} = user; // pull out name from object user
console.log(name);
console.log(user.name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    return console.log('Unable to connect to MongoDb Server');
  }

// to access file
// db.collection('Todos').find().toArray().then((docs) => {
//
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch TODOS', err);
// });

// db.collection('Todos').find({completed: false}).toArray().then((docs) => {
//
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch TODOS', err);
// });
//   console.log('Connected to MongoDb server');

// db.collection('Todos').find({_id: new ObjectID('58ac97fb43fa499ad46c8512')}).toArray().then((docs) => {
//
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch TODOS', err);
// });

db.collection('Todos').find().count().then((count) => {

  console.log(`Todos count:${count}`);
  console.log(JSON.stringify(docs,undefined,2));
}, (err) => {
  console.log('Unable to fetch TODOS', err);
});

//  db.close();  // to close the connection with mongodb server
});
