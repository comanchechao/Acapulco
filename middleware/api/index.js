const express = require('express')
const app = express()
const router = express.Router()

app.use('/api', router)

module.exports = app