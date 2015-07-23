/*eslint-disable */
jest.dontMock("../barelyKnowerBot");

describe("getMatches", function() {
  it("finds matches", function() {
    getMatches = require("../barelyKnowerBot").getMatches

    expectedResult = ["boer"]

    expect(getMatches("boer")).toEqual(expectedResult);
  });
});
