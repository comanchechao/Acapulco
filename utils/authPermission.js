// import jwt from 'jsonwebtoken'
// const secret = require('./envConfig').jwt_secret

// const ADMIN_PERMISSION = 4096

// exports.minimumPermissionLevelRequired = (requiredPermissionLevel) => {
//   return (req, res, next) => {
//     const userPermissionLevel = parseInt(req.jwt.permissionLevel)
//     const userId = req.jwt.userId
//     if (userPermissionLevel & requiredPermissionLevel) {
//       return next()
//     } else {
//       return res.status(403).send()
//     }
//   }
// }

// exports.onlySameUserOrAdminCanDoThisAction = (req, res, next) => {
//   const userPermissionLevel = parseInt(req.jwt.permissionLevel)
//   const userId = req.jwt.userId
//   if (req.params && req.params.userId && userId === req.params.userId) {
//     return next()
//   } else if (userPermissionLevel & ADMIN_PERMISSION) {
//     return next()
//   } else {
//     return res.status(403).send()
//   }
// }

// exports.sameUserCantDoThisAction = (req, res, next) => {
//   const userId = req.jwt.userId

//   if (req.params.userId !== userId) {
//     return next()
//   } else {
//     return res.status(400).send()
//   }
// }
