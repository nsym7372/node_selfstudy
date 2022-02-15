import express from "express";
import { db } from "../db/models/index";

export const index = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    db.User.findAll()
        .then((users) => {
            res.locals.users = users;
            next();
        })
        .catch((error) => {
            console.log(`error fetching users: ${error.message}`);
            res.redirect("/");
        });
};

export const indexView = (req: express.Request, res: express.Response) => {
    res.render("users/index");
};
