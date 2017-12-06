var express = require('express');
var router = express.Router();


router
  .get('/', function(req, res) {

    var hostname = req.headers.host;
    res.json({
      message: 'hooray! Welcome to the assignment API'
    });
  })

module.exports = router;