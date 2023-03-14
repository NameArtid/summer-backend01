import express from "express";
import "dotenv/config";

const app = express();

app.use(express.static("public"));

// app.use("/", (req, res) => {
//   res.json({ 'message': "Hello Summer Course" });
// });

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
