import express from "express";
import { ProductGetAll } from "../controllers/ProductController.js";

const ProductRouter = express.Router();

ProductRouter.get("/getAll", ProductGetAll);

export default ProductRouter;
