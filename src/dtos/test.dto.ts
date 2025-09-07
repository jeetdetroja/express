export class TestResponseDto {
  success: boolean;
  message: string;

  constructor(message: string) {
    this.success = true;
    this.message = message;
  }
}
