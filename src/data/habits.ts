import mongoose from "mongoose";
import {PriorityFilter} from "../../../utils/types.js";
import {WeekDays, Days} from '../models/types.js'

const habitIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const habits = [
    {
        id: habitIds[0],
        name: "test",
        description: 'description',
        icon: "delete",
        priority: PriorityFilter.High,
        reminders: 'no',
        date: Date.now(),
        frequencyDays: Days.Monday,
        frequency: 1 | 0
    }
]