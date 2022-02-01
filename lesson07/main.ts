import http from "http";
import httpStatus from "http-status-codes";
import * as router from "./router";
import { ContentTypes } from "./contentType";
import * as utils from "./utils";

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.html);
    utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.html);
    utils.getFile("views/courses.html", res);
});

router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.html);
    utils.getFile("views/contact.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.html);
    utils.getFile("views/thanks.html", res);
});

router.get("/sample.png", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.png);
    utils.getFile("public/images/sample.png", res);
});

router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
});

router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, ContentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});

const port = 3000;
http.createServer(router.handle).listen(port);
console.log(`the server is listening on port number ${port}`);
