import { DataTypes } from "sequelize";
import sequelize from "../config";

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [{ unique: true, fields: ["name"] }],
    tableName: "categories",
  }
);

// module.exports = User;
export default Category;
