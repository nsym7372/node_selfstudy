import http from "http";
import httpstatus from "http-status-codes";

const app = http.createServer();

// const routes = ["/info", "/contact", "/about", "/hello", "/error"] as const;
// type routesType = typeof routes[number];
const routeResponseMap = {
    "/info": "<h1>Hello, Universe!</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "learn more about us",
    "/hello": "hello",
    "/error": "404",
};

type routesType = keyof typeof routeResponseMap;

app.on("request", (request, response) => {
    let body: Uint8Array[] = [];
    request.on("data", (bodyData) => {
        body.push(bodyData);
    });

    request.on("end", () => {
        const c_body = Buffer.concat(body).toString();
        console.log(`request body contents: ${c_body}`);
    });
    response.writeHead(httpstatus.OK, {
        "Content-Type": "text/html",
    });

    console.log(`Method: ${request.method}`);
    console.log(`URL: ${request.url}`);
    console.log(`Headers: ${request.headers}`);

    const url = request.url || "/info";

    if (url in routeResponseMap) {
        response.write(routeResponseMap[url as routesType]);
    } else {
        response.write(routeResponseMap["/info"]);
    }

    setTimeout(() => response.end(), 1000);
});

app.listen(3000);
console.log("server has started");
