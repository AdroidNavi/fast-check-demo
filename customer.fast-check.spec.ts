import * as fc from "fast-check";
import { IntegerConstraints } from "fast-check";
import { Customer } from "./customer";

const createArbitrary = (ageConstrains: IntegerConstraints) =>
  fc.record({
    name: fc.string(),
    age: fc.integer(ageConstrains),
    hobbies: fc.array(fc.string()),
  });

describe("Customer (fast-check)", () => {
  describe("isAllowedToBuyAlcohol", () => {
    it("allowed", () => {
      fc.assert(
        fc.property(createArbitrary({ min: 18 }), (data) => {
          const customer = new Customer(data.name, data.age, data.hobbies);
          expect(customer.isAllowedToBuyAlcohol()).toEqual(true);
        }),
        { verbose: true, unbiased: true }
      );
    });

    it("not allowed", () => {
      fc.assert(
        fc.property(createArbitrary({ max: 17 }), (data) => {
          const customer = new Customer(data.name, data.age, data.hobbies);
          expect(customer.isAllowedToBuyAlcohol()).toEqual(false);
        }),
        { verbose: true, unbiased: true }
      );
    });
  });
});
