// Requiring express
var express = require("express");
// Requiring model burger

// setting router
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    res.render("home");

});




// Export routes for server.js to use.
module.exports = router;