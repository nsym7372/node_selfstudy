"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";
import { db } from "./index";
import { Section } from "./section";
import { Subscriber } from "./subscriber";
export class User extends Model {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public zipcode!: number;
    public password!: string;
    public sections!: Section;
    public subscriber_id!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: typeof db) {
        // define association here
        this.hasMany(models.Course, { foreignKey: "user_id" });
        this.belongsTo(models.Subscriber, { foreignKey: "subscriber_id" });
    }

    public static initialize(sequelize: Sequelize) {
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
                modelName: "users",
                hooks: {
                    beforeCreate: async (user, option) => {
                        if (user.subscriber_id !== undefined) {
                            return;
                        }
                        await Subscriber.findOne({
                            where: { email: user.email },
                        })
                            .then((subscriber) => {
                                if (subscriber) {
                                    console.log("subscriber is exists");
                                    user.subscriber_id = subscriber.id;
                                }
                            })
                            .catch((error) => {
                                console.log(
                                    `error in connecting subscriber: ${error.message}`
                                );
                            });
                    },
                },
            }
        );
        return this;
    }
}
