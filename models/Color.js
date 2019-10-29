const mongoose = require('../mongoose/mongoose.js');

const ColorSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name required'], lowercase: true }
});

module.exports = mongoose.model('Color', ColorSchema);