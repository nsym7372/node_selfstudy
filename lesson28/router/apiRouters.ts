import express from "express";
import * as userController from "../controllers/userController";
import passport from "passport";
import jsonWebToken from "jsonwebtoken";

export const apiRouter = express.Router();
// apiRouter.use(userController.verifyToken);

apiRouter.post(
    "/login",
    //
    (req, res, next) => {
        passport.authenticate("local", (errors, user) => {
            //
            if (user) {
                const signedToken = jsonWebToken.sign(
                    {
                        data: user.id,
                        exp: new Date().setDate(Number(new Date().getDate) + 1),
                    },
                    "secret_encoding_passphrase"
                );
                res.json({
                    success: true,
                    token: signedToken,
                });
            } else {
                res.json({
                    success: false,
                    message: "could not authenthcate user.",
                });
            }
        })(req, res, next);
    }
);

apiRouter.get("/users", userController.index, userController.respondJSON);
apiRouter.use(userController.errorJSON);
