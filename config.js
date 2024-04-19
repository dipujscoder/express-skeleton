import { Sequelize } from "sequelize";
import { UserModel } from "./models";

// // Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("elastic", "postgres", "1230", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  // logging: (msg) => logger.debug(msg),
});

// console.log("sequelize", sequelize);

function connectDB(params) {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Database synchronizing Connected.");
    })
    .catch((error) => {
      console.error("Error synchronizing models:", error);
    });
}

connectDB();

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

// testConnection();

// export default connectDB;m\
module.exports = sequelize;
