import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//This is the code for register user
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password } = req.body;
    if (!fullname || !email || !phoneNumber || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User is already exist with this email!",
        success: false,
      });
    };
    const hashedPassoword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        fullname,
        email,
        phoneNumber,
        password: hashedPassoword,
    });
    //JWT token
    const  token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
    });

    return res.status(201).json({
        message: "Account is created Successfully.",
        success: true,
        token,
    });

  } catch (error) {
    console.log(error);
  }
};

//this is the code for login user
export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "Something is missing!",
                success: false,
            });
        };
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "User is not found!",
                success: false,
            });
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return  res.status(400).json({
                message: "Password is incorrect!",
                success: false,
            });
        };
        //jwt token check
        const tokenData = {
            userId: user._id,
        }
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        //user details
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
        };
        res.status(200).cookie("token",token,{
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
        }).json({
            message: `Welcome back ${user.fullname}!`,
            user,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

//For Logout
export const logout = async (req, res) => {
    try {
      return res.status(200).cookie("token", "", { maxAge: 0 }).json({
        message: "Logged out Successfully.",
        success: true,
      });
    } catch (error) {
      console.log(error);
    }
};

