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
    // const res = await Action.findById(action._id)
    console.log(`Possible Action ${this.possibleActions.find(a => a.name)}`)
    // console.log(`Possible Action ${res.name}`)
    await this.save()
    return action
  }

  async startAction(action) {
    const record = await ActionRecord.create({ action })
    this.activeActionRecord = record
    console.log('Active Action Record', this.activeActionRecord)
    console.log('Active Action', this.activeActionRecord.action)
    console.log('Active Action Name', this.activeActionRecord.action.name)

    this.actionRecords.push(record)

    console.log(`${record.action.name} has been started`)
    //   const startingTime = new Date(Date.now())
    //   this.actionRecords.startTime = startingTime
    await this.save()
  }

  async stopAction() {
    const activeAction = await this.activeActionRecord.action
    await console.log('test', activeAction)

    //   const stoppingTime = new Date(Date.now() + testTime * 60 * 60 * 1000)
    //   this.actionRecords.stopTime = stoppingTime

    //   console.log(`${activeAction} has been stopped`)
    // this.activeAction = null
    // await this.save()

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
