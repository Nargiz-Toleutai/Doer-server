import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import * as http from "http";
import habitRoutes from './src/routes/habit.js';
import userRoutes from './src/routes/user.js';
import { habits } from './src/data/habits.js';
import Habit from "./src/models/Habit.js";
import { createHabit } from "./src/controllers/habit.js";


/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));


/* FILE STORAGE */
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/assets");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({ storage });

// /* ROUTES WITH FILES */
// app.post("/habits", createHabit);
// app.post("/habits", upload.single("file"), createHabit);
// habits.map((habit) => app.delete(`/habits/${habits.id}`))

//
// /* ROUTES */
// app.use("/auth", authRoutes);
// app.use("/users", userRoutes);
app.use(habitRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3000;

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined in the environment");
}


mongoose
    .connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /* ADD DATA ONE TIME */
        // User.insertMany(users);
        // Habit.insertMany(habits)
        //     .then(() => console.log('Habits inserted'))
        //     .catch((err) => console.log(`Error: ${err}`));
    })
    .catch((error) => console.log(`${error} did not connect`));



