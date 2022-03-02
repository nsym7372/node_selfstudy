import express from "express";
import { apiRouter } from "./apiRouters";
import { userRouter } from "./usersRouter";

export const router = express.Router();

router.use("/api", apiRouter);
router.use("/users", userRouter);
