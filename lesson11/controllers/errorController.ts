import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";

type InternalErrorType = {
    (error: Error, req: Request, res: Response, next: NextFunction): void;
};

export const logErrors: InternalErrorType = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

export const respondNoResourceFound = (req: Request, res: Response) => {
    const errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | the page dose not exists`);
};

export const respondInternalError: InternalErrorType = (
    error,
    req,
    res,
    next
) => {
    const errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`Error occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | sorry, our application is experiencing a problem`);
};
