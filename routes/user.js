var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');

router.post('/', function (req, res, next) {
    //create new user w/ hashed password
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email
    });
    user.save(function(err, result){
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        })
      }
      res.status(201).json({
        message: 'User created',
        obj: result
      })
    })
});



module.exports = router;
