import express from "express";
import "dotenv/config";
import CategoryRouter from "./routers/CategoryRouter.js";
import ProductRouter from "./routers/ProductRouter.js";
import cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);

// app.use("/", (req, res) => {
//   res.json({ 'message': "Hello Summer Course" });
// });

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
