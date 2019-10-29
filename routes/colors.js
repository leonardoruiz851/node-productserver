var express = require('express');
var router = express.Router();

const Color = require('../models/Color');

router.get('/', function(req, res, next) {
    Color.find(function(err, colors) {
        if (err) {
            res.status(500).json({ message: 'Internal server error' });
        } else if (!colors.length) {
            res.status(401).json({ message: 'Colors not found' });
        } else {
            res.status(200).json(colors);
        }
    });
});

router.get('/:id', function(req, res, next) {
    Color.findById(req.params.id, function(err, color) {
        if (err) {
            res.status(500).json({ message: 'Internal server error' });
        } else if (!color) {
            res.status(401).json({ message: 'Colors not found' });
        } else {
            res.status(200).json(color);
        }
    });
});

module.exports = router;