/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Whatever I Want you to be' })
})

module.exports = router
