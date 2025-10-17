import rateLimit from "express-rate-limit";

export const registerLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 5, 
  message: {
    success: false,
    message: "Too many registration attempts from this IP, please try again after a minute",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
