import express from "express";
import * as subscribersController from "./controllers/subscribersController";

const app = express();
app.set("view engine", "ejs");

app.get(
    "/subscribers",
    subscribersController.getAllSubscribers,
    (req, res, next) => {
        console.log("call subscribers.getAllSubscribers");
    }
);

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
