const express = require('express')
const router = express.Router()
const data = require('../data')
const searchCache = require('memory-cache')


// api for products
router.get('/', async (req, res) => {
  try {
    const product = await Product.find()
    if (!product) throw new Error('no product found')
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  const newProduct = new Product(req.body)
  try {
    const Product = await newProduct.save()
    if (!Product) throw new Error('something is not right home boy')
    res.status(200).json(Product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const response = await Product.findByIdAndUpdate(id, req.body)
    if (!response) throw Error('somthing is not right')
    const updated = { ...response._doc, ...req.body }
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const removed = await Product.findByIdAndDelete(id)
    if (!removed) throw Error('something is not correct')
    res.status(200).json(removed)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})




router.get('/search/:term/:kind', (req, res, next) => {

  // Middelware search
  let key = '__express__' + req.originalUrl || req.url
  let cache = searchCache.get(key)

  cache ? res.send(cache) : next()

})
router.get('/lookup/:id', (req, res) => {
  data.lookup(req.params.id).then(result => {
    res.send(result.data)
  })
})

router.get('/search/:term/:kind', (req, res) => {
  let key = '__express__' + req.originalUrl || req.url

  data.search(req.params.term)
    .then(result => {
      const data = result.data.results.filter(i => i.kind == req.params.kind)
      const value = {
        data,
        resultCount: data.length,
        cache: true
      }

      searchCache.put(key, value, 180000)
      res.send({
        data,
        resultCount: data.length
      })
    })
})


module.exports = router
