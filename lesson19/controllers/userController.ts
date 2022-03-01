import express from "express";
import { db } from "../db/models";
import { User } from "../db/models/user";

type actionType = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => void;

export const create: actionType = (req, res, next) => {
    //
    res.render("users/create");
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
            res.locals.redirect = "/users/index";
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
    res.render("users/detail", { user: res.locals.user });
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
    res.render("users/index", { users: res.locals.users });
};

export const update: actionType = (req, res, next) => {
    db.User.findByPk(req.params.id)
        .then((user) => {
            res.locals.user = user;
            next();
        })
        .catch((error) => {
            console.log(`Error fetchning user: ${error.message}`);
            next(error);
        });
};

export const updateView: actionType = (req, res, next) => {
    res.render("users/update", { user: res.locals.user });
};

export const edit: actionType = (req, res, next) => {
    console.log(req.params.id);
    db.User.findByPk(req.params.id)
        .then((user) => {
            console.log(user);
            if (user) {
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.email = req.body.email;
                user.password = req.body.password;
                user.zipcode = req.body.zipcode;
                user.save();
            }
            res.locals.redirect = "/users/index";
            next();
        })
        .catch((error) => {
            console.log(`Error updating user: ${error.message}`);
            next(error);
        });
};

export const destroy: actionType = (req, res, next) => {
    //
    console.log("delete");
    db.User.destroy({ where: { id: [req.params.id] } })
        .then(() => {
            res.locals.redirect = "/users/index";
            next();
        })
        .catch((error) => {
            console.log(`Error deleting user: ${error.message}`);
            next(error);
        });
};
