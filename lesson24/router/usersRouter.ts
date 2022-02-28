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
        successRedirect: "/user/index",
        successFlash: "logged in successfully",
        failureRedirect: "/user/login",
        failureFlash: true,
    })
    // userController.authenticate,
    // userController.redirectView
);

userRouter.get("/logout", userController.logout, userController.redirectView);
