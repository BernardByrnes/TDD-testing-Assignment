const { expect } = require("chai");
const multiply = require("../multiply");

describe("multiply", function () {
  it("should return 1 when multiplying 1 and 1", function () {
    expect(multiply(1, 1)).to.equal(1);
  });
  it("should return 4 when multiplying 2 and 2", function () {
    expect(multiply(2, 2)).to.equal(4);
  });
  it("should return 9 when multiplying 3 and 3", function () {
    expect(multiply(3, 3)).to.equal(9);
  });
  it("should return 16 when multiplying 4 and 4", function () {
    expect(multiply(4, 4)).to.equal(16);
  });
  it("should return 64 when multiplying 8 and 8", function () {
    expect(multiply(8, 8)).to.equal(64);
  });
});
