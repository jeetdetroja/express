import { Router } from "express";
import { TestController } from "../controllers/test.controller";

export class TestRoutes {
  public router: Router;
  private testController: TestController;

  constructor() {
    this.router = Router();
    this.testController = new TestController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/test", this.testController.getTestMessage);
  }
}
