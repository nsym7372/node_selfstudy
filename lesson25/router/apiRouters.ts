import express from "express";
import * as userController from "../controllers/userController";
import passport from "passport";

export const apiRouter = express.Router();
apiRouter.use(userController.verifyToken);

apiRouter.get("/users", userController.index, userController.respondJSON);
apiRouter.use(userController.errorJSON);
