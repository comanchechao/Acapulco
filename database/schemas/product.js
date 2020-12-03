import mongoose from 'mongoose';
import validator from 'validator';
import weightSchema from './weight';
import priceSchema from './price';
import customizationOptions from './customizationOptions';

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true
  },

  item_url: {
    type: String,
    required: true,
    trim: true,
    validate: (value) => {
      return validator.isURL(value, {
        allow_underscores: true
      })
    }
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: config.get('mongodb_collections.product_categories'),
    required: true
  },
  price: {
    type: priceSchema,
    required: true
  },
  weight: {
    type: weightSchema,
    required: true
  },
  customizationOptions: {
    type: customizationOptions,
    required: false
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },

}, {
  timestamps: true
});
module.exports = productSchema;
