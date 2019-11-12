const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoose.connect('mongodb://localhost:27017/pbd', {
        useNewUrlParser: true
    });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    res.render('index', { title: 'Hospital' });
});

module.exports = router;
