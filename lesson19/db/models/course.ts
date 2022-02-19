"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";
import { db } from "./index";

export class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: typeof db) {
        // define association here
        // this.hasMany(models.Subscriber);
    }

    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                name: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: "Course",
            }
        );
        return this;
    }
}
