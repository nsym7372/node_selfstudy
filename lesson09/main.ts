import express from "express";
import * as homeController from "./controllers/homeController";

const app = express();
// ルートより前に処理
// ルートの中で処理が終了すると推測
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/items/:vegetable", (req, res) => {
    homeController.sendReqParam(req, res);
    // const veg = req.params.vegetable;
    // res.send(`this is the page for ${veg}`);
});

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST successful!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
