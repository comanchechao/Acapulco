// const crypto = require('crypto')
// const User = require('@/database/models/user')

// exports.insert = (req, res) => {
//   const salt = crypto.randomBytes(16).toString('base64')
//   const hash = crypto
//     .createHmac('sha512', salt)
//     .update(req.body.password)
//     .digest('base64')
//   req.body.password = salt + '$' + hash
//   req.body.permissionLevel = 1
//   User.createUser(req.body).then((result) => {
//     res.status(201).send({ id: result._id })
//   })
// }
