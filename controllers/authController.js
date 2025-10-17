import jwt from "jsonwebtoken";
import User from "../models/authModel.js";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email},
        process.env.JWT_SECRET,
        { expiresIn: "1h"}
    );
};

    export const register = async (req, res) => {
        try{
            const {name, email, student_no, residence, section, branch, roll_no, phone, gender} = req.body;

            if (!name||!email||!student_no||!residence||!section||!branch||!roll_no||!phone||!gender) {
                return res.status(400).json({ success:false, message:"All fields are required"});
            }
            const existingUser = await User.findOne({email});
            if(existingUser) {
                return res.status(409).json({success:false, message:"User Already Exists"});
            }

            const  user = await User.create({name, email, student_no, residence, section, branch, roll_no, phone, gender});

            res.status(201).json({
                success:true,
                message: "User Registered Successfully",
            });
        } catch (err) {
            res.status(500).json({
                success:false,
                message: "Registration Failed. Please Try Again",
            });
        }
    };

