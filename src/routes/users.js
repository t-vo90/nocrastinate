/* eslint-disable no-unused-vars */
const express = require('express')
const { request } = require('../app')

const router = express.Router()

const User = require('../models/db')

/* GET users listing. */
router.get('/', (req, res, next) => {
  let result = users

  if (req.query.name) {
    result = users.filter(user => user.name.toLowerCase() === req.query.name.toLowerCase())
  }

  res.send(result)
})

router.get('/:userId', (req, res, next) => {
  const user = users[req.params.userId]
  if (user) res.send(user)
  else res.sendStatus(404)
})

module.exports = router
