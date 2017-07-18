var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var port = process.env.PORT || 8080;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(express.static(path.join(__dirname, "./public")));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



app.listen(port, function () {
    console.log('server listening on port: ' + port);
});