/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const user = require('../models/db')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'NoCrastinate', user })
})

module.exports = router
