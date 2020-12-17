import { Nuxt, Builder } from 'nuxt'
import config from '../nuxt.config.js'
// import apiRoutes from './api/index'
// import authRoutes from './middleware/auth/auth'
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

// api routes

const apiRoutes = require('../server/api/index')
const productsRoutes = require('./api/product')
const orderRoutes = require('./api/order')

const app = express()
app.use(bodyParser.json())
// Connecting to database

mongoose
  .connect(
    'mongodb+srv://Greez:wildlikegreez!@nodejs-startup.ew0ie.mongodb.net/nodejs-startup?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => console.log('connected to db'))

// Middleware api express routes
// app.use('/api/auth', authRoutes)
app.use('/api', apiRoutes)
app.use('/api/products' , productsRoutes)
app.use('/api/orders', orderRoutes)
// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(process.env.PORT, process.env.HOST, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(
    `Server listening on http://${process.env.HOST}:${process.env.PORT}`
  )
})


module.exports = app
