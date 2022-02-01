import httpStatus from "http-status-codes";
import { ContentTypes } from "./contentType";
import * as utils from "./utils";
import http from "http";

type ActionType = (req: http.IncomingMessage, res: http.ServerResponse) => void;
const routes: { [method: string]: { [url: string]: ActionType } } = {
    GET: {},
    POST: {},
};

export const handle = (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
        if (req.method && req.url) {
            routes[req.method][req.url](req, res);
        } else {
            writeError(res);
        }
    } catch (e) {
        writeError(res);
    }
};

const writeError = (res: http.ServerResponse) => {
    res.writeHead(httpStatus.OK, ContentTypes.html);
    utils.getFile("views/error.html", res);
};

export const get = (url: string, action: ActionType) => {
    routes["GET"][url] = action;
};

export const post = (url: string, action: ActionType) => {
    routes["POST"][url] = action;
};
