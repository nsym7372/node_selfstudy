import { Model, DataTypes, Sequelize } from "sequelize";
import { db } from "./index";

export class Area extends Model {
    public id!: number;
    public name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: typeof db) {
        // define association here
        this.hasMany(models.Section, { foreignKey: "area_id" });
    }
    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                name: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: "area",
            }
        );
        return this;
    }
}
