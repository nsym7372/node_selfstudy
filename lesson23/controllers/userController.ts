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
            req.flash(
                "success",
                `${user.fullName}'s account created successfully!`
            );
            res.locals.redirect = "/user/index";
            res.locals.user = user;
            next();
        })
        .catch((error) => {
            console.log(`Error saving user: ${error.message}`);
            req.flash(
                "error",
                `Failed to create user account because: ${error.message}`
            );
            next();
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

export const index: actionType = async (req, res, next) => {
    await db.User.findAll()
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

export const update: actionType = async (req, res, next) => {
    await db.User.findByPk(req.params.id)
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
    res.render("user/update", { user: res.locals.user });
};

export const edit: actionType = async (req, res, next) => {
    db.User.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            zipcode: req.body.zipcode,
        },
        { where: { id: req.params.id } }
    )
        .then(() => {
            res.locals.redirect = "/user/index";
            next();
        })
        .catch((error) => {
            console.log(`Error updating user: ${error.message}`);
            next(error);
        });
};

export const destroy: actionType = (req, res, next) => {
    db.User.destroy({ where: { id: [req.params.id] } })
        .then(() => {
            res.locals.redirect = "/user/index";
            next();
        })
        .catch((error) => {
            console.log(`Error deleting user: ${error.message}`);
            next(error);
        });
};

export const login: actionType = (req, res, next) => {
    // res.render("user/login", { layout: false });
    res.render("user/login");
};

export const authenticate: actionType = (req, res, next) => {
    db.User.findOne({ where: { email: req.body.email } })
        .then((user) => {
            if (user !== null && user.password === req.body.password) {
                res.locals.redirect = `/user/index`;
                req.flash(
                    "success",
                    `${user.fullName}'s logged in successfully!`
                );
                res.locals.user = user;
            } else {
                req.flash("error", "your account or password is incollect");
                res.locals.redirect = `/user/login`;
            }
            next();
        })
        .catch((error) => {
            console.log(`Error logging in user: ${error.message}`);
            next(error);
        });
};
