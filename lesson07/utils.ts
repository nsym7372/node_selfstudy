import * as fs from "fs";
import httpStatus from "http-status-codes";
import { Http2ServerRequest } from "http2";
import { ContentTypes } from "./contentType";
import http from "http";

export const getFile = (file: string, res: http.ServerResponse) => {
    fs.readFile(`./${file}`, (error, data) => {
        if (error) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, ContentTypes.html);
            res.end("There was an error serving content!");
        }
        res.end(data);
    });
};
