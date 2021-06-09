const mongoose = require('mongoose')

const ActionSchema = new mongoose.Schema({
  Action: String,
})

module.exports = mongoose.model('Action', ActionSchema)
// class Action {}
