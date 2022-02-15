"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";

export class Course extends Model {
    public user_id!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
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
