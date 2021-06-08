/* CRUD Operations (CREATE UPDATE DELETE)
ENDPOINT is adress to resource

Routes:

/user -> gets all users
/user/:id -> gets one user
POST /users -> create a user
Delete /users/:id -> deletes the user
Patch /user/:id -> update a user

/offers -> gets all offers
/offer/:id -> gets one offer

Get -> gets the current state of resource
Post -> create a new resource
Delete -> delete a resource

Put -> updates an entire resource
Patch -> updates part of resource

Requests have:
* type of request
* target endpoint
* body
* headers
...

Response have:
*headers
*body
*status code
...
*/
const User = require('./user')

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

const users = [thuan, ozan]
