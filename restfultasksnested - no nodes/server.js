// Import Modules
const express = require("express"),
  port = 8000,
  mongoose = require('mongoose'),
  app = express(),
  bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

// Port Listener
app.listen(port, function () {
  console.log(`Now Listening on port: ${port}`);
});

// Mogoose Models
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restfultask', { useNewUrlParser: true });
var TaskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: [2, 'Task title length must be greater than 2'] },
  description: { type: String, required: true, minlength: [2, "Description title length must be greater than 2"] },
  completed: { type: Boolean, required: true },
}, { timestamps: true });

//CREATE Schema, creating multiple tasks
const Task = mongoose.model('Task', TaskSchema);

//Routes
app.get('/tasks', (req, res) => {
  console.log('in task route');
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log('Something went wrong', err);
      res.json({ 'Error': "Something went wrong" });
    } else {
      console.log("Success");
      console.table(tasks);
      res.json({ "Success": "Successfully got your tasks", tasks: tasks });
    }
  });
});


//Create a new Task - a single task, so se task, NOT tasks
app.post('/task/new', function (req, res) {
  console.table(req.body);
  Task.create(req.body, function (err, task) {
    if (err) {
      console.log('Something went wrong', err);
      res.json({ 'Error': "Something went wrong" });
    } else {
      console.log("Success");
      console.table(task);
      res.json({ "Success": "Successfully added a task", task: task });
    }
  });
});

//Update a task - query first
app.get('/task/edit/:id', function (req, res) {
  Task.findOne({ _id: req.params.id }, function (err, task) {
    if (err) {
      console.log('Something went wrong', err);
      res.json({ 'Error': "Something went wrong" });
    } else {
      console.log("Success");
      console.table(task);
      res.json({ "Success": "Successfully quired your task a task", task: task });
    }
  });
});

//This is our route that will update the specific task
app.put('/task/:id', function (req, res) {
  console.log("test1 reqbody:",req.body);
  Task.findOne({ _id: req.params.id }, function (err, task) {
    console.log("test2 task received from db:",task);
    if (err) {
      console.log('Something went wrong', err);
      res.json({ 'Error': "Something went wrong in the query" });
    } else {
      console.log("Successfully found the task");
      console.log("Updating the task below");

      task.title = req.query.title;
      task.description = req.query.description;
      task.completed = req.query.completed;
      //when using the postman GUI, to update, change req.body to req.query, however if you choose to use body method, or hard coding, change to req.body

      task.save(function (err) {
        if (err) {
          console.log('Something went wrong', err);
          res.json({ 'Error': "Something went wrong updating the file" });
        }
        else {
          console.table(task);
          res.json({ "Success": "Successfully updated your task.", task: task });
        }
      });
    }
  });
});

app.delete('/task/delete/:id', function (req, res) {
  var id = req.params.id;
  Task.remove({_id: id}, function (err) {
      if(err) {
          console.log("Something went wrong", err);
          res.json({'Err': "Something went wrong"});
      }
      else {
          console.log("Success");
          res.json({"Success": "Successfully Removed"});

      }
  });
});


