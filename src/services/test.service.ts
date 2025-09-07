import { ITestService } from "../interfaces/ITestService";

export class TestService implements ITestService {
  public getMessage(): string {
    return "Hello from the OOP service layer 🚀";
  }
}
