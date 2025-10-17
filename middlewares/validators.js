import { check } from "express-validator";

export const registerValidation = [
  check("name").trim().notEmpty().withMessage("Name is required"),
  check("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  check("phone").isMobilePhone().withMessage("Enter a valid phone number"),
  check("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
  check("branch").trim().notEmpty().isIn(["CSE",
  "CSE-AIML",
  "CSE-DS",
  "CS",
  "CS/IT",
  "CS(HINDI)",
  "MECHANICAL",
  "ECE",
  "EN",
  "CIVIL",
  "other"]).withMessage("Branch must be valid"),
  check("roll_no").trim().notEmpty().withMessage("Roll number is required"),
  check("student_no").trim().notEmpty().withMessage("Student number is required"),
  check("residence").trim().notEmpty().withMessage("Residence is required"),
  check("section").trim().notEmpty().withMessage("Section is required"),
  check("gender").trim().notEmpty().isIn(["Male", "Female"]).withMessage("Gender must be Male or Female"),
];
