var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.json({
    name: "Tanju",
    surname: "Yıldız",
    age: 29,
    location: "Konya, Turkey",
    job: "Frontend Developer"
  });
});

module.exports = router;
