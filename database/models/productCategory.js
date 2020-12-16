import mongoose from 'mongoose';
import validator from 'validator';

import productCategorySchema from '../schemas/productCategory';

productCategorySchema.index({
  category: 1,
  subcategory: 1
}, {
  unique: true
});

// The first param is the collection name this model represents
const ProductCategory = mongoose.model('productCategory', productCategorySchema);
module.exports = ProductCategory
