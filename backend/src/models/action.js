const mongoose = require('mongoose')

const ActionSchema = new mongoose.Schema({
  name: String,
})

module.exports = mongoose.model('Action', ActionSchema)
// class Action {}
