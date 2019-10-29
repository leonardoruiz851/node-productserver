const mongoose = require('../mongoose/mongoose.js');

const ProductSchema = new mongoose.Schema({
    sku: { type: Number, required: [true, 'sku required'], unique: true },
    name: { type: String, required: [true, 'name required'], lowercase: true },
    price: { type: Number, required: [true, 'price required'] },
    description: { type: String },
    material: { type: mongoose.Schema.Types.ObjectId },
    color: { type: mongoose.Schema.Types.ObjectId },
    image: { type: String },
    visible: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', ProductSchema);