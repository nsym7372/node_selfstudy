import express from "express";

export const respondWithName = (
    req: express.Request,
    res: express.Response
) => {
    const paramName = req.params.myName;
    res.render("index", { name: paramName });
};
