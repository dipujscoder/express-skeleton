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
    tableName: "users",
    updatedAt: "update_at",
    createdAt: "created_at",
    indexes: [
      // Create a unique index on email

      {
        unique: true,
        fields: ["email"],
      },
      {
        name: "full_name",
        fields: ["firstName", "lastName"],
      },
    ],
  }
);

module.exports = User;
