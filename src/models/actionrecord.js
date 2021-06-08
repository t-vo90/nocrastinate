module.exports = class ActionRecord {
  constructor(action) {
    this.action = action
    this.startTime = null
    this.stopTime = null
    this.inProgress = false
    this.productiveTime = null
    this.goalList = []
  }

  calculateProductiveTimeOfOneAction() {
    const time = Math.floor((this.stopTime - this.startTime) / 60 / 60 / 1000)
    this.productiveTime = time
    return time
  }

  // addUpHoursPerAction(actionRecords) {
  //   const sumOfHours = actionRecords.array.forEach(element => {

  //   });
  // }
}
