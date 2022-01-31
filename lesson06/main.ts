import http from "http";
import httpstatus from "http-status-codes";
import fs from "fs";

const port = 3000;
type ContentType = {
    [ext: string]: [dir: string, contentsType: string];
};
const content: ContentType = {
    ".html": ["views", "text/html"],
    ".js": ["public/js", "text/javascript"],
    ".css": ["public/css", "text/css"],
    ".png": ["public/images", "image/png"],
};

http.createServer((req, res) => {
    const url = req.url || "";
    if (url.indexOf(".html") !== -1) {
        customReadFile(".html", url, res);
    } else if (url.indexOf(".js") !== -1) {
        customReadFile(".js", url, res);
    } else if (url.indexOf(".css") !== -1) {
        customReadFile(".css", url, res);
    } else if (url.indexOf(".png") !== -1) {
        customReadFile(".png", url, res);
    } else {
        sendErrorResponse(res);
    }
}).listen(port);

const customReadFile = (
    extention: string,
    url: string,
    res: http.ServerResponse
) => {
    console.log(`ext: ${extention}, url: ${url}`);
    const [dir, ctype] = content[extention];
    const filepath = `${dir}${url}`;
    console.log(filepath);
    res.writeHead(httpstatus.OK, {
        "Content-Type": ctype,
    });
    if (fs.existsSync(filepath)) {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                console.log(err);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};

const sendErrorResponse = (res: http.ServerResponse) => {
    res.writeHead(httpstatus.NOT_FOUND, {
        "Content-Type": "text/html",
    });
    res.write("<h1>file not found</h1>");
    res.end();
};

console.log(`the server has started and is listening on port number: ${port}`);
