const { application } = require("express")
const Pirate = require("../models/pirate.model")

//CREATE
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
    .then(newPirate => res.json(newPirate))
    .catch(err => res.status(400).json(err))
}
//READ
module.exports.getAllPirates = (req, res) => {
    Pirate.find().sort({pirateName: 1})
    .then(allPirates => res.json(allPirates))
    .catch(err => res.json(err))
}
module.exports.getPirateByID = (req, res) => {
    Pirate.findOne({_id: req.params._id})
    .then((onePirate) => res.json(onePirate))
    .catch(err => res.json(err))
}
//UPDATE...JK

//DELETE
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
    .then((deleteConfirm) => res.json(deleteConfirm))
    .catch(err => res.json(err))
}