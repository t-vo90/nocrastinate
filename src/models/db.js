const User = require('./user')
const Action = require('./action')
const ActionRecord = require('./actionrecord')

const user = []

async function initalizeProject() {
  await User.deleteMany()
  await Action.deleteMany()
  await ActionRecord.deleteMany()

  const thuan = await User.create({ name: 'Thuan', age: 31, occupation: 'Mechanical Engineer', location: 'Germany' })
  const ozan = await User.create({ name: 'Ozan', age: 24, occupation: 'Electrical Engineer', location: 'Turkey' })
  // const thuan = new User('Thuan', 31, 'Mechanical Engineer', 'Germany')
  // thuan.bio = ' On a Mission '
  // const ozan = new User('Ozan', 24, 'Electrical Engineer', 'Turkey')
  // ozan.bio = ' I am on my Way '
  //
  const codingAction = await thuan.createAction('Coding')
  const gymAction = await thuan.createAction('Exercising')
  //
  await thuan.startAction(codingAction)
  // thuan.stopAction(5)

  await thuan.startAction(gymAction)

  console.log('test', thuan.possibleActions.find(a => a.name == 'Codingx')?.name)

  // thuan.stopAction(1)

  // thuan.startAction(gymAction)
  // thuan.stopAction(1)

  user.push([thuan, ozan])
  // ;[thuan, ozan].forEach(element => element.save())
}

initalizeProject()

module.exports = user
