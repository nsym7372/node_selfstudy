import express from "express";
import layout from "express-ejs-layouts";
import { userRouter } from "./router/usersRouter";
import passport from "passport";
import localStrategy from "passport-local";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import connectFlash from "connect-flash";
import { db } from "./db/models";

const app = express();
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
app.use((req, res, next) => {
    res.locals.flashMessage = req.flash();
    next();
});
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new localStrategy.Strategy(
        { usernameField: "email", passwordField: "password" },
        (username, password, done) => {
            // とりあえずアカウント存在確認のみ
            db.User.findOne({ where: { email: username } })
                .then((user) => {
                    //
                    if (user) {
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

app.use("/user", userRouter);
app.get("/sample", (req: express.Request, res: express.Response) => {
    res.render("sample");
});

const port = 3000;
app.listen(port, () => {
    console.log(`server runnning on port: ${port}`);
});
