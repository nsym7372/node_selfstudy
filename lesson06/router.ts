import httpStatus from "http-status-codes";
import http from "http";

const htmlContentType = {
    "Content-Type": "text/html",
};

type ActionType = (req: http.IncomingMessage, res: http.ServerResponse) => void;
type RoutesType = {
    [method: string]: {
        [route: string]: ActionType;
    };
};
const routes: RoutesType = {
    GET: {
        "/info": (req, res) => {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/plain",
            });
            res.end();
        },
    },
    POST: {},
};

export const handle = (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
        if (req.method && req.url && routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log(`error: ${ex}`);
    }
};

export const get = (url: string, action: ActionType) => {
    routes["GET"][url] = action;
};

export const post = (url: string, action: ActionType) => {
    routes["POST"][url] = action;
};
