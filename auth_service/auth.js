const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyparse = require('body-parser');
const port = 3001;
const router = require('./routes/route');
app.use(cors());
app.use('/', router);
app.listen(port, ()=>{
    console.log("This server is running on port :", port);
})