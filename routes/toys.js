const router = require('express').Router()
const toysCtrl = require('../controllers/toys.js')

//routes
router.post('/', toysCtrl.create)
router.get('/', toysCtrl.index)
router.put('/:id', toysCtrl.update)
router.delete('/:id', toysCtrl.delete)

module.exports = router