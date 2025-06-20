import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import questionRouter from "./routes/questionRoutes.js";

dotenv.config();

const app = express();
const swaggerDoc = YAML.load("./swagger.yaml");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/questions", questionRouter);

if (process.env.NODE_ENV === "development") {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGO_URI.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose
  .connect(DB)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.error(err));
