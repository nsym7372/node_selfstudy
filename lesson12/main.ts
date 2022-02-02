import express from "express";
import * as homeController from "./controllers/homeController";

const app = express();

app.set("port", 3000);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});

app.listen(app.get("port"), () => {
    console.log(`server runnning on port: ${app.get("port")}`);
});
