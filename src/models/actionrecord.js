const mongoose = require('mongoose')

const ActionRecordSchema = new mongoose.Schema({
  action: String,
  startTime: String,
  stopTime: String,
  inProgress: Boolean,
  productiveTime: Number,

  goalList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action',
      autopopulate: true,
    },
  ],
})

class ActionRecord {
  async calculateProductiveTimeOfOneAction() {
    const time = Math.floor((this.stopTime - this.startTime) / 60 / 60 / 1000)
    this.productiveTime = time
    await this.save()
    return time
  }

  // addUpHoursPerAction(actionRecords) {
  //   const sumOfHours = actionRecords.array.forEach(element => {

  //   });
  // }
}
ActionRecordSchema.loadClass(ActionRecord)
module.exports = mongoose.model('ActionRecord', ActionRecordSchema)
