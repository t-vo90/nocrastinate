require('colors')

module.exports = class User {
  constructor(name, age, occupation, location) {
    this.name = name
    this.age = age
    this.bio = ''

    this.occupation = occupation
    this.location = location

    this.activeAction = null
    this.possibleActions = []
    this.actionRecords = []
  }

  createAction(actionName) {
    const action = new Action(actionName)
    this.possibleActions.push(action)
    return action
  createAction(action) {
    this.action = action
  }

  approveTime(time) {
    this.approvedTime.push(time)
    time.approvedBy.push(this)
  }

  // createSession(session,sessionTime) {
  // session.Session.push(this)
  // sessionTime.Session.puhs(this)
  //
  // }

  // attendSession(session) {}

  get profile() {
    return `
        # Name ${this.name.red} Age ${this.age.red}
        # Bio
        # Top 5 Actions
       `
    /* ${this.action.map((actions) =>
            return this.action.name)} */
  }

  set profile(newValue) {
    throw new Error(' Cannot be overwritten')
  }
}
