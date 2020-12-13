import mongoose from 'mongoose'
import validator from 'validator'
import mongoosePaginator from 'mongoose-paginate'

import productSchema from '@/database/schemas/product'

// Add the paginator plugin to the schema
productSchema.plugin(mongoosePaginator)

// The first param is the collection name this model represents
const Product = mongoose.model('Product', productSchema)

module.exports = Product