const User = require('../models/User');
import {Request, Response} from 'express';
const test = async (req: Request, res: Response) => {
    return res.json("success");
}

const registerUser = async (req: Request, res: Response) => {
    try{
        console.log(req.body);
        const {name, email, password} = req.body;
        if(!name){
            res.json({
                error: 'name is required'
            })
        }

        if(!email){
            res.json({
                error: 'email is required'
            })
        }

        if(!password){
            res.json({
                error: 'password is required'
            })
        }

        if(password.length < 6){
            res.json({
                error: 'password should be a lest 6 characters'
            })
        }
        console.log('2');
        const emailExist = await User.findOne({email});
        console.log(emailExist)
        if(emailExist){
            return res.json({
                error: 'this email yet exist'
            })
        }
        console.log('3');
        const user = new User({name, email, password});
        user.save();
        console.log(user);
        return res.json("success");
       
    }catch(err){
        res.json("error")
    }
    
}
export {};
module.exports = {
    test,
    registerUser
}