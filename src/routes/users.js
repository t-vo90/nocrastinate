/* eslint-disable no-unused-vars */
const { query } = require('express')
const express = require('express')

const router = express.Router()
const users = require('../models/db')

/* GET users listing. */
router.get('/', (req, res, next) => {
  // router.get('/', async (req, res, next) => {
  // const users = await User.find()
  let result = users
  // let query = {}
  if (req.query.name) {
    // query.name = req.query.name
    result = users.filter(user => user.name.toLowerCase() === req.query.name.toLowerCase())
  }

  if (req.query.age) {
    // query.age = req.query.age
    result = users.filter(user => user.age === req.query.age)
  }

  res.send(result)
  // res.send(await User.find())
})
// router.get('/initialize', async (req, res) => {
//   await initalizeProject()
//   console.log()
//   res.sendStatus(200)
// })
router.get('/:userId', (req, res, next) => {
  // router.get('/:userId', async (req, res, next) => {
  // const user = await User.findById(req.params.userID)
  const user = users[req.params.userId]
  if (user) res.send(user)
  else res.sendStatus(404)
})

module.exports = router
