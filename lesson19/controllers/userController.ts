import express, { NextFunction } from "express";
import { nextTick } from "process";
import { db } from "../db/models";

export const getFirstUser = (req: express.Request, res: express.Response) => {
    //
    db.User.findOne().then((user) => {
        res.send(user);
    });
};

export const create = (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastname,
        email: req.body.email,
        zipcode: req.body.zipcode,
        password: req.body.password,
    }).then((user) => {
        res.locals.redirect = "/user";
        res.locals.user = user;
        next();
    });
};
