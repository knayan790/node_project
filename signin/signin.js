const express = require('express');
const router = require('./routes/routes.js');
require('dotenv').config();
const app = express();
const port =3000;
app.use(express.json());
app.use('/',router);
app.listen(port, ()=>{
    console.log("This server is running on port",port);
})