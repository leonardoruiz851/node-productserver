var express = require('express');
var router = express.Router();

const Material = require('../models/Material');
const Color = require('../models/Color');

router.get('/', function(req, res, next) {
    let materialsPromise = new Promise(function(resolve, reject) {
        Material.find(function(err, materials) {
            if (err) {
                reject('Internal server error');
            } else if (!materials.length) {
                reject('Materials not found');
            } else {
                resolve(materials);
            }
        });
    });

    let colorsPromise = new Promise(function(resolve, reject) {
        Color.find(function(err, colors) {
            if (err) {
                reject('Internal server error');
            } else if (!colors.length) {
                reject('Colors not found');
            } else {
                resolve(colors);
            }
        });
    });

    Promise.all([materialsPromise, colorsPromise])
    .then(function(data) {
        let arr = {
            materials: data[0],
            colors: data[1],
        };
        res.status(200).json(arr);
    })
    .catch(function(err) {
        res.status(500).json({ message: err });
    });
});

module.exports = router;