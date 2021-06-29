/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()
const axios = require('axios')

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

router.post('/', async (req, res) => {
  const userToCreate = {
    name: req.body.name,
    age: req.body.age,
  }

  const createdUser = await User.create(userToCreate)
  res.send(createdUser)
})

router.get('/initialize', async (req, res) => {
  await User.deleteMany({})
  await Action.deleteMany({})
  await ActionRecord.deleteMany({})

  const thuan = new User({
    name: 'Thuan',
    age: 31,
    occupation: 'Mechanical Engineer',
    location: 'Germany',
    email: 'thuan@coyotiv.com',
  })
  await thuan.setPassword('test')
  await thuan.save()
  const ozan = new User({
    name: 'Ozan',
    age: 24,
    occupation: 'Electrical Engineer',
    location: 'Turkey',
    email: 'ozan@coyotiv.com',
  })
  await ozan.setPassword('test')
  await ozan.save()

  const codingAction = await thuan.createAction('Coding')
  const gymAction = await thuan.createAction('Exercising')

  await thuan.startAction(codingAction)
  await thuan.stopAction(5)

  // await thuan.startAction(gymAction)

  console.log(thuan)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)
  console.log('wtf', user)
  if (user) res.render('user', { user: user })
  else res.sendStatus(404)
})

router.get('/:userId/json', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

router.get('/resetdb', async (req, res) => {
  await User.deleteMany({})
  await Action.deleteMany({})
  await ActionRecord.deleteMany({})

  res.sendStatus(200)
})

router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

router.post('/:userId/creates', async (req, res) => {
  const user = await User.findById(req.params.use + -rId)
  const action = await Action.findById(req.params.photoId)

  await user.createAction(action)
  res.sendStatus(200)
})

module.exports = router
