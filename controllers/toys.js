const { Toy } = require('../models')

const create = async (req, res) => {
    try {
        const toy = await Toy.create(req.body)
        res.status(200).json(toy)
    }catch (error) {
        res.status(500).json(error)
    }
}

const index = async (req, res) => {
    try {
        const toys = await Toy.findAll()
        res.status(200).json(toys)
    } catch (error){
        res.status(500).json(error)
    }
}

const update = async (req, res) => {
    try {
        const toy = await Toy.findByPk(req.params.id)
        toy.set(req.body)
        await toy.save()

        res.status(200).json(toy)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    create,
    index,
    update
}