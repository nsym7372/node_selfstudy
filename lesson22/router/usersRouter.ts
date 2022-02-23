import express, { Router } from "express";
import * as userController from "../controllers/userController";
import methodOverride from "method-override";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import connectFlash from "connect-flash";

export const userRouter = express.Router();
userRouter.use(cookieParser("secret_passcode"));
userRouter.use(
    expressSession({
        secret: "secret_passcode",
        cookie: { maxAge: 4000000 },
        resave: false,
        saveUninitialized: false,
    })
);
userRouter.use(connectFlash());
userRouter.use(methodOverride("_method", { methods: ["POST", "GET"] }));
userRouter.use((req, res, next) => {
    res.locals.flashMessage = req.flash();
    next();
});

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
