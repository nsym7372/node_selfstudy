"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";
import { db } from "./index";
export class User extends Model {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public zipcode!: number;
    public password!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: typeof db) {
        // define association here
        this.hasMany(models.Course, { foreignKey: "user_id" });
    }

    public static initialzie(sequelize: Sequelize) {
        this.init(
            {
                firstName: DataTypes.STRING,
                lastName: DataTypes.STRING,
                fullName: {
                    type: DataTypes.VIRTUAL,
                    get: function () {
                        return `${this.get("firstName")} ${this.get(
                            "lastName"
                        )} `;
                    },
                },
                email: DataTypes.STRING,
                zipcode: DataTypes.INTEGER,
                password: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: "Users",
            }
        );
        return this;
    }
}
