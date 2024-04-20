import request from "supertest";
import app from "./server";
// import sequelize from "./config";
// import { Sequelize } from "sequelize";
// const sequelize = require("./config");

// // Define the port you want to use for testing
// const port = 1122; // Replace with your desired port number

// // // Define a variable to hold your server instance
// // let server;
// let sequelize = new Sequelize("elastic", "postgres", "1230", {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false,
//   // logging: (msg) => logger.debug(msg),
// });

// // Before all tests, start the server
// beforeAll(() => {
//   console.log("Hello dipu");
// });

// // After all tests, close the server
// afterAll(() => {
//   sequelize.close();
// });

jest.mock("./config", () => ({
  sequelize: {
    sync: jest.fn(),
    authenticate: jest.fn(),
  },
}));

describe("User", () => {
  describe("Get all User", () => {
    test("it will show true", () => {
      expect("true").toBe("true");
    });

    it("test case for getting all users", async () => {
      const response = await request(app).get("/users");
      expect(response.status).toBe(200);
      // expect(response.status).toBe({ data: "Yes", message: "Success", status: 200 });
    });
  });
});
