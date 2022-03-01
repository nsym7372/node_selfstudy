import express from "express";
import * as userController from "../controllers/userController";
import passport from "passport";

export const userRouter = express.Router();

userRouter.get("/index", userController.index, userController.indexView);
userRouter.get(
    "/create",
    userController.toLoginIfNotAuthenticated,
    userController.create
);
userRouter.post(
    "/create",
    userController.valid(),
    userController.validateOnCreate,
    userController.generate,
    userController.redirectView
);
userRouter.get("/detail/:id", userController.detail, userController.detailView);
userRouter.get("/update/:id", userController.update, userController.updateView);
userRouter.put("/update/:id", userController.edit, userController.redirectView);
userRouter.delete(
    "/delete/:id",
    userController.destroy,
    userController.redirectView
);

userRouter.get("/login", userController.login);

userRouter.post(
    "/login",
    passport.authenticate("local", {
        // successRedirect: "/users/index",
        successFlash: "logged in successfully",
        failureRedirect: "/users/login",
        failureFlash: true,
    }),
    (req, res) => {
        if (req.session.redirectTo) {
            const redirectTo = `/user${req.session.redirectTo}`;
            delete req.session.redirectTo;
            return res.redirect(redirectTo);
        }
        res.redirect("index");
    }

    // userController.authenticate,
    // userController.redirectView
);

userRouter.get("/logout", userController.logout, userController.redirectView);
