    // const {model} = require('../model');
    const jwt = require('jsonwebtoken');
    const users =  {email : "nayankaely@gmail.com", password: "Admin@123"};
    const path = require('path');
    require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
    const SECRET_KEY = process.env.SECRET_KEY;
    console.log(SECRET_KEY)
    const Task = {
        signinPostApi :(req,res)=>{
            console.log(req.body)
            const {email, password} =req.body;

            const user = users.email == email && users.password == password;

            console.log(user);
            if(!user) return res.status(401).json({message:"Invalid credential"});

            const token = jwt.sign({email}, SECRET_KEY, {expiresIn: "1hr"});

            res.json({code: 200,
                status:"Success",
                message: "Login successfully..",
                token: token
            });
        }
    }; 

    module.exports = Task;