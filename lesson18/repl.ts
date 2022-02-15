import { db } from "./db/models";
import { Course } from "./db/models/course";
import { User } from "./db/models/user";

let registeredUser: User;
db.User.create({
    firstName: "aaa",
    lastName: "bbb",
    email: "cc",
    zipcode: 12345,
    password: "password1",
    createdAt: new Date(),
    updatedAt: new Date(),
})
    .then((user) => {
        registeredUser = user;
        return db.Course.findOne({
            where: { name: user.firstName },
        });
    })
    .then((course) => {
        course!.user_id = registeredUser.getDataValue("id");
        course?.save();
    })
    .catch((err) => {
        console.log(err);
    });
