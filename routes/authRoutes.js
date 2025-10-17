import express from "express";
import { register } from "../controllers/authController.js";
import { registerValidation } from "../middlewares/validators.js";
import { validationResult } from "express-validator";
import { registerLimiter } from "../middlewares/rateLimiter.js";


const router = express.Router();

router.post("/register", registerLimiter, registerValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
  next();
}, register);

export default router;
