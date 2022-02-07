import express from "express";
import { db } from "../db/models/index";
import { Subscriber } from "../db/models/subscriber";

export const getAllSubscribers = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    //
    db.Subscriber.findAll()
        .then((subscribers) => {
            // res.send(subscribers);
            res.render("subscribers", { subscribers: subscribers });
        })
        .catch((error) => {
            next(error);
        });
};

// export const sendReqParam = (req: express.Request, res: express.Response) => {
//     const veg = req.params.vegetable;
//     res.send(`this is the page for ${veg} / from controller`);
// };
