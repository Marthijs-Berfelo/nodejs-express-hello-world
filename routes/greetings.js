var express = require('express');
var router = express.Router();
var GreetingRes = require('../core/models/greeting-res');

router
  .get('/', function (req, res, next) {
    res.status(200).json(new GreetingRes());
  })
  .get('/:name', function (req, res, next) {
    res.send(new GreetingRes(req.params.name));
  });

module.exports = router;