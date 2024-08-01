import {PriorityFilter} from "../../../utils/types.js";

export interface IHabit {
    id: number;
    name: string;
    icon?: string;
    priority: PriorityFilter.High;
    reminders?: [String];
    description: String;
    pomodoro?: object;
    category?: String;
    frequency: number;
    frequencyDays: WeekDays;
}

export interface IPomodoro {

}

export interface IUser extends Document {
    userName: string;
    email: string;
    authentication?: {
        password: string;
        salt?: string;
        sessionToken?: string;
    };
}

export interface WeekDays {
    Monday: boolean,
    Tuesday: boolean,
    Wednesday: boolean,
    Thursday: boolean,
    Friday: boolean,
    Saturday: boolean,
    Sunday: boolean
}

export enum Days {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 4,
    Thursday = 8,
    Friday = 16,
    Saturday = 32,
    Sunday = 64
}