const bcrypt= require('bcryptjs');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const SECRET_KEY = process.env.SECRET_KEY;
console.log(SECRET_KEY,'d')
const Task = {
    authenticateToken: (req, res)=>{
    
        const token = req.headers['authorization'];
        console.log(token)
        if(!token) return res.sendStatus(401);
       jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) return res.status(403).json({ message: "Token is invalid or expired" });
            return res.status(200).json({ message: "Token is valid    ", user: decoded });
        });


    }
}
module.exports =Task;