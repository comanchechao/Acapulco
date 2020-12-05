import mongoose from 'mongoose'
import validator from 'validator'

const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hexValue: {
      type: String,
      required: true,
      validate: (value) => {
        return validator.isHexColor(value)
      },
    },
  },
  {
    _id: false,
  }
)

module.exports = colorSchema
