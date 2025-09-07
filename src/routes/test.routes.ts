import { Router } from "express";
import { TestController } from "../controllers/test.controller";

const router = Router();
const testController = new TestController();

router.get("/test", testController.getTestMessage);

export default router;
