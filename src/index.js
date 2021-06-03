const User = require('./user')
// const Goal = require('./goal')

const thuan = new User('Thuan', 31, 'Mechanical Engineer', 'Germany')
thuan.bio = ' On a Mission '
const ozan = new User('Ozan', 24, 'Electrical Engineer', 'Turkey')
ozan.bio = ' I am on my Way '

const codingAction = thuan.createAction('Coding')
const gymAction = thuan.createAction('Exercising')

thuan.startAction(codingAction)
thuan.stopAction(5)

thuan.startAction(gymAction)
thuan.stopAction(1)

thuan.startAction(gymAction)
thuan.stopAction(1)

console.log(thuan)

const test = [1]
console.log(test)
console.log(test.length)

/*  User Story - Step by Step -
    Create a user
        -> Name, Age , Occupation
    User creates Action
        -> Action creates Action record
        -> Action creates an Array of possible Actions for future Use
    User notes a Goal
        -> Specifies which Action should be done for how long
    User Starts Action
        -> Saves it as Active Action
        -> Pushes the Action into Action Record (Action + Time of Beginning)
    User stopps Action
        -> Pushes Stop Time into Action Record
        -> Action Record calculates Time spent on specific Action
    User creates a Session
    User Attend Action
    SessionAttend Unlocks the Ability of User to approve their Time spent together

    --- Maybe change Action to Activity
*/
