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


  // createSession(session,sessionTime) {
  // session.Session.push(this)
  // sessionTime.Session.puhs(this)
  //
  // }

  // attendSession(session) {}

  get profile() {
    return `
        # Name ${this.name.red} Age ${this.age}
        # Bio ${this.bio.america}
        # Top 5 Actions
       `
    /* ${this.action.map((actions) =>
            return this.action.name)} */
  }

  set profile(newValue) {
    throw new Error(' Cannot be overwritten')
  }
}
