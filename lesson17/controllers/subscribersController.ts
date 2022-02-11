import express from "express";
import { Course } from "../db/models/course";
import { db } from "../db/models/index";
// import { Subscriber } from "../db/models/subscriber";

export const getAllSubscribers = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    //
    db.Subscriber.findAll({ include: Course })
        .then((subscribers) => {
            res.send(subscribers);
            // res.render("subscribers", { subscribers: subscribers });
        })
        .catch((error) => {
            next(error);
        });
};

export const getSubscriptionPage = (
    req: express.Request,
    res: express.Response
) => {
    res.render("contact");
};

export const saveSubscriber = (req: express.Request, res: express.Response) => {
    //
    console.log(req.body);
    db.Subscriber.create({
        name: req.body.name,
        email: req.body.email,
        zipcode: req.body.zipcode,
    })
        .then((result) => {
            res.render("thanks");
        })
        .catch((err) => {
            res.send(err);
        });
};

// export const sendReqParam = (req: express.Request, res: express.Response) => {
//     const veg = req.params.vegetable;
//     res.send(`this is the page for ${veg} / from controller`);
// };
