require('colors')
const Action = require('./action')
const ActionRecord = require('./actionrecord')

module.exports = class User {
  constructor(name, age, occupation, location) {
    this.name = name
    this.age = age
    this.occupation = occupation
    this.location = location
    this.bio = ''

    this.activeAction = null
    this.possibleActions = []
    this.actionRecords = []
  }

  createAction(actionName) {
    const action = new Action(actionName)
    const record = new ActionRecord(actionName)

    this.possibleActions.push(action)
    this.actionRecords.push(record)
    return action
  }

  startAction(action) {
    this.activeAction = action.name

    const indexOfActiveAction = this.actionRecords.indexOf(
      this.actionRecords.find(element => element.action === this.activeAction)
    )

    this.actionRecords[indexOfActiveAction].inProgress = true

    const startingTime = new Date(Date.now())
    this.actionRecords[indexOfActiveAction].startTime = startingTime

    console.log(`${action.name} has been started`)
  }
  stopAction(testTime) {
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
  }

  checkDailyReport() {}

  get profile() {
    return `
    _____________________________________________
    # Name: ${this.name.red} Age: ${this.age}
    _____________________________________________
    # Bio: ${this.bio.red}
    _____________________________________________
    # Top 5 Actions
    _____________________________________________
       `
    /* ${this.action.map((actions) =>
            return this.action.name)} */
  }
}
