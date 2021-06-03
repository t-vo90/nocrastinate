/* eslint-disable no-unused-vars */
const express = require('express')
const { request } = require('../app')

const router = express.Router()

const User = require('../models/user')
const Photo = require('../models/photo')

const mihri = new User('mihri', 35)
const armagan = new User('armagan', 36)

const steve = new User('steve', 21)
steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

const berlinPhoto = new Photo('berlin.jpg')
const munichPhoto = new Photo('munich.jpg')

steve.addPhoto(berlinPhoto)
steve.addPhoto(munichPhoto)

armagan.likePhoto(berlinPhoto)
mihri.likePhoto(berlinPhoto)

const users = [mihri, armagan, steve]

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
