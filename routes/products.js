var express = require('express');
var router = express.Router();

const Product = require('../models/Product');

router.get('/', function(req, res, next) {
    Product.find({ visible: true }, function(err, products) {
        if (err) {
            res.status(500).json({ message: 'Internal server error' });
        } else if (!products.length) {
            res.status(401).json({ message: 'Products not found' });
        } else {
            res.status(200).json(products);
        }
    }).limit(12);
});

router.get('/:id', function(req, res, next) {
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            res.status(500).json({ message: 'Internal server error' });
        } else if (!product) {
            res.status(401).json({ message: 'Product not found' });
        } else {
            res.status(200).json(product);
        }
    });
});

router.post('/add', function(req, res) {
    const { sku, name, price, description, material, color, image } = req.body;
    const product = new Product({ sku, name, price, description, material, color, image });
    product.save(function(err) {
        if (err) {
            if (err.name === 'ValidationError') {
                res.status(500).json(err.errors);
            } else if (err.message.indexOf('duplicate key error') !== -1) {
                res.status(500).json({ message: 'Product already exists' });
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        } else {
            res.status(200).json({ message: 'Product added successfully' });
        }
    });
});

module.exports = router;