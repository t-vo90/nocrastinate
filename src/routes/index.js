/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()
const User = require('../models/user')

console.log('----------->')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const users = await User.find({})
  res.render('index', { title: 'NoCrastinate', users })
})

module.exports = router
