import { Router } from "express";
import CategoryModel from "../models/category.model";

const router = Router();

router.get("/users", async (req, res) => {
  console.log("UserModel");
  const _users = await UserModel.CategoryModel();
  res.json(_users);
});
router.post("/users", async (req, res) => {
  const _cat = await CategoryModel.create({
    ...req.body,
  });
  const _data = await _cat.save();
  res.json(_data);
});

export default router;
