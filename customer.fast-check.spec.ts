import * as fc from "fast-check";
import { Customer } from "./customer";

type CustomerPropertyData = {
  name: string;
  age: number;
  hobbies: string[];
}

describe("Customer (fast-check)", () => {
  describe("isAllowedToBuyAlcohol", () => {
    it("allowed", () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string(),
            age: fc.integer({ min: 18 }),
            hobbies: fc.array(fc.string()),
          }),
          (data: CustomerPropertyData) => {
            const customer = new Customer(data.name, data.age, data.hobbies);
            expect(customer.isAllowedToBuyAlcohol()).toEqual(true);
          }
        ),
        { verbose: true, unbiased: true }
      );
    });

    it("not allowed", () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string(),
            age: fc.integer({ max: 17 }),
            hobbies: fc.array(fc.string()),
          }),
          (data: CustomerPropertyData) => {
            const customer = new Customer(data.name, data.age, data.hobbies);
            expect(customer.isAllowedToBuyAlcohol()).toEqual(false);
          }
        ),
        { verbose: true, unbiased: true }
      );
    });
  });
});
