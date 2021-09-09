import {Customer} from './customer';

describe('Customer normal version', () => {
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
  });
});
