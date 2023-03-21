import express from "express";
import {
  CategoryGetAll,
  CategoryPost,
} from "../controllers/CategoryController.js";

const CategoryRouter = express.Router();

// POST
CategoryRouter.post("/", CategoryPost);
// GET
CategoryRouter.get("/getAll", CategoryGetAll);
CategoryRouter.get("/getOne", (req, res) => {});
// PUT
CategoryRouter.put("/put", (req, res) => {});
// DELETE
CategoryRouter.delete("/delete", (req, res) => {});

export default CategoryRouter;
