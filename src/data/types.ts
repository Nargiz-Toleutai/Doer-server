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
    Monday = 1,    // 001 in binary
    Tuesday = 2,   // 010 in binary
    Wednesday = 4, // 100 in binary
    Thursday = 8,  // 1000 in binary
    Friday = 16,   // 10000 in binary
    Saturday = 32, // 100000 in binary
    Sunday = 64    // 1000000 in binary
}