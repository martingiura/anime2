const mongoose = require('mongoose')

const connectDB = async() => {
await mongoose.connect(process.env.MONGODB)
console.log('Database connected')
}

module.exports = connectDB