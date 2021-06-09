const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
  name: String,
  goalHours: Number,
})

module.exports = mongoose.model('Goals', GoalSchema)
