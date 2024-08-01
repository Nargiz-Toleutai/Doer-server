import express from "express";
import * as HabitController from "../controllers/habit.js";

const router = express.Router();

router.post("/habits", HabitController.createHabit);
router.get("/habits", HabitController.getHabits);
router.get("/habits/:id", HabitController.getHabit);
router.delete("/habits/:id", HabitController.deleteHabit);
router.put("/habits/:id", HabitController.updateHabit);
router.patch("/habits/:id", HabitController.updateHabit);

export default router;
