import { Sequelize } from "sequelize";
import { db } from "./db/models/index";

db.User.findAll().then((users) => {
    console.log(JSON.stringify(users));
});
const sequelize = new Sequelize("mysql://mysql:mysql@localhost:8081/recipe_db");

try {
    sequelize.authenticate();
    console.log("connection has been established successfully");
} catch (error) {
    console.error("unable to connect to the database", error);
}
