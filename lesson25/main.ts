import express from "express";
import layout from "express-ejs-layouts";
// import { userRouter } from "./router/usersRouter";
import { router } from "./router/index";
import passport from "passport";
import localStrategy from "passport-local";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import connectFlash from "connect-flash";
import { db } from "./db/models";
import bcrypt from "bcrypt";

const app = express();

declare module "express-session" {
    interface Session {
        [keys: string]: string;
    }
}

app.use(express.urlencoded({ extended: true }));
app.use(layout);
app.use(connectFlash());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.use(cookieParser("secret_passcode"));
app.use(
    expressSession({
        secret: "secret_passcode",
        cookie: { maxAge: 4000000 },
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.flashMessage = req.flash();
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
});

passport.use(
    new localStrategy.Strategy(
        { usernameField: "email", passwordField: "password" },
        (username, password, done) => {
            db.User.findOne({ where: { email: username } })
                .then(async (user) => {
                    //
                    if (
                        user !== null &&
                        (await bcrypt.compare(password, user.password))
                    ) {
                        done(null, user);
                    } else {
                        done(null, false, {
                            message: "ユーザー情報が正しくありません",
                        });
                    }
                })
                .catch((err) => {
                    return done(err);
                });
        }
    )
);

passport.serializeUser(function (user, done) {
    console.log("serializeUser: ", user);
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log("deserializeUser: ", user);
    done(null, { user });
});

app.set("view engine", "ejs");

app.use("/", router);
app.get("/sample", (req: express.Request, res: express.Response) => {
    res.render("sample");
});

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
