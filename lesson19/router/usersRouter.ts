import express from "express";
import * as userController from "../controllers/userController";

export const userRouter = express.Router();

userRouter.get("/index", userController.index, userController.indexView);
userRouter.get("/create", userController.create);
userRouter.post(
    "/create",
    userController.generate,
    userController.redirectView
);
userRouter.get("/detail/:id", userController.detail, userController.detailView);
