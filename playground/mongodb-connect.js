//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb'); // above and this is same thing . it is basicaly destructuring
var user  = {name: 'simran', age: 21};
var {name} = user; // pull out name from object user
console.log(name);
console.log(user.name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    return console.log('Unable to connect to MongoDb Server');
  }


  console.log('Connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //
  //   text: 'something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err)
  //   {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2)); // ops attribute contain all of the docs
  // });

  // db.collection('User').insertOne({
  //   Name: 'Simranjit singh',
  //   Age: 21,
  //   location: 'Chandigarh'
  // },(err, result) => {
  //
  //     if(err)
  //     {
  //       return console.log("Unable to insert User");
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //
  //     console.log(result.ops[0]._id);
  //     console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();  // to close the connection with mongodb server
});
