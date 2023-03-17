const router = require('express').Router()
const toysCtrl = require('../controllers/toys.js')

//routes
router.post('/', toysCtrl.create)
router.get('/', toysCtrl.index)

module.exports = router