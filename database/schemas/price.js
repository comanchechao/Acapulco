import mongoose from 'mongoose'
import validator from 'validator'

const priceSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      enum: ['USD', 'Rial', 'Tooman'],
    },
  },
  {
    _id: false,
  }
)

module.exports = priceSchema
