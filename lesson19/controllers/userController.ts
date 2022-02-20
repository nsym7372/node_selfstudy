import express from "express";
import { db } from "../db/models";

type actionType = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => void;

export const create: actionType = (req, res, next) => {
    //
    res.render("user/create");
};

export const generate: actionType = (req, res, next) => {
    //
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        zipcode: req.body.zipcode,
        password: req.body.password,
        subscriber_id: undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
        .then((user) => {
            res.locals.redirect = "/user/create";
            res.locals.user = user;
            next();
        })
        .catch((error) => {
            console.log(`Error saving user: ${error.message}`);
            next(error);
        });
};

export const redirectView: actionType = (req, res, next) => {
    const redirectPath = res.locals.redirect;
    if (redirectPath) {
        res.redirect(redirectPath);
    } else {
        next();
    }
};

export const detail: actionType = (req, res, next) => {
    db.User.findByPk(req.params.id)
        .then((user) => {
            //
            res.locals.user = user;
            next();
        })
        .catch((error) => {
            console.log(`Error fetching user by ID: ${error.message}`);
            next(error);
        });
};

export const detailView: actionType = (req, res, next) => {
    res.render("user/detail", { user: res.locals.user });
};

export const index: actionType = (req, res, next) => {
    db.User.findAll()
        .then((users) => {
            res.locals.users = users;
            next();
        })
        .catch((error) => {
            console.log(`Error fetching users ${error}`);
            next(error);
        });
};

export const indexView: actionType = (req, res, next) => {
    res.render("user/index", { users: res.locals.users });
};

// export const create = (
//   req: express.Request,
//   res: express.Response,
//   next: NextFunction
// ) => {
//   db.User.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastname,
//     email: req.body.email,
//     zipcode: req.body.zipcode,
//     password: req.body.password,
//   }).then((user) => {
//     res.locals.redirect = "/user";
//     res.locals.user = user;
//     next();
//   });
// };
