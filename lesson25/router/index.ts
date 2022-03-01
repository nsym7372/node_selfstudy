import express from "express";
import { userRouter } from "./usersRouter";

export const router = express.Router();

router.use("/users", userRouter);
