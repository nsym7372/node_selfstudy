"use strict";

import { Sequelize, Model, Dialect } from "sequelize";
import { Subscriber } from "./subscriber";
import { Course } from "./course";
import config_dev from "../config/config.json";
import { User } from "./user";
import { Section } from "./section";
import { Area } from "./area";
const config = config_dev.development;

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect as Dialect,
        port: config.port,
    }
);

export const db = {
    Subscriber: Subscriber.initialize(sequelize),
    Course: Course.initialize(sequelize),
    User: User.initialize(sequelize),
    Section: Section.initialize(sequelize),
    Area: Area.initialize(sequelize),
};

Object.keys(db).forEach((tableName) => {
    const modelname = tableName as keyof typeof db;
    const model = db[modelname];
    if (model.associate) {
        model.associate(db);
    }
});
