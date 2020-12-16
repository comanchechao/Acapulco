import app from '~/server'

const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  console.log('soofsit?')
})

export default router
