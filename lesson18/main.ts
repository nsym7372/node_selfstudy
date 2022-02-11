import express from "express";
import * as userController from "./controllers/userController";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/user", userController.getFirstUser);

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
