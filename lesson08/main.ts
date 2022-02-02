import express from "express";

const port = 3000;
const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.send("hello universe!");
});

app.listen(port, () => {
    console.log(
        `the express.js server has started and is listening on port number: ${port}`
    );
});
