const router = require('express').Router()
const cats = require('../controllers/cats.js')
const catsCtrl = require('../controllers/cats.js')

//routes

router.post('/', catsCtrl.create)
router.get('/', catsCtrl.index)
router.put('/:id', catsCtrl.update)
router.delete('/:id', catsCtrl.delete)

router.post('/:id/feedings', catsCtrl.addFeeding)

module.exports = router