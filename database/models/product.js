// import mongoose from 'mongoose'
// import validator from 'validator'
// import mongoosePaginator from 'mongoose-paginate'

// import productSchema from '@/database/schemas/product'

// // Add the paginator plugin to the schema
// productSchema.plugin(mongoosePaginator)

// // The first param is the collection name this model represents
// const Product = mongoose.model('Product', productSchema)

// module.exports = Product


const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Product = model('Product', ProductSchema)

module.exports = Product



