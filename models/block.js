const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blockSchema = new Schema({
  _id: {
    type: Object,
    required: true
  },
  name: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: false
  }
});

const Block = mongoose.model('customers', blockSchema);

module.exports = Block;
