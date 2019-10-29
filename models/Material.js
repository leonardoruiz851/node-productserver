const mongoose = require('../mongoose/mongoose.js');

const MaterialSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name required'], lowercase: true }
});

module.exports = mongoose.model('Material', MaterialSchema);