import express from "express";
import dotenv from "dotenv";
import authRotes from "./routes/auth.route.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;
console.log("process.env.PORT", process.env.PORT);

app.use("/api/auth", authRotes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
