import { DataTypes } from "sequelize";
import sequelize from "../config";

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
