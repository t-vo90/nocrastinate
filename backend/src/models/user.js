const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
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
  }

  async stopAction(testTime) {
    const activeAction = await Action.findById(this.activeActionRecord.action)
    await console.log('Stopping', activeAction.name)

    const stoppingTime = new Date(Date.now() + testTime * 60 * 60 * 1000)
    console.log(stoppingTime)
    console.log(this.activeActionRecord)

    const activeActionRecord = await ActionRecord.find(this.activeActionRecord)
    console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest', activeActionRecord)
    this.activeActionRecord.stopTime = stoppingTime

    this.activeAction = null

    // const productiveTime = this.actionRecords.calculateProductiveTimeOfOneAction()
    // console.log(`You have been ${activeAction} for ${productiveTime} hour/s`)
    await this.save()
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
