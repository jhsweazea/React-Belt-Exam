const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('../server/config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const pirateRoutes = require('./routes/pirates.routes');
pirateRoutes(app);
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );