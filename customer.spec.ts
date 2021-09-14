import { Customer } from "./customer";

describe("Customer", () => {
  describe("isAllowedToBuyAlcohol", () => {
    it("allows anyone 18 years and up", () => {
      const customer = new Customer("Arnold", 18, [
        "Video games",
        "Develop software",
      ]);
      expect(customer.isAllowedToBuyAlcohol()).toEqual(true);
    });

    it("rejects anyone younger than 17", () => {
      const customer = new Customer("Harry", 17, ["Magic", "Quidditch"]);
      expect(customer.isAllowedToBuyAlcohol()).toEqual(false);
    });
  });
});
