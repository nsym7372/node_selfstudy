"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";
import { Course } from "./course";
export class User extends Model {
    public sample!: string;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public zipcode!: number;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
        // define association here
        this.hasMany(Course, { foreignKey: "user_id" });
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
