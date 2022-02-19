"use strict";
import { Sequelize, Model, DataTypes } from "sequelize";
import { db } from "./index";

export class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: typeof db) {
        // define association here
        this.belongsTo(models.Course, { foreignKey: "course_id" });
    }

    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                zipcode: {
                    type: DataTypes.INTEGER,
                    validate: {
                        notEmpty: {
                            msg: "please your zipcode",
                        },
                        len: [1, 6],
                        notIn: {
                            args: [[0]],
                            msg: "ゼロはNG",
                        },
                    },
                },
            },
            {
                sequelize,
                modelName: "Subscriber",
            }
        );
        return this;
    }
}
