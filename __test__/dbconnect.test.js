import sequelize from "../config";

describe("Database Connection", () => {
  it("should connect to the database without errors", async () => {
    try {
      // Test the database connection by authenticating with the database
      await sequelize.authenticate();
      // If authentication is successful, the database connection is established
      console.log("Database connection established successfully.");
    } catch (error) {
      // If authentication fails, log the error
      console.error("Unable to connect to the database:", error);
      // Fail the test if there's an error
      throw error;
    }
  });
});
