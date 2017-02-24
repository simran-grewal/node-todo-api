var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose model
                       // name
var Todo =mongoose.model('Todo', {
//Properties

text: {

        type: String,
        required: true, // validatios:)
        minlength:1,
        trim: true // to remove un neccessary spaces

},

completed: {

      type: Boolean,
      default: false
},

completedAt: {

    type: Number,
    default: null
}

});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable  To save todo');
// });


var newTodo = new Todo({
  text: 'Simran Grewal',
  //completed: true,
  // completedAt: 20
})

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) =>  {
      console.log('Unable to Save Todo');
})


var OtherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 1234
});

OtherTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save Todo');
})
