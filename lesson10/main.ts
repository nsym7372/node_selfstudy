import express from "express";
import * as homeController from "./controllers/homeController";
import layout from "express-ejs-layouts";

const app = express();
app.set("view engine", "ejs");
app.use(layout);
app.use(express.urlencoded({ extended: false }));
app.get("/name/:myName", homeController.respondWithName);

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
