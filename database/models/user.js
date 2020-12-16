// import mongoose from 'mongoose'
// import validator from 'validator'

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     lowercase: true,
//     trim: true,
//     validate: (value) => {
//       return validator.isEmail(value)
//     },
//   },

//   password: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   permissions: {
//     type: Number,
//     required: true,
//   },
// })

// const User = mongoose.model('Users', userSchema)
// module.exports = User
