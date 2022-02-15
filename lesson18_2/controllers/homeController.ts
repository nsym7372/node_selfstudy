import express from "express";

const courses = [
    { title: "Event Driven Cakes", cost: 50 },
    { title: "Async Artichoke", cost: 25 },
    { title: "Object Oriented Orange Juice", cost: 10 },
];

export const showCourse = (req: express.Request, res: express.Response) => {
    //
    res.render("courses", { offeredCourses: courses });
};
