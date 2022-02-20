import express from "express";
import * as userController from "./controllers/userController";
import layout from "express-ejs-layouts";
import { userRouter } from "./router/usersRouter";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(layout);
app.set("view engine", "ejs");

app.use("/user", userRouter);
app.get("/sample", (req: express.Request, res: express.Response) => {
    res.render("sample");
});

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
