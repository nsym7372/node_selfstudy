import http from "http";
import httpstatus from "http-status-codes";

const app = http.createServer((request, response) => {
    console.log("received an incoming request!");
    response.writeHead(httpstatus.OK, {
        "Content-Type": "text/html",
    });

    response.write("<h1>Hello, Universe!</h1>");
    response.end();

    console.log(`sent a response`);
});

app.listen(3000);
console.log("server has started");
