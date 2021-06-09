const User = require('./user')

const user = []

async function initalizeProject() {
  const thuan = await User.create({ name: 'Thuan', age: 31, occupation: 'Mechanical Engineer', location: 'Germany' })
  const ozan = await User.create({ name: 'Ozan', age: 24, occupation: 'Electrical Engineer', location: 'Turkey' })
  // const thuan = new User('Thuan', 31, 'Mechanical Engineer', 'Germany')
  // thuan.bio = ' On a Mission '
  // const ozan = new User('Ozan', 24, 'Electrical Engineer', 'Turkey')
  // ozan.bio = ' I am on my Way '
  //
  const codingAction = thuan.createAction({ Action: 'Coding' })
  const gymAction = thuan.createAction({ Action: 'Exercising' })

  thuan.startAction(codingAction)
  thuan.stopAction(5)

  thuan.startAction(gymAction)
  thuan.stopAction(1)

  thuan.startAction(gymAction)
  thuan.stopAction(1)

  user.push([thuan, ozan])
  ;[thuan, ozan].forEach(element => element.save())

  console.log(user)
}

initalizeProject()

module.exports = user
