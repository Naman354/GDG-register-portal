import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    student_no: {
        type:String,
        required:true,
    },
    residence: {
      type:String,
      required:true,
    },
    section: {
      type:String,
      required:true,
    },
    branch: {
        type:String,
        required:true,
        enum:["CSE",
            "CSE-AIML",
            "CSE-DS",
            "CS",
            "CS/IT",
            "CS(HINDI)",
            "MECHANICAL",
            "ECE",
            "EN",
            "CIVIL",
            "other"],
    },
    roll_no: {
        type:String,
        required:true,        
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type:String,
      required:true,
      enum:["Male", "Female"],
    }        
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);