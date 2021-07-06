/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
// const host = process.env.MONGODB_HOST
// const port = process.env.MONGODB_PORT
let connectionString = process.env.MONGODB_CONNECTION_STRING

// mongoose.set('debug', true)

if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@cluster0.zh8uj.mongodb.net/${dbName}?retryWrites=true&w=majority`
}
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection established'))
  .catch(console.log)

module.exports = mongoose.connection
