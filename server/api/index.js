const express = require('express')
const router = express.Router()


//soofsit remaings untouched 
router.get('/', (req, res) => {
  console.log('soofsit?')
})

// plz use modue.export while you can
module.exports = router
