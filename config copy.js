const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("elastic", "postgres", "1230", {
  host: "localhost",
  dialect: "postgres",
});

// Sync models
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
