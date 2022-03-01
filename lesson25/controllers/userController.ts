import express from "express";
import { db } from "../db/models";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";

type actionType = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => void;

export const create: actionType = (req, res, next) => {
    res.render("users/create", { user: res.locals.user });
};

export const generate: actionType = (req, res, next) => {
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
            res.locals.redirect = "/users/index";
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
    res.render("users/detail", { user: res.locals.user });
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
    res.render("users/index", { users: res.locals.users });
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
    res.render("users/update", { user: res.locals.user });
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
            res.locals.redirect = "/users/index";
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
            res.locals.redirect = "/users/index";
            next();
        })
        .catch((error) => {
            console.log(`Error deleting user: ${error.message}`);
            next(error);
        });
};

export const login: actionType = (req, res, next) => {
    // [FYI]
    // res.render("users/login", { layout: false });
    res.render("users/login");
};

export const logout: actionType = (req, res, next) => {
    req.logout();
    req.flash("success", "you have been logged out!");
    res.locals.redirect = "login";
    next();
};

// [FYI]
// passportで認証するため不要
export const authenticate: actionType = async (req, res, next) => {
    await db.User.findOne({ where: { email: req.body.email } })
        .then(async (user) => {
            if (
                user !== null &&
                (await bcrypt.compare(req.body.password, user.password))
            ) {
                res.locals.redirect = `/users/index`;
                req.flash(
                    "success",
                    `${user.fullName}'s logged in successfully!`
                );
                res.locals.user = user;
            } else {
                req.flash("error", "your account or password is incollect");
                res.locals.redirect = `/users/login`;
            }
            next();
        })
        .catch((error) => {
            console.log(`Error logging in user: ${error.message}`);
            next(error);
        });
};

export const valid = () => {
    return [
        check("zipcode", "Zip code is invalid")
            .isInt()
            .isLength({ min: 3, max: 5 }),
    ];
};

export const validateOnCreate: actionType = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // [FYI]
        // redirectの場合、元の入力値引き渡しが困難

        // req.flash(
        //     "error",
        //     errors.array().map((e) => e.msg)
        // );
        // res.locals.flashMessage = req.flash(
        //     "error",
        //     errors.array().map((e) => e.msg)
        // );
        // res.redirect("/users/create");

        res.render("users/create", {
            flashMessage: { error: errors.array().map((e) => e.msg) },
            user: req.body,
        });
    } else {
        next();
    }
};

export const toLoginIfNotAuthenticated: actionType = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    req.session.redirectTo = req.path;
    res.redirect("login");
};

export const redirectAfterLogin: actionType = (req, res, next) => {
    if (req.session.redirectTo) {
        const redirectTo = req.session.redirectTo;
        delete req.session.redirectTo;
        res.redirect(redirectTo);
    }
    res.redirect("index");
};
