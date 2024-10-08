import { Router } from "express";
import UserModel from "../models/user.model";

const router = Router();

router.get("/users", async (req, res) => {
  console.log("UserModel");
  // const _users = await UserModel.findAll();
  // res.json(_users);

  res.status(200).json({ data: "Yes", message: "Success", status: 200 });
});

router.post("/users", async (req, res) => {
  const _users = await UserModel.create({
    ...req.body,
  });
  const _data = await _users.save();
  res.json(_data);
});

export default router;
