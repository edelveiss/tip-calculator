const {
  calculateTotalTip,
  calculateTotalAmount,
  calculateAmountWithoutTipsPerPerson,
  calculateTipPerPerson,
  calculateTotalAmountPerPerson,
} = require("../../utils.js");

test("truth is truth", () => {
  expect(true).toBe(true);
});

describe("arithmetic functions", () => {
  describe("calculates tips, total tips, total amount", () => {
    it("should return total tips", () => {
      expect(calculateTotalTip(20, 10)).toBe("2.00");
    });
    it("should return total amount", () => {
      expect(calculateTotalAmount(20, 10)).toBe(22);
    });
    it("should return amount without tips per person", () => {
      expect(calculateAmountWithoutTipsPerPerson(20, 10, 2)).toBe(10);
    });
    it("should return tips per person", () => {
      expect(calculateTipPerPerson(20, 10, 2)).toBe(1);
    });
    it("should return total amount per person", () => {
      expect(calculateTotalAmountPerPerson(20, 10, 2)).toBe(11);
    });
  });
});
