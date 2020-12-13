import mongoose from 'mongoose'
import validator from 'validator'
import customizationOptions from '@/database/schemas/customizationOptions.js'
import weightSchema from './weight'
import priceSchema from './price'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },

    item_url: {
      type: String,
      required: true,
      trim: true,
      validate: (value) => {
        return validator.isURL(value, {
          allow_underscores: true,
        })
      },
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    price: {
      type: priceSchema,
      required: true,
    },
    weight: {
      type: weightSchema,
      required: true,
    },
    customizationOptions: {
      type: customizationOptions,
      required: false,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = productSchema
