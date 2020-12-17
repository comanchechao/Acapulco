const express = require('express')
const router = express.Router()

const Order = require('../../database/models/order')
const Product = require('../../database/models/product')

router.get('/', (req, res, next) => {
  Order.find()
    .populate('product', 'title price')
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
})

router.post('/', (req, res, next) => {
  Product.findById(req.body.productId).then((product) => {
    if (!product) {
      return res.status(404).json({
        message: 'product not found',
      })
    }
    const order = new Order({
      product: req.body.productId,
      quantity: req.body.quantity,
    })
    return order
      .save()
      .then((result) => {
        res.status(201).json(result)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({
          error: err,
        })
      })
  })
})

router.get('/:id', (req, res, next) => {
  Order.findById(req.params.id)
    .populate('product', 'title price inStock')
    .then((result) => {
      res.status(200).json({
        order: result,
        request: {
          type: 'GET',
          URL: 'http://localhost:3000/orders',
        },
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
})

router.delete('/:id', (req, res, next) => {
  Order.remove({ _id: req.params.id }).then((result) => {
    res.status(200).json({
      message: 'order removed from the database',
    })
  })
})

module.exports = router
