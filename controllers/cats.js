const { Cat, Feeding } = require("../models")

const create = async (req, res) => {
    try {
        const cat = await Cat.create(req.body)
        // console.log(cat.toJSON())
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json(error)
    }
}

const index = async (req, res) => {
    try {
        const cats = await  Cat.findAll({
            include: [{ model: Feeding, as: "feedings" }],
        })
        res.status(200).json(cats)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const update = async (req, res) => {
    try {
        const cat = await Cat.update(
            req.body,
            { where: { id: req.params.id }, returning: true }
        )
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteCat = async (req, res) => {
    try {
      // We can also call destroy on an instance:
      const cat = await Cat.findByPk(req.params.id)
      await cat.destroy()
      res.status(200).json(cat)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const addFeeding = async (req, res) => {
    try {
        req.body.catId = req.params.id
        const feeding = await Feeding.create(req.body)
        res.status(200).json(feeding)
    } catch (error) {
        res.status(500).json(error)
    }
  }

module.exports = {
    create,
    index,
    update,
    delete: deleteCat,
    addFeeding
}