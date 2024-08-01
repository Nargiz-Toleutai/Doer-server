import express from 'express';

import HabitModel from "../models/Habit.js";

export const createHabit = async (req: express.Request, res: express.Response) => {
    const habit = new HabitModel(req.body);
    try {
        await habit.save();
        res.status(201).send(habit);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteHabit = async (req: express.Request, res: express.Response) => {
    try {
        const habit = await HabitModel.findByIdAndDelete(req.params.id);
        if(!habit) {
            return res.status(404).send();
        }
        res.status(200).send({message: 'ok'});
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getHabits = async (req: express.Request, res: express.Response) => {
    try {
        const habits = await HabitModel.find({});
        res.send(habits);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getHabit = async (req: express.Request, res: express.Response) => {
    const _id = req.params.id;
    try {
        const habit = await HabitModel.findById(_id);
        if (!habit) {
            return res.status(404).send();
        }
        res.send(habit);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateHabit = async (req: express.Request, res: express.Response) => {
    try {
        const habit = await HabitModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!habit) {
            return res.status(404).send();
        }
        res.send(habit);
    } catch (error) {
        res.status(400).send(error);
    }
};

