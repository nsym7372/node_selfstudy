import * as router from "./router";
import http from "http";
import httpStatus from "http-status-codes";
import fs from "fs";

const plainTextContentType = {
    "Content-Type": "text/plain",
};

const htmlContentType = {
    "Content-Type": "text/html",
};

const port = 3000;

const customReadFIle = (file: string, res: http.ServerResponse) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading the file...");
        }
        res.end(data);
    });
};

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatus.OK, htmlContentType);
    customReadFIle("/views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(port);
console.log(`the server is listening on port number: ${port}`);
