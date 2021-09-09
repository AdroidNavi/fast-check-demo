import * as fc from "fast-check";
import {Customer} from "./customer";


describe("Customer fast-check version", () => {
  describe('isAllowedToBuyAlcohol', () => {
    it('true', () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string(),
            age: fc.integer({min: 18}),
            hobbies: fc.array(fc.string()),
          }),
          (data) => {
            const customer = new Customer(data.name, data.age, data.hobbies);
            expect(customer.isAllowedToBuyAlcohol()).toEqual(true);
          }
        ),
        {verbose: true, unbiased: true}
      );
    });

    it('false', () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string(),
            age: fc.integer({max: 17}),
            hobbies: fc.array(fc.string()),
          }),
          (data) => {
            const customer = new Customer(data.name, data.age, data.hobbies);
            expect(customer.isAllowedToBuyAlcohol()).toEqual(false);
          }
        ),
        {verbose: true, unbiased: true}
      );
    });
  });
});