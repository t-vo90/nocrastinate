const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
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
    await record.update({ startTime: startingTime })
    await this.save()
  }

  async stopAction(testTime) {
    const activeAction = await Action.findById(this.activeActionRecord.action)
    await console.log('Stopping', activeAction.name)

    const stoppingTime = new Date(Date.now() + testTime * 60 * 60 * 1000)
    console.log(stoppingTime)

    const activeActionRecord = await ActionRecord.findByIdAndUpdate(this.activeActionRecord, { stopTime: stoppingTime })
    console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest', activeActionRecord)

    // this.activeAction = null

    // const productiveTime = this.actionRecords.calculateProductiveTimeOfOneAction()
    // console.log(`You have been ${activeAction} for ${productiveTime} hour/s`)
    await this.save()
  }

  checkDailyReport() {}
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('User', userSchema)
