var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Static Content directory. Is used to have a route to assettss
app.use(express.static(__dirname+ "/public/"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Brings in express handlebars package
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and connects them to server
var routes = require("./controllers/burgers_controller");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
