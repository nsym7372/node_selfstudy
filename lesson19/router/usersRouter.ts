import express from "express";
import * as userController from "../controllers/userController";
import methodOverride from "method-override";

export const userRouter = express.Router();
userRouter.use(methodOverride("_method", { methods: ["POST", "GET"] }));

userRouter.get("/index", userController.index, userController.indexView);
userRouter.get("/create", userController.create);
userRouter.post(
    "/create",
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
