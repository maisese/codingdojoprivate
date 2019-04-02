// Import Modules
const express = require("express"),
  path = require("path"),
  port = 8000,
  mongoose = require('mongoose'),
  app = express(),
  bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static( __dirname + '/public/dist/public' ));
app.set('views', path.join(__dirname, './views'));


// Port Listener
app.listen(port, function () {
  console.log(`Listening on port: ${port}`);
});

// Mogoose Models
mongoose.connect('mongodb://localhost/meantest', { useNewUrlParser: true });
var ReviewSchema = new mongoose.Schema({
  customername: {type: String, required: [true, 'Restaurant name needs 3 digits'], minlength: 3 },
  starrating: { type: Number, required: true},
  comments: { type: String, required: true, minlength: [3, 'comments needs 3 digts'] },
}, { timestamps: true });

const Review = mongoose.model('Review', ReviewSchema);

var RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Restaurant name needs 3 digts'], minlength: 3 },
  cuisine: { type: String, required: true, minlength: [3, "Cuisine length must be greater than 2"] },
  reviews: [ReviewSchema],
}, { timestamps: true });

//CREATE Schema, creating multiple restaurants

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);


//Routes
app.get('/restaurants', (req, res) => {
  console.log('in root route');
  Restaurant.find({}, function (err, restaurants) {
    if (err) {
      console.log('Something went wrong in root', err);
      res.json({ 'Error': "Something went wrong in root" });
    } else {
      console.log("Success");
      console.table(restaurants);
      res.json({ "Success": "Successfully got your restaurants", restaurants: restaurants });
    }
  });
});


app.post('/restaurants/new', (req, res) => {
  console.table(req.body);
  Restaurant.create(req.body, (err, restaurant) => {
    if (err) {
      console.log('Something went wrong', err);
      res.json({ "Message": "Error", "err": err });
    } else {
      console.log("Success");
      console.table(restaurant);
      res.json({ "Success": "Successfully added a restaurant", restaurant: restaurant });
    }
  });
});

//Update a restaurant - query first
app.get('/restaurants/:id/edit', function (req, res) {
  Restaurant.findOne({ _id: req.params.id }, function (err, restaurant) {
    if (err) {
      console.log('Something went wrong', err);
      res.json({ "Message": "Error", "err": err });
    } else {
      console.log("Success");
      console.table(restaurant);
      res.json({ "Success": "Successfully quired your restaurant", restaurant: restaurant });
    }
  });
});

//THIS IS FOR YOUR RESTUARANT REVIEW
app.put('/restaurants/:id/put', function (req, res) {
  console.log("test1 reqbody:",req.body);
  Restaurant.findOne({ _id: req.params.id }, function (err, restaurant) {
    console.log("test2 restaurant received from db:", restaurant);
    if (err) {
      console.log('Something went wrong', err);
      res.json({ "Message": "Error", "err": err });
    } else {
      console.log("Successfully found the restaurant");
      console.log("Updating the restaurant below");

      restaurant.name = req.body.name;
      restaurant.cuisine = req.body.cuisine;
      //when using the postman GUI, to update, change req.body to req.query, however if you choose to use body method, or hard coding, change to req.body

      restaurant.save(function (err) {
        if (err) {
          console.log('Something went wrong', err);
          res.json({ "Message": "Error", "err": err });
        } else {
          console.table(restaurant);
          res.json({ "Success": "Successfully updated your restaurant.", restaurant: restaurant });
        }
      });
    }
  });
});

// //Update a restaurant - query first
// app.get('/restaurants/:id/review', function (req, res) {
//   Restaurant.findOne({ _id: req.params.id }, function (err, restaurant) {
//     if (err) {
//       console.log('Something went wrong', err);
//       res.json({ 'Error': "Something went wrong" });
//     } else {
//       console.log("Success");
//       console.table(restaurant);
//       res.json({ "Success": "Successfully quired your restaurant", restaurant: restaurant });
//     }
//   });
// });


app.delete('/restaurants/delete/:id', function (req, res) {
  var id = req.params.id;
  Restaurant.remove({_id: id}, function (err) {
      if(err) {
          console.log("Something went wrong", err);
          res.json({'Err': "Something went wrong"});
      }
      else {
          console.log("Success");
          res.json({"Success": "Successfully Removed"});
      }
  });
})

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
