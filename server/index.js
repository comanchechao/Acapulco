const express = require('express')
const consola = require('consola')
const mongoose = require('mongoose')
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()
// Connecting to database 

mongoose.connect('mongodb+srv://kesler:payamone@cluster0.yhv0k.mongodb.net/Acapulco?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result) => console.log('connected to db'));


//Middleware api express routes
const serverAPI = require('../server-middleware/api')
app.use(serverAPI)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
