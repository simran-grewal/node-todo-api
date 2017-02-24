const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
  {
    return console.log('Unable to connect mongodb server');
  }

  console.log('Connected to MongoDb server');

    // db.collection('Todos').findOneAndUpdate({
    //
    //   _id: new ObjectID('58adc83a43fa499ad46c88a6')
    // }, {
    //
    //     $set: {
    //           completed: true
    //     }
    //
    // }, {
    //    returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // })


    //$inc

    db.collection('User').findOneAndUpdate({
      Name: 'harman singh'
      }
      ,
      {
        $inc:
        {
          Age: 1
        }
      }
        ,
        {
          returnOriginal: false
        }).then((result) => {
          console.log(result);
        })
  });
