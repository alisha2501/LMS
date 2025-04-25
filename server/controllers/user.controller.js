import {User} from '../models/user.model.js';
import bycrypt from 'bcryptjs'; //for password diff or random password generation
import { generateToken } from '../utils/generatetoken.js'; //for token generation



export const register = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        if(!name ||!email ||!password){
            return res.status(400).json({error: "All fields are required"});
        }
        const user = await User.findOne({email}); //check if user already exists registration ke wqt
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const hashedPassword = await bycrypt.hash(password, 10); 
        await User.create({
            name, 
            email, 
            password: hashedPassword
        });
        return res.status(201).json({
            success: true,
            message: "Account created successfully"
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "failed to create account"
        })
    }
}

export const login = async(req,res) => {
    try {
        const {email, password} = req.body;
        if(!email ||!password){
            return res.status(400).json({error: "All fields are required"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await bycrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        generateToken(res,user, 'Welcome' + user.name);
        // return res.status(200).json({
        //     success: true,
        //     message: "Logged in successfully",
        //     user: {
        //         id: user._id,
        //         name: user.name,
        //         email: user.email
        //     }
        // })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "failed to login"    
        })
    }
}