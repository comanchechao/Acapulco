const { Schema, model, Mongoose } = require('mongoose')

const OrderSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
})

const Order = model('Order', OrderSchema)

module.exports = Order
