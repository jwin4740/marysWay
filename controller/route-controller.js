// Requiring express
var express = require("express");

var parishArray = [];
// constructor Function for parish

function Parish(state, name, priest) {
    this.state = state;
    this.name = name;
    this.priest = priest;

}

var parish = new Parish("Illinois", "Annunciation", "Fr Patrick");
parishArray.push(parish);

var parish = new Parish("Illinois", "HolyCross", "Fr Parker");
parishArray.push(parish);



// setting router
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    res.render("home", {
        helpers: {
            foo: function () {
                return 'fyyyyyyyyyy.';
            }
        }
    });

});

router.get("/parishes/illinois", function (req, res) {

    res.render("illinois", {
        illinois: parishArray
    });

});




// Export routes for server.js to use.
module.exports = router;