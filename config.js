import { Sequelize } from "sequelize";

// // Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("elastic", "postgres", "1230", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// Assuming your synchronization function returns a promise
async function synchronizeModels() {
  try {
    await sequelize.sync({ alter: true });
    // console.log("Database synchronizing connected.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
}

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");
    await synchronizeModels(); // Ensure synchronization is awaited
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

connectDB();

// export default connectDB;m\
// module.exports = sequelize;
export default sequelize;
