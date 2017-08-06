var express = require("express");

var exphbs = require('express-handlebars');



var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var port = process.env.PORT || 8080;
var db = require("./models");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(express.static(path.join(__dirname, "./public")));
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

app.engine('handlebars', exphbs({
    defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');

var routes = require("./controller/route-controller.js");
app.use("/", routes);




db.sequelize.sync({force: false}).then(function() {
  app.listen(port, function() {
    console.log("App listening on port " + port);
  });
});