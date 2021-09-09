export class Customer {
  constructor(
    private name: string,
    private age: number,
    private hobbies: string[]
  ) {}

  public isAllowedToBuyAlcohol(): boolean {
    if (this.name.length >= 8) {
      return true;
    }

    if (this.hobbies.length >= 5) {
      return false;
    }

    return this.age >= 18;
  }
}
