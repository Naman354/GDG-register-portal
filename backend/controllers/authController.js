import jwt from "jsonwebtoken";
import User from "../models/authModel.js";
// import bcrypt from "bcryptjs";
import axios from "axios";


// const generateToken = (user) => {
//     return jwt.sign(
//         { id: user.id, email: user.email},
//         process.env.JWT_SECRET,
//         { expiresIn: "1h"}
//     );
// };

    export const register = async (req, res) => {
        try{
            const {name, email, student_no, residence, section, branch, roll_no, phone, gender,"g-recaptcha-response": captcha} = req.body;

             if (!captcha) {
             return res.status(400).json({ success: false, message: "Please complete CAPTCHA" });
            }
            const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`;
            const response = await axios.post(verifyUrl);

             if (!response.data.success) {
             return res.status(400).json({ success: false, message: "CAPTCHA verification failed" });
            }
            
            console.log("CAPTCHA verification result:", response.data);
            
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
                captcha: response.data,
            });
        } catch (err) {
            console.error("Registration Error:", err.response?.data || err.message || err);
            res.status(500).json({
                success:false,
                message: "Registration Failed. Please Try Again",
            });
        }
    };

