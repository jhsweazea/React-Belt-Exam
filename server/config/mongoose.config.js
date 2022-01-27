const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/pirates", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Yarr cap'n, we've established a connection to the Pirates database."))
    .catch(err => console.log("Avast! Something's gone wrong with the connection. Arr!", err));
