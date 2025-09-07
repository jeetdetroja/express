import express from "express";
import { TestRoutes } from "./routes/test.routes";

const app = express();

app.use(express.json());

const testRoutes = new TestRoutes();
app.use("/", testRoutes.router);

export default app;
