var express = require('express');
var router = express.Router();

const Material = require('../models/Material');

router.get('/', function(req, res, next) {
    Material.find(function(err, materials) {
        if (err) {
            res.status(500).json({ message: 'Internal server error' });
        } else if (!materials.length) {
            res.status(401).json({ message: 'Materials not found' });
        } else {
            res.status(200).json(materials);
        }
    });
});

router.get('/:id', function(req, res, next) {
    Material.findById(req.params.id, function(err, material) {
        if (err) {
            res.status(500).json({ message: 'Internal server error' });
        } else if (!material) {
            res.status(401).json({ message: 'Materials not found' });
        } else {
            res.status(200).json(material);
        }
    });
});

module.exports = router;