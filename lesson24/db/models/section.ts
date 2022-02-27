import { Model, DataTypes, Sequelize } from "sequelize";
import { db } from "./index";

export class Section extends Model {
    public id!: number;
    public name!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: typeof db) {
        // define association here
        this.hasMany(models.User, { foreignKey: "section_id" });
    }

    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                name: DataTypes.STRING,
                area_id: DataTypes.INTEGER,
            },
            {
                sequelize,
                modelName: "section",
            }
        );
        return this;
    }
}
