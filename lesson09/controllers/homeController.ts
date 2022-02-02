import express from "express";

export const sendReqParam = (req: express.Request, res: express.Response) => {
    const veg = req.params.vegetable;
    res.send(`this is the page for ${veg} / from controller`);
};
