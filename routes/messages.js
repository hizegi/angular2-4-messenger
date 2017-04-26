var express = require('express');
var router = express.Router();

var Message = require('../models/message');

//retrieve all messages
router.get('/', function(req, res, next){
  Message.find()
    .exec(function(err, messages){
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      res.status(200).json({
        message: 'Success',
        obj: messages
      });
    })
});

//post new message
router.post('/', function(req, res, next){
  var message = new Message({
    content: req.body.content
  });

  message.save(function(err, result){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    res.status(201).json({
      message: 'Saved message',
      obj: result
    })
  });
});

//change existing data
//put will overwrite existing data
router.patch('/:id', function(req, res, next){
  console.log("Hey we tryin' ta update here.")
  Message.findById(req.params.id, function(err, message){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    //if message is not found
    if (!message) {
      return res.status(500).json({
        title: 'No message found.',
        error: {message: 'Message not found'}
      })
    }

    //save body content to message content
    message.content = req.body.content;
    message.save(function(err, results){
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      res.status(200).json({
        message: 'Updated message',
        obj: results
      });
    });
  });
});

router.delete('/:id', function(req, res, next){
  console.log("Deleting okk??")
  Message.findById(req.params.id, function(err, message){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    //if message is not found
    if (!message) {
      return res.status(500).json({
        title: 'No message found.',
        error: {message: 'Message not found'}
      })
    }

    //Delete message
    message.remove(function(err, results){
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      res.status(200).json({
        message: 'Deleted message',
        obj: results
      });
    });
  });
});

module.exports = router;
