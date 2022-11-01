import asyncHandler from 'express-async-handler'
import User from '..models/user';

const authUser = asyncHandler(async(req,res)=>{
    const {email,password}= req.body;
    if (email === '' && password === ''){
        res.status(400);
        throw new Error("Enter Email and password")
    }else{
        const user = await User.findOne({email});
        if (!user){
            res.status(400);
            throw new Error ("User with this email does not exist")
        }else{
            if(password===''){
                res.status(400);
                throw new Error ('Please enter password')
            }else{
                if (password===password){
                    res.json(user)
                }else{
                    res.status(400);
                    thro
                }
            }
        }
    }
})


const registerUser = asyncHandler(async(req,res)=>{
    const {firstName,lastName,email,phoneNumber,password,username}= req.body;
    const existingUser = await User.findOne({email});
    if (existingUser){
        res.status(400);
        throw new Error("User with this email already exists")
    }
    const user = await User.create({
        firstName,lastName,email,password,username,phoneNumber
    });
     if (user){
        res.status(200).json("Account created")
     }else {
        throw new Error("Invalid data")
     }
})


export {
    authUser,
    registerUser,
}