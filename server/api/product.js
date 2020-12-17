const express = require('express')
const router = express.Router()

const Product = require('../../database/models/product')

//this vesion will have some changes to in image property this is more challenging that django man
router.get('/', (req, res, next) => {
  Product.find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(404).json({ error: err })
    })
})

router.post('/', (req, res, next) => {
  const product = new Product({
    title: req.body.title,
    inStock: req.body.inStock,
    price: req.body.price,
  })
  product
    .save()
    .then((result) => {
      console.log(result)
      res.status(201).json({
        message: 'handing POST the request here and getting shiwfty',
        createdProduct: result,
      })
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Product.findById(id)
    .then((result) => {
      console.log(result)
      if (result) {
        res.status(200).json({ result })
      } else {
        res
          .status(404)
          .json({ message: 'no valid product found for the provided ID' })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err })
    })
})

router.patch('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'we updated the shit the thing the pack',
  })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Product.remove({ _id: id })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
})
module.exports = router
