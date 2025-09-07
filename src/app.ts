import express from "express";
import testRoutes from "./routes/test.routes";

const app = express();

app.use(express.json());

// Mount routes
app.use("/", testRoutes);

export default app;
