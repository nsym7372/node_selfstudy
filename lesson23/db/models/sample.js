"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class sample extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    sample.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "sample",
        }
    );
    return sample;
};
