import { ITestService } from "../interfaces/ITestService";

export class TestService implements ITestService {
  getMessage(): string {
    return "Hello from the OOP service layer 🚀";
  }
}
