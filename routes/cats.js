const router = require('express').Router()
const catsCtrl = require('../controllers/cats.js')

//routes

router.post('/', catsCtrl.create)
router.get('/', catsCtrl.index)
router.put('/:id', catsCtrl.update)
router.delete('/:id', catsCtrl.delete)

module.exports = router