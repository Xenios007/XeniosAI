export class Result {
  static ok(value) {
    return new Result(true, value, undefined);
  }

  static fail(error) {
    return new Result(false, undefined, error);
  }

  constructor(success, value, error) {
    this.success = success;
    this.value = value;
    this.error = error;
    Object.freeze(this);
  }
}
