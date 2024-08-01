import mongoose, {Schema} from 'mongoose';
import {Days, IHabit, WeekDays} from "./types.js";

const HabitSchema: Schema = new mongoose.Schema<IHabit>({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: false,
    },
    category: {
        type: String, required: false
    },
    priority: {
        type: String, required: true
    },
    frequency: {
        type: Number,
        required: false,
        default: 0
    },
    reminders: {
        type: [String], required: false
    },
    description: {
        type: String,
        required: true,
    },
    pomodoro: {
        sectionName: {
            type: String,
            required: false,
        },
        sessions: {
            type: Number,
            required: false,
        },
        minutes: {
            type: Number,
            required: false,
        },
    },
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});  // Include virtuals when converting to object or JSON


HabitSchema.virtual('frequencyDays')
    .get(function (this: IHabit) {
        let obj: WeekDays = {
            Monday: Boolean(this.frequency & Days.Monday),
            Tuesday: Boolean(this.frequency & Days.Tuesday),
            Wednesday: Boolean(this.frequency & Days.Wednesday),
            Thursday: Boolean(this.frequency & Days.Thursday),
            Friday: Boolean(this.frequency & Days.Friday),
            Saturday: Boolean(this.frequency & Days.Saturday),
            Sunday: Boolean(this.frequency & Days.Sunday)
        };
        return obj;
    })
    .set(function (this: IHabit, days: WeekDays) {
        let bitmask = 0;
        for (let day in days) {
            if (days[day as keyof typeof Days]) {
                bitmask |= Days[day as keyof typeof Days];
            }
        }
        this.frequency = bitmask;
    });


const HabitModel = mongoose.model<IHabit>('Habit', HabitSchema);
export default HabitModel;

// export const getHabits = () => HabitModel.find();
// export const getHabitByID = (id: string) => HabitModel.findById(id);
// export const createHabit = (values: Record<string, any>) => new HabitModel(values)
//     .save()
//     .then((habit) => habit.toObject());
// export const deleteHabitById = (id: string) => HabitModel.findOneAndDelete({_id: id});
// export const updateHabitById = (id: string, values: Record<string, any>) => HabitModel.findByIdAndUpdate(id, values);