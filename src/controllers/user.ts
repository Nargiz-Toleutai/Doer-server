import {UserModel} from '../models/User.js';
import express from "express";

export const createUser = async (req: express.Request, res: express.Response) => {
    const user = new UserModel(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await UserModel.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getUser = async (req: express.Request, res: express.Response) => {
    const _id = req.params.id;
    try {
        const user = await UserModel.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};
