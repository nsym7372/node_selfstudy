import { Request, Response } from "express";
type ActionMethod = (req: Request, res: Response) => void;

export const showCourses: ActionMethod = (req, res) => {
    res.render("courses");
};

export const showSignUp: ActionMethod = (req, res) => {
    res.render("contact");
};

export const postedSignUpForm: ActionMethod = (req, res) => {
    res.render("thanks");
};
