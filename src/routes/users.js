/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Action = require('../models/action')
const ActionRecord = require('../models/actionrecord')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }

  res.send(await User.find(query))
})
router.get('/initialize', async (req, res) => {
  const thuan = await User.create({ name: 'Thuan', age: 31, occupation: 'Mechanical Engineer', location: 'Germany' })
  const ozan = await User.create({ name: 'Ozan', age: 24, occupation: 'Electrical Engineer', location: 'Turkey' })

  const codingAction = await thuan.createAction('Coding')
  const gymAction = await thuan.createAction('Exercising')

  await thuan.startAction(codingAction)
  // thuan.stopAction(5)

  await thuan.startAction(gymAction)

  console.log(thuan)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)
  console.log(user)
  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
