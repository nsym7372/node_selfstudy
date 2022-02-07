"use strict";
import { Sequelize, Model, DataTypes } from "sequelize";

export class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
        // define association here
    }

    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                zipcode: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: "Subscriber",
            }
        );
        return this;
    }
}
