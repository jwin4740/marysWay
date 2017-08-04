// Requiring express
var express = require("express");

var parishArray = [];
// constructor Function for parish

function Parish(state, name, address, cityState, priest, founded, website, manager, phone, photoUrl) {
    this.state = state;
    this.name = name;
    this.address = address;
    this.priest = "Pastor: " + priest;
    this.cityState = cityState;
    this.founded = "founded" + founded;
    this.website = website;
    this.manager = manager;
    this.phone = phone;
    this.photoUrl = photoUrl;

}

var parish = new Parish("Illinois", "Annunciation BVM", "1840 Church Road", "Aurora, IL", "Rev Patrick Gillmeyer", "October 2002", "http", "Trish Theriault", "(630) 236-1317", "none");;
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