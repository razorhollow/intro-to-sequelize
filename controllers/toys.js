const { Toy, Container } = require('../models')

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
        const toys = await Toy.findAll({
            include: [{ model: Container, as: "containers" }],
        })
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

const deleteToy = async (req, res) => {
    try {
        const toy = await Toy.findByPk(req.params.id)
        await toy.destroy()
        res.status(200).json(toy)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addContainer = async (req, res) => {
    try {
       req.body.toyId = req.params.id
       const container = await Container.create(req.body)
       console.log(container)
       res.status(200).json(container)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


module.exports = {
    create,
    index,
    update,
    delete: deleteToy,
    addContainer
}