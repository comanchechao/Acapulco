const { Schema, model, Mongoose } = require('mongoose')


// ref to product model to connect two models
//will activate the populate function in "api/order.js line::12"
const OrderSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
})

const Order = model('Order', OrderSchema)

module.exports = Order
