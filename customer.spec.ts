import * as fc from 'fast-check';
import { Customer } from './customer';

describe('Customer', () => {
  describe('isAllowedToBuyAlcohol', () => {
    it('true, 18+', () => {
      const customer = new Customer('Arnold', 18, [
        'Video games',
        'Develop software',
      ]);
      expect(customer.isAllowedToBuyAlcohol()).toEqual(true);
    });

    it('false, 17-', () => {
      const customer = new Customer('Harry', 17, ['Magic', 'Quidditch']);
      expect(customer.isAllowedToBuyAlcohol()).toEqual(false);
    });

    it('true better version', () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string(),
            age: fc.integer({ min: 18 }),
            hobbies: fc.array(fc.string()),
          }),
          (data) => {
            const customer = new Customer(data.name, data.age, data.hobbies);
            expect(customer.isAllowedToBuyAlcohol()).toEqual(true);
          }
        ),
        { verbose: true, unbiased: true }
      );
    });

    it('false better version', () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string(),
            age: fc.integer({ max: 17 }),
            hobbies: fc.array(fc.string()),
          }),
          (data) => {
            const customer = new Customer(data.name, data.age, data.hobbies);
            expect(customer.isAllowedToBuyAlcohol()).toEqual(false);
          }
        ),
        { verbose: true, unbiased: true }
      );
    });
  });
});
