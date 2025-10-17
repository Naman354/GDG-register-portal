import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import db from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import helmet from "helmet";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

db();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.disable("x-powered-by");

app.get("/", (req, res) => {
    res.send("<h1>API running....</h1>");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`); 
});
