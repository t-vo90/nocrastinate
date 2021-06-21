const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const action = require('./action')
const Action = require('./action')
const ActionRecord = require('./actionrecord')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  occupation: String,
  location: String,
  bio: String,

  activeActionRecord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ActionRecord',
    autopopulate: true,
  },
  possibleActions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action',
      autopopulate: true,
    },
  ],
  actionRecords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ActionRecord',
      autopopulate: true,
    },
  ],
})

class User {
  async createAction(actionName) {
    const action = await Action.create({ name: actionName })
    this.possibleActions.push(action)
    await this.save()
    return action
  }

  async startAction(action) {
    const record = await ActionRecord.create({ action })
    this.activeActionRecord = record
    this.actionRecords.push(record)

    console.log(`${record.action.name} has been started`)
    const startingTime = new Date(Date.now())
    this.actionRecords.startTime = startingTime
    await this.save()
    return record
  }

  async stopAction(testTime) {
    const activeAction = await Action.findById(this.activeActionRecord.action)

    await console.log('------------------------------------------>test', this.actionRecords)

    const stoppingTime = new Date(Date.now() + testTime * 60 * 60 * 1000)
    console.log(this.activeActionRecord._id)
    const activeActionRecord = await ActionRecord.findById(this.activeActionRecord._id)

    this.activeActionRecord.stopTime = stoppingTime
    await this.save()


    await console.log(`${activeAction} has been stopped`)
    // this.activeActionRecord = null
    await this.save()

    // const productiveTime = this.actionRecords.calculateProductiveTimeOfOneAction()
    // console.log(`You have been ${activeAction} for ${productiveTime} hour/s`)
  }

  checkDailyReport() {}

  get profile() {
    return `
    _____________________________________________
    # Name: ${this.name} Age: ${this.age}
    _____________________________________________
    # Bio: ${this.bio}
    _____________________________________________
    # Top 5 Actions
    _____________________________________________
    `
    /* ${this.action.map((actions) =>
      return this.action.name)} */
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
