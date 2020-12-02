import mongoose from 'mongoose';
import validator from 'validator';
let weightSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true,
    enum: ['KG', 'LB']
  }
}, {
  _id: false
})

module.exports = weightSchema;
