const User = require('./user')
// const Action = require('./src/action')
const Goal = require('./goal')

const thuan = new User('Thuan', 31, 'Mechanical Engineer', 'Germany')
const ozan = new User('Ozan', 24, 'Electrical Engineer', 'Turkey')
thuan.bio = ' On a Mission '

const codingAction = thuan.createAction('Coding')
const thuansGoals = new Goal(codingAction, 5)

console.log(thuan, ozan)
console.log(thuansGoals)

console.log(thuan.profile)

thuan.startAction(codingAction)

// create action record
// save it as active action
// when stopping push it to actionRecords with the time

thuan.stopAction()

// ozan.approveTime(actionRecords)

// thuan.createSession('Study together', date(now))
// ozan.attendSession()

// console.log(thuan, thuan.timetrack[0].approvedBy)
