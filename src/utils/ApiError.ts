export default class ApiError extends Error {
  statusCode: Number;

  constructor(message: string, statusCode: Number) {
    super(message);
    this.statusCode = statusCode;
  }
}
