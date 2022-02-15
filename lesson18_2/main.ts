import express from "express";
import * as homeController from "./controllers/homeController";
import * as userController from "./controllers/userController";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/courses", homeController.showCourse);
app.get("/users", userController.index, userController.indexView);

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
