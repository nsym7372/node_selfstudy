import express from "express";
import * as homeController from "./controllers/homeController";
import {
    logErrors,
    respondInternalError,
    respondNoResourceFound,
} from "./controllers/errorController";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/index", homeController.respondWithName);
app.use(logErrors);
app.use(respondNoResourceFound);
app.use(respondInternalError);

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
