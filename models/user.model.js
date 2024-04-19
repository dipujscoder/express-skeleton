import { DataTypes } from "sequelize";
import sequelize from "../config";

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    indexes: [{ unique: true, fields: ["email"] }],
    tableName: "users",
  }
);

module.exports = User;
