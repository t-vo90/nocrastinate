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

  activeAction: {
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
    this.activeAction = record

    const indexOfActiveAction = this.actionRecords.indexOf(
      this.actionRecords.find(element => element.action === this.activeAction)
    )

    this.actionRecords.push(record)
    this.actionRecords[indexOfActiveAction].inProgress = true

    const startingTime = new Date(Date.now())
    this.actionRecords[indexOfActiveAction].startTime = startingTime
    await this.save()
    console.log(`${action.name} has been started`)
  }

  async stopAction(testTime) {
    const indexOfActiveAction = this.actionRecords.indexOf(
      this.actionRecords.find(element => element.action === this.activeAction)
    )
    this.actionRecords[indexOfActiveAction].inProgress = false

    const stoppingTime = new Date(Date.now() + testTime * 60 * 60 * 1000)
    this.actionRecords[indexOfActiveAction].stopTime = stoppingTime

    console.log(`${this.activeAction} has been stopped`)
    const productiveTime = this.actionRecords[indexOfActiveAction].calculateProductiveTimeOfOneAction()
    console.log(`You have been ${this.activeAction} for ${productiveTime} hour/s`)
    this.activeAction = null
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
