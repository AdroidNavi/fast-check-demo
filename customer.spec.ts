import { Customer } from "./customer";

describe("Customer", () => {
  describe("isAllowedToBuyAlcohol", () => {
    it("allowed", () => {
      const customer = new Customer("Arnold", 18, [
        "Video games",
        "Develop software",
      ]);
      expect(customer.isAllowedToBuyAlcohol()).toEqual(true);
    });

    it("not allowed", () => {
      const customer = new Customer("Harry", 17, ["Magic", "Quidditch"]);
      expect(customer.isAllowedToBuyAlcohol()).toEqual(false);
    });
  });
});
