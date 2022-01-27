const mongoose = require("mongoose");

const PirateSchema = mongoose.Schema({
    pirateName: {
        type: String,
        required:[true, "Yar, ye need a name fer us to call ye!"],
        minlength: [3, "Yarr, a pirate be needin' at least thre letters to his or her name. Arr!"]
    },
    pirateImage: {
        type: String,
        required:[true, "We'll be needin' a picture of ye in case we need to identify yer body, mate."]
    },
    pirateTreasures: {
        type: Number,
        required: [true, "Yarr! We need to know how many treasures ye've collected, even if it's zero!"],
        min: [0, "Are ye tellin' me ye've given treasures AWAY?!"]
    },
    piratePhrase: {
        type: String,
        required: [true, "All pirates be needin' a catchphrase, mate! How else are we supposed to identify one another?"],
        minlength: [5, "Ye need at least five characters fer your catchphrase, ye scurvy dog!"]
    },
    crewPosition: {
        type: String,
        required:[true, "Ye need to assign yerself a position on me ship!"]
    },
    pegLeg: {
        type: Boolean
    },
    eyePatch: {
        type: Boolean
    },
    hookHand: {
        type: Boolean
    }
}, {timestamps:true});

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;