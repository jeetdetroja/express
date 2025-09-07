import { Request, Response } from "express";
import { TestService } from "../services/test.service";
import { TestResponseDto } from "../dtos/test.dto";

export class TestController {
  private testService: TestService;

  constructor() {
    this.testService = new TestService();
  }

  public getTestMessage = (req: Request, res: Response): void => {
    const message = this.testService.getMessage();
    const response = new TestResponseDto(message);
    res.json(response);
  };
}
