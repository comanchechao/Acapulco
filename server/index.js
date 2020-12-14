import apiRoutes from '@/middleware/api'

import {
  Nuxt,
  Builder
} from 'nuxt'
import config from '../nuxt.config.js'
const express = require('express')
const mongoose = require('mongoose')

const app = express()
// Connecting to database

mongoose
  .connect(
    'mongodb+srv://kesler:payamone@cluster0.yhv0k.mongodb.net/Acapulco?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => console.log('connected to db'))

// Middleware api express routes
app.use('/api', apiRoutes)
// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

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
export default app
