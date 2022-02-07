"use strict";

import { Sequelize, Model, Dialect } from "sequelize";
import { User } from "./user";
import { User2 } from "./user2";
import config_dev from "../config/config.json";
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
    User: User.initialize(sequelize),
    User2: User2.initialize(sequelize),
};

Object.keys(db).forEach((tableName) => {
    const modelname = tableName as keyof typeof db;
    const model = db[modelname];
    if (model.associate) {
        model.associate();
    }
});
