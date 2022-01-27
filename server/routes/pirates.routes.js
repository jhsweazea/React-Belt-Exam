const PirateController = require("../controllers/pirates.controllers")

module.exports = app => {
    //CREATE
    app.post("/api/pirates/new", PirateController.createPirate),
    //READ
    app.get("/api/pirates", PirateController.getAllPirates),
    app.get("/api/pirates/:_id", PirateController.getPirateByID),
    //UPDATE...no wait

    //DELETE
    app.delete("/api/pirates/:_id", PirateController.deletePirate)
}