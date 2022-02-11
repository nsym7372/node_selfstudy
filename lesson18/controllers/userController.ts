import express from "express";
import { db } from "../db/models";

export const getFirstUser = (req: express.Request, res: express.Response) => {
    //
    db.User.findOne().then((user) => {
        res.send(user);
    });
};
